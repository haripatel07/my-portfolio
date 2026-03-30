import { useEffect, useState } from "react";

function LoadingScreenAnimation({ onComplete }) {
  const [text, setText] = useState("");

  const fullText = "Assembling projects and passion…";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index >= fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);
  return (
    <div className="min-h-screen fixed inset-0 z-50 bg-bg-base text-text-main flex flex-col items-center justify-center gap-5 transition-colors duration-500">
      <div className="w-[300px] h-[3px] bg-border-subtle rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-accent-main shadow-[0_0_15px_var(--color-accent-main)] animate-loading-bar"></div>
      </div>

      <div className="mb-4 text-2xl font-mono font-semibold text-text-muted">
        {text}
        <span className="animate-blink ml-1 text-2xl font-bold text-accent-main"> | </span>
      </div>

      <div className="w-[300px] h-[3px] bg-border-subtle rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-accent-sub shadow-[0_0_15px_var(--color-accent-sub)] animate-loading-bar" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
}

export default LoadingScreenAnimation;
