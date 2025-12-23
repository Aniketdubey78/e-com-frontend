import { useEffect, useState } from "react";
import heroImage from "../assets/heroImg.webp"

export default function HeroQuoteCard() {
  const quotes = [
    "Get your style, your way",
    "Fashion that defines you",
    "Wear confidence every day",
    "Style begins with you",
  ];

  const [quoteIndex, setQuoteIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentQuote = quotes[quoteIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // 👉 TYPING
        setText(currentQuote.substring(0, text.length + 1));

        if (text === currentQuote) {
          // pause before deleting
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        // 👉 DELETING
        setText(currentQuote.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setQuoteIndex((prev) => (prev + 1) % quotes.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, quoteIndex]);

  return (
    <div
      className="relative w-full h-[420px] rounded-2xl overflow-hidden mb-2"
      style={{
        backgroundImage:` url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2 items-center p-10 text-white">
        
        {/* LEFT TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {text}
            <span className="ml-1 border-r-2 border-white animate-pulse"></span>
          </h1>

          <p className="mt-4 text-gray-200 max-w-md">
            Discover premium fashion curated just for you.
          </p>

          <button className="mt-6 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
