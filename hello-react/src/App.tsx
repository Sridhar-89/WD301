import TaskCard from "./TaskCard";
import "./TaskCard.css";

interface due{
  title:string,
  dueDate:string,
  assigneeName:string
}
interface done{
  title:string,
  completedAtDate:string,
  assigneeName:string
}


function App() {
  let pending1:due={
    title:"Build website with static content",
    dueDate:"10th April",
    assigneeName:"Rohit S"
  }
  let pending2:due={
    title:"Add Blog",
    dueDate:"22nd March",
    assigneeName:"Rohit M"
    
  }
  let completed1:done={
    title:"Design the mockup",
    completedAtDate:"10th April",
    assigneeName:"Rohit M"

  }
  let completed2:done={
    title:"Get Approval from principal",
    completedAtDate:"20th April",
    assigneeName:"Ajay S"
    

  }

  
  return (
    <>
      <div className="container-div w-4/5 md:w-3/5 mt-12 mx-auto">
        <h1 className="text-3xl text-gray-600 font-bold my-2">Smarter Task</h1>
        <p className="my-2 text-xl">
          Project: Graduation Final Year Project (Revamp College Website)
        </p>
        <section className="flex flex-row flex-wrap justify-between font-bold mt-4">
          <div className="border-2 border-gray-500 md:w-5/12 rounded-3xl p-4 pb-32 mb-4">
            <h1 className="text-center text-gray-500 text-2xl">pending</h1>
            <TaskCard
             { ...pending1}
            />
            <TaskCard
              { ...pending2}
            />

            <div className="bg-gray-300 p-2 rounded">
              <h3 className="font-semibold text-xl text-gray-500 ">
                + New Task
              </h3>
            </div>
          </div>
          <div className="border-2 border-gray-500 md:w-5/12 rounded-3xl p-4">
            <h1 className="text-center text-gray-500 text-2xl">done</h1>
            <TaskCard
             { ...completed1}
            />
            <TaskCard
             { ...completed2}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;