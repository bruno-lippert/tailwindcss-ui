export default function Avatar({ letter }) {
  return (
    <div className="rounded-full bg-primary text-white w-12 h-12 flex items-center justify-center">
      <span className="mb-0.5">{letter}</span>
    </div>
  );
}
