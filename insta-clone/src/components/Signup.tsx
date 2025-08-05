import { Instagram } from "lucide-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

function Signup() {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  //Toast Fucntions
  const errorToast = (message: React.ReactNode) => toast.error(message)
  const successToast = (message: React.ReactNode) => toast.success(message)

  const PostData = () => {
    if (!emailRegex.test(email)) {
      errorToast("Please enter a valid email address.")
      return
    } else if (!passwordRegex.test(password)) {
      errorToast(
        "Password must be 8+ characters with uppercase, lowercase, number, and symbol."
      )
      return
    }
    //sending data to server
    fetch("http://localhost:5001/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        userName: userName,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) errorToast(data.error)
        else {
          successToast(data.message)
          navigate("/signin")
        }
      })
  }

  return (
    <div className="flex flex-col items-center min-h-screen pt-24 bg-gradient-to-tr from-pink-100 via-white to-blue-100 gap-y-3">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white shadow-lg rounded-2xl">
        {/* Logo/Header */}
        <div className="flex items-center justify-center gap-3">
          <Instagram className="w-6 h-6 text-pink-600" />
          <p className="text-lg font-semibold text-gray-700">
            Sign up to see photos and videos
          </p>
        </div>

        {/* Input fields */}
        <div className="space-y-4">
          <InputField
            type="email"
            name="email"
            value={email}
            placeholder="Email address"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <InputField
            type="text"
            name="name"
            value={name}
            placeholder="Full Name"
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <InputField
            type="text"
            name="username"
            value={userName}
            placeholder="Username"
            onChange={(e) => {
              setUserName(e.target.value)
            }}
          />
          <InputField
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </div>

        {/* Terms */}
        <p className="text-xs text-center text-gray-500">
          By signing up, you agree to our{" "}
          <span className="font-medium text-blue-600 cursor-pointer hover:underline">
            Terms and Conditions
          </span>
        </p>

        {/* Submit Button */}
        <input
          type="submit"
          value="Sign Up"
          onClick={PostData}
          className="w-full py-2 font-semibold text-white transition duration-200 bg-pink-500 rounded-md cursor-pointer hover:bg-pink-600"
        />
      </div>
      <p className="text-sm">
        Already have an account?{" "}
        <Link to="/signin">
          <span className="text-pink-500">Sign In</span>
        </Link>
      </p>
    </div>
  )
}

export default Signup

interface InputFieldProps {
  type: string
  name: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"
    />
  )
}
