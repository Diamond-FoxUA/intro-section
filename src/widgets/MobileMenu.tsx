import AuthBtns from "./AuthBtns";
import Navigation from "./Navigation";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ onClose, isOpen }: MobileMenuProps) {
  return (
    <div
      id="mobile-menu"
      className={`absolute top-0 left-0 flex justify-end w-full min-h-dvh bg-foreground/80 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-opacity duration-300`}
    >
      <div className="relative left-1 flex flex-col gap-10 w-[65%] pr-5.5 bg-background pt-20 px-6 md:px-20">
        <button
          className="absolute top-7 right-6"
          type="button"
          onClick={onClose}
          aria-label="Close Mobile Menu"
        >
          <svg className="w-6.5 h-6.5 fill-gray" aria-hidden="true">
            <use href={`/icons/icon-close-menu.svg`}></use>
          </svg>
        </button>

        <Navigation onClose={onClose} />

        <AuthBtns />
      </div>
    </div>
  );
}
