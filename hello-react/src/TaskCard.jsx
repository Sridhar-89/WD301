import './TaskCard.css'

const TaskCard = (props) => {
  console.log(props)
  let check;
  if(props.dueDate){
    check="Due on :" +props.dueDate
  }
  else{
    check="Completed on :" +props.completedAtDate
  }
  return (
    <div className='TaskItem'>
      <h2 className="text-xl font-bold">{props.title}</h2>
      <p>{check}</p>
      <p>Assignee : {props.assigneeName}</p>
    </div>
  )
}


export default TaskCard