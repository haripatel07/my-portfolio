import RevealOnScroll from "../Ui/RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen font-mono flex items-center justify-center py-20 px-4 sm:px-6 bg-black text-white"
    >
      <RevealOnScroll>
        <div className="w-full max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10 text-center bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <form
            action="https://formsubmit.co/patelhariv18@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_next" value="https://haripatel07.github.io/my-portfolio#contact" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-gray-400 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10"
            />
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-gray-400 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10"
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Type your message..."
              required
              className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-gray-400 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10"
            ></textarea>

            <button
              type="submit"
              className="w-full flex justify-center bg-gradient-to-r from-red-700 to-red-900 text-white px-6 py-3 rounded-md font-semibold transition hover:shadow-lg hover:-translate-y-1"
            >
              Submit
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
