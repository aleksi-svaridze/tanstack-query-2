import React from "react";
import AppRouter from "../routes/AppRouter";
import { Link } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <header className="bg-blue-400 py-5 text-white font-bold mb-5">
        <nav className="flex items-center justify-between container mx-auto px-5">
          <Link to={"/"}>Home</Link>
          <Link to={"/all-users"}>All Users</Link>
        </nav>
      </header>

      <AppRouter />
    </>
  );
};

export default Layout;
