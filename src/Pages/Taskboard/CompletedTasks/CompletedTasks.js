import { Dropdown } from "flowbite-react";
import React from "react";
import useTitle from "../../../Hooks/useTitle";

const CompletedTasks = () => {
  useTitle("Completed Tasks");
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
              <p className="text-sm mt-4"> Date: 29/12/2022</p>
            </div>
            <div className="mt-3">
              <Dropdown label="Actions" color="dark" dismissOnClick={false}>
                <Dropdown.Item>Mark Incomplete</Dropdown.Item>
                <Dropdown.Item>Delete</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedTasks;
