import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import PublicLayout from "./components/layout/PublicLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import DoctorDetails from "./pages/DoctorDetails";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Appointment from "./pages/Appointment";


function RoutePlaceholder({ title }) {
  return (
    <section className="flex min-h-[50vh] items-center justify-center px-4 py-20">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          GreenCare Clinic
        </p>

        <h1 className="mt-3 text-3xl font-bold text-slate-900">
          {title}
        </h1>

        <p className="mt-3 text-slate-600">
          This page will be implemented in a later phase.
        </p>
      </div>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* Reset scroll position whenever the route changes */}
      <ScrollToTop />

      <Routes>
        <Route element={<PublicLayout />}>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Doctors */}
          <Route path="/doctors" element={<Doctors />} />

          <Route
            path="/doctors/:id"
            element={<DoctorDetails />}
          />

          {/* Services */}
          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/services/:id"
            element={<ServiceDetails />}
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* Appointment */}
          <Route
            path="/appointments"
            element={<Appointment />}
          />

          {/* FAQ */}
          <Route
            path="/faq"
            element={<FAQ />}
          />

          {/* Legal */}
          <Route
            path="/privacy"
            element={
              <RoutePlaceholder title="Privacy Policy" />
            }
          />

          <Route
            path="/terms"
            element={
              <RoutePlaceholder title="Terms & Conditions" />
            }
          />

          {/* 404 */}
          <Route
            path="*"
            element={
              <RoutePlaceholder title="Page Not Found" />
            }
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;