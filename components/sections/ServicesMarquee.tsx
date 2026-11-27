import Marquee from "@/components/ui/Marquee";
import { services } from "@/data/services";

/** Scrolling strip of every service name, between the hero and About. */
export default function ServicesMarquee() {
  const items = services.flatMap((s) => s.items);
  return <Marquee label="Services offered" items={items} />;
}
