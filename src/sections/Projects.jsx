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
      className="min-h-screen flex items-center justify-center py-20 bg-black text-white"
    >
      <RevealOnScroll>
        <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md p-5 rounded-2xl shadow-md border border-white/10 transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:border-blue-400"
              >
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={project.image}
                    alt={`${project.name} image`}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </a>
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.brief}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm hover:bg-blue-600/30 transition"
                    >
                      {tech}
                    </span>
                  ))}
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
