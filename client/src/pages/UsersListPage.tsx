import React from "react";
import useFetchTodos from "../hooks/useFetchTodos";
import UsersList from "../components/UsersList";
import CreateNewTodo from "../components/CreateNewTodo";

const UsersListPage: React.FC = () => {
  const { data: todos, error, isLoading } = useFetchTodos();

  console.log(todos);

  if (error) return <h3>{error.message}</h3>;

  if (isLoading) return <div>Loading..</div>;

  return (
    <div>
      <h1 className="font-bold mb-5 text-2xl">All users</h1>
      <CreateNewTodo />
      <UsersList todos={todos} />
    </div>
  );
};

export default UsersListPage;
