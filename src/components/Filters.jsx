import { useEffect, useState } from "react";
import API from "../services/api";

export default function Filters({ onSearch }) {
  const [locations, setLocations] = useState([]);
  const [cameras, setCameras] = useState([]);

  const [location, setLocation] = useState("");
  const [camera, setCamera] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // SAFE LOAD
  useEffect(() => {
    async function loadLocations() {
      try {
        const res = await API.get("/locations");
        setLocations(res.data || []);
      } catch (err) {
        console.warn("API failed, using mock locations");
        setLocations(["Demo Location"]);
      }
    }
    loadLocations();
  }, []);

  const fetchCameras = async (loc) => {
    setLocation(loc);

    try {
      const res = await API.get(`/cameras?location=${loc}`);
      setCameras(res.data || []);
    } catch (err) {
      console.warn("Using mock cameras");
      setCameras([
        { id: "cam1", name: "Camera 1" },
        { id: "cam2", name: "Camera 2" }
      ]);
    }
  };

  const handleSearch = () => {
    if (!camera || !date) {
      alert("Please select camera and date");
      return;
    }

    onSearch({
      camera_id: camera,
      start_time: `${date}T${startTime || "00:00"}:00Z`,
      end_time: `${date}T${endTime || "23:59"}:00Z`
    });
  };

  return (
    <div style={{ display: "flex", gap: 10, padding: 20 }}>
      <select onChange={(e) => fetchCameras(e.target.value)}>
        <option>Select Location</option>
        {locations.map((l, i) => (
          <option key={i}>{l}</option>
        ))}
      </select>

      <select onChange={(e) => setCamera(e.target.value)}>
        <option>Select Camera</option>
        {cameras.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>

      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <input type="time" onChange={(e) => setStartTime(e.target.value)} />
      <input type="time" onChange={(e) => setEndTime(e.target.value)} />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
