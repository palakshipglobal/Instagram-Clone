import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Signup from "./components/Signup"
import Signin from "./components/Signin"
import Profile from "./components/Profile"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import CreatePost from "./components/CreatePost"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/createPost" element={<CreatePost />}></Route>
      </Routes>
      <ToastContainer theme="dark" />
    </BrowserRouter>
  )
}

export default App
