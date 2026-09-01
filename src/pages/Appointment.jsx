import { useEffect, useMemo, useRef, useState } from "react";
import SEO from "../components/seo/SEO";
import ScrollReveal from "../components/ui/ScrollReveal";

import Container from "../components/layout/Container";
import Button from "../components/ui/Button";

import doctors from "../data/doctors";
import services from "../data/services";

import {
  getDayName,
  initialValues,
} from "../data/appointments";

import AppointmentStepper from "../components/appointments/AppointmentStepper";
import DoctorSelector from "../components/appointments/DoctorSelector";
import ServiceSelector from "../components/appointments/ServiceSelector";
import DateSelector from "../components/appointments/DateSelector";
import TimeSlotSelector from "../components/appointments/TimeSlotSelector";
import PatientForm from "../components/appointments/PatientForm";
import AppointmentSummary from "../components/appointments/AppointmentSummary";
import AppointmentConfirmation from "../components/appointments/AppointmentConfirmation";

function Appointment() {
  const [currentStep, setCurrentStep] = useState(1);

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const [patient, setPatient] = useState(initialValues);

  const [confirmation, setConfirmation] = useState(null);

  const [workflowError, setWorkflowError] = useState("");

  // Loading state for the frontend confirmation prototype.
  const [isConfirming, setIsConfirming] = useState(false);

  /*
   * Controls the scroll position of the appointment workflow.
   */

  const bookingFlowRef = useRef(null);

  /*
   * Services available for the selected doctor.
   */

  const availableServices = useMemo(() => {
    if (!selectedDoctor) {
      return [];
    }

    return services.filter((service) =>
      service.doctorIds?.includes(selectedDoctor.id)
    );
  }, [selectedDoctor]);

  /*
   * Move the viewport to the beginning of the appointment
   * workflow whenever the user moves to another step.
   */

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      bookingFlowRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [currentStep]);

  /*
   * Doctor selection.
   */

  function handleDoctorSelect(doctor) {
    setSelectedDoctor(doctor);

    // Doctor change invalidates service/date/time.
    setSelectedService(null);
    setSelectedDate("");
    setSelectedTime("");

    setWorkflowError("");
  }

  /*
   * Service selection.
   */

  function handleServiceSelect(service) {
    setSelectedService(service);

    // Service change invalidates date/time.
    setSelectedDate("");
    setSelectedTime("");

    setWorkflowError("");
  }

  /*
   * Date selection.
   */

  function handleDateSelect(date) {
    setSelectedDate(date);
    setSelectedTime("");
    setWorkflowError("");
  }

  /*
   * Validate the current appointment step.
   */

  function validateCurrentStep() {
    setWorkflowError("");

    if (currentStep === 1 && !selectedDoctor) {
      setWorkflowError("Please select a doctor.");
      return false;
    }

    if (currentStep === 2 && !selectedService) {
      setWorkflowError("Please select a service.");
      return false;
    }

    if (currentStep === 3) {
      if (!selectedDate) {
        setWorkflowError(
          "Please select an appointment date."
        );
        return false;
      }

      if (
        !selectedDoctor?.availableDays?.includes(
          getDayName(selectedDate)
        )
      ) {
        setWorkflowError(
          "The selected doctor is not available on this date."
        );

        return false;
      }
    }

    if (currentStep === 4 && !selectedTime) {
      setWorkflowError(
        "Please select an available time slot."
      );

      return false;
    }

    return true;
  }

  /*
   * Move to the next step.
   */

  function handleNext() {
    if (!validateCurrentStep()) {
      return;
    }

    if (currentStep < 6) {
      setCurrentStep((step) => step + 1);
    }
  }

  /*
   * Move back to the previous step.
   */

  function handleBack() {
    if (isConfirming) {
      return;
    }

    setWorkflowError("");

    if (currentStep > 1) {
      setCurrentStep((step) => step - 1);
    }
  }

  /*
   * Patient form completed successfully.
   */

  function handlePatientValid() {
    setWorkflowError("");
    setCurrentStep(6);
  }

  /*
   * Confirm appointment.
   *
   * This is intentionally frontend-only.
   *
   * The timeout simulates a future API request.
   * No real appointment is created.
   */

  function handleConfirm() {
    if (isConfirming) {
      return;
    }

    if (
      !selectedDoctor ||
      !selectedService ||
      !selectedDate ||
      !selectedTime ||
      !patient.fullName
    ) {
      setWorkflowError(
        "Some appointment information is missing. Please review your selection."
      );

      return;
    }

    setWorkflowError("");
    setIsConfirming(true);

    setTimeout(() => {
      const reference = `GC-${Date.now()
        .toString()
        .slice(-8)}`;

      setConfirmation({
        referenceNumber: reference,
        doctor: selectedDoctor,
        service: selectedService,
        date: selectedDate,
        time: selectedTime,
        patient,
      });

      setIsConfirming(false);
      setCurrentStep(7);
    }, 1000);
  }

  /*
   * Render the active appointment step.
   */

  function renderStep() {
    switch (currentStep) {
      case 1:
        return (
          <DoctorSelector
            doctors={doctors}
            selectedDoctor={selectedDoctor}
            onSelect={handleDoctorSelect}
          />
        );

      case 2:
        return (
          <ServiceSelector
            services={availableServices}
            selectedService={selectedService}
            onSelect={handleServiceSelect}
          />
        );

      case 3:
        return (
          <DateSelector
            doctor={selectedDoctor}
            selectedDate={selectedDate}
            onSelect={handleDateSelect}
          />
        );

      case 4:
        return (
          <TimeSlotSelector
            doctor={selectedDoctor}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onSelect={setSelectedTime}
          />
        );

      case 5:
        return (
          <PatientForm
            values={patient}
            onChange={setPatient}
            onValidSubmit={handlePatientValid}
          />
        );

      case 6:
        return (
          <AppointmentSummary
            doctor={selectedDoctor}
            service={selectedService}
            date={selectedDate}
            time={selectedTime}
            patient={patient}
          />
        );

      case 7:
        return (
          <div className="appointment-success">
            <AppointmentConfirmation
              doctor={confirmation?.doctor}
              service={confirmation?.service}
              date={confirmation?.date}
              time={confirmation?.time}
              patient={confirmation?.patient}
              referenceNumber={confirmation?.referenceNumber}
            />
          </div>
        );

      default:
        return null;
    }
  }

  /*
   * Mark previous steps as completed.
   */

  const completedSteps =
    currentStep === 7
      ? [1, 2, 3, 4, 5, 6]
      : Array.from(
          {
            length: Math.max(currentStep - 1, 0),
          },
          (_, index) => index + 1
        );

  return (
    <>
      <SEO
        title="Book an Appointment | GreenCare Clinic"
        description="Book an appointment with GreenCare Clinic by selecting a doctor, healthcare service, date, time, and providing your patient details."
        canonical="https://greencare-clinic.vercel.app/appointments"
      />

      <main className="bg-[#f8fbff]">

        {/* =====================================================
            PAGE HEADING
        ====================================================== */}

        <section className="border-b border-slate-100 bg-white py-12 sm:py-16">
          <Container>

            <ScrollReveal>
              <div className="mx-auto max-w-3xl text-center">

                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600 sm:text-xs">
                  GreenCare Clinic
                </p>

                <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#102b4e] sm:text-4xl">
                  Book an Appointment
                </h1>

                <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                  Select your doctor, service, preferred time, and
                  patient information to continue.
                </p>

              </div>
            </ScrollReveal>

          </Container>
        </section>



        {/* =====================================================
            BOOKING WORKFLOW
        ====================================================== */}

        <section className="py-10 sm:py-14">
          <Container>

            <div
              ref={bookingFlowRef}
              className="mx-auto max-w-5xl scroll-mt-24"
            >

              {/* Stepper */}

              <ScrollReveal>
                <AppointmentStepper
                  currentStep={currentStep}
                  completedSteps={completedSteps}
                />
              </ScrollReveal>



              {/* Prototype notice */}

              {currentStep !== 7 && (
                <ScrollReveal>
                  <div className="mb-6 flex items-center justify-between rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">

                    <p className="text-xs leading-5 text-blue-800">
                      <strong>Frontend prototype:</strong>{" "}
                      appointment availability is mock data and is not
                      permanently reserved.
                    </p>

                  </div>
                </ScrollReveal>
              )}



              {/* Workflow error */}

              {workflowError && (
                <div
                  role="alert"
                  className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                >
                  {workflowError}
                </div>
              )}



              {/* =================================================
                  APPOINTMENT CONTENT
              ================================================== */}

              {/* 
                  IMPORTANT:
                  Do NOT put ScrollReveal directly around this
                  dynamic workflow.

                  The appointment-step-enter animation already
                  handles animation when currentStep changes.
              */}

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">

                <div
                  key={currentStep}
                  className="appointment-step-enter"
                >
                  {renderStep()}
                </div>

              </div>



              {/* =================================================
                  STEPS 2–4 NAVIGATION
              ================================================== */}

              {currentStep > 1 && currentStep < 5 && (
                <div className="mt-5 flex justify-between">

                  <Button
                    variant="secondary"
                    onClick={handleBack}
                    disabled={isConfirming}
                  >
                    ← Back
                  </Button>

                  <Button onClick={handleNext}>
                    Continue →
                  </Button>

                </div>
              )}



              {/* =================================================
                  PATIENT NAVIGATION
              ================================================== */}

              {currentStep === 5 && (
                <div className="mt-5">

                  <Button
                    variant="secondary"
                    onClick={handleBack}
                    disabled={isConfirming}
                  >
                    ← Back
                  </Button>

                </div>
              )}



              {/* =================================================
                  REVIEW NAVIGATION
              ================================================== */}

              {currentStep === 6 && (
                <div className="mt-5 flex justify-between gap-3">

                  <Button
                    variant="secondary"
                    onClick={handleBack}
                    disabled={isConfirming}
                  >
                    ← Edit
                  </Button>

                  <Button
                    onClick={handleConfirm}
                    disabled={isConfirming}
                  >
                    {isConfirming ? (
                      <>
                        <span
                          className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
                          aria-hidden="true"
                        />

                        Confirming...
                      </>
                    ) : (
                      "Confirm Appointment"
                    )}
                  </Button>

                </div>
              )}



              {/* =================================================
                  DOCTOR NAVIGATION
              ================================================== */}

              {currentStep === 1 && selectedDoctor && (
                <div className="mt-5 flex justify-end">

                  <Button onClick={handleNext}>
                    Continue →
                  </Button>

                </div>
              )}



              {/* =================================================
                  CONFIRMATION
              ================================================== */}

              {currentStep === 7 && (
                <ScrollReveal>
                  <div className="mt-5 text-center">

                    <p className="text-xs text-slate-400">
                      Prototype only — no real appointment has been
                      created.
                    </p>

                  </div>
                </ScrollReveal>
              )}

            </div>

          </Container>
        </section>

      </main>
    </>
  );
}

export default Appointment;