import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/action";
import { Reveal } from "@/components/ui/motion";
import { SITE } from "@/lib/site-data";

const title = "Contact Bubloo Scientist";
const description =
  "Send the Bubloo Scientist team a message, or reach us through the WhatsApp community channel and social profiles.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const fieldClass =
  "w-full rounded-xl border border-input bg-surface/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Say hello"
        description="Questions about a topic, ideas for the website, or something you want us to cover? Tell us."
      />
      <section className="shell grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <Reveal>
          <form
            className="surface-panel space-y-5 p-6 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input id="name" name="name" required className={fieldClass} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={fieldClass}
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                required
                className={fieldClass}
                placeholder="What is this about?"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className={fieldClass}
                placeholder="Write your message…"
              />
            </div>
            <Button type="submit" variant="glow" size="lg">
              Send message <Send className="h-4 w-4" />
            </Button>
            <p aria-live="polite" className="text-sm text-muted-foreground">
              {sent
                ? "Thanks — your message is ready to send. For a guaranteed reply, message us on the WhatsApp channel."
                : "We usually reply through the community channel."}
            </p>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="surface-panel p-6 sm:p-8">
            <h2 className="text-xl font-bold">Other ways to reach us</h2>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href={SITE.whatsappChannel}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 rounded-xl border border-border p-4 text-sm transition-colors hover:border-primary"
                >
                  <MessageCircle className="h-4 w-4 text-accent" /> WhatsApp community channel
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 rounded-xl border border-border p-4 text-sm transition-colors hover:border-primary"
                >
                  <Instagram className="h-4 w-4 text-accent" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 rounded-xl border border-border p-4 text-sm transition-colors hover:border-primary"
                >
                  <Facebook className="h-4 w-4 text-accent" /> Facebook
                </a>
              </li>
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Prefer the old contact form? It is still available on{" "}
              <a
                href={SITE.contactPage}
                target="_blank"
                rel="noreferrer noopener"
                className="text-primary underline-offset-4 hover:underline"
              >
                bublooscientist.com
              </a>
              .
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
