import { Link, useParams } from "react-router-dom";

import Container from "../components/layout/Container";
import Button from "../components/ui/Button";

import doctors from "../data/doctors";

function DoctorDetails() {
  const { id } = useParams();

  const doctor = doctors.find((item) => item.id === id);

  if (!doctor) {
    return (
      <main className="bg-white">

        <section className="flex min-h-[65vh] items-center py-20">
          <Container>

            <div className="mx-auto max-w-xl text-center">

              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#edf7ff] text-2xl font-bold text-blue-600">
                ?
              </span>

              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
                GreenCare Clinic
              </p>

              <h1 className="mt-3 text-3xl font-bold text-[#102b4e] sm:text-4xl">
                Doctor Not Found
              </h1>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                We couldn't find a doctor matching the profile address you
                entered. Please return to our doctors directory.
              </p>

              <div className="mt-7">
                <Button
                  to="/doctors"
                  size="md"
                  className="rounded-full"
                >
                  ← Back to Doctors
                </Button>
              </div>

            </div>

          </Container>
        </section>

      </main>
    );
  }

  return (
    <main className="bg-white">

      {/* =====================================================
          PROFILE HERO
      ====================================================== */}

      <section className="bg-[#edf7ff] py-12 sm:py-16 lg:py-20">
        <Container>

          <Link
            to="/doctors"
            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          >
            ← Back to Doctors
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[360px_1fr] lg:gap-14">

            {/* Photo */}
            <div className="mx-auto w-full max-w-[360px] overflow-hidden rounded-[2.5rem] bg-white p-2 shadow-sm">
              <img
                src={doctor.image}
                alt={`${doctor.name}, ${doctor.specialization}`}
                className="aspect-[4/5] w-full rounded-[2rem] object-cover"
              />
            </div>

            {/* Profile summary */}
            <div>

              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
                Healthcare Professional
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#102b4e] sm:text-5xl">
                {doctor.name}
              </h1>

              <p className="mt-3 text-lg font-semibold text-blue-600">
                {doctor.specialization}
              </p>

              <div className="mt-6 grid max-w-xl gap-3 sm:grid-cols-3">

                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                    Qualification
                  </p>

                  <p className="mt-2 text-sm font-bold text-[#102b4e]">
                    {doctor.qualification}
                  </p>
                </div>

                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                    Experience
                  </p>

                  <p className="mt-2 text-sm font-bold text-[#102b4e]">
                    {doctor.experience}
                  </p>
                </div>

                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                    Availability
                  </p>

                  <p className="mt-2 text-sm font-bold text-[#102b4e]">
                    {doctor.availableDays.length} days
                  </p>
                </div>

              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  to="/appointments"
                  size="md"
                  className="rounded-full"
                >
                  Book Appointment →
                </Button>

                <Button
                  to="/contact"
                  variant="secondary"
                  size="md"
                  className="rounded-full"
                >
                  Contact Clinic
                </Button>
              </div>

            </div>

          </div>

        </Container>
      </section>


      {/* =====================================================
          PROFILE CONTENT
      ====================================================== */}

      <section className="py-14 sm:py-16 lg:py-20">
        <Container>

          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">

            {/* Main */}
            <div className="space-y-8">

              {/* Biography */}
              <article className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm sm:p-8">

                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
                  About the Doctor
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[#102b4e]">
                  Biography
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  {doctor.biography}
                </p>

              </article>


              {/* Expertise */}
              <article className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm sm:p-8">

                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
                  Areas of Focus
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[#102b4e]">
                  Expertise
                </h2>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">

                  {doctor.expertise.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl bg-[#f8fbfe] p-4"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                        ✓
                      </span>

                      <span className="text-sm text-slate-600">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

              </article>


              {/* Services */}
              <article className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm sm:p-8">

                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
                  Clinical Services
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[#102b4e]">
                  Services
                </h2>

                <div className="mt-5 flex flex-wrap gap-2">

                  {doctor.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full bg-[#edf7ff] px-4 py-2 text-xs font-semibold text-blue-700"
                    >
                      {service}
                    </span>
                  ))}

                </div>

              </article>

            </div>


            {/* Sidebar */}
            <aside className="space-y-6">

              {/* Availability */}
              <div className="rounded-[2rem] bg-[#edf7ff] p-6 sm:p-7">

                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
                  Schedule
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[#102b4e]">
                  Availability
                </h2>

                <div className="mt-5 space-y-3">

                  {doctor.availability.map((slot) => (
                    <div
                      key={slot.day}
                      className="flex items-center justify-between gap-4 border-b border-blue-100 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-sm font-semibold text-[#102b4e]">
                        {slot.day}
                      </span>

                      <span className="text-right text-xs text-slate-500">
                        {slot.hours}
                      </span>
                    </div>
                  ))}

                </div>

                <Button
                  to="/appointments"
                  size="md"
                  className="mt-6 w-full rounded-full"
                >
                  Book Appointment →
                </Button>

              </div>


              {/* Qualification */}
              <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm sm:p-7">

                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
                  Professional Details
                </p>

                <div className="mt-5 space-y-4">

                  <div>
                    <p className="text-xs text-slate-400">
                      Qualification
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#102b4e]">
                      {doctor.qualification}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Specialization
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#102b4e]">
                      {doctor.specialization}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Experience
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#102b4e]">
                      {doctor.experience}
                    </p>
                  </div>

                </div>

              </div>

            </aside>

          </div>

        </Container>
      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-[#edf7ff] py-14 sm:py-16">
        <Container>

          <div className="flex flex-col gap-6 rounded-[2rem] bg-blue-600 px-6 py-9 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-100">
                GreenCare Clinic
              </p>

              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Ready to schedule your visit?
              </h2>
            </div>

            <Button
              to="/appointments"
              variant="secondary"
              size="md"
              className="shrink-0 rounded-full border-white bg-white text-blue-700 hover:bg-blue-50"
            >
              Book Appointment →
            </Button>

          </div>

        </Container>
      </section>

    </main>
  );
}

export default DoctorDetails;