import { appointmentSteps } from "../../data/appointments";

function AppointmentStepper({ currentStep, completedSteps = [] }) {
  return (
    <div className="mb-8 overflow-x-auto pb-2">
      <div className="flex min-w-[700px] items-center">
        {appointmentSteps.map((step, index) => {
          const isActive = currentStep === step.id;
          const isCompleted = completedSteps.includes(step.id);

          return (
            <div
              key={step.id}
              className="flex flex-1 items-center"
            >
              <div className="flex min-w-0 flex-col items-center">
                <div
                  className={[
                    "flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold transition-colors",
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-100"
                      : isCompleted
                        ? "bg-blue-100 text-blue-700"
                        : "bg-slate-100 text-slate-400",
                  ].join(" ")}
                >
                  {isCompleted ? "✓" : step.id}
                </div>

                <span
                  className={[
                    "mt-2 text-[11px] font-semibold",
                    isActive || isCompleted
                      ? "text-blue-700"
                      : "text-slate-400",
                  ].join(" ")}
                >
                  {step.label}
                </span>
              </div>

              {index < appointmentSteps.length - 1 && (
                <div
                  className={[
                    "mx-2 h-px flex-1",
                    completedSteps.includes(step.id)
                      ? "bg-blue-200"
                      : "bg-slate-200",
                  ].join(" ")}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AppointmentStepper;