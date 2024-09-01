import Logo from "../components/logo/Logo";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { useState } from "react";

export default function Header() {
  const [notification, setNotification] = useState(false);

  return (
    <header className="flex flex-row items-center justify-between px-12 py-6">
      <div className="flex flex-row gap-3">
        <Logo />
      </div>
      <div className="absolute left-96 top-7 flex items-center justify-center gap-3 text-sm font-medium">
        <span className="cursor-pointer">Board</span>
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
