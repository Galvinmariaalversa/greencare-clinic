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
  const slots = getTimeSlotsForDoctor(doctor, selectedDate);

  return (
    <div>
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-600">
          Step 4
        </p>

        <h2 className="mt-2 text-2xl font-bold text-[#102b4e]">
          Choose a time
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Available appointment slots are based on the selected
          doctor's mock schedule.
        </p>
      </div>

      {!slots.length ? (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl">
            ◷
          </div>

          <h3 className="mt-4 font-bold text-slate-800">
            No availability
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            There are no appointment slots for the selected date.
            Please choose another date.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {slots.map((slot) => {
            const past = isSlotInThePast(selectedDate, slot);
            const unavailable = isSlotUnavailable(
              selectedDate,
              slot
            );

            const disabled = past || unavailable;
            const selected = selectedTime === slot;

            return (
              <button
                key={slot}
                type="button"
                disabled={disabled}
                onClick={() => onSelect(slot)}
                aria-pressed={selected}
                className={[
                  "rounded-xl border px-4 py-3 text-sm font-semibold transition-all",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
                  disabled
                    ? "cursor-not-allowed border-slate-100 bg-slate-50 text-slate-300"
                    : selected
                      ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-100"
                      : "border-slate-200 bg-white text-slate-700 hover:border-blue-400 hover:text-blue-700",
                ].join(" ")}
              >
                <span className="block">{slot}</span>

                {past && (
                  <span className="mt-1 block text-[10px] font-normal">
                    Past
                  </span>
                )}

                {!past && unavailable && (
                  <span className="mt-1 block text-[10px] font-normal">
                    Unavailable
                  </span>
                )}

                {!disabled && selected && (
                  <span className="mt-1 block text-[10px] font-normal text-blue-100">
                    Selected
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full border border-slate-200 bg-white" />
          Available
        </div>

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-blue-600" />
          Selected
        </div>

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-slate-100" />
          Unavailable / Past
        </div>
      </div>
    </div>
  );
}

export default TimeSlotSelector;