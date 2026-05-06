/**
 * The two Daftime appointment calendars. France and UAE each have their
 * own consultant calendar; Portugal (and any unknown country) falls
 * back to the UAE calendar — Daftime's default global one — until a
 * dedicated PT calendar exists.
 *
 * No `"use client"` here on purpose: the constants are imported by both
 * server components (PodcastWorldMap) and client components.
 */
export const CALENDAR_URLS = {
  AE: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1oFNxdK2fpuC4-T5Up6Pjn8hOUfYsylts0SpYM9qh3SY8elkuZZoQBOHaKiwKUy7kZYMvD1ZAb?gv=true",
  FR: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3pjx3qqtSmHJuJF4P_ClCHPMM1zTS9dpjc_JL4d3DgcV-S5bWcQmPK-FEYogHUS6RMpSftIr-r?gv=true",
  PT: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1oFNxdK2fpuC4-T5Up6Pjn8hOUfYsylts0SpYM9qh3SY8elkuZZoQBOHaKiwKUy7kZYMvD1ZAb?gv=true",
} as const;
