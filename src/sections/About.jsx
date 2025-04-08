import RevealOnScroll from "../Ui/RevealOnScroll";
import { FaKaggle } from "react-icons/fa6";
import { SiLeetcode, SiHackerrank, SiCodeforces, SiCodechef } from "react-icons/si";

function About() {
  const skillsData = {
    "Languages": ["Python", "Rust", "SQL", "R", "Java", "C++", "JavaScript", "TypeScript"],
    "Web Development": ["React.js", "Next.js", "Node.js", "Express.js"],
    "Databases": ["MongoDB", "MySQL", "Oracle SQL"],
    "AI/ML Frameworks": ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Flask"],
    "Data Science & Visualization": ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Power BI", "Tableau"],
    "Domains": [
      "Machine Learning & AI",
      "Deep Learning",
      "Data Science",
      "Generative AI",
      "NLP",
      "Computer Vision"
    ],
    "Cloud & DevOps": ["AWS", "GCP", "Git"]
  };
  

  return (
    <section
      id="about"
      className="min-h-screen font-mono flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-12 bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-5 text-xl">
              Data Scientist, AI Engineer, and Full-Stack Developer with expertise in 
              machine learning, deep learning, and data-driven decision-making. Passionate 
              about building AI-powered solutions, predictive models, and scalable web applications 
              using Python, Rust, and modern web technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">💼 Skills</h3>
              <div className="flex flex-col gap-4">
                {Object.entries(skillsData).map(([category, skills], idx) => (
                  <div key={idx}>
                    <h4 className="text-lg text-gray-300 font-semibold mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-blue-500/10 text-red-500 py-1 px-3 rounded-full hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">📚 Education</h3>
              <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
                <li>
                  <strong><em>B.Tech in Artificial Intelligence & Machine Learning</em></strong>
                  <br />
                  Charotar University of Science and Technology (2023 - 2027)
                </li>
                <li>Specialized in AI, ML, Data Science, and Software Development.</li>
              </ul>
              <h3 className="text-2xl text-center font-bold mb-8 mt-8">💭 Favourite Quote</h3>
              <p className="italic text-center text-gray-300 mt-2 text-lg">
                “An idiot admires complexity, a genius admires simplicity.” <br />
                <span className="text-sm text-gray-300">— Terry A. Davis</span>
              </p>
            </div>
          </div>

          {/* Profiles Section */}
          <div className="p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-2xl text-center font-bold mb-8">🌐 Profiles</h3>
            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="https://leetcode.com/haripatel87/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700 transition-all"
              >
                <SiLeetcode className="text-yellow-400 text-2xl" /> LeetCode
              </a>
              <a
                href="https://www.hackerrank.com/haripatel07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg bg-green-700 text-white py-2 px-4 rounded-full hover:bg-green-600 transition-all"
              >
                <SiHackerrank className="text-white text-2xl" /> HackerRank
              </a>
              <a
                href="https://codeforces.com/profile/haripatel07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500 transition-all"
              >
                <SiCodeforces className="text-white text-2xl" /> Codeforces
              </a>
              <a
                href="https://www.codechef.com/users/haripatel07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg bg-purple-700 text-white py-2 px-4 rounded-full hover:bg-purple-600 transition-all"
              >
                <SiCodechef className="text-white text-2xl" /> CodeChef
              </a>
              <a
                href="https://www.kaggle.com/harivpatel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700 transition-all"
              >
                <FaKaggle className="text-white text-2xl" /> Kaggle
              </a>
            </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
