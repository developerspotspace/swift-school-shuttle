import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import L from "leaflet";

// Custom bus icon
const busIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2554/2554969.png",
  iconSize: [30, 30],
});

const BusTrackingMap = () => {
  const [busLocation, setBusLocation] = useState({ lat: 37.7749, lng: -122.4194 });

  // Simulate bus movement
  useEffect(() => {
    const interval = setInterval(() => {
      setBusLocation((prev) => ({
        lat: prev.lat + (Math.random() - 0.5) * 0.01,
        lng: prev.lng + (Math.random() - 0.5) * 0.01,
      }));
    }, 3000); // Updates location every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <MapContainer center={busLocation} zoom={13} style={{ height: "300px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={busLocation} icon={busIcon}>
        <Popup>Bus is here!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default BusTrackingMap;
