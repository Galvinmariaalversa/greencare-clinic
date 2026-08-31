import { useState } from "react";
import SEO from "../components/seo/SEO";
import LocationMap from "../components/layout/LocationMap";

import Container from "../components/layout/Container";
import PageHeader from "../components/layout/PageHeader";
import Button from "../components/ui/Button";

import clinic from "../data/clinic";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validateForm = () => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Full name is required.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        form.email.trim()
      )
    ) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    }

    if (!form.subject.trim()) {
      nextErrors.subject = "Subject is required.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Message is required.";
    } else if (form.message.trim().length < 10) {
      nextErrors.message =
        "Message must be at least 10 characters.";
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [name]: "",
      }));
    }

    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("validation-error");
      return;
    }

    setErrors({});
    setStatus("submitting");

    // Frontend-only simulation.
    // No email, API, or backend request is performed.
    window.setTimeout(() => {
      setStatus("success");
      setForm(initialForm);
    }, 700);
  };

  const handleRetry = () => {
    setStatus("idle");
  };

  return (
    <>
      <SEO
        title="Contact GreenCare Clinic"
        description="Contact GreenCare Clinic for clinic information, working hours, directions, general enquiries, and appointment information."
        canonical="https://greencare-clinic.vercel.app/contact"
      />


      <main className="bg-white">

        {/* =====================================================
            1. PAGE HERO
        ====================================================== */}

        <PageHeader
          eyebrow="CONTACT GREencare"
          title="We're here to help."
          description="Have a question about our clinic or services? Get in touch with the GreenCare team."
        />


        {/* =====================================================
            2. CONTACT INFORMATION
        ====================================================== */}

        <section className="py-14 sm:py-16 lg:py-20">
          <Container>

            <div className="grid gap-6 md:grid-cols-3">

              {/* Phone */}

              <a
                href={`tel:${clinic.contact.phone.replace(
                  /\s/g,
                  ""
                )}`}
                className="group rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf7ff] text-lg font-bold text-blue-600">
                  ☎
                </span>

                <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                  Phone
                </p>

                <h2 className="mt-2 text-lg font-bold text-[#102b4e]">
                  {clinic.contact.phone}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Call the clinic
                </p>
              </a>


              {/* Email */}

              <a
                href={`mailto:${clinic.contact.email}`}
                className="group rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf7ff] text-lg font-bold text-blue-600">
                  @
                </span>

                <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                  Email
                </p>

                <h2 className="mt-2 break-all text-lg font-bold text-[#102b4e]">
                  {clinic.contact.email}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Send us an email
                </p>
              </a>


              {/* Address */}

              <div className="rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-sm">

                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf7ff] text-lg font-bold text-blue-600">
                  ⌖
                </span>

                <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                  Visit Us
                </p>

                <h2 className="mt-2 text-lg font-bold text-[#102b4e]">
                  {clinic.contact.address.line1}
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {clinic.contact.address.line2}
                  <br />
                  {clinic.contact.address.city},{" "}
                  {clinic.contact.address.state}{" "}
                  {clinic.contact.address.postalCode}
                </p>

              </div>

            </div>

          </Container>
        </section>


        {/* =====================================================
            3. CONTACT FORM
        ====================================================== */}

        <section className="bg-[#f8fbfe] py-14 sm:py-16 lg:py-20">
          <Container>

            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">

              {/* Intro */}

              <div className="max-w-md">

                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
                  Send a Message
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight text-[#102b4e] sm:text-4xl">
                  How can we help?
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                  Complete the form and provide a few details about
                  your enquiry. This frontend form currently demonstrates
                  the validation and submission experience only.
                </p>

                <div className="mt-7 rounded-2xl bg-[#edf7ff] p-5">
                  <p className="text-sm font-semibold text-[#102b4e]">
                    Frontend demonstration
                  </p>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Submitting this form does not send an email or create
                    a backend request. A real submission service can be
                    connected in a future backend phase.
                  </p>
                </div>

              </div>


              {/* Form */}

              <div className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">

                {status === "success" && (
                  <div
                    role="status"
                    className="mb-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-4"
                  >
                    <p className="text-sm font-bold text-emerald-800">
                      Message ready for submission
                    </p>

                    <p className="mt-1 text-xs leading-5 text-emerald-700">
                      Your form was validated successfully. No email was sent
                      because this is currently a frontend-only form.
                    </p>
                  </div>
                )}


                {status === "validation-error" && (
                  <div
                    role="alert"
                    className="mb-6 rounded-2xl border border-red-100 bg-red-50 p-4"
                  >
                    <p className="text-sm font-bold text-red-800">
                      Please check the highlighted fields.
                    </p>

                    <p className="mt-1 text-xs text-red-700">
                      Correct the validation errors before submitting again.
                    </p>
                  </div>
                )}


                {status === "error" && (
                  <div
                    role="alert"
                    className="mb-6 rounded-2xl border border-red-100 bg-red-50 p-4"
                  >
                    <p className="text-sm font-bold text-red-800">
                      Something went wrong.
                    </p>

                    <p className="mt-1 text-xs text-red-700">
                      Please try again.
                    </p>

                    <button
                      type="button"
                      onClick={handleRetry}
                      className="mt-3 text-xs font-bold text-red-700 underline underline-offset-2"
                    >
                      Try Again
                    </button>
                  </div>
                )}


                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >

                  {/* Name + Email */}

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-xs font-bold text-[#102b4e]"
                      >
                        Full Name
                        <span
                          className="ml-1 text-red-500"
                          aria-hidden="true"
                        >
                          *
                        </span>
                      </label>

                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        autoComplete="name"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={
                          errors.name
                            ? "contact-name-error"
                            : undefined
                        }
                        className={`h-11 w-full rounded-xl border bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:ring-2 ${
                          errors.name
                            ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                            : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                        }`}
                        placeholder="Your full name"
                      />

                      {errors.name && (
                        <p
                          id="contact-name-error"
                          className="mt-1.5 text-xs text-red-600"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>


                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block text-xs font-bold text-[#102b4e]"
                      >
                        Email
                        <span
                          className="ml-1 text-red-500"
                          aria-hidden="true"
                        >
                          *
                        </span>
                      </label>

                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                          errors.email
                            ? "contact-email-error"
                            : undefined
                        }
                        className={`h-11 w-full rounded-xl border bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:ring-2 ${
                          errors.email
                            ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                            : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                        }`}
                        placeholder="you@example.com"
                      />

                      {errors.email && (
                        <p
                          id="contact-email-error"
                          className="mt-1.5 text-xs text-red-600"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                  </div>


                  {/* Phone + Subject */}

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="mb-2 block text-xs font-bold text-[#102b4e]"
                      >
                        Phone
                        <span
                          className="ml-1 text-red-500"
                          aria-hidden="true"
                        >
                          *
                        </span>
                      </label>

                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={
                          errors.phone
                            ? "contact-phone-error"
                            : undefined
                        }
                        className={`h-11 w-full rounded-xl border bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:ring-2 ${
                          errors.phone
                            ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                            : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                        }`}
                        placeholder="+91 XXXXX XXXXX"
                      />

                      {errors.phone && (
                        <p
                          id="contact-phone-error"
                          className="mt-1.5 text-xs text-red-600"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>


                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="mb-2 block text-xs font-bold text-[#102b4e]"
                      >
                        Subject
                        <span
                          className="ml-1 text-red-500"
                          aria-hidden="true"
                        >
                          *
                        </span>
                      </label>

                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        value={form.subject}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.subject)}
                        aria-describedby={
                          errors.subject
                            ? "contact-subject-error"
                            : undefined
                        }
                        className={`h-11 w-full rounded-xl border bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:ring-2 ${
                          errors.subject
                            ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                            : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                        }`}
                        placeholder="How can we help?"
                      />

                      {errors.subject && (
                        <p
                          id="contact-subject-error"
                          className="mt-1.5 text-xs text-red-600"
                        >
                          {errors.subject}
                        </p>
                      )}
                    </div>

                  </div>


                  {/* Message */}

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-xs font-bold text-[#102b4e]"
                    >
                      Message
                      <span
                        className="ml-1 text-red-500"
                        aria-hidden="true"
                      >
                        *
                      </span>
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows="6"
                      minLength="10"
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message
                          ? "contact-message-error"
                          : "contact-message-hint"
                      }
                      className={`w-full resize-y rounded-xl border bg-white px-4 py-3 text-sm leading-6 text-slate-700 outline-none transition placeholder:text-slate-400 focus:ring-2 ${
                        errors.message
                          ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                          : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                      }`}
                      placeholder="Tell us how we can help..."
                    />

                    {errors.message ? (
                      <p
                        id="contact-message-error"
                        className="mt-1.5 text-xs text-red-600"
                      >
                        {errors.message}
                      </p>
                    ) : (
                      <p
                        id="contact-message-hint"
                        className="mt-1.5 text-xs text-slate-400"
                      >
                        Minimum 10 characters.
                      </p>
                    )}
                  </div>


                  {/* Submit */}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                    >
                      {status === "submitting"
                        ? "Submitting..."
                        : "Send Message →"}
                    </button>
                  </div>

                </form>

              </div>

            </div>

          </Container>
        </section>


        {/* =====================================================
            4. WORKING HOURS
        ====================================================== */}

        <section className="bg-white py-14 sm:py-16 lg:py-20">
          <Container>

            <div className="grid gap-10 lg:grid-cols-2">

              <div>

                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
                  Visit Us
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#102b4e] sm:text-4xl">
                  Working hours
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
                  Our current working-hour information is shown below.
                  Please confirm availability when scheduling an appointment.
                </p>

              </div>


              <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm sm:p-8">

                <div className="space-y-3">

                  {clinic.workingHours.map((item) => (
                    <div
                      key={item.day}
                      className="flex items-center justify-between gap-5 border-b border-slate-100 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-sm font-semibold text-[#102b4e]">
                        {item.day}
                      </span>

                      <span
                        className={`text-right text-sm ${
                          item.hours === "Closed"
                            ? "font-semibold text-slate-400"
                            : "text-slate-600"
                        }`}
                      >
                        {item.hours}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </Container>
        </section>


        {/* =====================================================
            5 + 6. MAP + DIRECTIONS
        ====================================================== */}

        <section className="bg-[#f8fbfe] py-14 sm:py-16 lg:py-20">
          <Container>
            <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm">

              {/* Google Map */}
              <LocationMap />

              {/* Directions */}
              <div className="flex flex-col gap-5 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">

                <div>
                  <h2 className="text-xl font-bold text-[#102b4e]">
                    Need directions?
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Find GreenCare Clinic easily using Google Maps.
                  </p>
                </div>

     <a
  href="https://www.google.com/maps/dir/?api=1&destination=Radha+Nagar,+Lakshmi+Nagar,+Chromepet,+Chennai,+Tamil+Nadu+600044"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex shrink-0 items-center justify-center rounded-full border border-blue-200 bg-[#edf7ff] px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
>
  Get Directions →
</a>

              </div>

            </div>
          </Container>
        </section>


        {/* =====================================================
            7. APPOINTMENT CTA
        ====================================================== */}

        <section className="bg-white py-14 sm:py-16">
          <Container>

            <div className="flex flex-col gap-6 rounded-[2rem] bg-blue-600 px-6 py-9 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">

              <div className="max-w-2xl">

                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-100">
                  GreenCare Clinic
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Ready to plan your visit?
                </h2>

                <p className="mt-3 text-sm leading-6 text-blue-100">
                  Choose a convenient time for your healthcare appointment.
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

export default Contact;