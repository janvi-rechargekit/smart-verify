import { useState } from "react";
import CtaImageButton from "../../components/shared/CtaImageButton.jsx";
import FooterSection from "../../sections/FooterSection.jsx";
function BusinessVerificationHero() {
  return (
    <section
      id="business-verification-hero"
      aria-labelledby="business-verification-heading"
      className="
        relative isolate w-full overflow-hidden
        bg-[radial-gradient(ellipse_at_0%_100%,rgba(236,48,105,0.22)_0%,rgba(236,48,105,0.08)_30%,transparent_48%),radial-gradient(ellipse_at_100%_55%,rgba(166,119,194,0.2)_0%,rgba(166,119,194,0.08)_36%,transparent_62%),#ffffff]
        min-[1100px]:h-[min(42.2vw,809px)]
        min-[1100px]:min-h-[460px]
        min-[1100px]:bg-white
      "
    >
      {/* Exact Figma pink/lavender background on desktop */}
      
      <img
        src="/images/business-verification-hero-background.png"
        alt=""
        aria-hidden="true"
        draggable="false"
        className="
          pointer-events-none absolute inset-0 z-0
          hidden h-full w-full object-fill
          min-[1100px]:block
        "
      />

     {/* Desktop illustration — forcefully hidden on mobile/tablet */}
<div
  aria-hidden="true"
  className="
    pointer-events-none absolute inset-0 z-0
    hidden!
    min-[1100px]:block!
  "
>
  <img
    src="/images/business-verification-hero-visual.png"
    alt=""
    draggable="false"
    className="
      mt-18 absolute right-[8.5%] top-1/2
      h-auto w-[min(46vw,910px)] max-w-none
      -translate-y-1/2 object-contain
    "
  />
</div>

      {/* Left-side content */}
      <div
        className="
          relative z-10 mx-auto flex w-[88%] max-w-[1520px]
          flex-col items-start
          pb-10 pt-[110px]
          sm:pb-14 sm:pt-[125px]
          min-[1100px]:h-full
          min-[1100px]:w-[80%]
          min-[1100px]:justify-center
          min-[1100px]:pb-0
          min-[1100px]:pt-0
        "
      >
        <div
          className="
            w-full
            min-[1100px]:w-[44vw]
            min-[1100px]:max-w-[820px]
          "
        >
          {/* Figma heading image */}
          <h1
            id="business-verification-heading"
            className="
              m-0 w-full max-w-[647px]
              min-[1100px]:w-[min(34vw,647px)]
            "
          >
            <img
              src="/images/business-verification-hero-heading.png"
              alt="Business Verification APIs for Fast & Safe KYB"
              draggable="false"
              className="block h-auto w-full"
            />
          </h1>

          {/* Description */}
          <p
            className="
              mt-6 max-w-[560px]
              text-[14px] leading-[1.4] text-[#414141]
              sm:mt-7 sm:text-[15px]
              min-[1100px]:mt-[34px]
              min-[1100px]:w-[min(34vw,650px)]
              min-[1100px]:max-w-[650px]
              min-[1100px]:text-[clamp(13px,0.85vw,16px)]
              min-[1100px]:leading-[1.2]
            "
          >
            SmartVerify's Business Verification API enables organizations to
            verify business identities quickly and accurately. Access trusted
            government and regulatory data sources to validate company
            information, confirm registrations, and automate business KYC
            workflows while minimizing manual verification efforts.
          </p>

          {/* Reuse both existing CTA buttons */}
          <div
            className="
              mt-7 flex w-full flex-col items-center gap-3
              sm:flex-row sm:flex-wrap sm:justify-center sm:gap-5
              min-[1100px]:mt-[36px]
              min-[1100px]:w-fit
              min-[1100px]:flex-nowrap
              min-[1100px]:justify-start
              min-[1100px]:gap-[1.8vw]
            "
          >
            <CtaImageButton
              href="#documentation"
              label="View Documentation"
              image="/images/view-documentation.png"
              hoverText="View Documentation"
              variant="docs"
              className="
                w-full max-w-[245px] shrink-0
                sm:w-[250px]
                min-[1100px]:w-[min(15.7vw,300px)]
              "
            />

            <CtaImageButton
              href="#contact"
              label="Book a Demo"
              image="/images/book-demo.png"
              hoverText="Book a Demo"
              variant="demo"
              showArrow
              className="
                w-full max-w-[245px] shrink-0
                sm:w-[250px]
                min-[1100px]:w-[min(13.6vw,261px)]
              "
            />
          </div>
        </div>

        {/* Mobile/tablet illustration: appears once, below the buttons */}
        <div className="mt-8 w-full min-[1100px]:hidden -mb-8">
          <img
            src="/images/business-verification-hero-visual.png"
            alt="Business verification illustration showing company registration, compliance summary, director information, and verification results"
            draggable="false"
            loading="eager"
            className="
              mx-auto block h-auto w-full max-w-[560px]
              object-contain
            "
          />
        </div>
      </div>
    </section>
  );
}
function BusinessVerificationMattersSection() {
  const cards = [
    {
      id: "onboarding",
      image: "/images/business-verification-matters-card-1.png",
      imageAlt: "Business identity verification and merchant onboarding",
      title: "Onboard vendors and merchants faster",
      description:
        "Verification that took a back-office team hours now returns in seconds.",
    },
    {
      id: "shell-companies",
      image: "/images/business-verification-matters-card-2.png",
      imageAlt: "Company verification and shell company detection",
      title: "Catch shell or dissolved companies early",
      description:
        "Before a contract or payout goes through.",
    },
    {
      id: "directors",
      image: "/images/business-verification-matters-card-3.png",
      imageAlt: "Director verification and company record checks",
      title: "Cross-check directors against company records",
      description:
        "So the person signing actually has the authority to sign.",
    },
    {
      id: "compliance",
      image: "/images/business-verification-matters-card-4.png",
      imageAlt: "Business compliance and verification checks",
      title: "Meet compliance expectations",
      description:
        "For lending, marketplaces, insurance, and BFSI onboarding.",
    },
  ];

  return (
    <>
      <div
        aria-hidden="true"
        className="h-3 w-full bg-[#F0F0F0]"
      />

      <section
        aria-labelledby="business-verification-matters-heading"
        className="w-full bg-white"
      >
        <div
          className="
            mx-auto w-[88%] max-w-[1520px]
            pb-10 pt-8
            sm:pb-12 sm:pt-10
            min-[1100px]:w-[80%]
            min-[1100px]:pb-[42px]
            min-[1100px]:pt-[46px]
          "
        >
          {/* Section heading and manually written introduction */}
          <div
            className="
              grid grid-cols-1 items-start gap-5
              sm:gap-6
              min-[768px]:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]
              min-[768px]:gap-8
            "
          >
            <h2
              id="business-verification-matters-heading"
              className="m-0 mt-6 w-full max-w-[540px]"
            >
              <img
                src="/images/business-verification-matters-heading.png"
                alt="Why Business Verification Matters for Your Business"
                draggable="false"
                className="block h-auto w-full"
              />
            </h2>

            <p
              className="
                m-0 mt-6 max-w-[400px]
                text-[15px] leading-[1.5] text-[#555555]
                min-[768px]:ml-auto
                min-[1100px]:text-[14px]
              "
            >
              Manual company checks take time and can still let fraud slip
              through. Fake CINs, shell companies, mismatched director
              records, and forged FSSAI or IEC certificates can cost
              businesses money and create regulatory challenges.
              Business verification helps reduce manual checks and
              streamline the process.
            </p>
          </div>

          {/* Four cards: image first, editable text underneath */}
          <div
            className="
              mt-7 grid grid-cols-1 items-stretch gap-5
              min-[540px]:grid-cols-2
              min-[1100px]:mt-8
              min-[1100px]:grid-cols-4
              min-[1100px]:gap-x-[18px]
              min-[1100px]:gap-y-0
            "
          >
            {cards.map((card) => (
              <article
                key={card.id}
                className="
                  flex h-full min-w-0 flex-col
                  overflow-hidden rounded-[10px]
                  border border-[#D5D5D5] bg-white
                "
              >
                {/* Keep the original Figma image */}
                <div className="aspect-square w-full overflow-hidden bg-[#EAF2FF]">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    draggable="false"
                    loading="lazy"
                    className="block h-full w-full object-cover"
                  />
                </div>

                {/* Manually written card content */}
                <div className="flex flex-1 flex-col px-4 py-4 sm:px-4 sm:py-5">
                  <h3
                    className="
                      m-0 text-[16px] font-medium leading-[1.35]
                      text-[#333333] sm:text-[17px]
                    "
                  >
                    {card.title}
                  </h3>

                  <p
                    className="
                      mt-3 text-[14px] leading-[1.5]
                      text-[#666666] sm:text-[15px]
                    "
                  >
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
const businessVerificationApiCards = [
  {
    id: "company-registration",
    image: "/images/business-verification-api-work-card-1.png",
    alt: "Company Registration and CIN APIs dashboard",
    tag: "Company Registration & CIN APIs",
    title: "Verify CIN and basic company details.",
    bullets: [
      "Verify company registration details.",
      "Retrieve official company information.",
      "Access key business details for verification.",
    ],
  },
  {
    id: "pan-din-cin",
    image: "/images/business-verification-api-work-card-2.png",
    alt: "PAN, DIN and CIN Verification dashboard",
    tag: "PAN, DIN & CIN Verification",
    title: "Verify and link corporate, tax and director identities.",
    bullets: [
      "Link PAN with CIN and company details.",
      "Map PAN with the associated director DIN.",
      "Verify corporate and director identities.",
    ],
  },
  {
    id: "tan-verification",
    image: "/images/business-verification-api-work-card-3.png",
    alt: "TAN Verification APIs dashboard",
    tag: "TAN Verification APIs",
    title: "Verify TAN validity and retrieve business details.",
    bullets: [
      "Check TAN validity and registration status.",
      "Retrieve associated business information.",
      "Access relevant tax identification details.",
    ],
  },
  {
    id: "food-trade-licence",
    image: "/images/business-verification-api-work-card-4.png",
    alt: "Food, Trade and Licence Verification dashboard",
    tag: "Food, Trade & Licence Verification",
    title: "Verify food, trade and statutory licenses instantly.",
    bullets: [
      "Verify FSSAI license validity and details.",
      "Validate GSTIN and business details.",
      "Check trade and other statutory licenses.",
    ],
  },
  {
    id: "udyam-msme",
    image: "/images/business-verification-api-work-card-5.png",
    alt: "Udyam MSME Verification API dashboard",
    tag: "Udyam (MSME) Verification API",
    title: "Verify Udyam registration and access business details instantly.",
    bullets: [
      "Verify Udyam registration details.",
      "Retrieve structured business information.",
      "Access MSME registration and enterprise details.",
    ],
  },
];
function BusinessVerificationApisHowItWorksSection() {
  return (
    <>
      {/* Thin grey divider */}
      <div aria-hidden="true" className="h-4 w-full bg-[#F0F0F0]" />

      <section
        aria-labelledby="business-verification-how-it-works-heading"
        className="relative w-full bg-white"
      >
        {/* Heading and description */}
        <div
          className="
            mx-auto w-[85%] max-w-[1520px]
            pb-12 pt-10
            sm:pb-16 sm:pt-12
            min-[1100px]:w-[77%]
            min-[1100px]:pb-[70px]
            min-[1100px]:pt-[46px]
          "
        >
          <header
            className="
              grid grid-cols-1 gap-5
              min-[1100px]:grid-cols-2
              min-[1100px]:items-start
              min-[1100px]:gap-x-[11vw]
            "
          >
            <h2
              id="business-verification-how-it-works-heading"
              className="m-0 w-full max-w-[490px]"
            >
              <img
                src="/images/business-verification-apis-how-it-works-heading.png"
                alt="How Our Business Verification APIs Work"
                draggable="false"
                className="block h-auto w-full"
              />
            </h2>

            <p
              className="
                m-0 w-full max-w-[500px]
                text-[14px] leading-[1.35] text-[#555555]
                sm:text-[16px]
                min-[1100px]:ml-auto
                min-[1100px]:pt-[14px]
                min-[1100px]:text-[19px]
                min-[1100px]:leading-[1.25]
              "
            >
              SmartVerify’s KYB toolkit comprises company registration,
              cross-verification of PAN, DIN, CIN, tax identifiers, food
              and trade licenses, and MSME (Udyam) status.
            </p>
          </header>

          {/* Sticky card sequence — GST / Vehicle section approach */}
          <div
            className="
              mt-9 flex flex-col items-center gap-7
              sm:mt-12 sm:gap-8
              min-[1100px]:mt-[110px]
              min-[1100px]:gap-[34px]
            "
          >
            {businessVerificationApiCards.map((card, index) => (
              <div
                key={card.id}
                style={{ zIndex: index + 1 }}
                className="
                  relative w-full
                  min-[1100px]:sticky
                  min-[1100px]:top-[24px]
                  min-[1100px]:self-stretch
                "
              >
                {/* Desktop and tablet: image left, content right */}
                <article
                  className="
                    relative mx-auto hidden w-full max-w-[1017px]
                    overflow-hidden rounded-[12px]
                    border border-[#E5E7EB] bg-white
                    min-[768px]:flex
                    min-[768px]:min-h-[460px]
                    min-[768px]:flex-row
                  "
                >
                  <div
                    className="
                      flex w-full shrink-0
                      items-center justify-center
                      bg-white p-6
                      min-[768px]:w-[44%]
                      min-[768px]:p-8
                      lg:p-9
                    "
                  >
                    <img
                      src={card.image}
                      alt={card.alt}
                      draggable="false"
                      loading={index === 0 ? "eager" : "lazy"}
                      className="
                        block aspect-square
                        h-auto w-full max-w-[386px]
                        rounded-[12px]
                        select-none object-contain
                      "
                    />
                  </div>

                  {/* Manually written business verification content */}
                  <div
                    className="
                      flex min-w-0 flex-1
                      flex-col justify-center
                      px-7 py-8
                      lg:px-10 lg:py-10
                    "
                  >
                    <span
                      className="
                        mb-3 inline-flex w-fit
                        rounded-full bg-[#EAF5FB]
                        px-3 py-1
                        text-[11px] font-normal
                        text-[#536A7F]
                        lg:text-[12px]
                      "
                    >
                      {card.tag}
                    </span>

                    <h3
                      className="
                        m-0 text-[22px] font-normal
                        leading-[1.3] tracking-[-0.02em]
                        text-[#203047]
                        lg:text-[27px]
                      "
                    >
                      {card.title}
                    </h3>

                    <ul className="mt-7 flex flex-col gap-4">
                      {card.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="
                            flex items-start gap-2
                            text-[14px] leading-[1.5]
                            text-[#52677D]
                            lg:text-[16px]
                          "
                        >
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 20 20"
                            fill="none"
                            className="
                              mt-[2px] h-4 w-4
                              shrink-0 text-[#00B86B]
                            "
                          >
                            <circle
                              cx="10"
                              cy="10"
                              r="7.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m6.5 10 2.2 2.2 4.8-5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>

                {/* Mobile: one image with content underneath */}
                <article
                  className="
                    mx-auto block w-full max-w-[460px]
                    overflow-hidden rounded-[8px]
                    border border-[#E5E7EB] bg-white
                    shadow-[0_2px_10px_rgba(0,0,0,0.05)]
                    min-[768px]:hidden
                  "
                >
                  <img
                    src={card.image}
                    alt={card.alt}
                    draggable="false"
                    loading={index === 0 ? "eager" : "lazy"}
                    className="
                      block aspect-square w-full
                      object-contain select-none
                    "
                  />

                  <div className="px-4 pb-5 pt-4 sm:px-5">
                    <span
                      className="
                        inline-flex rounded-full bg-[#EAF5FB]
                        px-2.5 py-1 text-[10px] leading-none
                        text-[#536A7F]
                      "
                    >
                      {card.tag}
                    </span>

                    <h3
                      className="
                        mt-3 text-[18px] font-normal
                        leading-[1.3] text-[#203047]
                      "
                    >
                      {card.title}
                    </h3>

                    <ul className="mt-4 flex flex-col gap-2">
                      {card.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="
                            flex items-start gap-2
                            text-[13px] leading-[1.4]
                            text-[#52677D]
                          "
                        >
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 20 20"
                            fill="none"
                            className="
                              mt-[1px] h-4 w-4
                              shrink-0 text-[#00B86B]
                            "
                          >
                            <circle
                              cx="10"
                              cy="10"
                              r="7.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m6.5 10 2.2 2.2 4.8-5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom divider */}
      <div aria-hidden="true" className="h-1 w-full bg-[#F0F0F0]" />
    </>
  );
}
function BusinessVerificationWhoUsesSection() {
  const industries = [
    {
      id: "lenders",
      icon: "lenders",
      title: "NBFCs and lenders",
      description:
        "Confirming a borrowing entity and its directors before disbursal.",
    },
    {
      id: "marketplaces",
      icon: "marketplaces",
      title: "Marketplaces and aggregators",
      description:
        "Onboarding of sellers and verification of their MSME status for scheme eligibility by marketplaces and aggregators.",
    },
    {
      id: "insurance",
      icon: "insurance",
      title: "Insurance companies verifying",
      description:
        "Corporate policyholders and their registered details.",
    },
    {
      id: "staffing",
      icon: "staffing",
      title: "Staffing and logistics companies",
      description:
        "Pre-contract vetting of vendor and partner companies by staffing and logistics companies.",
    },
    {
      id: "fintech",
      icon: "fintech",
      title: "Fintech platforms",
      description:
        "Conducting KYB and individual KYC in business account opening.",
    },
  ];

  return (
    <>
      <section
        aria-labelledby="business-verification-who-uses-heading"
        className="w-full bg-white"
      >
        {/* Thin grey divider before next section */}
      <div aria-hidden="true" className="h-3 w-full bg-[#F0F0F0]" />
        <div
          className="
            mx-auto w-[88%] max-w-[1520px]
            pb-10 pt-8
            sm:pb-12 sm:pt-10
            min-[1100px]:w-[80%]
            min-[1100px]:pb-[38px]
            min-[1100px]:pt-[38px]
          "
        >
          {/* Heading and description stacked vertically — Figma layout */}
<div className="flex w-full flex-col items-start">
  <h2
    id="business-verification-who-uses-heading"
    className="m-0 w-full max-w-[540px]"
  >
    <img
      src="/images/business-verification-who-uses-heading.png"
      alt="Who Uses Business Verification APIs?"
      draggable="false"
      className="block h-auto w-full"
    />
  </h2>

  <p
    className="
      mt-4 m-0 max-w-[540px]
      text-[13px] leading-[1.3] text-[#171717]
      sm:text-[14px]
      min-[1100px]:mt-[20px]
      min-[1100px]:max-w-[540px]
      min-[1100px]:text-[13px]
      min-[1100px]:leading-[1.3]
    "
  >
    Business Verification APIs work anywhere a company, vendor, or
    MSME needs to be checked before money or contracts change hands:
  </p>
</div>

          {/* Desktop: exact combined cards image + illustration */}
          <div
            className="
              mt-7 hidden
              min-[768px]:grid
              min-[768px]:grid-cols-2
              min-[768px]:items-stretch
              min-[768px]:gap-[22px]
              min-[1100px]:mt-[30px]
              min-[1100px]:gap-[22px]
            "
          >
            {/* Original Figma cards */}
            <div className="min-w-0 overflow-hidden">
              <img
                src="/images/business-verification-who-uses-cards.png"
                alt="Five industries using business verification APIs: NBFCs and lenders, marketplaces and aggregators, insurance companies, staffing and logistics companies, and fintech platforms"
                draggable="false"
                loading="lazy"
                className="block h-auto w-full"
              />
            </div>

            {/* Original Figma illustration */}
            <div className="min-w-0 overflow-hidden">
              <img
                src="/images/business-verification-who-uses-visual.png"
                alt="Business verification illustration showing company records, compliance checks and digital verification"
                draggable="false"
                loading="lazy"
                className="block h-auto w-full"
              />
            </div>
          </div>

          {/* Mobile: individual readable industry cards */}
          <div className="mt-6 flex flex-col gap-3 min-[768px]:hidden">
            {industries.map((industry) => (
              <article
                key={industry.id}
                className="
                  flex min-w-0 items-center gap-4
                  rounded-[9px] border border-[#D8D2FF]
                  bg-white px-4 py-4
                "
              >
                <BusinessVerificationAudienceIcon type={industry.icon} />

                <div className="min-w-0 flex-1">
                  <h3
                    className="
                      m-0 text-[15px] font-medium
                      leading-[1.3] text-[#101522]
                    "
                  >
                    {industry.title}
                  </h3>

                  <p className="mt-1.5 text-[12px] leading-[1.4] text-[#62748D]">
                    {industry.description}
                  </p>
                </div>
              </article>
            ))}

            {/* Illustration below the cards on mobile */}
            <img
              src="/images/business-verification-who-uses-visual.png"
              alt="Business verification and compliance illustration"
              draggable="false"
              loading="lazy"
              className="mt-2 block h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}
/* Small icons for the mobile cards */
function BusinessVerificationAudienceIcon({ type }) {
  const styles = {
    lenders: { color: "#63D2A5", bg: "#63D2A5" },
    marketplaces: { color: "#9471FF", bg: "#9471FF" },
    insurance: { color: "#FF8F9B", bg: "#FF8F9B" },
    staffing: { color: "#9CCCF5", bg: "#9CCCF5" },
    fintech: { color: "#8064FF", bg: "#8064FF" },
  };

  const color = styles[type]?.color || "#8064FF";

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 56 56"
      fill="none"
      className="h-10 w-10 shrink-0 sm:h-11 sm:w-11"
    >
      {type === "lenders" && (
        <>
          <rect x="9" y="6" width="31" height="40" rx="2" fill={color} />
          <path
            d="M14 14h21M14 19h21M14 24h21M14 30h14M14 35h14"
            stroke="white"
            strokeWidth="1.4"
          />
          <path
            d="M11 12 24 6l13 6M15 13v13M21 13v13M27 13v13M33 13v13"
            stroke="white"
            strokeWidth="1.2"
          />
          <rect x="30" y="30" width="19" height="19" rx="4" fill={color} stroke="white" strokeWidth="1.5" />
          <rect x="36" y="37" width="7" height="6" rx="1" stroke="white" strokeWidth="1.3" />
          <path d="M37 37v-2a2 2 0 0 1 4 0v2" stroke="white" strokeWidth="1.3" />
        </>
      )}

      {type === "marketplaces" && (
        <>
          <path
            d="M8 8h5l5 25h23l6-18H16"
            stroke={color}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M20 22h23M22 28h19" stroke={color} strokeWidth="1.5" />
          <circle cx="23" cy="40" r="3" fill={color} />
          <circle cx="39" cy="40" r="3" fill={color} />
          <path d="M12 48h34" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        </>
      )}

      {type === "insurance" && (
        <>
          <rect x="13" y="8" width="29" height="42" rx="2" fill={color} />
          <rect x="19" y="4" width="17" height="5" rx="1" fill={color} />
          <rect x="18" y="15" width="18" height="9" rx="1" stroke="white" strokeWidth="1.3" />
          <circle cx="27" cy="18" r="2" stroke="white" strokeWidth="1.2" />
          <path d="M21 23c0-2 2-3 6-3s6 1 6 3M18 29h19M18 34h19M18 39h13M18 44h13" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
          <circle cx="43" cy="20" r="9" fill={color} stroke="white" strokeWidth="1.3" />
          <path d="m39 20 3 3 5-6" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}

      {type === "staffing" && (
        <>
          <path d="M28 3 48 10v15c0 12-8 20-20 27C16 45 8 37 8 25V10z" fill={color} />
          <path d="m19 27 7 7 13-15" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}

      {type === "fintech" && (
        <>
          <path d="m8 17 20-11 20 11z" fill={color} />
          <path d="M10 21h36M10 40h36M7 46h42M11 50h34" stroke={color} strokeWidth="3" strokeLinecap="round" />
          <path d="M15 22v17M23 22v17M33 22v17M41 22v17" stroke={color} strokeWidth="4" />
          <circle cx="28" cy="13" r="3" fill="white" />
        </>
      )}
    </svg>
  );
}
function BusinessVerificationIntegrationSection() {
  return (
    <>
      {/* Thin grey divider between sections */}
      <div aria-hidden="true" className="h-3 w-full bg-[#F0F0F0]" />

      <section
        aria-labelledby="business-verification-integration-heading"
        className="w-full overflow-hidden bg-white"
      >
        <div
          className="
            mx-auto grid w-[80%] max-w-[1520px]
            grid-cols-1 gap-8
            pb-10 pt-10
            sm:pb-12 sm:pt-12
            min-[1100px]:min-h-[512px]
            min-[1100px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]
            min-[1100px]:items-start
            min-[1100px]:gap-x-[6.8%]
            min-[1100px]:pb-0
            min-[1100px]:pt-[9px]
          "
        >
          {/* Left content */}
          <div
            className="
              flex min-w-0 flex-col items-start
              min-[1100px]:pt-[89px]
            "
          >
            {/* Figma heading image */}
            <h2
              id="business-verification-integration-heading"
              className="
                m-0 w-full max-w-[450px]
                min-[1100px]:w-[390px]
              "
            >
              <img
                src="/images/business-verification-integration-heading.png"
                alt="How our Integration Works"
                draggable="false"
                className="block h-auto w-full"
              />
            </h2>

            {/* Exact description from Figma */}
            <p
              className="
                m-0 mt-6 max-w-[450px]
                text-[13px] leading-[1.23] text-[#383838]
                sm:text-[14px] sm:leading-[1.3]
                min-[1100px]:mt-[26px]
                min-[1100px]:w-full
                min-[1100px]:max-w-[420px]
                min-[1100px]:text-[13px]
                min-[1100px]:leading-[1.23]
              "
            >
              Most businesses don’t run BAV in a silo; it's one of the many
              checks run in addition to PAN verification, Aadhaar-based KYC,
              or GST validation as part of an overall onboarding or payout
              pipeline. A lending platform might combine PAN verification,
              income document OCR, and BAV V2 IMPS Penny Drop into a single
              onboarding flow, so a borrower’s identity and payout account
              are verified before the loan is approved, for example.
            </p>

            {/* Reuse existing Know More styling */}
            <a
              href="#business-verification-integration-details"
              className="
                solutions-know-more mt-7 inline-flex
                min-[1100px]:mt-[48px]
              "
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

          {/* Right illustration */}
          <div
            className="
              w-full min-w-0
              min-[1100px]:pt-0
            "
          >
            <img
              src="/images/business-verification-integration-visual.png"
              alt="Business verification integration illustration showing servers, a security key, a verified document, cloud infrastructure and a security shield"
              draggable="false"
              loading="lazy"
              className="
                mx-auto block h-auto w-full
                max-w-[748px] rounded-[12px]
                object-contain
              "
            />
          </div>
        </div>
      </section>
    </>
  );
}
function BusinessVerificationGetStartedSection() {
  return (
    <section className="w-full bg-white px-4 pb-8 pt-3 sm:pb-10 min-[1100px]:px-0 min-[1100px]:py-[40px]">
      {/* Grey divider */}
      <div
        aria-hidden="true"
        className="mb-6 h-3 w-full bg-[#F0F0F0] min-[1100px]:mb-8"
      />

      {/* Centred CTA card */}
      <div
        className="
          relative isolate mx-auto
          w-full max-w-[1520px]
          overflow-hidden rounded-[10px]
          bg-[linear-gradient(105deg,#6545ff_0%,#8b70ff_48%,#6847ff_100%)]
          min-[1100px]:w-[80%]
          min-[1100px]:aspect-[1520/340]
          min-[1100px]:min-h-[0px]
        "
      >
        {/* Original Figma artwork — desktop only */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0 z-0
            hidden min-[1100px]:block
          "
        >
          <img
            src="/images/business-verification-get-started-visual.png"
            alt=""
            draggable="false"
            className="absolute inset-0 h-[108%] w-full object-fill"
          />
        </div>

        {/* Text content */}
        <div
          className="
            relative z-10 flex w-full flex-col items-start
            px-6 py-8
            sm:px-8 sm:py-10
            min-[1100px]:absolute
            min-[1100px]:inset-0
            min-[1100px]:justify-center
            min-[1100px]:px-[4.1%]
            min-[1100px]:py-6
            min-[1100px]:pt-[12px]
            min-[1100px]:pb-[45px]
          "
        >
          <div className="w-full min-[1100px]:w-[92%]">
            {/* Heading */}
            <h2
              className="mt-4
                m-0 w-full max-w-[450px]
                min-[1100px]:w-[50%]
                min-[1100px]:max-w-none
              "
            >
              <img
                src="/images/business-verification-get-started-heading.png"
                alt="Start Verifying Businesses Smarter"
                draggable="false"
                className="block h-auto w-full"
              />
            </h2>

            {/* Manually written description */}
            <p
              className="
                mt-3 max-w-[650px]
                text-[14px] leading-[1.4] text-white
                sm:mt-3 sm:text-[14px]
                min-[1100px]:mt-[clamp(8px,1vw,16px)]
                min-[1100px]:w-[60%]
                min-[1100px]:max-w-none
                min-[1100px]:text-[clamp(13px,0.9vw,17px)]
                min-[1100px]:leading-[1.25]
              "
            >
              Checking a company by hand means chasing documents,
              cross-referencing government portals, and hoping nothing was
              missed. SmartVerify's Business Verification (KYB) APIs replace
              that with a single integration covering CIN, PAN, DIN, TAN,
              FSSAI, IEC Code, and Udyam checks so the team can onboard real
              businesses and flag fake ones before either becomes a problem.
              Explore the full API documentation and sandbox to start testing
              today.
            </p>

            {/* Existing animated Book a Demo CTA */}
            <CtaImageButton
              href="#contact"
              label="Book a Demo"
              image="/images/book-demo.png"
              hoverText="Book a Demo"
              variant="demo"
              showArrow
              className="mt-2 w-[180px] shrink-0 sm:w-[195px] min-[900px]:mt-[10px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function BusinessVerificationFaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What's the difference between KYC and KYB?",
      answer:
        "KYC verifies an individual's identity with PAN, Aadhaar, and passport. KYB verifies a business entity's registration, directors, and licences. Most B2B platforms run both together during onboarding.",
    },
    {
      question: "Can I verify a company if I only have its name?",
      answer:
        "Yes. The Company Name to CIN and Company Name to PAN APIs look up registration and tax details from a business name alone.",
    },
    {
      question: "How does Udyam verification differ from CIN verification?",
      answer:
        "CIN applies to registered companies under the Companies Act. Udyam applies specifically to micro, small, and medium enterprises (MSMEs) registered under the Udyam scheme with a separate registration entirely.",
    },
    {
      question: "Do I need OTP consent for every Udyam check?",
      answer:
        "Only for the advanced scheme with mobile-linked APIs. Udyam Basic Validation works without OTP; Udyam Advanced Validation and the mobile-linked APIs use OTP to confirm consent before releasing additional data.",
    },
    {
      question: "How long does it take to integrate these APIs?",
      answer:
        "Most teams go from sandbox testing to production within a few days, since each API follows the same REST and JSON pattern across the suite.",
    },
  ];

  return (
    <section
      aria-labelledby="business-verification-faq-heading"
      className="
        relative w-full overflow-hidden
        bg-[radial-gradient(ellipse_at_50%_48%,rgba(151,126,255,0.95)_0%,rgba(128,100,255,0.65)_37%,rgba(96,63,255,0)_72%),linear-gradient(110deg,#6042ff_0%,#6042ff_100%)]
      "
    >
      <div
        className="
          mx-auto grid w-[84%] max-w-[1520px]
          grid-cols-1 gap-8
          py-10
          sm:gap-10 sm:py-14
          min-[900px]:min-h-0
          min-[900px]:w-[76%]
          min-[900px]:grid-cols-[minmax(0,0.72fr)_minmax(0,1.15fr)]
          min-[900px]:items-start
          min-[900px]:gap-x-[6vw]
          min-[900px]:py-[109px]
          min-[1200px]:gap-x-[8.5vw]
        "
      >
        {/* Left: FAQ heading */}
        <h2
          id="business-verification-faq-heading"
          className="
            m-0 max-w-[480px]
            text-[36px] font-semibold leading-[1.15]
            tracking-[-0.035em] text-white
            sm:text-[44px]
            min-[900px]:text-[clamp(40px,2.8vw,54px)]
          "
        >
          Frequently Asked
          <br />
          Questions
        </h2>

        {/* Right: FAQ accordion */}
        <div className="flex min-w-0 flex-col gap-2 min-[880px]:gap-[10px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `business-verification-faq-answer-${index}`;

            return (
              <div
                key={faq.question}
                className="min-w-0 rounded-[4px] border border-white/85"
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
                    px-4 py-3 text-left
                    text-[15px] font-normal leading-[1.4]
                    text-white transition-colors duration-200
                    hover:bg-white/[0.08]
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-white
                    sm:min-h-[66px] sm:py-3
                    min-[900px]:min-h-[66px]
                    min-[900px]:px-[20px]
                    min-[900px]:py-4
                    min-[900px]:text-[clamp(16px,1.05vw,20px)]
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
                      text-[14px] leading-[1.6]
                      text-white/90
                      sm:px-5
                      min-[900px]:px-[24px]
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
function BusinessVerificationPage() {
  return (
    <main className="w-full">
      <BusinessVerificationHero />
      <BusinessVerificationMattersSection />
      <BusinessVerificationApisHowItWorksSection />
      <BusinessVerificationWhoUsesSection />
      <BusinessVerificationIntegrationSection />
      <BusinessVerificationGetStartedSection />
      <BusinessVerificationFaqSection />
      <FooterSection />
    </main>
  );
}

export default BusinessVerificationPage;