import { ChangeEvent, useState } from "react";

const ImageUpload = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <label
        htmlFor="image-upload"
        className="relative w-[12.5rem] h-[12.5rem] bg-white rounded-[1.25rem] flex items-center justify-center cursor-pointer shadow-[0_0_12px_0_rgba(0,0,0,0.25)]"
      >
        {image ? (
          <img
            src={image}
            alt="Uploaded"
            className="w-full h-full object-cover rounded-[1.25rem] shadow-[0_0_12.316px_0_rgba(0,0,0,0.25)]"
          />
        ) : (
          <span className="text-lg font-semibold text-gray-900">Photo</span>
        )}
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
      </label>
    </div>
  );
}

export default ImageUpload;