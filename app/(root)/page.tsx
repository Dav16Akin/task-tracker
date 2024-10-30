import { fetchTasks } from "@/lib/actions/task.action";
import AddTask from "../components/forms/AddTask";
import Tasks from "../components/shared/Tasks";
import Banner from "../components/shared/Banner";
import { AnimatePresence } from "framer-motion";

export default async function Home() {
  
  const result = await fetchTasks();

  return (
    <>
      <div className="flex flex-col  ">
        <Banner />

        <section className="flex justify-center max-md:flex-col mt-4 max-md:justify-center max-md:items-center gap-8 items-start mx-14 ">
          <div className="border bg-white/10 border-gray-500/20 p-10 rounded-3xl flex items-center justify-center">
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
                  <AnimatePresence>
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
                  </AnimatePresence>
                </>
              )}
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
