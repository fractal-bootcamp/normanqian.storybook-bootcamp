import React from "react";
import { Task } from "./Task";
import "./taskList.css";

interface Task {
  title: string;
  description: string;
}

const fakeTasks: Task[] = [
  { title: "cleaning", description: "clean floor" },
  { title: "cleaning", description: "clean floor" },
  { title: "cleaning", description: "clean floor" },
  { title: "cleaning", description: "clean floor" },
];

const TaskList = () => {
  return (
    <div className="taskContainer">
      {fakeTasks.map((task) => {
        return <Task title={task.title} description={task.description} />;
      })}
    </div>
  );
};

export default TaskList;
