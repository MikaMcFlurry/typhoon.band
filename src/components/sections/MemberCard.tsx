import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { publicAsset } from "@/lib/assets";
import type { Member } from "@/types/content";

type MemberCardProps = {
  member: Member;
  showPlaceholderBadge?: boolean;
};

export function MemberCard({ member, showPlaceholderBadge = true }: MemberCardProps) {
  const imageSrc = member.image
    ? publicAsset(member.image, "/assets/images/member-placeholder.svg")
    : "/assets/images/member-placeholder.svg";
  const isFallbackOnly = !member.image;

  return (
    <Card className="group overflow-hidden p-0">
      <div className="relative aspect-[3/4] overflow-hidden border-b border-amber-100/12 sm:aspect-[4/5]">
        {isFallbackOnly ? (
          <div className="grid h-full place-items-center bg-[radial-gradient(circle_at_center,rgba(215,161,74,0.18),rgba(0,0,0,0.12)_52%,rgba(0,0,0,0.72))] p-6 text-center">
            <div>
              <p className="text-2xl font-black uppercase tracking-[0.08em] text-amber-100">{member.role}</p>
              <p className="mt-3 text-xs uppercase text-stone-500">Foto folgt</p>
            </div>
          </div>
        ) : (
          <Image
            alt={`${member.name} - ${member.role}`}
            className={`object-cover transition duration-500 group-hover:scale-105 ${member.id === "mika" ? "object-[52%_20%]" : "object-center"}`}
            fill
            src={imageSrc}
          />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_38%,rgba(0,0,0,0.76))]" />
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-black text-stone-50">{member.name}</h3>
            <p className="text-sm text-amber-100">{member.role}</p>
          </div>
          {member.isPlaceholder && showPlaceholderBadge ? <Badge tone="muted">Platzhalter</Badge> : null}
        </div>
        <p className="text-sm leading-6 text-stone-400">{member.description}</p>
      </div>
    </Card>
  );
}
