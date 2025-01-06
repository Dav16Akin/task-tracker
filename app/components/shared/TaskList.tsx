"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import Tasks from "./Tasks";
import { AnimatePresence } from "framer-motion";

const TaskList: React.FC = () => {
  const taskList = useSelector((state: RootState) => state.tasks.tasklist);

  console.log(taskList);
  

  return (
    <>
      {taskList?.length === 0 ? (
        <p> No Tasks Here yet</p>
      ) : (
        <AnimatePresence>
          {taskList?.map((data) => {
            return (
              <Tasks
                key={data.id}
                id={data.id}
                task={data.task}
                createdAt={data.createdAt}
                important={data.important}
              />
            );
          })}
        </AnimatePresence>
      )}
    </>
  );
};

export default TaskList;
