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
  if (!isOpen) {
    return null;
  }

  return (
    <div className="border-t border-slate-200 bg-white lg:hidden">
      <nav
        className="mx-auto max-w-7xl px-4 py-4 sm:px-6"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col gap-1">
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Button
            to="/appointments"
            size="md"
            className="mt-3 w-full"
            onClick={onClose}
          >
            Book Appointment
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default MobileMenu;