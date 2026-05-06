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

  useEffect(() => {
    API.get("/locations").then((res) => setLocations(res.data));
  }, []);

  const fetchCameras = async (loc) => {
    setLocation(loc);
    const res = await API.get(`/cameras?location=${loc}`);
    setCameras(res.data);
  };

  const handleSearch = () => {
    onSearch({
      camera_id: camera,
      date,
      start_time: `${date}T${startTime}:00Z`,
      end_time: `${date}T${endTime}:00Z`,
    });
  };

  return (
    <div style={styles.container}>
      <select onChange={(e) => fetchCameras(e.target.value)}>
        <option>Select Location</option>
        {locations.map((l) => (
          <option key={l}>{l}</option>
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

const styles = {
  container: {
    display: "flex",
    gap: 10,
    padding: 20,
  },
};
