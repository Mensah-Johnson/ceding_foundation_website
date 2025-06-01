"use client";

import { useState } from "react";
import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";

interface ImageUploadProps {
  onUploadComplete: (url: string) => void;
  currentImage?: string;
  label?: string;
}

export default function ImageUpload({
  onUploadComplete,
  currentImage,
  label = "Image",
}: ImageUploadProps) {
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string>(
    currentImage || ""
  );
  const [isUploading, setIsUploading] = useState(false);

  const handleUploadComplete = (res: any) => {
    if (res && res[0]) {
      const imageUrl = res[0].url;
      setUploadedImageUrl(imageUrl);
      onUploadComplete(imageUrl);
      setIsUploading(false);
    }
  };

  const handleUploadError = (error: Error) => {
    console.error("Upload error:", error);
    let errorMessage = "Upload failed. Please try again.";

    if (error.message.includes("Failed to parse response")) {
      errorMessage =
        "Server configuration error. Please use manual URL input or contact administrator.";
    } else if (error.message.includes("Unauthorized")) {
      errorMessage = "Upload not authorized. Please check configuration.";
    } else if (error.message.includes("File too large")) {
      errorMessage = "File is too large. Maximum size is 4MB.";
    }

    alert(`Upload error: ${errorMessage}`);
    setIsUploading(false);
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>

      {/* Current Image Preview */}
      {uploadedImageUrl && (
        <div className="relative w-32 h-32 border border-gray-300 rounded-lg overflow-hidden">
          <Image
            src={uploadedImageUrl}
            alt="Uploaded image"
            fill
            className="object-cover"
          />
          <button
            type="button"
            onClick={() => {
              setUploadedImageUrl("");
              onUploadComplete("");
            }}
            className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
          >
            ×
          </button>
        </div>
      )}

      {/* Upload Button */}
      {!uploadedImageUrl && (
        <div className="flex flex-col items-start">
          <UploadButton
            endpoint="leaderImageUploader"
            onClientUploadComplete={handleUploadComplete}
            onUploadError={handleUploadError}
            onUploadBegin={() => setIsUploading(true)}
            appearance={{
              button: {
                background: "#4F46E5",
                color: "white",
                fontSize: "14px",
                padding: "8px 16px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
              },
              allowedContent: {
                color: "#6B7280",
                fontSize: "12px",
              },
            }}
          />
          {isUploading && (
            <p className="text-sm text-gray-500 mt-2">Uploading...</p>
          )}
        </div>
      )}

      {/* Manual URL Input as Fallback */}
      <div className="text-sm text-gray-500">
        <details>
          <summary className="cursor-pointer hover:text-gray-700">
            Or enter image URL manually
          </summary>
          <div className="mt-2">
            <input
              type="url"
              placeholder="https://example.com/image.jpg"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              value={uploadedImageUrl}
              onChange={(e) => {
                const url = e.target.value;
                setUploadedImageUrl(url);
                onUploadComplete(url);
              }}
            />
          </div>
        </details>
      </div>
    </div>
  );
}
