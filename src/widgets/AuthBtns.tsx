export default function AuthBtns() {
  return (
    <div className="text-[16px] flex flex-col lg:flex-row gap-2 lg:gap-6 justify-center items-center">
      <button
        type="button"
        className="text-gray font-semibold w-full rounded-2xl py-2 px-4 border-2 border-transparent hover:text-foreground transition-colors duration-300 cursor-pointer"
      >
        Login
      </button>
      <button
        type="button"
        className="text-gray font-semibold w-full rounded-2xl py-2 px-6 border-2 border-gray hover:text-foreground hover:border-foreground transition-colors duration-300 cursor-pointer"
      >
        Register
      </button>
    </div>
  );
}
