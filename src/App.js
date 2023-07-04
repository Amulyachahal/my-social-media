import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Bookmarks from "./Pages/Bookmarks/Bookmarks";
import Explore from "./Pages/Explore/Explore";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />{" "}
        <Route path="/login" element={<Login />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
