import {
  getTimeSlotsForDoctor,
  isSlotInThePast,
  isSlotUnavailable,
} from "../../data/appointments";

function TimeSlotSelector({
  doctor,
  selectedDate,
  selectedTime,
  onSelect,
}) {
  const slots = getTimeSlotsForDoctor(
    doctor,
    selectedDate
  );

  if (!selectedDate) {
    return (
      <div>
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-600">
            Step 4
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[#102b4e]">
            Choose a time
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Select a date first to view available appointment
            times.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
          <p className="text-sm font-semibold text-slate-700">
            No date selected
          </p>

          <p className="mt-2 text-xs leading-5 text-slate-500">
            Go back and choose an appointment date.
          </p>
        </div>
      </div>
    );
  }

  if (slots.length === 0) {
    return (
      <div>
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-600">
            Step 4
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[#102b4e]">
            Choose a time
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Available appointment times will appear here.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
          <p className="text-sm font-semibold text-slate-700">
            No availability
          </p>

          <p className="mt-2 text-xs leading-5 text-slate-500">
            There are no appointment slots available for this
            doctor on the selected date.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-600">
          Step 4
        </p>

        <h2 className="mt-2 text-2xl font-bold text-[#102b4e]">
          Choose a time
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Select an available appointment time.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {slots.map((slot) => {
          const past = isSlotInThePast(
            selectedDate,
            slot
          );

          const unavailable = isSlotUnavailable(
            selectedDate,
            slot
          );

          const selected = selectedTime === slot;

          const disabled = past || unavailable;

          return (
            <button
              key={slot}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(slot)}
              aria-pressed={selected}
              aria-label={`${slot}${
                selected
                  ? ", selected"
                  : past
                    ? ", past"
                    : unavailable
                      ? ", unavailable"
                      : ", available"
              }`}
              className={[
                "relative rounded-xl border px-4 py-3 text-sm font-semibold",
                "transition-all duration-300 ease-out",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
                "active:scale-[0.97]",

                selected
                  ? "scale-[1.02] border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-100"
                  : past
                    ? "cursor-not-allowed border-slate-100 bg-slate-50 text-slate-300"
                    : unavailable
                      ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400"
                      : "border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-700 hover:shadow-sm",
              ].join(" ")}
            >
              {selected && (
                <span
                  className="
                    absolute right-2 top-2
                    flex h-5 w-5 items-center justify-center
                    rounded-full bg-white/20
                    text-[10px] font-bold
                  "
                  aria-hidden="true"
                >
                  ✓
                </span>
              )}

              <span className="block">
                {slot}
              </span>

              <span
                className={[
                  "mt-1 block text-[10px] font-medium",
                  selected
                    ? "text-blue-100"
                    : past
                      ? "text-slate-300"
                      : unavailable
                        ? "text-slate-400"
                        : "text-slate-400",
                ].join(" ")}
              >
                {selected
                  ? "Selected"
                  : past
                    ? "Past"
                    : unavailable
                      ? "Unavailable"
                      : "Available"}
              </span>
            </button>
          );
        })}
      </div>

      {selectedTime && (
        <div
          className="
            mt-5 rounded-xl border border-blue-100
            bg-blue-50 px-4 py-3
            animate-[appointmentStepEnter_300ms_ease-out]
          "
        >
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
              ✓
            </span>

            <div>
              <p className="text-xs font-bold text-blue-800">
                Time selected
              </p>

              <p className="mt-1 text-xs text-blue-700">
                Your selected time is{" "}
                <strong>{selectedTime}</strong>.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-4 text-[11px] text-slate-500">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full border border-slate-200 bg-white" />
          Available
        </div>

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-blue-600" />
          Selected
        </div>

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-slate-200" />
          Unavailable
        </div>
      </div>
    </div>
  );
}

export default TimeSlotSelector;