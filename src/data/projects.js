// Helpers for the projects collection (src/content/projects/*.md).
import { getCollection } from "astro:content";

export const typeLabels = {
  school: "School",
  team: "Team",
  personal: "Personal",
};

// All published projects (no drafts), newest first: by year, then month, then `order`.
// Projects without a year go last.
export async function getProjects() {
  const projects = await getCollection("projects", ({ data }) => !data.draft);
  return projects.sort(
    (a, b) =>
      (b.data.year ?? 0) - (a.data.year ?? 0) ||
      (b.data.month ?? 0) - (a.data.month ?? 0) ||
      a.data.order - b.data.order,
  );
}
