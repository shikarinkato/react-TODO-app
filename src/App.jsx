import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useEffect, useContext } from "react";
import userContext from "./context/userContext";
import Profile from "./components/Profile";
import Tasks from "./components/Tasks";

function App() {
  const context = useContext(userContext);
  const { GetmyProfile, refresh, GetallTasks } = context;
  useEffect(() => {
    GetmyProfile();
    GetallTasks();
  }, [refresh]);

  return (
    <>
      <div className=" h-[100vh] w-[100vw]">
        <Router>
          <Navbar />
          <div className="flex justify-center items-center main w-screen">
            <Routes>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Signup />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/" element={<Tasks />}></Route>
            </Routes>
          </div>
        </Router>
        <Toaster />
      </div>
    </>
  );
}

export default App;
