import Card from "../../components/Card";
import { BiStreetView, BiTrafficCone } from "react-icons/bi";
import PageHeader from "../../components/PageHeader";
import Sidebar from "../../components/sidebar/sidebar";

export default function Dashboard() {

  return (
    <main className="h-screen w-screen overflow-hidden bg-[#D6CFC8]">
      <PageHeader />
      <div className="flex h-full w-full flex-row gap-0">
        <Sidebar collapse={false} active={"tasks"} />
        <div className="h-[92.5vh] w-full overflow-auto rounded-tl-3xl bg-gradient-to-br from-[#EFEAE4] to-[#e3d3c7df] p-12">
          <h1 className="max-w-[800px] text-5xl font-semibold">Departments</h1>
          <div className="mt-6 grid grid-cols-cards gap-5">
            <Card
              title="Traffic and Transport"
              tasks={[
                { name: "Road 51, Maha Nagar" },
                { name: "Maintainance work" },
                { name: "Road tarring" },
              ]}
              status={{
                completed: 2,
                pending: 8,
              }}
              icon={<BiTrafficCone className="text-2xl" />}
            />
            <Card
              title="Plubming Department"
              tasks={[
                { name: "Monthly Sewage Maintainance" },
                { name: "Manholes" },
                { name: "F4 Restrooms" },
              ]}
              status={{
                completed: 4,
                pending: 5,
              }}
              icon={<BiStreetView className="text-2xl" />}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
