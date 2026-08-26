import { Link } from "react-router-dom";
import heroImage from "../assets/greencare-hero.png";
import practiceImage from "../assets/practice.png";

import Container from "../components/layout/Container";
import Button from "../components/ui/Button";
import ServiceCard from "../components/services/ServiceCard";
import DoctorCard from "../components/doctors/DoctorCard";
import FAQAccordion from "../components/home/FAQAccordion";

import clinic from "../data/clinic";
import services from "../data/services";
import doctors from "../data/doctors";
import testimonials from "../data/testimonials";
import faqs from "../data/faqs";

const practiceFeatures = [
  {
    icon: "✦",
    title: "Highly Professional Team",
    description:
      "Our healthcare professionals focus on clear communication and thoughtful care.",
  },
  {
    icon: "✓",
    title: "Patient-focused Care",
    description:
      "We aim to make every healthcare visit straightforward, respectful, and convenient.",
  },
  {
    icon: "♡",
    title: "Comfortable Environment",
    description:
      "A welcoming clinic environment designed around patient comfort.",
  },
];

const whyChooseUs = [
  {
    number: "01",
    title: "Experienced Professionals",
    description:
      "Qualified healthcare professionals supporting your everyday healthcare needs.",
  },
  {
    number: "02",
    title: "Patient-first Approach",
    description:
      "Clear communication and a healthcare experience centered around patients.",
  },
  {
    number: "03",
    title: "Modern Environment",
    description:
      "A clean and professional environment designed for a comfortable visit.",
  },
  {
    number: "04",
    title: "Convenient Booking",
    description:
      "Choose your service, doctor, date, and time through our appointment process.",
  },
];

const appointmentSteps = [
  {
    number: "01",
    title: "Choose a Service",
  },
  {
    number: "02",
    title: "Choose a Doctor",
  },
  {
    number: "03",
    title: "Choose Date & Time",
  },
  {
    number: "04",
    title: "Enter Patient Details",
  },
  {
    number: "05",
    title: "Confirm Appointment",
  },
];

function Home() {
  const featuredServices = services.slice(0, 4);
  const featuredDoctors = doctors.slice(0, 4);
  const featuredFaqs = faqs.slice(0, 5);

  return (
    <main className="bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="bg-[#edf7ff]">
        <Container>

          <div className="grid min-h-[560px] items-center gap-8 py-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-0 lg:py-0">

            {/* LEFT */}

            <div className="relative z-10 max-w-[560px] py-8 lg:py-20">

              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-blue-600 sm:text-xs">
                Trusted Healthcare
              </p>

              <h1 className="mt-4 max-w-[520px] text-[42px] font-bold leading-[1.08] tracking-tight text-[#102b4e] sm:text-5xl lg:text-[58px]">
                Expert care for healthier lives.
              </h1>

              <p className="mt-5 max-w-[500px] text-sm leading-6 text-slate-600 sm:text-base">
                GreenCare Clinic provides professional healthcare services
                for individuals and families, with convenient appointments
                and patient-focused care.
              </p>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">

                <Button
                  to="/appointments"
                  size="md"
                  className="rounded-full px-5"
                >
                  Book Appointment

                  <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                    →
                  </span>
                </Button>

                <a
                  href={`tel:${clinic.contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 rounded-full text-sm text-slate-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                >

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
                    ☎
                  </span>

                  <span>

                    <span className="block font-semibold text-[#102b4e]">
                      {clinic.contact.phone}
                    </span>

                    <span className="block text-xs text-slate-500">
                      Call us anytime
                    </span>

                  </span>

                </a>

              </div>

            </div>


            {/* RIGHT IMAGE */}

            <div className="relative h-full min-h-[430px] lg:min-h-[560px]">

              <div className="absolute inset-y-0 right-[-32px] left-[-20px] overflow-hidden rounded-l-[50%] lg:right-[-80px]">

                <img
                  src={heroImage}
                  alt="GreenCare healthcare professional providing patient care"
                  className="h-full w-full object-cover"
                />

              </div>

            </div>

          </div>

        </Container>
      </section>


      {/* =====================================================
          WHAT WE DO
      ====================================================== */}

      <section className="bg-white py-16 sm:py-20">

        <Container>

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-blue-600 sm:text-xs">
              What We Do
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-[#102b4e] sm:text-3xl">
              Providing healthcare for individuals and families
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Professional services designed to support your everyday
              healthcare needs.
            </p>

          </div>


          {/* MOBILE: 1
              TABLET: 2
              DESKTOP: 4 */}

          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:mt-12 lg:grid-cols-4 lg:gap-12">

            {featuredServices.map((service) => (

              <div
                key={service.id}
                className="w-full"
              >
                <ServiceCard service={service} />
              </div>

            ))}

          </div>

        </Container>

      </section>


      {/* =====================================================
          OUR PRACTICE
      ====================================================== */}

      <section className="overflow-hidden bg-[#edf7ff]">

        <Container>

          <div className="grid items-center lg:grid-cols-2">

            {/* LEFT CONTENT */}

            <div className="py-14 sm:py-16 lg:py-20 lg:pr-14">

              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-blue-600 sm:text-xs">
                Our Practice
              </p>

              <h2 className="mt-3 max-w-md text-3xl font-bold leading-tight text-[#102b4e] sm:text-4xl">
                We provide top quality healthcare.
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600 sm:text-[15px]">
                Our clinic is designed to provide professional healthcare
                services in a welcoming environment. We focus on clear
                communication, convenient access, and patient-centered care.
              </p>


              {/* FEATURES */}

              <div className="mt-7 space-y-5">

                {practiceFeatures.map((feature) => (

                  <div
                    key={feature.title}
                    className="flex items-start gap-3 sm:gap-4"
                  >

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-sm sm:h-11 sm:w-11">
                      {feature.icon}
                    </span>

                    <div className="min-w-0">

                      <h3 className="text-sm font-bold text-[#102b4e] sm:text-[15px]">
                        {feature.title}
                      </h3>

                      <p className="mt-1 max-w-md text-xs leading-5 text-slate-500 sm:text-sm">
                        {feature.description}
                      </p>

                    </div>

                  </div>

                ))}

              </div>


              {/* CTA */}

              <div className="mt-7">

                <Button
                  to="/about"
                  size="sm"
                  className="rounded-full"
                >
                  Learn More About Us →
                </Button>

              </div>

            </div>


            {/* RIGHT IMAGE */}

            <div
              className="
                relative
                -mx-4
                h-[280px]
                sm:mx-0
                sm:h-[360px]
                lg:mx-0
                lg:h-[500px]
              "
            >

              <div
                className="
                  absolute
                  inset-0
                  overflow-hidden
                  rounded-none
                  sm:rounded-3xl
                  lg:rounded-tl-[45%]
                  lg:rounded-br-[45%]
                "
              >

                <img
                  src={practiceImage}
                  alt="Modern GreenCare Clinic examination room"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />

              </div>


              {/* APPOINTMENT BADGE */}

              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  right-4
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-blue-600
                  px-4
                  py-3
                  text-white
                  shadow-lg
                  sm:bottom-6
                  sm:left-auto
                  sm:right-6
                  sm:w-auto
                  sm:max-w-[320px]
                  sm:rounded-full
                  sm:px-5
                  sm:py-3
                "
              >

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20">
                  ◷
                </span>

                <div className="min-w-0">

                  <p className="truncate text-xs font-bold sm:text-sm">
                    Convenient Appointments
                  </p>

                  <p className="mt-0.5 truncate text-[10px] text-blue-100 sm:text-xs">
                    Healthcare designed around you
                  </p>

                </div>

              </div>

            </div>

          </div>

        </Container>

      </section>


      {/* =====================================================
          WHY CHOOSE GREENCARE
      ====================================================== */}

      <section className="bg-white py-16 sm:py-20">

        <Container>

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-blue-600">
              Why GreenCare
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#102b4e] sm:text-3xl">
              A healthcare experience built around you
            </h2>

          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {whyChooseUs.map((item) => (

              <article
                key={item.number}
                className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm"
              >

                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#edf7ff] text-xs font-bold text-blue-600">
                  {item.number}
                </span>

                <h3 className="mt-4 text-sm font-bold text-[#102b4e]">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {item.description}
                </p>

              </article>

            ))}

          </div>

        </Container>

      </section>


      {/* =====================================================
          OUR TEAM
      ====================================================== */}

      <section className="bg-white py-16 sm:py-20">

        <Container>

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-blue-600">
              Our Team
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#102b4e] sm:text-3xl">
              Our Healthcare Professionals
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Our healthcare professionals are committed to providing
              thoughtful and professional care.
            </p>

          </div>


          {/* MOBILE: 1
              TABLET: 2
              DESKTOP: 4 */}

          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:mt-12 lg:grid-cols-4 lg:gap-12">

            {featuredDoctors.map((doctor) => (

              <div
                key={doctor.id}
                className="w-full"
              >
                <DoctorCard doctor={doctor} />
              </div>

            ))}

          </div>


          <div className="mt-10 text-center">

            <Link
              to="/doctors"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              View All Doctors →
            </Link>

          </div>

        </Container>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

      <section className="bg-[#f8fbfe] py-16 sm:py-20">

        <Container>

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-blue-600">
              How It Works
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#102b4e] sm:text-3xl">
              Simple steps to book your appointment
            </h2>

          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

            {appointmentSteps.map((step, index) => (

              <div
                key={step.number}
                className="relative text-center"
              >

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                  {step.number}
                </div>

                <h3 className="mt-4 text-sm font-bold text-[#102b4e]">
                  {step.title}
                </h3>

                {index < appointmentSteps.length - 1 && (

                  <div className="absolute left-[65%] right-[-25%] top-6 hidden h-px bg-blue-100 lg:block" />

                )}

              </div>

            ))}

          </div>

        </Container>

      </section>


      {/* =====================================================
          TESTIMONIALS
      ====================================================== */}

      <section className="bg-white py-16 sm:py-20">

        <Container>

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-blue-600">
              Patient Experiences
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#102b4e] sm:text-3xl">
              What our patients say
            </h2>

          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">

            {testimonials.map((testimonial) => (

              <article
                key={testimonial.id}
                className="rounded-2xl border border-slate-100 bg-[#f8fbfe] p-6"
              >

                <div className="text-3xl font-bold text-blue-600">
                  “
                </div>

                <blockquote className="mt-2 text-sm leading-6 text-slate-600">
                  {testimonial.quote}
                </blockquote>

                <div className="mt-5">

                  <p className="text-sm font-bold text-[#102b4e]">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {testimonial.role}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </Container>

      </section>


      {/* =====================================================
          FAQ
      ====================================================== */}

      <section className="bg-[#edf7ff] py-16 sm:py-20">

        <Container>

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

            <div>

              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-blue-600">
                FAQs
              </p>

              <h2 className="mt-3 text-2xl font-bold text-[#102b4e] sm:text-3xl">
                Frequently asked questions
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                Find answers to common questions about appointments and
                GreenCare Clinic.
              </p>

              <div className="mt-6">

                <Button
                  to="/faq"
                  variant="secondary"
                  size="sm"
                  className="rounded-full"
                >
                  View All FAQs
                </Button>

              </div>

            </div>

            <FAQAccordion items={featuredFaqs} />

          </div>

        </Container>

      </section>


      {/* =====================================================
          APPOINTMENT CTA
      ====================================================== */}

      <section className="bg-white py-16 sm:py-20">

        <Container>

          <div className="relative overflow-hidden rounded-[2rem] bg-blue-600 px-6 py-10 sm:px-10 lg:px-14 lg:py-12">

            <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-xl">

                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-blue-100">
                  Book Your Visit
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  Your health deserves expert care.
                </h2>

                <p className="mt-3 text-sm leading-6 text-blue-100">
                  Take the next step and schedule your appointment with
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
              className="absolute -bottom-32 right-40 h-64 w-64 rounded-full bg-white/5"
              aria-hidden="true"
            />

          </div>

        </Container>

      </section>


      {/* =====================================================
          CLINIC INFORMATION
      ====================================================== */}

      <section className="bg-white py-16 sm:py-20">

        <Container>

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-blue-600">
              Visit GreenCare
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#102b4e] sm:text-3xl">
              Clinic Information
            </h2>

          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* PHONE */}

            <div className="rounded-2xl border border-slate-100 p-6 text-center">

              <span className="text-xl text-blue-600">
                ☎
              </span>

              <h3 className="mt-4 text-sm font-bold text-[#102b4e]">
                Phone
              </h3>

              <a
                href={`tel:${clinic.contact.phone.replace(/\s/g, "")}`}
                className="mt-2 block text-xs text-slate-500 hover:text-blue-600"
              >
                {clinic.contact.phone}
              </a>

            </div>


            {/* EMAIL */}

            <div className="rounded-2xl border border-slate-100 p-6 text-center">

              <span className="text-xl text-blue-600">
                @
              </span>

              <h3 className="mt-4 text-sm font-bold text-[#102b4e]">
                Email
              </h3>

              <a
                href={`mailto:${clinic.contact.email}`}
                className="mt-2 block break-all text-xs text-slate-500 hover:text-blue-600"
              >
                {clinic.contact.email}
              </a>

            </div>


            {/* ADDRESS */}

            <div className="rounded-2xl border border-slate-100 p-6 text-center">

              <span className="text-xl text-blue-600">
                ⌖
              </span>

              <h3 className="mt-4 text-sm font-bold text-[#102b4e]">
                Address
              </h3>

              <address className="mt-2 text-xs leading-5 text-slate-500 not-italic">

                {clinic.contact.address.line1}

                <br />

                {clinic.contact.address.line2}

                <br />

                {clinic.contact.address.city},{" "}
                {clinic.contact.address.state}

                <br />

                {clinic.contact.address.postalCode}

              </address>

              <span className="mt-3 block text-xs font-semibold text-blue-600">
                Get Directions →
              </span>

            </div>


            {/* WORKING HOURS */}

            <div className="rounded-2xl border border-slate-100 p-6 text-center">

              <span className="text-xl text-blue-600">
                ◷
              </span>

              <h3 className="mt-4 text-sm font-bold text-[#102b4e]">
                Working Hours
              </h3>

              <ul className="mt-2 space-y-1 text-xs leading-5 text-slate-500">

                {clinic.workingHours.map((item) => (

                  <li key={item.day}>

                    <span className="font-semibold text-slate-700">
                      {item.day}:
                    </span>{" "}

                    {item.hours}

                  </li>

                ))}

              </ul>

            </div>

          </div>

        </Container>

      </section>

    </main>
  );
}

export default Home;