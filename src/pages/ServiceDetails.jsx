import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import SEO from "../components/seo/SEO";

import Container from "../components/layout/Container";
import Button from "../components/ui/Button";
import DoctorCard from "../components/doctors/DoctorCard";

import services from "../data/services";
import doctors from "../data/doctors";

function ServiceDetails() {
  const { id } = useParams();
  const [openFaq, setOpenFaq] = useState(null);

  const service = services.find(
    (item) => item.id === id
  );

  if (!service) {
    return (
      <>
        <SEO
          title="Service Not Found | GreenCare Clinic"
          description="The requested healthcare service could not be found. Explore the healthcare services available at GreenCare Clinic."
          canonical={`https://greencare-clinic.vercel.app/services/${id}`}
        />

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
                  Service Not Found
                </h1>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  We couldn't find the healthcare service you requested.
                  Please return to the services directory.
                </p>

                <div className="mt-7">
                  <Button
                    to="/services"
                    size="md"
                    className="rounded-full"
                  >
                    ← Back to Services
                  </Button>
                </div>

              </div>

            </Container>
          </section>

        </main>
      </>
    );
  }

  /* =========================================================
     RELATED DOCTORS
  ========================================================== */

  const relatedDoctors = doctors.filter((doctor) =>
    service.doctorIds.includes(doctor.id)
  );

  return (
    <>
      <SEO
        title={`${service.name} | GreenCare Clinic`}
        description={`${service.shortDescription} Learn more about ${service.name} and the healthcare services available at GreenCare Clinic.`}
        canonical={`https://greencare-clinic.vercel.app/services/${service.id}`}
      />

      <main className="bg-white">

        {/* =====================================================
            SERVICE HERO
        ====================================================== */}

        <section className="bg-[#edf7ff] py-12 sm:py-16 lg:py-20">
          <Container>

            <Link
              to="/services"
              className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              ← Back to Services
            </Link>

            <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

              {/* Image */}

              <div className="overflow-hidden rounded-[2.5rem] bg-white p-2 shadow-sm">
                <img
                  src={service.image}
                  alt={`${service.name} at GreenCare Clinic`}
                  className="aspect-[4/3] w-full rounded-[2rem] object-cover"
                />
              </div>

              {/* Information */}

              <div>

                <span className="inline-flex rounded-full bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600 shadow-sm">
                  {service.category}
                </span>

                <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[#102b4e] sm:text-5xl">
                  {service.name}
                </h1>

                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                  {service.description}
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">

                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                      Consultation
                    </p>

                    <p className="mt-2 text-sm font-bold text-[#102b4e]">
                      {service.consultationDuration}
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                      Doctors
                    </p>

                    <p className="mt-2 text-sm font-bold text-[#102b4e]">
                      {relatedDoctors.length} available
                    </p>
                  </div>

                </div>

                <div className="mt-7">
                  <Button
                    to="/appointments"
                    size="md"
                    className="rounded-full"
                  >
                    Book Appointment →
                  </Button>
                </div>

              </div>

            </div>

          </Container>
        </section>


        {/* =====================================================
            SERVICE INFORMATION
        ====================================================== */}

        <section className="py-14 sm:py-16 lg:py-20">
          <Container>

            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">

              {/* Main information */}

              <article className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm sm:p-8">

                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
                  About This Service
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[#102b4e] sm:text-3xl">
                  What to expect
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  {service.description}
                </p>

                <div className="mt-7 space-y-5">

                  {service.detailedInformation.map(
                    (information, index) => (
                      <div
                        key={information}
                        className="flex items-start gap-4"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf7ff] text-xs font-bold text-blue-600">
                          {index + 1}
                        </span>

                        <p className="text-sm leading-6 text-slate-600">
                          {information}
                        </p>
                      </div>
                    )
                  )}

                </div>

              </article>


              {/* Consultation information */}

              <aside className="rounded-[2rem] bg-[#edf7ff] p-6 sm:p-8">

                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
                  Consultation Information
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[#102b4e]">
                  Before your visit
                </h2>

                <div className="mt-6 space-y-5">

                  <div>
                    <p className="text-xs font-semibold text-slate-400">
                      Typical duration
                    </p>

                    <p className="mt-1 text-sm font-bold text-[#102b4e]">
                      {service.consultationDuration}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-400">
                      Helpful information
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {service.consultationInformation}
                    </p>
                  </div>

                </div>

                <Button
                  to="/appointments"
                  size="md"
                  className="mt-7 w-full rounded-full"
                >
                  Book This Service →
                </Button>

              </aside>

            </div>

          </Container>
        </section>


        {/* =====================================================
            RELATED DOCTORS
        ====================================================== */}

        {relatedDoctors.length > 0 && (
          <section className="bg-[#f8fbfe] py-14 sm:py-16 lg:py-20">
            <Container>

              <div className="mx-auto max-w-2xl text-center">

                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
                  Our Healthcare Professionals
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#102b4e] sm:text-4xl">
                  Doctors associated with this service
                </h2>

                <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
                  Explore the healthcare professionals currently associated
                  with {service.name}.
                </p>

              </div>

              <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {relatedDoctors.map((doctor) => (
                  <DoctorCard
                    key={doctor.id}
                    doctor={doctor}
                  />
                ))}

              </div>

            </Container>
          </section>
        )}


        {/* =====================================================
            FAQ
        ====================================================== */}

        {service.faqs?.length > 0 && (
          <section className="bg-white py-14 sm:py-16 lg:py-20">
            <Container>

              <div className="mx-auto max-w-3xl">

                <div className="text-center">

                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
                    Frequently Asked Questions
                  </p>

                  <h2 className="mt-3 text-3xl font-bold text-[#102b4e] sm:text-4xl">
                    Questions about {service.name}
                  </h2>

                </div>

                <div className="mt-10 space-y-3">

                  {service.faqs.map((faq, index) => {
                    const isOpen = openFaq === index;

                    return (
                      <div
                        key={faq.question}
                        className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
                      >

                        <button
                          type="button"
                          onClick={() =>
                            setOpenFaq(isOpen ? null : index)
                          }
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-600 sm:px-6"
                        >

                          <span className="text-sm font-bold text-[#102b4e]">
                            {faq.question}
                          </span>

                          <span
                            className={`shrink-0 text-lg font-semibold text-blue-600 transition-transform ${
                              isOpen ? "rotate-45" : ""
                            }`}
                            aria-hidden="true"
                          >
                            +
                          </span>

                        </button>

                        {isOpen && (
                          <div className="border-t border-slate-100 px-5 py-5 sm:px-6">
                            <p className="text-sm leading-6 text-slate-600">
                              {faq.answer}
                            </p>
                          </div>
                        )}

                      </div>
                    );
                  })}

                </div>

              </div>

            </Container>
          </section>
        )}


        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="bg-[#edf7ff] py-14 sm:py-16">
          <Container>

            <div className="flex flex-col gap-6 rounded-[2rem] bg-blue-600 px-6 py-9 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">

              <div className="max-w-2xl">

                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-100">
                  GreenCare Clinic
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Ready to book your consultation?
                </h2>

                <p className="mt-3 text-sm leading-6 text-blue-100">
                  Choose a convenient time for your visit.
                </p>

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
    </>
  );
}

export default ServiceDetails;