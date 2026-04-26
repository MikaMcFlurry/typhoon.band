import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { publicAsset } from "@/lib/assets";
import type { Member } from "@/types/content";

type MemberCardProps = {
  member: Member;
};

export function MemberCard({ member }: MemberCardProps) {
  const imageSrc = member.image
    ? publicAsset(member.image, "/assets/images/member-placeholder.svg")
    : "/assets/images/member-placeholder.svg";
  const isFallbackOnly = !member.image;

  return (
    <Card className="overflow-hidden p-0">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-amber-100/12">
        {isFallbackOnly ? (
          <div className="grid h-full place-items-center bg-[radial-gradient(circle_at_center,rgba(215,161,74,0.18),rgba(0,0,0,0.12)_52%,rgba(0,0,0,0.72))] p-6 text-center">
            <div>
              <p className="typhoon-title text-3xl text-amber-100">{member.role}</p>
              <p className="mt-3 text-xs uppercase text-stone-500">Foto folgt</p>
            </div>
          </div>
        ) : (
          <Image
            alt={`${member.name} - ${member.role}`}
            className={`object-cover ${member.id === "mika" ? "object-[52%_22%]" : "object-center"}`}
            fill
            src={imageSrc}
          />
        )}
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-black text-stone-50">{member.name}</h3>
            <p className="text-sm text-amber-100">{member.role}</p>
          </div>
          {member.isPlaceholder ? <Badge tone="muted">Platzhalter</Badge> : null}
        </div>
        <p className="text-sm leading-6 text-stone-400">{member.description}</p>
      </div>
    </Card>
  );
}
