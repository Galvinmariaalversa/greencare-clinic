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

  const availableDays = doctor?.availableDays || [];

  return (
    <div>
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-600">
          Step 3
        </p>

        <h2 className="mt-2 text-2xl font-bold text-[#102b4e]">
          Choose a date
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Select a future date when your doctor is available.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <label
          htmlFor="appointment-date"
          className="block text-sm font-semibold text-slate-800"
        >
          Appointment date
        </label>

        <input
          id="appointment-date"
          type="date"
          min={today}
          value={selectedDate}
          onChange={(event) => {
            const value = event.target.value;

            if (!value) {
              onSelect("");
              return;
            }

            const day = getDayName(value);

            if (!availableDays.includes(day)) {
              onSelect("");
              return;
            }

            onSelect(value);
          }}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        />

        <div className="mt-5 rounded-xl bg-blue-50 p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Doctor availability
          </p>

          <div className="mt-2 flex flex-wrap gap-2">
            {availableDays.map((day) => (
              <span
                key={day}
                className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-blue-700"
              >
                {day}
              </span>
            ))}
          </div>
        </div>

        {selectedDate &&
          !availableDays.includes(getDayName(selectedDate)) && (
            <p className="mt-3 text-sm font-medium text-red-600">
              The selected doctor is not available on this date.
            </p>
          )}
      </div>
    </div>
  );
}

export default DateSelector;