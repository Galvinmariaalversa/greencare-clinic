import { useMemo, useState } from "react";

import SEO from "../components/seo/SEO";
import ScrollReveal from "../components/ui/ScrollReveal";

import Container from "../components/layout/Container";
import ServiceCard from "../components/services/ServiceCard";
import EmptyState from "../components/ui/EmptyState";
import Button from "../components/ui/Button";

import services from "../data/services";

function Services() {
  const [category, setCategory] = useState("all");

  const categories = useMemo(() => {
    return [...new Set(services.map((service) => service.category))].sort();
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
            PREMIUM SERVICES HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#edf7ff]">

          {/* Background Decorations */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            {/* Top Right Glow */}

            <div
              className="
                absolute
                -right-32
                -top-32
                h-[420px]
                w-[420px]
                rounded-full
                bg-blue-200/50
                blur-3xl
                sm:h-[520px]
                sm:w-[520px]
              "
            />

            {/* Bottom Left Glow */}

            <div
              className="
                absolute
                -bottom-40
                -left-32
                h-[350px]
                w-[350px]
                rounded-full
                bg-blue-100/80
                blur-3xl
              "
            />

            {/* Decorative Circle */}

            <div
              className="
                absolute
                right-[10%]
                top-[20%]
                hidden
                h-32
                w-32
                rounded-full
                border
                border-blue-200/60
                lg:block
              "
            />

          </div>


          <Container>

            <div
              className="
                relative
                z-10
                grid
                min-h-[560px]
                items-center
                gap-12
                py-16
                sm:py-20
                lg:min-h-[620px]
                lg:grid-cols-[1fr_0.8fr]
                lg:py-0
              "
            >

              {/* =====================================================
                  HERO CONTENT
              ====================================================== */}

              <ScrollReveal>
                <div className="max-w-2xl">

                  {/* Eyebrow */}

                  <div className="flex items-center gap-3">

                    <span className="h-[2px] w-10 bg-blue-600" />

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                      Our Services
                    </p>

                  </div>


                  {/* Heading */}

                  <h1
                    className="
                      mt-6
                      text-4xl
                      font-bold
                      leading-[1.1]
                      tracking-tight
                      text-[#102b4e]
                      sm:text-5xl
                      lg:text-6xl
                    "
                  >
                    Healthcare services

                    <span className="block text-blue-600">
                      designed for your needs.
                    </span>

                  </h1>


                  {/* Description */}

                  <p
                    className="
                      mt-6
                      max-w-xl
                      text-base
                      leading-relaxed
                      text-slate-600
                      sm:text-lg
                    "
                  >
                    Explore our healthcare services and find the right support
                    for you and your family's health and wellbeing.
                  </p>


                  {/* CTA Buttons */}

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                    <a
                      href="#services-list"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        rounded-full
                        bg-blue-600
                        px-7
                        py-3.5
                        text-sm
                        font-semibold
                        text-white
                        shadow-lg
                        shadow-blue-600/20
                        transition
                        hover:bg-blue-700
                        focus-visible:outline-2
                        focus-visible:outline-offset-4
                        focus-visible:outline-blue-600
                      "
                    >
                      Explore Services

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
                        border-blue-200
                        bg-white/80
                        px-7
                        py-3.5
                        text-sm
                        font-semibold
                        text-[#102b4e]
                        transition
                        hover:bg-white
                        focus-visible:outline-2
                        focus-visible:outline-offset-4
                        focus-visible:outline-blue-600
                      "
                    >
                      Book Appointment
                    </a>

                  </div>

                </div>
              </ScrollReveal>


              {/* =====================================================
                  SERVICES VISUAL PANEL
              ====================================================== */}

              <ScrollReveal>
                <div className="relative mx-auto w-full max-w-lg">

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[2.5rem]
                      border
                      border-white/80
                      bg-white/70
                      p-5
                      shadow-xl
                      shadow-blue-900/5
                      backdrop-blur-xl
                      sm:p-7
                    "
                  >

                    {/* Decorative Glow */}

                    <div
                      className="
                        absolute
                        -right-16
                        -top-16
                        h-44
                        w-44
                        rounded-full
                        bg-blue-100
                        blur-2xl
                      "
                    />


                    <div className="relative">

                      {/* Panel Heading */}

                      <h2
                        className="
                          text-xl
                          font-bold
                          text-[#102b4e]
                          sm:text-2xl
                        "
                      >
                        Care for every stage of life.
                      </h2>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        Explore professional healthcare services designed to
                        support your everyday health needs.
                      </p>


                      {/* Service Cards */}

                      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">

                        {/* Medical Care */}

                        <div
                          className="
                            rounded-2xl
                            border
                            border-blue-100
                            bg-white/90
                            p-4
                            shadow-sm
                          "
                        >

                          <div
                            className="
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-xl
                              bg-blue-100
                              text-lg
                            "
                          >
                            🩺
                          </div>

                          <p className="mt-3 text-sm font-bold text-[#102b4e]">
                            Medical Care
                          </p>

                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            Professional healthcare support.
                          </p>

                        </div>


                        {/* Preventive Care */}

                        <div
                          className="
                            rounded-2xl
                            border
                            border-blue-100
                            bg-white/90
                            p-4
                            shadow-sm
                          "
                        >

                          <div
                            className="
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-xl
                              bg-blue-100
                              text-lg
                            "
                          >
                            ❤️
                          </div>

                          <p className="mt-3 text-sm font-bold text-[#102b4e]">
                            Preventive Care
                          </p>

                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            Support for long-term health.
                          </p>

                        </div>


                        {/* Health Screening */}

                        <div
                          className="
                            rounded-2xl
                            border
                            border-blue-100
                            bg-white/90
                            p-4
                            shadow-sm
                          "
                        >

                          <div
                            className="
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-xl
                              bg-blue-100
                              text-lg
                            "
                          >
                            🔬
                          </div>

                          <p className="mt-3 text-sm font-bold text-[#102b4e]">
                            Health Screening
                          </p>

                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            Check and monitor your health.
                          </p>

                        </div>


                        {/* Specialist Care */}

                        <div
                          className="
                            rounded-2xl
                            border
                            border-blue-100
                            bg-white/90
                            p-4
                            shadow-sm
                          "
                        >

                          <div
                            className="
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-xl
                              bg-blue-100
                              text-lg
                            "
                          >
                            👨‍⚕️
                          </div>

                          <p className="mt-3 text-sm font-bold text-[#102b4e]">
                            Specialist Care
                          </p>

                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            Expert care when needed.
                          </p>

                        </div>

                      </div>


                      {/* Bottom Panel */}

                      <div
                        className="
                          mt-5
                          flex
                          items-center
                          justify-between
                          rounded-2xl
                          bg-blue-600
                          px-5
                          py-4
                          text-white
                        "
                      >

                        <div>

                          <p className="text-sm font-semibold">
                            Find the right service
                          </p>

                          <p className="mt-1 text-xs text-blue-100">
                            Explore healthcare options for your needs.
                          </p>

                        </div>

                        <span className="text-2xl">
                          →
                        </span>

                      </div>

                    </div>

                  </div>

                </div>
              </ScrollReveal>

            </div>

          </Container>

        </section>



        {/* =====================================================
            SERVICES
        ====================================================== */}

        <section
          id="services-list"
          className="scroll-mt-24 py-14 sm:py-16 lg:py-20"
        >

          <Container>

            {/* Category Filter */}

            <ScrollReveal>
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
            </ScrollReveal>


            {/* Result Count */}

            <ScrollReveal>
              <p className="mt-7 text-sm text-slate-500">

                <span className="font-semibold text-[#102b4e]">
                  {filteredServices.length}
                </span>{" "}

                {filteredServices.length === 1
                  ? "service"
                  : "services"}{" "}

                available

              </p>
            </ScrollReveal>


            {/* Services Grid */}

            {filteredServices.length > 0 ? (

              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {filteredServices.map((service) => (

                  <ScrollReveal key={service.id}>
                    <ServiceCard
                      service={service}
                    />
                  </ScrollReveal>

                ))}

              </div>

            ) : (

              <ScrollReveal>
                <div className="mt-8">

                  <EmptyState
                    title="No services found"
                    description="There are currently no services in this category."
                    actionLabel="View All Services"
                    onAction={clearFilter}
                  />

                </div>
              </ScrollReveal>

            )}

          </Container>

        </section>



        {/* =====================================================
            APPOINTMENT CTA
        ====================================================== */}

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

                <div className="max-w-2xl">

                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-blue-100
                    "
                  >
                    Ready to get started?
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
                    Choose a service and plan your visit.
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-blue-100">
                    Book an appointment with GreenCare Clinic at a convenient
                    time.
                  </p>

                </div>


                <Button
                  to="/appointments"
                  variant="secondary"
                  size="md"
                  className="
                    shrink-0
                    rounded-full
                    border-white
                    bg-white
                    text-blue-700
                    hover:bg-blue-50
                  "
                >
                  Book Appointment →
                </Button>

              </div>
            </ScrollReveal>

          </Container>

        </section>

      </main>
    </>
  );
}

export default Services;