import React from "react";
import SingleUser from "../components/SingleUser";
import { useFetchSingleUser } from "../hooks/useFetchSingleUser";
import { useParams } from "react-router-dom";
import type { ITodo } from "../interfaces/User.interface";

const SingleUserPage: React.FC = () => {
  const params = useParams();
  const { data, error, isLoading } = useFetchSingleUser(Number(params.id));

  const { id, description, createdAt, isCompleted, title } =
    data || ({} as ITodo);

  if (error) return <h3>error.message</h3>;

  if (isLoading) return <div>Loading..</div>;

  return (
    <div>
      <SingleUser
        id={id}
        description={description}
        isCompleted={isCompleted}
        createdAt={createdAt}
        title={title}
      />
    </div>
  );
};

export default SingleUserPage;
