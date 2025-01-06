"use client";

import { useAnimate, usePresence } from "framer-motion";
import React, { useEffect } from "react";
import { FiTrash2 } from "react-icons/fi";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "@/state/Features/taskSlice";
import { RootState } from "@/state/store";

interface Props {
  id: string;
  task: string;
  important: boolean;
}

const Todo = ({ id, task, important }: Props) => {
  const dispatch = useDispatch();
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  const taskList = useSelector((state: RootState) => state.tasks.tasklist);

  const removeTaskFromList = () => {
    dispatch(removeTask({ taskList, itemToRemove: { id, task, important } }));
  };

  useEffect(() => {
    if (!isPresent) {
      const exitAnimation = async () => {
        animate(
          "p",
          {
            color: important ? "text-red-600" : "#fca5a5",
          },
          {
            ease: "easeIn",
            duration: 0.125,
          }
        );
        await animate(
          scope.current,
          {
            scale: 1.025,
          },
          {
            ease: "easeIn",
            duration: 0.125,
          }
        );

        await animate(
          scope.current,
          {
            opacity: 0,
            x: important ? 24 : -24,
          },
          {
            delay: 0.75,
          }
        );
        safeToRemove();
      };

      exitAnimation();
    }
  }, [isPresent]);

  return (
    <motion.div
      ref={scope}
      layout
      className={`relative flex w-full items-center gap-3 rounded border border-zinc-700  p-3`}
    >
      <p
        className={`text-white transition-colors ${
          important && "bg-clip-text text-transparent bg-gradient-to-tl from-yellow-800 via-red-600 to-yellow-400"
        }`}
      >
        {task}
      </p>
      <div className="ml-auto flex gap-1.5">
        <button
          onClick={() => removeTaskFromList()}
          className="rounded bg-red-300/20 px-1.5 py-1 text-xs text-red-300 transition-colors hover:bg-red-600 hover:text-red-200"
        >
          <FiTrash2 />
        </button>
      </div>
    </motion.div>
  );
};

export default Todo;
