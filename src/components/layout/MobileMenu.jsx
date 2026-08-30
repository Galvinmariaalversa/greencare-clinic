import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

const navigationItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Doctors", to: "/doctors" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
  { label: "FAQ", to: "/faq" },
];

function MobileMenu({ isOpen, onClose }) {
  return (
    <div
      className={`
        overflow-hidden border-t border-slate-200 bg-white
        transition-[max-height,opacity]
        duration-300 ease-out
        lg:hidden
        motion-reduce:transition-none
        ${
          isOpen
            ? "max-h-[600px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }
      `}
      aria-hidden={!isOpen}
    >
      <nav
        className="mx-auto max-w-7xl px-4 py-4 sm:px-6"
        aria-label="Mobile navigation"
      >
        <div
          className={`
            flex flex-col gap-1
            transition-transform duration-300 ease-out
            motion-reduce:transition-none
            ${
              isOpen
                ? "translate-y-0"
                : "-translate-y-2"
            }
          `}
        >
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onClose}
              tabIndex={isOpen ? 0 : -1}
              className={({ isActive }) =>
                [
                  "rounded-xl px-4 py-3 text-sm font-medium",
                  "transition-[background-color,color,transform]",
                  "duration-200",
                  "active:scale-[0.99]",
                  "focus-visible:outline-2",
                  "focus-visible:outline-offset-[-2px]",
                  "focus-visible:outline-blue-600",
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-700 hover:bg-slate-50 hover:text-blue-700",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Button
            to="/appointments"
            size="md"
            className="mt-3 w-full rounded-xl"
            onClick={onClose}
            tabIndex={isOpen ? 0 : -1}
          >
            Book Appointment
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default MobileMenu;