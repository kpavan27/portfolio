export const config = {
  name: "Pavan Kolasani",
  role: "Junior Data Analyst",
  tagline: "Turning raw data into decisions that move businesses forward.",
  bio: "MSc Data Science graduate (First Class Honours, TU Dublin) with hands-on experience in SQL, Python, and Power BI. I build clean data pipelines, uncover patterns in messy datasets, and translate findings into dashboards stakeholders actually use.",
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
      { name: "Data Validation", level: 87 },
      { name: "Feature Engineering", level: 76 },
      { name: "Schema Modelling", level: 78 },
    ],
  },
  {
    label: "Cloud & Platforms",
    color: "#8b5cf6",
    skills: [
      { name: "Git / GitHub", level: 88 },
      { name: "Azure", level: 65 },
      { name: "Databricks", level: 60 },
      { name: "AWS S3 / IAM", level: 55 },
    ],
  },
];

export const projects = [
  {
    id: "01",
    name: "Zero-Shot Scene Classification (VKB)",
    category: "MSc Dissertation",
    categoryColor: "#8b5cf6",
    description:
      "MSc First Class dissertation at TU Dublin. Built a Visual Knowledge Base (VKB) framework for interpretable zero-shot scene classification — YOLOv8-Large detects objects per image, TF-IDF weighting identifies diagnostically unique objects per scene, and an L1-normalised intersection score classifies unseen images without any direct scene training. Evaluated on 4,400 Places365 images across 8 scene categories.",
    tech: ["Python", "YOLOv8", "TF-IDF", "scikit-learn", "Google Colab"],
    metrics: ["68.5% Top-1 accuracy", "4,400 image dataset", "8 scene categories"],
    github: "https://github.com/kpavan27/Projects/tree/main/Zero-Shot%20VKB",
    featured: true,
  },
  {
    id: "02",
    name: "Energy Demand Forecasting",
    category: "ML + Engineering",
    categoryColor: "#f59e0b",
    description:
      "LSTM-based time-series forecasting system trained on UCI household power consumption data. Full preprocessing pipeline (download → clean → scale → sequence), LSTM model predicting next-hour demand from the previous 24 hours, FastAPI REST API serving real-time predictions, and a React/TypeScript dashboard visualising actual vs predicted demand with interactive charts.",
    tech: ["Python", "TensorFlow", "FastAPI", "React", "TypeScript", "Vite"],
    metrics: ["LSTM time-series model", "FastAPI prediction API", "React live dashboard"],
    github: "https://github.com/kpavan27/Projects/tree/main/Energy_Demand_Forecasting",
    featured: true,
  },
  {
    id: "03",
    name: "Predictive Maintenance — Manufacturing",
    category: "ML + BI",
    categoryColor: "#10b981",
    description:
      "End-to-end ML pipeline on 18,250 synthetic IoT sensor records. Engineered 53 features (rolling statistics, lag features, failure ratios), applied SMOTE for class imbalance, tuned hyperparameters with Optuna, and trained an XGBoost + Random Forest + Logistic Regression ensemble — achieving 95% accuracy. Power BI dashboard surfaces real-time KPIs, failure trend analysis, and AI-recommended maintenance schedules.",
    tech: ["Python", "XGBoost", "scikit-learn", "Optuna", "SMOTE", "Power BI"],
    metrics: ["95% model accuracy", "18,250 sensor records", "Power BI KPI dashboard"],
    github: "https://github.com/kpavan27/Projects/tree/main/Predictive_Maintenance_Manufacturing",
    featured: true,
  },
  {
    id: "04",
    name: "Voice-to-Recipe Generator",
    category: "AI Application",
    categoryColor: "#3b82f6",
    description:
      "Full-stack AI application that converts voice notes about fridge ingredients into sustainable recipes — OpenAI Whisper speech-to-text, fuzzy ingredient extraction from 150+ variations, automatic carbon footprint scoring across 70+ ingredients, and per-ingredient nutritional breakdown. FastAPI backend structured into processing modules with a full test suite; React/TypeScript + Tailwind frontend with 8 purpose-built components.",
    tech: ["Python", "FastAPI", "OpenAI Whisper", "React", "TypeScript", "Tailwind CSS"],
    metrics: ["150+ ingredient variations", "Carbon footprint scoring", "Nutrition + sustainability analysis"],
    github: "https://github.com/kpavan27/Projects/tree/main/voice-to-recipe",
    featured: true,
  },
];

export const experience = [
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
    note: "Dissertation: Zero-Shot Scene Classification Platform — end-to-end ETL pipelines, data validation framework, and model performance dashboards.",
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
  { name: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services", year: "2025", color: "#f59e0b" },
  { name: "Generative AI & LLM Development", issuer: "DeepLearning.AI", year: "2024", color: "#8b5cf6" },
];
