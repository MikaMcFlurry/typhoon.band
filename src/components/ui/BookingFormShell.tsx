"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type BookingFormShellProps = {
  notice: string;
  privacy: string;
  submitLabel: string;
};

const inputClasses =
  "min-h-11 rounded-md border border-amber-100/14 bg-black/30 px-3 py-2 text-stone-100 outline-none transition placeholder:text-stone-500 focus:border-amber-200/60";

export function BookingFormShell({ notice, privacy, submitLabel }: BookingFormShellProps) {
  const [message, setMessage] = useState("");

  return (
    <form
      className="grid gap-5 rounded-lg border border-amber-100/12 bg-stone-950/60 p-5 sm:p-7"
      onSubmit={(event) => {
        event.preventDefault();
        setMessage(notice);
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-stone-300">
          Name
          <input className={inputClasses} name="name" placeholder="Dein Name" required />
        </label>
        <label className="grid gap-2 text-sm text-stone-300">
          E-Mail
          <input className={inputClasses} name="email" placeholder="mail@example.com" required type="email" />
        </label>
        <label className="grid gap-2 text-sm text-stone-300">
          Telefon optional
          <input className={inputClasses} name="phone" placeholder="+49 ..." type="tel" />
        </label>
        <label className="grid gap-2 text-sm text-stone-300">
          Veranstaltungsdatum optional
          <input className={inputClasses} name="eventDate" type="date" />
        </label>
        <label className="grid gap-2 text-sm text-stone-300">
          Ort
          <input className={inputClasses} name="location" placeholder="Stadt / Venue" required />
        </label>
        <label className="grid gap-2 text-sm text-stone-300">
          Art der Veranstaltung
          <input className={inputClasses} name="eventType" placeholder="Club, Festival, privat ..." required />
        </label>
      </div>
      <label className="grid gap-2 text-sm text-stone-300">
        Nachricht
        <textarea className={`${inputClasses} min-h-36 resize-y`} name="message" placeholder="Worum geht es?" required />
      </label>
      <p className="text-sm leading-6 text-stone-400">{privacy}</p>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit">{submitLabel}</Button>
        {message ? <p className="text-sm font-semibold text-amber-100">{message}</p> : null}
      </div>
    </form>
  );
}
