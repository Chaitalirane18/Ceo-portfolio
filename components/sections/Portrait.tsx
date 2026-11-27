"use client";

import Image from "next/image";
import { useState } from "react";
import Icon from "@/components/Icon";

/**
 * Hero portrait in an architectural arch frame, over a soft blue backdrop with small technology icons.
 * Shows /public/prasad.jpg. A placeholder is shipped: overwrite that file with the real photo
 * (4:5 portrait, e.g. 800x1000, face in the upper half). If the file is ever missing it falls back to "PG".
 */
export default function Portrait() {
  const [missing, setMissing] = useState(false);

  return (
    <div className="portrait">
      <div className="portrait-bg" aria-hidden="true" />
      <div className="portrait-ring" aria-hidden="true" />
      <div className={`portrait-frame${missing ? " is-empty" : ""}`}>
        <Image
          src="/prasad-godage.jpg"
          width={800}
          height={1000}
          alt="Portrait of Prasad Shivaji Godage, Founder and CEO of Soulsoft Infotech"
          priority
          onError={() => setMissing(true)}
        />
      </div>
      <span className="float-chip a" aria-hidden="true"><Icon name="code" /></span>
      <span className="float-chip b" aria-hidden="true"><Icon name="layers" /></span>
      <span className="float-chip c" aria-hidden="true"><Icon name="flow" /></span>
      <div className="est-card">
        <strong>Est. 2012</strong>
        <span>Sangamner, Pune, Nashik</span>
      </div>
    </div>
  );
}
