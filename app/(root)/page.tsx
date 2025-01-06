import AddTask from "../components/forms/AddTask";
import Banner from "../components/shared/Banner";
import TaskList from "../components/shared/TaskList";

export default async function Home() {
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
              <TaskList />
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
