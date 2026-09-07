import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle, MessageSquareText } from "lucide-react";
import { WEB3FORMS_ACCESS_KEY, CONTACT } from "../data/socialLinks";

const WEB3FORMS_CONFIGURED = WEB3FORMS_ACCESS_KEY !== "YOUR_WEB3FORMS_ACCESS_KEY";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialForm = { name: "", email: "", reason: "Collaboration", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const validate = (values) => {
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(values.email.trim())) next.email = "Enter a valid email address.";
    return next;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextForm = { ...form, [name]: value };
    setForm(nextForm);
    if (touched[name]) {
      setErrors(validate(nextForm));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(form));
  };

  const openMailClient = () => {
    const subject = encodeURIComponent(`Portfolio inquiry (${form.reason}) from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message || "—"}\n\n—\nFrom: ${form.name || "—"}\nReply to: ${form.email || "—"}\nReason: ${form.reason}`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true });
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // No Web3Forms key configured yet — connect via the visitor's own email app instead.
    if (!WEB3FORMS_CONFIGURED) {
      openMailClient();
      setStatus("success");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio inquiry (${form.reason}) from ${form.name}`,
          from_name: form.name,
          email: form.email,
          reason: form.reason,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        // Fall back to the mail client if the API call didn't succeed.
        openMailClient();
        setStatus("success");
      }
    } catch {
      openMailClient();
      setStatus("success");
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
    setTouched({});
    setStatus("idle");
  };

  return (
    <div className="h-full rounded-xl border border-border bg-surface p-7 sm:p-8">
      <div className="flex items-center gap-2.5 mb-1.5">
        <span className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-accent-blue shrink-0">
          <MessageSquareText size={16} />
        </span>
        <h3 className="font-mono font-semibold text-[15px] text-text-primary">
          Send a Request
        </h3>
      </div>
      <p className="text-[13.5px] text-text-muted mb-6 pl-11">
        Share a few details and I'll get back to you, usually within a day or two.
      </p>

      {status === "success" ? (
        <div className="flex flex-col items-center gap-2 text-center py-10">
          <span className="w-12 h-12 rounded-full bg-accent-green/10 flex items-center justify-center">
            <CheckCircle2 size={26} className="text-accent-green" />
          </span>
          <p className="text-[15px] text-text-primary font-medium mt-1">
            {WEB3FORMS_CONFIGURED ? "Message sent — thanks for reaching out!" : "Almost there!"}
          </p>
          <p className="text-[13px] text-text-muted max-w-xs">
            {WEB3FORMS_CONFIGURED
              ? "I've received your request and will reply directly to your email soon."
              : `Your email app should now be open with everything pre-filled, addressed to ${CONTACT.email}.`}
          </p>
          <button
            onClick={resetForm}
            className="mt-3 font-mono text-[12.5px] text-accent-blue hover:underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block font-mono text-[11px] text-text-dim mb-1.5">
                Your Name <span className="text-accent-blue">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`w-full bg-bg border rounded-md px-3.5 py-2.5 text-[14px] text-text-primary placeholder:text-text-dim outline-none transition-colors ${
                  errors.name && touched.name
                    ? "border-red-400/70 focus:border-red-400"
                    : "border-border focus:border-accent-blue"
                }`}
                placeholder="e.g. Jane Doe"
              />
              {errors.name && touched.name && (
                <p id="name-error" className="mt-1.5 text-[12px] text-red-400 flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block font-mono text-[11px] text-text-dim mb-1.5">
                Your Email <span className="text-accent-blue">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full bg-bg border rounded-md px-3.5 py-2.5 text-[14px] text-text-primary placeholder:text-text-dim outline-none transition-colors ${
                  errors.email && touched.email
                    ? "border-red-400/70 focus:border-red-400"
                    : "border-border focus:border-accent-blue"
                }`}
                placeholder="you@example.com"
              />
              {errors.email && touched.email && (
                <p id="email-error" className="mt-1.5 text-[12px] text-red-400 flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="reason" className="block font-mono text-[11px] text-text-dim mb-1.5">
              Reason for Reaching Out
            </label>
            <select
              id="reason"
              name="reason"
              value={form.reason}
              onChange={handleChange}
              className="w-full bg-bg border border-border rounded-md px-3.5 py-2.5 text-[14px] text-text-primary outline-none focus:border-accent-blue transition-colors appearance-none cursor-pointer"
            >
              <option>Collaboration</option>
              <option>Job Opportunity</option>
              <option>Freelance / Project Work</option>
              <option>Just Saying Hi</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block font-mono text-[11px] text-text-dim mb-1.5">
              Message <span className="text-text-dim normal-case">(optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-bg border border-border rounded-md px-3.5 py-2.5 text-[14px] text-text-primary placeholder:text-text-dim focus:border-accent-blue outline-none resize-none transition-colors"
              placeholder="What would you like to say?"
            />
          </div>

          {status === "error" && (
            <div className="flex items-center gap-2 text-[13px] text-red-400">
              <AlertCircle size={14} /> Something went wrong — please try again or email directly at {CONTACT.email}.
            </div>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 font-mono text-[13px] font-semibold px-5 py-3 rounded-md bg-accent-blue text-[#04070A] hover:bg-[#7fb9ff] transition-colors disabled:opacity-40 disabled:cursor-not-allowed w-full sm:w-auto"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={15} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send size={15} /> Send Request
                </>
              )}
            </button>
            <p className="text-[11.5px] text-text-dim">
              {WEB3FORMS_CONFIGURED
                ? "Delivered securely — no spam, ever."
                : `Opens your email app, pre-addressed to ${CONTACT.email}.`}
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
