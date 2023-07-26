import React, { useEffect, useContext, useState } from "react";
import Taskitem from "./Taskitem";
import userContext from "../context/userContext.js";
import { Navigate } from "react-router";

const Tasks = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const context = useContext(userContext);
  const { tasks, AddTask, isAuthenticated, Serverurl, refresh, setRefresh } =
    context;
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(title, description);
    AddTask(title, description);
  };
  // console.log(tasks.description);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <div className=" flex justify-center items-center flex-col gap-y-4 bg-gradient-to-b from-violet-500 to-fuchsia-500 px-4 py-8 rounded-lg ">
        <h1 className="text-4xl font-semibold text-white">Sign up</h1>
        <div className="flex justify-between items-center">
          <span></span>
          <span></span>
        </div>
        <form
          action=""
          className="flex flex-col gap-y-4"
          onSubmit={submitHandler}
        >
          <div className="flex justify-center items-center flex-col gap-y-4">
            <input
              type="text"
              placeholder="title"
              className="rounded-md pl-2 w-[100%] h-8 outline-none"
              required
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <textarea
              rows="6"
              cols="70"
              placeholder="description"
              className="rounded-md pl-2  outline-none"
              required
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <button
              type="submit"
              className=" mt-4 px-4 py-1 bg-white rounded-full text-violet-500 hover:shadow-lg"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
      <div className="grid mt-8 gap-y-4 grid-cols-4 gap-x-4">
        {tasks.map((task) => (
          <Taskitem
            key={task._id}
            task={task}
            Serverurl={Serverurl}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
