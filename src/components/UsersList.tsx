import React from "react";
import type { IUser } from "../interfaces/User.interface";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

interface UsersListProps {
  users: IUser[] | undefined;
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  const navigate = useNavigate();
  return (
    <ul>
      {users?.map((user: IUser) => (
        <li
          className="border-b py-2 not-last:mb-2 cursor-pointer flex items-center justify-between"
          key={user.id}
          onClick={() => navigate(`/all-users/${user.id}`)}
        >
          {user.name}
          <FaLongArrowAltRight />
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
