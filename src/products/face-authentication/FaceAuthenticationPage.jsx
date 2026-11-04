import { useState } from "react";
import CtaImageButton from "../../components/shared/CtaImageButton.jsx";
import FooterSection from "../../sections/FooterSection.jsx";
function FaceAuthenticationHero() {
  return (
    <section
      id="face-authentication-hero"
      aria-labelledby="face-authentication-heading"
      className="
        hero-background relative isolate w-full overflow-hidden bg-white
      "
    >
          {/* Soft Figma-style background, with pink contained to the far left */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 z-0"
>
  {/* White centre with subtle pink edge and lavender right */}
  <div
    className="
      absolute inset-0
      bg-[linear-gradient(90deg,#f8e5ed_0%,#fff9fb_5%,#ffffff_12%,#ffffff_76%,#faf5fb_88%,#e8d8ef_100%)]
    "
  />

  {/* Soft pink glow restricted to the left edge */}
  <div
    className="
      absolute inset-y-0 left-0 w-[12%]
      bg-[radial-gradient(ellipse_at_0%_100%,rgba(236,48,105,0.16)_0%,rgba(236,48,105,0.06)_42%,transparent_100%)]
    "
  />

  {/* Subtle lavender shading on the right */}
  <div
    className="
      absolute inset-y-0 right-0 w-[24%]
      bg-[radial-gradient(ellipse_at_100%_55%,rgba(166,119,194,0.12)_0%,rgba(166,119,194,0.05)_45%,transparent_100%)]
    "
  />
</div>
      <div
        className="
        relative mx-auto flex w-[88%] max-w-[1520px]
        flex-col items-start justify-center
        gap-8 pt-[115px] pb-10
        sm:gap-10 sm:pt-[130px] sm:pb-14
        min-[1100px]:min-h-[min(100vh,787px)]
        min-[1100px]:w-[80%]
        min-[1100px]:py-10
        "
      >
        {/* Left: heading, description and CTA buttons */}
        <div
          className="
            relative z-10 w-full
            min-[1100px]:w-[min(48vw,660px)]
            min-[1100px]:translate-x-0 min-[1100px]:translate-y-[44px]
          "
        >
          {/* Exact Figma heading image */}
          <h1
            id="face-authentication-heading"
            className="m-0 w-full max-w-[550px] min-[1100px]:w-[min(34vw,550px)]"
          >
            <img
              src="/images/face-authentication-heading.png"
              alt="Face Authentication API for Fast & Safe User Verification"
              draggable="false"
              className="block h-auto w-full"
            />
          </h1>

          {/* Description */}
          <p
            className="
              mt-6 max-w-[520px]
              text-[14px] leading-[1.3] text-[#383838]
              sm:text-[16px] sm:leading-[1.3]
              min-[1100px]:mt-[25px]
              min-[1100px]:text-[clamp(15px,0.95vw,18px)]
              min-[1100px]:leading-[1.25]
            "
          >
            Identity fraud is becoming more sophisticated, making traditional
            verification methods insufficient on their own. SmartVerify's Face
            Authentication API uses advanced facial matching technology to
            verify user identities in seconds, helping businesses automate
            onboarding, prevent impersonation, and meet compliance requirements
            with confidence.
          </p>

          {/* Existing main-page CTA buttons */}
          <div
           className="
           mt-7 flex w-full flex-col items-center gap-4
           sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3
           min-[1100px]:mt-[36px]
           min-[1100px]:w-fit
           min-[1100px]:flex-nowrap
           min-[1100px]:justify-start
           min-[1250px]:gap-[24px]
           "
          >
            <CtaImageButton
              href="#documentation"
              label="View Documentation"
              image="/images/view-documentation.png"
              hoverText="View Documentation"
              variant="docs"
              className="w-[210px] shrink-0
                sm:w-[240px]
                min-[1100px]:w-[min(21vw,300px)]"
            />

            <CtaImageButton
              href="#contact"
              label="Book a Demo"
              image="/images/book-demo.png"
              hoverText="Book a Demo"
              variant="demo"
              showArrow
              className="w-[180px] shrink-0
                sm:w-[220px]
                min-[1100px]:w-[min(18.3vw,261px)]"
            />
          </div>
        </div>

        {/* Right: complete Figma illustration */}
        <img
          src="/images/face-authentication-visual.png"
          alt="Face authentication in progress, with facial recognition scanning and a verified status"
          draggable="false"
          className="
            relative z-0 block h-auto w-full max-w-[954px]
            self-center object-contain
            min-[1100px]:absolute
            min-[1100px]:right-[-8.5vw]
            min-[1100px]:top-[calc(50%+72px)]
            min-[1100px]:w-[min(50vw,954px)]
            min-[1100px]:-translate-y-1/2
          "
        />
      </div>
    </section>
  );
}
const faceAuthenticationSteps = [
  {
    number: 1,
    title: "Submit ID Card",
    description:
      "Submit a valid PAN, Aadhaar, Passport, or Driving License.",
  },
  {
    number: 2,
    title: "Extract Photo",
    description: "Get the reference face from the ID document.",
  },
  {
    number: 3,
    title: "Verify Liveness",
    description:
      "User captures a live selfie/video to confirm they are a real person.",
  },
  {
    number: 4,
    title: "Face Match",
    description:
      "Live face is compared with the ID photo, generating a match score in seconds.",
  },
];

function FaceAuthenticationHowItWorksSection() {
  return (
    <section
      aria-labelledby="face-authentication-how-it-works-title"
      className="w-full overflow-hidden bg-white"
    >
      {/* Thin grey divider at the top */}
      <div aria-hidden="true" className="h-4 w-full bg-[#F3F4F6]" />

      {/* Heading and subtitle */}
      <header className="px-4 pb-4 pt-6 text-center sm:pb-[17px] sm:pt-[26px]">
        <h2
          id="face-authentication-how-it-works-title"
          className="m-0"
        >
          <img
            src="/images/face-authentication-how-it-works-heading.png"
            alt="How Our Face Authentication Works"
            draggable="false"
            className="mx-auto block h-auto w-[min(76vw,320px)] min-[768px]:w-[min(30vw,460px)]"
          />
        </h2>

        <p className="mt-2 font-sans text-[13px] leading-[1.4] text-[#282828] sm:text-[15px] min-[1100px]:text-[14px]">
          A simple four step verification process to verify identity in real time
        </p>
      </header>

      {/* Desktop: exact combined Figma illustration */}
      <div className="hidden min-[768px]:block pb-5 min-[1100px]:pb-8">
        <img
          src="/images/face-authentication-how-it-works-visual.png"
          alt="Four-step face authentication workflow: submit an ID card, extract the reference photo, verify liveness, and match the live face against the ID photo."
          draggable="false"
          loading="lazy"
          className="mx-auto block h-auto w-[84%] max-w-[1520px]"
        />
      </div>

      {/* Mobile and small tablet: readable responsive layout */}
      <div className="mx-auto w-[90%] max-w-[700px] py-7 min-[768px]:hidden">
        {/* Central live-verification phone */}
        <div className="mb-7 flex justify-center">
          <img
            src="/images/face-authentication-live-phone.png"
            alt="Live face verification on a smartphone"
            draggable="false"
            loading="lazy"
            className="block h-auto w-[132px] sm:w-[150px]"
          />
        </div>

        {/* Four readable step cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {faceAuthenticationSteps.map((step) => (
            <article
              key={step.number}
              className="relative min-w-0 rounded-[8px] border border-[#E2DCF9] bg-white px-5 pb-5 pt-7 shadow-[0_2px_8px_rgba(75,55,160,0.05)]"
            >
              {/* Number badge */}
              <span className="absolute -top-3 left-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#654BFF] text-[16px] font-medium text-white">
                {step.number}
              </span>

              <h3 className="m-0 text-[18px] font-normal leading-[1.35] text-[#7563DF]">
                {step.title}
              </h3>

              <p className="mt-2 text-[14px] leading-[1.5] text-[#333333]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
const faceAuthenticationApis = [
  {
    title: "Face Match API",
    description:
      "The Face Match API compares two facial images, typically an ID photo and a live selfie, and returns a similarity score. It's the core matching engine behind most onboarding flows, and it works well for both real-time checks and batch verification of stored records.",
  },
  {
    title: "Face Liveness SDK",
    description:
      "The Face Liveness SDK runs the liveness check directly on the user's device, guiding them through simple prompts like blinking or turning their head. Because the check happens on-device, it responds instantly and cuts down on the network calls needed mid-verification.",
  },
  {
    title: "Face Liveness BE",
    description:
      "The Face Liveness BE API handles the same liveness detection but processes it on the backend instead of the device. This suits businesses that want centralized control over the verification logic or that need to verify a face from an image already captured elsewhere in the flow.",
  },
  {
    title: "Face Detection API",
    description:
      "Before any matching or liveness check runs, the platform needs to confirm a face is even present and clear enough to work with. The Face Detection API locates faces in an image, flags poor lighting or obstructions, and filters out blurry or unusable frames early, so downstream checks don't waste time on bad input.",
  },
  {
    title: "Selfie Capture API",
    description:
      "The Selfie Capture API manages the actual photo-taking step inside a business's app or website. It guides users to frame their face correctly, checks image quality on the spot, and hands off a clean capture to the matching and liveness APIs.",
  },
];

function FaceAuthenticationApisSection() {
  return (
    <>
      <section
        id="face-authentication-apis"
        aria-labelledby="face-authentication-apis-heading"
        className="w-full bg-white"
      >
        {/* Thin grey divider at the top */}
      <div aria-hidden="true" className="h-4 w-full bg-[#F3F4F6]" />
        <div
          className="
            mx-auto grid w-[90%] max-w-[1520px]
            grid-cols-1 gap-10 py-10
            sm:w-[88%] sm:py-14
            min-[1100px]:w-[80%]
            min-[1100px]:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]
            min-[1100px]:gap-x-[36px]
            min-[1100px]:py-0
          "
        >
          {/* Left content: sticky while the API cards scroll past */}
          <div
            className="
              min-w-0 self-start
              min-[1100px]:sticky
              min-[1100px]:top-[128px]
            "
          >
            <h2
              id="face-authentication-apis-heading"
              className="m-0 w-full max-w-[504px]"
            >
              <img
                src="/images/face-authentication-apis-heading.png"
                alt="SmartVerify Face Authentication APIs"
                draggable="false"
                className="block h-auto w-full"
              />
            </h2>

            <p
              className="
                mt-6 max-w-[500px]
                text-[15px] leading-[1.3] text-[#383838]
                sm:text-[17px]
                min-[1100px]:mt-[30px]
                min-[1100px]:text-[20px]
                min-[1100px]:leading-[1.17]
              "
            >
              SmartVerify breaks face authentication into five focused APIs.
              Each one handles a distinct part of the process, so teams can
              combine them based on their risk tolerance, platform, and
              industry requirements.
            </p>

            {/* Reuse the existing main-page Know More button */}
            <a
              href="#face-authentication-api-cards"
              className="solutions-know-more mt-7 inline-flex min-[1100px]:mt-[40px]"
            >
              Know More
              <svg
                className="solutions-know-more__arrow"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 8h10M8 3.5 12.5 8 8 12.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Right content: all five cards in normal document flow */}
          <div
            id="face-authentication-api-cards"
           className="min-w-0 min-[1100px]:max-w-[900px] min-[1100px]:justify-self-end min-[1100px]:pt-[58px]"
          >
            <div
              className="
                grid grid-cols-1 gap-5
                sm:grid-cols-2 sm:gap-x-5 sm:gap-y-6
                min-[1100px]:gap-x-[38px]
                min-[1100px]:gap-y-[38px]
              "
            >
              {faceAuthenticationApis.map((api) => (
                <article
                  key={api.title}
                  className="
                    flex min-w-0 flex-col
                    rounded-[6px] border border-[#B8A5F0]
                    bg-white p-5
                    sm:p-6
                    min-[1100px]:min-h-[372px]
                    min-[1100px]:p-[30px]
                  "
                >
                  <h3
                    className="
                      m-0 text-[20px] font-normal leading-[1.3]
                      text-[#7D68D8]
                      min-[1100px]:text-[24px]
                      min-[1100px]:leading-[1.25]
                    "
                  >
                    {api.title}
                  </h3>

                  <p
                    className="
                      mt-[18px] text-[15px] leading-[1.3]
                      text-[#585858]
                      sm:text-[16px]
                      min-[1100px]:text-[20px]
                      min-[1100px]:leading-[1.2]
                    "
                  >
                    {api.description}
                  </p>

                  <a
                    href="#contact"
                    aria-label={`Read more about ${api.title}`}
                    className="
                      mt-auto inline-flex w-fit items-center gap-[14px]
                      pt-7 text-[16px] text-[#7D68D8]
                      transition-colors hover:text-[#EC3069]
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-[#7D68D8]
                      min-[1100px]:text-[20px]
                    "
                  >
                    <span>Read more</span>

                    <svg
                      viewBox="0 0 24 16"
                      fill="none"
                      aria-hidden="true"
                      className="h-[16px] w-[24px] shrink-0"
                    >
                      <path
                        d="M1 8h21M15 2l7 6-7 6"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
const faceAuthenticationBenefits = [
  {
    title: "Faster onboarding.",
    description:
      "We've got some extra safety and security features to help employers and employees keep their money safe and secure.",
    image: "/images/face-authentication-benefit-onboarding.png",
    alt: "Verification document with a blue security checkmark",
  },
  {
    title: "Lower review costs.",
    description:
      "Automating the first pass means human reviewers only step in for genuine edge cases, not every application.",
    image: "/images/face-authentication-benefit-review-costs.png",
    alt: "Automated review illustration with a downward cost chart and rupee symbol",
  },
  {
    title: "Fraud caught earlier",
    description:
      "Spoof attempts using photos, screens, or masks get flagged before an account is even created.",
    image: "/images/face-authentication-benefit-fraud.png",
    alt: "Illustration of a payment card and smartphone being used in a claim",
  },
  {
    title: "Consistent decisions",
    description:
      "A match score doesn't have a bad day or an off-shift reviewer. The same standard applies to every user, every time.",
    image: "/images/face-authentication-benefit-consistency.png",
    alt: "Two security shields with verification checkmarks",
  },
];

function FaceAuthenticationWhyBusinessesSection() {
  return (
    <section
      aria-labelledby="face-authentication-benefits-heading"
      className="w-full overflow-hidden bg-white"
    >
      {/* Thin grey divider at the top */}
      <div aria-hidden="true" className="h-4 w-full bg-[#F3F4F6]" />
      <div
        className="
          mx-auto w-[88%] max-w-[1520px]
          pb-12 pt-12
          sm:pb-16 sm:pt-16
          min-[1100px]:w-[80%]
          min-[1100px]:pb-[100px]
          min-[1100px]:pt-[96px]
        "
      >
        {/* Heading and intro */}
        <div
          className="
            grid grid-cols-1 gap-5
            sm:gap-7
            min-[768px]:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]
            min-[768px]:items-start
            min-[768px]:gap-10
          "
        >
          <h2
            id="face-authentication-benefits-heading"
            className="m-0 w-full max-w-[546px]"
          >
            <img
              src="/images/face-authentication-why-businesses-heading.png"
              alt="Why Businesses Rely on SmartVerify"
              draggable="false"
              className="block h-auto w-full"
            />
          </h2>

          <p
            className="
              m-0 max-w-[480px]
              text-[14px] leading-[1.4] text-[#414141]
              sm:text-[15px]
              min-[768px]:ml-auto
              min-[768px]:pt-1
              min-[1100px]:text-[16px]
            "
          >
            Manual identity checks don't scale, and they miss things a camera
            and an algorithm catch instantly. Face authentication addresses
            that gap in a few concrete ways.
          </p>
        </div>

        {/* Four benefits */}
        <div
          className="
            mt-9 grid grid-cols-1 gap-x-5 gap-y-9
            min-[768px]:mt-12
            min-[768px]:justify-items-center
            min-[1100px]:mt-[76px]
            min-[768px]:grid-cols-4
            min-[1100px]:gap-x-[22px]c:\Users\ABC\Downloads\face-authentication-flow-visual.png
          "
        >
          {faceAuthenticationBenefits.map((benefit) => (
            <article key={benefit.title} className="min-w-0 w-full min-[768px]:w-[94%]">
              {/* Square artwork */}
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.alt}
                  draggable="false"
                  loading="lazy"
                  className="block h-full w-full object-cover object-top"
                />
              </div>

              {/* Benefit title */}
              <h3
                className="
                  mt-7 text-[20px] font-normal leading-[1.3]
                  tracking-[-0.02em] text-[#393939]
                  sm:text-[21px]
                  min-[1100px]:mt-[40px]
                  min-[1100px]:text-[22px]
                "
              >
                {benefit.title}
              </h3>

              {/* Benefit description */}
              <p
                className="
                  mt-3 text-[14px] leading-[1.35] text-[#555555]
                  sm:text-[15px]
                  min-[1100px]:mt-[20px]
                  min-[1100px]:text-[16px]
                  min-[1100px]:leading-[1.3]
                "
              >
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
function FaceAuthenticationFlowSection() {
  return (
    <section
      aria-labelledby="face-authentication-flow-heading"
      className="relative w-full overflow-hidden bg-white"
    >
      {/* Thin grey divider at the top */}
      <div aria-hidden="true" className="h-4 w-full bg-[#F3F4F6]" />
      
      {/* Desktop: full-width Figma visual */}
      <div className="relative w-full">
        
        {/* 
          TOP IMAGE (Desktop only) 
          Added max-[899px]:!hidden to force it to hide on mobile, 
          overriding any global CSS conflicts.
        */}
        <img
          src="/images/face-authentication-flow-visual.png"
          alt=""
          aria-hidden="true"
          draggable="false"
          className="ml-auto max-[899px]:!hidden hidden h-auto w-full min-[900px]:block min-[900px]:w-[92%]"
        />

        {/* Left-side content */}
        <div
          className="
            relative z-10 mx-auto w-[88%]
            pb-8 pt-10
            sm:pb-12 sm:pt-14
            min-[900px]:absolute min-[900px]:inset-x-0
            min-[900px]:top-0 min-[900px]:mx-auto
            min-[900px]:w-[80%]
            min-[900px]:-translate-x-2
            min-[900px]:pb-0
            min-[900px]:pt-[clamp(48px,6.8vw,112px)]
          "
        >
          {/* Figma heading image */}
          <h2
            id="face-authentication-flow-heading"
            className="m-0 w-full max-w-[480px] min-[900px]:w-[min(29vw,480px)]"
          >
            <img
              src="/images/face-authentication-flow-heading.png"
              alt="Where Face Authentication Fits in Your Flow"
              draggable="false"
              className="block h-auto w-full"
            />
          </h2>

          {/* 
            MOBILE IMAGE 
            This is now the only image that will show on mobile, 
            placed directly below the heading.
          */}
          <div className="overflow-hidden mt-8 min-[900px]:hidden">
            <img
              src="/images/face-authentication-flow-visual.png"
              alt="Face authentication workflow showing an input photo, identity verification status, and a successful face match"
              draggable="false"
              loading="lazy"
              className="ml-[-15%] block h-auto w-[130%] max-w-none"
            />
          </div>

          {/* Description */}
          <p
            className="
              mt-8 max-w-[480px]
              text-[13px] leading-[1.4] text-[#555555]
              sm:mt-9 sm:text-[14px]
              min-[900px]:mt-[35px]
              min-[900px]:w-[min(32vw,480px)]
              min-[900px]:text-[clamp(10px,0.9vw,14px)]
              min-[900px]:leading-[1.25]
            "
          >
            Different industries lean on this differently. A fintech app might
            run face authentication only once, at account opening, then rely on
            it again for high-value transfers. An insurance platform might use
            it during claims to confirm the claimant matches the policyholder
            on file. Gig and staffing platforms often re-check identity at each
            shift or login to prevent account sharing.
          </p>

          {/* Reuse existing Know More styling */}
          <a
            href="#face-authentication-apis"
            className="solutions-know-more mt-6 inline-flex min-[900px]:mt-[30px]"
          >
            Know More
            <svg
              className="solutions-know-more__arrow"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2.5 8h10M8 3.5 12.5 8 8 12.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
function FaceAuthenticationOnboardingCtaSection() {
  return (
    <section className="w-full bg-white px-4 pt-3 pb-5 sm:px-0 sm:pt-5 sm:pb-6">
      {/* Centered card with equal space on both sides */}
      <div
        className="
          relative isolate mx-auto
          min-h-[320px] w-full max-w-[1520px]
          overflow-hidden rounded-[12px]
          bg-[linear-gradient(105deg,#6545ff_0%,#8b70ff_48%,#6847ff_100%)]
          sm:min-h-[310px] sm:w-[80%]
          min-[1100px]:aspect-[1520/360]
          min-[1100px]:min-h-0
          min-[1100px]:w-[72%]
        "
      >
        {/* Figma illustration: desktop only */}
<div
  aria-hidden="true"
  className="
    pointer-events-none absolute inset-0 z-0
    hidden!
    min-[1100px]:block!
  "
>
  <img
    src="/images/face-authentication-onboarding-cta-visual.png"
    alt=""
    draggable="false"
    className="block h-[108%] w-full object-fill"
  />
</div>

        {/* Text content */}
        <div
          className="
            relative z-10 flex min-h-[320px]
            w-full flex-col items-start justify-center
            px-6 py-5
            sm:min-h-[360px] sm:px-8 sm:py-8
            min-[768px]:w-full
            min-[768px]:px-8
            min-[1100px]:w-[66%]
            min-[1100px]:h-full
            min-[1100px]:min-h-0
            min-[1100px]:px-[4.2%]
            min-[1100px]:py-6
          "
        >
          {/* Extracted Figma heading */}
          <h2 className="m-0 w-full max-w-[700px]">
            <img
              src="/images/face-authentication-onboarding-cta-heading.png"
              alt="Bring Face Authentication Into Your Onboarding Flow"
              draggable="false"
              className="block h-auto w-full"
            />
          </h2>

          {/* Description */}
          <p
            className="
              mt-2 max-w-[780px]
              text-[14px] leading-[1.4] text-white
              sm:text-[16px]
              min-[1100px]:mt-4
              min-[1100px]:text-[clamp(14px,1.05vw,20px)]
              min-[1100px]:leading-[1.2]
            "
          >
            Identity fraud doesn't announce itself; it looks like a normal
            signup until it isn't. Face authentication gives your onboarding
            flow a way to catch that difference in real time, without adding
            friction for genuine users.
          </p>

          {/* Reuse existing Book a Demo button */}
          <CtaImageButton
            href="#contact"
            label="Book a Demo"
            image="/images/book-demo.png"
            hoverText="Book a Demo"
            variant="demo"
            showArrow
            className="mt-2 w-[180px] shrink-0 sm:w-[195px]"
          />
        </div>
      </div>
    </section>
  );
}

function FaceAuthenticationFaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is face authentication the same as facial recognition?",
      answer:
        "Not quite. Facial recognition identifies who someone is from a database of faces. Face authentication verifies that someone is who they claim to be by comparing a live face against one specific reference photo.",
    },
    {
      question:
        "Does face authentication work on mobile browsers, not just apps?",
      answer:
        "Yes. The APIs are built to work across web and native app environments, so businesses aren't limited to a single platform.",
    },
    {
      question:
        "Can face authentication be tricked by a photo or video?",
      answer:
        "That's exactly what liveness detection is built to catch. It checks for signs of a real, present person, like natural movement and depth that static images and recordings can't replicate.",
    },
    {
      question: "How fast does a face-matching result come back?",
      answer:
        "Most match and liveness checks return a result within a few seconds, which is fast enough to keep it inside a single onboarding session without losing the user.",
    },
    {
      question:
        "Do we need all five APIs, or can we start with one or two?",
      answer:
        "You can start small. Many businesses begin with Face Match and Selfie Capture, then add liveness detection once volume or fraud risk justifies the extra step.",
    },
  ];

  return (
    <section
      aria-labelledby="face-authentication-faq-heading"
      className="
        relative w-full overflow-hidden
        bg-[radial-gradient(ellipse_at_52%_50%,rgba(151,129,255,0.95)_0%,rgba(151,129,255,0.38)_32%,rgba(151,129,255,0)_68%),linear-gradient(110deg,#6042ff_0%,#6b4fff_100%)]
      "
    >
      <div
        className="
          mx-auto grid w-[88%] max-w-[1520px]
          grid-cols-1 gap-8 py-10
          sm:gap-10 sm:py-14
          min-[1100px]:w-[80%]
          min-[1100px]:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)]
          min-[1100px]:items-start
          min-[1100px]:gap-x-[9.7vw]
          min-[1100px]:py-[60px]
        "
      >
        {/* Left: FAQ heading */}
        <div className="min-w-0">
          <h2
            id="face-authentication-faq-heading"
            className="
              m-0 max-w-[480px]
              text-[36px] font-semibold leading-[1.15]
              tracking-[-0.035em] text-white
              sm:text-[44px]
              min-[1100px]:text-[clamp(40px,2.8vw,54px)]
            "
          >
            Frequently Asked
            <br />
            Questions
          </h2>
        </div>

        {/* Right: FAQ accordion */}
        <div className="flex min-w-0 flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `face-authentication-faq-answer-${index}`;

            return (
              <div
                key={faq.question}
                className="
                  min-w-0 rounded-[4px]
                  border border-white/80
                "
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="
                    flex min-h-[68px] w-full
                    items-center justify-between gap-4
                    px-4 py-4 text-left
                    text-[15px] font-normal leading-[1.4]
                    text-white transition-colors
                    hover:bg-white/[0.08]
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-white
                    sm:min-h-[72px] sm:px-5 sm:text-[17px]
                    min-[1100px]:min-h-[74px]
                    min-[1100px]:px-[27px]
                    min-[1100px]:py-5
                    min-[1100px]:text-[20px]
                  "
                >
                  <span className="min-w-0 flex-1">
                    {faq.question}
                  </span>

                  {/* Dropdown arrow */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 14 10"
                    className={`
                      h-[10px] w-[14px] shrink-0
                      transition-transform duration-200
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  >
                    <path
                      d="M0 0h14L7 10z"
                      fill="white"
                    />
                  </svg>
                </button>

                {/* Expandable answer */}
                {isOpen && (
                  <div
                    id={answerId}
                    className="
                      border-t border-white/30
                      px-4 pb-5 pt-4
                      text-[14px] leading-[1.65]
                      text-white/90
                      sm:px-5
                      min-[1100px]:px-[27px]
                    "
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
function FaceAuthenticationPage() {
  return (
    <main className="w-full">
      <FaceAuthenticationHero />
      <FaceAuthenticationHowItWorksSection />
      <FaceAuthenticationApisSection />
      <FaceAuthenticationWhyBusinessesSection />
      <FaceAuthenticationFlowSection />
      <FaceAuthenticationOnboardingCtaSection />
      <FaceAuthenticationFaqSection />
      <FooterSection />
    </main>
  );
}

export default FaceAuthenticationPage;