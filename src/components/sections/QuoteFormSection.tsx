"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  projectCategories,
  packagePreferences,
  requiredServices,
  type QuoteFormData,
} from "@/types";
import { siteConfig, getWhatsAppHref, getEmailHref } from "@/config/site";
import {
  validateQuoteForm,
  formatQuoteWhatsAppMessage,
  formatQuoteEmailBody,
  cn,
} from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const initialFormState: QuoteFormData = {
  fullName: "",
  phone: "",
  email: "",
  company: "",
  projectCategory: "",
  packagePreference: "",
  projectLocation: "",
  builtUpArea: "",
  requiredService: "",
  message: "",
  consent: false,
};

const firstStepFields: Array<keyof QuoteFormData> = [
  "fullName",
  "phone",
  "projectCategory",
  "projectLocation",
];

export function QuoteFormSection() {
  const router = useRouter();
  const [form, setForm] = useState<QuoteFormData>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [prefillLabel, setPrefillLabel] = useState("");

  useEffect(() => {
    const handlePrefill = (event: Event) => {
      const detail = (event as CustomEvent<Partial<QuoteFormData>>).detail ?? {};
      setForm((current) => ({ ...current, ...detail }));

      const label = detail.packagePreference || detail.requiredService || "";
      if (label) setPrefillLabel(label);
      setStatus("idle");
    };

    window.addEventListener("casa:quote-prefill", handlePrefill);
    return () => window.removeEventListener("casa:quote-prefill", handlePrefill);
  }, []);

  const updateField = <K extends keyof QuoteFormData>(field: K, value: QuoteFormData[K]) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (field === "packagePreference" || field === "requiredService") {
      setPrefillLabel(String(value));
    }
    setStatus("idle");
  };

  const mapErrors = (items: ReturnType<typeof validateQuoteForm>) =>
    items.reduce(
      (acc, item) => ({ ...acc, [item.field]: item.message }),
      {} as Partial<Record<keyof QuoteFormData, string>>,
    );

  const continueToDetails = () => {
    const firstStepErrors = validateQuoteForm(form).filter((item) =>
      firstStepFields.includes(item.field),
    );

    if (firstStepErrors.length > 0) {
      setErrors(mapErrors(firstStepErrors));
      setStatus("error");
      return;
    }

    setErrors({});
    setStatus("idle");
    setStep(2);
  };

  const handleSubmit = async (mode: "whatsapp" | "mailto" | "provider") => {
    const validationErrors = validateQuoteForm(form);
    if (validationErrors.length > 0) {
      setErrors(mapErrors(validationErrors));
      setStatus("error");
      if (validationErrors.some((item) => firstStepFields.includes(item.field))) setStep(1);
      return;
    }

    setIsSubmitting(true);
    try {
      if (mode === "whatsapp") {
        window.open(
          getWhatsAppHref(siteConfig.contact.whatsapp, formatQuoteWhatsAppMessage(form)),
          "_blank",
          "noopener,noreferrer",
        );
        setStatus("success");
        router.push("/thank-you");
        return;
      }

      if (mode === "mailto") {
        window.location.href = getEmailHref(
          siteConfig.contact.email,
          "Project Enquiry — Casa Renders",
          formatQuoteEmailBody(form),
        );
        setStatus("success");
        router.push("/thank-you");
        return;
      }

      if (mode === "provider" && siteConfig.form.providerEndpoint) {
        const response = await fetch(siteConfig.form.providerEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (!response.ok) throw new Error("Submission failed");
        setStatus("success");
        router.push("/thank-you");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass = (field: keyof QuoteFormData) =>
    cn("quote-field", errors[field] && "quote-field--error");

  const errorFor = (field: keyof QuoteFormData) =>
    errors[field] ? <p className="quote-error">{errors[field]}</p> : null;

  return (
    <AnimatedSection id="quote" className="quote-section section-deep">
      <Container>
        <div className="quote-layout">
          <div className="quote-intro">
            <p className="section-eyebrow">Get an estimate</p>
            <h2>
              Ready to shape
              <br />
              your next <em>space?</em>
            </h2>
            <p>
              Start with the essentials. The detailed project questions appear only after the
              first step, keeping the enquiry focused and easy to complete.
            </p>

            <div className="quote-intro__facts">
              <div><span>01</span><p>Tell us who you are and where the project is located.</p></div>
              <div><span>02</span><p>Add the space, scope and support you are considering.</p></div>
              <div><span>03</span><p>Send the complete brief through the most convenient channel.</p></div>
            </div>
          </div>

          <form
            className="quote-form quote-form--progressive"
            onSubmit={(event) => {
              event.preventDefault();
              if (step === 1) {
                continueToDetails();
                return;
              }
              void handleSubmit(siteConfig.form.submissionMode);
            }}
            noValidate
          >
            <div className="quote-form__heading">
              <div>
                <span>Project brief</span>
                <strong>Step {step} of 2</strong>
              </div>
              <p>Required fields are marked with *</p>
            </div>

            <div className="quote-stepper" aria-label="Enquiry progress">
              <button type="button" className={step === 1 ? "is-active" : "is-complete"} onClick={() => setStep(1)}>
                <span>01</span>
                <p>Essentials</p>
              </button>
              <i aria-hidden="true" />
              <button type="button" className={step === 2 ? "is-active" : ""} onClick={() => step === 2 && setStep(2)}>
                <span>02</span>
                <p>Project details</p>
              </button>
            </div>

            {prefillLabel ? (
              <div className="quote-prefill-note" role="status">
                <span>Selected for your enquiry</span>
                <strong>{prefillLabel}</strong>
                <i aria-hidden="true">✓</i>
              </div>
            ) : null}

            {step === 1 ? (
              <div className="quote-form__step" key="essentials">
                <div className="quote-form__step-intro">
                  <p>Begin with four details</p>
                  <span>This usually takes less than a minute.</span>
                </div>
                <div className="quote-form__grid">
                  <div className="quote-control">
                    <label htmlFor="fullName">Full name *</label>
                    <input id="fullName" name="fullName" type="text" autoComplete="name" className={fieldClass("fullName")} value={form.fullName} onChange={(event) => updateField("fullName", event.target.value)} />
                    {errorFor("fullName")}
                  </div>

                  <div className="quote-control">
                    <label htmlFor="phone">Phone number *</label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass("phone")} value={form.phone} onChange={(event) => updateField("phone", event.target.value)} />
                    {errorFor("phone")}
                  </div>

                  <div className="quote-control">
                    <label htmlFor="projectCategory">Project category *</label>
                    <select id="projectCategory" name="projectCategory" className={fieldClass("projectCategory")} value={form.projectCategory} onChange={(event) => updateField("projectCategory", event.target.value)}>
                      <option value="">Select a category</option>
                      {projectCategories.map((category) => <option key={category} value={category}>{category}</option>)}
                    </select>
                    {errorFor("projectCategory")}
                  </div>

                  <div className="quote-control">
                    <label htmlFor="projectLocation">Project location *</label>
                    <input id="projectLocation" name="projectLocation" type="text" placeholder="City or locality" className={fieldClass("projectLocation")} value={form.projectLocation} onChange={(event) => updateField("projectLocation", event.target.value)} />
                    {errorFor("projectLocation")}
                  </div>
                </div>
              </div>
            ) : (
              <div className="quote-form__step" key="details">
                <div className="quote-form__step-intro">
                  <p>Now shape the brief</p>
                  <span>These details help Casa Renders respond with useful context.</span>
                </div>
                <div className="quote-form__grid">
                  <div className="quote-control">
                    <label htmlFor="email">Email address *</label>
                    <input id="email" name="email" type="email" autoComplete="email" className={fieldClass("email")} value={form.email} onChange={(event) => updateField("email", event.target.value)} />
                    {errorFor("email")}
                  </div>

                  <div className="quote-control">
                    <label htmlFor="company">Company name</label>
                    <input id="company" name="company" type="text" autoComplete="organization" className={fieldClass("company")} value={form.company} onChange={(event) => updateField("company", event.target.value)} />
                  </div>

                  <div className="quote-control">
                    <label htmlFor="packagePreference">Package preference *</label>
                    <select id="packagePreference" name="packagePreference" className={fieldClass("packagePreference")} value={form.packagePreference} onChange={(event) => updateField("packagePreference", event.target.value)}>
                      <option value="">Select a preference</option>
                      {packagePreferences.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>
                    {errorFor("packagePreference")}
                  </div>

                  <div className="quote-control">
                    <label htmlFor="builtUpArea">Approximate built-up area *</label>
                    <input id="builtUpArea" name="builtUpArea" type="text" placeholder="e.g. 1200 sq ft" className={fieldClass("builtUpArea")} value={form.builtUpArea} onChange={(event) => updateField("builtUpArea", event.target.value)} />
                    {errorFor("builtUpArea")}
                  </div>

                  <div className="quote-control quote-control--wide">
                    <label htmlFor="requiredService">Required service *</label>
                    <select id="requiredService" name="requiredService" className={fieldClass("requiredService")} value={form.requiredService} onChange={(event) => updateField("requiredService", event.target.value)}>
                      <option value="">Select a service</option>
                      {requiredServices.map((service) => <option key={service} value={service}>{service}</option>)}
                    </select>
                    {errorFor("requiredService")}
                  </div>

                  <div className="quote-control quote-control--wide">
                    <label htmlFor="message">Tell us about the project *</label>
                    <textarea id="message" name="message" rows={4} placeholder="What are you planning, and what would a successful outcome look like?" className={fieldClass("message")} value={form.message} onChange={(event) => updateField("message", event.target.value)} />
                    {errorFor("message")}
                  </div>
                </div>

                <label className="quote-consent">
                  <input type="checkbox" checked={form.consent} onChange={(event) => updateField("consent", event.target.checked)} />
                  <span>{siteConfig.form.consentText}</span>
                </label>
                {errorFor("consent")}
              </div>
            )}

            <div className="quote-actions">
              {step === 1 ? (
                <Button type="submit" size="lg">
                  Continue to project details
                </Button>
              ) : (
                <>
                  <button type="button" className="quote-back-action" onClick={() => setStep(1)}>
                    ← Back
                  </button>
                  <Button type="submit" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Preparing enquiry..." : "Request my estimate"}
                  </Button>
                  <Button type="button" variant="outline" size="lg" disabled={isSubmitting} onClick={() => void handleSubmit("whatsapp")}>
                    Continue on WhatsApp
                  </Button>
                  <button type="button" className="quote-email-action" disabled={isSubmitting} onClick={() => void handleSubmit("mailto")}>
                    Email instead ↗
                  </button>
                </>
              )}
            </div>

            {status === "success" ? <p className="quote-status quote-status--success" role="status">Your enquiry is ready to share with Casa Renders.</p> : null}
            {status === "error" ? <p className="quote-status quote-status--error" role="alert">Please review the highlighted fields and try again.</p> : null}
          </form>
        </div>
      </Container>
    </AnimatedSection>
  );
}
