import './TaskCard.css'

const TaskCard = (props) => {
  console.log(props)
  let check;
  if(props.dueDate){
    check=props.dueDate
    return (
      <>

      <div className='TaskItem'>
        <h2 className="text-xl font-bold px-2 py-2">{props.title}</h2>
        <p className="px-2">Due on: {check}</p>
        <p className="px-2">Assignee: {props.assigneeName}</p>
      </div>
      </>
    )
    
  }
  else{
    check=props.completedAtDate
  return (
    <>
    
    <div className='TaskItem'>
      <h2 className="text-xl font-bold px-2 py-2">{props.title}</h2>
      <p className="px-2">Completed on: {check}</p>
      <p className="px-2">Assignee: {props.assigneeName}</p>
    </div>
    </>
  )
  }
}


export default TaskCard