/**
 * Skills data — Vignesh K
 *
 * Honest, developing technical competencies.
 * Reflects genuine learning and engineering coursework.
 */

export interface SkillCategory {
  id:     string;
  label:  string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id:     "programming",
    label:  "PROGRAMMING",
    skills: ["C", "C++", "Python"],
  },
  {
    id:     "backend",
    label:  "BACKEND DEVELOPMENT",
    skills: ["FastAPI", "Pydantic", "REST APIs", "Git & GitHub"],
  },
  {
    id:     "electronics",
    label:  "ELECTRONICS",
    skills: ["Circuit Analysis", "Digital Electronics", "Electronics Fundamentals"],
  },
  {
    id:     "comms",
    label:  "COMMUNICATION SYSTEMS",
    skills: [
      "Signal Processing",
      "Analog Communication",
      "Digital Communication",
      "Communication Systems",
    ],
  },
  {
    id:     "dsa",
    label:  "DSA / PROBLEM SOLVING",
    skills: ["DSA fundamentals", "LeetCode / Problem Solving"],
  },
  {
    id:     "android",
    label:  "ANDROID / APP DEVELOPMENT",
    skills: ["Android App Development", "Projects built using Android / Antigravity"],
  },
  {
    id:     "tools",
    label:  "TOOLS",
    skills: ["VS Code", "Git", "GitHub"],
  },
];