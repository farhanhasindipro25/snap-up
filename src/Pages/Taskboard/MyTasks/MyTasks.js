import { Badge, Dropdown } from "flowbite-react";
import React from "react";
import useTitle from "../../../Hooks/useTitle";

const MyTasks = () => {
  useTitle("My Tasks");
  return (
    <div>
      <h2 className="text-xl font-semibold text-center mt-14 mb-6">
        Farhan Hasin Dipro's Tasks
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-6">
        <div className="w-full p-6 rounded-md bg-slate-50 shadow-lg flex items-center gap-6">
          <img
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
            className="h-36 w-44 rounded-md"
          />
          <div className="">
            <div>
              <h2 className="font-medium mb-2">Task Name</h2>
              <Badge color="info" className="w-3/4 flex justify-center">
                Not Important
              </Badge>
              <p className="text-sm mt-4">Assigned Date: 29/12/2022</p>
            </div>
            <div className="mt-3">
              <Dropdown label="Actions" color="dark" dismissOnClick={false}>
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Mark Complete</Dropdown.Item>
                <Dropdown.Item>Delete</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="w-full p-6 rounded-md bg-slate-50 shadow-lg flex items-center gap-6">
          <img
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
            className="h-36 w-44 rounded-md"
          />
          <div className="">
            <div>
              <h2 className="font-medium mb-2">Task Name</h2>
              <Badge color="info" className="w-3/4 flex justify-center">
                Not Important
              </Badge>
              <p className="text-sm mt-4">Assigned Date: 29/12/2022</p>
            </div>
            <div className="mt-3">
              <Dropdown label="Actions" color="dark" dismissOnClick={false}>
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Mark Complete</Dropdown.Item>
                <Dropdown.Item>Delete</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="w-full p-6 rounded-md bg-slate-50 shadow-lg flex items-center gap-6">
          <div className="">
            <div>
              <h2 className="font-medium mb-2">Task Name</h2>
              <Badge color="info" className="w-3/4 flex justify-center">
                Not Important
              </Badge>
              <p className="text-sm mt-4">Assigned Date: 29/12/2022</p>
            </div>
            <div className="mt-3">
              <Dropdown label="Actions" color="dark" dismissOnClick={false}>
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Mark Complete</Dropdown.Item>
                <Dropdown.Item>Delete</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 shadow-lg rounded-md lg:p-6 md:p-20 sm:p-20 p-20">
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="0.5"
              stroke="currentColor"
              class="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTasks;
