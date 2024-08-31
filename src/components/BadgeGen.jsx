import React from "react";

export default function BadgeGen({ type }) {
  return type === "high" ? (
    <div className="rounded-full font-medium text-xs bg-[#F3C4C6] text-[#EC5454] py-0.5 px-3">High</div>
  ) : type === "medium" ? (
    <div className="rounded-full font-medium text-xs bg-[#F3D5C4] text-[#EF8742] py-0.5 px-3">Medium</div>
  ) : (
    <div className="rounded-full font-medium text-xs bg-[#D4E4CC] text-[#56A630] py-0.5 px-3">Low</div>
  );
}
