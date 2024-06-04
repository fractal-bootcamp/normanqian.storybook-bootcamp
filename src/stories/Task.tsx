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
    ? "storybook-task--complete"
    : "storybook-task--incomplete";
  return (
    <div
      className={["storybook-task", mode].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </div>
  );
};
