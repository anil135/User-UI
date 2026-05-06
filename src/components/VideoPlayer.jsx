export default function VideoPlayer({ url }) {
  if (!url) return null;

  return (
    <video width="600" controls>
      <source src={url} type="video/mp4" />
    </video>
  );
}
