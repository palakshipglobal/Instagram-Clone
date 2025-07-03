import { Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between shadow-sm px-20 py-5">
      <Instagram className="w-6 h-6 text-pink-600" />
      <div className="flex items-center gap-5">
        <p onClick={() => navigate("/signup")} className="cursor-pointer">
          SignUp
        </p>
        <p onClick={() => navigate("/signin")} className="cursor-pointer">
          SignIn
        </p>
        <p onClick={() => navigate("/profile")} className="cursor-pointer">
          Profile
        </p>
      </div>
    </div>
  );
}

export default Navbar;
