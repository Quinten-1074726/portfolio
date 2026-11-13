// CV data for the About page (education, experience, internships, qualities).
// Source: Quinten's own CV, translated to English. Most recent first.
// Each item: title, organisation, period, optional status, text (one sentence) and url (link to e.g. the study page).

export const education = [
  {
    title: "Creative Media and Game Technologies (CMGT)",
    organisation: "Hogeschool Rotterdam",
    url: "https://www.hogeschoolrotterdam.nl/opleidingen/bachelor/creative-media-and-game-technologies/voltijd/",
    period: "Sep 2025 – 2027", // year 4: minor Digital Humans, then the graduation internship
    status: "In progress",
  },
  {
    title: "Minor Digital Humans",
    organisation: "Hogeschool Rotterdam, part of CMGT",
    period: "Sep 2026 – Jan 2027", // 4th year of CMGT: minor first, then the graduation internship
    status: "In progress",
  },
  {
    title: "Associate Degree Software Developer",
    organisation: "Hogeschool Rotterdam",
    period: "2023 – 2025",
    status: "Diploma obtained",
  },
  {
    title: "Media Designer, Visual Design & Animation",
    organisation: "Grafisch Lyceum Rotterdam",
    period: "2019 – 2022",
    status: "Diploma obtained",
  },
  {
    title: "Secondary school (VMBO-GT)",
    organisation: "Wartburg College Marnix, Dordrecht",
    period: "2015 – 2019",
    status: "Diploma obtained",
  },
];

export const experience = [
  {
    title: "Crew member",
    organisation: "McDonald's, Hendrik-Ido-Ambacht",
    period: "2018 – present", // TODO: check (CV says "2018-")
  },
  {
    title: "Digistuud",
    organisation: "Zorgwaard, Oud-Beijerland",
    period: "Mar 2024 – Jan 2025",
  },
  {
    title: "Store employee",
    organisation: "ANWB, Rotterdam",
    period: "Sep 2022 – Jan 2023",
  },
  {
    title: "Seasonal worker",
    organisation: "Munter Tuinier, Ridderkerk",
    period: "Jul 2021 – Aug 2021",
  },
];

export const internships = [
  {
    title: "Graduation internship",
    organisation: "BURORUW, Hendrik-Ido-Ambacht",
    period: "Feb 2025 – Jul 2025",
    status: "Completed",
    text: "Graduation internship for the Associate Degree Software Developer.",
  },
  {
    title: "Intern",
    organisation: "Rocketboys, Dordrecht",
    period: "Feb 2022 – Jul 2022",
    status: "Completed",
  },
  {
    title: "Intern",
    organisation: "MEE TienPlus, Dordrecht",
    period: "Sep 2021 – Jan 2022",
    status: "Completed",
  },
];

// Personal qualities ("Eigenschappen" on the CV)
export const qualities = [
  "Creative",
  "Persistent",
  "Precise",
  "Caring",
  "Eager to learn",
  "Team player",
  "Works independently",
  "Hard-working",
  "Sociable",
  "Calm",
  "Disciplined",
  // Added, in line with the qualities above:
  "Curious",
  "Reliable",
  "Problem solver",
];
