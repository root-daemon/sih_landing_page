import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import Logo from "../components/logo/Logo";
import Notification from "../components/Notification";

export default function PageHeader() {
  const [notification, setNotification] = useState(false);
  const path = window.location.pathname;
  const navigate = useNavigate();

  console.log(path);
  return (
    <header className="flex flex-row items-center justify-between px-12 py-6">
      <Notification notification={notification} />
      <div className="flex flex-row gap-3">
        <Logo />
      </div>
      <div className="absolute left-96 top-7 flex items-center justify-center gap-3 text-sm font-medium">
        {(path === "/dashboard" ||
          path === "/projects" ||
          path === "/board") && (
            <span
              className={`cursor-pointer ${path === "/dashboard" ? "opacity-100" : "opacity-50"}`}
              onClick={() => navigate("/dashboard")}
            >
              Departments
            </span>
          )}{" "}
        {(path === "/projects" ||
          path === "/board") && (
            <>
              <FaArrowRightLong />
              <span
                className={`cursor-pointer ${path === "/projects" ? "opacity-100" : "opacity-50"}`}
                onClick={() => navigate("/projects")}
              >
                Projects
              </span>
            </>
          )}{" "}
        {path === "/board" && (
          <>
            <FaArrowRightLong />{" "}
            <span
              className="cursor-pointer opacity-100"
              onClick={() => navigate("/board")}
            >
              Traffic Management
            </span>
          </>
        )}{" "}
      </div>
      <div
        onClick={() => setNotification(!notification)}
        className="cursor-pointer text-3xl text-black"
      >
        <TbLayoutSidebarRightCollapse
          className={`transition-all duration-100 ${notification ? "mr-96" : "rotate-180"}`}
        />
      </div>
    </header>
  );
}
