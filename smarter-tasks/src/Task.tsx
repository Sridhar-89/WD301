// // import { TaskItem } from "./types";
// import "./TaskCard.css";
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
// import "./TaskCard.css";
// import { TaskItem } from "./types";

// interface TaskProps {
//   item: TaskItem;
//   removeTask: (task: TaskItem) => void;
// }
// const Task = (props: TaskProps) => {
//   const { item, removeTask } = props;
//   if (!item) {
//     return null; // or return a placeholder, error message, or handle it in another way
//   }
//   return (
//     <div className="TaskItem shadow-md border border-slate-100">
//       <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
//         <div>
//           <a href={`/tasks/${item.id || ""}`}>
//             <h2 className="text-base font-bold my-1">{item.todoTitle}</h2>
//           </a>
//           <p className="text-sm text-slate-500">{item.todoDueDate}</p>
//           <p className="text-sm text-slate-500">
//             Description: {item.todoDescription}
//           </p>
//         </div>

//         <button className="deleteTaskButton cursor-pointer flex items-center justify-center h-4 w-4 rounded-full my-5 mr-5"
//           onClick={() => removeTask(item)}>
//           X
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Task;
// interface TaskItem {
//   id: number;
//   todoTitle: string;
//   todoDescription: string;
//   todoDueDate: string;
//   removeTask: (titleid: number) => void;
// }


// const Task = (props: TaskItem) => {
//   return (
//     <div className="TaskItem shadow-md border border-slate-100">
//       <li>
//       <a href={`/tasks/${props.id || ""}`}>
//         <h3 className="text-base font-bold my-1">{props.todoTitle}</h3>
//         </a>
//         <p className="text-sm text-slate-500">Due Date: {props.todoDueDate}</p>
//         <p className="text-sm text-slate-500">
//           Description: {props.todoDescription}
//         </p>
//         <button
//           className="deleteTaskButton"
//           onClick={() => props.removeTask(props.id)}
//         >
//           Delete
//         </button>
//       </li>
//     </div>
//   );
// };

// export default Task;
import React from 'react';
import { Link } from 'react-router-dom';

interface TaskItemProps {
  id: string;
  todoTitle: string;
  todoDescription: string;
  todoDueDate: string;
  removeTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = (props) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <li>
        <Link to={`/tasks/${props.id.toString() || ""}`}>
          <h3 className="text-base font-bold my-1">{props.todoTitle}</h3>
        </Link>
        <p className="text-sm text-slate-500">Due Date: {props.todoDueDate}</p>
        <p className="text-sm text-slate-500">
          Description: {props.todoDescription}
        </p>
        <button
          className="deleteTaskButton"
          onClick={() => props.removeTask(props.id.toString())}
        >
          Delete
        </button>
      </li>
    </div>
  );
};

export default TaskItem;


