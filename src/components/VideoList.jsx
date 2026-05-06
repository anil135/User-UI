import { useState } from "react";
import VideoPlayer from "./VideoPlayer";

export default function VideoList({ videos }) {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <h3>Results</h3>

      {videos.map((v, i) => (
        <div key={i} style={styles.row}>
          <span>{v.timestamp}</span>

          <button onClick={() => setSelected(v.url)}>Play</button>

          <a href={v.url} download>
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

const styles = {
  row: {
    display: "flex",
    gap: 10,
    marginBottom: 10,
  },
};
