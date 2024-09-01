import { useState } from "react";

import { FaArrowRightLong } from "react-icons/fa6";

import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import Notification from "../../components/Notification";
import Logo from "../../components/logo/Logo";
import Sidebar from "../../components/sidebar/sidebar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
//s.no
//description
//depts (created by)
// depts (collabs)
//
const invoices = [
  {
    title: "Maintance Work",
    location: "Chennai, Tamil Nadu",
    description: "A railway project",
    despartment: "Railway Department",
    departments: ["Road Department", "Fire Department"],
    tasks: [],
  },
  {
    title: "Maintance Work",
    location: "Chennai, Tamil Nadu",
    description: "A railway project",
    despartment: "Railway Department",
    departments: ["Road Department", "Fire Department"],
    tasks: [],
  },
  {
    title: "Maintance Work",
    location: "Chennai, Tamil Nadu",
    description: "A railway project",
    despartment: "Railway Department",
    departments: ["Road Department", "Fire Department"],
    tasks: [],
  },
  {
    title: "Maintance Work",
    location: "Chennai, Tamil Nadu",
    description: "A railway project",
    despartment: "Railway Department",
    departments: ["Road Department", "Fire Department"],
    tasks: [],
  },
  {
    title: "Maintance Work",
    location: "Chennai, Tamil Nadu",
    description: "A railway project",
    despartment: "Railway Department",
    departments: ["Road Department", "Fire Department"],
    tasks: [],
  },
];

export default function Projects() {
  const navigate = useNavigate();
  const [collapse, setCollpase] = useState(false);
  const [notification, setNotification] = useState(false);

  return (
    <main className="h-screen w-screen overflow-hidden bg-[#D6CFC8]">
      <header className="flex flex-row items-center justify-between px-12 py-6">
        <div className="flex flex-row gap-3">
          <Logo />
        </div>
        <div className="absolute left-96 top-7 flex items-center justify-center gap-3 text-sm font-medium">
          <span
            className="cursor-pointer opacity-50"
            onClick={() => navigate("/dashboard")}
          >
            Departments
          </span>{" "}
          <FaArrowRightLong />
          <span className="cursor-pointer">Projects</span>
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
      <Notification notification={notification} />
      <div className="flex h-full w-full flex-row gap-0">
        <Sidebar collapse={collapse} />
        <div className="h-[92.5vh] w-full overflow-auto rounded-tl-3xl bg-gradient-to-br from-[#EFEAE4] to-[#e3d3c7df] p-12">
          <h1 className="py-4 text-5xl font-semibold">Projects</h1>
          <Table>
            <TableHeader className="rounded-md bg-[#bdb6b18f] text-center font-semibold text-[#434140]">
              <TableRow className="hover:bg-[#bdb6b18f]">
                <TableHead>S.No</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Collabrators</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((project, index) => (
                <TableRow
                  className="cursor-pointer"
                  onClick={() => navigate("/board")}
                  key={index}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{project.title}</TableCell>
                  <TableCell>{project.location}</TableCell>
                  <TableCell>{project.description}</TableCell>
                  <TableCell>{project.despartment}</TableCell>
                  <TableCell>{project.departments.join(", ")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
