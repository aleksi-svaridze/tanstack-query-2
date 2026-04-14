import React from "react";
import type { SingleTodoProps } from "../interfaces/todo.interface";

const SingleTodo: React.FC<SingleTodoProps> = ({
  id,
  description,
  title,
  isCompleted,
  createdAt,
}) => {
  return (
    <div key={id}>
      <p>Date: {createdAt}</p>
      <p>{title}</p>
      <p>{description}</p>
      <p>{isCompleted ? "Done" : "InProgress"}</p>
    </div>
  );
};

export default SingleTodo;
