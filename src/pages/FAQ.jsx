import { useMemo, useState } from "react";
import SEO from "../components/seo/SEO";

import Container from "../components/layout/Container";
import PageHeader from "../components/layout/PageHeader";
import FAQAccordion from "../components/home/FAQAccordion";
import Button from "../components/ui/Button";

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
            PAGE HERO
        ====================================================== */}

        <PageHeader
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Answers to common questions."
          description="Find helpful information about appointments, doctors, services, cancellations, and visiting GreenCare Clinic."
        />


        {/* =====================================================
            FAQ DIRECTORY
        ====================================================== */}

        <section className="py-14 sm:py-16 lg:py-20">
          <Container>

            {/* Category navigation */}

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


            {/* FAQ list */}

            <div className="mx-auto mt-10 max-w-4xl">

              <p className="mb-4 text-xs font-medium text-slate-400">
                {filteredFAQs.length}{" "}
                {filteredFAQs.length === 1
                  ? "question"
                  : "questions"}
              </p>

              <FAQAccordion items={filteredFAQs} />

            </div>

          </Container>
        </section>


        {/* =====================================================
            APPOINTMENT CTA
        ====================================================== */}

        <section className="bg-[#edf7ff] py-14 sm:py-16">
          <Container>

            <div className="flex flex-col gap-6 rounded-[2rem] bg-blue-600 px-6 py-9 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">

              {/* CONTENT */}

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


              {/* BUTTONS */}

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

          </Container>
        </section>

      </main>
    </>
  );
}

export default FAQ;