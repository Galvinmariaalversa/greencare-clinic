function ServiceSelector({
  services,
  selectedService,
  onSelect,
}) {
  if (!services || services.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
        <p className="text-sm font-semibold text-slate-700">
          No services are currently available.
        </p>

        <p className="mt-2 text-xs leading-5 text-slate-500">
          Please go back and choose another doctor.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-600">
          Step 2
        </p>

        <h2 className="mt-2 text-2xl font-bold text-[#102b4e]">
          Choose a service
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Select the service you would like to book.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((service) => {
          const selected = selectedService?.id === service.id;

          return (
            <button
              key={service.id}
              type="button"
              onClick={() => onSelect(service)}
              aria-pressed={selected}
              className={[
                "relative w-full rounded-2xl border bg-white p-5 text-left",
                "transition-all duration-300 ease-out",
                "active:scale-[0.99]",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",

                selected
                  ? "scale-[1.01] border-blue-600 bg-blue-50/50 shadow-md shadow-blue-100"
                  : "border-slate-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-sm",
              ].join(" ")}
            >
              {selected && (
                <span
                  className="
                    absolute right-4 top-4
                    flex h-7 w-7 items-center justify-center
                    rounded-full bg-blue-600
                    text-xs font-bold text-white
                    animate-[appointmentStepEnter_200ms_ease-out]
                  "
                  aria-hidden="true"
                >
                  ✓
                </span>
              )}

              <div className="pr-9">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#edf7ff] text-lg text-blue-600">
                    {service.icon || "✦"}
                  </span>

                  <div>
                    <h3 className="text-sm font-bold text-[#102b4e]">
                      {service.name}
                    </h3>

                    {service.category && (
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.1em] text-blue-600">
                        {service.category}
                      </p>
                    )}
                  </div>
                </div>

                {service.shortDescription && (
                  <p className="mt-4 text-xs leading-5 text-slate-500">
                    {service.shortDescription}
                  </p>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span
                  className={[
                    "text-xs font-semibold transition-colors duration-300",
                    selected
                      ? "text-blue-700"
                      : "text-slate-400",
                  ].join(" ")}
                >
                  {selected ? "Selected" : "Select service"}
                </span>

                <span
                  className={[
                    "text-sm transition-transform duration-300",
                    selected
                      ? "translate-x-1 text-blue-600"
                      : "text-slate-400",
                  ].join(" ")}
                  aria-hidden="true"
                >
                  →
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceSelector;