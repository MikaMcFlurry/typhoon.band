"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type BookingFields = {
  name: string;
  namePh: string;
  email: string;
  emailPh: string;
  phone: string;
  phonePh: string;
  date: string;
  location: string;
  locationPh: string;
  type: string;
  typePh: string;
  message: string;
  messagePh: string;
};

type BookingFormShellProps = {
  notice: string;
  privacy: string;
  submitLabel: string;
  fields: BookingFields;
};

const inputClasses =
  "min-h-11 w-full border border-amber-100/14 bg-black/40 px-3 py-2 text-stone-100 outline-none transition placeholder:text-stone-500 focus:border-amber-200/70 focus:bg-black/60";

const labelClasses = "grid gap-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-stone-300";

export function BookingFormShell({ notice, privacy, submitLabel, fields }: BookingFormShellProps) {
  const [message, setMessage] = useState("");

  return (
    <form
      className="poster-frame grid gap-6 p-6 sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setMessage(notice);
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className={labelClasses}>
          {fields.name} *
          <input className={inputClasses} name="name" placeholder={fields.namePh} required />
        </label>
        <label className={labelClasses}>
          {fields.email} *
          <input className={inputClasses} name="email" placeholder={fields.emailPh} required type="email" />
        </label>
        <label className={labelClasses}>
          {fields.phone}
          <input className={inputClasses} name="phone" placeholder={fields.phonePh} type="tel" />
        </label>
        <label className={labelClasses}>
          {fields.date}
          <input className={inputClasses} name="eventDate" type="date" />
        </label>
        <label className={labelClasses}>
          {fields.location} *
          <input className={inputClasses} name="location" placeholder={fields.locationPh} required />
        </label>
        <label className={labelClasses}>
          {fields.type} *
          <input className={inputClasses} name="eventType" placeholder={fields.typePh} required />
        </label>
      </div>
      <label className={labelClasses}>
        {fields.message} *
        <textarea className={`${inputClasses} min-h-36 resize-y`} name="message" placeholder={fields.messagePh} required />
      </label>
      <p className="border-l-2 border-amber-200/40 pl-4 text-xs leading-6 text-stone-400">{privacy}</p>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit">{submitLabel}</Button>
        {message ? <p className="text-xs uppercase tracking-[0.22em] text-amber-200">{message}</p> : null}
      </div>
    </form>
  );
}
