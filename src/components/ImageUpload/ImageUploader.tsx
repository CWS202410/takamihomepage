import React, { useState } from 'react';

export function ImageUploader() {
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState('');

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();
      setUploadedUrl(data.secure_url);
    } catch (error) {
      console.error('画像のアップロードに失敗しました:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          画像をアップロード
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          disabled={uploading}
          className="mt-1 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-red-50 file:text-red-700
            hover:file:bg-red-100"
        />
      </div>
      
      {uploading && <p className="text-gray-600">アップロード中...</p>}
      
      {uploadedUrl && (
        <div className="space-y-2">
          <p className="text-green-600">アップロード完了！</p>
          <img
            src={uploadedUrl}
            alt="アップロードされた画像"
            className="max-w-md rounded-lg shadow-md"
          />
        </div>
      )}
    </div>
  );
}