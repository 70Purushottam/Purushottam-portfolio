import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle, Mail } from "lucide-react";
import { WEB3FORMS_ACCESS_KEY, CONTACT } from "../data/socialLinks";

const WEB3FORMS_CONFIGURED = WEB3FORMS_ACCESS_KEY !== "YOUR_WEB3FORMS_ACCESS_KEY";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const openMailClient = () => {
    const subject = encodeURIComponent(`Portfolio message from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message || ""}\n\n—\nFrom: ${form.name || "—"}\nReply to: ${form.email || "—"}`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
          subject: `Portfolio message from ${form.name}`,
          from_name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
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

  return (
    <div className="rounded-xl border border-border bg-surface p-7">
      <div className="flex items-center gap-2.5 mb-5">
        <Mail size={15} className="text-accent-blue" />
        <h3 className="font-mono text-[11px] tracking-wider uppercase text-text-dim">
          Get In Touch
        </h3>
      </div>

      {status === "success" ? (
        <div className="flex flex-col items-center gap-2 text-center py-8">
          <CheckCircle2 size={26} className="text-accent-green" />
          <p className="text-[14.5px] text-text-primary">
            {WEB3FORMS_CONFIGURED
              ? "Message sent — thanks for reaching out!"
              : "Your email app should now be open with your message ready to send."}
          </p>
          <button
            onClick={() => {
              setStatus("idle");
              setForm({ name: "", email: "", message: "" });
            }}
            className="mt-2 font-mono text-[12.5px] text-accent-blue hover:underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-[13.5px] text-text-muted -mt-1 mb-1">
            Fill in your name and email, and I'll get back to you directly.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block font-mono text-[11px] text-text-dim mb-1.5">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full bg-bg border border-border rounded-md px-3.5 py-2.5 text-[14px] text-text-primary placeholder:text-text-dim focus:border-accent-blue outline-none transition-colors"
                placeholder="e.g. Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-mono text-[11px] text-text-dim mb-1.5">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full bg-bg border border-border rounded-md px-3.5 py-2.5 text-[14px] text-text-primary placeholder:text-text-dim focus:border-accent-blue outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>
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
                <Send size={15} /> Connect via Email
              </>
            )}
          </button>

          {!WEB3FORMS_CONFIGURED && (
            <p className="text-[11.5px] text-text-dim">
              This opens your email app with everything pre-filled, addressed to {CONTACT.email}.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
