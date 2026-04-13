import React, { type MouseEvent } from "react";
import type { ITodo } from "../interfaces/todo.interface";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import useDeleteTodo from "../hooks/useDeleteTodo";

interface UsersListProps {
  todos: ITodo[] | undefined;
}

const UsersList: React.FC<UsersListProps> = ({ todos }) => {
  const navigate = useNavigate();
  const { mutate } = useDeleteTodo();

  const hendleDelete = (e: MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation();
    mutate(id);
  };

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
          <button onClick={(e) => hendleDelete(e, todo.id)}>Delete</button>
          <FaLongArrowAltRight />
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
