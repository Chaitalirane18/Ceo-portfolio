/** Inline stroke icons (24x24). Paths are static, trusted markup. */
const PATHS: Record<string, string> = {
  "phone": "<path d=\"M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z\"/>",
  "pin": "<path d=\"M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z\"/><circle cx=\"12\" cy=\"10\" r=\"2.5\"/>",
  "chat": "<path d=\"M4 5h16v11H9l-5 4z\"/>",
  "out": "<path d=\"M7 17L17 7M8 7h9v9\"/>",
  "leaf": "<path d=\"M5 19C5 10 10 5 19 5c0 9-5 14-14 14z\"/><path d=\"M5 19l8-8\"/>",
  "monitor": "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M8 20h8M12 16v4\"/>",
  "link": "<circle cx=\"6\" cy=\"12\" r=\"2.5\"/><circle cx=\"18\" cy=\"6\" r=\"2.5\"/><circle cx=\"18\" cy=\"18\" r=\"2.5\"/><path d=\"M8.3 11l7.4-3.8M8.3 13l7.4 3.8\"/>",
  "factory": "<path d=\"M3 21V10l6 4v-4l6 4V6h6v15z\"/><path d=\"M8 21v-3M13 21v-3\"/>",
  "receipt": "<path d=\"M6 3h12v18l-3-2-3 2-3-2-3 2z\"/><path d=\"M9 8h6M9 12h6\"/>",
  "pill": "<path d=\"M10.5 20.5a5 5 0 0 1-7-7l10-10a5 5 0 0 1 7 7z\"/><path d=\"M8.5 8.5l7 7\"/>",
  "files": "<path d=\"M6 3h8l4 4v14H6z\"/><path d=\"M14 3v4h4M9 13h6M9 17h6\"/>",
  "cap": "<path d=\"M2 9l10-5 10 5-10 5z\"/><path d=\"M6 11.5V16c3 2.4 9 2.4 12 0v-4.5\"/>",
  "contact": "<rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"2\"/><circle cx=\"9\" cy=\"11\" r=\"2.2\"/><path d=\"M5.5 17c.6-2 2-3 3.5-3s2.9 1 3.5 3M15 9h3M15 13h3\"/>",
  "cal": "<rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M3 10h18M8 3v4M16 3v4\"/>",
  "cart": "<path d=\"M3 4h3l2.2 11h10l2-8H7\"/><circle cx=\"9\" cy=\"19.5\" r=\"1.4\"/><circle cx=\"17\" cy=\"19.5\" r=\"1.4\"/>",
  "gov": "<path d=\"M3 21h18M5 21V10M10 21V10M14 21V10M19 21V10M2 10l10-6 10 6z\"/>",
  "code": "<path d=\"M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14\"/>",
  "chart": "<path d=\"M3 20h18M6 16v-4M11 16V8M16 16v-6\"/><path d=\"M5 8l5-4 4 3 5-4\"/>",
  "layers": "<path d=\"M12 3l9 5-9 5-9-5z\"/><path d=\"M3 13l9 5 9-5\"/>",
  "flow": "<rect x=\"3\" y=\"3\" width=\"6\" height=\"6\" rx=\"1\"/><rect x=\"15\" y=\"15\" width=\"6\" height=\"6\" rx=\"1\"/><path d=\"M6 9v3a3 3 0 0 0 3 3h6\"/>",
  "rocket": "<path d=\"M5 15c-1 3-1 5-1 5s2 0 5-1M14 4c4 0 6 2 6 6-1 4-4 7-8 8l-6-6c1-4 4-7 8-8z\"/><circle cx=\"14.5\" cy=\"9.5\" r=\"1.5\"/>",
  "compass": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M15.5 8.5l-2 5-5 2 2-5z\"/>",
  "brief": "<rect x=\"3\" y=\"7\" width=\"18\" height=\"13\" rx=\"2\"/><path d=\"M9 7V4h6v3M3 13h18\"/>",
  "users": "<circle cx=\"9\" cy=\"8\" r=\"3.2\"/><path d=\"M3 20c.6-3.6 3-5.5 6-5.5s5.4 1.9 6 5.5\"/><circle cx=\"17\" cy=\"9\" r=\"2.4\"/><path d=\"M17.5 14.5c2 .3 3.2 1.8 3.5 4\"/>",
  "box": "<path d=\"M3 7l9-4 9 4v10l-9 4-9-4z\"/><path d=\"M3 7l9 4 9-4M12 11v10\"/>",
  "shop": "<path d=\"M4 9l1-5h14l1 5M4 9v11h16V9M4 9a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0A2.7 2.7 0 0 0 20 9\"/>",
  "bag": "<path d=\"M5 8h14l-1 12H6z\"/><path d=\"M9 8V6a3 3 0 0 1 6 0v2\"/>",
  "arrow": "<path d=\"M5 12h14M13 6l6 6-6 6\"/>",
  "check": "<path d=\"M5 12.5l4.5 4.5L19 7.5\"/>",
  "sun": "<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4\"/>",
  "moon": "<path d=\"M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z\"/>",
  "menu": "<path d=\"M4 7h16M4 12h16M4 17h16\"/>",
  "close": "<path d=\"M6 6l12 12M18 6L6 18\"/>",
  "up": "<path d=\"M12 19V5M6 11l6-6 6 6\"/>"
};

export type IconName = keyof typeof PATHS | (string & {});

/** Line icon. Sized and stroked by the global `.icon` class (see app/globals.css); pass `className` to add more classes. */
export default function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg className={`icon ${className}`.trim()} viewBox="0 0 24 24" aria-hidden="true" dangerouslySetInnerHTML={{ __html: PATHS[name] ?? "" }} />
  );
}
