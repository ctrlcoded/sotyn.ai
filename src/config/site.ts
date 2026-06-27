/**
 * ────────────────────────────────────────────────────────────────────────────
 *  SOTYNERP — SINGLE SOURCE OF TRUTH
 * ────────────────────────────────────────────────────────────────────────────
 *  The ERP that runs Secured Engineers Pvt. Ltd., now offered to contractors
 *  across India. Edit this one file for contact details, links, stats, pricing,
 *  the webinar funnel and lead routing. Anything marked ⚠️ REPLACE needs a value.
 * ────────────────────────────────────────────────────────────────────────────
 */

export const SITE = {
  // ── Brand ────────────────────────────────────────────────────────────────
  name: "SotynERP",
  legalName: "SotynERP",
  brandShort: "SotynERP",
  tagline: "The ERP built by contractors, for contractors",
  promise:
    "See exactly where your money is leaking — from quote to site to collection — and plug it.",
  parentCompany: "Secured Engineers Pvt. Ltd.",

  // ── Domain / URL ─────────────────────────────────────────────────────────
  url: "https://sotyn.ai",
  appUrl: "https://securederp.in",

  // ── Contact ──────────────────────────────────────────────────────────────
  phone: "+91 70099 87817",
  phoneHref: "+917009987817",
  whatsapp: "917009987817",
  email: "sales@sotyn.ai", // ⚠️ REPLACE if you set up a dedicated inbox
  emailDisplay: "sales@sotyn.ai", // ⚠️ REPLACE
  emailFallback: "sales@securedengineers.com",

  // ── Head office ──────────────────────────────────────────────────────────
  address: {
    street: "2480/1, BK Tower, Gill Road",
    city: "Ludhiana",
    region: "Punjab",
    postalCode: "141003",
    country: "IN",
    countryName: "India",
  },

  // ── Proof points (real numbers from the company that built it) ───────────
  stats: [
    { value: "535+", label: "Projects run on it" },
    { value: "18+", label: "Indian states" },
    { value: "300+", label: "Team members using it daily" },
    { value: "₹11.7 Cr+", label: "Client savings tracked" },
  ],

  // ── Marketing / ad tracking ──────────────────────────────────────────────
  metaPixelId: "", // ⚠️ paste your Facebook/Meta Pixel ID to track ad → webinar → buy

  // ── PRICING ──────────────────────────────────────────────────────────────
  // Strategy: low price, high RESPECT. Anchor it, guarantee it, make it scarce.
  // ⚠️ Adjust the numbers to your market — everything reads from here.
  pricing: {
    currency: "₹",
    anchor:
      "Comparable construction ERPs cost ₹3–10 lakh a year. SotynERP is a fraction of that — because we built it to run our own business, not to milk customers.",
    guarantee: "30-day money-back guarantee",
    guaranteeNote:
      "Use it for 30 days. If it doesn't show you where you're leaking money, we refund every rupee — no questions asked.",
    plans: [
      {
        name: "Founding Member",
        badge: "Limited · price locked for life",
        blurb: "The lowest price SotynERP will ever offer.",
        price: "10,000",
        per: "/mo",
        billed: "billed annually · ₹1,20,000/yr",
        strike: "",
        note: "First 100 contractors only · rate locked forever",
        highlight: true,
        cta: "Claim founding price",
        features: ["Everything included (full list below)", "Price never increases — for life", "Priority onboarding"],
      },
      {
        name: "Standard",
        blurb: "Everything included, no limits.",
        price: "14,999",
        per: "/mo",
        billed: "billed annually · ₹1,79,988/yr",
        strike: "19,999",
        note: "Or ₹19,999/mo billed monthly",
        highlight: false,
        cta: "Book a demo",
        features: ["Everything in the list below", "Annual or monthly billing", "Standard onboarding"],
      },
      {
        name: "Enterprise",
        blurb: "₹50 Cr+ turnover or multi-company groups.",
        price: "Custom",
        per: "",
        billed: "Tailored to your group",
        strike: "",
        note: "Multi-company · API · dedicated manager · SLA",
        highlight: false,
        cta: "Talk to us",
        features: ["Everything, plus:", "Multi-company & multi-location", "API + custom integrations", "Dedicated manager + SLA"],
      },
    ],
    // What's in EVERY plan — the "everything included" promise.
    includes: [
      "Every module — CRM, quotation, procurement, site, finance, HR & solar",
      "Unlimited users — office and site, no per-seat fees ever",
      "Free setup, Tally + Excel migration & team training",
      "Mobile app for every site worker, in plain language",
      "Your own secure workspace, hosted in India",
      "WhatsApp + priority support",
      "No lock-in — cancel anytime",
    ],
    // Drives the ROI / leakage calculator.
    roi: {
      defaultTurnover: 25, // ₹ Cr
      defaultLeakPct: 2.5,
      annualCost: 120000, // founding annual price, used for payback math
    },
  },

  // ── WEBINAR FUNNEL ───────────────────────────────────────────────────────
  // The Facebook/Instagram ad sends traffic to /webinar. ⚠️ set your real
  // date/time and (optionally) the live link.
  webinar: {
    kicker: "Free live masterclass for contractors",
    title: "The Contractor's Profit Masterclass",
    subtitle:
      "How to stop losing money on every project — and build a contracting business that runs without you.",
    host: "Er. Ankur Kaplesh",
    hostTitle:
      "Business Coach & Founder, SotynERP · 14 yrs · 535+ projects · Author of 2 books",
    when: "Every Saturday · 7:00 PM IST", // ⚠️ set your real schedule
    duration: "60 minutes + live Q&A",
    platform: "Live on Zoom · 100% free",
    seats: "Only 100 seats per session",
    forWho:
      "Contracting & EPC business owners (₹2–100 Cr) — MEPF, solar, civil & interiors.",
    learn: [
      "The 6 places every contractor silently leaks money — and how to plug each one",
      "The 4 numbers you must see every week to protect your margin",
      "How to delegate site & money decisions so the business grows without you",
      "The exact system we use to run 535+ projects across 18 states",
      "A founding-member offer to install the same system in your business",
    ],
  },

  // ── LEAD ROUTING ─────────────────────────────────────────────────────────
  // Demo, checklist and webinar forms POST JSON here. While empty, they fall
  // back to WhatsApp + email so no lead is ever lost. Each payload carries a
  // `source` so you can tell demo vs checklist vs webinar leads apart.
  leadWebhookUrl: "", // ⚠️ PLUG your ERP/CRM lead webhook URL HERE when ready

  // ── Social ───────────────────────────────────────────────────────────────
  social: {
    linkedin: "https://www.linkedin.com/company/secured-engineers/",
    instagram: "https://www.instagram.com/securedengineers/",
    twitter: "",
    youtube: "",
  },
};

// Convenience helpers ────────────────────────────────────────────────────────
export const waLink = (msg = "") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    msg || `Hi SotynERP, I run a contracting business and I'd like a demo.`
  )}`;

export const telLink = `tel:${SITE.phoneHref}`;
export const mailLink = `mailto:${SITE.emailFallback}`;
