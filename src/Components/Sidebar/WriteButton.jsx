export default function WriteButton({ children }) {
  return (
    <button className="bg-primary hover:bg-primary-hover  text-text-on-primary hover:cursor-pointer py-2 px-4 w-full rounded-lg transition-colors">
      {children}
    </button>
  );
}
