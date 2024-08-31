import React, { useState } from "react";
import { BsTrello } from "react-icons/bs";
import { FaMapLocation } from "react-icons/fa6";
import Card from "../../components/Card";
import { BiTrafficCone } from "react-icons/bi";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import Notification from "../../components/Notification";

export default function Dashboard() {
  const [notification, setNotification] = useState(false);
  return (
    <main className="h-screen w-screen overflow-hidden bg-[#D6CFC8]">
      <header className="flex flex-row items-center justify-between px-12 py-6">
        <div className="flex flex-row gap-3">
          <img src="assets/img/icobw.svg" alt="e" className="h-8 w-8" />
          <h1 className="text-center text-2xl font-semibold uppercase text-black">
            Coordina
          </h1>
        </div>
        <div className="absolute top-7 left-96 text-sm flex gap-3 items-center font-medium justify-center"><span className="cursor-pointer">Tasks</span></div>
        <div
          onClick={() => setNotification(!notification)}
          className="cursor-pointer text-3xl text-black"
        >
          <TbLayoutSidebarRightCollapse
            className={`transition-all duration-100 ${notification ? "mr-96" : "rotate-180"}`}
          />
        </div>
      </header>
      <Notification notification={notification} />
      <div className="flex h-full w-full flex-row gap-0">
        <div className="flex h-full w-[250px] flex-col gap-3 pl-6 pt-6">
          <button className="flex items-center justify-start gap-3 rounded-l-xl bg-[#EFEAE4] px-4 py-3 text-xl font-medium text-black">
            <BsTrello /> Tasks
          </button>
          <button className="flex items-center justify-start gap-3 px-4 py-3 text-xl font-medium text-black">
            <FaMapLocation /> Map
          </button>
        </div>
        <div className="h-full w-full overflow-auto rounded-tl-3xl bg-gradient-to-br from-[#EFEAE4] to-[#e3d3c7df] p-12 pb-0">
          <h1 className="text-5xl font-semibold">Departments</h1>
          <div className="grid-cols-cards mt-6 grid gap-5">
            <Card
              title="Traffic Management and Transport Department"
              tasks={[
                { name: "Pot holes", priority: "High" },
                { name: "Maintenance work", priority: "Medium" },
                { name: "Cleaning", priority: "Low" },
              ]}
              status={{
                completed: 2,
                pending: 1,
                review: 12,
              }}
              icon={<BiTrafficCone className="text-2xl" />}
            />

            <Card
              title="Traffic Management and Transport Department"
              tasks={[
                { name: "Pot holes", priority: "High" },
                { name: "Maintenance work", priority: "Medium" },
                { name: "Cleaning", priority: "Low" },
              ]}
              status={{
                completed: 2,
                pending: 1,
                review: 12,
              }}
              icon={<BiTrafficCone className="text-2xl" />}
            />

            <Card
              title="Traffic Management and Transport Department"
              tasks={[
                { name: "Pot holes", priority: "High" },
                { name: "Maintenance work", priority: "Medium" },
                { name: "Cleaning", priority: "Low" },
              ]}
              status={{
                completed: 2,
                pending: 1,
                review: 12,
              }}
              icon={<BiTrafficCone className="text-2xl" />}
            />

            <Card
              title="Traffic Management and Transport Department"
              tasks={[
                { name: "Pot holes", priority: "High" },
                { name: "Maintenance work", priority: "Medium" },
                { name: "Cleaning", priority: "Low" },
              ]}
              status={{
                completed: 2,
                pending: 1,
                review: 12,
              }}
              icon={<BiTrafficCone className="text-2xl" />}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
