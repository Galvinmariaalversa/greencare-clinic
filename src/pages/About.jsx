

import Container from "../components/layout/Container";
import Button from "../components/ui/Button";
import aboutContent from "../data/about";

import practiceImage from "../assets/practice.png";
import heroImage from "../assets/greencare-hero.png";

function About() {
  return (
    <main className="bg-white">

      {/* =====================================================
          1. PAGE HERO
      ====================================================== */}

      <section className="bg-[#edf7ff]">
        <Container>

          <div className="grid min-h-[420px] items-center gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-0">

            <div className="max-w-xl">

              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600 sm:text-xs">
                {aboutContent.hero.eyebrow}
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[#102b4e] sm:text-5xl">
                {aboutContent.hero.title}
              </h1>

              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
                {aboutContent.hero.description}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  to="/appointments"
                  size="md"
                  className="rounded-full"
                >
                  Book Appointment →
                </Button>

                <Button
                  to="/doctors"
                  variant="secondary"
                  size="md"
                  className="rounded-full"
                >
                  Meet Our Doctors
                </Button>
              </div>

            </div>

            <div className="relative min-h-[320px] overflow-hidden rounded-[2.5rem] lg:min-h-[400px]">
              <img
                src={heroImage}
                alt="GreenCare healthcare professional providing patient care"
                className="h-full w-full object-cover"
              />
            </div>

          </div>

        </Container>
      </section>


      {/* =====================================================
          2. CLINIC STORY
      ====================================================== */}

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div className="relative overflow-hidden rounded-[2.5rem] rounded-br-[7rem] bg-slate-100">
              <img
                src={practiceImage}
                alt="GreenCare Clinic professional healthcare environment"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="max-w-xl">

              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600 sm:text-xs">
                {aboutContent.story.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#102b4e] sm:text-4xl">
                {aboutContent.story.title}
              </h2>

              <div className="mt-5 space-y-4">
                {aboutContent.story.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-7 text-slate-600 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-7">
                <Button
                  to="/appointments"
                  size="sm"
                  className="rounded-full"
                >
                  Book an Appointment →
                </Button>
              </div>

            </div>

          </div>

        </Container>
      </section>


      {/* =====================================================
          3. MISSION + VISION
      ====================================================== */}

      <section className="bg-[#edf7ff] py-16 sm:py-20">
        <Container>

          <div className="grid gap-6 md:grid-cols-2">

            <article className="rounded-[2rem] bg-white p-7 shadow-sm sm:p-9">

              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                M
              </span>

              <h2 className="mt-6 text-2xl font-bold text-[#102b4e]">
                {aboutContent.mission.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {aboutContent.mission.description}
              </p>

            </article>

            <article className="rounded-[2rem] bg-[#102b4e] p-7 text-white shadow-sm sm:p-9">

              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                V
              </span>

              <h2 className="mt-6 text-2xl font-bold">
                {aboutContent.vision.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {aboutContent.vision.description}
              </p>

            </article>

          </div>

        </Container>
      </section>


      {/* =====================================================
          4. CORE VALUES
      ====================================================== */}

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
              Our Values
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#102b4e] sm:text-4xl">
              What guides the way we care
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
              Our core values shape how we interact with patients and how we
              approach our healthcare services.
            </p>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {aboutContent.values.map((value) => (
              <article
                key={value.number}
                className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >

                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#edf7ff] text-xs font-bold text-blue-600">
                  {value.number}
                </span>

                <h3 className="mt-5 text-base font-bold text-[#102b4e]">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {value.description}
                </p>

              </article>
            ))}

          </div>

        </Container>
      </section>


      {/* =====================================================
          5. FACILITIES / CLINIC ENVIRONMENT
      ====================================================== */}

      <section className="bg-[#f8fbfe] py-16 sm:py-20 lg:py-24">
        <Container>

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            <div className="max-w-xl">

              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
                Our Environment
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#102b4e] sm:text-4xl">
                A professional environment designed around patients.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                GreenCare Clinic aims to provide a clean, organized, and
                welcoming environment where patients can comfortably access
                healthcare services.
              </p>

              <div className="mt-7 space-y-5">

                {aboutContent.facilities.map((facility, index) => (
                  <div
                    key={facility.title}
                    className="flex gap-4"
                  >

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                      0{index + 1}
                    </span>

                    <div>
                      <h3 className="text-sm font-bold text-[#102b4e]">
                        {facility.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {facility.description}
                      </p>
                    </div>

                  </div>
                ))}

              </div>

            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] rounded-bl-[7rem] bg-slate-100">
              <img
                src={practiceImage}
                alt="Modern GreenCare Clinic environment"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />

              <div className="absolute bottom-5 left-5 rounded-full bg-blue-600 px-5 py-3 text-white shadow-lg">
                <p className="text-xs font-bold">
                  GreenCare Clinic
                </p>

                <p className="mt-0.5 text-[10px] text-blue-100">
                  Professional healthcare environment
                </p>
              </div>
            </div>

          </div>

        </Container>
      </section>


      {/* =====================================================
          6. HEALTHCARE APPROACH
      ====================================================== */}

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
              Our Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#102b4e] sm:text-4xl">
              A simple approach to patient care
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
              We aim to make the healthcare experience clear, respectful, and
              easy to navigate.
            </p>

          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {aboutContent.approach.map((step) => (
              <article
                key={step.number}
                className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >

                <span className="text-xs font-bold text-blue-600">
                  {step.number}
                </span>

                <h3 className="mt-4 text-base font-bold text-[#102b4e]">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {step.description}
                </p>

              </article>
            ))}

          </div>

        </Container>
      </section>


      {/* =====================================================
          7. WHY CHOOSE GREENCARE
      ====================================================== */}

      <section className="bg-[#edf7ff] py-16 sm:py-20 lg:py-24">
        <Container>

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
              Why GreenCare
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#102b4e] sm:text-4xl">
              Healthcare with a patient-first mindset
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
              We focus on creating a professional and convenient healthcare
              experience without making unsupported promises or claims.
            </p>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {aboutContent.whyChooseUs.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-white p-6 text-center shadow-sm"
              >

                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg text-white">
                  {item.icon}
                </span>

                <h3 className="mt-5 text-base font-bold text-[#102b4e]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

              </article>
            ))}

          </div>

        </Container>
      </section>


      {/* =====================================================
          8. APPOINTMENT CTA
      ====================================================== */}

      <section className="bg-white py-16 sm:py-20">
        <Container>

          <div className="relative overflow-hidden rounded-[2rem] bg-blue-600 px-6 py-10 sm:px-10 lg:px-14 lg:py-12">

            <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-2xl">

                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-100">
                  Book Your Visit
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  Your health deserves expert care.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">
                  Take the next step and schedule an appointment with
                  GreenCare Clinic.
                </p>

              </div>

              <Button
                to="/appointments"
                variant="secondary"
                size="lg"
                className="shrink-0 rounded-full border-white bg-white text-blue-700 hover:bg-blue-50"
              >
                Book Appointment →
              </Button>

            </div>

            <div
              className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/10"
              aria-hidden="true"
            />

            <div
              className="absolute -bottom-32 right-32 h-64 w-64 rounded-full bg-white/5"
              aria-hidden="true"
            />

          </div>

        </Container>
      </section>


      {/* =====================================================
          9. FOOTER
          Existing global Footer renders through the layout.
      ====================================================== */}

    </main>
  );
}

export default About;