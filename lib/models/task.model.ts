import mongoose from "mongoose";
const { v4: uuidv4 } = require("uuid");

const taskSchema = new mongoose.Schema({
  taskId: { type: String, default: uuidv4 },
  task: { type: String, required: true },
  important: { type: Boolean, default: false },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

export default Task;
