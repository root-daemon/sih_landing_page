import { mappls } from "mappls-web-maps";
const mapplsClassObject = new mappls();
import { useEffect, useRef, useState } from "react";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import Notification from "../../components/Notification";
import Logo from "../../components/logo/Logo";
import Sidebar from "../../components/sidebar/sidebar";

export default function MapPage() {
  const mapRef = useRef(null);
  const [notification, setNotification] = useState(false)
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const loadObject = {
    map: true,
    version: "3.0",
    libraries: ["polydraw"],
    plugins: ["direction"],
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      mapplsClassObject.initialize(
        "c90360803af5a26ce2e34bd0b46fd44f",
        loadObject,
        () => {
          const newMap = mapplsClassObject.Map({
            id: "map",
            properties: {
              center: [latitude, longitude],
              zoom: 15,
            },
          });

          newMap.on("load", () => {
            setIsMapLoaded(true);
          });
          mapRef.current = newMap;
        },
      );
      return () => {
        if (mapRef.current) {
          mapRef.current.remove();
        }
      };
    });
  }, []);

  return (
    <main className="h-screen w-screen overflow-hidden bg-[#D6CFC8]">
      <header className="flex flex-row items-center justify-between px-12 py-6">
        <div className="flex flex-row gap-3">
          <Logo />
        </div>
        <div className="absolute left-96 top-7 flex items-center justify-center gap-3 text-sm font-medium">
          <span className="cursor-pointer">Maps</span>
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
      <div className="flex flex-row">
      <Sidebar collapse={true} />
      <div
        id="map"
        style={{ width: "100%", height: "92vh", display: "inline-block", zIndex: 0 }}
        className="rounded-tl-3xl"
      >
        {isMapLoaded}
      </div>
      </div>
    </main>
  );
}
