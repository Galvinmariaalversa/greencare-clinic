import { useMemo, useState } from "react";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";

import doctors from "../data/doctors";
import services from "../data/services";

import {
  getDayName,
  getTodayString,
} from "../data/appointments";

import AppointmentStepper from "../components/appointments/AppointmentStepper";
import DoctorSelector from "../components/appointments/DoctorSelector";
import ServiceSelector from "../components/appointments/ServiceSelector";
import DateSelector from "../components/appointments/DateSelector";
import TimeSlotSelector from "../components/appointments/TimeSlotSelector";
import PatientForm, {
  initialValues,
} from "../components/appointments/PatientForm";
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

  const availableServices = useMemo(() => {
    if (!selectedDoctor) {
      return [];
    }

    return services.filter((service) =>
      service.doctorIds?.includes(selectedDoctor.id)
    );
  }, [selectedDoctor]);

  function handleDoctorSelect(doctor) {
    setSelectedDoctor(doctor);

    setSelectedService(null);
    setSelectedDate("");
    setSelectedTime("");

    setWorkflowError("");
  }

  function handleServiceSelect(service) {
    setSelectedService(service);
    setSelectedDate("");
    setSelectedTime("");
    setWorkflowError("");
  }

  function handleDateSelect(date) {
    setSelectedDate(date);
    setSelectedTime("");
    setWorkflowError("");
  }

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
        setWorkflowError("Please select an appointment date.");
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
      setWorkflowError("Please select an available time slot.");
      return false;
    }

    return true;
  }

  function handleNext() {
    if (!validateCurrentStep()) {
      return;
    }

    if (currentStep < 6) {
      setCurrentStep((step) => step + 1);
    }
  }

  function handleBack() {
    setWorkflowError("");

    if (currentStep > 1) {
      setCurrentStep((step) => step - 1);
    }
  }

  function handlePatientValid() {
    setWorkflowError("");
    setCurrentStep(6);
  }

  function handleConfirm() {
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

    /*
     * FRONTEND PROTOTYPE ONLY
     *
     * A future backend request would happen here.
     *
     * Example future architecture:
     *
     * await appointmentApi.create({
     *   doctorId: selectedDoctor.id,
     *   serviceId: selectedService.id,
     *   date: selectedDate,
     *   time: selectedTime,
     *   patient,
     * });
     */

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

    setWorkflowError("");
    setCurrentStep(7);
  }

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
          <AppointmentConfirmation
            doctor={confirmation?.doctor}
            service={confirmation?.service}
            date={confirmation?.date}
            time={confirmation?.time}
            patient={confirmation?.patient}
            referenceNumber={confirmation?.referenceNumber}
          />
        );

      default:
        return null;
    }
  }

  const completedSteps =
    currentStep === 7
      ? [1, 2, 3, 4, 5, 6]
      : Array.from(
          { length: Math.max(currentStep - 1, 0) },
          (_, index) => index + 1
        );

  return (
    <main className="bg-[#f8fbff]">
      <section className="border-b border-slate-100 bg-white py-12 sm:py-16">
        <Container>
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
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <div className="mx-auto max-w-5xl">
            <AppointmentStepper
              currentStep={currentStep}
              completedSteps={completedSteps}
            />

            {currentStep !== 7 && (
              <div className="mb-6 flex items-center justify-between rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">
                <p className="text-xs leading-5 text-blue-800">
                  <strong>Frontend prototype:</strong> appointment
                  availability is mock data and is not permanently
                  reserved.
                </p>
              </div>
            )}

            {workflowError && (
              <div
                role="alert"
                className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
              >
                {workflowError}
              </div>
            )}

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
              {renderStep()}
            </div>

            {currentStep > 1 && currentStep < 5 && (
              <div className="mt-5 flex justify-between">
                <Button
                  variant="secondary"
                  onClick={handleBack}
                >
                  ← Back
                </Button>

                <Button onClick={handleNext}>
                  Continue →
                </Button>
              </div>
            )}

            {currentStep === 5 && (
              <div className="mt-5">
                <Button
                  variant="secondary"
                  onClick={handleBack}
                >
                  ← Back
                </Button>
              </div>
            )}

            {currentStep === 6 && (
              <div className="mt-5 flex justify-between gap-3">
                <Button
                  variant="secondary"
                  onClick={handleBack}
                >
                  ← Edit
                </Button>

                <Button onClick={handleConfirm}>
                  Confirm Appointment
                </Button>
              </div>
            )}

            {currentStep === 1 && selectedDoctor && (
              <div className="mt-5 flex justify-end">
                <Button onClick={handleNext}>
                  Continue →
                </Button>
              </div>
            )}

            {currentStep === 7 && (
              <div className="mt-5 text-center">
                <p className="text-xs text-slate-400">
                  Prototype only — no real appointment has been
                  created.
                </p>
              </div>
            )}
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Appointment;