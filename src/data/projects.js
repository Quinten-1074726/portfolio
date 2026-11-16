// Helpers for the projects collection (src/content/projects/*.md).
import { getCollection } from "astro:content";

export const contextLabels = {
  school: "School project",
  personal: "Personal project",
};

// "School project · Team", "Personal project · Solo", ... (only the parts that are known)
export function contextText({ context, team }) {
  const parts = [contextLabels[context], team === true ? "Team" : team === false ? "Solo" : null];
  return parts.filter(Boolean).join(" · ");
}

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
