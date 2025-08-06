import { useState } from "react"
import profilePicture from "../assets/profile.jpg"

export default function CreatePost() {
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const handleImageChange = (e: any) => {
    const file = e.target.files[0]
    if (file) {
      setPreviewImage(URL.createObjectURL(file))
    }
  }

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-10 bg-gradient-to-tr from-pink-100 via-white to-blue-100">
      <div className="w-full max-w-lg p-6 space-y-6 bg-white rounded-lg shadow-md">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b">
          <h4 className="text-lg font-semibold">Create New Post</h4>
          <button className="px-4 py-1 text-sm text-white transition bg-blue-500 rounded-md hover:bg-blue-600">
            Share
          </button>
        </div>

        {/* File Input */}
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {/* Image Preview */}
        {previewImage && (
          <div className="w-full h-64 overflow-hidden border rounded-md">
            <img
              src={previewImage}
              alt="Preview"
              className="object-cover w-full h-full"
            />
          </div>
        )}

        {/* Profile + Caption */}
        <div className="flex items-start gap-4">
          <img
            src={profilePicture}
            alt="profile"
            className="object-cover w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <h5 className="font-medium">Palak</h5>
            <textarea
              placeholder="Write a caption..."
              className="w-full p-2 mt-2 text-sm border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-200"
              rows={3}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
