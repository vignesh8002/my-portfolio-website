/**
 * Projects data — Vignesh K
 *
 * Real public GitHub repositories with factual, honest descriptions.
 */

export type ProjectStatus = "completed" | "in-progress" | "planned";

export interface Project {
  id:           string;
  title:        string;
  tagline:      string;
  problem:      string;
  solution:     string;
  technologies: string[];
  status:       ProjectStatus;
  year:         string;
  image?:       string;
  githubUrl?:   string;
  demoUrl?:     string;
  featured:     boolean;
}

export const projects: Project[] = [
  {
    id:           "vfreeplayer",
    title:        "VFree Player",
    tagline:      "Android video player application.",
    problem:
      "Standard video players often have intrusive ads or complex interfaces for playing local files.",
    solution:
      "An Android media/player project I built and developed while learning application development.",
    technologies: ["Kotlin", "Android"],
    status:       "completed",
    year:         "2026",
    githubUrl:    "https://github.com/vignesh8002/vfreeplayer",
    featured:     true,
  },
  {
    id:           "cloudclear-bah2026",
    title:        "cloudclear-bah2026",
    tagline:      "ISRO Bharatiya Antariksh Hackathon 2026 — PS2 Cloud Removal.",
    problem:
      "Cloud occlusion in optical satellite imagery makes land observation and surface inspection difficult.",
    solution:
      "A Python project developed for Problem Statement 2 (Cloud Removal) during the ISRO Bharatiya Antariksh Hackathon 2026.",
    technologies: ["Python"],
    status:       "completed",
    year:         "2026",
    githubUrl:    "https://github.com/vignesh8002/cloudclear-bah2026",
    featured:     true,
  },
  {
    id:           "packsure-advanced",
    title:        "packsure-advanced",
    tagline:      "Packaging quality check concept.",
    problem:
      "Packaging discrepancies on conveyor lines can pass through without early detection.",
    solution:
      "A packaging defect detection concept developed and pitched for a college-level internal hackathon.",
    technologies: ["Python"],
    status:       "in-progress",
    year:         "2026",
    githubUrl:    "https://github.com/vignesh8002/packsure-advanced",
    featured:     true,
  },
  {
    id:           "stockportfolio-tracker",
    title:        "StockPortfolio-tracker",
    tagline:      "Python investment tracking script.",
    problem:
      "Manually calculating overall portfolio returns and profit/loss across buys and sells is tedious.",
    solution:
      "A Python-based stock portfolio tracker that calculates investment amounts, profit/loss, and portfolio returns.",
    technologies: ["Python"],
    status:       "completed",
    year:         "2026",
    githubUrl:    "https://github.com/vignesh8002/StockPortfolio-tracker",
    featured:     false,
  },
  {
    id:           "bank-management",
    title:        "Bank_Management_task",
    tagline:      "C++ console banking application.",
    problem:
      "Practicing object-oriented programming principles and persistent file handling in C++.",
    solution:
      "A C++ console application handling account creation, deposit/withdrawal flows, and file data storage.",
    technologies: ["C++"],
    status:       "completed",
    year:         "2026",
    githubUrl:    "https://github.com/vignesh8002/Bank_Management_task",
    featured:     false,
  },
  {
    id:           "library-management",
    title:        "Library-Management-System",
    tagline:      "C++ library management program.",
    problem:
      "Managing student book borrowing records with structured command-line interactions.",
    solution:
      "A C++ program developed to manage book records, student issues, and file-based tracking.",
    technologies: ["C++"],
    status:       "completed",
    year:         "2026",
    githubUrl:    "https://github.com/vignesh8002/Library-Management-System",
    featured:     false,
  },
];