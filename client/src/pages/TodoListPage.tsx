import React from "react";
import useFetchTodos from "../hooks/useFetchTodos";
import TodoList from "../components/TodoList";

const TodoListPage: React.FC = () => {
  const { data: todos, error, isLoading } = useFetchTodos();

  if (error) return <h3>{error.message}</h3>;

  if (isLoading) return <div>Loading..</div>;

  return (
    <div>
      <h1 className="font-bold mb-5 text-2xl">All todos</h1>
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoListPage;
