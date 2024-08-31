import { BiTrafficCone } from "react-icons/bi";
import { MdElectricBolt, MdFireTruck } from "react-icons/md";
import { IoWater, IoPeople } from "react-icons/io5";
import { FaCity } from "react-icons/fa6";
import { RiHospitalFill, RiRoadsterFill } from "react-icons/ri";
import { TbBuildingSkyscraper } from "react-icons/tb";

// Component for displaying an individual icon box
const IconBox = ({ Icon }) => (
  <div className="flex h-[105px] w-[105px] items-center justify-center rounded-[10px] bg-white p-5">
    <Icon className="h-16 w-16 text-black" />
  </div>
);

// Array of icon components to use in the slider
const icons = [
  BiTrafficCone,
  MdElectricBolt,
  IoWater,
  FaCity,
  IoPeople,
  RiHospitalFill,
  TbBuildingSkyscraper,
  MdFireTruck,
  RiRoadsterFill,
];

// Component for creating an infinite scrolling slider
const InfiniteSlider = ({ direction }) => {
  const sliderClass =
    direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  return (
    <div className="overflow-hidden">
      <div className={`flex gap-6 ${sliderClass}`}>
        {[...icons, ...icons].map((Icon, index) => (
          <IconBox key={index} Icon={Icon} />
        ))}
      </div>
    </div>
  );
};

import "../../../styles/style.css";

// Main component for the Integrates section
const Integrates = () => {
  return (
    <section id="content-intregrates-section">
      <div className="relative z-[1] overflow-hidden bg-colorCodGray text-white">
        <div className="py-20 xl:py-[130px]">
          <div className="global-container">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_1fr)_.8fr] xl:gap-28 xxl:gap-[134px]">
              <div className="jos">
                <div className="mb-6">
                  <h2 className="text-4xl font-medium leading-[1.06] text-white sm:text-[44px] lg:text-[56px] xl:text-[75px]">
                    Our Solutions
                  </h2>
                </div>
                {/* Section Content Block */}

                <div className="my-12 flex flex-col gap-y-6 text-xl font-normal leading-[1.28] tracking-[1px] lg:text-[18px]">
                  <div className="white-glassmorphism relative flex flex-col gap-1 py-4 pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[8px] after:w-[8px] after:rounded-[50%]">
                    <span className="font-semibold">Integrated Dashboard:</span>{" "}
                    Centralize project information for better visibility and
                    coordination.
                  </div>
                  <div className="white-glassmorphism relative flex flex-col gap-1 py-4 pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[8px] after:w-[8px] after:rounded-[50%]">
                    <span className="font-semibold">
                      Mandatory Coordination Meetings:
                    </span>{" "}
                    Ensure alignment and avoid conflicts.
                  </div>
                  <div className="white-glassmorphism relative flex flex-col gap-1 py-4 pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[8px] after:w-[8px] after:rounded-[50%]">
                    <span className="font-semibold">Real-time Monitoring:</span>{" "}
                    Track progress, identify issues, and enable quick responses.
                  </div>
                  <div className="white-glassmorphism relative flex flex-col gap-1 py-4 pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[8px] after:w-[8px] after:rounded-[50%]">
                    <span className="font-semibold">
                      Inter-Departmental Task Forces:
                    </span>{" "}
                    Facilitate collaboration and problem-solving.
                  </div>
                  <div className="white-glassmorphism relative flex flex-col gap-1 py-4 pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[8px] after:w-[8px] after:rounded-[50%]">
                    <span className="font-semibold">
                      Simplified Approval Processes:
                    </span>{" "}
                    Streamline procedures for faster <br /> decision-making.
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 overflow-hidden rounded-[30px] bg-gradient-to-t from-[rgba(255,255,255,.1)] to-[rgba(0,0,0,0.5)] py-[124px]">
                <InfiniteSlider direction="left" />
                <InfiniteSlider direction="right" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 top-[80%] -z-[1] h-[1280px] w-[1280px] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#EEEAE5] to-[#EF8742] blur-[250px]"></div>
      </div>
    </section>
  );
};

export default Integrates;
