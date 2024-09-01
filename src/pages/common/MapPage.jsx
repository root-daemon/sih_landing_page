import { mappls } from "mappls-web-maps";
const mapplsClassObject = new mappls();
import { useEffect, useRef, useState } from "react";

export default function MapPage() {
  const mapRef = useRef(null);
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
    <div
      id="map"
      style={{ width: "100%", height: "99vh", display: "inline-block" }}
    >
      {isMapLoaded}
    </div>
  );
}
