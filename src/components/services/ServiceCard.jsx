import { Link } from "react-router-dom";

function ServiceCard({ service }) {
  return (
    <article className="group flex flex-col items-center text-center">
      <Link
        to={`/services/${service.id}`}
        className="relative block rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
        aria-label={`View ${service.name}`}
      >
        <div className="h-[132px] w-[132px] overflow-hidden rounded-full border-[6px] border-[#edf6ff] bg-[#edf6ff] shadow-sm transition-transform duration-200 group-hover:-translate-y-1 sm:h-[145px] sm:w-[145px]">
          <img
            src={service.image}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <span
          className="absolute bottom-0 right-0 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-white bg-blue-600 text-sm font-bold text-white shadow-md"
          aria-hidden="true"
        >
          {service.icon}
        </span>
      </Link>

      <h3 className="mt-4 text-[15px] font-bold text-[#102b4e] sm:text-base">
        {service.name}
      </h3>

      <p className="mt-2 max-w-[190px] text-[12px] leading-5 text-slate-500 sm:text-[13px]">
        {service.description}
      </p>

      <Link
        to={`/services/${service.id}`}
        className="mt-3 text-xs font-semibold text-blue-600 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        Learn More →
      </Link>
    </article>
  );
}

export default ServiceCard;