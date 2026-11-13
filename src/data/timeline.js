// Timeline: education, internships and work from cv.js in one list, newest first.
// Nothing to fill in here: add or change items in cv.js and the timeline follows.
import { education, internships, experience } from "./cv.js";

const MONTHS = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12 };

// Start of a period like "Sep 2026 – Jan 2027" or "2018 – present" → { year, month }
function parseStart(period = "") {
  const year = Number(period.match(/\d{4}/)?.[0] ?? 0);
  const month = MONTHS[period.trim().slice(0, 3).toLowerCase()] ?? 0; // 0 = only a year is known
  return { year, month };
}

const withType = (items, type) => items.map((item) => ({ ...item, type, ...parseStart(item.period) }));

export const timeline = [
  ...withType(education, "education"),
  ...withType(internships, "internship"),
  ...withType(experience, "work"),
].sort((a, b) => b.year - a.year || b.month - a.month);

export const typeLabels = {
  education: "Education",
  internship: "Internship",
  work: "Work",
};
