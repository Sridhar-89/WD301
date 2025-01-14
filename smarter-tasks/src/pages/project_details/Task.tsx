// import React, { forwardRef } from "react";
import { Draggable } from "react-beautiful-dnd";
import { TaskDetails } from "../../context/task/types";
import React, { forwardRef, useContext } from "react";
import { useParams } from "react-router-dom";
import { useTasksDispatch } from "../../context/task/context";
import { deleteTask } from "../../context/task/actions";
import "./TaskCard.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const formatDateForPicker = (isoDate: string) => {
  const { t, i18n } = useTranslation();
  const dateObj = new Date(isoDate);
  
  let localeObject;
  switch (i18n.language) {
    case 'es':
      localeObject = "es";
      break;
    default:
      localeObject = "en"; 
  }

  const dateFormatter = new Intl.DateTimeFormat(localeObject, {
    day: "numeric",
    month: "long", 
    year: "numeric",
  });

  const formattedDate = dateFormatter.format(dateObj); 
  return formattedDate;
  
};


const Task = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{ task: TaskDetails }>
>((props, ref) => {
  const taskDispatch = useTasksDispatch();
  const { projectID } = useParams();
  const { task } = props;
  const { t }=useTranslation();
  return (
    <div ref={ref} {...props} className="m-2 flex">
      <Link
        className="TaskItem w-full shadow-md border border-slate-100 bg-white"
        to={`tasks/${task.id}`}
      >
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div>
            <h2 className="text-base font-bold my-1">{t(task.title)}</h2>
            <p className="text-sm text-slate-500">
            {formatDateForPicker(task.dueDate)}
            </p>
            <p className="text-sm text-slate-500">
              {t('Description:')} {t(task.description)}
            </p>
          </div>
          <button
            className="deleteTaskButton cursor-pointer h-10 w-15 rounded-full my-5 mr-5"
            onClick={(event) => {
              event.preventDefault();
              deleteTask(taskDispatch, projectID ?? "", task);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 fill-red-200 hover:fill-red-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>
          </button>
        </div>
        <div>
          <h2 className="text-base font-bold my-1">{t(task.title)}</h2>
          <p className="text-sm text-slate-500">
          {formatDateForPicker(task.dueDate)}
          </p>
          <p className="text-sm text-slate-500">
            {t("Description:")} {t(task.description)}
          </p>
          <p className="text-sm text-slate-500">
            {t("Assignee:")} {t(task.assignedUserName ?? "-")}
          </p>
        </div>
      </Link>
    </div>
  );
});

const Container = (
  props: React.PropsWithChildren<{
    task: TaskDetails;
    index: number;
  }>
) => {
  return (
    <Draggable index={props.index} draggableId={`${props.task.id}`}>
      {(provided) => (
        <Task
          task={props.task}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        />
      )}
    </Draggable>
  );
};

export default Container;
