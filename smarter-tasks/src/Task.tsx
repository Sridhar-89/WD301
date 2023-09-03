// import { TaskItem } from "./types";
import "./TaskCard.css";
interface TaskItem {
  id: number;
  todoTitle: string;
  todoDescription: string;
  todoDueDate: string;
  remove: (titleid: number) => void;
}

// interface TaskProp {
//   todoTitle: string;

//   todoDueDate: string;
//   todoDescription: string;
// }
// class Task extends React.Component<TaskProp> {
//   render() {
//     return (
//       <div className="TaskItem shadow-md border border-slate-100">
//         <h2 className="text-base font-bold my-1">{this.props.todoTitle}</h2>
//         <p className="text-sm text-slate-500">
//           Due Date: {this.props.todoDueDate}
//         </p>
//         <p className="text-sm text-slate-500">
//           Description: {this.props.todoDescription}
//         </p>
//       </div>
//     );
//   }
// }
const Task = (props: TaskItem) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <li>
        <h2 className="text-base font-bold my-1">{props.todoTitle}</h2>
        <p className="text-sm text-slate-500">Due Date: {props.todoDueDate}</p>
        <p className="text-sm text-slate-500">
          Description: {props.todoDescription}
        </p>
        <button
          className="deleteTaskButton"
          onClick={() => props.remove(props.id)}
        >
          Delete
        </button>
      </li>
    </div>
  );
};

export default Task;
