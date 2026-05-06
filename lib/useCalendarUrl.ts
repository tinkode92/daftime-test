"use client";

import { useStoredCountry } from "@/components/CountryGate";
import { CALENDAR_URLS } from "./calendarUrl";

/** Hook: returns the calendar URL matching the user's stored country. */
export function useCalendarUrl(): string {
  const country = useStoredCountry();
  return CALENDAR_URLS[country] ?? CALENDAR_URLS.AE;
}
