import type { QuoteFormData, FormFieldError } from "@/types";

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function scrollToSection(href: string): void {
  if (typeof window === "undefined") return;
  const id = href.replace("#", "");
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[6-9]\d{9}$/;

export function validateQuoteForm(data: QuoteFormData): FormFieldError[] {
  const errors: FormFieldError[] = [];

  if (!data.fullName.trim()) {
    errors.push({ field: "fullName", message: "Please enter your full name." });
  }

  if (!data.phone.trim()) {
    errors.push({ field: "phone", message: "Please enter your phone number." });
  } else if (!phonePattern.test(data.phone.replace(/\s/g, ""))) {
    errors.push({
      field: "phone",
      message: "Enter a valid 10-digit Indian mobile number.",
    });
  }

  if (!data.email.trim()) {
    errors.push({ field: "email", message: "Please enter your email address." });
  } else if (!emailPattern.test(data.email.trim())) {
    errors.push({ field: "email", message: "Enter a valid email address." });
  }

  if (!data.projectCategory) {
    errors.push({
      field: "projectCategory",
      message: "Please select a project category.",
    });
  }

  if (!data.packagePreference) {
    errors.push({
      field: "packagePreference",
      message: "Please select a package preference.",
    });
  }

  if (!data.projectLocation.trim()) {
    errors.push({
      field: "projectLocation",
      message: "Please enter your project location.",
    });
  }

  if (!data.builtUpArea.trim()) {
    errors.push({
      field: "builtUpArea",
      message: "Please enter the approximate built-up area.",
    });
  }

  if (!data.requiredService) {
    errors.push({
      field: "requiredService",
      message: "Please select the required service.",
    });
  }

  if (!data.message.trim()) {
    errors.push({ field: "message", message: "Please share a brief project message." });
  }

  if (!data.consent) {
    errors.push({
      field: "consent",
      message: "Please confirm consent to be contacted.",
    });
  }

  return errors;
}

export function formatQuoteWhatsAppMessage(data: QuoteFormData): string {
  const lines = [
    "Hello Casa Renders,",
    "",
    "I would like to request a quote for my project.",
    "",
    `Name: ${data.fullName.trim()}`,
    `Phone: ${data.phone.trim()}`,
    `Email: ${data.email.trim()}`,
    data.company.trim() ? `Company: ${data.company.trim()}` : null,
    `Project Category: ${data.projectCategory}`,
    `Package Preference: ${data.packagePreference}`,
    `Project Location: ${data.projectLocation.trim()}`,
    `Built-up Area: ${data.builtUpArea.trim()}`,
    `Required Service: ${data.requiredService}`,
    "",
    "Message:",
    data.message.trim(),
  ].filter(Boolean);

  return lines.join("\n");
}

export function formatQuoteEmailBody(data: QuoteFormData): string {
  return formatQuoteWhatsAppMessage(data);
}
