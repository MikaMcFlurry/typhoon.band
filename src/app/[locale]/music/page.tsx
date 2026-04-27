import { redirect } from "next/navigation";
import { normalizeLocale } from "@/i18n/routing";

export default async function MusicRedirect({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  redirect(`/${normalizeLocale(localeParam)}#music`);
}
