import React from "react";
import BadgeGen from "./BadgeGen";
import { useNavigate } from "react-router-dom";

export default function Card({ title, tasks, icon, status }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/board")}
      className="flex min-h-[200px] flex-col gap-3 rounded-3xl border border-[#CCC7C0] bg-[#DFD9D1] p-4 px-6"
    >
      <div className="flex w-full items-start justify-between">
        <h3 className="max-w-[85%] text-left text-xl font-semibold">{title}</h3>
        {icon}
      </div>

      <div className="ml-2 flex flex-col">
        <h4 style={{ fontSize: "18px" }} className="font-medium text-[#595754]">
          Upcoming Tasks
        </h4>
        <div className="ml-2 mt-2 flex flex-col gap-1 border-l-2 border-dashed border-[#595754] border-opacity-30 pl-4">
          {tasks.map((task, index) => (
            <div key={index} className="flex items-center gap-3">
              <p className="text-sm font-medium text-black">{task.name}</p>
              <BadgeGen type={task.priority.toLowerCase()} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-4 text-xs font-medium">
        <p>
          Pending:{" "}
          <span className="font-semibold text-[#EC5454]">{status.pending}</span>
        </p>
        <p>
          Review:{" "}
          <span className="font-semibold text-[#EF8742]">{status.review}</span>
        </p>
        <p>
          Completed:{" "}
          <span className="font-semibold text-[#56A630]">
            {status.completed}
          </span>
        </p>
      </div>
    </div>
  );
}
