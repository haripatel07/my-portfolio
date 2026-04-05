import React, { useState } from 'react';
import RevealOnScroll from "../Ui/RevealOnScroll";

export default function Certificates() {
  const [certificates] = useState([
    {
      name: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services",
      date: "March 2026",
      credentialId: "OVAA0S863TSZ",
      link: "https://www.coursera.org/account/accomplishments/verify/OVAA0S863TSZ",
      specialLabel: null
    },
    {
      name: "Database Management System",
      issuer: "NPTEL",
      date: "April 2025",
      credentialId: "NPTEL25CS18S634600152",
      link: "https://drive.google.com/file/d/1QJDhcfdwDt6mPNw8V97xesEPzeKYpl_i/view",
      specialLabel: "Top 1% National Rank"
    },
    {
      name: "DSA using Java",
      issuer: "NPTEL",
      date: null,
      credentialId: "NPTEL24CS96S362900011",
      link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs96/Course/NPTEL24CS96S36290001103857005.pdf",
      specialLabel: "Top 5% National Rank"
    },
    {
      name: "Google Data Analytics Professional Certificate",
      issuer: "Google / Coursera",
      date: "August 2025",
      credentialId: null,
      link: "https://www.credly.com/badges/e2ee7e03-2110-4d6a-ac90-ea3c8b4fa029/linked_in_profile",
      specialLabel: null
    },
    {
      name: "Generative AI with Diffusion Models",
      issuer: "NVIDIA",
      date: "May 2025",
      credentialId: "6YSchyAvQGWRCf1CJoKOIw",
      link: "CERT_LINK_PLACEHOLDER",
      specialLabel: null
    },
    {
      name: "Getting Started with Deep Learning",
      issuer: "NVIDIA",
      date: "January 2025",
      credentialId: "M0S7oiZMQcO9R966P9O6-Q",
      link: "CERT_LINK_PLACEHOLDER",
      specialLabel: null
    },
    {
      name: "Generative AI Fundamentals",
      issuer: "Databricks",
      date: "January 2025",
      credentialId: "131681855",
      link: "https://credentials.databricks.com/b9229a6b-ed20-4f66-ab7b-f029eb3a46af",
      specialLabel: null
    },
    {
      name: "Machine Learning with Python",
      issuer: "IBM",
      date: "July 2025",
      credentialId: "7IGAB3QAU6EJ",
      link: "https://www.coursera.org/account/accomplishments/verify/7IGAB3QAU6EJ",
      specialLabel: null
    },
    {
      name: "Flutter and Dart: Developing iOS, Android, and Mobile Apps",
      issuer: "IBM",
      date: "August 2025",
      credentialId: "0LWVKEA8HH3M",
      link: "https://www.coursera.org/account/accomplishments/verify/0LWVKEA8HH3M",
      specialLabel: null
    },
    {
      name: "British Airways Data Science Job Simulation",
      issuer: "Forage",
      date: "March 2025",
      credentialId: "A2eoh6ThQyW74LiDw",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/tMjbs76F526fF5v3G/NjynCWzGSaWXQCxSX_tMjbs76F526fF5v3G_wELfER4GRrZwAdSY4_1741333781930_completion_certificate.pdf",
      specialLabel: null
    }
  ]);

  return (
    <section id="certificates" className="min-h-screen py-24 relative z-10">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center text-text-main">
            <span className="italic text-accent-main">Certifications</span> &amp; Awards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate, index) => (
              <a
                key={index}
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between p-8 rounded-[2rem] bg-bg-off/80 dark:bg-gradient-to-br dark:from-white/10 dark:to-transparent border border-border-subtle backdrop-blur-md hover:border-accent-main/50 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-[0_8px_30px_rgba(var(--color-accent-main),0.15)]"
              >
                <div className="absolute inset-0 bg-accent-main/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6">
                    {/* Special label badge */}
                    {certificate.specialLabel && (
                      <span className="inline-block bg-bg-off border border-border-subtle text-accent-main font-mono tracking-widest uppercase text-[10px] font-semibold px-2 py-1 rounded mb-3">
                        ★ {certificate.specialLabel}
                      </span>
                    )}

                    <h3 className="font-serif text-2xl text-text-main font-medium leading-snug mb-3 group-hover:text-accent-main transition-colors">
                      {certificate.name}
                    </h3>
                    <p className="inline-block bg-border-subtle/50 border border-border-subtle text-text-muted font-mono tracking-widest uppercase text-[10px] sm:text-xs font-semibold px-2 py-1 rounded">
                      {certificate.issuer}
                    </p>
                  </div>

                  {/* Credential ID */}
                  {certificate.credentialId && (
                    <p className="text-text-muted font-mono text-xs mb-4 truncate">
                      <span className="text-text-muted opacity-60">ID: </span>
                      {certificate.credentialId}
                    </p>
                  )}

                  <div className="mt-auto pt-6 border-t border-border-subtle flex items-center justify-between">
                    <span className="text-text-muted font-mono text-sm">
                      {certificate.date || ""}
                    </span>
                    <span className="text-text-main opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      ↗
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
