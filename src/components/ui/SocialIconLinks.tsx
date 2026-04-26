import { platformLinks } from "@/data/platform-links";

type IconProps = { className?: string };

const icons: Record<string, (props: IconProps) => React.ReactElement> = {
  instagram: ({ className }) => (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 24 24">
      <rect height="18" rx="5" stroke="currentColor" strokeWidth="1.5" width="18" x="3" y="3" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" fill="currentColor" r="1" />
    </svg>
  ),
  facebook: ({ className }) => (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 24 24">
      <path
        d="M14 8h2.5V5H14c-1.66 0-3 1.34-3 3v2H9v3h2v8h3v-8h2.5l.5-3H14V8.5c0-.28.22-.5.5-.5z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  ),
  youtube: ({ className }) => (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 24 24">
      <rect height="13" rx="3" stroke="currentColor" strokeWidth="1.5" width="20" x="2" y="5.5" />
      <path d="M10 9.5v5l4.5-2.5L10 9.5z" fill="currentColor" />
    </svg>
  ),
  spotify: ({ className }) => (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.5 10c3-1 6-1 9 .5M8 13c2.5-.7 5-.5 7 .8M8.5 16c2-.5 4-.3 5.5.7" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
    </svg>
  ),
  soundcloud: ({ className }) => (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 24 24">
      <path
        d="M3 14v3M5.5 12v5M8 11v6M10.5 10v7M13 9v8h6a3 3 0 100-6 4 4 0 00-7 2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.4"
      />
    </svg>
  ),
  bandcamp: ({ className }) => (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 24 24">
      <path d="M3 17l5-10h13l-5 10H3z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  ),
};

type SocialIconLinksProps = {
  className?: string;
  iconClassName?: string;
};

export function SocialIconLinks({ className = "", iconClassName = "h-4 w-4" }: SocialIconLinksProps) {
  // Show all known icons as visual placeholders. Active links open. Inactive remain non-clickable.
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {platformLinks.map((link) => {
        const Icon = icons[link.id];
        if (!Icon) return null;
        const isActive = link.active && link.url && link.url !== "#";
        const baseClasses =
          "grid h-9 w-9 place-items-center rounded-full border border-amber-100/14 text-stone-300 transition";
        const interactiveClasses = isActive
          ? "hover:border-amber-200/60 hover:text-amber-100"
          : "opacity-60";

        return (
          <li key={link.id}>
            {isActive ? (
              <a
                aria-label={link.label}
                className={`${baseClasses} ${interactiveClasses}`}
                href={link.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon className={iconClassName} />
              </a>
            ) : (
              <span aria-label={`${link.label} – folgt`} className={`${baseClasses} ${interactiveClasses}`} role="img">
                <Icon className={iconClassName} />
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
