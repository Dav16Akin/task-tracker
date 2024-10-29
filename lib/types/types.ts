import * as z from "zod";

export const taskValidation = z.object({
  task: z.string().min(5, "Task must be 5 characters long").max(1000),
  important: z.boolean(),
});

export type TTaskValidation = z.infer<typeof taskValidation>