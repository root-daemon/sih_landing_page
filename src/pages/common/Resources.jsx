import { useState } from "react";

import Card from "../../components/resources/Card";
import { BiStreetView, BiTrafficCone } from "react-icons/bi";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import Notification from "../../components/Notification";
import Logo from "../../components/logo/Logo";
import Sidebar from "../../components/sidebar/sidebar";

export default function Resources() {
  const [notification, setNotification] = useState(false);
  const [collapse, setCollpase] = useState(false);

  return (
    <main className="h-screen w-screen overflow-hidden bg-[#D6CFC8]">
      <header className="flex flex-row items-center justify-between px-12 py-6">
        <div className="flex flex-row gap-3">
          <Logo />
        </div>
        <div className="absolute left-96 top-7 flex items-center justify-center gap-3 text-sm font-medium">
          <span className="cursor-pointer">Resources</span>
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
        <Sidebar collapse={collapse} active={"resource"} />
        <div className="h-[92.5vh] w-full overflow-auto rounded-tl-3xl bg-gradient-to-br from-[#EFEAE4] to-[#e3d3c7df] p-12">
          <h1 className="max-w-[800px] text-5xl font-semibold">Resource</h1>
          <div className="mt-6 grid grid-cols-cards gap-5">
            <Card
              department="Plumbing Department"
              skilled={[
                { name: "Electrical Engineer", qty: 12 },
                { name: "Civil Engineer", qty: 123 },
                { name: "Contractor", qty: 123 },
              ]}
              unskilled={[
                { name: "Customer Service", qty: 12 },
                { name: "Support Staffs", qty: 24 },
                { name: "Clerical", qty: 24 },
                { name: "Novice", qty: 53 },
              ]}
              icon={<BiStreetView className="text-2xl" />}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
