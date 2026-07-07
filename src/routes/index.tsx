import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Eye, ShieldCheck, Wrench, CalendarClock, Tag, Check, ArrowRight,
  Phone, Mail, Globe, Menu, X, Sparkles, Rocket, PhoneCall, Camera,
  User, BookOpen,
} from "lucide-react";
// Use the uploaded favicon as the site logo. Place your favicon at `public/favicon.ico`.
const logoUrl = "/logo.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

const CTA_URL = "#register-form";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Problem", href: "#problem" },
    { label: "Solution", href: "#solution" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-lg shadow-card-soft border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <img src={logoUrl} alt="Gramani Vision" className="h-11 w-11 rounded-xl object-contain" />
          <span className="hidden text-lg font-extrabold tracking-tight text-primary sm:inline">
            Gramani <span className="text-gradient-brand">Vision</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/70 transition hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={CTA_URL}
            className="hidden rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-brand transition hover:brightness-110 md:inline-flex"
          >
            🔥 Free Webinar
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-card text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <a
              href={CTA_URL}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-brand px-5 py-3 text-center text-sm font-semibold text-accent-foreground shadow-brand"
            >
              🔥 Free Webinar साठी नोंदणी करा
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero pt-32 pb-20 text-white sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-primary-glow/50 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent-glow" />
            Marathi Teachers • Coaches • Trainers
          </motion.div>
          <motion.h1 variants={fadeUp} className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Teachers, Coaches & Trainers — <br className="hidden sm:block" />
            तुमचा पहिला{" "}
            <span className="relative inline-block">
              <span className="text-gradient-brand">₹1 Lakh महिना</span>
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded bg-gradient-brand opacity-70" />
            </span>{" "}
            कसा मिळवायचा?
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg text-white/80">
            Gramani Vision helps Marathi Teachers, Coaches, and Trainers build a complete digital revenue system —
            from offer clarity to consistent students. Landing Page, Payment, Funnel, Content, Roadmap — सगळं Ready-Made.
            Copy-Paste. Marathi मध्ये.
          </motion.p>

          <motion.ul variants={fadeUp} className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
            {["From 0 to ₹1 Lakh/Month — Proven Roadmap", "Zero Tech Knowledge Required", "पूर्णपणे Marathi मध्ये"].map((b) => (
              <li key={b} className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-accent-glow" /> {b}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={CTA_URL}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-4 text-base font-semibold text-accent-foreground shadow-brand transition hover:brightness-110"
            >
              🔥 Free Webinar साठी आजच नोंदणी करा
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <div className="text-sm text-white/75">
              📅 22 August &nbsp;•&nbsp; ⏰ 08:00 PM &nbsp;•&nbsp; 💻 Google Meet
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-brand opacity-30 blur-3xl" />
          <div className="relative rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-xl shadow-navy">
            <img src={logoUrl} alt="Gramani Vision Logo" className="mx-auto h-48 w-48 rounded-2xl bg-white object-contain p-4" />
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { n: "Ready\u00a0", l: "MADE\u00a0 KIT" },
                { n: "30 Day", l: "CONTEND CALENDER" },
                { n: "10 Day", l: "REFUND POLICY" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-white/15 bg-white/5 p-3">
                  <div className="text-2xl font-extrabold text-accent-glow">{s.n}</div>
                  <div className="text-[11px] uppercase tracking-wider text-white/70">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const items = [
    { title: "Students आहेत. पण Growth का नाही?", body: "एक महिना २ विद्यार्थी, दुसरा महिना zero. Revenue unpredictable आहे. कारण System नाहीये." },
    { title: "Tech म्हणजे डोकेदुखी वाटते.", body: "Landing page नाही. Payment gateway नाही. Funnel नाही. तुम्ही System शिवाय Business चालवताय." },
    { title: "Marathi मध्ये कोणी System देत नाही.", body: "English मध्ये Courses आहेत. पण आपल्याला मराठीत हवंय — Clarity, Comfort, Connection." },
  ];
  return (
    <section id="problem" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">The Problem</p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
            "हे तुमच्यासोबत होतंय का?"
          </h2>
        </Reveal>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {items.map((it) => (
            <motion.div
              key={it.title}
              variants={fadeUp}
              className="group relative rounded-3xl border border-border bg-card p-7 shadow-card-soft transition hover:-translate-y-1 hover:shadow-navy"
            >
              <div className="absolute right-6 top-6 h-3 w-3 rounded-full bg-destructive" />
              <div className="text-2xl">🔴</div>
              <h3 className="mt-4 text-xl font-bold text-primary">{it.title}</h3>
              <p className="mt-3 text-muted-foreground">{it.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section id="solution" className="relative overflow-hidden bg-primary py-24 text-white sm:py-28">
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-primary-glow/50 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-glow">The Solution</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            "मी System देतो. आणि System कशी वापरायची{" "}
            <span className="text-gradient-brand">ते ही शिकवतो.</span>"
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Gramani Vision मध्ये आम्ही तुमच्यासाठी Ready-Made Digital Revenue System तयार करतो. Logo, Landing Page,
            WhatsApp Funnel, Content Calendar — सगळं Copy-Paste. तुम्ही फक्त वापरा.
          </p>
          <a
            href={CTA_URL}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-4 text-base font-semibold text-accent-foreground shadow-brand transition hover:brightness-110"
          >
            <Rocket className="h-4 w-4" /> System आजच सुरू करा
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    { icon: Eye, title: "Visibility", q: "तुमची Visibility कशी वाढवायची?", body: "Instagram, Facebook, WhatsApp — सगळीकडे Presence. 30-Day Content Calendar Included. Not just views — real leads." },
    { icon: ShieldCheck, title: "Trust", q: "Students तुमच्यावर विश्वास का ठेवतील?", body: "Social Proof, Testimonials, Authority Positioning — सगळं System. Trust शिवाय Sale नाही." },
    { icon: Wrench, title: "Tech", q: "Ready-Made Kit. Copy-Paste. No Coding.", body: "Landing Page Template. Payment Gateway. WhatsApp Funnel. CRM Automation. सगळं Ready-Made." },
    { icon: CalendarClock, title: "Consistency", q: "पैसा येतो सातत्यातून.", body: "30 Days of Pre-Written Content. Posts. Reels. Carousels. Captions. Hashtags. फक्त Publish करा." },
    { icon: Tag, title: "Pricing", q: "तुमची Value. तुमची Price.", body: "Confidence ने Price Set करा. 3-Tier Offer System — Lead Magnet → Workshop → Core Program." },
  ];
  return (
    <section id="features" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">5 Pillars</p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
            "ही आहे तुमची <span className="text-gradient-brand">5-Pillar</span> Digital Revenue System"
          </h2>
        </Reveal>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card-soft transition hover:-translate-y-1 hover:shadow-navy ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition group-hover:opacity-30" />
              <div className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-navy text-white shadow-navy">
                <f.icon className="h-6 w-6" />
              </div>
              <div className="mt-5 text-xs font-bold uppercase tracking-widest text-accent">Pillar 0{i + 1} • {f.title}</div>
              <h3 className="mt-2 text-xl font-bold text-primary">{f.q}</h3>
              <p className="mt-3 text-muted-foreground">{f.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    { quote: "पहिल्या 3 दिवसांत माझा Offer तयार झाला. 2 आठवड्यांत मला 4 inquiries आल्या!", name: "Swapnil Patil", role: "Career Coach, Pune" },
    { quote: "Tech म्हणजे डोकेदुखी वाटायची. पण Pravah मधे Ready-Made Kit मिळाला. Landing page 1 तासात लाईव्ह!", name: "Priya Deshmukh", role: "Yoga Instructor, Nagpur" },
  ];
  const badges = [
    "From 0 to ₹1 Lakh/Month — Proven Roadmap",
    "Live Sessions — Not Pre-Recorded",
    "Ready-Made System — Copy-Paste",
    "Marathi मध्ये Complete Support",
  ];
  return (
    <section className="bg-secondary py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Social Proof</p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">"लोकं काय म्हणतात?"</h2>
        </Reveal>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <motion.figure key={t.name} variants={fadeUp} className="relative rounded-3xl border border-border bg-card p-8 shadow-card-soft">
              <div className="absolute -top-4 left-8 select-none text-6xl leading-none text-accent">"</div>
              <blockquote className="text-lg text-foreground">{t.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-navy font-bold text-white">
                  {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div className="font-semibold text-primary">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((b) => (
            <motion.div key={b} variants={fadeUp} className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium text-primary">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-brand text-white">
                <Check className="h-4 w-4" />
              </span>
              {b}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PricingSection() {
  const steps = [
    { step: "1", name: "Free Webinar", desc: "AI ने Niche, Logo, Landing Page, ₹1L Roadmap, 10x Business Growth Plan", price: "₹0", tag: "Start Here", cta: "Register Free" },
    { step: "2", name: "Pravah Foundation", desc: "3 Days System Setup — Offer Clarity + Brand Identity + Tech Setup", price: "₹999", tag: "Most Popular", cta: "Join Workshop", featured: true, link: "https://payments.cashfree.com/forms/pravah-Foundation" },
    { step: "3", name: "Pravah Pro", desc: "8 Weeks Complete Revenue System — Tech Kit + Content Engine + Funnel + Community", price: "₹9,999", regular: "₹35,000", tag: "Full System", cta: "Apply Now" },
  ];
  return (
    <section id="pricing" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">How It Works</p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
            "तुमची Journey — <span className="text-gradient-brand">3 Simple Steps</span>"
          </h2>
        </Reveal>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((s) => (
            <motion.div
              key={s.step}
              variants={fadeUp}
              className={`relative flex flex-col rounded-3xl border p-8 transition ${
                s.featured
                  ? "border-transparent bg-gradient-navy text-white shadow-navy lg:-translate-y-3"
                  : "border-border bg-card text-foreground shadow-card-soft"
              }`}
            >
              {s.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent-foreground shadow-brand">
                  {s.tag}
                </div>
              )}
              <div className={`text-sm font-bold uppercase tracking-widest ${s.featured ? "text-accent-glow" : "text-accent"}`}>
                Step {s.step} {!s.featured && `• ${s.tag}`}
              </div>
              <h3 className={`mt-2 text-2xl font-extrabold ${s.featured ? "text-white" : "text-primary"}`}>{s.name}</h3>
              <p className={`mt-3 ${s.featured ? "text-white/80" : "text-muted-foreground"}`}>{s.desc}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className={`text-5xl font-extrabold ${s.featured ? "text-white" : "text-primary"}`}>{s.price}</span>
                {s.regular && <span className="text-sm text-muted-foreground line-through">{s.regular}</span>}
              </div>
              <a
                href={s.link || CTA_URL}
                target={s.link ? "_blank" : undefined}
                rel={s.link ? "noopener noreferrer" : undefined}
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
                  s.featured
                    ? "bg-gradient-brand text-accent-foreground shadow-brand hover:brightness-110"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {s.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="mt-10 grid gap-4 rounded-3xl border border-accent/30 bg-accent/5 p-6 sm:grid-cols-2 sm:p-8">
          <div>
            <div className="text-sm font-bold uppercase tracking-widest text-accent">🎁 Special Offer</div>
            <p className="mt-2 text-primary">Webinar Attendees ला Workshop ₹999 चा Exclusive Access. पहिल्या <b>10 Enrollments</b> ला Free Tech Setup Session <b>(₹2,000 Value)</b>.</p>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-widest text-accent">⏳ Urgency</div>
            <p className="mt-2 text-primary">फक्त <b>15 Seats Per Cohort</b>. Early Bird ₹999 — पहिल्या 10 साठी.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="register" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.7_0.18_45/0.35),transparent_55%)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center text-white sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">"तुमची System <span className="text-gradient-brand">आजच</span> मिळवा."</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85">
            प्रत्येक महिना System शिवाय जातोय — तो खर्च नाही, तो गहाळ झालेला Revenue आहे.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={CTA_URL}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-base font-semibold text-accent-foreground shadow-brand transition hover:brightness-110"
            >
              🔥 Free Webinar साठी नोंदणी करा <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/917888078121"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <PhoneCall className="h-4 w-4" /> 15-Min Free Clarity Call
            </a>
          </div>
          <p className="mx-auto mt-8 max-w-2xl rounded-2xl border border-white/15 bg-white/5 p-5 text-sm text-white/80 backdrop-blur">
            <b className="text-accent-glow">100% Satisfaction Guarantee</b> — Webinar मध्ये Value वाटली नाही तर कोणतंही पैसे नाही (ती फ्री आहेच!). Workshop साठी पैसे घेतले, पण 1st Day नंतर वाटलं की 'हा माझ्यासाठी नाही' — तर उरलेल्या 2 दिवसांचे पैसे परत.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function RegistrationForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    subject: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const subjects = [
    "Select your subject/field",
    "Academic Teaching (School/College)",
    "Competitive Exam Coaching",
    "Language / Spoken English",
    "Yoga / Fitness / Wellness",
    "Music / Dance / Art",
    "Career / Skill Development",
    "Business / Entrepreneurship",
    "Other",
  ];

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.fullName.trim()) next.fullName = "Full Name आवश्यक आहे";
    if (!form.email.trim()) {
      next.email = "Email आवश्यक आहे";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Valid Email टाका";
    }
    if (!form.mobile.trim()) {
      next.mobile = "Mobile Number आवश्यक आहे";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile.replace(/\s+/g, ""))) {
      next.mobile = "Valid 10-digit Mobile Number टाका";
    }
    if (!form.subject || form.subject === subjects[0]) {
      next.subject = "Subject/Field निवडा";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="register-form" className="relative overflow-hidden bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Free Registration</p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl">
            Free Webinar साठी <span className="text-gradient-brand">नोंदणी करा</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            खालील फॉर्म भरा. 22 August रोजी 08:00 PM ला Google Meet लिंक तुमच्या Email & WhatsApp वर पाठवली जाईल.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-card-soft sm:p-8">
            {submitted ? (
              <div className="text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-brand text-white shadow-brand">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-primary">नोंदणी यशस्वी! 🎉</h3>
                <p className="mt-2 text-muted-foreground">
                  तुमची नोंदणी मिळाली. आम्ही लवकरच तुमच्याशी संपर्क साधू. तोपर्यंत आमच्या WhatsApp ग्रुपमध्ये सामील व्हा.
                </p>
                <a
                  href="https://wa.me/917888078121"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-accent-foreground shadow-brand transition hover:brightness-110"
                >
                  <Phone className="h-4 w-4" /> WhatsApp वर मेसेज करा
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="fullName" className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-primary">
                    <User className="h-4 w-4 text-accent" /> Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={form.fullName}
                    onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
                    placeholder="तुमचं पूर्ण नाव"
                    className={`w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-ring ${
                      errors.fullName ? "border-destructive focus:ring-destructive/30" : "border-input"
                    }`}
                  />
                  {errors.fullName && <p className="mt-1 text-xs text-destructive">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-primary">
                    <Mail className="h-4 w-4 text-accent" /> Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="तुमचा Email पत्ता"
                    className={`w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-ring ${
                      errors.email ? "border-destructive focus:ring-destructive/30" : "border-input"
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="mobile" className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-primary">
                    <Phone className="h-4 w-4 text-accent" /> Mobile Number
                  </label>
                  <input
                    id="mobile"
                    type="tel"
                    inputMode="numeric"
                    value={form.mobile}
                    onChange={(e) => setForm((f) => ({ ...f, mobile: e.target.value }))}
                    placeholder="10-digit Mobile Number"
                    className={`w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-ring ${
                      errors.mobile ? "border-destructive focus:ring-destructive/30" : "border-input"
                    }`}
                  />
                  {errors.mobile && <p className="mt-1 text-xs text-destructive">{errors.mobile}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-primary">
                    <BookOpen className="h-4 w-4 text-accent" /> What subject/field do you teach?
                  </label>
                  <select
                    id="subject"
                    value={form.subject}
                    onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                    className={`w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-ring ${
                      errors.subject ? "border-destructive focus:ring-destructive/30" : "border-input"
                    }`}
                  >
                    {subjects.map((s) => (
                      <option key={s} value={s === subjects[0] ? "" : s} disabled={s === subjects[0]}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-4 text-base font-semibold text-accent-foreground shadow-brand transition hover:brightness-110 disabled:opacity-70"
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Processing...
                    </span>
                  ) : (
                    <>
                      Register Now — Free <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  🔒 तुमची माहिती Safe आहे. आम्ही कधीही Spam करत नाही.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    { q: "हा Webinar मराठीत असेल का?", a: "हो. पूर्ण Webinar Marathi मध्ये. English शब्द कमीत कमी. Clarity पहिली." },
    { q: "मला Tech येत नाही. मी येऊ शकतो का?", a: "हो. Webinar मध्ये Tech Expert होण्याची गरज नाही. सगळं सोप्या भाषेत समजावलं जाईल." },
    { q: "Webinar ची Recording मिळेल का?", a: "हो. Live Webinar नंतर Recording सर्व Attendees ला पाठवली जाईल." },
    { q: "Webinar नंतर काय?", a: "Webinar नंतर 3-Day Workshop (Pravah) ची Offer दिली जाईल. तिथे तुमचं Complete System Set केलं जाईल." },
    { q: "Pravah Pro साठी Refund Policy आहे का?", a: "हो. Pravah Pro साठी 10-Day Refund Policy आहे. पहिल्या 10 दिवसांत तुम्हाला Program योग्य वाटला नाही तर पूर्ण पैसे परत." },
  ];
  return (
    <section id="faq" className="bg-secondary py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">FAQ</p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
        </Reveal>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="mt-12 space-y-4">
          {faqs.map((f, i) => (
            <motion.details
              key={i}
              variants={fadeUp}
              className="group rounded-2xl border border-border bg-card p-6 shadow-card-soft [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-lg font-semibold text-primary">
                {f.q}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-brand text-accent-foreground transition group-open:rotate-45">
                  <span className="text-lg leading-none">+</span>
                </span>
              </summary>
              <p className="mt-4 text-muted-foreground">{f.a}</p>
            </motion.details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const quick = [
    { label: "Free Webinar Registration", href: CTA_URL },
    { label: "Pravah Workshop", href: "#pricing" },
    { label: "Pravah Pro", href: "#pricing" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ];
  return (
    <footer className="bg-primary text-white/85">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="Gramani Vision" className="h-12 w-12 rounded-xl bg-white object-contain p-1" />
            <div>
              <div className="text-lg font-extrabold text-white">Gramani Vision</div>
              <div className="text-sm text-white/70">Your Business Growth Partner</div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm text-white/70">
            Marathi Teachers, Coaches & Trainers साठी Complete Digital Revenue System. मराठीत. Copy-Paste. Ready-Made.
          </p>
        </div>

        <div>
          <div className="text-sm font-bold uppercase tracking-widest text-accent-glow">Quick Links</div>
          <ul className="mt-4 space-y-2 text-sm">
            {quick.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition hover:text-accent-glow">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-bold uppercase tracking-widest text-accent-glow">Contact</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-3"><Globe className="h-4 w-4 text-accent-glow" /> <a href="https://www.gramanivision.in" className="hover:text-accent-glow">www.gramanivision.in</a></li>
            <li className="flex items-center gap-3"><Camera className="h-4 w-4 text-accent-glow" /> <a href="https://instagram.com/gramanivision.in" className="hover:text-accent-glow">@gramanivision.in</a></li>
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-accent-glow" /> <a href="https://wa.me/917888078121" className="hover:text-accent-glow">+91 78880 78121</a></li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-accent-glow" /> <a href="mailto:gramanivision@gmail.com" className="hover:text-accent-glow">gramanivision@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <div>© {new Date().getFullYear()} Gramani Vision. All rights reserved.</div>
          <div>Made with Gramani Vision</div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "smooth";
    return () => { html.style.scrollBehavior = prev; };
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <FinalCTA />
        <RegistrationForm />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
