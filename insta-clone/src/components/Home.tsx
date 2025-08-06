import { Heart, MessageCircle } from "lucide-react"
import profilePicture from "../assets/profile.jpg"

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen pt-10 bg-gradient-to-tr from-pink-100 via-white to-blue-100">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md">
        {/* Card Header */}
        <div className="flex items-center gap-4 px-4 py-2.5">
          <img
            src={profilePicture}
            alt="profile"
            className="object-cover w-10 h-10 rounded-full"
          />
          <p className="font-semibold">Palak</p>
        </div>

        {/* Card Image */}
        <div>
          <img
            src={profilePicture}
            alt="post"
            className="object-cover w-full"
          />
        </div>

        {/* Card Content */}
        <div className="p-4 space-y-2">
          <div className="flex items-center gap-2">
            <Heart className="cursor-pointer hover:text-red-500 hover:fill-red-500" />
            <p className="text-sm font-medium">2 likes</p>
          </div>
          <p className="text-sm">
            <span className="mr-1 font-semibold">Palak</span>
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
        </div>

        {/* Comment Input */}
        <div className="flex items-center gap-2 px-4 py-3 border-t">
          <MessageCircle />
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 px-2 py-1 text-sm outline-none"
          />
          <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
            Post
          </button>
        </div>
      </div>
    </div>
  )
}
