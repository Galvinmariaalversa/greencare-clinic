import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/layout/ScrollToTop";
import PublicLayout from "./components/layout/PublicLayout";
import ClinicSchema from "./components/seo/ClinicSchema";

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

      {/* Global clinic structured data */}
      <ClinicSchema />

      {/* Reset scroll position whenever the route changes */}
      <ScrollToTop />

      <Routes>

        <Route element={<PublicLayout />}>

          {/* =====================================================
              HOME
          ====================================================== */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* =====================================================
              ABOUT
          ====================================================== */}

          <Route
            path="/about"
            element={<About />}
          />


          {/* =====================================================
              DOCTORS
          ====================================================== */}

          <Route
            path="/doctors"
            element={<Doctors />}
          />

          <Route
            path="/doctors/:id"
            element={<DoctorDetails />}
          />


          {/* =====================================================
              SERVICES
          ====================================================== */}

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/services/:id"
            element={<ServiceDetails />}
          />


          {/* =====================================================
              CONTACT
          ====================================================== */}

          <Route
            path="/contact"
            element={<Contact />}
          />


          {/* =====================================================
              APPOINTMENT
          ====================================================== */}

          <Route
            path="/appointments"
            element={<Appointment />}
          />


          {/* =====================================================
              FAQ
          ====================================================== */}

          <Route
            path="/faq"
            element={<FAQ />}
          />


          {/* =====================================================
              LEGAL
          ====================================================== */}

          <Route
            path="/privacy"
            element={
              <RoutePlaceholder
                title="Privacy Policy"
              />
            }
          />

          <Route
            path="/terms"
            element={
              <RoutePlaceholder
                title="Terms & Conditions"
              />
            }
          />


          {/* =====================================================
              404
          ====================================================== */}

          <Route
            path="*"
            element={
              <RoutePlaceholder
                title="Page Not Found"
              />
            }
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;