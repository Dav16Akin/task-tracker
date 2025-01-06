"use client";

import React from "react";

import Todo from "./Todo";


interface Props {
  id: string;
  task: string;
  createdAt: string;
  important: boolean;
}

const Tasks = ({ id, task, createdAt, important }: Props) => {
  const date = new Date(createdAt);

  // Format the time string
  const createdTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  
  return (
    <article className="flex gap-4 mt-4 items-center">
      <span className="max-md:w-24">
        <p className="max-md:text-sm">{createdTime}</p>
      </span>

  
      <Todo 
        id={id}
        task={task}
        important={important}
      />
     
    </article>
  );
};

export default Tasks;
