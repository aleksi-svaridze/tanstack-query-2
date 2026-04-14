import React from "react";
import SingleTodo from "../components/SingleTodo";
import { useFetchSingleTodo } from "../hooks/useFetchSingleTodo";
import { useParams } from "react-router-dom";
import type { ITodo } from "../interfaces/todo.interface";

const SingleTodoPage: React.FC = () => {
  const params = useParams();
  const { data, error, isLoading } = useFetchSingleTodo(Number(params.id));

  const { id, description, createdAt, isCompleted, title } =
    data || ({} as ITodo);

  if (error) return <h3>error.message</h3>;

  if (isLoading) return <div>Loading..</div>;

  return (
    <div>
      <SingleTodo
        id={id}
        description={description}
        isCompleted={isCompleted}
        createdAt={createdAt}
        title={title}
      />
    </div>
  );
};

export default SingleTodoPage;
