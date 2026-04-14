import React, { type MouseEvent } from "react";
import type { ITodo } from "../interfaces/todo.interface";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import useDeleteTodo from "../hooks/useDeleteTodo";

interface ITodoListProps {
  todos: ITodo[] | undefined;
}

const TodoList: React.FC<ITodoListProps> = ({ todos }) => {
  const navigate = useNavigate();
  const { mutate } = useDeleteTodo();

  const handleUpdate = (e: MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation();
    navigate(`/update-todo/${id}`);
  };

  const handleDelete = (e: MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation();
    mutate(id);
  };

  return (
    <ul>
      {todos?.map((todo: ITodo) => (
        <li
          className="border-b py-2 not-last:mb-2 flex items-center justify-between"
          key={todo.id}
        >
          <div className="">
            <p className="font-bold">{todo.title}</p>
          </div>
          <div className="flex items-center gap-x-10">
            <button
              className="py-1 px-3 rounded text-sm bg-gray-300 cursor-pointer transition-all duration-200 hover:text-white hover:bg-gray-600"
              onClick={(e) => handleUpdate(e, todo.id)}
            >
              Update
            </button>
            <button
              className="py-1 px-3 rounded text-sm bg-gray-300 cursor-pointer transition-all duration-200 hover:text-white hover:bg-gray-600"
              onClick={(e) => handleDelete(e, todo.id)}
            >
              Delete
            </button>
            <button
              className="py-1 px-3 rounded flex items-center gap-x-5 text-sm bg-gray-300 cursor-pointer transition-all duration-200 hover:text-white hover:bg-gray-600"
              onClick={() => navigate(`/all-todos/${todo.id}`)}
            >
              View more
              <FaLongArrowAltRight className="text-lg" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
