import React from "react";
import useFetchUsers from "../hooks/useFetchUsers";
import UsersList from "../components/UsersList";

const UsersListPage: React.FC = () => {
  const { data: todos, error, isLoading } = useFetchUsers();

  console.log(todos);

  if (error) return <h3>{error.message}</h3>;

  if (isLoading) return <div>Loading..</div>;

  return (
    <div>
      <h1 className="font-bold mb-5 text-2xl">All users</h1>
      <UsersList todos={todos} />
    </div>
  );
};

export default UsersListPage;
