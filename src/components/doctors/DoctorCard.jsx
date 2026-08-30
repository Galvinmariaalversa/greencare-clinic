import { Link } from "react-router-dom";
import Button from "../ui/Button";

function DoctorCard({ doctor }) {
  return (
    <article
      className="
        group flex h-full flex-col rounded-[1.75rem]
        border border-slate-100 bg-white p-5 shadow-sm
        transition-[transform,box-shadow,border-color]
        duration-300 ease-out
        hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg
        motion-reduce:transform-none motion-reduce:transition-none
        sm:p-6
      "
    >
      {/* Photo */}
      <Link
        to={`/doctors/${doctor.id}`}
        aria-label={`View ${doctor.name}'s profile`}
        className="
          mx-auto block rounded-full
          focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-blue-600
        "
      >
        <div
          className="
            h-36 w-36 overflow-hidden rounded-full
            border-[6px] border-[#edf7ff] bg-slate-100
            transition-[border-color,transform]
            duration-300 ease-out
            group-hover:border-blue-100
            sm:h-40 sm:w-40
          "
        >
         <img
  src={doctor.image}
  alt={`${doctor.name}, ${doctor.specialization}`}
  className="
    h-full w-full object-cover
    transition-transform duration-500 ease-out
    group-hover:scale-[1.04]
    motion-reduce:transform-none
  "
  loading="lazy"
  decoding="async"
/>
        </div>
      </Link>

      {/* Basic information */}
      <div className="mt-5 text-center">
        <h2 className="text-base font-bold text-[#102b4e] sm:text-lg">
          {doctor.name}
        </h2>

        <p className="mt-1 text-sm font-semibold text-blue-600">
          {doctor.specialization}
        </p>

        <p className="mt-1 text-xs text-slate-500">
          {doctor.qualification}
        </p>
      </div>

      {/* Details */}
      <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
        <div className="flex items-center justify-between gap-3 text-xs">
          <span className="text-slate-400">
            Experience
          </span>

          <span className="font-semibold text-slate-700">
            {doctor.experience}
          </span>
        </div>

        <div className="flex items-start justify-between gap-3 text-xs">
          <span className="shrink-0 text-slate-400">
            Available
          </span>

          <span className="text-right font-medium text-slate-700">
            {doctor.availableDays.join(" • ")}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-auto flex flex-col gap-2 pt-6">
        <Button
          to={`/doctors/${doctor.id}`}
          variant="secondary"
          size="sm"
          className="w-full rounded-full"
        >
          View Profile
        </Button>

        <Button
          to="/appointments"
          size="sm"
          className="w-full rounded-full"
        >
          Book Appointment
        </Button>
      </div>
    </article>
  );
}

export default DoctorCard;