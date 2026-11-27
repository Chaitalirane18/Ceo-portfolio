import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from "@/data/portfolio";
import { EMAIL, LINKEDIN_URL } from "@/data/site";
import EnquiryForm from "./EnquiryForm";

/** Contact details + WhatsApp enquiry form (used on the Contact page). */
export default function Contact() {
  return (
    <section className="contact" id="contact" style={{ paddingTop: 0 }}>
      <div className="container c-grid">
        <div className="c-info reveal">
          <a className="round magnetic" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">Talk to me on WhatsApp</a>
          <div className="c-lines">
            <div><span className="lbl">Phone</span><a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></div>
            <div><span className="lbl">Email</span>{EMAIL ? <a href={`mailto:${EMAIL}`}>{EMAIL}</a> : <span className="ph">[business email]</span>}</div>
            <div><span className="lbl">LinkedIn</span>{LINKEDIN_URL ? <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">View profile</a> : <span className="ph">[LinkedIn]</span>}</div>
            <div><span className="lbl">Office</span>Soulsoft Infotech Pvt. Ltd., Sangamner, Maharashtra, India</div>
            <div><span className="lbl">Company site</span><a href="https://soulsoft.in/" target="_blank" rel="noopener noreferrer">soulsoft.in ↗</a></div>
          </div>
        </div>
        <div className="reveal"><EnquiryForm /></div>
      </div>
    </section>
  );
}
