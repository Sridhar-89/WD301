import React from "react";
import Task from "../../pages/project_details/Task";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

import { ColumnData, TaskDetails } from "../../context/task/types";
import { Droppable } from "react-beautiful-dnd";
const Container = (props: React.PropsWithChildren) => {
  const { t}=useTranslation();
  // We will use flex to display lists as columns
  return (
    <div className="m-2 border border-gray rounded w-full flex flex-col">
      {props.children}
    </div>
  );
};

// A component to render the title, which will be included as <Title>This is a sample title</Title>
const Title = (props: React.PropsWithChildren) => {
  const { t}=useTranslation();
  return <h3 className="p-2 font-semibold">{(props.children)}</h3>;
};

const TaskList = forwardRef<HTMLDivElement | null, React.PropsWithChildren>(
  (props: React.PropsWithChildren, ref) => {
    return (
      <div ref={ref} className="grow min-h-100 dropArea" {...props}>
        {" "}
        {props.children}
      </div>
    );
  }
);

interface Props {
  column: ColumnData;
  tasks: TaskDetails[];
}

const Column: React.FC<Props> = (props) => {
  const { t}=useTranslation();
  return (
    <Container>
      <Title>{t(props.column.title)}</Title>
      <Droppable droppableId={props.column.id}>
        {(provided) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {props.tasks.map((task, idx) => (
              <Task key={task.id} task={task} index={idx} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
