import React, { useState } from "react";
import toast from "react-hot-toast";

const Taskitem = (props) => {
  const { task, Serverurl, setRefresh, refresh } = props;
  const [iscompleted, setIsCompleted] = useState(false);

  const updateHandler = async (id) => {
    try {
      const response = await fetch(`${Serverurl}/tasks/${task._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      setRefresh(!refresh);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const deleteHandler = async (id) => {
    try {
      const response = await fetch(`${Serverurl}/tasks/${task._id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      setRefresh(!refresh);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="flex justify-start items-start flex-col text-white bg-gradient-to-b from-violet-500 to-fuchsia-500 px-3 pb-4 pt-2 w-[15rem] rounded-lg  ">
        <div className="flex justify-end gap-x-2 items-center w-[100%]">
          <input
            type="checkbox"
            className=" h-6 w-6 rounded-md"
            checked={task.isCompleted}
            onChange={() => {
              updateHandler(task._id);
            }}
          />
          <i
            className="material-symbols-outlined  "
            onClick={() => {
              deleteHandler(task._id);
            }}
          >
            delete
          </i>
        </div>
        <div className="flex justify-start w-[100%] my-4">
          <h1 className="text-2xl font-semibold ">{task.title}</h1>
        </div>
        <div className="flex items-start justify-start p-2 text-violet-500 rounded-md bg-white">
          <span>{task.description}</span>
        </div>
      </div>
    </>
  );
};

export default Taskitem;
