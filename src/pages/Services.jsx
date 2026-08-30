import { useMemo, useState } from "react";
import SEO from "../components/seo/SEO";

import Container from "../components/layout/Container";
import PageHeader from "../components/layout/PageHeader";
import ServiceCard from "../components/services/ServiceCard";
import EmptyState from "../components/ui/EmptyState";
import Button from "../components/ui/Button";

import services from "../data/services";

function Services() {
  const [category, setCategory] = useState("all");

  const categories = useMemo(() => {
    return [
      ...new Set(
        services.map((service) => service.category)
      ),
    ].sort();
  }, []);

  const filteredServices = useMemo(() => {
    if (category === "all") {
      return services;
    }

    return services.filter(
      (service) => service.category === category
    );
  }, [category]);

  const clearFilter = () => {
    setCategory("all");
  };

  return (
    <>
      <SEO
        title="Medical Services | GreenCare Clinic"
        description="Explore professional healthcare, preventive care, health screening, and other medical services available at GreenCare Clinic."
        canonical="https://greencare-clinic.vercel.app/services"
      />

      <main className="bg-white">

        {/* =====================================================
            PAGE HERO
        ====================================================== */}

        <PageHeader
          eyebrow="OUR SERVICES"
          title="Healthcare services designed around your needs."
          description="Explore GreenCare Clinic's healthcare services and find the right place to begin your care journey."
        />


        {/* =====================================================
            SERVICES
        ====================================================== */}

        <section className="py-14 sm:py-16 lg:py-20">
          <Container>

            {/* Category filter */}

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-sm font-semibold text-[#102b4e]">
                  Explore our services
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Select a category to narrow the services shown.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">

                <button
                  type="button"
                  onClick={() => setCategory("all")}
                  aria-pressed={category === "all"}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                    category === "all"
                      ? "bg-blue-600 text-white"
                      : "bg-[#edf7ff] text-blue-700 hover:bg-blue-100"
                  }`}
                >
                  All Services
                </button>

                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    aria-pressed={category === item}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                      category === item
                        ? "bg-blue-600 text-white"
                        : "bg-[#edf7ff] text-blue-700 hover:bg-blue-100"
                    }`}
                  >
                    {item}
                  </button>
                ))}

              </div>

            </div>


            {/* Result count */}

            <p className="mt-7 text-sm text-slate-500">
              <span className="font-semibold text-[#102b4e]">
                {filteredServices.length}
              </span>{" "}
              {filteredServices.length === 1
                ? "service"
                : "services"}{" "}
              available
            </p>


            {/* Grid */}

            {filteredServices.length > 0 ? (
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredServices.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                  />
                ))}
              </div>
            ) : (
              <div className="mt-8">
                <EmptyState
                  title="No services found"
                  description="There are currently no services in this category."
                  actionLabel="View All Services"
                  onAction={clearFilter}
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

              <div className="max-w-2xl">

                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-100">
                  Ready to get started?
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Choose a service and plan your visit.
                </h2>

                <p className="mt-3 text-sm leading-6 text-blue-100">
                  Book an appointment with GreenCare Clinic at a convenient time.
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

export default Services;