import { formatDateForDisplay } from "../../data/appointments";

function AppointmentSummary({
  doctor,
  service,
  date,
  time,
  patient,
}) {
  return (
    <div>
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-600">
          Step 6
        </p>

        <h2 className="mt-2 text-2xl font-bold text-[#102b4e]">
          Review your appointment
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Check the information before continuing.
        </p>
      </div>

      <div className="space-y-4">
        <SummarySection title="Appointment">
          <SummaryRow label="Doctor" value={doctor?.name} />
          <SummaryRow
            label="Specialization"
            value={doctor?.specialization}
          />
          <SummaryRow label="Service" value={service?.name} />
          <SummaryRow
            label="Date"
            value={formatDateForDisplay(date)}
          />
          <SummaryRow label="Time" value={time} />
        </SummarySection>

        <SummarySection title="Patient">
          <SummaryRow label="Name" value={patient.fullName} />
          <SummaryRow label="Phone" value={patient.phone} />
          <SummaryRow label="Email" value={patient.email} />
          <SummaryRow label="Age" value={patient.age} />
          <SummaryRow label="Gender" value={patient.gender} />

          <div className="border-t border-slate-100 pt-4">
            <p className="text-xs font-semibold text-slate-400">
              Reason for Visit
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-700">
              {patient.reason}
            </p>
          </div>
        </SummarySection>
      </div>
    </div>
  );
}

function SummarySection({ title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#102b4e]">
        {title}
      </h3>

      <div className="space-y-3">{children}</div>
    </div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex flex-col gap-1 border-b border-slate-100 pb-3 last:border-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <span className="text-xs font-semibold text-slate-400">
        {label}
      </span>

      <span className="text-sm font-semibold text-slate-700 sm:text-right">
        {value || "—"}
      </span>
    </div>
  );
}

export default AppointmentSummary;