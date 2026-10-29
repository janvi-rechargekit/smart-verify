function CtaImageButton({ href, label, image, hoverText, variant, showArrow = false, className = "" }) {
  return (
    <a href={href} aria-label={label} className={`cta-image-button cta-image-button--${variant} ${className}`}>
      <img src={image} alt="" className="cta-image cta-image--default" />
      <span aria-hidden="true" className={`cta-hover-face cta-hover-face--${variant}`}>
        <span>{hoverText}</span>
        {showArrow && (
          <svg viewBox="0 0 32 32" fill="none" className="cta-hover-arrow">
            <path d="M7 25 25 7M9 7h16v16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
    </a>
  );
}
function GetStartedSection() {
  return (
    <section
      id="get-started"
      aria-labelledby="get-started-heading"
      className="
        w-full bg-white
        px-4 pb-8 pt-3
        sm:pb-10
        min-[1100px]:px-0
        min-[1100px]:py-[40px]
      "
    >
      {/* Centred card with equal side gaps */}
      <div
        className="
          relative isolate mx-auto
          w-full max-w-[1520px]
          overflow-hidden rounded-[10px]
          bg-[linear-gradient(105deg,#6545ff_0%,#8b70ff_48%,#6847ff_100%)]
          sm:w-[82%]
          min-[1100px]:aspect-[1520/350]
          min-[1100px]:w-[73%]
        "
      >
        {/* Scanner artwork — desktop only */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0 z-0
            hidden
            min-[1100px]:block
          "
        >
          <img
            src="/images/verification-cta-art.png"
            alt=""
            draggable="false"
            className="
              absolute inset-x-0 top-0
              h-[108%] w-full
              object-fill
            "
          />
        </div>

        {/* Content */}
        <div
          className="
            relative z-10 flex w-full flex-col
            items-start px-5 py-6
            sm:px-7 sm:py-8
            min-[900px]:absolute
            min-[900px]:inset-0
            min-[900px]:justify-center
            min-[900px]:px-[4.1%]
            min-[900px]:py-5
          "
        >
          <div className="w-full min-[900px]:w-[66%]">
            {/* Heading */}
            <h2
              id="get-started-heading"
              className="
                m-0 w-full
                max-w-[440px]
                min-[900px]:w-[min(43vw,610px)]
                min-[900px]:max-w-none
              "
            >
              <img
                src="/images/get-started-verification-heading.png"
                alt="Get Started With Verification APIs Now"
                draggable="false"
                className="block h-auto w-full"
                loading="lazy"
              />
            </h2>

            {/* Description */}
            <p
              className="
                m-0 mt-3 max-w-[520px]
                text-[14px] leading-[1.45] text-white
                sm:mt-4 sm:text-[15px]
                min-[900px]:mt-[10px]
                min-[900px]:w-[98%]
                min-[900px]:max-w-[760px]
                min-[900px]:text-[clamp(12px,0.9vw,16px)]
                min-[900px]:leading-[1.3]
              "
            >
              Integrate 100+ verification APIs from one unified platform
              designed for fast, accurate, and reliable verification.
            </p>

            {/* Existing Book a Demo button and hover animation */}
            <CtaImageButton
              href="#contact"
              label="Book a Demo"
              image="/images/book-demo.png"
              hoverText="Book a Demo"
              variant="demo"
              showArrow
              className="
                mt-4 w-[184px] shrink-0
                sm:w-[195px]
                min-[900px]:mt-[14px]
              "
            />
          </div>
        </div>

        {/* Mobile and tablet scanner artwork removed */}
      </div>
    </section>
  );
}

export default GetStartedSection;

