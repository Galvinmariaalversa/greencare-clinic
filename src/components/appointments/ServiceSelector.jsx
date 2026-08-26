function ServiceSelector({
  services,
  selectedService,
  onSelect,
}) {
  if (!services?.length) {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <h3 className="font-bold text-amber-900">
          No services available
        </h3>

        <p className="mt-2 text-sm text-amber-800">
          The selected doctor currently has no appointment services
          configured.
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

        <p className="mt-2 text-sm text-slate-500">
          Only services associated with your selected doctor are shown.
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
                "rounded-2xl border bg-white p-5 text-left transition-all",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
                selected
                  ? "border-blue-600 bg-blue-50/50 shadow-md shadow-blue-100"
                  : "border-slate-200 hover:border-blue-300 hover:shadow-sm",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-lg text-blue-600">
                  {service.icon}
                </span>

                {selected && (
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    ✓
                  </span>
                )}
              </div>

              <h3 className="mt-4 font-bold text-[#102b4e]">
                {service.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {service.shortDescription}
              </p>

              <p className="mt-4 text-xs font-semibold text-blue-600">
                {service.consultationDuration}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceSelector;