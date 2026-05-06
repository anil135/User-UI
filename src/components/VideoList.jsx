import { useState } from "react";
import VideoPlayer from "./VideoPlayer";

export default function VideoList({ videos = [] }) {
  const [selected, setSelected] = useState(null);

  if (!videos.length) {
    return <p style={{ padding: 20 }}>No videos found</p>;
  }

  return (
    <div style={{ padding: 20 }}>
      {videos.map((v, i) => (
        <div key={i} style={{ marginBottom: 10 }}>
          <span>{v.timestamp}</span>

          <button onClick={() => setSelected(v.url)}>Play</button>

          <a href={v.url} target="_blank" rel="noreferrer">
            <button>Download</button>
          </a>
        </div>
      ))}

      {selected && (
        <div style={{ marginTop: 20 }}>
          <VideoPlayer url={selected} />
        </div>
      )}
    </div>
  );
}
