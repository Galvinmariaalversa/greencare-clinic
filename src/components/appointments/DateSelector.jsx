import {
  getDayName,
  getTodayString,
} from "../../data/appointments";

function DateSelector({
  doctor,
  selectedDate,
  onSelect,
}) {
  const today = getTodayString();

  const isAvailableDay = selectedDate
    ? doctor?.availableDays?.includes(
        getDayName(selectedDate)
      )
    : false;

  return (
    <div>
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-600">
          Step 3
        </p>

        <h2 className="mt-2 text-2xl font-bold text-[#102b4e]">
          Choose a date
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Select a date that works for your appointment.
        </p>
      </div>

      <div className="mx-auto max-w-xl">
        <label
          htmlFor="appointment-date"
          className="block text-sm font-semibold text-slate-800"
        >
          Appointment Date
        </label>

        <input
          id="appointment-date"
          type="date"
          min={today}
          value={selectedDate}
          onChange={(event) => onSelect(event.target.value)}
          className="
            mt-2 w-full rounded-xl border border-slate-200
            bg-white px-4 py-3 text-sm text-slate-800
            outline-none
            transition-all duration-300
            focus:-translate-y-0.5
            focus:border-blue-600
            focus:ring-4
            focus:ring-blue-100
          "
        />

        {!selectedDate && (
          <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
            <p className="text-xs leading-5 text-slate-500">
              Please choose a future date. Availability is based
              on the selected doctor's mock schedule.
            </p>
          </div>
        )}

        {selectedDate && isAvailableDay && (
          <div
            className="
              mt-4 rounded-xl border border-blue-100
              bg-blue-50 px-4 py-3
              animate-[appointmentStepEnter_300ms_ease-out]
            "
          >
            <div className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                ✓
              </span>

              <div>
                <p className="text-xs font-bold text-blue-800">
                  Date available
                </p>

                <p className="mt-1 text-xs leading-5 text-blue-700">
                  {doctor.name} is available on{" "}
                  {getDayName(selectedDate)}.
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedDate && !isAvailableDay && (
          <div
            className="
              mt-4 rounded-xl border border-amber-200
              bg-amber-50 px-4 py-3
              animate-[appointmentStepEnter_300ms_ease-out]
            "
          >
            <div className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
                !
              </span>

              <div>
                <p className="text-xs font-bold text-amber-800">
                  Doctor unavailable
                </p>

                <p className="mt-1 text-xs leading-5 text-amber-700">
                  {doctor.name} is not scheduled on{" "}
                  {getDayName(selectedDate)}. Please choose another
                  date.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DateSelector;