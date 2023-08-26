import React from "react";
import { TaskItem } from "./types";
import "./TaskCard.css";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  todoTitle: string;
  todoDescription:string;
  todoDueDate:string;

}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      todoTitle: this.state.todoTitle,
      
      todoDueDate:this.state.todoDueDate,
      todoDescription:this.state.todoDescription,
    };
    this.props.addTask(newTask);
    this.setState({ todoTitle: "" });
    
    this.setState({todoDueDate:""});
    this.setState({todoDescription:""});

  };
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ todoTitle: event.target.value });
    // this.setState({ todoDescription: event.target.value });
    // this.setState({ todoDueDate: event.target.value });


  };
  Duedatechanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    // this.setState({ todoTitle: event.target.value });
    // // this.setState({ todoDescription: event.target.value });
    this.setState({ todoDueDate: event.target.value });


  };
  Descriptionchanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    // this.setState({ todoTitle: event.target.value });
    this.setState({ todoDescription: event.target.value });
    // this.setState({ todoDueDate: event.target.value });


  };
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      todoTitle: "",
      todoDueDate: "",
      todoDescription: "",

    };
  }

  render() {
    return (
      <form onSubmit={this.addTask}>
        <label>Title: </label>
        <input required
          type="text" id="todoTitle"
          value={this.state.todoTitle}
          onChange={this.titleChanged}
        /><br></br>
        <label>Due Date: </label>
        <input required
          type="text" id="todoDueDate"
          value={this.state.todoDueDate}
          onChange={this.Duedatechanged}
        />
        <br></br>
        <label>Description: </label>
        <input
          type="text" id="todoDescription"
          value={this.state.todoDescription}
          onChange={this.Descriptionchanged}
        />
        <br></br>
        <button id="addTaskButton" type="submit">Add item</button>
      </form>
    );
  }
}
export default TaskForm;
