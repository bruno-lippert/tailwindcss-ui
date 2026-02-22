export default function Container({ children }) {
  return (
    <div
      className="bg-background text-text-main px-2 pb-2 xl:px-6 xl:pb-4
    h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)]
    "
    >
      {children}
    </div>
  );
}
