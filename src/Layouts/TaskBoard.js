import { Footer, Tabs } from "flowbite-react";
import React from "react";
import Menubar from "../Pages/Shared/Menubar";
import AddTask from "../Pages/Taskboard/AddTask/AddTask";
import MyTasks from "../Pages/Taskboard/MyTasks/MyTasks";
import CompletedTasks from "../Pages/Taskboard/CompletedTasks/CompletedTasks";
import GetStarted from "../Pages/Taskboard/GetStarted/GetStarted";

const TaskBoard = () => {
  return (
    <div>
      <Menubar></Menubar>
      <div className="container mx-auto mt-14 mb-96">
        <Tabs.Group aria-label="Tabs with underline" style="underline">
          <Tabs.Item title="Get Started">
            <GetStarted></GetStarted>
          </Tabs.Item>
          <Tabs.Item active={true} title="Add Tasks">
            <AddTask></AddTask>
          </Tabs.Item>
          <Tabs.Item title="My Tasks">
            <MyTasks></MyTasks>
          </Tabs.Item>
          <Tabs.Item title="Completed Tasks">
            <CompletedTasks></CompletedTasks>
          </Tabs.Item>
          <Tabs.Item title="Teams">Coming Soon</Tabs.Item>
          <Tabs.Item title="Notes">Coming Soon</Tabs.Item>
        </Tabs.Group>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default TaskBoard;
