import { useState } from "react";
import CtaImageButton from "../../components/shared/CtaImageButton.jsx";
import FooterSection from "../../sections/FooterSection.jsx";
function AboutUsHeroSection() {
  return (
    <main className="w-full overflow-hidden">
      <section
        className="
          hero-background relative isolate w-full overflow-hidden
          min-h-[480px]
          sm:min-h-[560px]
          lg:min-h-[min(45vw,780px)]
        "
      >
        <div
          className="
            relative z-10 mx-auto grid w-full max-w-[1440px]
            grid-cols-1 items-center gap-8
            px-5 pb-0 pt-16
            sm:px-8 sm:py-14 sm:pb-0
            lg:min-h-[inherit]
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-8 lg:px-[7.5%] lg:py-10
          "
        >
          {/* Left: Heading, descriptions and buttons */}
          <div className="relative z-10 min-w-0 px-2 sm:px-0">
            <img
              src="/images/about-us-heading.png"
              alt="Empowering Digital Trust Through Safe Identity Verification & KYC Solutions"
              draggable="false"
              className="mt-8
                block h-auto w-full max-w-[500px]
                object-contain object-left sm:w-[320px] lg:w-[600px]
              "
            />

            <div
              className="
                mt-7 max-w-[650px]
                text-[12px] font-normal leading-[1.35]
                text-[#35313B]
                sm:mt-6 sm:text-[13px]
                lg:mt-[28px] lg:text-[13px]
              "
            >
              <p>
                In today&apos;s digital-first economy, businesses need fast
                and reliable ways to verify customers, prevent fraud, and
                meet regulatory compliance requirements. SmartVerify is
                built to simplify these challenges by offering intelligent
                identity verification, digital KYC, document verification,
                and business verification solutions that help organisations
                onboard customers with confidence.
              </p>

              <p className="mt-5">
                Our mission is to make digital verification seamless, safe,
                and scalable for businesses of all sizes. Whether
                you&apos;re launching a new platform or an enterprise
                managing millions of verification requests, SmartVerify
                delivers solutions designed for speed, accuracy, and
                reliability.
              </p>
            </div>

            {/* Reuse the existing CTA buttons - Made equal on mobile */}
            <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:mt-7 sm:flex-row sm:items-center sm:gap-4 lg:mt-6 lg:justify-start">
              <CtaImageButton
                href="#documentation"
                label="View Documentation"
                image="/images/view-documentation.png"
                hoverText="View Documentation"
                variant="docs"
                className="w-full max-w-[280px] shrink-0 sm:w-[240px] sm:max-w-none"
              />

              <CtaImageButton
                href="#contact"
                label="Book a Demo"
                image="/images/book-demo.png"
                hoverText="Book a Demo"
                variant="demo"
                showArrow
                className="w-full max-w-[280px] shrink-0 sm:w-[220px] sm:max-w-none"
              />
            </div>
          </div>

          {/* Right visual — fit within the hero without clipping */}
          <div className="relative mt-8 flex min-w-0 items-end justify-center lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:w-[43%] -mb-8 sm:mb-0">
            <img
              src="/images/about-us-visual.png"
              alt="Woman presenting a phone displaying identity verification and KYC solutions"
              draggable="false"
              className="
                block h-auto w-full max-w-[440px] object-contain object-bottom
                sm:max-w-[500px]
                lg:absolute lg:bottom-0 lg:right-30
                lg:h-[76%] lg:w-auto lg:max-w-none
              "
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function WeAtSmartVerify() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
            <div aria-hidden="true" className="h-4 w-full bg-[#F0F0F0]" />

      <div
        className="
          mx-auto grid w-full max-w-[1440px]
          grid-cols-1 items-center gap-8
          px-5 py-10
          sm:px-8 sm:py-12
          lg:grid-cols-[1fr_0.95fr]
          lg:gap-12 lg:px-[7.5%] lg:py-10
        "
      >
        {/* Left content */}
        <div className="min-w-0">
          <img
            src="/images/we-at-smartverify-heading.png"
            alt="We at SmartVerify"
            draggable="false"
            className="block h-auto w-full max-w-[300px] object-contain object-left sm:w-[340px] lg:w-[360px]"
          />

          <div className="mt-6 max-w-[480px] space-y-4 text-[13px] font-normal leading-[1.4] text-[#555555] sm:text-[14px]">
            <p>
              SmartVerify provides businesses with a comprehensive suite of
              solutions for identity verification, KYC automation, document
              validation, OCR, fraud prevention, banking verification, and
              business verification.
            </p>

            <p>
              Our platform enables organisations to automate manual
              verification processes, reduce operational costs, improve
              compliance, and create frictionless customer onboarding
              experiences.
            </p>

            <p>
              From fintech and banking to healthcare, HR, insurance,
              education, travel, and e-commerce, SmartVerify supports
              businesses across industries with scalable verification
              infrastructure built for modern digital ecosystems.
            </p>
          </div>
        </div>

        {/* Right visual */}
        <div className="flex min-w-0 items-center justify-center lg:justify-end">
          <img
            src="/images/we-at-smartverify-visual.png"
            alt="Identity verification process showing document submission and selfie verification"
            loading="lazy"
            draggable="false"
            className="
              block h-auto w-full max-w-[627px]
              object-contain
            "
          />
        </div>
      </div>
    </section>
  );
}

function VerificationSolutionsSection() {
  const solutions = [
  {
    title: "Identity Verification",
    description:
      "The business sends the document for electronic signing",
    icon: "/images/verification-identity.png",
  },
  {
    title: "Banking Verification",
    description:
      "The customer verifies their identity using an Aadhaar-linked OTP",
    icon: "/images/verification-banking.png",
  },
  {
    title: "Business Verification",
    description:
      "A cryptographic signature is applied directly to the document",
    icon: "/images/verification-business.png",
  },
  {
    title: "OCR Solutions",
    description:
      "The signed document is time-stamped and recorded for verification",
    icon: "/images/verification-ocr.png",
  },
  {
    title: "Digital KYC",
    description:
      "Unlike a scanned signature, the eSign provides a digitally verifiable signature backed by the Aadhaar authentication process",
    icon: "/images/verification-kyc.png",
  },
  {
    title: "Fraud Prevention",
    description:
      "Unlike a scanned signature, the eSign provides a digitally verifiable signature backed by the Aadhaar authentication process",
    icon: "/images/verification-fraud.png",
  },
];

  function SolutionIcon({ type }) {
    const common = {
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.8,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };

    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className="h-9 w-9 shrink-0 text-[#5141D9]"
        {...common}
      >
        {type === "identity" && (
          <>
            <rect x="7" y="12" width="29" height="22" rx="1" />
            <circle cx="15" cy="20" r="3" />
            <path d="M10 29c1-5 9-5 10 0M23 19h9M23 24h9M23 29h5" />
            <path d="M36 25l6 3v6c0 4-3 7-6 9-3-2-6-5-6-9v-6l6-3Z" />
            <path d="m33 34 2 2 4-5" />
            <path d="M18 8h5M20.5 5v6" />
          </>
        )}
        {type === "banking" && (
          <>
            <path d="M6 15 23 6l17 9H6Z" fill="currentColor" />
            <path d="M9 18h28M11 20v14M19 20v14M28 20v14M36 20v14M7 37h31" />
            <path d="M35 28l6 3v5c0 3-3 5-6 7-3-2-6-4-6-7v-5l6-3Z" fill="white" />
            <path d="m32 35 2 2 4-4" />
          </>
        )}
        {type === "business" && (
          <>
            <circle cx="15" cy="17" r="4" fill="currentColor" />
            <circle cx="29" cy="17" r="4" fill="currentColor" />
            <path d="M7 34c0-7 3-11 8-11s8 4 8 11v2H7v-2ZM23 34c0-7 2-11 7-11s8 4 8 11v2H23" fill="currentColor" />
            <rect x="19" y="4" width="11" height="9" rx="1" fill="currentColor" />
            <path d="m22 8 2 2 3-4" stroke="white" />
          </>
        )}
        {type === "ocr" && (
          <>
            <path d="M8 17v-6h7M33 11h7v6M8 31v6h7M33 37h7v-6" />
            <path d="M13 18h22v5H13zM13 26h22v5H13z" fill="currentColor" />
            <path d="M7 24h34" />
          </>
        )}
        {type === "kyc" && (
          <>
            <rect x="5" y="9" width="36" height="24" rx="1" />
            <rect x="9" y="14" width="10" height="11" />
            <circle cx="14" cy="18" r="2" />
            <path d="M10 24c1-3 7-3 8 0M23 16h13M23 21h13M9 29h25" />
            <circle cx="37" cy="32" r="8" fill="white" />
            <path d="m33 32 3 3 5-6" />
            <path d="M17 38h12M22 33v5" />
          </>
        )}
        {type === "fraud" && (
          <>
            <rect x="5" y="9" width="34" height="23" rx="1" />
            <path d="m12 26 7-12 7 12H12Z" />
            <path d="M19 18v4M19 24v.5" />
            <circle cx="32" cy="25" r="7" fill="white" />
            <circle cx="32" cy="25" r="4" />
            <path d="m37 30 5 6M12 36h20M17 40h12" />
          </>
        )}
      </svg>
    );
  }

  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-[60px]">
      <div aria-hidden="true" className="h-4 w-full bg-[#F0F0F0]" />
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-28">
        {/* Heading and introduction */}
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-start sm:justify-between lg:mb-[48px]">
          <img
            src="/images/our-verification-solutions-heading.png"
            alt="Our Verification Solutions"
            draggable="false"
            className="mt-8 block h-auto w-[260px] max-w-full object-contain object-left sm:w-[300px]"
          />

          <p className="mt-8 max-w-[360px] text-[12px] font-normal leading-[1.4] text-[#555555] sm:text-[13px]">
            SmartVerify provides a broad portfolio of verification and
            compliance solutions designed to support digital onboarding
            and identity validation.
          </p>
        </div>

        {/* Six solution cards */}
        <div className="grid grid-cols-1 border-l border-t border-[#D2D2D2] sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="
                flex min-w-0 flex-col items-start
                border-b border-r border-[#D2D2D2]
                px-5 py-6
                sm:min-h-[190px] sm:px-6 sm:py-6
                lg:min-h-[190px] lg:px-6 lg:py-6
              "
            >
              <img
                src={solution.icon}
                alt=""
                aria-hidden="true"
                draggable="false"
                className="h-9 w-9 shrink-0 object-contain"
               />


              <h3 className="mt-4 text-[16px] font-normal leading-[1.3] text-[#444444] sm:text-[17px]">
                {solution.title}
              </h3>

              <p className="mt-3 text-[12px] font-normal leading-[1.3] text-[#626262] sm:text-[13px]">
                {solution.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSmartVerifySection() {
  const benefits = [
    {
      title: "Comprehensive Verification Solutions",
      description:
        "Access a wide range of verification capabilities to support diverse business and compliance requirements.",
      icon: "/images/why-choose-comprehensive.png",
    },
    {
      title: "Fast & Accurate Results",
      description:
        "Automate verification processes with reliable results that help businesses make decisions more efficiently.",
      icon: "/images/why-choose-accuracy.png",
    },
    {
      title: "Safe & Scalable Infrastructure",
      description:
        "Built to handle growing verification volumes while maintaining strong security and dependable performance.",
      icon: "/images/why-choose-scalable.png",
    },
    {
      title: "Smooth Integration",
      description:
        "Integrate verification services efficiently into your existing workflows and digital platforms with minimal complexity.",
      icon: "/images/why-choose-integration.png",
    },
  ];

  return (
    <section className="w-full bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-0 lg:py-[60px]">
       <div aria-hidden="true" className="h-4 w-full bg-[#F0F0F0]" />
      <div className="mx-auto w-full max-w-[1440px] lg:px-28">
        {/* Section heading and introduction */}
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-start sm:justify-between lg:mb-[26px]">
          <img
            src="/images/why-businesses-choose-heading.png"
            alt="Why Businesses Choose SmartVerify"
            draggable="false"
            className="mt-8 block h-auto w-[300px] max-w-full object-contain object-left sm:w-[340px]"
          />

          <p className="mt-8 max-w-[300px] text-[12px] font-normal leading-[1.35] text-[#555555] sm:text-[13px]">
            Organisations rely on SmartVerify because our platform is
            designed to deliver safe, scalable, and developer-friendly
            verification solutions.
          </p>
        </div>
{/* Purple feature panel */}
<div className="relative mx-auto w-[96%] overflow-hidden bg-[#6545F5]">  <div className="grid grid-cols-1 gap-6 p-5 sm:p-7 lg:min-h-[360px] lg:grid-cols-[1.12fr_0.88fr] lg:gap-4 lg:py-[30px] lg:pl-[30px] lg:pr-0">

    {/* Four benefit cards */}
    <div className="relative z-10 grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-[14px] lg:content-center">
      {benefits.map((benefit) => (
        <article
          key={benefit.title}
          className="flex min-w-0 flex-col items-start bg-white px-4 py-5 sm:min-h-[150px] sm:px-4 sm:py-4 lg:min-h-[126px] lg:px-3 lg:py-3"
        >
          <img
            src={benefit.icon}
            alt=""
            aria-hidden="true"
            draggable="false"
            className="h-8 w-8 shrink-0 object-contain"
          />

          <h3 className="mt-3 text-[14px] font-medium leading-[1.25] text-[#282828] lg:text-[13px]">
            {benefit.title}
          </h3>

          <p className="mt-2 text-[11px] font-normal leading-[1.3] text-[#656565] lg:text-[10px]">
            {benefit.description}
          </p>
        </article>
      ))}
    </div>

    {/* Original extracted visual */}
    <div className="relative min-w-0 lg:min-h-[360px]">
      <img
        src="/images/why-choose-smartverify-visual.png"
        alt="Business professional using SmartVerify document verification"
        draggable="false"
        className="mx-auto block h-auto w-full max-w-[560px] object-contain object-bottom lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:h-full lg:w-[175%] lg:max-w-none lg:object-contain lg:object-right-bottom"
      />
    </div>

  </div>
</div>
          </div>
    </section>
  );
}
function GeolocationIndustriesSection() {
  const industries = [
    {
      title: "FinTech & Banking",
      description:
        "Confirm that a customer’s address matches the KYC documents they submitted and catch discrepancies early.",
      icon: "/images/industry-fintech-banking.png",
    },
    {
      title: "Insurance",
      description:
        "Look at where claims are made and work out how near they are to judge risk or send an assessor.",
      icon: "/images/industry-insurance.png",
    },
    {
      title: "E-commerce & Logistics",
      description:
        "Verify the delivery address at checkout and compute the distance to the nearest fulfilment centre.",
      icon: "/images/industry-ecommerce-logistics.png",
    },
    {
      title: "Real Estate",
      description:
        "Pin real estate listings with precision and view distances to landmarks, schools or transit.",
      icon: "/images/industry-real-estate.png",
    },
    {
      title: "Across Industries",
      description:
        "Verify users early, reduce manual input, and give fraud teams a reliable data trail for better decisions.",
      icon: "/images/industry-across-industries.png",
    },
  ];

  return (
    <section className="w-full bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-0 lg:py-[60px]">
       <div aria-hidden="true" className="h-4 w-full bg-[#F0F0F0]" />
      <div className="mx-auto w-full max-w-[1440px] lg:px-[10.3%]">

        {/* Heading */}
        <img
          src="/images/Industries We Serve.png"
          alt="Industries We Serve"
          draggable="false"
          className="mt-8 mb-13 -ml-2 block h-auto w-[280px] max-w-full object-contain object-left sm:mb-7 sm:w-[340px] sm:-ml-9"
        />

        {/* Content grid */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-4">
          {/* Industry cards — separate full cards with Figma-style gaps */}
{/* Left side — complete Figma card image */}
<div className="min-w-0 w-full">
  <img
    src="/images/industries-cards.png"
    alt="Industries We Serve: FinTech and Banking, Insurance, E-commerce and Logistics, Real Estate, and Across Industries"
    draggable="false"
    className="block h-auto w-full object-contain object-left"
  />
</div>
          {/* Right-side Figma visual */}
          <div className="relative min-w-0 overflow-hidden rounded-[5px] lg:min-h-[440px]">
            <img
              src="/images/geolocation-industries-visual.png"
              alt="Geolocation verification illustration with a document, security checks and location-related objects"
              draggable="false"
              className="block h-full w-full object-contain object-center lg:absolute lg:inset-0 lg:object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeStandForSection() {
  const values = [
    {
      title: "Customer First",
      description:
        "We design solutions around real business challenges to deliver measurable value.",
      icon: "/images/A.png",
    },
    {
      title: "Innovation",
      description:
        "We continuously improve our platform to meet evolving technology and compliance needs.",
      icon: "/images/B.png",
    },
    {
      title: "Security",
      description:
        "We prioritise the protection of customer data through secure infrastructure and best practices.",
      icon: "/images/Layer 2.png",
    },
    {
      title: "Cleaner audit trails",
      description:
        "We strive to provide clear documentation, responsive support, and straightforward communication.",
      icon: "/images/Group 2147233609.png",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-white py-10 sm:py-14 lg:py-[60px]">
      <div aria-hidden="true" className="h-4 w-full bg-[#F0F0F0]" />

      {/* Main content container */}
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[10.7%]">

        {/* Section heading */}
        <img
          src="/images/What We Stand For.png"
          alt="What We Stand For"
          draggable="false"
          className="mt-8 mb-2 block h-auto w-[280px] max-w-full object-contain object-left sm:w-[360px] lg:-ml-8"
        />

        {/* Description */}
        <p className="mt-4 max-w-full text-left text-[13px] font-normal leading-[1.4] text-[#626262] lg:-ml-8">
          Our values guide how we build, serve, and grow with our customers.
        </p>

        {/* Four value cards */}
        <div className="mt-10 grid w-full grid-cols-1 justify-items-stretch gap-7 sm:grid-cols-2 lg:mt-[42px] lg:-ml-8 lg:w-[calc(100%+2rem)] lg:grid-cols-4 lg:gap-0">
          {values.map((value, index) => (
            <article
              key={value.title}
              className={`flex w-full min-w-0 flex-col items-start justify-self-stretch px-0 py-1 text-left lg:px-[18px] ${
                index !== 0
                  ? "lg:border-l lg:border-[#DDDDDD]"
                  : ""
              }`}
            >
              <img
                src={value.icon}
                alt=""
                aria-hidden="true"
                draggable="false"
                className="mb-[18px] h-[36px] w-[36px] shrink-0 self-start object-contain"
              />

              <h3 className="m-0 w-full text-left text-[14px] font-semibold leading-[1.3] text-[#252525]">
                {value.title}
              </h3>

              <p className="mt-[10px] w-full max-w-[230px] text-left text-[12px] font-normal leading-[1.35] text-[#78869E]">
                {value.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

function AboutUsGetStartedSection() {
  return (
    <section
      aria-labelledby="about-get-started-heading"
      className="
        w-full bg-white
        px-4 py-8
        sm:px-6 sm:py-10
        min-[1100px]:px-0
        min-[1100px]:py-[40px]
      "
    >
      <div
        className="
          relative isolate mx-auto
          w-full max-w-[1520px]
          overflow-hidden rounded-[12px]
          bg-[linear-gradient(105deg,#6545FF_0%,#8D72FF_52%,#6545FF_100%)]
          min-[1100px]:w-[80%]
          min-[1100px]:aspect-[1520/340]
          min-[1100px]:min-h-[0px]
        "
      >
        {/* Supplied Figma background visual */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 hidden! min-[1100px]:block!"
        >      
<img
  src="/images/about-us-get-started-visual.png"
  alt=""
  aria-hidden="true"
  draggable="false"
  className="
    pointer-events-none absolute inset-0 z-0
    hidden min-[1100px]:block
    h-[108%] w-full object-fill
  "
/>

        </div>

        {/* Heading, description and CTA */}
        <div
          className="
            relative z-10 flex w-full flex-col
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
          <div className="w-full min-[1100px]:w-[58%]">
            <h2
              id="about-get-started-heading"
              className="
                m-0 max-w-[750px]
                text-[26px] font-semibold
                leading-[1.08] tracking-[-0.04em]
                text-white
                sm:text-[34px]
                min-[1100px]:text-[clamp(34px,2.8vw,54px)]
              "
            >
              Let's Build Digital Trust Together
            </h2>

            <p
              className="
                m-0 mt-3 max-w-[670px]
                text-[15px] font-normal
                leading-[1.3] text-white
                min-[1100px]:mt-[10px]
                min-[1100px]:text-[clamp(13px,1vw,13px)]
                min-[1100px]:leading-[1.25]
              "
            >
              Whether you're launching a fintech product, scaling a marketplace,
              or streamlining employee verification, SmartVerify provides the
              technology to help you verify identities efficiently and safely.
              <br />
              Our team is committed to helping businesses integrate verification
              solutions that improve operational efficiency, reduce fraud risks,
              and create trusted digital experiences.
            </p>

            <CtaImageButton
              href="#contact"
              label="Book a Demo"
              image="/images/book-demo.png"
              hoverText="Book a Demo"
              variant="demo"
              showArrow
              className="
                mt-5 w-[184px] shrink-0
                sm:w-[195px]
                min-[1100px]:mt-[14px]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function AboutUsFaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
}
export default function AboutUsPage() {
  return (
    <>
      <AboutUsHeroSection />
      <WeAtSmartVerify />
      <VerificationSolutionsSection />
      <WhyChooseSmartVerifySection />
      <GeolocationIndustriesSection />
      <WhatWeStandForSection />
      <AboutUsGetStartedSection />
      <AboutUsFaqSection />
      <FooterSection />
    </>
  );
}