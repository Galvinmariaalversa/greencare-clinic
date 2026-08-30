import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navigationItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Doctors", to: "/doctors" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
  { label: "FAQ", to: "/faq" },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between lg:h-[78px]">

          {/* =====================================================
              BRAND
          ====================================================== */}

          <Link
            to="/"
            onClick={closeMobileMenu}
            className="
              group flex items-center gap-2.5 rounded-lg
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-blue-600
            "
            aria-label="GreenCare Clinic home"
          >
            {/* Logo mark */}
            <span
              className="
                relative flex h-10 w-10 shrink-0
                items-center justify-center rounded-full
                bg-[#edf7ff]
                transition-transform duration-200
                ease-out
                group-hover:scale-105
                motion-reduce:transition-none
                motion-reduce:group-hover:scale-100
                sm:h-11 sm:w-11
              "
              aria-hidden="true"
            >
              <span className="absolute h-7 w-7 rounded-full border-[2.5px] border-blue-600" />
              <span className="absolute h-3 w-3 rounded-full bg-blue-600" />
              <span className="absolute h-1.5 w-1.5 rounded-full bg-white" />
            </span>

            {/* Brand */}
            <span className="flex flex-col">
              <span className="text-[17px] font-bold leading-none tracking-[-0.02em] text-[#102b4e] sm:text-[18px]">
                GreenCare
              </span>

              <span className="mt-1 text-[7px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-[8px]">
                Healthcare Clinic
              </span>
            </span>
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}

          <nav
            className="hidden items-center lg:flex"
            aria-label="Primary navigation"
          >
            <div className="flex items-center gap-0.5">

              {navigationItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "relative rounded-lg px-3.5 py-2.5",
                      "text-[13px] font-semibold",
                      "transition-[color,background-color]",
                      "duration-200 ease-out",
                      "focus-visible:outline-2",
                      "focus-visible:outline-offset-2",
                      "focus-visible:outline-blue-600",
                      isActive
                        ? "text-blue-600"
                        : "text-slate-600 hover:text-blue-600 hover:bg-slate-50",
                    ].join(" ")
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}

                      {isActive && (
                        <span
                          className="
                            absolute bottom-1 left-1/2
                            h-0.5 w-4
                            -translate-x-1/2
                            rounded-full bg-blue-600
                          "
                          aria-hidden="true"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}

            </div>

            {/* Desktop CTA */}
            <Link
              to="/appointments"
              className="
                ml-5 flex items-center gap-2
                rounded-full bg-blue-600
                px-5 py-2.5
                text-[13px] font-semibold text-white
                shadow-sm shadow-blue-600/20
                transition-[background-color,box-shadow,transform]
                duration-200 ease-out
                hover:bg-blue-700
                hover:shadow-md
                active:scale-[0.98]
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-blue-600
                motion-reduce:transition-none
                motion-reduce:active:scale-100
              "
            >
              Book Appointment

              <span
                className="
                  flex h-5 w-5 items-center justify-center
                  rounded-full bg-white/15
                  transition-transform duration-200
                  group-hover:translate-x-0.5
                "
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </nav>

          {/* =====================================================
              MOBILE MENU BUTTON
          ====================================================== */}

          <button
            type="button"
            onClick={() =>
              setIsMobileMenuOpen((current) => !current)
            }
            className="
              relative flex h-11 w-11
              items-center justify-center
              rounded-xl
              border border-slate-200
              bg-white
              text-[#102b4e]
              shadow-sm

              transition-[background-color,transform,box-shadow]
              duration-200 ease-out

              hover:bg-slate-50
              hover:shadow-md
              active:scale-95

              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-blue-600

              motion-reduce:transition-none
              motion-reduce:active:scale-100

              lg:hidden
            "
            aria-expanded={isMobileMenuOpen}
            aria-controls="greencare-mobile-menu"
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
          >
            <span className="sr-only">
              {isMobileMenuOpen
                ? "Close menu"
                : "Open menu"}
            </span>

            {/* Animated hamburger */}
            <span
              className="relative flex h-5 w-5 flex-col items-center justify-center"
              aria-hidden="true"
            >
              {/* Top line */}
              <span
                className={`
                  absolute h-[1.5px] w-5 rounded-full bg-current
                  transition-transform duration-200 ease-out
                  motion-reduce:transition-none
                  ${
                    isMobileMenuOpen
                      ? "rotate-45"
                      : "-translate-y-[5px]"
                  }
                `}
              />

              {/* Middle line */}
              <span
                className={`
                  absolute h-[1.5px] w-5 rounded-full bg-current
                  transition-opacity duration-150 ease-out
                  motion-reduce:transition-none
                  ${
                    isMobileMenuOpen
                      ? "opacity-0"
                      : "opacity-100"
                  }
                `}
              />

              {/* Bottom line */}
              <span
                className={`
                  absolute h-[1.5px] w-5 rounded-full bg-current
                  transition-transform duration-200 ease-out
                  motion-reduce:transition-none
                  ${
                    isMobileMenuOpen
                      ? "-rotate-45"
                      : "translate-y-[5px]"
                  }
                `}
              />
            </span>
          </button>
        </div>
      </div>

      {/* =======================================================
          MOBILE NAVIGATION
      ======================================================== */}

      <div
        id="greencare-mobile-menu"
        className={`
          overflow-hidden
          border-t border-slate-100
          bg-white
          transition-[max-height,opacity]
          duration-300 ease-out
          motion-reduce:transition-none
          lg:hidden

          ${
            isMobileMenuOpen
              ? "max-h-[620px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }
        `}
      >
        <div className="mx-auto max-w-7xl px-4 pb-5 pt-3 sm:px-6">

          {/* Mobile navigation */}
          <nav
            id="greencare-mobile-navigation"
            aria-label="Mobile navigation"
            className="
              rounded-2xl
              border border-slate-100
              bg-slate-50/70
              p-2
            "
          >
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMobileMenu}
                tabIndex={isMobileMenuOpen ? 0 : -1}
                className={({ isActive }) =>
                  [
                    "group flex min-h-[52px]",
                    "items-center justify-between",
                    "rounded-xl px-4",
                    "text-[14px] font-semibold",
                    "transition-[background-color,color,transform]",
                    "duration-200 ease-out",
                    "active:scale-[0.99]",
                    "focus-visible:outline-2",
                    "focus-visible:outline-offset-[-2px]",
                    "focus-visible:outline-blue-600",
                    "motion-reduce:transition-none",

                    isActive
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-slate-700 hover:bg-white hover:text-blue-600",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="flex items-center gap-3">

                      {/* Active indicator */}
                      <span
                        className={`
                          h-1.5 w-1.5 rounded-full
                          transition-colors duration-200
                          ${
                            isActive
                              ? "bg-blue-600"
                              : "bg-slate-300 group-hover:bg-blue-400"
                          }
                        `}
                        aria-hidden="true"
                      />

                      {item.label}
                    </span>

                    <span
                      className={`
                        text-lg leading-none
                        transition-[transform,color]
                        duration-200
                        ${
                          isActive
                            ? "translate-x-0 text-blue-600"
                            : "translate-x-0 text-slate-300 group-hover:translate-x-1 group-hover:text-blue-500"
                        }
                      `}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* ===================================================
              APPOINTMENT CARD
          ==================================================== */}

          <div className="mt-3 rounded-2xl bg-[#edf7ff] p-4">

            <div className="mb-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
                Need an appointment?
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Choose a convenient date and time for your visit.
              </p>
            </div>

            <Link
              to="/appointments"
              onClick={closeMobileMenu}
              tabIndex={isMobileMenuOpen ? 0 : -1}
              className="
                group flex min-h-[50px] w-full
                items-center justify-center gap-2
                rounded-full
                bg-blue-600
                px-5
                text-sm font-semibold text-white
                shadow-sm shadow-blue-600/20

                transition-[background-color,box-shadow,transform]
                duration-200 ease-out

                hover:bg-blue-700
                hover:shadow-md
                active:scale-[0.98]

                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-blue-600

                motion-reduce:transition-none
                motion-reduce:active:scale-100
              "
            >
              Book Appointment

              <span
                className="
                  flex h-5 w-5
                  items-center justify-center
                  rounded-full bg-white/15
                  transition-transform duration-200
                  group-hover:translate-x-0.5
                "
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>

          {/* ===================================================
              PHONE
          ==================================================== */}

          <a
            href="tel:+910000000000"
            tabIndex={isMobileMenuOpen ? 0 : -1}
            className="
              mt-3 flex min-h-[48px]
              items-center justify-center gap-3
              rounded-xl
              text-xs font-semibold text-slate-600
              transition-[background-color,color]
              duration-200
              hover:bg-slate-50
              hover:text-blue-600
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-blue-600
              motion-reduce:transition-none
            "
          >
            <span
              className="
                flex h-8 w-8
                items-center justify-center
                rounded-full
                bg-blue-50
                text-blue-600
              "
              aria-hidden="true"
            >
              ☎
            </span>

            <span>
              <span className="mr-1 text-slate-400">
                Call GreenCare:
              </span>

              <span className="text-[#102b4e]">
                +91 00000 00000
              </span>
            </span>
          </a>

        </div>
      </div>
    </header>
  );
}

export default Navbar;