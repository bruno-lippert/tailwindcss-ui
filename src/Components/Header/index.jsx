import ToggleTheme from "../ToggleTheme";
import Avatar from "./Avatar";
import Logo from "./Logo";
import SearchForm from "./SearchForm";

export default function Header() {
  return (
    <header
      className="
      px-4 xl:px-6 h-16 lg:h-20
      flex justify-between items-center
      gap-6 md:gap-16 xl:gap-32
      bg-background text-text-main
      "
    >
      <Logo />
      <SearchForm />
      <ToggleTheme />
      <Avatar />
    </header>
  );
}
