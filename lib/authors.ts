import { Author } from "@/types";

export const authors: Record<string, Author> = {
  "sarah-mitchell": {
    name: "Dr. Sarah Mitchell",
    slug: "sarah-mitchell",
    title: "Medical Director",
    credentials: "MD, FACP",
    bio: "Dr. Sarah Mitchell is a board-certified internist specializing in metabolic medicine and weight management. With over 15 years of clinical experience, she has helped thousands of patients achieve sustainable weight loss through evidence-based approaches.",
    specialties: ["Internal Medicine", "Obesity Medicine", "Metabolic Health"],
    affiliations: ["American College of Physicians", "Obesity Medicine Association"],
  },
  "james-chen": {
    name: "Dr. James Chen",
    slug: "james-chen",
    title: "Endocrinologist",
    credentials: "MD, PhD, FACE",
    bio: "Dr. James Chen is a fellowship-trained endocrinologist with expertise in diabetes, metabolism, and hormone-related weight disorders. His research on GLP-1 receptor agonists has been published in leading medical journals.",
    specialties: ["Endocrinology", "Diabetes", "Metabolic Disorders"],
    affiliations: ["American Association of Clinical Endocrinologists", "Endocrine Society"],
  },
  "emily-rodriguez": {
    name: "Emily Rodriguez",
    slug: "emily-rodriguez",
    title: "Senior Medical Writer",
    credentials: "MPH, RD",
    bio: "Emily Rodriguez is a registered dietitian and public health specialist. She translates complex medical research into accessible, actionable content for patients and healthcare providers.",
    specialties: ["Nutrition", "Public Health", "Medical Writing"],
    affiliations: ["Academy of Nutrition and Dietetics"],
  },
};
