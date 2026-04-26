type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
};

export function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? <p className="typhoon-kicker mb-3">{eyebrow}</p> : null}
      <h2 className="text-3xl font-black leading-tight text-stone-50 sm:text-4xl">{title}</h2>
      {copy ? <p className="mt-4 text-base leading-7 text-stone-300">{copy}</p> : null}
    </div>
  );
}
