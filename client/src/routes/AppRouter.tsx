import React from "react";
import { Route, Routes } from "react-router-dom";
import TodoListPage from "../pages/TodoListPage";
import SingleTodoPage from "../pages/SingleTodoPage";
import Home from "../pages/Home.page";
import CreateNewTodoPage from "../pages/CreateNewTodoPage";

const AppRouter: React.FC = () => {
  return (
    <div className="container mx-auto px-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-todos" element={<TodoListPage />} />
        <Route path="/all-todos/:id" element={<SingleTodoPage />} />
        <Route path="/create-new-todo" element={<CreateNewTodoPage />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
