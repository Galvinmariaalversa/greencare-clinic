import { useMemo } from "react";

function DoctorFilter({
  searchTerm,
  specialization,
  specializations,
  onSearchChange,
  onSpecializationChange,
  onClear,
}) {
  const hasActiveFilters = useMemo(
    () => Boolean(searchTerm.trim() || specialization !== "all"),
    [searchTerm, specialization]
  );

  return (
    <section
      aria-label="Doctor search and filters"
      className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5"
    >
      <div className="grid gap-4 md:grid-cols-[1fr_240px_auto] md:items-end">

        {/* Search */}
        <div>
          <label
            htmlFor="doctor-search"
            className="mb-2 block text-xs font-semibold text-[#102b4e]"
          >
            Search doctors
          </label>

          <input
            id="doctor-search"
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by name or specialization"
            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Specialization */}
        <div>
          <label
            htmlFor="doctor-specialization"
            className="mb-2 block text-xs font-semibold text-[#102b4e]"
          >
            Specialization
          </label>

          <select
            id="doctor-specialization"
            value={specialization}
            onChange={(event) =>
              onSpecializationChange(event.target.value)
            }
            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="all">All Specializations</option>

            {specializations.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Clear */}
        <button
          type="button"
          onClick={onClear}
          disabled={!hasActiveFilters}
          className="h-11 rounded-xl border border-slate-200 px-5 text-sm font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Clear Filters
        </button>

      </div>
    </section>
  );
}

export default DoctorFilter;