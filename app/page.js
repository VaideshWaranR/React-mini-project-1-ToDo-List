"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const [task, settask] = useState([]);
  const [title, settitle] = useState("");
  const [des, setdes] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    settask([...task, { title, des }]);
    settitle("");
    setdes("");
    console.log(task);
  };
  const deleteHandler = (i) => {
    let replica = [...task];
    replica.splice(i, 1);
    settask(replica);
    toast.success('Congratulations ,Task Completed', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };
  let renderTask = (
    <h2 className="font-semibold text-xl text-center">No task Available</h2>
  );
  if (task.length > 0) {
    renderTask = task.map((t, i) => {
      console.log(i, t.title);
      return (
        <li
          key={i}
          className=" rounded-md p-3 flex items-center justify-between mb-5 bg-white "
        >
          <div className="flex items-center justify-between w-2/3">
            <h3 className="  text-xl font-bold">{t.title}</h3>
            <h3 className=" text-l font-semibold">{t.des}</h3>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className=" border-2 border-black px-1 py-1 rounded-[50%] cursor-pointer flex items-center justify-center bg-white text-red-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </li>
      );
    });
  }
  return (
    <div className="w-[55%] h-screen mx-auto bg-gradient-to-t from-purple-900 to-purple-950">
      <h1 className="text-center font-extralight px-4 py-4 text-5xl text-white">
        My To-Do List
      </h1>
      <form
        class=" px-4 py-4 flex  justify-evenly sm:flex-col sm:h-[30%] md:h-[10%] md:flex-row"
        onSubmit={submitHandler}
      >
        <input
          className="py-2 px-2 rounded-md border-2 border-zinc-800 text-black bg-zinc-200"
          type="text"
          placeholder="Enter your tasks here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          className="py-2 px-2 rounded-md border-2 border-zinc-800 bg-zinc-200 text-black"
          type="text"
          placeholder="Enter your description here"
          value={des}
          onChange={(e) => {
            setdes(e.target.value);
          }}
        />
        <button className=" hover:bg-white hover:text-purple-500 rounded-[2.5rem] bg-purple-500 text-white text-sm font-bold px-4 py-2">
          Add Task
        </button>
      </form>
      <div className="mt-5 p-8 bg-zinc-200 w-[95%] mx-auto rounded-lg">
        <ul>{renderTask}</ul>
      </div>
      <div >
        <ToastContainer />
      </div>
    </div>
  );
};

export default page;
