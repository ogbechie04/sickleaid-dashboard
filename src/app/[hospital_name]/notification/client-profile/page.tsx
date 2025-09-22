"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { User, Phone, Calendar, Droplet, Ruler, Weight, MapPin, AlertCircle, Loader2, Share, FileText } from "lucide-react";

type NotificationData = {
  _id: string;
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
  __v?: number;
};

const ClientProfile = () => {
  const searchParams = useSearchParams();
  const [notificationData, setNotificationData] = useState<NotificationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const mongoId = searchParams.get('id');
  const patientId = searchParams.get('patientId');

  useEffect(() => {
    const fetchNotificationData = async () => {
      if (!mongoId && !patientId) {
        setError('No ID provided');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Use MongoDB ID if available, fallback to patientId
        const idToUse = mongoId || patientId;
        const response = await fetch(
          `https://sickle-aid-backend.onrender.com/api/auth/notification/${idToUse}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch notification: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.success && data.notification) {
          setNotificationData(data.notification);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (err) {
        console.error('Error fetching notification:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch notification data');
      } finally {
        setLoading(false);
      }
    };

    fetchNotificationData();
  }, [mongoId, patientId]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getBloodTypeColor = (bloodType: string) => {
    const colors = {
      'O+': 'text-red-600 bg-red-50',
      'O-': 'text-red-700 bg-red-100',
      'A+': 'text-blue-600 bg-blue-50',
      'A-': 'text-blue-700 bg-blue-100',
      'B+': 'text-green-600 bg-green-50',
      'B-': 'text-green-700 bg-green-100',
      'AB+': 'text-purple-600 bg-purple-50',
      'AB-': 'text-purple-700 bg-purple-100'
    };
    return colors[bloodType as keyof typeof colors] || 'text-gray-600 bg-gray-50';
  };

  if (loading) {
    return (
      <div className="pl-[2.375rem] pr-10 pt-[2.75rem] pb-8 flex w-full flex-col items-center justify-center min-h-[400px] gap-4">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
        <p className="text-lg text-gray-600">Loading patient data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pl-[2.375rem] pr-10 pt-[2.75rem] pb-8 flex w-full flex-col items-center justify-center min-h-[400px] gap-4">
        <div className="p-4 bg-red-50 rounded-lg border border-red-200 flex items-center gap-3">
          <AlertCircle className="w-6 h-6 text-red-600" />
          <div>
            <p className="font-semibold text-red-800">Error Loading Data</p>
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!notificationData) {
    return (
      <div className="pl-[2.375rem] pr-10 pt-[2.75rem] pb-8 flex w-full flex-col items-center justify-center min-h-[400px]">
        <p className="text-lg text-gray-600">No notification data found</p>
      </div>
    );
  }

  return (
    <div className="pl-[2.375rem] pr-10 pt-[2.75rem] pb-8 flex w-full flex-col gap-[3.625rem]">
      <div className="flex items-center justify-between">
        <p className="text-[1.875rem] font-bold">CLIENT PROFILE</p>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>Last updated: {notificationData.createdAt ? formatDate(notificationData.createdAt) : 'Unknown'}</span>
        </div>
      </div>

      {/* -------- main content -------- */}
      {/* -------- upper half --------- */}
      <div className="flex w-full items-center justify-between gap-[2.875rem]">
        <div className="w-full flex items-center pr-6 gap-4 rounded-[20px] shadow-[0px_0px_16.4px_0px_rgba(0,0,0,0.25)]">
          <div className="w-[200px] h-[200px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-l-[20px] flex items-center justify-center">
            <User className="w-20 h-20 text-blue-600" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#999985] font-bold text-2xl">Patient Data</p>
            <div className="flex flex-col gap-4">
              <p>
                <span className="font-bold text-lg">Name:</span>{" "}
                <span className="text-lg">{notificationData.name}</span>
              </p>
              <p>
                <span className="font-bold text-lg">Contact:</span>{" "}
                <span className="text-lg">{notificationData.contact}</span>
              </p>
              <p>
                <span className="font-bold text-lg">Age:</span>{" "}
                <span className="text-lg">{notificationData.age} years</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="w-full flex flex-col pt-6 pb-3 px-6 items-start justify-between gap-4 rounded-[20px] shadow-[0px_0px_16.4px_0px_rgba(0,0,0,0.25)]">
          <p className="text-[#999985] font-bold text-2xl">Emergency Contact</p>
          <div className="flex flex-col gap-4">
            <p>
              <span className="font-bold text-lg">Name:</span>{" "}
              <span className="text-lg">{notificationData.emrgencyContactName}</span>
            </p>
            <p>
              <span className="font-bold text-lg">Contact:</span>{" "}
              <span className="text-lg">{notificationData.emergencyContactNumber}</span>
            </p>
            <p>
              <span className="font-bold text-lg">Relationship:</span>{" "}
              <span className="text-lg">{notificationData.emergencyContactRelationship}</span>
            </p>
          </div>
        </div>
      </div>

      {/* -------- lower half --------- */}
      <div className="flex items-center justify-between w-full gap-5 h-[27.6875rem]">
        {/* -------- patient details -------- */}
        <div className="flex flex-col gap-[30px] p-6 border rounded-[20px] border-[#332E0E] w-full h-full">
          {/* --------- gender -------- */}
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-gray-600" />
            <p>
              <span className="font-bold text-lg">Gender:</span>{" "}
              <span className="text-lg">{notificationData.gender}</span>
            </p>
          </div>

          {/* --------- blood type -------- */}
          <div className="flex items-center gap-3">
            <Droplet className="w-5 h-5 text-gray-600" />
            <p>
              <span className="font-bold text-lg">Blood Type:</span>{" "}
              <span className={`text-lg px-2 py-1 rounded-lg font-semibold ${getBloodTypeColor(notificationData.bloodType)}`}>
                {notificationData.bloodType}
              </span>
            </p>
          </div>

          {/* --------- allergies -------- */}
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600" />
            <p>
              <span className="font-bold text-lg">Allergies:</span>{" "}
              <span className={`text-lg ${notificationData.allergies && notificationData.allergies !== 'None' ? 'text-amber-700 font-semibold' : ''}`}>
                {notificationData.allergies || 'None'}
              </span>
            </p>
          </div>

          {/* --------- weight -------- */}
          <div className="flex items-center gap-3">
            <Weight className="w-5 h-5 text-gray-600" />
            <p>
              <span className="font-bold text-lg">Weight:</span>{" "}
              <span className="text-lg">{notificationData.weight}</span>
            </p>
          </div>

          {/* --------- height -------- */}
          <div className="flex items-center gap-3">
            <Ruler className="w-5 h-5 text-gray-600" />
            <p>
              <span className="font-bold text-lg">Height:</span>{" "}
              <span className="text-lg">{notificationData.height}</span>
            </p>
          </div>

          {/* --------- patient id -------- */}
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-gray-600" />
            <p>
              <span className="font-bold text-lg">Patient ID:</span>{" "}
              <span className="text-lg font-mono">{notificationData.patientId || 'N/A'}</span>
            </p>
          </div>

          {/* --------- mongo id -------- */}
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-gray-600" />
            <p>
              <span className="font-bold text-lg">Record ID:</span>{" "}
              <span className="text-sm font-mono text-gray-600">{notificationData._id}</span>
            </p>
          </div>

          {/* --------- created date -------- */}
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-gray-600" />
            <p>
              <span className="font-bold text-lg">Alert Created:</span>{" "}
              <span className="text-lg">
                {notificationData.createdAt ? formatDate(notificationData.createdAt) : 'Unknown'}
              </span>
            </p>
          </div>
        </div>

        {/* -------- patient location map -------- */}
        <div className="w-full h-full bg-gray-100 rounded-[20px] flex items-center justify-center">
          <div className="text-center text-gray-500">
            <MapPin className="w-12 h-12 mx-auto mb-4" />
            <p className="text-lg font-semibold">Location Map</p>
            <p className="text-sm">Real-time location tracking</p>
            <p className="text-xs mt-2">Feature coming soon</p>
          </div>
        </div>
      </div>

      {/* -------- buttons -------- */}
      <div className="flex items-center w-full gap-5">
        {/* --------- hmo -------- */}
        <button className="flex items-center justify-center rounded-lg text-white bg-[#332E0E] p-3 text-center font-semibold text-lg w-[18.5rem] gap-2 hover:bg-opacity-90 transition-colors">
          <FileText className="w-5 h-5" />
          HMO Details
        </button>
        {/* --------- share -------- */}
        <button className="flex items-center justify-center rounded-lg text-white bg-[#0B9444] p-3 text-center font-semibold text-lg w-[18.5rem] gap-2 hover:bg-opacity-90 transition-colors">
          <Share className="w-5 h-5" />
          Share Profile
        </button>
      </div>
    </div>
  );
};

export default ClientProfile;