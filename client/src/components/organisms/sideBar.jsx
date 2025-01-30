import { User, Users, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useActiveLink from "../../hooks/useActiveLinks";

const Sidebar = () => {
  const [close, setClose] = useState(false);
  const {activeLink} = useActiveLink();
  //
  const toggleClose = () => {
    setClose(!close);
  };

  return (
    <>
      <aside
        className={`bg-white h-screen shadow-lg relative transition-all duration-300 ease-in-out mr-10 ${
          close ? "w-16" : "w-64"
        }`}
      >
        <button
          onClick={toggleClose}
          className="absolute top-12 -right-4 p-1 rounded-full cursor-pointer transition-colors duration-300 bg-gray-300 text-gray-800"
        >
          <ChevronLeft
            className={`w-5 h-5 transition-transform duration-300 ${
              close ? "rotate-[180deg]" : ""
            }`}
          />
        </button>
        <div className="p-4 border-b">
          <div className="text-2xl font-semibold text-gray-800">
            {close ? "P..." : "Prisma"}
          </div>
        </div>
        <nav className="mt-4">
          <ul className="space-y-2">
            {/* Users */}
            <li>
              <Link
                to="/users"
                className={`flex items-center gap-5 px-4 py-2 rounded-lg relative ${
                  activeLink === "users"
                    ? "bg-gray-200 text-gray-900"
                    : "text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                }`}
              >
                <Users className="w-5 h-5 absolute left-4" />
                <span
                  className={`transition-all duration-300 ease-in-out ml-10 ${
                    close
                      ? "opacity-0 w-0 overflow-hidden"
                      : "opacity-100 w-auto"
                  }`}
                >
                  Users
                </span>
              </Link>
            </li>
            {/* Roles */}
            <li>
              <Link
                to="/roles"
                className={`flex items-center gap-5 px-4 py-2 rounded-lg relative ${
                  activeLink === "roles"
                    ? "bg-gray-200 text-gray-900"
                    : "text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                }`}
              >
                <User className="w-5 h-5 absolute left-4" />
                <span
                  className={`ml-10 ${
                    close
                      ? "opacity-0 w-0 overflow-hidden"
                      : "opacity-100 w-auto"
                  }`}
                >
                  Roles
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
