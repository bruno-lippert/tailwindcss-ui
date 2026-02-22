import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

export default function ToggleTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", dark ? "light" : "dark");
  };

  return (
    <button
      className="px-4 py-2 rounded-lg text-text-main hover:cursor-pointer text-xl"
      onClick={toggleTheme}
    >
      {dark ? <CiLight /> : <CiDark />}
    </button>
  );
}
