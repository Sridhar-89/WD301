import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskCard from './TaskCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    

<div>
      <div className="bg-white-500 p-4">
        <h2 className="text-black text-2xl font-bold mb-2">Smarter Tasks</h2>
        <p className="text-black">
          <strong>Project:</strong> <span>Graduation Final Year project (Revamp College Website)</span>
        </p>
      </div>

      <div className="flex">
        <div className="w-1/2 border border-white-10 rounded-xl p-8 mr-4">
        <h2 className="text-black text-xl font-bold mb-2">Pending</h2>
        <TaskCard title="Buid the website with static content" dueon="10th April" assignee="Rohit S"/>
        <TaskCard title="Add a Blog" dueon="22nd March" assignee="Rohit M"/> 
        
        <div className="button">
        <button className=" hover:bg-white-600 text-black font-bold py-2 px-4 rounded ">
          <p>
          + New Task
          </p>
        </button>
        </div>
        
        </div>
        <div className="w-1/2 border border-white-10 rounded-xl p-8 ml-4">
          <h2 className="text-black text-xl font-bold mb-2">Done</h2>
          <TaskCard title="Design the mockup" completed="10th April" assignee="Rohit M"/>
        <TaskCard title="Get the approval from principal" completed="20th April" assignee="Ajay S"/>
         
        </div>
      </div>
    </div>

        
      
    
  )
}


export default App
