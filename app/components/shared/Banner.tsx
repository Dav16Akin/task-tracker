import Image from "next/image";
import taskImg from "../../public/assets/taskImg.png"

const Banner = () => {
  return (
    <div className="flex flex-row relative items-center mt-4 gap-56 rounded-md justify-between p-8 mx-14 max-md:mx-4 max-md:mt-2 bg-gradient-to-t from-black via-black to-purple-700">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold">Track Your Tasks, Master Your Day!</h1>
        <p className="text-lg mt-2 max-sm:text-sm">Welcome to TaskTracker, the fun and friendly task manager that turns your to-dos into ta-da’s! 
          Organize your life with ease, prioritize what matters, and feel the satisfaction of checking things off. 
          Let's make productivity feel less like work and more like play!</p>
      </div>

      <div className="max-sm:hidden"></div>

      <div className="absolute right-0 max-sm:hidden">
        <Image className="max-sm:hidden" src={taskImg} alt="task image" width={300} height={300}/>
      </div>
    </div>
  );
};

export default Banner;
