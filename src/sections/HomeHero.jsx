import { useEffect, useRef } from "react";
import VerificationShowcase from "./VerificationShowcase.jsx";
import CtaImageButton from "../components/shared/CtaImageButton.jsx";


    function GradientText({
  children,
  className = "",
  animationSpeed = 12.5,
  glow = 1,
}) {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    let frameId;
    let startTime;

    const animate = (time) => {
      if (startTime === undefined) startTime = time;

      const elapsed = (time - startTime) / 1000;
      const progress = (elapsed / animationSpeed) % 1;

      element.style.backgroundPosition = `${progress * 200}% 50%`;

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [animationSpeed]);

  return (
    <span
      ref={textRef}
className={`bg-gradient-to-r from-[#4D3ECA] via-[#EA3369] to-[#4D3ECA] bg-[length:200%_100%] bg-clip-text text-transparent ${className}`}
      style={{
        textShadow:
          glow > 0
            ? "0 0 18px rgba(190, 173, 255, 0.12)"
            : "none",
      }}
    >
      {children}
    </span>
  );
}

export default function HomeHero() {
  return (
    <section id="top" className="hero-background relative isolate min-h-[638px] overflow-hidden">
      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col items-center px-5 pb-10 pt-[110px] text-center sm:pt-[150px] lg:px-8 lg:pb-6 lg:pt-[170px]">
        <div className="inline-flex max-w-full items-center rounded-full border border-[#4D3ECA] p-[6px]">
          <div className="inline-flex min-h-[52px] max-w-full items-center justify-center gap-[9px] rounded-full bg-[#4D3ECA] px-4 text-white sm:px-[18px]">
            {/* GIF is used here */}
            <img src="/images/hero-trust-badge.gif?v=2" alt="" aria-hidden="true" className="h-[34px] w-[32px] shrink-0 object-contain" draggable="false" />
            <span className="text-[14px] font-medium sm:text-[16px] lg:text-[20px]">
              Verify in seconds. Trust instantly.
            </span>
          </div>
        </div>
<h1 className="mt-10 max-w-[1100px] text-[40px] font-bold leading-[1.1] tracking-[-0.045em] sm:mt-12 sm:text-[54px] md:text-[66px] lg:mt-[58px] lg:text-[78px] xl:text-[84px]">
  <GradientText animationSpeed={5} glow={1}>
    100+ Verification APIs for
    <br className="hidden md:block" /> Indian Businesses
  </GradientText>
</h1>
        <p className="mt-7 max-w-[810px] text-[15px] leading-[1.35] text-[#383838] sm:mt-8 sm:text-[17px] lg:mt-[38px] lg:text-[20px] lg:leading-[1.3]">
          Extra onboarding steps turn your customers away. SmartVerify APIs instantly check identities, documents, and businesses, letting real users pass while blocking fraud.
        </p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:mt-12 sm:w-auto sm:flex-row sm:gap-6 lg:mt-[64px]">
          <CtaImageButton href="#documentation" label="View Documentation" image="/images/view-documentation.png" hoverText="View Documentation" variant="docs" className="w-[88%] max-w-[262px] sm:w-[300px]" />
          <CtaImageButton href="#contact" label="Book a Demo" image="/images/book-demo.png" hoverText="Book a Demo" variant="demo" showArrow className="w-[75%] max-w-[250px] sm:w-[300px]" />
        </div>
      </div>
      <VerificationShowcase />
    </section>
  );
}