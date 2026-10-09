export const config = {
  name: "Pavan Kolasani",
  role: "Data Engineer · Data Scientist",
  tagline: "Building data pipelines and models people can trust — from healthcare data migration to ML evaluation.",
  bio: "EHR Data Migration Specialist at UPMC Ireland, working on SQL-based data migration, ETL and data-quality validation for a MEDITECH Expanse rollout across UPMC's Irish hospitals. MSc Data Science (First Class Honours, TU Dublin) and AWS Certified Data Engineer – Associate. My projects focus on what makes data work trustworthy: leakage checks, honest evaluation, drift monitoring and clear write-ups.",
  email: "kolasanipavan27@gmail.com",
  phone: "+353 894091865",
  location: "Dublin, Ireland",
  github: "https://github.com/kpavan27",
  linkedin: "https://www.linkedin.com/in/pavankolasani1806/",
  available: true,
};

export const skillCategories = [
  {
    label: "Languages",
    color: "#3b82f6",
    skills: [
      { name: "SQL", level: 90 },
      { name: "Python", level: 85 },
      { name: "pandas / NumPy", level: 82 },
      { name: "R (statistical)", level: 55 },
    ],
  },
  {
    label: "Analytics & BI",
    color: "#f59e0b",
    skills: [
      { name: "Excel / Power Query", level: 90 },
      { name: "Power BI", level: 88 },
      { name: "Tableau", level: 70 },
      { name: "Looker Studio", level: 50 },
    ],
  },
  {
    label: "Data Engineering",
    color: "#10b981",
    skills: [
      { name: "ETL / ELT Pipelines", level: 82 },
      { name: "dbt / DuckDB", level: 75 },
      { name: "Data Validation", level: 87 },
      { name: "Feature Engineering", level: 76 },
      { name: "Schema Modelling", level: 78 },
      { name: "Testing & CI (pytest, GitHub Actions)", level: 70 },
    ],
  },
  {
    label: "Cloud & Platforms",
    color: "#8b5cf6",
    skills: [
      { name: "Git / GitHub", level: 88 },
      { name: "Azure", level: 65 },
      { name: "Databricks", level: 60 },
      { name: "AWS (Certified Data Engineer)", level: 75 },
    ],
  },
];

export const projects = [
  {
    id: "01",
    name: "Energy Data Pipeline",
    category: "Data Engineering",
    categoryColor: "#14b8a6",
    description:
      "Versioned pipeline that ingests three pinned releases of Our World in Data's energy dataset (each verified by git commit and SHA-256), lands them as bronze Parquet with lineage columns, and models them in dbt on DuckDB: typed staging, a dimensional mart, and cell-level change data capture between releases. 29 data tests guard accounting identities, ranges and panel balance; pytest runs the whole pipeline on synthetic releases, and CI rebuilds everything and fails if the committed results change.",
    tech: ["Python", "dbt", "DuckDB", "Parquet", "pytest", "GitHub Actions", "Docker"],
    metrics: [
      "Flagged a methodology change: hydro, wind and solar rescaled ×0.94",
      "Fossil revisions: 1% of 1960s values vs 46% of 2020s values",
      "Balanced panel removed a fake +11-point jump in Africa's low-carbon share",
    ],
    github: "https://github.com/kpavan27/energy-data-pipeline",
    featured: true,
  },
  {
    id: "02",
    name: "GenAI Policy Risk Analysis",
    category: "Trust & Safety Analytics",
    categoryColor: "#ef4444",
    description:
      "Mapped the 20 clauses of Google's Generative AI Prohibited Use Policy onto an off-the-shelf moderation signal and measured the gaps on 5,082 real user prompts (ToxicChat). Restricted label-based analysis to human-annotated prompts after finding the rest were pre-filtered by the same moderation API — grading it on them would be circular. Sized each uncovered clause, quantified the review-load cost of lowering the flag threshold, and wrote a decision memo with three ranked risks and recommendations.",
    tech: ["Python", "pandas", "scikit-learn", "Statistics", "Policy Analysis", "pytest"],
    metrics: [
      "12 of 20 policy clauses had no moderation signal",
      "Moderation caught 15% of human-labelled toxic prompts and 14% of jailbreaks",
      "Jailbreak lexicon + moderation lifted recall to 47%",
    ],
    github: "https://github.com/kpavan27/genai-policy-risk-analysis",
    featured: true,
  },
  {
    id: "03",
    name: "Email Abuse Detection",
    category: "ML + Evaluation",
    categoryColor: "#06b6d4",
    description:
      "Spam/abuse classifier on 33,716 Enron-Spam emails, built around the parts that decide whether a detector can be trusted: de-duplication and template-grouped splits to stop campaign leakage, removal of mailbox-identity shortcuts found through feature introspection, a threshold chosen from a false-positive budget, bootstrap CIs and McNemar tests, a temporal drift check (PSI), and error analysis that turned misses into named failure modes. SQL analysis in DuckDB; served via FastAPI.",
    tech: ["Python", "scikit-learn", "DuckDB SQL", "FastAPI", "Docker", "GitHub Actions"],
    metrics: [
      "97.6% recall at 0.41% false-positive rate",
      "Significant gain over baseline (McNemar p = 0.004)",
      "Drift: recall 97.2% → 91.7% on newer spam (PSI 0.38)",
    ],
    github: "https://github.com/kpavan27/email-abuse-detection",
    featured: true,
  },
  {
    id: "04",
    name: "Zero-Shot Scene Classification (VKB)",
    category: "MSc Dissertation",
    categoryColor: "#8b5cf6",
    description:
      "MSc dissertation at TU Dublin (First Class Honours). Built a Visual Knowledge Base (VKB) framework for interpretable zero-shot scene classification: YOLOv8-Large detects objects, TF-IDF weighting finds the objects that are diagnostic of each scene, and an L1-normalised intersection score classifies unseen images without training a scene classifier. An abstain rule returns \"unknown\" instead of guessing, and every prediction is logged with the objects that justified it. Evaluated on 4,400 Places365 images across 8 scenes, with ablations.",
    tech: ["Python", "YOLOv8", "TF-IDF", "scikit-learn", "Google Colab"],
    metrics: [
      "77% accuracy on non-abstained predictions",
      "80.25% Top-2 · 68.5% strict Top-1",
      "Ablation: uniform weights drop Top-1 to 50%",
    ],
    github: "https://github.com/kpavan27/zero-shot-scene-classification",
    featured: true,
  },
  {
    id: "05",
    name: "Energy Demand Forecasting",
    category: "ML + Engineering",
    categoryColor: "#f59e0b",
    description:
      "LSTM time-series forecasting on UCI household power consumption data. Preprocessing pipeline (download → clean → scale → sequence), an LSTM predicting next-hour demand from the previous 24 hours, a FastAPI service serving predictions, and a React/TypeScript dashboard comparing actual and predicted demand.",
    tech: ["Python", "TensorFlow", "FastAPI", "React", "TypeScript", "Vite"],
    metrics: ["Next-hour forecast from a 24-hour window", "FastAPI prediction API", "React live dashboard"],
    github: "https://github.com/kpavan27/energy-demand-forecasting",
    featured: true,
  },
  {
    id: "06",
    name: "Voice-to-Recipe Generator",
    category: "AI Application",
    categoryColor: "#3b82f6",
    description:
      "Full-stack app that turns a spoken list of ingredients into recipe suggestions: Whisper speech-to-text (faster-whisper), fuzzy ingredient extraction over 150+ ingredient variations, carbon-footprint scoring for 70+ ingredients and a per-ingredient nutrition breakdown. FastAPI backend split into processing modules with a pytest suite; React/TypeScript + Tailwind frontend.",
    tech: ["Python", "FastAPI", "Whisper", "React", "TypeScript", "Tailwind CSS"],
    metrics: ["150+ ingredient variations", "Carbon footprint scoring", "Nutrition + sustainability analysis"],
    github: "https://github.com/kpavan27/voice-to-recipe",
    featured: true,
  },
  {
    id: "07",
    name: "Predictive Maintenance — Manufacturing",
    category: "Data Engineering + BI",
    categoryColor: "#10b981",
    description:
      "Simulated sensor data for 50 machines over a year (18,250 machine-days, ~6.7% failure days), with feature engineering (rolling statistics, lag features, ratios, imputation) and Power BI KPI dashboard configuration. Model training code and a full evaluation are being added.",
    tech: ["Python", "pandas", "scikit-learn", "Power BI"],
    metrics: ["18,250 simulated machine-days", "Rolling and lag sensor features", "Power BI KPI dashboard"],
    github: "https://github.com/kpavan27/predictive-maintenance",
    featured: false,
  },
];

export const experience = [
  {
    company: "UPMC Ireland",
    role: "EHR Data Migration Specialist",
    period: "Aug 2026 – Present",
    location: "Dublin, Ireland",
    color: "#06b6d4",
    bullets: [
      "Supporting the MEDITECH Expanse EHR implementation across UPMC's Irish hospital network, moving patient data off legacy systems.",
      "Writing and reviewing SQL-based migration and ETL logic: tracing patient records across source schemas, mapping to target, and running agreed migration processes under the programme's clean → map → test → validate → sign-off process.",
      "Validating data quality with profiling, duplicate and NULL checks, and source-to-target count reconciliation.",
      "Collaborating cross-functionally on migration work, with patient safety at the centre of every decision.",
    ],
    tech: ["SQL", "Python", "ETL", "Data Validation", "MEDITECH Expanse"],
  },
  {
    company: "Innovorex",
    role: "Junior AI/Data Engineer Intern",
    period: "Jul – Sep 2025",
    location: "Remote",
    color: "#3b82f6",
    bullets: [
      "Processed, cleaned, and validated 50K+ structured records to power a learning analytics platform serving active users.",
      "Built 3 Python ETL workflows covering ingestion, transformation, and reporting — reducing manual data prep time by ~40%.",
      "Collaborated with product and engineering teams to define 5 platform KPIs, improving dashboard adoption across the team.",
      "Documented all pipelines, edge cases, and data assumptions — creating a knowledge base used by the full engineering team.",
    ],
    tech: ["Python", "ETL", "Data Validation", "pandas", "Documentation"],
  },
  {
    company: "Crewbytes",
    role: "Data & Content Analyst Intern",
    period: "Jan – Jun 2024",
    location: "Remote",
    color: "#f59e0b",
    bullets: [
      "Cleaned and standardised datasets of 10K+ records, reducing data inconsistencies by ~35% and improving downstream query accuracy.",
      "Performed structured quality checks and documented 20+ anomaly patterns to unblock product team reporting workflows.",
      "Built content analytics summaries adopted in bi-weekly internal reporting cycles for the product team.",
    ],
    tech: ["Python", "SQL", "Data Cleaning", "Reporting"],
  },
  {
    company: "SkillBanc",
    role: "Data Analyst Intern",
    period: "May – Jul 2022",
    location: "Remote",
    color: "#10b981",
    bullets: [
      "Performed SQL-based filtering, cleaning, and trend analysis across business datasets used in monthly management reviews.",
      "Delivered 4 Excel dashboards with PivotTable summaries — adopted directly by management for operational decision-making.",
    ],
    tech: ["SQL", "Excel", "PivotTables", "Dashboards"],
  },
];

export const education = [
  {
    institution: "Technological University Dublin",
    degree: "MSc Data Science",
    grade: "First Class Honours",
    period: "2024 – 2025",
    location: "Dublin, Ireland",
    color: "#3b82f6",
    note: "Dissertation: A Visual Knowledge Base Framework for Interpretable Zero-Shot Scene Classification (YOLOv8, TF-IDF, Places365).",
  },
  {
    institution: "ICFAI Tech University",
    degree: "B.Tech — Artificial Intelligence & Machine Learning",
    grade: "CGPA 8.3 / 10",
    period: "2020 – 2024",
    location: "India",
    color: "#8b5cf6",
    note: "Core modules: Machine Learning, Data Structures, Statistical Modelling, Feature Engineering, Applied Computing.",
  },
];

export const certifications = [
  { name: "AWS Certified Data Engineer – Associate (DEA-C01)", issuer: "Amazon Web Services", year: "2026", color: "#f59e0b" },
  { name: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services", year: "2025", color: "#f59e0b" },
  { name: "Generative AI & LLM Development", issuer: "DeepLearning.AI", year: "2024", color: "#8b5cf6" },
];
