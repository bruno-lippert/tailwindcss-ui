export default function Button({ active, children }) {
  const backgroundColor = active ? "bg-button-active" : "";
  return (
    <button
      className={`text-left hover:bg-button-hover hover:cursor-pointer py-2 px-4  rounded-lg transition-colors w-full ${backgroundColor}`}
    >
      {children}
    </button>
  );
}
