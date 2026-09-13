/**
 * Experience data â€” Vignesh K
 *
 * HOW TO ADD AN ENTRY
 * 1. Add a new object to the `experience` array below.
 * 2. To attach a certificate: place the PDF in /public/certificates/
 *    then set certificate: "filename.pdf" in the object.
 * 3. Registration numbers or personal IDs should NOT be added here.
 */

export type ExperienceType =
  | "internship"
  | "hackathon"
  | "achievement"
  | "certification"
  | "workshop"
  | "competition";

export interface ExperienceEntry {
  id:               string;
  type:             ExperienceType;
  index:            number;
  title:            string;
  organization:     string;
  organizationShort?: string;
  location?:        string;
  startDate:        string;   // ISO: "2026-08-01"
  endDate:          string;   // ISO: "2026-08-30"
  duration:         string;   // Display: "01 AUG â€” 30 AUG 2026"
  context?:         string;
  description:      string;
  certificate?:     string;   // filename in /public/certificates/
  report?:          string;   // filename in /public/certificates/
  credentialId?:    string;
  technologies?:    string[];
  link?:            string;
  githubUrl?:       string;
  featured:         boolean;
}

export const experience: ExperienceEntry[] = [
  {
    id:           "electrocom-2026",
    type:         "internship",
    index:        1,
    title:        "Electrical Internship",
    organization: "Electrocom Engineers â€” Service Department",
    organizationShort: "Electrocom Engineers",
    startDate:    "2026-08-01",
    endDate:      "2026-08-30",
    duration:     "01 AUG â€” 30 AUG 2026",
    context:      "Completed as part of B.E. Electronics and Communication Engineering curriculum.",
    description:
      "Completed an internship in the Electrical Service Department at Electrocom Engineers as part of my B.E. Electronics and Communication Engineering curriculum, gaining practical exposure through independent work carried out under technical supervision and guidance.",
    certificate:  "electrocom-engineers-internship.pdf",
    featured:     true,
  },
];