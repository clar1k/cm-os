export function BackgroundVideo() {
  return (
    <div className="fixed inset-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/55" />
    </div>
  );
}
