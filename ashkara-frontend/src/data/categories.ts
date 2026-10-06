export const CATEGORIES = [
  "All",
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "MERN Stack",
  "Android Development",
  "Cloud Computing",
  "Cyber Security",
  "Internet of Things",
  "Electronics (ECE)",
  "Electrical (EEE)",
  "Mechanical Engineering",
  "Civil Engineering",
] as const;

export type FilterCategory = (typeof CATEGORIES)[number];
