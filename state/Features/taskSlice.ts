"use client";

import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TaskItem {
  id: string;
  task: string;
  important: boolean;
  createdAt: string;
}

export interface TaskState {
  tasklist: TaskItem[];
}

const initialState: TaskState = {
  tasklist: [],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTaskListItems: (state, action: PayloadAction<TaskItem[]>) => {
      state.tasklist = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addTask, (state, action) => {
      const { itemToAdd } = action.payload;

      function generateUniqueId() {
        return "_" + Math.random().toString(36).substr(2, 9);
      }

      state.tasklist.push({
        ...itemToAdd,
        id: generateUniqueId(),
        createdAt: new Date(),
      });
    });
    builder.addCase(removeTask, (state, action) => {
      const { itemToRemove } = action.payload;

      const existingItem = state.tasklist.find((item: any) => {
        return item.id === itemToRemove.id;
      });

      if (existingItem) {
        state.tasklist = state.tasklist.filter(
          (item) => item.id !== itemToRemove.id
        );
      }
    });
  },
});

export const addTask = createAction<{
  taskList: any[];
  itemToAdd: any;
}>("tasks/ADD_TASK");

export const removeTask = createAction<{
  taskList: any[];
  itemToRemove: any;
}>("tasks/REMOVE_TASK");

export default taskSlice.reducer;
