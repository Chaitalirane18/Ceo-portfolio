"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Hero portrait with a name plate and an "Est. 2012" card.
 * Shows /public/prasad.jpg: a branded placeholder is shipped; overwrite the file with the real photo
 * (4:5 portrait, e.g. 800x1000, face in the upper half). If the file is ever missing it falls back to "PG".
 */
export default function Portrait() {
  const [missing, setMissing] = useState(false);

  return (
    <div className="portrait">
      <div className="portrait-offset" aria-hidden="true" />
      <div className={`portrait-frame${missing ? " is-empty" : ""}`}>
        <Image
          src="/prasad.jpg"
          width={800}
          height={1000}
          alt="Portrait of Prasad Shivaji Godage, Founder and CEO of Soulsoft Infotech"
          priority
          onError={() => setMissing(true)}
        />
        <div className="portrait-plate">
          <strong>Prasad Shivaji Godage</strong>
          <span>Founder &amp; CEO</span>
        </div>
      </div>
      <div className="est-card">
        <strong>Est. 2012</strong>
        <span>Sangamner, Pune, Nashik</span>
      </div>
    </div>
  );
}
