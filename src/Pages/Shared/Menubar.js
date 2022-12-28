import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <div class="bg-slate-50">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            class="inline-flex items-center"
          >
            <span class="ml-2 text-xl font-bold tracking-wide text-slate-900 uppercase">
              Taskboarders
            </span>
          </a>
          <ul class="items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide text-slate-900 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/task-board"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide text-slate-900 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Taskboard
              </Link>
            </li>
          </ul>
          <ul class="items-center space-x-8 lg:flex">
            <li>
              <Button color="dark">
                <Link to="/login">LOGIN</Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
