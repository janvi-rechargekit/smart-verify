export default function VerificationSolutions() {
  return (
    <section
      id="verification-solutions"
      // Added !pb-0 to force remove bottom padding, and -mb-10 or -mb-16 to pull the next section up
      className="verification-solutions !pb-8 !-mb-16 lg:!-mb-32"
      aria-labelledby="verification-solutions-heading"
    >
      <div className="verification-solutions__inner lg:!translate-y-[-40px]">
        {/* Heading on the left */}
        <div className="verification-solutions__heading w-full min-w-0">
          <h2
            id="verification-solutions-heading"
            className="
              m-0 w-full max-w-[850px]
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
              Verification Solutions Built
            </span>

            <br className="hidden lg:block" />

            <span className="solutions-heading__purple text-[#4D3ECA]">
              Around Your Business Goals
            </span>
          </h2>
        </div>

       {/* Description only */}
<div className="verification-solutions__intro">
  <p>
    SmartVerify helps businesses verify identities, documents,
    bank accounts, and businesses in seconds, so genuine
    customers move faster, fraud gets stopped earlier, and
    your team spends less time chasing paperwork.
  </p>
</div>
      </div>

      {/* 
        Main Figma visual
        Removed lg:mb-16 and added lg:-mb-20 to pull the bottom up
      */}
      <img
        src="/images/verification-solutions.png"
        alt="SmartVerify verification solutions showing business goals and verification services"
        className="verification-solutions__visual lg:relative lg:-top-28 lg:-mb-16 block w-full"
        loading="lazy"
      />
    </section>
  );
}