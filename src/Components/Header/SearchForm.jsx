import { FiSearch } from "react-icons/fi";

export default function SearchForm() {
  return (
    <form
      className="
      min-w-0
      flex
      grow
    "
      onSubmit={(event) => event.preventDefault()}
    >
      <input
        type="text"
        placeholder="Search..."
        className="
          bg-search-background
          placeholder-text-muted
          min-w-0
          w-full
          border-2 rounded-l-lg border-transparent
          px-2 py-1
          focus:outline-none
          focus:border-primary
          transition-colors
        "
      />
      <button
        className="
        min-w-0
        bg-search-background text-text-main
        border-2 rounded-r-lg border-transparent
        px-2 py-1
        hover:cursor-pointer
        focus:outline-none
        hover:border-primary
        transition-colors
      "
      >
        <FiSearch />
      </button>
    </form>
  );
}
