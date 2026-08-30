import Button from "../ui/Button";

function ServiceCard({ service }) {
  return (
    <article
      className="
        group flex h-full flex-col overflow-hidden rounded-[1.75rem]
        border border-slate-100 bg-white shadow-sm
        transition-[transform,box-shadow,border-color]
        duration-300 ease-out
        hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg
        motion-reduce:transform-none motion-reduce:transition-none
      "
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#edf7ff]">
      <img
  src={service.image}
  alt={`${service.name} at GreenCare Clinic`}
  className="
    h-full w-full object-cover
    transition-transform duration-500 ease-out
    group-hover:scale-[1.04]
    motion-reduce:transform-none
  "
  loading="lazy"
  decoding="async"
/>

        <span
          className="
            absolute left-4 top-4 flex h-11 w-11
            items-center justify-center rounded-full
            bg-white text-lg font-bold text-blue-600 shadow-sm
            transition-transform duration-300 ease-out
            group-hover:scale-105
            motion-reduce:transform-none
          "
        >
          {service.icon}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
          {service.category}
        </span>

        <h2 className="mt-2 text-lg font-bold text-[#102b4e]">
          {service.name}
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          {service.shortDescription}
        </p>

        {/* Actions */}
        <div className="mt-auto flex flex-col gap-2 pt-6">
          <Button
            to={`/services/${service.id}`}
            variant="secondary"
            size="sm"
            className="w-full rounded-full"
          >
            Learn More →
          </Button>

          <Button
            to="/appointments"
            size="sm"
            className="w-full rounded-full"
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;