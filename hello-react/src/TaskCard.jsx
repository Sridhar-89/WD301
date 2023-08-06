import './TaskCard.css'

const TaskCard = (props) => {
  console.log(props)
  let check;
  if(props.dueon){
    check="Due on :" +props.dueon
  }
  else{
    check="Completed on :" +props.completed
  }
  return (
    <div className='TaskItem'>
      <h2 className="text-xl font-bold">{props.title}</h2>
      <p>{check}</p>
      <p>Assignee : {props.assignee}</p>
    </div>
  )
}


export default TaskCard