import React, { useState } from 'react';
import RevealOnScroll from "../Ui/RevealOnScroll";

export default function Certificates() {
  const [certificates] = useState([
    {
      name: "DSA using Java - Top 5% Topper",
      issuer: "NPTEL",
      date: "Dec 2024",
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS96S36290001103857005"
    },
    {
      name: "Data Fundamentals",
      issuer: "IBM",
      date: "Feb 2025",
      link: "https://www.credly.com/badges/16826486-4696-4e9f-b617-58b60c10a64d"
    },
    {
      name: "Artificial Intelligence Fundamentals",
      issuer: "IBM",
      date: "Feb 2025",
      link: "https://www.credly.com/badges/09ed250e-c2f0-47fb-89db-9245cef335be"
    },
    {
      name: "Data Analysis with Python",
      issuer: "freeCodeCamp",
      date: "Feb 2025",
      link: "https://freecodecamp.org/certification/haripatel078/data-analysis-with-python-v7"
    },
    {
      name: "Machine Learning with Python",
      issuer: "freeCodeCamp",
      date: "Mar 2025",
      link: "https://freecodecamp.org/certification/haripatel078/machine-learning-with-python-v7"
    },
    {
      name: "Getting Started with Deep Learning",
      issuer: "NVIDIA",
      date: "Jan 2025",
      link: "https://learn.nvidia.com/certificates?id"
    },
    {
      name: "Data Visualization",
      issuer: "Tata Group / Forage",
      date: "Mar 2025",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_wELfER4GRrZwAdSY4_1741344652732_completion_certificate.pdf"
    },
    {
      name: "Data Science Job Simulation",
      issuer: "British Airways / Forage",
      date: "Mar 2025",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/tMjbs76F526fF5v3G/NjynCWzGSaWXQCxSX_tMjbs76F526fF5v3G_wELfER4GRrZwAdSY4_1741333781930_completion_certificate.pdf"
    },
    {
      name: "Machine Learning Foundations",
      issuer: "AWS Educate",
      date: "Mar 2025",
      link: "https://www.credly.com/badges/15975e96-c0a9-499a-8cf6-b7694e97465e/linked_in_profile"
    },
    {
      name: "NPTEL DBMS - Top 1% Topper",
      issuer: "NPTEL",
      date: "April 2025",
      link: "https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS18S63460015201211113"
    }
  ]);

  return (
    <section id="certificates" className="min-h-screen py-24 relative z-10">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center text-text-main">
            <span className="italic text-accent-main">Certifications</span> & Awards
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
                    <h3 className="font-serif text-2xl text-text-main font-medium leading-snug mb-3 group-hover:text-accent-main transition-colors">
                      {certificate.name}
                    </h3>
                    <p className="inline-block bg-border-subtle/50 border border-border-subtle text-text-muted font-mono tracking-widest uppercase text-[10px] sm:text-xs font-semibold px-2 py-1 rounded">
                       {certificate.issuer}
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-border-subtle flex items-center justify-between">
                    <span className="text-text-muted font-mono text-sm">{certificate.date}</span>
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
