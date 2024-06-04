import "./task.css";

/**
 * Primary UI component for user interaction
 */
export const Task = ({ title: string, description, complete, ...props }) => {
  const mode = complete
    ? ["storybook-task--complete", "task-box-complete"]
    : ["storybook-task--incomplete", "task-box-incomplete"];
  return (
    <div className={["storybook-task", mode[0]].join(" ")} {...props}>
      <button className={mode[1]}></button>
      <div className="textcontainer">
        <div className="text0">{title}</div>
        <div className="text1">{description}</div>
      </div>
    </div>
  );
};
