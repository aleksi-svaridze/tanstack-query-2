import React from "react";
import type { ITodo } from "../interfaces/User.interface";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

interface UsersListProps {
  todos: ITodo[] | undefined;
}

const UsersList: React.FC<UsersListProps> = ({ todos }) => {
  const navigate = useNavigate();
  return (
    <ul>
      {todos?.map((todo: ITodo) => (
        <li
          className="border-b py-2 not-last:mb-2 cursor-pointer flex items-center justify-between"
          key={todo.id}
          onClick={() => navigate(`/all-users/${todo.id}`)}
        >
          <p>
            {todo.title} - {todo.createdAt}
          </p>
          <p>{todo.description}</p>
          <FaLongArrowAltRight />
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
