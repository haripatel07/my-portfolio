import { useState } from "react";
import dental from "../assets/dental-disease.png";
import fakeNews from "../assets/fake-news.webp";
import agriculture from "../assets/smart-agriculture.jpg";
import solar from "../assets/smart-solar.webp";
import regression from "../assets/linear-regression.png";
import rustpress from "../assets/rustpress.png";
import RevealOnScroll from "../Ui/RevealOnScroll";

function Projects() {
  const [projects] = useState([
    {
      image: dental,
      name: "Dental Disease Classification",
      brief:
        "Developed a CNN-based model to classify dental diseases from X-ray images. Implemented image preprocessing to enhance accuracy.",
      techStack: ["Python", "TensorFlow", "CNN", "OpenCV"],
      repo: "https://github.com/haripatel07/DentalDiseasesClassification",
    },
    {
      image: fakeNews,
      name: "Fake News Detection",
      brief:
        "Built an NLP-powered fake news classifier using TF-IDF, Naive Bayes, and Logistic Regression to detect misinformation.",
      techStack: ["Python", "NLP", "Scikit-learn"],
      repo: "https://github.com/haripatel07/FakeNewsDetection",
    },
    {
      image: agriculture,
      name: "Smart Agriculture System",
      brief:
        "AI-powered system integrating plant disease detection and irrigation scheduling using CNNs and predictive analytics.",
      techStack: ["Python", "TensorFlow", "Flask", "IoT"],
      repo: "https://github.com/haripatel07/Smart_Agriculture_System",
    },
    {
      image: solar,
      name: "Smart Solar Panel Tilt Optimization",
      brief:
        "Developed a machine learning model to optimize solar panel tilt based on real-time environmental data using regression algorithms.",
      techStack: ["Python", "Scikit-learn", "Regression"],
      repo: "https://github.com/haripatel07/SmartSolarPanelTiltOptimization",
    },
    {
      image: regression,
      name: "Building Linear Regression from Scratch",
      brief:
        "Implemented linear regression from scratch using Python and NumPy to understand underlying mathematical concepts.",
      techStack: ["Python", "NumPy", "Matplotlib"],
      repo: "https://github.com/haripatel07/BuildingLinearRegressionfromScratch",
    },
    {
      image: rustpress,
      name: "RustPress - A Minimal CMS",
      brief:
        "Developed a lightweight CMS using Rust, optimized for performance and security with a focus on modern web architecture.",
      techStack: ["Rust"],
      repo: "https://github.com/haripatel07/RustPress",
    },
  ]);

  return (
    <section id="projects" className="min-h-screen py-24 relative z-10">
      <RevealOnScroll>
        <div className="w-full max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif mb-20 text-center text-text-main">
            Selected <span className="italic text-accent-sub">Works.</span>
          </h2>

          <div className="flex flex-col gap-24 md:gap-32">
            {projects.map((project, index) => {
              const isEven = index % 2 !== 0;
              const numStr = (index + 1).toString().padStart(2, "0");

              return (
                <div
                  key={index}
                  className={`flex flex-col ${isEven ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 lg:gap-16 group`}
                >
                  {/* Image Container */}
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-[55%] relative block rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02] border border-border-subtle"
                  >
                    <div className="absolute inset-0 bg-accent-sub/10 mix-blend-overlay group-hover:bg-transparent transition-all duration-500 z-10"></div>
                    <img
                      src={project.image}
                      alt={`${project.name} preview`}
                      className="w-full h-[300px] md:h-[400px] lg:h-[480px] object-cover filter grayscale-[50%] group-hover:grayscale-0 transition-all duration-700"
                    />
                  </a>

                  {/* Content Container */}
                  <div className="w-full md:w-[45%] flex flex-col justify-center relative">
                    {/* Background Number */}
                    <span className="absolute -top-16 -left-6 md:-left-12 text-[8rem] md:text-[12rem] font-serif font-bold text-text-main/[0.03] select-none z-[-1] tracking-tighter">
                      {numStr}
                    </span>

                    <div className="mb-4">
                       <span className="font-mono text-xs tracking-widest text-accent-sub uppercase bg-accent-sub/10 px-3 py-1 rounded-full border border-accent-sub/20">
                         System.Work_{numStr}
                       </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-serif font-medium text-text-main mb-6 leading-tight">
                      {project.name}
                    </h3>
                    
                    <p className="text-text-muted font-sans text-lg mb-8 leading-relaxed max-w-lg">
                      {project.brief}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-bg-off border border-border-subtle text-text-muted font-mono text-sm px-4 py-1.5 rounded-full hover:bg-border-subtle hover:text-text-main transition-colors duration-300 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-text-main font-sans font-medium uppercase tracking-widest text-sm w-max border-b-2 border-accent-sub/0 hover:border-accent-sub pb-1 transition-all duration-300"
                    >
                      View Repository
                      <span className="text-xl transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;
