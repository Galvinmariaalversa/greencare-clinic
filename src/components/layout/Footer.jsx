import { Link } from "react-router-dom";
import Container from "./Container";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Doctors", to: "/doctors" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
  { label: "FAQ", to: "/faq" },
];

const services = [
  "General Consultation",
  "Preventive Care",
  "Health Screening",
  "Specialist Consultation",
];

const workingHours = [
  { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
  { day: "Saturday", time: "9:00 AM – 2:00 PM" },
  { day: "Sunday", time: "Closed" },
];

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <Container>
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
                G
              </span>

              <span className="text-xl font-bold text-white">
                GreenCare
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Professional, compassionate healthcare focused on helping
              individuals and families live healthier lives.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="GreenCare Facebook"
                className="rounded-lg border border-slate-700 px-3 py-2 text-sm hover:border-slate-500 hover:text-white focus-visible:outline-2 focus-visible:outline-blue-400"
              >
                Facebook
              </a>

              <a
                href="#"
                aria-label="GreenCare Instagram"
                className="rounded-lg border border-slate-700 px-3 py-2 text-sm hover:border-slate-500 hover:text-white focus-visible:outline-2 focus-visible:outline-blue-400"
              >
                Instagram
              </a>

              <a
                href="#"
                aria-label="GreenCare LinkedIn"
                className="rounded-lg border border-slate-700 px-3 py-2 text-sm hover:border-slate-500 hover:text-white focus-visible:outline-2 focus-visible:outline-blue-400"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h2>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h2>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-slate-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact & Hours
            </h2>

            <div className="mt-5 space-y-4 text-sm">
              <div>
                <p className="font-medium text-white">Phone</p>
                <a
                  href="tel:+910000000000"
                  className="text-slate-400 hover:text-white"
                >
                  +91 00000 00000
                </a>
              </div>

              <div>
                <p className="font-medium text-white">Email</p>
                <a
                  href="mailto:info@greencareclinic.com"
                  className="text-slate-400 hover:text-white"
                >
                  info@greencareclinic.com
                </a>
              </div>

              <div>
                <p className="font-medium text-white">Working Hours</p>

                <ul className="mt-2 space-y-1 text-slate-400">
                  {workingHours.map((item) => (
                    <li key={item.day} className="flex justify-between gap-4">
                      <span>{item.day}</span>
                      <span className="text-right">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-800 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate-500">
            © {new Date().getFullYear()} GreenCare Clinic. All rights
            reserved.
          </p>

          <div className="flex gap-5">
            <Link
              to="/privacy"
              className="text-slate-400 hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-slate-400 hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;