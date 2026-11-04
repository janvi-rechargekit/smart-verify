import { useState } from "react";
import CtaImageButton from "../../components/shared/CtaImageButton.jsx";
import FooterSection from "../../sections/FooterSection.jsx";
function NumberIntelligenceHero() {
  const description =
    "A mobile number carries more information than most businesses realise. It can reveal who owns it, how long they've had it, whether it's linked to a real bank account, and whether it shows up in past fraud attempts. SmartVerify's Number Intelligence API suite turns that single data point into a full identity signal, so you catch fake sign-ups before they cost you money.";

  return (
    <section
      id="number-intelligence-hero"
      aria-labelledby="number-intelligence-title"
      className="
        relative isolate w-full overflow-hidden bg-white
        min-[1100px]:min-h-[clamp(600px,45vw,820px)]
      "
    >
      {/* Background gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,#FFFFFF_0%,#FFFFFF_60%,#F8F5FF_100%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[75%] w-[25%] bg-[radial-gradient(ellipse_at_bottom_left,rgba(236,49,105,0.15),transparent_70%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[45%] bg-[radial-gradient(ellipse_at_70%_50%,rgba(126,91,255,0.15),transparent_70%)] min-[1100px]:block"
      />

      {/* Heading, description and CTA buttons */}
      <div
        className="
          relative z-10 mx-auto flex w-[88%] flex-col items-start
          pt-28 pb-8
          sm:pt-32 sm:pb-10
          min-[1100px]:absolute
          min-[1100px]:left-[8%]
          min-[1100px]:top-1/2
          min-[1100px]:-translate-y-1/2
          min-[1100px]:mx-0
          min-[1100px]:w-[48%]
          min-[1100px]:pt-0
          min-[1100px]:pb-0
        "
      >
        <h1
          id="number-intelligence-title"
          className="m-0 w-full max-w-[700px] overflow-visible"
        >
          <img
            src="/images/number-intelligence-hero-heading.png"
            alt="Number Intelligence API for Smarter Customer Verification & Fraud Detection"
            draggable="false"
            fetchPriority="high"
            className="block h-auto w-full"
          />
        </h1>

        {/* Description text closely following the heading */}
        <p
          className="
            mt-5 block w-full max-w-[500px]
            text-[14px] leading-[1.5] text-[#383838]
            sm:text-[15px]
            min-[1100px]:mt-6
            min-[1100px]:max-w-[520px]
            min-[1100px]:text-[14px]
            min-[1100px]:leading-[1.6]
          "
        >
          {description}
        </p>

        {/* CTA buttons */}
        <div
          className="
            mt-8 flex w-full flex-col items-center gap-4
            min-[760px]:flex-row min-[760px]:items-center min-[760px]:justify-center min-[760px]:gap-6
            min-[1100px]:mt-8 min-[1100px]:items-start min-[1100px]:justify-start min-[1100px]:gap-6
          "
        >
          <CtaImageButton
            href="#documentation"
            label="View Documentation"
            image="/images/view-documentation.png"
            hoverText="View Documentation"
            variant="docs"
            className="w-[220px] max-w-full"
          />

          <CtaImageButton
            href="#contact"
            label="Book a Demo"
            image="/images/book-demo.png"
            hoverText="Book a Demo"
            variant="demo"
            showArrow
            className="w-[220px] max-w-full"
          />
        </div>
      </div>

      {/* 
        Hero visual 
        Anchored to the bottom right to match the reference image perfectly 
      */}
      <img
        src="/images/number-intelligence-hero-visual.png"
        alt="Woman using her phone with number verification, address and OTP verification panels"
        draggable="false"
        fetchPriority="high"
        className="
          relative z-0 mx-auto mt-12 block h-auto w-[94%]
          max-w-[720px] object-contain
          min-[1100px]:absolute
          min-[1100px]:bottom-0
          min-[1100px]:right-0
          min-[1100px]:mt-0
          min-[1100px]:mx-0
          min-[1100px]:w-[52vw]
          min-[1100px]:max-w-[1000px]
        "
      />
    </section>
  );
}
function NumberIntelligenceApiExplorer() {
  const apis = [
    {
      title: "Mob No Verification - OTP",
      description:
        "Verifies that a number is live and truly belongs to the person entering it, through a one-time password delivered in real time. Run this at signup to shut down bot-driven registrations and fake numbers before they ever hit the database.",
    },
    {
      title: "Mobile to Address",
      description:
        "Fetches the registered address with a mobile number from telecom records, so customers don't need to type in their address. This cuts form abandonment and gives an address to cross-check against KYC documents.",
    },
    {
      title: "Mobile to PAN",
      description:
        "Matches a mobile number to its linked PAN, letting you confirm tax identity without asking the customer to type it in themselves. This speeds up lending and financial onboarding flows where PAN verification is mandatory.",
    },
    {
      title: "Mobile to Pre-Fill",
      description:
        "Auto-populates a customer's name, address, and other demographic details the moment they enter their mobile number. Shorter forms mean fewer drop-offs, and the data comes out cleaner than manual entry ever produces.",
    },
    {
      title: "Mobile Name Lookup",
      description:
        "Returns the registered name tied to a mobile number, so you can spot mismatches between what a customer types and what's on record. It's a fast first check before you move to deeper document verification.",
    },
    {
      title: "Mobile Number Vintage",
      description:
        "Tells how long a number has been active. A number issued three days ago carries more risk than one with five years of history, and this API gives that context in a single call.",
    },
    {
      title: "Mobile to UPI Basic",
      description:
        "Validates a UPI handle with its mobile number and checks whether the mobile number is linked with an active bank account. This helps with payment-related onboarding and fraud checks before turning on transactions for an account.",
    },
    {
      title: "Common Account Detection",
      description:
        "Flags when multiple accounts on the platform share a mobile number, catching duplicate sign-ups, referral abuse, and multi-accounting before they drain the incentive budget.",
    },
    {
      title: "WhatsApp Check",
      description:
        "Checks if a number is live on WhatsApp so you don't waste messaging spend or automation on dead numbers. It also helps verify that the number is for a real, reachable user.",
    },
    {
      title: "WhatsApp Check Advanced",
      description:
        "This goes a step further than the basic check by pulling profile details linked to the WhatsApp account, giving you a stronger fraud signal and more context before you engage the customer.",
    },
  ];

  return (
    <section
      id="number-intelligence-api-explorer"
      aria-labelledby="number-intelligence-api-explorer-title"
      className="w-full overflow-clip bg-white"
    >
      <div className="mx-auto grid w-[90%] grid-cols-1 gap-10 pb-14 pt-12 sm:w-[88%] min-[1100px]:ml-[9.6%] min-[1100px]:mr-0 min-[1100px]:w-[73%] min-[1100px]:max-w-[1400px] min-[1100px]:grid-cols-[minmax(0,0.66fr)_minmax(0,1fr)] min-[1100px]:gap-x-[clamp(32px,3.2vw,60px)] min-[1100px]:gap-y-0 min-[1100px]:pb-[120px] min-[1100px]:pt-[130px]">

        {/* LEFT: Sticky introduction */}
        <div className="min-w-0 self-start min-[1100px]:sticky min-[1100px]:top-[128px]">
          <h2
            id="number-intelligence-api-explorer-title"
            className="m-0 max-w-[530px] text-[clamp(36px,2.9vw,54px)] font-normal leading-[1.05] tracking-[-0.035em] text-[#555555]"
          >
            Explore SmartVerify&apos;s
            <br />
            Number Intelligence
            <br />
            APIs
          </h2>

          <p className="mt-9 max-w-[520px] text-[16px] leading-[1.2] text-[#222222] sm:text-[18px]  min-[1100px]:max-w-[430px]">
            Each of the APIs below fits into a different part of the number
            verification puzzle. You could even call them one at a time or
            chain a few together depending on how much confidence they need
            to let a customer through.
          </p>

          {/* Reuse the existing Know More button styling */}
          <a
            href="#number-intelligence-api-cards"
            className="solutions-know-more mt-14"
            aria-label="Know more about Number Intelligence APIs"
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

        {/* RIGHT: Two-column API card grid */}
        <div
          id="number-intelligence-api-cards"
          className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 min-[1100px]:gap-x-[36px] min-[1100px]:gap-y-[34px]"
        >
          {apis.map((api) => (
            <article
              key={api.title}
className="
  flex min-h-[300px] min-w-0 flex-col
  rounded-[6px] border border-[#B9A4FF]
  bg-white px-5 py-6
  sm:px-6 sm:py-7
  min-[1100px]:min-h-[320px]
  min-[1100px]:w-[94%]
  min-[1100px]:justify-self-start
  min-[1100px]:px-[22px]
  min-[1100px]:py-[22px]
"            >
              <h3 className="text-[20px] font-normal leading-[1.25] text-[#7B63D9] min-[1100px]:text-[23px]">
                {api.title}
              </h3>

              <p className="mt-5 text-[15px] leading-[1.3] text-[#3E3E3E] min-[1100px]:max-w-[360px] min-[1100px]:text-[16px]">
                {api.description}
              </p>

              {/* Read more link */}
              <a
                href="#contact"
                className="mt-auto inline-flex w-fit items-center gap-3 pt-7 text-[16px] text-[#7B63D9] transition-colors hover:text-[#4D3ECA] min-[1100px]:text-[18px]"
                aria-label={`Read more about ${api.title}`}
              >
                <span>Read more</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path
                    d="M4 12h15M13 5.5 19.5 12 13 18.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
function NumberIntelligenceBenefitsSection() {
  const benefits = [
    {
      id: "fake-accounts",
      icon: "/images/number-intelligence-benefit-icon-1.png",
      title: "Fewer fake accounts",
      description:
        "Catch throwaway numbers and synthetic identities at the point of entry.",
    },
    {
      id: "onboarding",
      icon: "/images/number-intelligence-benefit-icon-2.png",
      title: "Faster onboarding",
      description:
        "Pre-populate forms with verified information instead of having the customer type it all in.",
    },
    {
      id: "fraud-losses",
      icon: "/images/number-intelligence-benefit-icon-3.png",
      title: "Lower fraud losses",
      description:
        "Spot duplicate accounts, mismatched names, and newly issued numbers before they become chargebacks.",
    },
    {
      id: "manual-review",
      icon: "/images/number-intelligence-benefit-icon-4.png",
      title: "Less manual review",
      description:
        "Give the compliance team a data-backed signal instead of a blank phone number field.",
    },
    {
      id: "conversion",
      icon: "/images/number-intelligence-benefit-icon-5.png",
      title: "Better conversion",
      description:
        "Shorter forms and instant checks mean fewer drop-offs mid-signup.",
    },
  ];

  return (
    <section
      id="number-intelligence-benefits"
      aria-labelledby="number-intelligence-benefits-title"
      className="relative isolate w-full overflow-hidden bg-white"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-white"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[85%] w-[18%] bg-[radial-gradient(ellipse_at_bottom_left,rgba(236,49,105,0.24),transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-[20%] bg-[linear-gradient(90deg,transparent,rgba(139,104,255,0.17))]"
      />

      <div
        className="
          mx-auto w-[92%] max-w-[1520px]
          pb-10 pt-10 sm:w-[88%] sm:pb-12
          min-[900px]:translate-x-12
          min-[900px]:pb-[36px]
          min-[900px]:pt-[56px]
        "
      >
        {/* Heading */}
        <header className="flex flex-col items-start">
          <h2
            id="number-intelligence-benefits-title"
            className="m-0 w-[88%] max-w-[623px] min-[900px]:w-[42%]"
          >
            <img
              src="/images/number-intelligence-benefits-heading.png"
              alt="Why Businesses Rely on Number Intelligence"
              draggable="false"
              className="block h-auto w-full"
            />
          </h2>

          {/* Manually written description */}
          <p
            className="
              mt-4 max-w-[673px]
              text-[14px] leading-[1.5] text-[#555555]
              sm:text-[15px]
              min-[900px]:w-[44%]
            "
          >
            Manual verification creates delays, fraud risks, and missed
            opportunities.
          </p>
        </header>

       {/* Desktop cards image — never display on mobile or tablet */}
<div className="hidden min-[900px]:block">
  <img
    src="/images/number-intelligence-benefits-cards.png"
    alt="Five benefits of Number Intelligence"
    draggable="false"
    loading="lazy"
    className="mt-[50px] block h-auto w-full"
  />
</div>

        {/* Mobile and tablet: manually written cards with icons */}
        <div
          className="
            mt-8 grid grid-cols-1 gap-3
            min-[520px]:grid-cols-2
            min-[900px]:hidden
          "
        >
          {benefits.map((benefit) => (
            <article
              key={benefit.id}
              className="
                flex min-w-0 items-start gap-3
                rounded-md border border-[#DCD5FF]
                bg-white p-4
                shadow-[0_1px_4px_rgba(79,62,202,0.04)]
              "
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#F0EDFF] p-2">
                <img
                  src={benefit.icon}
                  alt=""
                  aria-hidden="true"
                  draggable="false"
                  className="block h-full w-full object-contain"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="m-0 text-[16px] font-medium leading-snug text-[#292929]">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.4] text-[#555555]">
                  {benefit.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
function NumberIntelligenceUseCasesSection() {
  const description =
    "Verify identities faster, reduce manual effort, and make smarter risk decisions with reliable mobile intelligence.";

  const useCasesAlt =
    "Use cases across FinTech and Lending, E-commerce, Insurance, Staffing and Recruitment, and other industries.";

  return (
    <section
      id="number-intelligence-use-cases"
      aria-labelledby="number-intelligence-use-cases-title"
      className="relative isolate w-full overflow-hidden bg-white"
    >
      {/* Grey separator */}
      <div
        aria-hidden="true"
        className="h-6 w-full bg-[#F0F0F0]"
      />

      {/* Right-side desktop background tint */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-y-0 right-0 -z-10
          hidden w-[18%]
          bg-[linear-gradient(90deg,transparent,rgba(139,104,255,0.12))]
          min-[1000px]:block
        "
      />

      <div
        className="
          mx-auto grid w-[90%] max-w-[1536px]
          grid-cols-1 items-start gap-7
          pb-10 pt-8
          sm:w-[88%]
          min-[1000px]:w-[80%]
          min-[1000px]:translate-x-12
          min-[1000px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
          min-[1000px]:gap-x-[1.5vw]
          min-[1000px]:gap-y-0
          min-[1000px]:pb-14
          min-[1000px]:pt-8
        "
      >
        {/* LEFT: Heading, manually written description and cards */}
        <div className="min-w-0">
          <h2
            id="number-intelligence-use-cases-title"
            className="m-0 mt-6 w-full min-[1000px]:mt-12"
          >
            <img
              src="/images/number-intelligence-use-cases-heading.png"
              alt="How Businesses Use Number Intelligence"
              draggable="false"
              className="block h-auto w-full"
            />
          </h2>

          {/* One manually written description for mobile and desktop */}
          <p
            className="
              mt-4 max-w-[620px]
              text-[14px] leading-[1.5] text-[#383838]
              sm:text-[15px]
              min-[1000px]:mt-6
              min-[1000px]:text-[14px]
              min-[1000px]:leading-[1.5]
            "
          >
            {description}
          </p>

          
{/* Existing Figma cards on a white mobile background */}
<div
  className="
    mt-6 rounded-lg bg-white p-3
    min-[1000px]:mt-8
    min-[1000px]:rounded-none
    min-[1000px]:bg-transparent
    min-[1000px]:p-0
  "
>
  <img
    src="/images/number-intelligence-use-cases-cards.png"
    alt={useCasesAlt}
    draggable="false"
    loading="lazy"
    className="block h-auto w-full"
  />
</div>


          {/* Mobile illustration: appears below all cards */}
          <div className="mt-6 flex w-full justify-center min-[1000px]:hidden">
            <img
              src="/images/number-intelligence-use-cases-visual.png"
              alt="Digital verification illustration featuring a protected document, security shield, and identity data."
              draggable="false"
              loading="lazy"
              className="block h-auto w-full max-w-[520px] object-contain"
            />
          </div>
        </div>

        {/* RIGHT: Desktop illustration */}
        <div
          className="
            hidden min-w-0 items-start justify-center
            min-[1000px]:mt-[250px]
            min-[1000px]:flex
          "
        >
          <img
            src="/images/number-intelligence-use-cases-visual.png"
            alt="Digital verification illustration featuring a protected document, security shield, and identity data."
            draggable="false"
            loading="lazy"
            className="block h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
function NumberIntelligenceIntegrationSection() {
  const description =
    "Every API in the Number Intelligence suite is a RESTful endpoint that returns a JSON response, so it drops into an existing onboarding flow without a rebuild. SmartVerify provides a sandbox environment for testing calls before you go live, along with documentation for each endpoint and typical response times under a few seconds. Most teams start with OTP verification and mobile to pre-fill, then layer in fraud-focused APIs like Common Account Detection as their volume grows.";

  return (
    <section
      id="number-intelligence-integration"
      aria-labelledby="number-intelligence-integration-title"
      className="w-full bg-white"
    >
      {/* Grey gap between the previous section and this section */}
      <div
        aria-hidden="true"
        className="h-6 w-full bg-[#F0F0F0]"
      />

      {/* Main content */}
      <div className="mx-auto grid w-[88%] max-w-[1380px] grid-cols-1 items-center gap-8 pb-10 pt-8 min-[900px]:w-[72%] min-[900px]:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] min-[900px]:gap-x-[clamp(32px,4vw,76px)] min-[900px]:py-12">

        {/* LEFT: Heading and description */}
        <div className="flex min-w-0 flex-col items-start">
          <h2
            id="number-intelligence-integration-title"
            className="w-full"
          >
            <img
              src="/images/number-intelligence-integration-heading.png"
              alt="Integrate Number Intelligence in Minutes"
              draggable="false"
              className="block h-auto w-[min(100%,30vw)] min-w-[240px] max-w-[566px] min-[900px]:min-w-0"
            />
          </h2>

          {/* Manually written description for both desktop and mobile */}
          <p
            className="
              mt-6 w-full max-w-[600px]
              text-[14px] leading-[1.6] text-[#4B5563]
              sm:text-[15px]
              min-[900px]:mt-8
              min-[900px]:text-[15px]
              min-[900px]:leading-[1.65]
            "
          >
            {description}
          </p>
        </div>

        {/* RIGHT: Integration illustration */}
        <div className="mt-4 flex min-w-0 items-center justify-center min-[900px]:justify-end min-[900px]:mt-0">
          <img
            src="/images/number-intelligence-integration-visual.png"
            alt="Illustration of an API connecting a laptop, processing engine, and server."
            draggable="false"
            loading="lazy"
            className="
              block h-auto w-[min(80vw,360px)] max-w-full object-contain
              min-[900px]:w-[min(28vw,619px)]
            "
          />
        </div>

      </div>
    </section>
  );
}
function NumberIntelligenceIdentitySignalCta() {
  const description =
    "A mobile number is one of the cheapest, fastest identity signals a business can act on if it's read correctly. SmartVerify's Number Intelligence suite turns that single field into a fraud check, an address lookup, and a pre-fill tool all at once. Test any of the ten APIs above in the sandbox environment and see how much manual review can be cut from your onboarding flow.";

  return (
    <section
      id="number-intelligence-identity-signal"
      aria-labelledby="number-intelligence-identity-signal-title"
      className="w-full bg-white py-6 sm:py-8"
    >
      {/* DESKTOP BANNER */}
      <div className="mt-4 relative mx-auto hidden aspect-[1520/372] w-[80%] max-w-[1520px] overflow-hidden rounded-[12px] min-[1100px]:block">

        {/* Background artwork */}
        <img
          src="/images/number-intelligence-identity-signal-bg.png"
          alt=""
          aria-hidden="true"
          draggable="false"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Content aligned to the left */}
        <div className="absolute left-[4.1%] top-[7%] z-10 flex w-[61%] max-w-[900px] flex-col items-start text-white">

          <h2
            id="number-intelligence-identity-signal-title"
            className="m-0 w-full max-w-[880px] text-[clamp(30px,2.5vw,46px)] font-semibold leading-[1.1] tracking-[-0.035em]"
          >
            Turn Every Mobile Number Into
            <br />
            a Trusted Identity Signal
          </h2>

          <p className="mt-2 w-full max-w-[830px] text-[clamp(14px,1.05vw,19px)] font-normal leading-[1.22] text-white">
            {description}
          </p>

          {/* Existing Book a Demo button */}
          <div className="mt-4">
            <CtaImageButton
              href="#contact"
              label="Book a Demo"
              image="/images/book-demo.png"
              hoverText="Book a Demo"
              variant="demo"
              showArrow
              className="w-[200px] max-w-full [&_.cta-hover-face--demo]:text-[12px] [&_.cta-hover-face--demo]:px-3 [&_.cta-hover-arrow]:h-5 [&_.cta-hover-arrow]:w-5"
            />
          </div>
        </div>
      </div>

      {/* MOBILE AND TABLET BANNER */}
      <div className="mx-auto w-[92%] max-w-[720px] overflow-hidden rounded-[12px] bg-[#6547F8] min-[1100px]:hidden">
        
        {/* 
          The decorative illustration div has been completely removed here.
        */}

        {/* Responsive content (Added pt-6 to compensate for the removed image) */}
        <div className="flex flex-col items-start px-5 pb-7 pt-6 text-white sm:px-8 sm:pb-9 sm:pt-8">
          <h2
            id="number-intelligence-identity-signal-title-mobile"
            className="m-0 w-full text-[clamp(27px,5vw,40px)] font-semibold leading-[1.12] tracking-[-0.03em]"
          >
            Turn Every Mobile Number Into a Trusted Identity Signal
          </h2>

          <p className="mt-3 text-[14px] leading-[1.45] text-white sm:text-[16px]">
            {description}
          </p>

          <div className="mt-5">
            <CtaImageButton
              href="#contact"
              label="Book a Demo"
              image="/images/book-demo.png"
              hoverText="Book a Demo"
              variant="demo"
              showArrow
              className="w-[185px] max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function NumberIntelligenceFaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "What is number intelligence in identity verification?",
      answer:
        "It's a set of APIs that check and enrich data linked to a mobile number, ownership, address, name match, account age, and more to help businesses confirm a customer is who they claim to be.",
    },
    {
      question:
        "What’s the difference from a plain OTP check?",
      answer:
        "OTP verification is just an indication that someone has access to a number. Number Intelligence goes a step further and looks at the number’s history, identity markers associated with it, and how it relates to other accounts on your platform.",
    },
    {
      question:
        "Is the data delivered in real-time?",
      answer:
        "Yes. The API call returns in seconds, fast enough to run during a live onboarding session without keeping the customer waiting.",
    },
    {
      question:
        "What industries use these APIs the most?",
      answer:
        "FinTech, banking, insurance, e-commerce, and staffing platforms use Number Intelligence heavily, since all four deal with high onboarding volume and a direct cost from fraudulent accounts.",
    },
    {
      question:
        "Do businesses need customer consent to use these APIs?",
      answer:
        "Yes. Number intelligence checks should run as part of a disclosed verification process, in line with applicable data protection and telecom regulations in the operating region.",
    },
  ];

  return (
    <section
      id="number-intelligence-faq"
      aria-labelledby="number-intelligence-faq-heading"
      className="relative w-full overflow-hidden bg-[#6547F8]"
    >
      <div
        className="
          mx-auto grid w-[88%] max-w-[1520px]
          grid-cols-1 gap-8
          py-10 sm:py-12
          min-[900px]:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)]
          min-[900px]:items-start
          min-[900px]:gap-x-[6vw]
          min-[900px]:py-[80px]
        "
      >
        {/* Left: FAQ heading */}
        <h2
          id="number-intelligence-faq-heading"
          className="
            m-0 max-w-[480px]
            text-[34px] font-semibold
            leading-[1.12] tracking-[-0.04em]
            text-white
            sm:text-[40px]
            min-[900px]:text-[clamp(34px,2.8vw,54px)]
          "
        >
          Frequently Asked
          <br />
          Questions
        </h2>

        {/* Right: FAQ accordion */}
        <div className="flex min-w-0 flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `number-intelligence-faq-answer-${index}`;

            return (
              <article
                key={faq.question}
                className="min-w-0 rounded-[5px] border border-white/75"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="
                    flex min-h-[62px] w-full
                    items-center justify-between gap-4
                    px-4 py-4 text-left
                    text-[14px] font-normal
                    leading-[1.4] text-white
                    transition-colors duration-200
                    hover:bg-white/[0.08]
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-white
                    sm:px-5 sm:text-[16px]
                    min-[900px]:min-h-[66px]
                    min-[900px]:px-6
                    min-[900px]:text-[18px]
                  "
                >
                  <span className="min-w-0 flex-1">
                    {faq.question}
                  </span>

                  <svg
                    aria-hidden="true"
                    viewBox="0 0 14 10"
                    className={`
                      h-[10px] w-[14px] shrink-0
                      transition-transform duration-200
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  >
                    <path d="M0 0h14L7 10z" fill="white" />
                  </svg>
                </button>

                {isOpen && (
                  <div
                    id={answerId}
                    className="
                      border-t border-white/30
                      px-4 pb-5 pt-4
                      text-[13px] leading-[1.55]
                      text-white/90
                      sm:px-5 sm:text-[14px]
                      min-[900px]:px-6
                      min-[900px]:text-[15px]
                    "
                  >
                    {faq.answer}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
function NumberIntelligencePage() {
  return (
    <main className="w-full">
      <NumberIntelligenceHero />
      <NumberIntelligenceBenefitsSection />

      <div
        aria-hidden="true"
        className="h-6 w-full bg-[#F0F0F0]"
      />

      <NumberIntelligenceApiExplorer />
      <NumberIntelligenceUseCasesSection />
      <NumberIntelligenceIntegrationSection />
      <NumberIntelligenceIdentitySignalCta />
      <NumberIntelligenceFaqSection />
      <FooterSection />
    </main>
  );
}

export default NumberIntelligencePage;