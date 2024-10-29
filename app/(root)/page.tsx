import { fetchTasks } from "@/lib/actions/task.action";
import AddTask from "../components/forms/AddTask";
import Tasks from "../components/shared/Tasks";

export default async function Home() {
  const result = await fetchTasks();

  return (
    <section className="flex max-md:flex-col max-md:justify-center max-md:items-center gap-8 items-start ">
      <div className="border bg-white/10 border-gray-500/20 p-10 rounded-3xl flex flex-1 items-center justify-center">
        <AddTask />
      </div>

      <section className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <div className="text-white bg-zinc-500/50 rounded-full px-6 py-2">
            <p>Today</p>
          </div>
          <div>
            {new Date().toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",  
            })}
          </div>
        </div>

        <div className=" bg-white/10 border border-gray-500/20 p-6 max-md:mb-20 rounded-3xl">
          {result?.length === 0 ? (
            <p> No Tasks Here yet</p>
          ) : (
            <>
              {result?.map((data) => {
                return (
                  <Tasks
                    key={data._id}
                    id={data._id.toString()}
                    task={data.task}
                    createdAt={data.createdAt}
                    important={data.important}
                  />
                );
              })}
            </>
          )}
        </div>
      </section>
    </section>
  );
}
