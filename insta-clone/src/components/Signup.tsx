import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-pink-100 via-white to-blue-100 flex flex-col items-center pt-24 gap-y-3">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm space-y-6">
        {/* Logo/Header */}
        <div className="flex items-center justify-center gap-3">
          <Instagram className="w-6 h-6 text-pink-600" />
          <p className="text-lg font-semibold text-gray-700">
            Sign up to see photos and videos
          </p>
        </div>

        {/* Input fields */}
        <div className="space-y-4">
          <InputField type="email" name="email" placeholder="Email address" />
          <InputField type="text" name="name" placeholder="Full Name" />
          <InputField type="text" name="username" placeholder="Username" />
          <InputField type="password" name="pw" placeholder="Password" />
        </div>

        {/* Terms */}
        <p className="text-xs text-gray-500 text-center">
          By signing up, you agree to our{" "}
          <span className="text-blue-600 font-medium cursor-pointer hover:underline">
            Terms and Conditions
          </span>
        </p>

        {/* Submit Button */}
        <input
          type="submit"
          value="Sign Up"
          className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 cursor-pointer font-semibold transition duration-200"
        />
      </div>
      <p className="text-sm">
        Already have an account?{" "}
        <Link to="/signin">
          <span className="text-pink-500">Sign In</span>
        </Link>
      </p>
    </div>
  );
}

export default Signup;

interface InputFieldProps {
  type: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  );
};
