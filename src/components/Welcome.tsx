import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

type FontWeightType = "subtitle" | "title";

const FONT_WEIGHT: Record<
  FontWeightType,
  { min: number; max: number; default: number }
> = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const renderText = (
  text: string,
  className: string,
  baseWeight: number = 400,
) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setupTextHover = (
  container: HTMLElement | null,
  type: FontWeightType,
) => {
  if (!container) return () => {};

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHT[type];

  const animateLetter = (
    letter: HTMLSpanElement,
    weight: number,
    duration: number = 0.25,
  ) => {
    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const rect = letter.getBoundingClientRect();
      const letterCenterX = rect.left - left + rect.width / 2;

      const distance = Math.abs(mouseX - letterCenterX);
      const intensity = Math.exp(-(distance ** 2) / 10000);

      animateLetter(letter, min + (max - min) * intensity);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => animateLetter(letter, base, 0.3));
  }

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  }
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const titleCleanUp = setupTextHover(titleRef.current, "title");
    const subtitleCleanUp = setupTextHover(subtitleRef.current, "subtitle");

    return () => {
      titleCleanUp?.();
      subtitleCleanUp?.();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText(
          "Hey, I'm Miku⭐︎ Welcome to my",
          "text-3xl font-georama",
          100,
        )}
      </p>
      <h1 className="mt-7" ref={titleRef}>
        {renderText("Portfolio", "text-9xl italic font-georama")}
      </h1>

      <div className="small-screen">
        <p>This Portfolio is designed for desk/tablet screens only. </p>
      </div>
    </section>
  );
};

export default Welcome;
