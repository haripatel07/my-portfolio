import React, { useState } from 'react'
import RevealOnScroll from "../Ui/RevealOnScroll";

export default function Certificates() {
    const [certificates] = useState([
        {   
            name : "DSA using Java - Top 5 % Topper",
            issuer : "NPTEL",
            date : "Dec 2024",
            link : "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS96S36290001103857005"

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
            issuer : "NVDIA",
            date : "Jan 2025",
            link : "https://learn.nvidia.com/certificates?id"
        },
        {
            name : "Tata Group - Data Visualization",
            issuer : "Forage",
            date : "Mar 2025",
            link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_wELfER4GRrZwAdSY4_1741344652732_completion_certificate.pdf"
        },
        {
            name : "British Airways - Data Science Job Simulation",
            issuer: "Forage",
            date : "Mar 2025",
            link : "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/tMjbs76F526fF5v3G/NjynCWzGSaWXQCxSX_tMjbs76F526fF5v3G_wELfER4GRrZwAdSY4_1741333781930_completion_certificate.pdf"
        },
        {
            name : "AWS Educate Machine Learning Foundations",
            issuer : "Amazon Web Services (AWS)",
            date : "Mar 2025",
            link : "https://www.credly.com/badges/15975e96-c0a9-499a-8cf6-b7694e97465e/linked_in_profile"
        },
        {
            name : "NPTEL DBMS - Top 1% Topper",
            issuer : "NPTEL",
            date : "April 2025",
            link : "https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS18S63460015201211113"
        }
    ]);
  return (
    <section
        id = "certificates"
        className="min-h-screen flex items-center font-mono justify-center py-20">
             <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-semibold mb-12 bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent text-center">
                Certificates 
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificates.map((certificate, index) => (
                <a
                    key={index}
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 rounded-xl flex flex-col items-center text-center border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900"
                >
                    <h3 className="font-semibold text-xl mb-4">{certificate.name}</h3>
                    <p className="text-gray-300 mb-4">{certificate.issuer}</p>
                    <p  className="text-gray-300 mb-4">{certificate.date}</p>
                    <div className="flex flex-col text-center my-5 py-3 justify-center gap-3 border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] cursor-pointer rounded-xl">
                    <p className="text-gray-200">View Certificate</p>
                    
                    </div>
                </a>
                ))}
            </div>
            </div>
      </RevealOnScroll>

    </section>
  )
}
