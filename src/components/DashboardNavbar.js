import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DashboardNavbar({ name }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="sticky top-0 flex items-center justify-between px-4 py-3 navbar bg-glass md:px-6 md:py-4">
      <div className="flex items-center gap-2">
        <div className="logo w-[64px] md:w-[72px]">
          <img className="w-full" src="../logo.png" alt="" />{" "}
        </div>{" "}
        <span className="text-xl font-bold sp md:text-3xl">Survey</span>
      </div>
      <div className="flex items-center gap-3 info md:gap-4">
        <div className="p-icon w-[24px] md:w-[32px] lg:w-[32px]">
          <img className="w-full cursor-pointer" src="../user.png" alt="" />
        </div>{" "}
        <div className={`text-sm`}>
          {" "}
          <span className={`text-sm`}>Hi</span>,{" "}
          <span className="font-medium name">{name}</span>{" "}
        </div>{" "}
        <div
          className="w-[20px] md:w-[24px] cursor-pointer "
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <img className="w-full" src="../down-chevron.png" alt="" />
        </div>
        <div
          className={`${
            toggleMenu ? "" : "hidden"
          } bg-glass rounded py-8 px-7 absolute top-[100px] right-4 bd`}
        >
          <button
            onClick={Logout}
            className={`text-sm mt-3 rounded bg-teal-600 py-3 px-5 text-white `}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardNavbar;
