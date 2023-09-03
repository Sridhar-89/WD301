import Task from "./Task";
import { TaskItem } from "./types";
interface Props {
  tasks: TaskItem[];
  removeTask: (titleid: number) => void;
}
// interface TaskItem {
//   todoTitle: string;
//   todoDescription: string;
//   todoDueDate: string;
// }
// interface State {}
// class TaskList extends React.Component<Props, State> {
//   render() {
//     return this.props.tasks.map((task, idx) => (
//       <Task
//         key={idx}
//         todoTitle={task.todoTitle}
//         todoDueDate={task.todoDueDate}
//         todoDescription={task.todoDescription}
//       />
//     ));
//   }
// }
const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <Task
      key={idx}
      id={task.id}
      todoTitle={task.todoTitle}
      todoDescription={task.todoDescription}
      todoDueDate={task.todoDueDate}
      removeTask={props.removeTask}
    />
  ));
  return <>{list}</>;
};
export default TaskList;
