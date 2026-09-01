import { useMemo, useState } from "react";

import SEO from "../components/seo/SEO";
import ScrollReveal from "../components/ui/ScrollReveal";

import doctorsHero from "../assets/doctors-hero.png";

import Container from "../components/layout/Container";

import DoctorCard from "../components/doctors/DoctorCard";
import DoctorFilter from "../components/doctors/DoctorFilter";
import EmptyState from "../components/ui/EmptyState";

import doctors from "../data/doctors";

function Doctors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialization, setSpecialization] = useState("all");

  const specializations = useMemo(() => {
    return [
      ...new Set(
        doctors.map((doctor) => doctor.specialization)
      ),
    ].sort();
  }, []);

  const filteredDoctors = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return doctors.filter((doctor) => {
      const matchesSearch =
        !normalizedSearch ||
        doctor.name
          .toLowerCase()
          .includes(normalizedSearch) ||
        doctor.specialization
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesSpecialization =
        specialization === "all" ||
        doctor.specialization === specialization;

      return matchesSearch && matchesSpecialization;
    });
  }, [searchTerm, specialization]);

  const clearFilters = () => {
    setSearchTerm("");
    setSpecialization("all");
  };

  return (
    <>
      <SEO
        title="Doctors | GreenCare Clinic"
        description="Meet the healthcare professionals at GreenCare Clinic and learn about their specialties, qualifications, experience, and available services."
        canonical="https://greencare-clinic.vercel.app/doctors"
      />

      <main className="bg-white">

        {/* =====================================================
            PREMIUM DOCTORS HERO
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#edf4fc]">

          {/* MOBILE + TABLET IMAGE */}

          <div className="relative block overflow-hidden lg:hidden">

            <div
              className="
                relative
                mx-auto
                h-[280px]
                w-full
                max-w-[520px]
                overflow-hidden
                sm:h-[380px]
                md:h-[440px]
              "
            >
              <img
                src={doctorsHero}
                alt="GreenCare healthcare professionals"
                className="
                  h-full
                  w-full
                  object-cover
                  object-[100%_center]
                  contrast-125
                  saturate-110
                "
              />

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-24
                  bg-gradient-to-t
                  from-[#edf4fc]
                  via-[#edf4fc]/70
                  to-transparent
                "
              />
            </div>

          </div>


          {/* DESKTOP BACKGROUND IMAGE */}

          <div className="absolute inset-0 hidden overflow-hidden lg:block">

            <img
              src={doctorsHero}
              alt="GreenCare healthcare professionals"
              className="
                h-full
                w-full
                object-cover
                object-right
                contrast-125
                saturate-110
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#edf4fc]
                via-[#edf4fc]/50
                to-transparent
              "
            />

          </div>


          {/* HERO CONTENT */}

          <Container>

            <div
              className="
                relative
                z-10
                min-h-0
                lg:min-h-[680px]
              "
            >

              <div
                className="
                  flex
                  items-center
                  lg:min-h-[680px]
                "
              >

                <ScrollReveal>
                  <div
                    className="
                      w-full
                      max-w-xl
                      pb-14
                      pt-4
                      sm:pb-20
                      sm:pt-6
                      lg:py-24
                    "
                  >

                    {/* Eyebrow */}

                    <div className="flex items-center gap-3">

                      <span className="h-[2px] w-10 bg-blue-600" />

                      <p
                        className="
                          text-xs
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-blue-700
                        "
                      >
                        Our Doctors
                      </p>

                    </div>


                    {/* Heading */}

                    <h1
                      className="
                        mt-5
                        text-4xl
                        font-bold
                        leading-[1.1]
                        tracking-tight
                        text-[#102b4e]
                        sm:mt-6
                        sm:text-5xl
                        lg:text-6xl
                      "
                    >
                      Expert doctors.

                      <span className="block text-blue-600">
                        Compassionate care.
                      </span>

                    </h1>


                    {/* Description */}

                    <p
                      className="
                        mt-5
                        max-w-lg
                        text-base
                        leading-relaxed
                        text-slate-600
                        sm:mt-6
                        sm:text-lg
                      "
                    >
                      Meet our experienced healthcare professionals dedicated
                      to providing personalized, trusted, and compassionate
                      care for you and your family.
                    </p>


                    {/* Stats */}

                    <div
                      className="
                        mt-8
                        grid
                        grid-cols-3
                        gap-3
                        border-t
                        border-slate-300/70
                        pt-6
                        sm:mt-10
                        sm:gap-6
                      "
                    >

                      <div>
                        <p
                          className="
                            text-2xl
                            font-bold
                            text-[#102b4e]
                            sm:text-3xl
                          "
                        >
                          10+
                        </p>

                        <p
                          className="
                            mt-1
                            text-xs
                            font-medium
                            text-slate-500
                            sm:text-sm
                          "
                        >
                          Specialists
                        </p>
                      </div>


                      <div>
                        <p
                          className="
                            text-2xl
                            font-bold
                            text-[#102b4e]
                            sm:text-3xl
                          "
                        >
                          15+
                        </p>

                        <p
                          className="
                            mt-1
                            text-xs
                            font-medium
                            text-slate-500
                            sm:text-sm
                          "
                        >
                          Years Experience
                        </p>
                      </div>


                      <div>
                        <p
                          className="
                            text-2xl
                            font-bold
                            text-[#102b4e]
                            sm:text-3xl
                          "
                        >
                          5K+
                        </p>

                        <p
                          className="
                            mt-1
                            text-xs
                            font-medium
                            text-slate-500
                            sm:text-sm
                          "
                        >
                          Happy Patients
                        </p>
                      </div>

                    </div>


                    {/* CTA BUTTONS */}

                    <div
                      className="
                        mt-8
                        flex
                        flex-col
                        gap-3
                        sm:mt-10
                        sm:flex-row
                      "
                    >

                      <a
                        href="#doctors-list"
                        className="
                          inline-flex
                          items-center
                          justify-center
                          rounded-full
                          bg-blue-600
                          px-6
                          py-3.5
                          text-sm
                          font-semibold
                          text-white
                          shadow-lg
                          shadow-blue-600/20
                          transition
                          hover:bg-blue-700
                        "
                      >
                        Meet Our Doctors

                        <span className="ml-2 text-lg">
                          →
                        </span>

                      </a>


                      <a
                        href="/appointments"
                        className="
                          inline-flex
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-slate-300
                          bg-white/80
                          px-6
                          py-3.5
                          text-sm
                          font-semibold
                          text-[#102b4e]
                          backdrop-blur
                          transition
                          hover:bg-white
                        "
                      >
                        Book Appointment
                      </a>

                    </div>

                  </div>
                </ScrollReveal>

              </div>

            </div>

          </Container>

        </section>



        {/* =====================================================
            DOCTORS CONTENT
        ===================================================== */}

        <section
          id="doctors-list"
          className="
            scroll-mt-24
            py-14
            sm:py-16
            lg:py-20
          "
        >

          <Container>

            {/* FILTER */}

            <ScrollReveal>
              <DoctorFilter
                searchTerm={searchTerm}
                specialization={specialization}
                specializations={specializations}
                onSearchChange={setSearchTerm}
                onSpecializationChange={setSpecialization}
                onClear={clearFilters}
              />
            </ScrollReveal>


            {/* RESULT COUNT */}

            <ScrollReveal>
              <div className="mt-8 flex items-center justify-between gap-4">

                <p className="text-sm text-slate-500">

                  <span className="font-semibold text-[#102b4e]">
                    {filteredDoctors.length}
                  </span>{" "}

                  {filteredDoctors.length === 1
                    ? "doctor"
                    : "doctors"}{" "}

                  found

                </p>


                {(searchTerm || specialization !== "all") && (

                  <button
                    type="button"
                    onClick={clearFilters}
                    className="
                      text-xs
                      font-semibold
                      text-blue-600
                      hover:text-blue-700
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-blue-600
                    "
                  >
                    Reset search
                  </button>

                )}

              </div>
            </ScrollReveal>


            {/* DOCTOR GRID */}

            {filteredDoctors.length > 0 ? (

              <div
                className="
                  mt-6
                  grid
                  gap-6
                  sm:grid-cols-2
                  lg:grid-cols-3
                  xl:grid-cols-4
                "
              >

                {filteredDoctors.map((doctor) => (

                  <ScrollReveal key={doctor.id}>
                    <DoctorCard
                      doctor={doctor}
                    />
                  </ScrollReveal>

                ))}

              </div>

            ) : (

              <ScrollReveal>
                <div className="mt-8">

                  <EmptyState
                    title="No doctors found"
                    description="Try a different doctor name or specialization."
                    actionLabel="Clear Filters"
                    onAction={clearFilters}
                  />

                </div>
              </ScrollReveal>

            )}

          </Container>

        </section>



        {/* =====================================================
            APPOINTMENT CTA
        ===================================================== */}

        <section className="bg-[#edf7ff] py-14 sm:py-16">

          <Container>

            <ScrollReveal>
              <div
                className="
                  flex
                  flex-col
                  gap-6
                  rounded-[2rem]
                  bg-blue-600
                  px-6
                  py-9
                  sm:px-10
                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                  lg:px-12
                "
              >

                <div>

                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-blue-100
                    "
                  >
                    Need a consultation?
                  </p>

                  <h2
                    className="
                      mt-2
                      text-2xl
                      font-bold
                      text-white
                      sm:text-3xl
                    "
                  >
                    Find a convenient time for your visit.
                  </h2>

                </div>


                <a
                  href="/appointments"
                  className="
                    inline-flex
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-blue-700
                    transition
                    hover:bg-blue-50
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-white
                  "
                >
                  Book Appointment →
                </a>

              </div>
            </ScrollReveal>

          </Container>

        </section>

      </main>
    </>
  );
}

export default Doctors;