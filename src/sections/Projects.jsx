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
    <section
      id="projects"
      className="min-h-screen flex items-center font-mono justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl flex flex-col items-center text-center border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900"
              >
                <h3 className="font-semibold text-xl mb-4">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.brief}</p>
                <div className="flex flex-wrap sm:items-center gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col text-center my-5 py-3 justify-center gap-3 border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] cursor-pointer rounded-xl">
                  <p className="text-gray-200">View Project</p>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center font-bold text-blue-400 transition-colors hover:text-white"
                  >
                    <img src={project.image} alt={`${project.name} Image`} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;
