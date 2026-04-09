import React from "react";
import useFetchUsers from "../hooks/useFetchUsers";
import UsersList from "../components/UsersList";

const UsersListPage: React.FC = () => {
  const { data: users, error, isLoading } = useFetchUsers();

  if (error) return <h3>error.message</h3>;

  if (isLoading) return <div>Loading..</div>;

  return (
    <div>
      <h1 className="font-bold mb-5 text-2xl">All users</h1>
      <UsersList users={users} />
    </div>
  );
};

export default UsersListPage;
