import { useState } from "react";
import CtaImageButton from "../../components/shared/CtaImageButton.jsx";
import FooterSection from "../../sections/FooterSection.jsx";
function EmployeeIncomeVerificationHero() {
  return (
    <section
      id="employee-income-verification-hero"
      aria-labelledby="employee-income-verification-heading"
      className="
        relative isolate w-full overflow-hidden bg-white
        min-[1100px]:h-[min(42.4vw,809px)]
        min-[1100px]:min-h-[640px]
      "
    >
      {/* Reuse the original pink-purple background */}
      <img
        src="/images/esign-hero-background.png"
        alt=""
        aria-hidden="true"
        draggable="false"
        className="
          pointer-events-none absolute inset-0 z-0
          h-full w-full object-fill
        "
      />

      {/* Desktop illustration: shown only once */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-0
          hidden min-[1100px]:block
        "
      >
        <img
          src="/images/employee-income-verification-visual.png"
          alt=""
          draggable="false"
          className="mt-16
            absolute right-[10%]
            top-[clamp(24px,3.5vw,68px)]
            block h-auto w-[min(42vw,800px)]
            max-w-none object-contain
          "
        />
      </div>

      {/* Main content */}
      <div
        className="
          relative z-10 mx-auto flex w-[80%] max-w-[1520px]
          flex-col items-start
          pb-10 pt-[100px]
          sm:pb-12 sm:pt-[110px]
          min-[1100px]:h-full
          min-[1100px]:justify-center
          min-[1100px]:pb-0
          min-[1100px]:pt-0
        "
      >
        <div
          className="
            w-full max-w-[700px]
            min-[1100px]:w-[44vw]
            min-[1100px]:max-w-[820px]
          "
        >
          {/* Exact Figma heading image */}
          <h1
            id="employee-income-verification-heading"
            className="m-0 w-full max-w-[793px]"
          >
            <img
              src="/images/employee-income-verification-heading.png"
              alt="Employee & Income Verification APIs for Faster Hiring"
              draggable="false"
              className="block h-auto w-full"
            />
          </h1>

          {/* Description from the Figma design */}
          <p
            className="
              m-0 mt-5 max-w-[680px]
              text-[13px] leading-[1.35] text-[#414141]
              sm:mt-6 sm:text-[14px]
              min-[1100px]:mt-[28px]
              min-[1100px]:w-[min(36vw,680px)]
              min-[1100px]:max-w-[680px]
              min-[1100px]:text-[clamp(12px,0.72vw,14px)]
              min-[1100px]:leading-[1.25]
            "
          >
            SmartVerify's Employee &amp; Income Verification APIs replace
            estimation with data pulled directly from UAN records, EPFO
            contribution history, and TDS filings. Businesses get a job
            history and income picture in a short time, and they get it
            without leaning on the candidate or applicant to hand over
            anything more.
          </p>

          {/* Reuse the existing CTA buttons */}
          <div
            className="
              mt-6 flex w-full flex-col
              items-center justify-center gap-3
              sm:flex-row sm:flex-wrap sm:justify-start sm:gap-4
              min-[1100px]:mt-[36px]
              min-[1100px]:w-fit
              min-[1100px]:flex-nowrap
              min-[1100px]:gap-[24px]
            "
          >
            <CtaImageButton
              href="#documentation"
              label="View Documentation"
              image="/images/view-documentation.png"
              hoverText="View Documentation"
              variant="docs"
              className="
                w-[220px] shrink-0
                sm:w-[220px]
                min-[1100px]:w-[min(21vw,300px)]
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
                w-[200px] shrink-0
                sm:w-[200px]
                min-[1100px]:w-[min(18.3vw,261px)]
              "
            />
          </div>
        </div>

        {/* Mobile illustration: shown once below the buttons */}
        <div className="mt-8 w-full min-[1100px]:hidden">
          <img
            src="/images/employee-income-verification-visual.png"
            alt="Employee verification interface showing bank, payroll, and HMRC checks alongside a man using a laptop"
            draggable="false"
            loading="eager"
            className="
              mx-auto block h-auto w-full
              max-w-[620px] object-contain
            "
          />
        </div>
      </div>
    </section>
  );
}
function EmployeeIncomeManualChecksSection() {
  const cards = [
    {
      id: "hr-verification",
      icon: "person",
      title: "Slow HR Verification",
      description:
        "Phone calls and unanswered emails can delay employment checks for days.",
    },
    {
      id: "income-proof",
      icon: "income",
      title: "Easy-to-edit income proof",
      description:
        "Payslips and documents can be manipulated, making fraud harder to detect.",
    },
    {
      id: "loan-disbursal",
      icon: "wallet",
      title: "Delayed loan disbursals",
      description:
        "Verification bottlenecks slow down lending decisions and customer onboarding.",
    },
    {
      id: "lost-candidates",
      icon: "search",
      title: "Lost candidates",
      description:
        "Staffing agencies risk losing candidates to competitors with faster hiring processes.",
    },
    {
      id: "income-verification",
      icon: "document",
      title: "Incomplete income verification",
      description:
        "Payslips and bank statements don't confirm where someone actually works.",
    },
    {
      id: "trusted-records",
      icon: "people",
      title: "Need for trusted records",
      description:
        "Businesses need reliable employment and income data that applicants cannot alter.",
    },
  ];

  return (
    <>
      <section
        aria-labelledby="employee-income-manual-checks-heading"
        className="relative isolate w-full overflow-hidden bg-white"
      >
        {/* Exact Figma background */}
        <img
          src="/images/employee-income-manual-checks-background.png"
          alt=""
          aria-hidden="true"
          draggable="false"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-fill"
        />

        <div className="relative z-10 w-full">
          {/* Heading and description */}
          <header
            className="
              mx-auto w-[80%] max-w-[1520px]
              pt-8 sm:pt-10
              min-[1100px]:pt-[36px]
            "
          >
            <h2
              id="employee-income-manual-checks-heading"
              className="
                m-0 w-full max-w-[754px]
                min-[768px]:w-[min(42vw,754px)]
              "
            >
              <img
                src="/images/employee-income-manual-checks-heading.png"
                alt="Why Manual Employment Checks Slow Everyone Down"
                draggable="false"
                className="block h-auto w-full"
              />
            </h2>

            <p
              className="
                m-0 mt-3 max-w-[800px]
                text-[15px] leading-[1.4] text-[#555555]
                sm:text-[14px]
                min-[1100px]:mt-[14px]
                min-[1100px]:text-[13px]
              "
            >
              Manual verification creates delays, fraud risks, and missed
              opportunities.
            </p>
          </header>

          {/* Desktop: original Figma six-card composition */}
          <div className="mt-5 w-full sm:mt-6 min-[768px]:mt-[28px]">
            <img
              src="/images/employee-income-manual-checks-cards.png"
              alt="Six employment verification challenges: Slow HR Verification, Easy-to-edit income proof, Delayed loan disbursals, Lost candidates, Incomplete income verification, and Need for trusted records."
              draggable="false"
              loading="lazy"
              className="mx-auto hidden! h-auto w-full max-w-[1920px] min-[768px]:block!"
            />
          </div>

          {/* Mobile: readable individual cards */}
          <div
            className="
              mx-auto mt-6 grid w-[80%] max-w-[560px]
              grid-cols-1 gap-0 pb-8
              min-[768px]:hidden
            "
          >
            {cards.map((card, index) => (
              <article
                key={card.id}
                className={`
                  min-w-0 border border-[#BEBEBE] bg-white
                  px-5 py-5
                  ${index > 0 ? "border-t-0" : ""}
                `}
              >
                <EmployeeManualCheckIcon type={card.icon} />

                <h3 className="mb-0 mt-4 text-[17px] font-normal leading-[1.3] text-[#444444]">
                  {card.title}
                </h3>

                <p className="mb-0 mt-3 text-[14px] leading-[1.4] text-[#555555]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* Small purple icons used by the mobile cards */
function EmployeeManualCheckIcon({ type }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className="block h-9 w-9 text-[#5140D8]"
    >
      {type === "person" && (
        <>
          <circle cx="17" cy="11" r="6" fill="currentColor" />
          <path
            d="M5 31c0-7 5-12 12-12s12 5 12 12v2H5z"
            fill="currentColor"
          />
          <circle cx="30" cy="28" r="8" fill="currentColor" />
          <path
            d="m26 28 3 3 5-6"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}

      {type === "income" && (
        <>
          <path
            d="M7 7h19l7 7H14z"
            fill="currentColor"
          />
          <ellipse cx="20" cy="18" rx="11" ry="4" fill="currentColor" />
          <path
            d="M9 18v12c0 3 22 3 22 0V18"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path d="M11 23c5 4 13 4 18 0" stroke="white" strokeWidth="1.5" />
        </>
      )}

      {type === "wallet" && (
        <>
          <path
            d="M5 11 29 5l5 7-25 7z"
            fill="currentColor"
          />
          <rect x="5" y="13" width="30" height="22" rx="3" fill="currentColor" />
          <path d="M25 19h10v9H25a4 4 0 0 1 0-9z" fill="white" />
          <circle cx="28" cy="23.5" r="1.5" fill="currentColor" />
        </>
      )}

      {type === "search" && (
        <>
          <circle cx="15" cy="13" r="7" fill="currentColor" />
          <path
            d="M4 31c0-7 4-11 11-11 4 0 7 2 9 5"
            fill="currentColor"
          />
          <circle cx="25" cy="24" r="8" stroke="currentColor" strokeWidth="3" />
          <path d="m31 30 5 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M29 9h7M29 14h7M29 19h4" stroke="currentColor" strokeWidth="2" />
        </>
      )}

      {type === "document" && (
        <>
          <path d="M8 3h19l7 7v27H8z" fill="currentColor" />
          <path d="M27 3v8h7" stroke="white" strokeWidth="2" />
          <path d="M13 17h15M13 22h15M13 27h10" stroke="white" strokeWidth="2" />
          <circle cx="29" cy="31" r="7" fill="#5140D8" />
          <path d="m26 31 2 2 4-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}

      {type === "people" && (
        <>
          <circle cx="11" cy="10" r="4" fill="currentColor" />
          <circle cx="29" cy="10" r="4" fill="currentColor" />
          <circle cx="20" cy="7" r="4" fill="currentColor" />
          <path
            d="M3 22c0-5 4-8 8-8 3 0 5 1 7 4M37 22c0-5-4-8-8-8-3 0-5 1-7 4"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="m12 25 8 8 8-8M16 22l4 4 4-4"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}
function EmployeeIncomeVerificationHowWorksSection() {
  function EmployeeIncomeWorksIcon({ type }) {
  const icons = {
    records: "/images/employee-income-works-icon-1.png",
    income: "/images/employee-income-works-icon-2.png",
    results: "/images/employee-income-works-icon-3.png",
    testing: "/images/employee-income-works-icon-4.png",
  };

  return (
    <img
      src={icons[type]}
      alt=""
      aria-hidden="true"
      draggable="false"
      className="block h-full w-full object-contain object-left"
    />
  );
}
  const cards = [
  {
    id: "employment-records",
    icon: "records",
    title: "Fetch employment records",
    description:
      "Access UAN/EPFO records to verify employer details, joining and exit dates, and PF contribution history.",
  },
  {
    id: "income-data",
    icon: "income",
    title: "Verify income data",
    description:
      "Use employer-submitted TDS filings to retrieve available quarterly income information.",
  },
  {
    id: "structured-results",
    icon: "results",
    title: "Get structured results",
    description:
      "Receive clean, machine-readable JSON that can plug directly into lending, onboarding, and HR workflows.",
  },
  {
    id: "test-integration",
    icon: "testing",
    title: "Test before going live",
    description:
      "Use sandbox access to test the integration before connecting to live traffic.",
  },
];
  return (
    <>
      <section
        aria-labelledby="employee-income-works-heading"
        className="w-full overflow-hidden bg-white"
      >
      {/* Thin grey separator after the section */}
      <div aria-hidden="true" className="h-3 w-full bg-[#F0F0F0]" />
        <div
          className="
            mx-auto w-[80%] max-w-[1520px]
            pb-8 pt-8
            sm:pb-10 sm:pt-10
            min-[1100px]:pb-[38px]
            min-[1100px]:pt-[14px]
          "
        >
          {/* Heading left, description right */}
          <header
            className="
              grid grid-cols-1 items-start gap-4
              min-[768px]:grid-cols-[minmax(0,1fr)_minmax(0,0.4fr)]
              min-[768px]:gap-x-[5%]
            "
          >
            <h2
              id="employee-income-works-heading"
              className="
                m-0 w-full max-w-[751px]
                min-[768px]:w-[min(43vw,751px)]
              "
            >
              <img
                src="/images/employee-income-works-heading.png"
                alt="How Our Employee & Income Verification Works"
                draggable="false"
                className="block h-auto w-full"
              />
            </h2>

            <p
              className="
                m-0 w-full max-w-[420px]
                text-[12px] leading-[1.35] text-[#555555]
                sm:text-[13px]
                min-[768px]:ml-auto
                min-[1100px]:max-w-[420px]
                min-[1100px]:pt-[2px]
                min-[1100px]:text-[13px]
                min-[1100px]:leading-[1.3]
              "
            >
              Verify employment and income using trusted records with fast,
              integration-ready results.
            </p>
          </header>
{/* Four cards aligned in one row on desktop */}
<div className="employee-income-works-grid">
  {cards.map((card) => (
    <article
      key={card.id}
      className="employee-income-works-card"
    >
      <div className="mb-5 h-10 w-10 text-[#5140D8]">
        <EmployeeIncomeWorksIcon type={card.icon} />
      </div>

      <h3
        className="
          m-0 text-[17px] font-normal
          leading-[1.3] text-[#4B4B4B]
          min-[1100px]:text-[clamp(17px,1.15vw,23px)]
        "
      >
        {card.title}
      </h3>

      <p
        className="
          m-0 mt-4 max-w-[340px]
          text-[14px] leading-[1.35] text-[#5A5A5A]
          min-[1100px]:mt-[18px]
          min-[1100px]:text-[clamp(13px,0.85vw,17px)]
        "
      >
        {card.description}
      </p>
    </article>
  ))}
</div>
        </div>
      </section>
    </>
  );
}


function EmployeeIncomeApiStackSection() {
  const cards = [
    {
      id: "find-uan",
      image: "/images/employee-income-find-uan.png",
      alt: "Find UAN dashboard",
      eyebrow: "Find UAN",
      title: "Mobile to UAN Check",
      features: [
        "Find UAN using a registered mobile number",
        "Useful when the applicant doesn't know their UAN",
        "Creates the starting point for deeper verification",
      ],
    },
    {
      id: "uan-basic",
      image: "/images/employee-income-uan-basic.png",
      alt: "UAN Basic V3 and V4 dashboard",
      eyebrow: "Verify Basic Employment",
      title: "UAN Basic V3 / V4",
      features: [
        "Confirm whether an active UAN exists",
        "Retrieve basic employer information",
        "Quickly validate an applicant's employment record",
      ],
    },
    {
      id: "uan-advanced",
      image: "/images/employee-income-uan-advanced.png",
      alt: "UAN Advanced V3 and V4 dashboard",
      eyebrow: " Verify Employment History",
      title: "UAN Advanced V3 / V4",
      features: [
        "Complete Employment History — Access full employment history with joining and exit dates",
        "Employer Details — Get detailed information about employers and establishments",
        "PF Contribution — View PF contribution history and amounts",
      ],
    },
    {
      id: "tds-quarterly",
      image: "/images/employee-income-tds-quarterly.png",
      alt: "TDS Quarterly API dashboard",
      eyebrow: "Validate Income",
      title: "TDS Quarterly API",
      features: [
        "Verify Income — Verify income through employer-filed TDS returns",
        "Quarterly Information — Get quarterly income information",
      ],
    },
    {
      id: "combined-verification",
      image: "/images/employee-income-uan-tds.png",
      alt: "Combined UAN and TDS verification dashboard",
      eyebrow: "Build a Complete Profile ",
      title: "Combine UAN + TDS Verification",
      features: [
        "Connect Employment & Income — UAN data validates employment while TDS confirms declared income",
        "Complete Applicant Profile — Get a 360° view of employment history and income credibility",
      ],
    },
  ];

  return (
    <section
      aria-labelledby="employee-income-api-stack-heading"
      className="relative w-full overflow-clip bg-white"
    >
      {/* Thin grey separator */}
      <div
        aria-hidden="true"
        className="h-3 w-full bg-[#F0F0F0]"
      />

      {/* Heading and description */}
      <header
        className="
          mx-auto grid w-[80%] max-w-[1520px]
          grid-cols-1 items-start gap-5
          pt-8 sm:pt-10
          min-[768px]:grid-cols-[minmax(0,1fr)_minmax(300px,0.58fr)]
          min-[768px]:gap-x-[5%]
          min-[1100px]:pt-[42px]
        "
      >
        <h2
          id="employee-income-api-stack-heading"
          className="
            m-0 w-full max-w-[760px]
            font-normal text-[#505050]
            text-[clamp(36px,3.2vw,58px)]
            leading-[1.08] tracking-[-0.035em]
          "
        >
          Our APIs Behind Employee &amp;
          <br />
          Income Verification
        </h2>

        <p
          className="
            m-0 max-w-[440px]
            font-normal text-[#555555]
            text-[14px] leading-[1.35]
            sm:text-[16px]
            min-[768px]:ml-auto
            min-[1100px]:pt-[2px]
            min-[1100px]:text-[20px]
            min-[1100px]:leading-[1.25]
          "
        >
          A complete verification flow, from finding the employee
          record to validating income.
        </p>
      </header>

      {/* Sticky image-card sequence — animation preserved */}
      <div
        className="
          relative mx-auto mt-6 flex w-full
          flex-col items-center gap-6 pb-6
          sm:mt-8 sm:gap-7
          min-[1100px]:mt-[60px]
          min-[1100px]:gap-8
          min-[1100px]:pb-[15vh]
        "
      >
        {cards.map((card, index) => (
          <article
            key={card.id}
            style={{ zIndex: index + 1 }}
            className="
              relative mx-auto flex w-[94%] max-w-[1055px]
              flex-col overflow-hidden rounded-[18px]
              border border-[#E8EDF5] bg-white
              shadow-[0_8px_30px_rgba(35,55,100,0.05)]
              min-[768px]:flex-row
              min-[1100px]:sticky
              min-[1100px]:top-[clamp(72px,9vh,100px)]
              min-[1100px]:w-[min(78vw,1200px)]
            "
          >
            {/* Left: Original dashboard image */}
            <div
              className="
                flex w-full shrink-0 items-center justify-center
                bg-[#F7F9FD] p-3
                min-[768px]:w-[48%]
                min-[768px]:p-4
              "
            >
              <img
                src={card.image}
                alt={card.alt}
                draggable="false"
                loading={index === 0 ? "eager" : "lazy"}
                className="
                  block h-auto w-full
                  rounded-[12px]
                  select-none object-contain
                "
              />
            </div>

            {/* Right: Figma-style content */}
            <div
              className="
                flex min-w-0 flex-1 flex-col
                justify-center
                px-6 py-7
                sm:px-8 sm:py-9
                min-[1100px]:px-10
                min-[1100px]:py-12
              "
            >
              {/* Light-blue category label */}
              <span
                className="
                  mb-3 inline-flex w-fit
                  items-center rounded-full
                  bg-[#EAF3FA]
                  px-3 py-[5px]
                  text-[11px] font-normal
                  leading-none text-[#58738C]
                  sm:text-[12px]
                "
              >
                {card.eyebrow}
              </span>

              {/* Main heading */}
              <h3
                className="
                  m-0 text-[23px] font-normal
                  leading-[1.25] tracking-[-0.02em]
                  text-[#25364B]
                  sm:text-[26px]
                  min-[1100px]:text-[25px]
                "
              >
                {card.title}
              </h3>

              {/* Green checkmark feature list */}
              <div
                className="
                  mt-7 flex flex-col gap-4
                  min-[1100px]:mt-8
                "
              >
                {card.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start gap-3"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="
                        mt-[2px] h-[15px] w-[15px]
                        shrink-0 text-[#00AD70]
                      "
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                      <path
                        d="m8 12 2.6 2.6L16.5 9"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <p
                      className="
                        m-0 min-w-0
                        text-[14px] leading-[1.6]
                        font-normal text-[#536A83]
                        sm:text-[15px]
                        min-[1100px]:text-[16px]
                      "
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


function EmployeeIncomeAudienceSection() {
  return (
    <section
      aria-labelledby="employee-income-audience-heading"
      className="w-full border-t-[5px] border-[#F0F0F0] bg-white"
    >
      {/* Thin grey separator */}
      <div
        aria-hidden="true"
        className="h-3 w-full bg-[#F0F0F0]"
      />
      <div
        className="
          mx-auto w-[80%] max-w-[1200px]
          py-8 sm:py-10
          min-[1100px]:py-[42px]
        "
      >
        
{/* Heading and description — Figma layout */}
<header className="max-w-[650px]">
  <h2
    id="employee-income-audience-heading"
    className="
      m-0
      font-normal
      text-[#555555]
      text-[32px]
      leading-[1.15]
      tracking-[-0.035em]
      min-[1100px]:text-[42px]
    "
  >
    Who Actually Uses These APIs
  </h2>

  <p
    className="
      mb-0
      mt-[30px]
      max-w-[680px]
      font-normal
      text-[13px]
      leading-[1.3]
      text-[#333333]
    "
  >
    Business Verification APIs work anywhere a company, vendor, or MSME needs to be
    checked before money or contracts change hands:
  </p>
</header>
        {/* Audience cards and illustration */}
        <div
          className="
            mt-6 grid grid-cols-1 items-stretch gap-5
            sm:mt-7
            min-[768px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
            min-[768px]:gap-[2%]
            min-[1100px]:mt-[24px]
          "
        >
          {/* Exact Figma audience cards */}
          <div className="flex min-w-0 items-center">
            <img
              src="/images/employee-income-who-uses-cards.png"
              alt="Lenders and NBFCs: Verify income and employment before loan approval. Staffing and Recruitment: Confirm candidate employment history faster. Banks and Card Issuers: Validate income beyond applicant-provided payslips. Gig and Logistics Platforms: Verify worker employment during onboarding. Insurance Providers: Validate employment and income for applications and claims."
              draggable="false"
              loading="lazy"
              className="block h-auto w-full select-none"
            />
          </div>

          {/* Figma verification illustration */}
          <div className="flex min-w-0 items-center justify-center">
            <img
              src="/images/gst-verification-who-uses-visual.png"
              alt="3D illustration of a digital verification document with security checks and verification symbols."
              draggable="false"
              loading="lazy"
              className="
                block h-auto w-full
                select-none object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function EmployeeIncomeBenefitsSection() {
  const benefits = [
    {
      id: "faster-onboarding",
      icon: "/images/employee-income-benefit-icon-1.png",
      title: "Faster onboarding",
      description:
        "Results return in seconds, so hiring and loan decisions don't stall on a callback that may never come.",
    },
    {
      id: "fewer-forged-documents",
      icon: "/images/employee-income-benefit-icon-2.png",
      title: "Fewer forged documents",
      description:
        "Data comes from EPFO and tax records, not files an applicant can edit.",
    },
    {
      id: "less-manual-work",
      icon: "/images/employee-income-benefit-icon-3.png",
      title: "Less manual work",
      description:
        "No chasing reference numbers or waiting on another company's HR desk.",
    },
    {
      id: "cleaner-audit-trails",
      icon: "/images/employee-income-benefit-icon-4.png",
      title: "Cleaner audit trails",
      description:
        "structured JSON responses are easy to log and reference if a decision gets questioned later.",
    },
  ];

  return (
    <section
      aria-labelledby="employee-income-benefits-heading"
      className="w-full border-t-[5px] border-[#F0F0F0] bg-white"
    >
      <div aria-hidden="true" className="h-3 w-full bg-[#F0F0F0]" />

      <div
        className="
          mx-auto w-[80%] max-w-[1200px]
          py-8 sm:py-10
          min-[1100px]:py-[48px]
        "
      >
        {/* Figma heading */}
        <header className="max-w-[650px]">
          <h2
            id="employee-income-benefits-heading"
           className="
      m-0
      font-normal
      text-[#555555]
      text-[32px]
      leading-[1.15]
      tracking-[-0.035em]
      min-[1100px]:text-[42px]
    "
          >
            Benefits of Employee &amp;
            <br />
            Income Verification APIs
          </h2>

          <p
            className="
      mb-0
      mt-[30px]
      max-w-[680px]
      font-normal
      text-[15px]
      leading-[1.3]
      text-[#333333]
    "
          >
            Every API in this set returns a straightforward benefit, not just a data field
          </p>
        </header>

        {/* Four cards — guaranteed single row on desktop */}
        <div
          className="
            mt-8 flex w-full flex-col
            min-[1100px]:mt-[42px]
            min-[1100px]:flex-row
            min-[1100px]:items-start
          "
        >
          {benefits.map((benefit, index) => (
            <article
              key={benefit.id}
              className={`
                relative min-w-0
                py-5
                min-[1100px]:w-1/4
                min-[1100px]:flex-none
                min-[1100px]:px-[24px]
                min-[1100px]:py-0
                ${
                  index === 0
                    ? "min-[1100px]:pl-0"
                    : "border-t border-[#D6D6D6] min-[1100px]:border-l min-[1100px]:border-t-0"
                }
              `}
            >
              <img
                src={benefit.icon}
                alt=""
                aria-hidden="true"
                draggable="false"
                className="
                  mb-5 block h-[40px] w-[48px]
                  select-none object-contain object-left
                  min-[1100px]:mb-[20px]
                "
              />

              <h3
                className="
                  m-0 text-[14px] font-normal
                  leading-[1.3] tracking-[-0.02em]
                  text-[#202638]
                "
              >
                {benefit.title}
              </h3>

              <p
                className="
                  mb-0 mt-5 max-w-[230px]
                  text-[11px] font-normal
                  leading-[1.3] text-[#71829E]
                  sm:text-[12px]
                  min-[1100px]:mt-[22px]
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
function EmployeeIncomeVerificationCta() {
  return (
    <section className="w-full bg-white px-4 pb-8 pt-3 sm:pb-10 sm:pt-6 min-[1100px]:px-0 min-[1100px]:pt-[40px] min-[1100px]:pb-[40px]">
      {/* Grey separator */}
      <div
        aria-hidden="true"
        className="h-3 w-full bg-[#F0F0F0]"
      />

      {/* Centered CTA card */}
      <div
        className="
          relative isolate
          mx-auto mt-6
          h-auto min-h-[300px]
          w-full max-w-[1520px]
          overflow-hidden rounded-[10px]
          bg-[linear-gradient(105deg,#6545ff_0%,#8b70ff_48%,#6847ff_100%)]
          sm:mt-8 sm:w-[82%]
          min-[1100px]:mt-[40px]
          min-[1100px]:h-[300px]
          min-[1100px]:min-h-0
          min-[1100px]:w-[73%]
        "
      >
        {/* Background illustration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 hidden! min-[1100px]:block!"
        >
          <img
            src="/images/business-verification-get-started-visual.png"
            alt=""
            draggable="false"
            className="absolute inset-x-0 top-0 h-[108%] w-full object-fill"
          />
        </div>

        {/* Content */}
        <div
          className="
            relative z-10 flex w-full flex-col
            items-start px-5 py-6
            sm:px-7 sm:py-8
            min-[900px]:absolute min-[900px]:inset-0
            min-[900px]:justify-center
            min-[900px]:px-[4.1%]
            min-[900px]:py-5
          "
        >
          <div className="w-full min-[900px]:w-[66%]">
            <h2
              className="
                m-0 max-w-[480px]
                text-[30px] font-semibold
                leading-[1.08] tracking-[-0.04em]
                text-white
                sm:text-[36px]
                min-[900px]:text-[clamp(32px,2.7vw,52px)]
              "
            >
              Get Started with Employee
              <br className="hidden sm:block" />
              {" "}Verification APIs
            </h2>

            <p
              className="
                m-0 mt-3 max-w-[850px]
                text-[13px] font-normal
                leading-[1.35] text-white
                sm:mt-4 sm:text-[14px]
                min-[900px]:mt-[10px]
                min-[900px]:w-full
                min-[900px]:text-[clamp(12px,1.02vw,20px)]
                min-[900px]:leading-[1.2]
              "
            >
              Integration follows the same path as SmartVerify's other
              verification APIs: sign up for API access, generate a key,
              and test each endpoint in the sandbox environment before
              moving to production. Documentation covers request and
              response formats for every API listed above, so a developer
              can have UAN or TDS verification running in a test environment
              within a day.
            </p>

            <CtaImageButton
              href="#contact"
              label="Book a Demo"
              image="/images/book-demo.png"
              hoverText="Book a Demo"
              variant="demo"
              showArrow
              className="mt-4 w-[184px] shrink-0 sm:w-[195px] min-[900px]:mt-[14px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function EmployeeVerificationFaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "What is UAN verification, and why does it matter for employment checks?",
      answer:
        "UAN verification helps businesses validate employment-related information using the available UAN verification service, subject to applicable access and consent requirements.",
    },
    {
      question:
        "Is there a way to verify income without contacting the applicant’s employer?",
      answer:
        "Available employment and income verification options depend on the service used and the information that can be lawfully accessed. Additional checks may be required to confirm income.",
    },
    {
      question:
        "What is the difference between the UAN Basic and UAN Advanced APIs?",
      answer:
        "The information returned depends on the selected verification service. Refer to the respective API documentation for the exact fields and checks supported by each option.",
    },
    {
      question:
        "How to use the TDS Quarterly API for income verification?",
      answer:
        "Use the TDS Quarterly API according to its documentation to retrieve the supported TDS-related information. Any income assessment should take the available records and applicable consent requirements into account.",
    },
    {
      question:
        "How fast do these verification APIs return results?",
      answer:
        "Response times can vary depending on the verification service and data-source availability. Refer to the API documentation for service-specific response expectations.",
    },
    {
      question:
        "How is SmartVerify different from other verification providers?",
      answer:
        "SmartVerify brings multiple verification options into business workflows, helping teams reduce manual checks and access the information relevant to their verification process.",
    },
  ];

  return (
    <section
      aria-labelledby="uan-verification-faq-heading"
      className="
        relative w-full overflow-hidden
        bg-[radial-gradient(ellipse_at_50%_48%,rgba(151,126,255,0.95)_0%,rgba(128,100,255,0.65)_37%,rgba(96,63,255,0)_72%),linear-gradient(110deg,#6042ff_0%,#6042ff_100%)]
      "
    >
      <div
        className="
          mx-auto grid w-[88%] max-w-[1520px]
          grid-cols-1 gap-8
          py-10
          sm:gap-10 sm:py-12
          min-[900px]:w-[80%]
          min-[900px]:grid-cols-[minmax(0,0.72fr)_minmax(0,1.15fr)]
          min-[900px]:items-start
          min-[900px]:gap-x-[6vw]
          min-[900px]:pb-[90px]
          min-[900px]:pt-[109px]
        "
      >
        {/* Left: Heading */}
        <h2
          id="uan-verification-faq-heading"
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

        {/* Right: FAQ Accordion */}
        <div className="flex min-w-0 flex-col gap-3 min-[900px]:gap-[12px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `uan-verification-faq-answer-${index}`;

            return (
              <article
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
                    sm:min-h-[66px] sm:px-5 sm:text-[17px]
                    min-[900px]:min-h-[74px]
                    min-[900px]:px-[24px]
                    min-[900px]:py-4
                    min-[900px]:text-[clamp(16px,1.05vw,20px)]
                  "
                >
                  <span className="min-w-0 flex-1">
                    {faq.question}
                  </span>

                  {/* Dropdown Arrow */}
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

                {/* Expandable Answer */}
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
function EmployeeIncomeVerificationPage() {
  return (
    <main className="w-full">
      <EmployeeIncomeVerificationHero />
      <EmployeeIncomeManualChecksSection />
      <EmployeeIncomeVerificationHowWorksSection />
      <EmployeeIncomeApiStackSection />
      <EmployeeIncomeAudienceSection />
      <EmployeeIncomeBenefitsSection />
      <EmployeeIncomeVerificationCta />
      <EmployeeVerificationFaqSection />
      <FooterSection />
    </main>
  );
}

export default EmployeeIncomeVerificationPage;