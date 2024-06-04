import React from "react";
import "./task.css";

interface TaskProps {
  //jake
  /**
   * Is this task completed?
   */
  completed?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string; //jake
  /**
   * Task contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Task = ({
  completed,
  backgroundColor,
  label,
  onClick,
  ...props
}: TaskProps) => {
  const mode = completed
    ? ["storybook-task--complete", "task-box-complete"]
    : ["storybook-task--incomplete", "task-box-incomplete"];
  return (
    <div
      className={["storybook-task", mode[0]].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      <div className={mode[1]}></div>
      <div className="textcontainer">
        <div className="text0">Sweep the Kitchen</div>
        <div className="text1">Get under the cabinets, do a good job</div>
      </div>
    </div>
  );
};
