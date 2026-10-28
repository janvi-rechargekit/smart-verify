export default function VerificationSolutions() {
  return (
    <section
      id="verification-solutions"
      className="verification-solutions"
      aria-labelledby="verification-solutions-heading"
    >
      <div className="verification-solutions__inner">
        {/* Heading on the left */}
<div className="verification-solutions__heading w-full min-w-0">
  <h2
    id="verification-solutions-heading"
    className="
      m-0 w-full max-w-[850px]
      text-justify [text-align-last:left]
      break-normal
      text-[clamp(28px,7vw,36px)]
      font-semibold leading-[1.18]
      tracking-[-0.025em]
      md:text-[clamp(30px,4.5vw,46px)]
      md:leading-[1.15]
      lg:text-[clamp(30px,4vw,64px)]
      lg:leading-[1.12]
      lg:tracking-[-0.04em]
    "
  >
    <span className="solutions-heading__dark text-[#17121C]">
      Verification Solutions
    </span>{" "}
    <span className="solutions-heading__dark text-[#17121C]">
      Built
    </span>{" "}
    <span className="solutions-heading__purple text-[#4D3ECA]">
      Around Your Business
    </span>{" "}
    <span className="solutions-heading__purple text-[#4D3ECA]">
      Goals
    </span>
  </h2>
</div>



        {/* Description and CTA on the right */}
        <div className="verification-solutions__intro">
          <p>
            SmartVerify helps businesses verify identities, documents,
            bank accounts, and businesses in seconds, so genuine
            customers move faster, fraud gets stopped earlier, and
            your team spends less time chasing paperwork.
          </p>

          <a
            href="#verification-details"
            className="solutions-know-more"
          >
            <span>Know More</span>

            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              className="solutions-know-more__arrow"
            >
              <path
                d="M4 10h11M10 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

     {/* Main Figma visual */}
<img
  src="/images/verification-solutions.png"
  alt="SmartVerify verification solutions showing business goals and verification services"
  className="verification-solutions__visual"
  loading="lazy"
/>
    </section>
  );
}