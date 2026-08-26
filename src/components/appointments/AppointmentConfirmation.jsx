import { formatDateForDisplay } from "../../data/appointments";
import Button from "../ui/Button";

function AppointmentConfirmation({
  doctor,
  service,
  date,
  time,
  patient,
  referenceNumber,
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-600">
        ✓
      </div>

      <p className="mt-6 text-xs font-bold uppercase tracking-[0.12em] text-blue-600">
        Step 7
      </p>

      <h1 className="mt-2 text-3xl font-bold text-[#102b4e] sm:text-4xl">
        Appointment Confirmed
      </h1>

      <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-500">
        Your frontend appointment prototype has been completed
        successfully.
      </p>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
        <div className="border-b border-slate-100 pb-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Reference Number
          </p>

          <p className="mt-2 text-xl font-bold tracking-wide text-blue-600">
            {referenceNumber}
          </p>
        </div>

        <div className="mt-5 space-y-4">
          <Row label="Doctor" value={doctor?.name} />
          <Row label="Service" value={service?.name} />
          <Row
            label="Date"
            value={formatDateForDisplay(date)}
          />
          <Row label="Time" value={time} />
          <Row label="Patient" value={patient?.fullName} />
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-4 text-left">
        <p className="text-xs leading-5 text-blue-800">
          <strong>Frontend prototype:</strong> This confirmation
          does not represent a real appointment. No booking request,
          email, database record, or payment has been created.
        </p>
      </div>

      <div className="mt-7">
        <Button to="/" size="md" className="rounded-full">
          Return to Home
        </Button>
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-xs font-semibold text-slate-400">
        {label}
      </span>

      <span className="text-right text-sm font-semibold text-slate-700">
        {value || "—"}
      </span>
    </div>
  );
}

export default AppointmentConfirmation;