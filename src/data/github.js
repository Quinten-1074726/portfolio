// GitHub data for projects with a `repo` field, fetched at build time (and once per dev session).
// - Never breaks the build: if GitHub can't be reached, it logs a warning and returns null.
// - Each repo is fetched only once (cache), to stay far below GitHub's limit of 60 requests per hour.
// - Optional: put GITHUB_TOKEN=... in a .env file for a higher limit (.env is in .gitignore).

const cache = new Map();

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "portfolio-build",
};
if (import.meta.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${import.meta.env.GITHUB_TOKEN}`;

async function getJson(url) {
  const response = await fetch(url, { headers, signal: AbortSignal.timeout(5000) });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

// "user/repo" → { url, updated, languages: [{ name, percent }] } or null
export function getRepoInfo(repo) {
  if (!repo) return Promise.resolve(null);
  if (cache.has(repo)) return cache.get(repo);

  const request = (async () => {
    try {
      const [info, languageBytes] = await Promise.all([
        getJson(`https://api.github.com/repos/${repo}`),
        getJson(`https://api.github.com/repos/${repo}/languages`),
      ]);

      // Bytes per language → percentages (top 4, at least 1%)
      const total = Object.values(languageBytes).reduce((sum, bytes) => sum + bytes, 0) || 1;
      const languages = Object.entries(languageBytes)
        .map(([name, bytes]) => ({ name, percent: Math.round((bytes / total) * 100) }))
        .filter((language) => language.percent >= 1)
        .slice(0, 4);

      return { url: info.html_url, updated: info.pushed_at, languages };
    } catch (error) {
      console.warn(`[github] Could not load ${repo}: ${error.message}`);
      return null;
    }
  })();

  cache.set(repo, request);
  return request;
}

// "2026-03-19T10:00:00Z" → "Mar 2026"
export function formatMonth(isoDate) {
  return new Date(isoDate).toLocaleDateString("en-GB", { month: "short", year: "numeric" });
}
