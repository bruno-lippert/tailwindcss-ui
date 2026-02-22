export default function Logo() {
  return (
    <span className="text-2xl lg:text-3xl font-bold uppercase ">
      <img
        src="./logo.svg"
        alt="logo"
        className="h-12 w-auto block dark:hidden"
      />
      <img
        src="./logoDark.svg"
        alt="logo"
        className="h-12 w-auto hidden dark:block"
      />
    </span>
  );
}
