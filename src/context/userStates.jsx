import toast from "react-hot-toast";
import UserContext from "./userContext";
import { useState } from "react";

const Serverurl = "https://nodejs-todoappbyr.onrender.com/api/v1";

const UserState = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [tasks, setTasks] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const Register = async (name, email, password) => {
    setLoading(true);
    try {
      const response = await fetch(`${Serverurl}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const data = await response.json();
      setRefresh(!refresh);
      toast.success(data.message);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      toast.error("Some Error occurred");
      setIsAuthenticated(false);
      false;
    }
  };

  const Login = async (email, password) => {
    setLoading(true);
    try {
      const response = await fetch(`${Serverurl}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (response.ok) {
        setIsAuthenticated(true);
      }
      const data = await response.json();
      toast.success(data.message);
      setRefresh(!refresh);
      setLoading(false);
    } catch (data) {
      toast.error(error.message);
      setIsAuthenticated(false);
      setLoading(false);
    }
  };

  const Logout = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${Serverurl}/users/logout`, {
        method: "GET",
        credentials: "include",
      });
      const data = response.json();
      toast.success("Log Out Succesfully");
      setRefresh(!refresh);
      setIsAuthenticated(false);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setIsAuthenticated(true);
      setLoading(false);
    }
  };

  const GetmyProfile = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${Serverurl}/users/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      if (response.ok) {
        setIsAuthenticated(true);
        toast.success(data.message);
      }
      setUser(data.user);
      setLoading(false);
    } catch (data) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  const AddTask = async (title, description) => {
    setLoading(true);
    try {
      const response = await fetch(`${Serverurl}/tasks/addtask`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
        credentials: "include",
      });
      const data = await response.json();
      if (response.ok) {
        setIsAuthenticated(true);
      }
      setRefresh(!refresh);
      toast.success(data.message);
      console.log(data);
      setLoading(false);
    } catch (data) {
      toast.error(data.message);
      setLoading(false);
    }
  };

  const GetallTasks = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${Serverurl}/tasks/gettask`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      if (response.ok) {
        setIsAuthenticated(true);
      }
      toast.success(data.message);
      setTasks(data.task);
      setUser(data.user);
      setLoading(false);
    } catch (data) {
      toast.error(data.message);
      setLoading(false);
    }
  };

  const UpdateTask = async () => {
    setLoading(true);
    try {
      console.log(user);
    } catch (data) {
      toast.error(data.message);
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        Register,
        isAuthenticated,
        setIsAuthenticated,
        Login,
        loading,
        setLoading,
        user,
        setUser,
        Logout,
        GetmyProfile,
        refresh,
        GetallTasks,
        AddTask,
        tasks,
        setTasks,
        Serverurl,
        refresh,
        setRefresh,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
