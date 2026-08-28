export type Person = {
  name: string;
  role: string;
  status: "lead" | "current" | "alumni";
  projects: string[];
  photo?: string;
  profileUrl?: string;
};

export type Project = {
  slug: string;
  title: string;
  theme: string;
  summary: string;
  members: string[];
  status: "active" | "developing";
  outputs: string[];
};

export type Output = {
  slug: string;
  title: string;
  type: "Paper" | "Poster" | "Presentation" | "Award";
  date: string;
  venue: string;
  summary: string;
  authors: string[];
  body: string[];
  media?: { label: string; url: string }[];
  links?: { label: string; url: string }[];
  featured?: boolean;
};

export const people: Person[] = [
  { name: "Dr. Jason Brown", role: "Project co-lead", status: "lead", projects: ["Teaching, mentorship, and inclusive physiological modelling"] },
  { name: "Taras (Terry) Yavorskyy", role: "Project co-lead", status: "lead", projects: ["Research experience design and HumMod development"] },
  { name: "Khadije Ramadan", role: "Undergraduate researcher", status: "current", projects: ["Placental blood supply and fetal growth"] },
  { name: "Aaesha Ahmed", role: "Undergraduate researcher", status: "current", projects: ["Endogenous nitric oxide and pre-eclampsia"] },
  { name: "Tiffany Bishun", role: "Undergraduate researcher", status: "current", projects: ["Ethanol consumption and elimination"] },
  { name: "Jess Ying", role: "Undergraduate researcher", status: "current", projects: ["Dietary fructose and fatty liver disease"] },
  { name: "Nida Rahmani", role: "Undergraduate researcher", status: "current", projects: ["Kidney function, nephrectomy, and nocturnal enuresis"] },
  { name: "Shafin Shah", role: "Undergraduate researcher", status: "current", projects: ["Melatonin, caffeine, and sleep"] },
  { name: "Boaz Li", role: "Undergraduate researcher", status: "current", projects: ["Nutrient absorption and elimination", "Dopamine and ADHD"] },
  { name: "Niya Sufian", role: "Undergraduate researcher", status: "current", projects: ["Oral contraceptives"] },
  { name: "Luqman Mwidau", role: "Undergraduate researcher", status: "current", projects: ["Muscle fibre types and exercise in aging populations"] },
  { name: "Sameer Hassanzay", role: "Undergraduate researcher", status: "current", projects: ["Skin colour and variation in vitamin D3 metabolism"] },
  { name: "Eunice Zheng", role: "Undergraduate researcher", status: "current", projects: ["Project details to be confirmed"] },
  { name: "Karson Yuen", role: "Alumnus", status: "alumni", projects: [] },
  { name: "Farih (Faria) Rahmani", role: "Alumna", status: "alumni", projects: [] },
  { name: "Shreeansha (Shree) Bhattarai", role: "Alumna", status: "alumni", projects: [] },
  { name: "Jude Demyati", role: "Alumnus", status: "alumni", projects: [] },
];

export const projects: Project[] = [
  {
    slug: "pregnancy-preeclampsia",
    title: "Pregnancy, placental supply, and pre-eclampsia",
    theme: "Reproductive & cardiovascular",
    summary: "Extending whole-body physiology to represent pregnancy, fetal growth, placental blood supply, and endogenous nitric-oxide pathways implicated in pre-eclampsia.",
    members: ["Khadije Ramadan", "Aaesha Ahmed"],
    status: "active",
    outputs: ["best-thesis-presentation-2026"],
  },
  {
    slug: "ethanol-pharmacokinetics",
    title: "Ethanol pharmacokinetics",
    theme: "Metabolism & elimination",
    summary: "Connecting gastrointestinal absorption, hepatic metabolism, renal clearance, and pulmonary elimination to reproduce blood-alcohol concentration dynamics.",
    members: ["Tiffany Bishun"],
    status: "active",
    outputs: ["ontario-biology-day-2026"],
  },
  {
    slug: "kidney-variation",
    title: "Kidney function across populations",
    theme: "Renal physiology",
    summary: "Studying variation in nephron number and kidney function, including nephrectomy and nocturnal enuresis, across sex, age, and population contexts.",
    members: ["Nida Rahmani"],
    status: "active",
    outputs: [],
  },
  {
    slug: "nutrition-metabolism",
    title: "Nutrition and metabolic health",
    theme: "Gastrointestinal & metabolic",
    summary: "Modelling nutrient absorption and elimination alongside dietary fructose pathways associated with fatty liver disease.",
    members: ["Jess Ying", "Boaz Li"],
    status: "active",
    outputs: [],
  },
  {
    slug: "sleep-neuroendocrine",
    title: "Sleep and neuroendocrine regulation",
    theme: "Neural & endocrine",
    summary: "Exploring how melatonin, caffeine, dopamine, and attention-related pathways interact across time and physiological systems.",
    members: ["Shafin Shah", "Boaz Li"],
    status: "developing",
    outputs: [],
  },
  {
    slug: "hormones-vitamin-d",
    title: "Hormones and vitamin D metabolism",
    theme: "Endocrine & demographic variation",
    summary: "Improving representation of oral contraceptive physiology and variation in vitamin D3 metabolism associated with skin pigmentation.",
    members: ["Niya Sufian", "Sameer Hassanzay"],
    status: "developing",
    outputs: [],
  },
  {
    slug: "exercise-aging",
    title: "Exercise and aging muscle",
    theme: "Musculoskeletal",
    summary: "Representing type I and type II muscle fibres to investigate exercise responses in aging virtual populations.",
    members: ["Luqman Mwidau"],
    status: "developing",
    outputs: [],
  },
];

export const outputs: Output[] = [
  {
    slug: "secure-paper",
    title: "Simulation-Enhanced Course-Based Undergraduate Research Experience",
    type: "Paper",
    date: "2026",
    venue: "Submitted to Advances in Physiology Education",
    summary: "A scalable model for using HumMod in a third-year human physiology course as a simulation-enhanced undergraduate research experience.",
    authors: ["UTSC Computational Physiology Group"],
    body: [
      "The UTSC-CPG version of HumMod forms the basis of the Short Communication Assignment in a third-year human physiology course at UTSC.",
      "The paper examines the SECURE model as a scalable and economical addition to the undergraduate research experiences available at universities. Its submission status and author list should be confirmed before public launch.",
    ],
    links: [
      { label: "Read the current manuscript draft", url: "https://drive.google.com/file/d/1pYXLajZO0Fdyv5WxtYUsU_qt-KUvsr5o/view?usp=sharing" },
      { label: "Listen to the AI-generated discussion", url: "https://drive.google.com/file/d/1rwyPsILWDniVc6aXPZP8gPWpWm9ltNsF/view?usp=drive_link" },
    ],
    featured: true,
  },
  {
    slug: "ontario-biology-day-2026",
    title: "Integrating ethanol pharmacokinetics into HumMod",
    type: "Poster",
    date: "2026",
    venue: "Ontario Biology Day",
    summary: "A whole-body model of ethanol absorption, hepatic metabolism, and renal and pulmonary clearance across beer, wine, and spirits simulations.",
    authors: ["UTSC Computational Physiology Group"],
    body: [
      "The module connects gastrointestinal absorption to alcohol dehydrogenase and aldehyde dehydrogenase pathways, then accounts for smaller urinary and pulmonary contributions.",
      "Simulated blood-alcohol concentration curves were calibrated against published human data to compare peak concentration, time to peak, and elimination slope.",
    ],
    featured: true,
  },
  {
    slug: "best-thesis-presentation-2026",
    title: "Best Undergraduate Research Presenter",
    type: "Award",
    date: "2026",
    venue: "UTSC BIOD98 Presentation Day",
    summary: "Aaesha Ahmed received the award for her presentation on modelling pregnancy and pre-eclampsia in HumMod.",
    authors: ["Aaesha Ahmed"],
    body: [
      "The project extends the model to represent pregnancy-related physiology and investigate pathways associated with pre-eclampsia.",
      "The exact award title and presentation date should be confirmed against the event record before launch.",
    ],
    featured: true,
  },
  {
    slug: "american-physiology-summit-2026",
    title: "A scalable dual-stream model for undergraduate research",
    type: "Poster",
    date: "2026",
    venue: "American Physiology Summit · Minneapolis, Minnesota",
    summary: "Taras (Terry) Yavorskyy presented the group’s model for combining course-based and mentored undergraduate research experiences.",
    authors: ["Taras (Terry) Yavorskyy", "UTSC Computational Physiology Group"],
    body: [
      "The poster described a scalable approach to computational physiology research and training using HumMod.",
      "The presentation connected classroom simulation work with longer-term student-led research projects.",
    ],
  },
  {
    slug: "utsc-teaching-showcase-2025",
    title: "HumMod at the UTSC Teaching Showcase",
    type: "Presentation",
    date: "2025",
    venue: "UTSC Teaching Showcase",
    summary: "An early showcase of the group’s simulation-based teaching and inclusive computational physiology work.",
    authors: ["UTSC Computational Physiology Group"],
    body: [
      "This archive entry is retained from the legacy website while speaker, session, and presentation details are confirmed.",
    ],
  },
];

export const featuredProjects = projects.slice(0, 3);
export const featuredOutputs = outputs.filter((item) => item.featured);

export function getOutput(slug: string) {
  return outputs.find((item) => item.slug === slug);
}
