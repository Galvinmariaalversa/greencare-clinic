import Container from "./Container";

function PageHeader({
  eyebrow,
  title,
  description,
}) {
  return (
    <section className="bg-[#edf7ff] py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600 sm:text-xs">
            {eyebrow}
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#102b4e] sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              {description}
            </p>
          )}

        </div>
      </Container>
    </section>
  );
}

export default PageHeader;