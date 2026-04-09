import React from "react";

interface SingleUsersProps {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const SingleUser: React.FC<SingleUsersProps> = ({
  name,
  username,
  email,
  phone,
  website,
}) => {
  return (
    <div>
      <h1 className="font-bold mb-5 text-2xl">{name}</h1>
      <h2>UserName: {username}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
    </div>
  );
};

export default SingleUser;
