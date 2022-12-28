import {
  Button,
  FileInput,
  Label,
  Select,
  TextInput,
  Tooltip,
} from "flowbite-react";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import useTitle from "../../../Hooks/useTitle";

const AddTask = () => {
  const [selectedTaskDate, setSelectedTaskDate] = useState(new Date());
  useTitle("Add Task")
  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold text-center mt-14 mb-6">
          Add a new task
        </h2>
      </div>
      <form className="pb-56 w-1/2 mx-auto">
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="taskName" value="Task Name" />
          </div>
          <TextInput
            id="taskName"
            type="text"
            placeholder="Enter your task name"
            required={true}
          />
        </div>
        <div className="mb-4 w-full">
          <div>
            <div id="fileUpload">
              <div className="mb-2 block">
                <Label htmlFor="file" value="Task Photo" />
              </div>
              <FileInput id="file" />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="taskName" value="Assign Task Date" />
          </div>
          <Tooltip
            content={
              <DayPicker
                mode="single"
                selected={selectedTaskDate}
                onSelect={setSelectedTaskDate}
              />
            }
            trigger="click"
            placement="bottom"
          >
            <Button color="dark">Assign Date</Button>
          </Tooltip>
        </div>
        <div className="mb-4 w-full">
          <div id="select">
            <div className="mb-2 block">
              <Label htmlFor="countries" value="Set Task Priority" />
            </div>
            <Select id="countries" required={true}>
              <option>Urgent</option>
              <option>Important</option>
              <option>Not Important</option>
            </Select>
          </div>
        </div>
        <Button color="dark" className="w-full">
          ADD TASK
        </Button>
      </form>
    </div>
  );
};

export default AddTask;
