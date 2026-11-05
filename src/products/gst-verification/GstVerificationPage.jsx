import { useState } from "react";
import CtaImageButton from "../../components/shared/CtaImageButton.jsx";
import FooterSection from "../../sections/FooterSection.jsx";
function GstVerificationHero() {
  return (
    <section
      id="gst-verification-hero"
      aria-labelledby="gst-verification-heading"
      className="
        relative isolate w-full overflow-hidden bg-white
        min-[1100px]:h-[min(42.2vw,809px)]
        min-[1100px]:min-h-[600px]
      "
    >
      {/* Original Figma pink and purple background */}
      <img
        src="/images/gst-verification-hero-background.png"
        alt=""
        aria-hidden="true"
        draggable="false"
        className="
          pointer-events-none absolute inset-0 z-0
          h-full w-full object-fill
        "
      />

      {/* Desktop illustration: right side */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-0
          hidden min-[1100px]:block
        "
      >
        <img
          src="/images/gst-verification-hero-visual.png"
          alt=""
          draggable="false"
          className="mt-22
            absolute right-[3.5%] top-1/2
            h-auto w-[min(49vw,960px)] max-w-none
            -translate-y-1/2 object-contain
          "
        />
      </div>

      {/* Main content */}
      <div
        className="
          relative z-10 mx-auto flex w-[88%] max-w-[1520px]
          flex-col items-start
          pb-10 pt-[108px]
          sm:pb-14 sm:pt-[120px]
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
            min-[1100px]:w-[42vw]
            min-[1100px]:max-w-[810px]
          "
        >
          {/* Exact extracted Figma heading */}
          <h1
            id="gst-verification-heading"
            className="mt-4
              m-0 w-full max-w-[620px]
              min-[1100px]:w-[min(34vw,690px)]
              min-[1100px]:max-w-none
            "
          >
            <img
              src="/images/gst-verification-hero-heading.png"
              alt="GST Verification API for Fast & Accurate Business Verification"
              draggable="false"
              className="block h-auto w-full"
            />
          </h1>

          {/* Description */}
          <p
            className="
              mt-5 max-w-[620px]
              text-[13px] leading-[1.35] text-[#414141]
              sm:mt-6 sm:text-[13px]
              min-[1100px]:mt-[29px]
              min-[1100px]:w-[min(38vw,730px)]
              min-[1100px]:max-w-[710px]
              min-[1100px]:text-[clamp(13px,0.85vw,16px)]
              min-[1100px]:leading-[1.2]
            "
          >
            SmartVerify's GST Verification API helps you instantly verify GSTIN
            details against official records, ensuring you're onboarding
            legitimate businesses, vendors, and partners. Reduce manual checks,
            prevent fraud, and stay compliant with fast, accurate, and real-time
            GST verification.
          </p>

          {/* Reuse existing CTA buttons */}
          <div
            className="
              mt-8 flex w-full flex-col items-center gap-3
              sm:flex-row sm:flex-wrap sm:justify-center sm:gap-5
              min-[1100px]:mt-[40px]
              min-[1100px]:w-fit
              min-[1100px]:flex-nowrap
              min-[1100px]:justify-start
              min-[1100px]:gap-[30px]
            "
          >
            <CtaImageButton
              href="#documentation"
              label="View Documentation"
              image="/images/view-documentation.png"
              hoverText="View Documentation"
              variant="docs"
              className="
                w-full max-w-[280px] shrink-0
                sm:w-[250px] sm:max-w-none
                min-[1100px]:w-[300px]
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
                w-full max-w-[280px] shrink-0
                sm:w-[250px] sm:max-w-none
                min-[1100px]:w-[261px]
              "
            />
          </div>
        </div>

        {/* Mobile/tablet illustration — shown only once */}
        <div className="mt-7 w-full min-[1100px]:hidden -mb-9">
          <img
            src="/images/gst-verification-hero-visual.png"
            alt="GST verification results, filing summary, taxpayer details and verification status displayed beside a business professional"
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
const gstVerificationProblemCards = [
  {
    id: "gstin-verification",
    desktopImage: "/images/gst-verification-desktop-1.png",
    mobileImage: "/images/gst-verification-problem-card-1.png",
    alt: "GSTIN verification displayed on a laptop",
    tag: "Confirm Business Identity",
    title: "Verify the GSTIN against official business details.",
    bullets: [
      "Confirm the legal business name.",
      "Check GST registration status.",
      "Verify the state of operation.",
    ],
  },
  {
    id: "business-onboarding",
    desktopImage: "/images/gst-verification-desktop-2.png",
    mobileImage: "/images/gst-verification-problem-card-2.png",
    alt: "Business verification before onboarding",
    tag: "Strengthen Business Onboarding",
    title: "Validate businesses before onboarding or lending.",
    bullets: [
      "Verify business credentials.",
      "Reduce onboarding risks.",
      "Build greater trust with partners.",
    ],
  },
  {
    id: "manual-gst-checks",
    desktopImage: "/images/gst-verification-desktop-3.png",
    mobileImage: "/images/gst-verification-problem-card-3.png",
    alt: "Manual paperwork replaced by digital GST verification",
    tag: "Eliminate Manual Verification",
    title: "Replace manual GST checks with faster digital verification.",
    bullets: [
      "Reduce manual effort.",
      "Avoid repetitive data entry.",
      "Handle high-volume verification efficiently.",
    ],
  },
  {
    id: "automated-gst-check",
    desktopImage: "/images/gst-verification-desktop-4.png",
    mobileImage: "/images/gst-verification-problem-card-4.png",
    alt: "Automated GST verification results",
    tag: "Get Verified Data Instantly",
    title: "Get accurate GST details in seconds with one automated check.",
    bullets: [
      "Access current GST information.",
      "Get structured verification results.",
      "Make faster business decisions.",
    ],
  },
];
function GstVerificationProblemsSection() {
  return (
    <>
      {/* Thin grey gap */}
      <div aria-hidden="true" className="h-4 w-full bg-[#F0F0F0]" />

      <section
        aria-labelledby="gst-verification-problems-heading"
        className="relative w-full bg-white"
      >
        <div aria-hidden="true" className="h-3 w-full bg-[#F0F0F0]" />

        {/* Section heading */}
        <div
          className="
            mx-auto w-[88%] max-w-[1520px]
            pb-12 pt-12
            sm:pb-16 sm:pt-14
            min-[1100px]:w-[80%]
            min-[1100px]:pb-[52px]
            min-[1100px]:pt-[44px]
          "
        >
          <header>
            <h2
              id="gst-verification-problems-heading"
              className="m-0 w-full max-w-[830px]"
            >
              <img
                src="/images/gst-verification-problems-heading.png"
                alt="GST Verification: Verify Businesses Before You Trust Them"
                draggable="false"
                className="block h-auto w-full"
              />
            </h2>

            <p
              className="
                m-0 mt-4 w-full max-w-[800px]
                text-[14px] leading-[1.4] text-[#333333]
                sm:text-[16px]
                min-[1100px]:mt-[20px]
                min-[1100px]:whitespace-nowrap
                min-[1100px]:text-[16px]
                min-[1100px]:leading-[1.35]
              "
            >
              Manual verification isn't just slow it creates real business
              problems:
            </p>
          </header>

          {/* Sticky card sequence — same approach as Vehicle Verification */}
          <div
            className="
              mt-9 flex flex-col items-center gap-7
              sm:mt-12 sm:gap-8
              min-[1100px]:mt-[110px]
              min-[1100px]:gap-[34px]
            "
          >
            {gstVerificationProblemCards.map((card, index) => (
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
                {/* Desktop: Image left, content right */}
                <article
                  className="
                    hidden
                    relative mx-auto w-full max-w-[1017px]
                    overflow-hidden rounded-[12px]
                    border border-[#E5E7EB] bg-white
                    min-[768px]:flex
                    min-[768px]:min-h-[460px]
                    min-[768px]:flex-row
                  "
                >
                  {/* Left image */}
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
                      src={card.desktopImage}
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

                  {/* Right manually written content */}
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

                {/* Mobile: Original image card with text underneath */}
                <article
                  className="
                    block mx-auto w-full max-w-[460px]
                    overflow-hidden rounded-[8px]
                    border border-[#E5E7EB] bg-white
                    shadow-[0_2px_10px_rgba(0,0,0,0.05)]
                    min-[768px]:hidden
                  "
                >
                  <img
                    src={card.mobileImage}
                    alt={card.alt}
                    draggable="false"
                    loading={index === 0 ? "eager" : "lazy"}
                    className="block aspect-square w-full object-cover"
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
      <div aria-hidden="true" className="h-2 w-full bg-[#F0F0F0]" />
    </>
  );
}
function GstVerificationApisIntegrateSection() {
  const apis = [
    {
      title: "Search GST by PAN Number",
      description: "Some workflows begin with a PAN and not a GSTIN. GST Search by PAN API takes the PAN of a business owner or entity and provides a list of all GSTIN registered against it.",
      iconImage: "/images/gst-search-pan-icon.png", 
    },
    {
      title: "GST Basic Validation",
      description: "Once you have a GSTIN, the GST Basic Validation API confirms it's real and active. It returns the legal business name, registration date, GSTIN status (active, cancelled, or suspended), and business constitution.",
      iconImage: "/images/gst-basic-validation-icon.png",
    },
    {
      title: "GST Advanced Validation",
      description: "For a closer look, the GST Advanced Validation API goes past the basics. It pulls filing frequency, taxpayer type, jurisdiction details, and the business's compliance history with GST returns.",
      iconImage: "/images/gst-advanced-validation-icon.png", 
    },
    {
      title: "GST to Contact Details",
      description: "Sometimes you have the GSTIN but need to reach the business behind it. GST to Contact Details API: The GST to Contact Details API provides the registered mobile number and email address on record against a GSTIN.",
      iconImage: "/images/gst-contact-icon.png", 
    },
  ];

  return (
    <>
      {/* Thin grey divider */}
      <div aria-hidden="true" className="h-1 w-full bg-[#F0F0F0]" />

      <section
        aria-labelledby="gst-verification-apis-integrate-heading"
        className="w-full overflow-hidden bg-white"
      >
        <div aria-hidden="true" className="h-3 w-full bg-[#F0F0F0]" />
        
        <div
          className="
            mx-auto w-[88%] max-w-[1520px]
            pb-8 pt-8
            sm:pb-10 sm:pt-10
            min-[1100px]:w-[88%]
            min-[1100px]:translate-x-14
            min-[1100px]:pb-[28px]
            min-[1100px]:pt-[34px]
          "
        >
          {/* Heading and description */}
          <header
            className="
              flex flex-col items-start gap-4
              min-[768px]:flex-row
              min-[768px]:items-start
              min-[768px]:justify-between
              min-[768px]:gap-8
            "
          >
            <h2
              id="gst-verification-apis-integrate-heading"
              className="
                m-0 w-full max-w-[570px]
                min-[768px]:w-[min(32vw,570px)]
                min-[768px]:shrink-0
              "
            >
              <img
                src="/images/gst-verification-apis-integrate-heading.png"
                alt="Our GST APIs You Can Integrate"
                draggable="false"
                className="block h-auto w-full"
              />
            </h2>

            <p
              className="
                m-0 w-full max-w-[450px]
                text-[13px] leading-[1.35] text-[#333333]
                sm:text-[14px]
                min-[768px]:ml-auto
                min-[768px]:w-[min(35vw,450px)]
                min-[768px]:shrink-0
                min-[1100px]:-translate-x-3
                min-[1100px]:pt-[4px]
                min-[1100px]:text-[13px]
                min-[1100px]:leading-[1.3]
              "
            >
              SmartVerify's GST Verification suite contains five APIs, each
              covering one step of the verification flow.
            </p>
          </header>

          {/* DESKTOP VIEW */}
          <div className="relative mt-8 hidden min-[1100px]:block">
            {/* 
              Background Visual: 
              Reduced max-width to 1100px and added h-[500px] to restrict the height.
              Added object-cover so it fills the space properly without stretching.
            */}
            <img
              src="/images/gst-verification-apis-integrate-visual.png" 
              alt="GST API verification dashboard with professional" 
              className="ml-auto block h-[500px] w-full max-w-[1100px] rounded-none object-cover object-right"
            />

            {/* 
              Cards Grid Wrapper:
              Adjusted top-[5%] and bottom-[5%] to fit inside the newly constrained height.
            */}
            <div 
              className="
                absolute left-[2%] top-[5%] bottom-[5%]
                w-[42%] 
                p-2
              "
            >
              {/* Grid with visible gaps */}
              <div className="grid h-full w-full grid-cols-2 gap-3">
                {apis.map((api, index) => (
                  <article
                    key={index}
                    className="
                      flex flex-col bg-white p-4
                      rounded-none shadow-sm
                    "
                  >
                    <div className="mb-2 flex h-8 items-center">
                      <img 
                        src={api.iconImage} 
                        alt="" 
                        className="h-8 w-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="mb-1 text-[15px] font-semibold text-[#111827]">
                      {api.title}
                    </h3>
                    <p className="text-[12px] leading-[1.4] text-[#4B5563]">
                      {api.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* MOBILE VIEW */}
          <div className="mt-6 flex flex-col gap-6 min-[1100px]:hidden">
            <div className="w-full overflow-hidden rounded-xl">
              <img
                src="/images/gst-verification-apis-integrate-visual.png" 
                alt="GST API verification dashboard with professional" 
                className="block h-auto w-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {apis.map((api, index) => (
                <article
                  key={index}
                  className="
                    flex flex-col bg-white p-5
                    border border-[#E5E7EB] rounded-lg
                  "
                >
                  <div className="mb-3 flex h-8 items-center">
                    <img 
                      src={api.iconImage} 
                      alt="" 
                      className="h-8 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mb-2 text-[15px] font-semibold text-[#111827] sm:text-[16px]">
                    {api.title}
                  </h3>
                  <p className="text-[13px] leading-[1.5] text-[#4B5563] sm:text-[14px]">
                    {api.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
function GstVerificationWhoUsesSection() {
  const industries = [
    {
      id: "lending",
      icon: "lenders",
      title: "Lending Platforms",
      description:
        "Verify that borrowers have an active, registered business before disbursing funds.",
    },
    {
      id: "marketplaces",
      icon: "fintech",
      title: "B2B Marketplaces",
      description:
        "Validate new sellers and reduce fraudulent or unverified listings.",
    },
    {
      id: "logistics",
      icon: "insurance",
      title: "Logistics Companies",
      description:
        "Check shipper and consignee GST status before extending credit terms.",
    },
    {
      id: "insurance",
      icon: "staffing",
      title: "Insurance Providers",
      description:
        "Verify business policyholders during underwriting.",
    },
    {
      id: "staffing",
      icon: "marketplaces",
      title: "Staffing Platforms",
      description:
        "Confirm client businesses before signing placement contracts.",
    },
  ];

  return (
    <>
      {/* Thin grey divider */}
      <div aria-hidden="true" className="h-1 w-full bg-[#F0F0F0]" />

      <section
        aria-labelledby="gst-verification-who-uses-heading"
        className="w-full overflow-hidden bg-white"
      >
      {/* Thin grey divider before the next section */}
      <div aria-hidden="true" className="h-3 w-full bg-[#F0F0F0]" />
        <div
          className="
            mx-auto w-[88%] max-w-[1520px]
            pb-10 pt-8
            sm:pb-12 sm:pt-10
            min-[1100px]:w-[80%]
            min-[1100px]:pb-[38px]
            min-[1100px]:pt-[28px]
          "
        >
          {/* Figma heading */}
          <h2
            id="gst-verification-who-uses-heading"
            className="
              m-0 w-full max-w-[570px]
              min-[1100px]:w-[min(40vw,570px)]
            "
          >
            <img
              src="/images/gst-verification-who-uses-heading.png"
              alt="Who Uses GST Verification APIs"
              draggable="false"
              className="block h-auto w-full"
            />
          </h2>

          {/* Desktop: original Figma card image and illustration */}
          <div
            className="
              mt-7 hidden
              min-[768px]:grid
              min-[768px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
              min-[768px]:items-start
              min-[768px]:gap-[18px]
              min-[1100px]:mt-[68px]
              min-[1100px]:gap-[18px]
            "
          >
            {/* Five industry cards, preserving the original typography */}
            <img
              src="/images/gst-verification-who-uses-cards.png"
              alt="Lending Platforms: verify registered businesses before disbursing funds. B2B Marketplaces: validate sellers. Logistics Companies: check shipper and consignee GST status. Insurance Providers: verify policyholders. Staffing Platforms: confirm client businesses."
              draggable="false"
              loading="lazy"
              className="mt-6 block h-auto w-full"
            />

            {/* Original verification illustration */}
            <img
              src="/images/business-verification-who-uses-visual.png"
              alt="Digital verification illustration showing documents, security checks and verified business information"
              draggable="false"
              loading="lazy"
              className="mt-2 block h-auto w-full"
            />
          </div>

          {/* Mobile: readable individual cards */}
          <div className="mt-7 flex flex-col gap-3 min-[768px]:hidden">
            {industries.map((industry) => (
              <article
                key={industry.id}
                className="
                  flex min-w-0 items-center gap-4
                  rounded-[9px] border border-[#D8D2FF]
                  bg-white px-4 py-4
                "
              >
                {/* Reuse the existing icon helper from the previous section */}
                <BusinessVerificationAudienceIcon
                  type={industry.icon}
                />

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

            {/* Illustration below all cards on mobile */}
            <img
              src="/images/business-verification-who-uses-visual.png"
              alt="Business verification illustration"
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
function GstVerificationAutomationBenefitsSection() {
  const cards = [
    {
      id: "pan-gstin",
      image: "/images/gst-verification-automation-card-1.png",
      imageAlt: "PAN and GSTIN verification workflow illustration",
      title: "Start with PAN or GSTIN",
      description:
        "Begin with whichever business information the customer provides during registration. If you only have a PAN, use GST Search by PAN to identify all GSTINs linked to the business.",
    },
    {
      id: "gst-registration",
      image: "/images/gst-verification-automation-card-2.png",
      imageAlt: "GST registration search and verification workflow illustration",
      title: "Verify the GST Registration",
      description:
        "Use GST Basic Validation to confirm that the GSTIN is genuine, active, and matches the business details provided.",
    },
    {
      id: "deeper-checks",
      image: "/images/gst-verification-automation-card-3.png",
      imageAlt: "Advanced business compliance verification illustration",
      title: "Perform Deeper Checks When Required",
      description:
        "For higher-risk or credit-based onboarding, use GST Advanced Validation for deeper compliance details and GST to Contact Details to verify registered contact information for follow-ups or KYC.",
    },
  ];

  return (
    <>
      <div aria-hidden="true" className="h-1 w-full bg-[#F0F0F0]" />

      <section
        aria-labelledby="gst-verification-automation-heading"
        className="w-full overflow-hidden bg-white"
      >
        <div aria-hidden="true" className="h-3 w-full bg-[#F0F0F0]" />

        <div
          className="
            mx-auto w-[90%] max-w-[1560px]
            pb-8 pt-8 sm:pb-10 sm:pt-10
            min-[1100px]:w-[80%]
            min-[1100px]:pb-[38px]
            min-[1100px]:pt-[36px]
          "
        >
          {/* Section heading and description */}
          <header
            className="
              grid grid-cols-1 items-start gap-4
              min-[768px]:grid-cols-[minmax(0,1fr)_minmax(230px,0.65fr)]
              min-[768px]:gap-x-[5%]
            "
          >
            <h2
              id="gst-verification-automation-heading"
              className="m-0 mt-6 w-full max-w-[500px]"
            >
              <img
                src="/images/gst-verification-automation-heading.png"
                alt="What Changes When You Automate These Checks"
                draggable="false"
                className="block h-auto w-full"
              />
            </h2>

            <p
              className="
                m-0 mt-6 w-full max-w-[400px]
                text-[14px] leading-[1.4] text-[#333333]
                min-[768px]:ml-auto
                min-[1100px]:pt-2
                min-[1100px]:text-[16px]
              "
            >
              Running vehicle checks through an API instead of manual
              verification changes three things immediately:
            </p>
          </header>

          {/* Cards */}
          <div
            className="
              mt-8 grid grid-cols-1 items-start gap-5
              min-[560px]:grid-cols-2
              min-[900px]:grid-cols-3
              min-[900px]:gap-4
              min-[1100px]:mt-10
            "
          >
            {cards.map((card, index) => (
              <article
                key={card.id}
                className="
                  flex h-full min-w-0 flex-col
                  overflow-hidden rounded-[10px]
                  border border-[#D0D0D0]
                  bg-white p-3 sm:p-4
                "
              >
                {/* Figma illustration — preserve its natural aspect ratio */}
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  draggable="false"
                  loading={index === 0 ? "eager" : "lazy"}
                  className="
                    block h-auto w-full
                    rounded-[8px] object-contain
                  "
                />

                {/* Manual text, in normal document flow */}
                <div className="px-1 pb-1 pt-4">
                  <h3
                    className="
                      m-0 text-[16px] font-medium
                      leading-[1.4] text-[#111827]
                      sm:text-[18px]
                    "
                  >
                    {card.title}
                  </h3>

                  <p
                    className="
                      mt-3 text-[14px] leading-[1.5]
                      text-[#333333] sm:text-[15px]
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
function GstVerificationGetStartedSection() {
  return (
    <>
      <section className="w-full bg-white px-4 pb-8 pt-3 sm:pb-10 min-[1100px]:px-0 min-[1100px]:py-[40px]">
         {/* Thin grey divider after CTA */}
      <div
  aria-hidden="true"
  className="mb-6 h-3 w-full bg-[#F0F0F0] min-[1100px]:mb-8"
/>{/* Centred card: equal gaps on both ends */}
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
          {/* Original Figma illustration — desktop only */}
<div
  aria-hidden="true"
  className="
    pointer-events-none absolute inset-0 z-0
    hidden!
    min-[1100px]:block!
  "
>
  <img
    src="/images/business-verification-get-started-visual.png"
    alt=""
    draggable="false"className="
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
              min-[1100px]:absolute
              min-[1100px]:inset-0
              min-[1100px]:px-[4.1%]
              min-[1100px]:pt-[clamp(24px,1.8vw,34px)]
              min-[1100px]:pb-6
            "
          >
            <div className="w-full min-[1100px]:w-[92%]">
            {/* Exact Figma heading image */}
            <h2
              className="
                m-0 w-full max-w-[480px]
                min-[1100px]:max-w-none
                min-[1100px]:w-[52%]
              "
            >
              <img
                src="/images/gst-verification-get-started-heading.png"
                alt="Verify GST Details Instantly with SmartVerify"
                draggable="false"
                className="block h-auto w-full"
              />
            </h2>

            {/* Description */}
              <p
                className="
                  mt-4 max-w-[520px]
                  text-[13px] leading-[1.4] text-white
                  sm:mt-5 sm:text-[14px]
                  min-[1100px]:mt-[clamp(8px,1vw,16px)]
                  min-[1100px]:max-w-none
                  min-[1100px]:w-[60%]
                  min-[1100px]:text-[clamp(11px,0.85vw,16px)]
                  min-[1100px]:leading-[1.2]
                "
              >
              Manual GST checks slow down onboarding and leave room for errors.
              SmartVerify replaces repetitive verification tasks with real-time
              GST APIs that deliver accurate business information.
            </p>

           {/* Reuse the existing Book a Demo button */}
              <CtaImageButton
            href="#contact"
            label="Book a Demo"
            image="/images/book-demo.png"
            hoverText="Book a Demo"
            variant="demo"
            showArrow
            className="mt-5 w-[180px] shrink-0 sm:w-[195px]"
          />
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
function GstVerificationFaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "What's the difference between GST Basic Validation and GST Advanced Validation?",
      answer:
        "GST Basic Validation confirms whether a GSTIN is genuine and active. GST Advanced Validation provides additional business and compliance details where supported by the selected verification service.",
    },
    {
      question: "Can I look up a GSTIN using only a PAN?",
      answer:
        "Yes, PAN-based lookup can help identify GST registrations linked to a PAN when the selected GST Search by PAN service supports this search.",
    },
    {
      question: "Which documents and IDs can SmartVerify check?",
      answer:
        "Depending on the selected service, business verification can include GSTIN, PAN, CIN, DIN, TAN, FSSAI, IEC and Udyam details.",
    },
    {
      question:
        "Is SmartVerify aligned with Indian regulatory requirements?",
      answer:
        "Verification workflows should follow applicable Indian regulatory requirements, consent obligations and data-access rules for your use case.",
    },
    {
      question: "Can I test the APIs before going live?",
      answer:
        "Check the available API documentation and sandbox access to test your integration before moving to production.",
    },
    {
      question:
        "How is SmartVerify different from other verification providers?",
      answer:
        "SmartVerify brings multiple verification checks into focused workflows, helping businesses automate checks and reduce manual effort.",
    },
  ];

  return (
    <>
      <section
        aria-labelledby="gst-verification-faq-heading"
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
            sm:gap-10 sm:py-14
            min-[900px]:min-h-0
            min-[900px]:w-[80%]
            min-[900px]:grid-cols-[minmax(0,0.72fr)_minmax(0,1.15fr)]
            min-[900px]:items-start
            min-[900px]:gap-x-[6vw]
            min-[900px]:pb-[24px]
            min-[900px]:pt-[109px]
            min-[1200px]:gap-x-[6vw]
          "
        >
          {/* Left-side heading */}
          <h2
            id="gst-verification-faq-heading"
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

          {/* Right-side accordion */}
          <div className="flex min-w-0 flex-col gap-3 min-[900px]:gap-[12px]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const answerId = `gst-verification-faq-answer-${index}`;

              return (
                <div
                  key={faq.question}
                  className="
                    min-w-0 rounded-[4px]
                    border border-white/85
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
                      flex min-h-[62px] w-full
                      items-center justify-between gap-4
                      px-4 py-3 text-left
                      text-[15px] font-normal leading-[1.4]
                      text-white transition-colors duration-200
                      hover:bg-white/[0.08]
                      focus-visible:outline-2
                      focus-visible:outline-offset-2
                      focus-visible:outline-white
                      sm:min-h-[66px] sm:px-5
                      sm:text-[17px]
                      min-[900px]:min-h-[74px]
                      min-[900px]:px-[24px]
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
function GstVerificationPage() {
  return (
    <main className="w-full">
      <GstVerificationHero />
      <GstVerificationProblemsSection />
      <GstVerificationApisIntegrateSection />
      <GstVerificationWhoUsesSection />
      <GstVerificationAutomationBenefitsSection />
      <GstVerificationGetStartedSection />
      <GstVerificationFaqSection />
      <FooterSection />
    </main>
  );
}

export default GstVerificationPage;