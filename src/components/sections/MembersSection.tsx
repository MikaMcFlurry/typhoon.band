import { MemberCard } from "@/components/sections/MemberCard";
import { members } from "@/data/members";

type MembersSectionProps = {
  title: string;
  copy: string;
  eyebrow?: string;
};

export function MembersSection({ title, copy, eyebrow = "Members" }: MembersSectionProps) {
  return (
    <div className="mx-auto max-w-[1640px] px-4 pb-24 sm:px-6 lg:px-10">
      <div className="mb-10 max-w-2xl">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2 className="display text-4xl text-stone-50 sm:text-5xl">{title}</h2>
        <p className="mt-4 text-base leading-7 text-stone-300">{copy}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
