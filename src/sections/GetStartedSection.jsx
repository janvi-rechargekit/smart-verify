
export default function GetStartedSection() {
  return (
    <section
      id="get-started"
      className="verification-cta-section"
      aria-label="Get started with SmartVerify"
    >
      <div className="verification-cta">
        {/* Figma-exported purple gradient and verification artwork */}
        <img
          src="/images/verification-cta-art.png"
          alt=""
          aria-hidden="true"
          className="verification-cta__art"
          loading="lazy"
        />

        {/* Text and CTA layered over the exported artwork */}
        <div className="verification-cta__content">
          <img
            src="/images/get-started-verification-heading.png"
            alt="Get Started With Verification APIs Now"
            className="verification-cta__heading"
            loading="lazy"
          />

          <p className="verification-cta__description">
            Integrate 100+ verification APIs from one unified platform
            designed for fast, accurate, and reliable verification.
          </p>

          <a
            href="#contact"
            className="verification-cta__button"
          >
            <span>Book a Demo</span>

            <span className="verification-cta__arrow-circle">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 18 18 6M7 6h11v11"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
