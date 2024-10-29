"use client";

import React from "react";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { IoIosArrowDropdown } from "react-icons/io";
import { deleteTask } from "@/lib/actions/task.action";
import { usePathname } from "next/navigation";

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

  return (
    <article className="flex gap-4 mt-4 items-center">
      <span className="max-md:w-24">
        <p className="max-md:text-sm">{createdTime}</p>
      </span>

      <div className="">
        <Badge className="font-thin">{task}</Badge>
      </div>
      <div className="max-md:w-36">
        {important ? (
          <Badge className="font-thin" variant="destructive">
            Important 🔥
          </Badge>
        ) : (
          <Badge className="font-thin text-white" variant={"outline"}>
            Low Priority 🐢
          </Badge>
        )}
      </div>

      <div className="flex items-center rounded-sm">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-1">
            <IoIosArrowDropdown className="w-6 h-6 transition-transform duration-300 transform rotate-0 hover:rotate-180" />
            Options
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => console.log("Edit clicked")}>
              Edit 📝
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={async () => {
                try {
                  await deleteTask({ id: id, path: pathname });
                  console.log("Task deleted");
                } catch (error) {
                  console.error("Error deleting task:", error);
                }
              }}
            >
              Delete ❌
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </article>
  );
};

export default Tasks;
