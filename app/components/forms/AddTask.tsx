"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { taskValidation, TTaskValidation } from "@/lib/types/types";
import { createTask } from "@/lib/actions/task.action";
import { usePathname } from "next/navigation";

const AddTask = () => {
  const pathname = usePathname();

  const form = useForm<TTaskValidation>({
    resolver: zodResolver(taskValidation),
    defaultValues: {
      task: "",
      important: false,
    },
  });

  const onSubmit = async (data: TTaskValidation) => {
    await createTask({
      task: data.task,
      important: data.important,
      path: pathname,
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <FormField
          control={form.control}
          name="task"
          rules={{
            required: "Task is required",
            minLength: {
              value: 5,
              message: "Task must be at least 5 characters long",
            },
          }}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>📋 What’s your task?</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="bg-black  border-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-0 "
                  placeholder="Add your task here... 📝"
                  {...field}
                />
              </FormControl>
              {form.formState.errors.task && (
                <FormMessage className="text-red-600">
                  {form.formState.errors.task.message}
                </FormMessage>
              )}
              <FormDescription>
                Write down what you need to do today!
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="important"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-yellow-200 p-4 shadow">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>⚡ Is this urgent?</FormLabel>
                <FormDescription>
                  Mark it as a priority if it’s a must-do task! 🔥
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <Button
          disabled={form.formState.isSubmitting}
          type="submit"
          className="cursor-pointer"
        >
          🚀 Add Task
        </Button>
      </form>
    </Form>
  );
};

export default AddTask;
