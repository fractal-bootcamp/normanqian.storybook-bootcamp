import { useState } from "react";
import { Task } from "./Task";
import "./taskList.css";

interface Task {
  title: string;
  description: string;
  complete: boolean;
}

const fakeTasks: Task[] = [
  { title: "cleaning", description: "clean floor", complete: false },
  { title: "scrubbing", description: "scrub floor", complete: true },
  { title: "sweeping", description: "sweep floor", complete: false },
  { title: "mopping", description: "mop floor", complete: true },
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

    // setTasks(÷newTasks);
    setTasks(newTasks.sort((b, a) => Number(a.complete) - Number(b.complete)));
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
