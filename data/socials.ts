/**
 * Social Profiles & Contact Data — Vignesh K
 *
 * Centralized data source for social channels and contact links.
 * Easy to update labels (e.g. from "Coming soon" to "Channel") as content goes live.
 */

export interface SocialProfile {
  id:          string;
  name:        string;
  handle:      string;
  href:        string;
  badge?:      string;
  isExternal:  boolean;
  description?: string;
}

export const socialProfiles: SocialProfile[] = [
  {
    id:         "github",
    name:       "GitHub",
    handle:     "vignesh8002",
    href:       "https://github.com/vignesh8002",
    isExternal: true,
  },
  {
    id:         "linkedin",
    name:       "LinkedIn",
    handle:     "Vignesh-K-ECE",
    href:       "https://www.linkedin.com/in/Vignesh-K-ECE",
    isExternal: true,
  },
  {
    id:         "leetcode",
    name:       "LeetCode",
    handle:     "vignesh13k",
    href:       "https://leetcode.com/u/vignesh13k/",
    isExternal: true,
  },
  {
    id:         "kaggle",
    name:       "Kaggle",
    handle:     "vigneshk130308",
    href:       "https://www.kaggle.com/vigneshk130308",
    isExternal: true,
  },
  {
    id:         "youtube",
    name:       "YouTube",
    handle:     "@FromLearningtoBuilding",
    href:       "https://www.youtube.com/@FromLearningtoBuilding",
    isExternal: true,
    description: "Upcoming side-work & project channel",
  },
  {
    id:         "instagram",
    name:       "Instagram",
    handle:     "@__vicky.vi",
    href:       "https://www.instagram.com/__vicky.vi/",
    isExternal: true,
  },
];

export const directChannels = [
  {
    id:         "email",
    label:      "Email",
    value:      "vigneshkumar0813@gmail.com",
    href:       "mailto:vigneshkumar0813@gmail.com",
    isExternal: false,
  },
  {
    id:         "whatsapp",
    label:      "WhatsApp",
    value:      "+91 8667059915",
    href:       "https://wa.me/918667059915",
    isExternal: true,
  },
  {
    id:         "phone",
    label:      "Phone",
    value:      "8667059915",
    href:       "tel:+918667059915",
    isExternal: false,
  },
];
