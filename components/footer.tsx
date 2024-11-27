import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-[#3B2316]/70 dark:text-[#bb9457]/80">
      <small className="mb-2 block text-xs">&copy; 2024 Mukesh Kumar.</small>
      <p className="text-sm">
        Built using React, Next.js (App router and Server Actions), TypeScript,
        Tailwind CSS, Framer Motion, React Email & Resend, hosted on Vercel
      </p>
    </footer>
  );
}
