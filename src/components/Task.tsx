import React, { useState } from "react";
import "./task.css";

interface TaskProps {
  title: string;

  description: string;
  /**
   * Is this task completed?
   */

  /**
   * What background color to use
   */
  backgroundColor?: string; //jake
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Task = ({
  backgroundColor,
  title,
  description,
  onClick,
  ...props
}: TaskProps) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const mode = toggle
    ? ["storybook-task--complete", "task-box-complete"]
    : ["storybook-task--incomplete", "task-box-incomplete"];
  return (
    <div
      className={["storybook-task", mode[0]].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      <button className={mode[1]} onClick={() => setToggle(!toggle)}></button>
      <div className="textcontainer">
        <div className="text0">{title}</div>
        <div className="text1">{description}</div>
      </div>
    </div>
  );
};
