"use client";

import React from "react";

import { usePathname } from "next/navigation";
import Todo from "./Todo";
import { deleteTask } from "@/lib/actions/task.action";


interface Props {
  id: string;
  task: string;
  createdAt: string;
  important: boolean;
}

const Tasks = ({ id, task, createdAt, important }: Props) => {
  const pathname = usePathname();
  const date = new Date(createdAt);

  // Format the time string
  const createdTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const removeTask = async () => {
    try {
      await deleteTask({ id: id, path: pathname });
      console.log("Task deleted");
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  }
  

  return (
    <article className="flex gap-4 mt-4 items-center">
      <span className="max-md:w-24">
        <p className="max-md:text-sm">{createdTime}</p>
      </span>

  
      <Todo 
        id={id}
        task={task}
        important={important}
        removeTask={removeTask}
      />
     
    </article>
  );
};

export default Tasks;
