import RevealOnScroll from "../Ui/RevealOnScroll";
import { FaKaggle } from "react-icons/fa6";
import { SiLeetcode, SiHackerrank, SiCodeforces, SiCodechef } from "react-icons/si";

function About() {
  const skillsData = {
    "Core": ["Python", "Rust", "SQL", "C++", "JavaScript"],
    "AI/ML": ["TensorFlow", "PyTorch", "Scikit-learn"],
    "Data": ["Pandas", "NumPy", "Power BI"],
    "Web": ["React.js", "Next.js", "Node.js"],
  };

  return (
    <section id="about" className="min-h-screen py-24 relative z-10">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center text-text-main">
            Beyond the <span className="italic text-accent-main">Code.</span>
          </h2>

          {/* Bento Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
            
            {/* Intro Box (Spans 2 columns) */}
            <div className="md:col-span-2 bg-bg-off/80 dark:bg-white/5 border border-border-subtle p-10 rounded-[2rem] font-sans backdrop-blur-md flex flex-col justify-center hover:border-accent-sub/50 transition-colors duration-500 shadow-xl">
              <h3 className="text-2xl font-medium text-text-main mb-4 flex items-center gap-3">
                <span className="font-mono text-xs bg-border-subtle px-2 py-1 rounded text-text-muted">01</span> About Me
              </h3>
              <p className="text-text-muted text-lg leading-relaxed">
                I am a Data Scientist, AI Engineer, and Full-Stack Developer driven by a passion for solving complex problems. I engineer intelligent solutions that blend deep learning with intuitive web experiences. Whether I'm building predictive models or highly scalable architectures, I strive to achieve elegance and efficiency.
              </p>
            </div>

            {/* Quote Box */}
            <div className="bg-bg-off/80 dark:bg-white/5 border border-border-subtle p-10 rounded-[2rem] backdrop-blur-md flex flex-col justify-center items-center text-center hover:border-accent-sub/50 transition-colors duration-500 shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-main/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <p className="font-serif italic text-text-main text-xl md:text-2xl leading-snug mb-4 relative z-10">
                "An idiot admires complexity, a genius admires simplicity."
              </p>
              <p className="text-text-muted text-sm font-sans tracking-wide uppercase font-medium relative z-10">— Terry A. Davis</p>
            </div>

            {/* Skills Box (Spans 3 columns) */}
            <div className="md:col-span-3 bg-bg-off/80 dark:bg-white/5 border border-border-subtle p-10 rounded-[2rem] backdrop-blur-md hover:border-accent-sub/50 transition-colors duration-500 shadow-xl">
              <h3 className="text-2xl font-sans font-medium text-text-main mb-8 flex items-center gap-3">
                <span className="font-mono text-xs bg-border-subtle px-2 py-1 rounded text-text-muted">02</span> Tech Stack
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {Object.entries(skillsData).map(([category, skills], idx) => (
                  <div key={idx} className="flex flex-col">
                    <h4 className="text-accent-main font-mono text-sm tracking-widest uppercase mb-4">{category}</h4>
                    <div className="flex flex-col gap-3">
                      {skills.map((skill, i) => (
                        <span key={i} className="text-text-main font-sans text-lg flex items-center gap-2 relative group cursor-default">
                          <span className="w-1.5 h-1.5 rounded-sm bg-border-subtle group-hover:bg-accent-sub group-hover:shadow-[0_0_8px_rgba(var(--color-accent-sub),0.8)] transition-all"></span>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Box */}
            <div className="md:col-span-2 bg-bg-off/80 dark:bg-white/5 border border-border-subtle p-10 rounded-[2rem] backdrop-blur-md flex flex-col justify-center hover:border-accent-sub/50 transition-colors duration-500 shadow-xl">
              <h3 className="text-2xl font-sans font-medium text-text-main mb-6 flex items-center gap-3">
                <span className="font-mono text-xs bg-border-subtle px-2 py-1 rounded text-text-muted">03</span> Education
              </h3>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-border-subtle rounded-2xl p-4 hidden md:block group-hover:bg-accent-main/20 transition-colors">
                  <div className="text-4xl">🎓</div>
                </div>
                <div>
                  <h4 className="text-xl font-serif text-text-main mb-2">B.Tech in Artificial Intelligence & Machine Learning</h4>
                  <p className="text-accent-main font-mono text-sm tracking-widest uppercase mb-3">Charotar University of Science & Technology • 2023 - 2027</p>
                  <p className="text-text-muted font-sans leading-relaxed">
                    Specializing in advanced algorithms, deep learning, NLP, and scalable data systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Profiles Box */}
            <div className="bg-bg-off/80 dark:bg-white/5 border border-border-subtle p-8 rounded-[2rem] backdrop-blur-md flex flex-col justify-center hover:border-accent-sub/50 transition-colors duration-500 shadow-xl">
              <h3 className="text-2xl font-sans font-medium text-text-main mb-6 flex items-center gap-3">
                <span className="font-mono text-xs bg-border-subtle px-2 py-1 rounded text-text-muted">04</span> Profiles
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  { name: "LeetCode", icon: <SiLeetcode className="text-[#FFA116]" />, href: "https://leetcode.com/haripatel87/" },
                  { name: "HackerRank", icon: <SiHackerrank className="text-[#00EA64]" />, href: "https://www.hackerrank.com/haripatel07" },
                  { name: "Codeforces", icon: <SiCodeforces className="text-[#318CE7]" />, href: "https://codeforces.com/profile/haripatel07" },
                  { name: "CodeChef", icon: <SiCodechef className="text-[#5B4638]" />, href: "https://www.codechef.com/users/haripatel07" },
                  { name: "Kaggle", icon: <FaKaggle className="text-[#20BEFF]" />, href: "https://www.kaggle.com/harivpatel" },
                ].map((profile, i) => (
                  <a
                    key={i}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-text-muted hover:text-text-main p-3 rounded-xl hover:bg-border-subtle transition-all group border border-transparent hover:border-border-subtle"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl group-hover:scale-110 transition-transform">{profile.icon}</span>
                      <span className="font-sans font-medium">{profile.name}</span>
                    </div>
                    <span className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
