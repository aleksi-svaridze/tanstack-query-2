import React from "react";

interface SingleUsersProps {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  createdAt: string;
}

const SingleUser: React.FC<SingleUsersProps> = ({
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

export default SingleUser;
