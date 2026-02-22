export default function Button({ active, onClick, children }) {
  const backgroundColor = active ? "bg-primary" : "";
  return (
    <button
      className={`flex-1 p-2 mb-0.5 rounded-lg shadow hover:cursor-pointer bg-background-secondary ${backgroundColor}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
