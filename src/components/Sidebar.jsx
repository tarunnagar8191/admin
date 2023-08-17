import { Link, useLocation } from "react-router-dom";
import { MdOutlineCategory } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { useState } from "react";

const Sidebar = () => {
  const [isExpended, setExpended] = useState(false);
  const page = useLocation();
  const user = "admin";
  return (
    <div
      className={`${
        isExpended ? "w-full bg-[rgba(0,0,0,0.2)]" : "w-fit"
      } fixed z-20 top-0 left-0 overflow-x-hidden transition-colors duration-100`}
    >
      <div
        onMouseOver={() => setExpended(true)}
        onMouseLeave={() => setExpended(false)}
        className="flex items-center  w-fit h-screen space-x-6"
      >
        <div
          className={`flex flex-col items-center ${
            isExpended ? "w-48" : "w-16"
          } h-full overflow-hidden text-gray-700 bg-white rounded transition-all duration-200 text-clip whitespace-nowrap	`}
        >
          <a className="flex items-center w-full px-3 mt-3" href="/">
            {isExpended ? (
              <span className="text-sm font-bold">
                <img
                                  src="./images/6.png"

                  alt=""
                  className="min-w-fit w-8 h-8 stroke-current"
                />
              </span>
            ) : (
              <img
                // src="./images/6.png"
                alt=""
                className="min-w-fit w-8 h-[32px] stroke-current"
              />
            )}
          </a>
          <div className="w-full px-2">
            <div className="flex flex-col items-center w-full mt-3 border-t border-gray-300">
              <Link
                to={"/"}
                className="cursor-pointer flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-200"
              >
                <svg
                  className="min-w-fit w-6 h-6 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                {isExpended && (
                  <span className="ml-2 text-sm font-medium">Dasboard</span>
                )}
              </Link>
             
             

                <Link
                  to="/subject"
                  className={`${
                    page.pathname === "/course-category" ||
                    page.pathname === "/course-category"
                      ? `bg-gray-300 hover:bg-gray-300`
                      : `hover:bg-gray-200 `
                  } flex items-center w-full h-12 px-3 mt-2  rounded`}
                >
                  <MdOutlineCategory />
                  {isExpended && (
                    <span className="ml-2 text-sm font-medium">
                      Subject
                    </span>
                  )}
                </Link>

              

                         </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
