import Sidebar from "../../components/sidebar/sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import PageHeader from "../../components/PageHeader";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  return (
    <main className="h-screen w-screen overflow-hidden bg-[#D6CFC8]">
      <PageHeader />
      <div className="flex h-full w-full flex-row gap-0">
        <Sidebar collapse={true} active={"tasks"} />
        <div className="h-[92.5vh] w-full overflow-auto rounded-tl-3xl bg-gradient-to-br from-[#EFEAE4] to-[#e3d3c7df] p-12">
          <h1 className="mb-4 text-5xl font-semibold">Projects</h1>
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
              {projects.map((project, index) => (
                <TableRow
                  className="cursor-pointer"
                  onClick={() => navigate("/board")}
                  key={index}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{project.title}</TableCell>
                  <TableCell>{project.location}</TableCell>
                  <TableCell>{project.description}</TableCell>
                  <TableCell>{project.department}</TableCell>
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
