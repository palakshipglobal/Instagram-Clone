import { Instagram } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Navbar() {
  const navigate = useNavigate()
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white shadow-sm md:px-20">
      <Instagram
        className="w-6 h-6 text-pink-600 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <div className="flex items-center gap-4 text-sm md:gap-6 md:text-base">
        <p
          onClick={() => navigate("/signup")}
          className="cursor-pointer hover:text-pink-600"
        >
          SignUp
        </p>
        <p
          onClick={() => navigate("/signin")}
          className="cursor-pointer hover:text-pink-600"
        >
          SignIn
        </p>
        <p
          onClick={() => navigate("/profile")}
          className="cursor-pointer hover:text-pink-600"
        >
          Profile
        </p>
        <p
          onClick={() => navigate("/createPost")}
          className="cursor-pointer hover:text-pink-600"
        >
          AddPost
        </p>
      </div>
    </div>
  )
}

export default Navbar
