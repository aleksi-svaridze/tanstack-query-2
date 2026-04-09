import React from "react";
import SingleUser from "../components/SingleUser";
import { useFetchSingleUser } from "../hooks/useFetchSingleUser";
import { useParams } from "react-router-dom";
import type { IUser } from "../interfaces/User.interface";

const SingleUserPage: React.FC = () => {
  const params = useParams();
  const { data, error, isLoading } = useFetchSingleUser(Number(params.id));

  const { id, name, username, email, phone, website } = data || ({} as IUser);

  if (error) return <h3>error.message</h3>;

  if (isLoading) return <div>Loading..</div>;

  return (
    <div>
      <SingleUser
        id={id}
        name={name}
        username={username}
        email={email}
        phone={phone}
        website={website}
      />
    </div>
  );
};

export default SingleUserPage;
