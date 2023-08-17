import './TaskCard.css'

const TaskCard = (props) => {
  
  if(props.dueDate){

    return (
      <>

      <div className='TaskItem'>
        <h2 className="text-xl font-bold px-2 py-2">{props.title}</h2>
        <p className="px-2">Due on: {props.dueDate}</p>
        <p className="px-2">Assignee: {props.assigneeName}</p>
      </div>
      </>
    )
    
  }
  else{

  return (
    <>
    
    <div className='TaskItem'>
      <h2 className="text-xl font-bold px-2 py-2">{props.title}</h2>
      <p className="px-2">Completed on: {props.completedAtDate}</p>
      <p className="px-2">Assignee: {props.assigneeName}</p>
    </div>
    </>
  )
  }
}


export default TaskCard