"use server";

import { connectToDB } from "../mongoose";
import Task from "../models/task.model";
import { revalidatePath } from "next/cache";

interface Params {
  task: string;
  important: boolean;
  path: string;
}

export async function createTask({ task, important, path }: Params) {
  try {
    connectToDB();

    await Task.create({
      task,
      important,
    });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to create Task : ${error.message}`);
  }
}

export async function fetchTasks() {
  await connectToDB();

  const tasks = await Task.find({});

  return tasks;
}

interface Params {
  id: string,
  path: string
}
export async function deleteTask({id, path}: Params) {
  await connectToDB();
  try {
    const taskToDelete = await Task.findById(id)

    await Task.deleteOne(taskToDelete)

    revalidatePath(path)
    
  } catch (error: any) {
    throw new Error(`Failed to delete Task : ${error.message}`)
  }
}
