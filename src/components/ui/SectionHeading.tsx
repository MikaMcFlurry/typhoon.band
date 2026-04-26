type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, copy, align = "left" }: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`mb-12 max-w-3xl ${alignClasses}`}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h1 className="display text-4xl text-stone-50 sm:text-5xl lg:text-6xl">{title}</h1>
      {copy ? <p className="mt-5 text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">{copy}</p> : null}
    </div>
  );
}
