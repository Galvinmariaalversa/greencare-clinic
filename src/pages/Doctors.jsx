import { useMemo, useState } from "react";
import SEO from "../components/seo/SEO";

import Container from "../components/layout/Container";
import PageHeader from "../components/layout/PageHeader";
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
            PAGE HERO
        ====================================================== */}

        <PageHeader
          eyebrow="OUR DOCTORS"
          title="Meet our healthcare professionals."
          description="Explore our team of healthcare professionals and find the right doctor for your needs."
        />


        {/* =====================================================
            DOCTORS CONTENT
        ====================================================== */}

        <section className="py-14 sm:py-16 lg:py-20">
          <Container>

            {/* Search + filter */}

            <DoctorFilter
              searchTerm={searchTerm}
              specialization={specialization}
              specializations={specializations}
              onSearchChange={setSearchTerm}
              onSpecializationChange={setSpecialization}
              onClear={clearFilters}
            />

            {/* Result count */}

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
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                >
                  Reset search
                </button>
              )}

            </div>


            {/* Doctor grid */}

            {filteredDoctors.length > 0 ? (
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredDoctors.map((doctor) => (
                  <DoctorCard
                    key={doctor.id}
                    doctor={doctor}
                  />
                ))}
              </div>
            ) : (
              <div className="mt-8">
                <EmptyState
                  title="No doctors found"
                  description="Try a different doctor name or specialization."
                  actionLabel="Clear Filters"
                  onAction={clearFilters}
                />
              </div>
            )}

          </Container>
        </section>


        {/* =====================================================
            APPOINTMENT CTA
        ====================================================== */}

        <section className="bg-[#edf7ff] py-14 sm:py-16">
          <Container>

            <div className="flex flex-col gap-6 rounded-[2rem] bg-blue-600 px-6 py-9 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-100">
                  Need a consultation?
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Find a convenient time for your visit.
                </h2>
              </div>

              <a
                href="/appointments"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Book Appointment →
              </a>

            </div>

          </Container>
        </section>

      </main>
    </>
  );
}

export default Doctors;