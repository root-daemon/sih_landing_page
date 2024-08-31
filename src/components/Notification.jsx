import React from "react";
import Man from "./Man";

export default function Notification({ notification }) {
  return (
    <nav
      className={`${notification ? "translate-x-0" : "translate-x-[1000px]"} fixed right-0 top-0 h-screen w-[400px] origin-right bg-[#F5F3E6] p-7 px-9 transition-all duration-300`}
    >
      <h2 className="text-3xl font-semibold underline decoration-[#EC734A]">
        Notification
      </h2>
      <div className="mt-8 relative flex flex-col items-start justify-start gap-2">
        <div className="flex flex-col gap-3 after:h-[180px] after:absolute after:top-4 after:left-[22px] after:z-0 after:bg-[#EC734A] after:w-0.5">
          <Man name="Meyyappan" task="moved to working" index={0} />
          <Man name="Kavyansh" task="assigned to Meyyappan" index={1} />
          <Man name="Vishal" task="raised an issue in Tambaram" index={2} />
        </div>
      </div>
    </nav>
  );
}
