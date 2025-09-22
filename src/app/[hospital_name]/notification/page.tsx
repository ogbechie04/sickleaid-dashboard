"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Bell, User, Calendar, Droplet, Phone, AlertCircle, X, ChevronRight, Clock, UserCheck } from "lucide-react";

type WebhookEvent = {
  name: string;
  contact: string;
  age: string | number;
  emrgencyContactName: string;
  emergencyContactNumber: string | number;
  emergencyContactRelationship: string;
  gender: string;
  bloodType: string;
  allergies: string;
  weight: string;
  height: string;
  patientId?: string;
  createdAt?: string;
  _id?: string;
  __v?: number;
};

export default function Notification() {
  const router = useRouter();
  const [notifications, setNotifications] = useState<WebhookEvent[]>([]);
  const [popup, setPopup] = useState<WebhookEvent | null>(null);

  useEffect(() => {
    const evtSource = new EventSource(
      "https://sickle-aid-backend.onrender.com/api/auth/webhook-stream"
    );
    
    evtSource.onmessage = (e) => {
      if (e.data !== "ping") {
        try {
          const response = JSON.parse(e.data);
          
          // Check if it's the success response format
          if (response.success && response.notification) {
            const payload: WebhookEvent = response.notification;
            setNotifications((prev) => [payload, ...prev]);
            setPopup(payload);
            setTimeout(() => setPopup(null), 5000);
          } else {
            // Handle direct webhook event format
            const payload: WebhookEvent = response;
            setNotifications((prev) => [payload, ...prev]);
            setPopup(payload);
            setTimeout(() => setPopup(null), 5000);
          }
        } catch (err) {
          console.error("Invalid SSE payload:", e.data, err);
        }
      }
    };
    
    evtSource.onerror = (err) => {
      console.error("SSE connection error:", err);
    };
    
    return () => {
      evtSource.close();
    };
  }, []);

  const handleRowClick = (notification: WebhookEvent) => {
    // Use MongoDB _id if available, fallback to patientId
    const id = notification._id || notification.patientId;
    
    if (id) {
      router.push(
        `/[hospital_name]/notification/client-profile?id=${id}&patientId=${notification.patientId || ''}`
      );
    } else {
      console.warn('No ID available for navigation');
    }
  };

  const getBloodTypeColor = (bloodType: string) => {
    const colors = {
      'O+': 'bg-red-100 text-red-800 border-red-200',
      'O-': 'bg-red-50 text-red-900 border-red-300',
      'A+': 'bg-blue-100 text-blue-800 border-blue-200',
      'A-': 'bg-blue-50 text-blue-900 border-blue-300',
      'B+': 'bg-green-100 text-green-800 border-green-200',
      'B-': 'bg-green-50 text-green-900 border-green-300',
      'AB+': 'bg-purple-100 text-purple-800 border-purple-200',
      'AB-': 'bg-purple-50 text-purple-900 border-purple-300'
    };
    return colors[bloodType as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getGenderIcon = (gender: string) => {
    return gender.toLowerCase() === 'female' ? '♀' : '♂';
  };

  const formatTimeAgo = (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Bell className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Emergency Notifications</h1>
                <p className="text-gray-600 mt-1">Real-time patient alerts and updates</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-lg border border-green-200">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-700 font-medium">Live</span>
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
                <span className="text-blue-700 font-medium">{notifications.length} Total Alerts</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Popup */}
      {popup && (
        <div className="fixed top-6 right-6 z-50 transform transition-all duration-300 ease-out">
          <div className="bg-white shadow-2xl rounded-2xl border border-red-200 overflow-hidden w-96">
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-semibold">Emergency Alert</span>
                </div>
                <button 
                  onClick={() => setPopup(null)}
                  className="text-white hover:bg-white hover:bg-opacity-20 p-1 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-900">{popup.name}</h3>
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                <span className="flex items-center space-x-1">
                  <span>{getGenderIcon(popup.gender)}</span>
                  <span>{popup.gender}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{popup.age} years</span>
                </span>
                <span className={`px-2 py-1 rounded-lg text-xs font-medium border ${getBloodTypeColor(popup.bloodType)}`}>
                  {popup.bloodType}
                </span>
              </div>
              {popup.patientId && (
                <div className="mt-3 p-2 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500">Patient ID</p>
                  <p className="font-mono text-sm text-gray-800">{popup.patientId}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {notifications.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
            <div className="p-4 bg-gray-50 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4">
              <Bell className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No notifications yet</h3>
            <p className="text-gray-600">Emergency alerts will appear here in real-time</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
              <h2 className="text-xl font-semibold text-gray-900">Recent Notifications</h2>
              <p className="text-gray-600 mt-1">Click on any notification to view patient details</p>
            </div>
            
            <div className="divide-y divide-gray-100">
              {notifications.map((notification, index) => (
                <div
                  key={notification._id || index}
                  onClick={() => handleRowClick(notification)}
                  className="p-6 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 cursor-pointer transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl group-hover:from-blue-200 group-hover:to-purple-200 transition-colors">
                        <User className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900">{notification.name}</h3>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="flex items-center space-x-1 text-gray-600">
                            <span className="text-lg">{getGenderIcon(notification.gender)}</span>
                            <span className="text-sm">{notification.gender}</span>
                          </span>
                          <span className="flex items-center space-x-1 text-gray-600">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{notification.age} years old</span>
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getBloodTypeColor(notification.bloodType)}`}>
                            <Droplet className="w-3 h-3 inline mr-1" />
                            {notification.bloodType}
                          </span>
                        </div>
                        {notification._id && (
                          <div className="mt-1">
                            <span className="text-xs text-gray-400 font-mono">ID: {notification._id}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        {notification.patientId && (
                          <p className="text-sm font-mono text-gray-600 mb-1">{notification.patientId}</p>
                        )}
                        <div className="flex items-center space-x-1 text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">
                            {notification.createdAt 
                              ? formatTimeAgo(notification.createdAt)
                              : 'Just now'
                            }
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </div>
                  
                  {notification.allergies && notification.allergies !== 'None' && (
                    <div className="mt-3 flex items-center space-x-2 text-amber-700 bg-amber-50 px-3 py-2 rounded-lg border border-amber-200">
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">Allergies: {notification.allergies}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}