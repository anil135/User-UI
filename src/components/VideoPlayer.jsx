export default function VideoPlayer({ url }) {
  return (
    <video width="600" controls>
      <source src={url} type="video/mp4" />
    </video>
  );
}
