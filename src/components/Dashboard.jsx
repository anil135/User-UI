import { useState } from "react";
import Filters from "./Filters";
import VideoList from "./VideoList";
import API from "../services/api";

export default function Dashboard() {
  const [videos, setVideos] = useState([]);

  const handleSearch = async (filters) => {
    const res = await API.post("/videos/search", filters);

    // Expect backend to return signed URLs
    const formatted = res.data.map((v) => ({
      timestamp: v.timestamp,
      url: v.video_url,
    }));

    setVideos(formatted);
  };

  return (
    <div>
      <h2>Video Explorer</h2>
      <Filters onSearch={handleSearch} />
      <VideoList videos={videos} />
    </div>
  );
}
