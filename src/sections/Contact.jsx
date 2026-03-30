import RevealOnScroll from "../Ui/RevealOnScroll";

export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-24 relative z-10 flex items-center justify-center">
      <RevealOnScroll>
        <div className="w-full max-w-2xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center text-text-main">
            Let's <span className="italic text-accent-main">Connect.</span>
          </h2>

          <div className="bg-bg-off/80 dark:bg-white/5 border border-border-subtle p-8 md:p-12 rounded-[2rem] backdrop-blur-md shadow-2xl hover:border-accent-main/40 transition-colors duration-500">
            <form
              action="https://formsubmit.co/patelhariv18@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_next" value="https://haripatel07.github.io/my-portfolio#contact" />
              
              <div className="space-y-2">
                <label className="text-sm font-sans font-medium text-text-muted ml-1 uppercase tracking-widest font-mono">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full bg-bg-base border border-border-subtle rounded-xl px-5 py-4 text-text-main font-sans placeholder-text-muted transition-all duration-300 focus:outline-none focus:border-accent-main focus:bg-white/5 focus:ring-1 focus:ring-accent-main"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-sans font-medium text-text-muted ml-1 uppercase tracking-widest font-mono">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full bg-bg-base border border-border-subtle rounded-xl px-5 py-4 text-text-main font-sans placeholder-text-muted transition-all duration-300 focus:outline-none focus:border-accent-main focus:bg-white/5 focus:ring-1 focus:ring-accent-main"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-sans font-medium text-text-muted ml-1 uppercase tracking-widest font-mono">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="How can I help you?"
                  required
                  className="w-full bg-bg-base border border-border-subtle rounded-xl px-5 py-4 text-text-main font-sans placeholder-text-muted transition-all duration-300 focus:outline-none focus:border-accent-main focus:bg-white/5 focus:ring-1 focus:ring-accent-main resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full mt-4 flex justify-center items-center gap-3 bg-text-main text-bg-base px-6 py-4 rounded-xl font-sans font-semibold text-lg hover:opacity-80 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="font-mono uppercase tracking-widest text-sm">Send_Message</span>
              </button>
            </form>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
