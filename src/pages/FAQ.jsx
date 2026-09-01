import { useMemo, useState } from "react";
import SEO from "../components/seo/SEO";

import Container from "../components/layout/Container";
import FAQAccordion from "../components/home/FAQAccordion";
import Button from "../components/ui/Button";
import ScrollReveal from "../components/ui/ScrollReveal";

import faqs from "../data/faqs";

function FAQ() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(faqs.map((faq) => faq.category)),
    ];
  }, []);

  const filteredFAQs = useMemo(() => {
    if (activeCategory === "All") {
      return faqs;
    }

    return faqs.filter(
      (faq) => faq.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <>
      <SEO
        title="Frequently Asked Questions | GreenCare Clinic"
        description="Find answers to common questions about GreenCare Clinic, appointments, doctors, services, cancellations, and clinic information."
        canonical="https://greencare-clinic.vercel.app/faq"
      />

      <main className="bg-white">

        {/* =====================================================
            1. PREMIUM FAQ HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#edf7ff]">

          {/* Decorative background */}

          <div
            aria-hidden="true"
            className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-blue-50 blur-3xl"
          />

          <Container>

            <div className="relative py-16 sm:py-20 lg:py-24">

              {/* Eyebrow */}

              <ScrollReveal>

                <div className="flex items-center gap-3">

                  <span className="h-[2px] w-10 bg-blue-600" />

                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600 sm:text-xs">
                    Frequently Asked Questions
                  </p>

                </div>

              </ScrollReveal>


              <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">

                {/* =====================================================
                    MAIN CONTENT
                ====================================================== */}

                <ScrollReveal direction="right">

                  <div className="max-w-3xl">

                    <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#102b4e] sm:text-5xl lg:text-6xl">

                      Answers to your

                      <span className="block text-blue-600">
                        common questions.
                      </span>

                    </h1>


                    <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">

                      Find helpful information about appointments, doctors,
                      healthcare services, cancellations, and visiting
                      GreenCare Clinic.

                    </p>


                    {/* CTA Buttons */}

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                      {/* Scroll to FAQ Directory */}

                      <a
                        href="#faq-list"
                        className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                      >

                        Browse Questions

                        <span className="ml-2 text-lg">
                          ↓
                        </span>

                      </a>


                      {/* Navigate to Contact Page */}

                      <Button
                        to="/contact"
                        variant="secondary"
                        size="md"
                        className="rounded-full"
                      >
                        Contact Us
                      </Button>

                    </div>

                  </div>

                </ScrollReveal>


                {/* =====================================================
                    FAQ INFORMATION CARD
                ====================================================== */}

                <ScrollReveal
                  delay={0.15}
                  direction="left"
                >

                  <div className="rounded-[2rem] border border-blue-100 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-7">

                    {/* Icon */}

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold text-white">
                      ?
                    </div>


                    <h2 className="mt-5 text-xl font-bold text-[#102b4e]">
                      Looking for quick answers?
                    </h2>


                    <p className="mt-3 text-sm leading-6 text-slate-500">

                      Browse our frequently asked questions to quickly find
                      information about the clinic and your healthcare visit.

                    </p>


                    {/* FAQ Highlights */}

                    <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">

                      <div className="flex items-center gap-3">

                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf7ff] text-xs font-bold text-blue-600">
                          01
                        </span>

                        <p className="text-sm font-semibold text-[#102b4e]">
                          Appointments and bookings
                        </p>

                      </div>


                      <div className="flex items-center gap-3">

                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf7ff] text-xs font-bold text-blue-600">
                          02
                        </span>

                        <p className="text-sm font-semibold text-[#102b4e]">
                          Doctors and healthcare services
                        </p>

                      </div>


                      <div className="flex items-center gap-3">

                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf7ff] text-xs font-bold text-blue-600">
                          03
                        </span>

                        <p className="text-sm font-semibold text-[#102b4e]">
                          Clinic visits and general information
                        </p>

                      </div>

                    </div>

                  </div>

                </ScrollReveal>

              </div>

            </div>

          </Container>

        </section>


        {/* =====================================================
            2. FAQ DIRECTORY
        ====================================================== */}

        <section
          id="faq-list"
          className="scroll-mt-20 py-14 sm:py-16 lg:py-20"
        >

          <Container>

            {/* Category Navigation */}

            <ScrollReveal>

              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <p className="text-sm font-semibold text-[#102b4e]">
                    Browse by category
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Select a category to find relevant questions.
                  </p>

                </div>


                <div
                  className="flex flex-wrap gap-2"
                  aria-label="FAQ categories"
                >

                  {categories.map((category) => {

                    const isActive =
                      activeCategory === category;

                    return (

                      <button
                        key={category}
                        type="button"
                        onClick={() =>
                          setActiveCategory(category)
                        }
                        aria-pressed={isActive}
                        className={`rounded-full px-4 py-2 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                          isActive
                            ? "bg-blue-600 text-white"
                            : "bg-[#edf7ff] text-blue-700 hover:bg-blue-100"
                        }`}
                      >
                        {category}
                      </button>

                    );

                  })}

                </div>

              </div>

            </ScrollReveal>


            {/* FAQ List */}

            <ScrollReveal
              delay={0.1}
            >

              <div className="mx-auto mt-10 max-w-4xl">

                <p className="mb-4 text-xs font-medium text-slate-400">

                  {filteredFAQs.length}{" "}

                  {filteredFAQs.length === 1
                    ? "question"
                    : "questions"}

                </p>


                <FAQAccordion items={filteredFAQs} />

              </div>

            </ScrollReveal>

          </Container>

        </section>


        {/* =====================================================
            3. APPOINTMENT CTA
        ====================================================== */}

        <section className="bg-[#edf7ff] py-14 sm:py-16">

          <Container>

            <ScrollReveal>

              <div className="flex flex-col gap-6 rounded-[2rem] bg-blue-600 px-6 py-9 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">

                {/* Content */}

                <div className="max-w-2xl">

                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-100">
                    Still have questions?
                  </p>


                  <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    Our team is here to help.
                  </h2>


                  <p className="mt-3 text-sm leading-6 text-blue-100">

                    Contact the clinic if you need information that isn't
                    covered in the FAQ.

                  </p>

                </div>


                {/* Buttons */}

                <div className="flex flex-col gap-3 sm:flex-row">

                  <Button
                    to="/contact"
                    variant="secondary"
                    size="md"
                    className="w-full rounded-full border-white bg-white text-blue-700 hover:bg-blue-50 sm:w-auto"
                  >
                    Contact Us
                  </Button>


                  <Button
                    to="/appointments"
                    variant="secondary"
                    size="md"
                    className="w-full rounded-full border-white bg-white text-blue-700 hover:bg-blue-50 sm:w-auto"
                  >
                    Book Appointment
                  </Button>

                </div>

              </div>

            </ScrollReveal>

          </Container>

        </section>

      </main>
    </>
  );
}

export default FAQ;