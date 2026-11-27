export const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#journey", label: "Journey" },
  { href: "#soulsoft", label: "Soulsoft" },
  { href: "#products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

/** Sections that exist on the page but are not in the main menu; linked from the footer. */
export const extraLinks = [
  { href: "#why", label: "Why Soulsoft" },
];

export const phones = [
  { label: "Prasad Godage", note: "Founder & CEO", display: "+91 80557 98679", tel: "+918055798679" },
  { label: "Company Contact", note: "", display: "+91 91467 98679", tel: "+919146798679" },
  { label: "Sales, Marketing & Business Contact", note: "", display: "+91 81497 98679", tel: "+918149798679" },
  { label: "HR Contact", note: "", display: "+91 86377 98679", tel: "+918637798679" },
];

export const WHATSAPP_PRASAD = "918055798679";
export const WHATSAPP_HR = "918637798679";

/**
 * Optional contact channels. They render ONLY when a verified value is filled in here.
 * Left empty on purpose: no verified email address or LinkedIn profile has been provided.
 */
export const EMAIL = "";
export const LINKEDIN_URL = "";

/** Custom event: a "Request a demo" link tells the contact form which product to pre-fill. */
export const EVT_ENQUIRE = "pg:enquire";
