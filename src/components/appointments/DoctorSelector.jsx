function DoctorSelector({ doctors, selectedDoctor, onSelect }) {
  if (!doctors?.length) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
        <p className="font-semibold text-slate-800">
          No doctors available
        </p>

        <p className="mt-2 text-sm text-slate-500">
          Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-600">
          Step 1
        </p>

        <h2 className="mt-2 text-2xl font-bold text-[#102b4e]">
          Choose your doctor
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Select the healthcare professional you would like to consult.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {doctors.map((doctor) => {
          const selected = selectedDoctor?.id === doctor.id;

          return (
            <button
              key={doctor.id}
              type="button"
              onClick={() => onSelect(doctor)}
              aria-pressed={selected}
              className={[
                "group rounded-2xl border bg-white p-4 text-left transition-all",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
                selected
                  ? "border-blue-600 bg-blue-50/50 shadow-md shadow-blue-100"
                  : "border-slate-200 hover:border-blue-300 hover:shadow-sm",
              ].join(" ")}
            >
              <div className="flex gap-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-20 w-20 shrink-0 rounded-xl object-cover"
                />

                <div className="min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-[#102b4e]">
                        {doctor.name}
                      </h3>

                      <p className="mt-1 text-xs font-medium text-blue-600">
                        {doctor.specialization}
                      </p>
                    </div>

                    {selected && (
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                        ✓
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-xs text-slate-500">
                    {doctor.qualification} · {doctor.experience}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default DoctorSelector;