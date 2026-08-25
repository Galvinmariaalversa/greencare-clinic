function EmptyState({
  title = "Nothing found",
  description = "There are no results matching your current filters.",
  actionLabel,
  onAction,
}) {
  return (
    <div className="rounded-[2rem] border border-slate-100 bg-[#f8fbfe] px-6 py-12 text-center sm:px-10">
      
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#edf7ff] text-xl font-bold text-blue-600">
        ?
      </span>

      <h2 className="mt-5 text-xl font-bold text-[#102b4e]">
        {title}
      </h2>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
        {description}
      </p>

      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-6 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
        >
          {actionLabel}
        </button>
      )}

    </div>
  );
}

export default EmptyState;