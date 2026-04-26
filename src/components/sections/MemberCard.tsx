import Image from "next/image";
import type { Member } from "@/types/content";

type MemberCardProps = {
  member: Member;
};

export function MemberCard({ member }: MemberCardProps) {
  const hasImage = Boolean(member.image);

  return (
    <article className="poster-frame group relative overflow-hidden">
      <div className="relative aspect-[3/4] overflow-hidden border-b border-amber-100/10">
        {hasImage ? (
          <>
            <Image
              alt={`${member.name} – ${member.role}`}
              className={`object-cover saturate-[0.85] transition duration-500 group-hover:scale-[1.03] ${
                member.id === "mika" ? "object-[55%_22%]" : "object-[center_15%]"
              }`}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              src={member.image as string}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(5,3,2,0.85)_85%,rgba(5,3,2,0.96))]" />
          </>
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_center,rgba(160,113,64,0.18),rgba(0,0,0,0.45)_55%,rgba(0,0,0,0.92))]">
            <p className="display text-3xl text-amber-200/80">{member.name.charAt(0)}</p>
            <span className="absolute inset-0 grain" />
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
          <div>
            <p className="display text-2xl text-stone-50">{member.name}</p>
            <p className="text-xs uppercase tracking-[0.28em] text-amber-200/85">{member.role}</p>
          </div>
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm leading-6 text-stone-400">{member.description}</p>
      </div>
    </article>
  );
}
