import { useState } from "react";
import { Task } from "./Task";
import "./taskList.css";

const fakeTasks = [
  { title: "cleaning", description: "clean floor", complete: false },
  { title: "cleaning", description: "clean floor", complete: false },
  { title: "cleaning", description: "clean floor", complete: false },
  { title: "cleaning", description: "clean floor", complete: false },
];

const TaskList = () => {
  const [tasks, setTasks] = useState(fakeTasks);

  const updateTask = (index: number) => {
    const oldTask = tasks[index];
    const newTask = { ...oldTask, complete: !oldTask.complete };

    const newTasks = tasks.map((task, idx) => {
      if (idx === index) {
        return newTask;
      }
      return task;
    });

    setTasks(newTasks);
  };

  return (
    <div className="taskContainer">
      {tasks.map((task, idx) => {
        return (
          <Task
            title={task.title}
            description={task.description}
            complete={task.complete}
            onClick={() => updateTask(idx)}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
