import { useState } from "react";
import CtaImageButton from "../../components/shared/CtaImageButton.jsx";
import FooterSection from "../../sections/FooterSection.jsx";
import IdentityIndustryIcon from "../../components/shared/IdentityIndustryIcon.jsx";
function IdentityVerificationHero() {
  const description =
    "Modern businesses need verification that is fast, accurate, and reliable. SmartVerify's Identity Verification APIs help organisations instantly validate customer identities, minimising manual effort while strengthening fraud prevention and compliance. Whether you're onboarding users, approving loans, or validating account holders, our APIs deliver verified data in minutes.";

  return (
    <section
      id="identity-verification-hero"
      aria-label="Identity Verification API"
      className="relative isolate w-full overflow-hidden bg-white min-[1100px]:min-h-[782px]"
    >
      {/* Background gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-white"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 -z-10 w-[18%] bg-[linear-gradient(90deg,rgba(244,77,137,0.20),transparent)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[65%] w-[30%] bg-[radial-gradient(ellipse_at_bottom_left,rgba(244,77,137,0.22),transparent_72%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-[26%] bg-[linear-gradient(90deg,transparent,rgba(139,104,255,0.24))]"
      />

      {/* Main layout */}
      <div
        className="
          relative mx-auto mt-14
          w-[88%] py-10
          min-[1100px]:mt-14
          min-[1100px]:min-h-[782px]
          min-[1100px]:w-full
          min-[1100px]:py-0
        "
      >
        {/* Heading, manually written description and buttons */}
        <div
          className="
            relative z-10 flex max-w-[680px]
            flex-col items-start
            min-[1100px]:absolute
            min-[1100px]:left-[5.4%]
            min-[1100px]:top-[24%]
            min-[1100px]:w-[min(42vw,652px)]
          "
        >
          <h1
            id="identity-verification-hero-title"
            className="m-0 w-full max-w-[620px] min-[1100px]:w-[min(39vw,610px)]"
          >
            <img
              src="/images/identity-verification-hero-heading.png"
              alt="Verify Customer Identities Faster with Our Identity Verification API"
              draggable="false"
              fetchPriority="high"
              className="block h-auto w-full"
            />
          </h1>

          {/* One description for all screen sizes */}
          <p
            className="
              mt-5 block w-full
              text-[13px] leading-[1.4]
              text-[#666666]
              min-[640px]:text-[14px]
              min-[1100px]:mt-7
              min-[1100px]:w-[min(33vw,530px)]
              min-[1100px]:max-w-[530px]
              min-[1100px]:text-[15px]
              min-[1100px]:leading-[1.45]
            "
          >
            {description}
          </p>

          {/* CTA buttons */}
          <div
            className="
              mt-7 flex w-full flex-col
              items-center justify-center gap-4
              min-[640px]:flex-row
              min-[640px]:items-center
              min-[640px]:gap-6
              min-[1100px]:mt-9
              min-[1100px]:justify-start
              min-[1100px]:gap-[24px]
            "
          >
            <CtaImageButton
              href="#documentation"
              label="View Documentation"
              image="/images/view-documentation.png"
              hoverText="View Documentation"
              variant="docs"
              className="w-full max-w-[210px] shrink-0 min-[640px]:w-[255px] min-[640px]:max-w-none"
            />

            <CtaImageButton
              href="#contact"
              label="Book a Demo"
              image="/images/book-demo.png"
              hoverText="Book a Demo"
              variant="demo"
              showArrow
              className="w-[210px] shrink-0 min-[1100px]:w-[min(18.3vw,261px)]"
            />
          </div>
        </div>

        {/* Desktop hero illustration only */}
        <img
          src="/images/identity-verification-hero-visual.png"
          alt="Customer face verification on a mobile phone, with identity document cards and verification status panels."
          draggable="false"
          fetchPriority="high"
          className="
            relative left-1/2 mt-10 block h-auto w-[112%]
            max-w-none -translate-x-1/2 translate-y-8 -mb-11
            object-contain
            min-[1100px]:absolute
            min-[1100px]:left-auto
            min-[1100px]:right-[5.3%]
            min-[1100px]:top-[56%]
            min-[1100px]:mx-0
            min-[1100px]:mt-0
            min-[1100px]:w-[min(42vw,800px)]
            min-[1100px]:max-w-none
            min-[1100px]:translate-x-0
            min-[1100px]:-translate-y-[50%]
          "
        />
      </div>
    </section>
  );
}
const identityVerificationApis = [
  {
    title: "PAN Basic V1",
    description:
      "verifies whether a PAN number is valid and active. Use this as a first-pass filter before you run deeper checks, so you don't waste resources on check numbers that don't exist.",
  },
  {
    title: "PAN Details V1",
    description:
      "retrieves the cardholder name, date of birth, and PAN status. That’s enough data for you to compare with what the user entered at sign-up to catch typos and impersonation attempts early.",
  },
  {
    title: "PAN Details Plus",
    description:
      "is a better version of PAN Details V1 that adds additional data such as Aadhaar-seeding status and masked personal information. Businesses that do loan or investment onboarding leverage this to get a more complete view of identity without asking users for more documents.",
  },
  {
    title: "PAN Aadhaar Link Validation",
    description:
      "is used to check whether a user's PAN is linked to Aadhaar. It is a mandatory requirement for various financial and tax-related transactions in India. This check, if missed, can result in onboarded users with PANs being flagged as inactive down the line.",
  },
  {
    title: "PAN to Masked Aadhaar",
    description:
      "retrieves the masked Aadhaar number tied to a given PAN. It is intended for cases where Aadhaar-linked verification is needed without collecting and storing the full Aadhaar number and hence ensures that the data collection is kept at the minimum possible.",
  },
  {
    title: "PAN 206AB Compliance Check",
    description:
      "verifies if a PAN is applicable under Section 206AB to charge a higher TDS or TCS rate on non-filers of income tax returns. This is used by finance and payroll teams to automatically apply the correct deduction rates, instead of manually cross-checking tax notices.",
  },
  {
    title: "Voter ID validation",
    description:
      "Is used to verify the Voter ID (EPIC) numbers with the database of the Election Commission. For firms that accept the voter ID as a valid identity proof along with PAN or Aadhaar, it is a useful additional document for verification.",
  },
  {
    title: "Passport validation",
    description:
      "Is used to validate passport details for users who provide it as an identity or address proof. It is common in travel, real estate, and international onboarding where a PAN or Aadhaar by itself doesn’t suffice as a requirement.",
  },
  {
    title: "DL Validation",
    description:
      "checks driving licence details like issue and expiry dates. Logistics, staffing, and gig-economy platforms use this to verify a candidate actually has a valid licence before sending them driving-related work.",
  },
  {
    title: "Aadhaar to Masked PAN",
    description:
      "is the reverse of PAN to Masked Aadhaar. It returns the masked PAN associated with an Aadhaar number. This supports workflows that use Aadhaar as the primary document collected during onboarding",
  },
  {
    title: "The ITR check",
    description:
      "confirms whether a user or business has filed income tax returns for a given period. Lenders and B2B platforms use this to assess financial credibility before extending credit or entering a contract.",
  },
];

function IdentityVerificationApiExplorer() {
  return (
    <>
      <section
        id="identity-verification-apis"
        aria-labelledby="identity-verification-apis-heading"
        className="w-full bg-white"
      >
        <div
          className="
            mx-auto grid w-[88%] max-w-[1520px]
            grid-cols-1 gap-8 pb-10 pt-10
            sm:gap-10 sm:pb-14 sm:pt-12
            min-[1100px]:w-[80%]
            min-[1100px]:grid-cols-[minmax(0,587px)_minmax(0,1fr)]
            min-[1100px]:gap-x-[52px]
            min-[1100px]:items-start
            min-[1100px]:pb-0
            min-[1100px]:pt-[72px]
          "
        >
          {/* Left content */}
          <div
            className="
              min-w-0 self-start
              min-[1100px]:sticky
              min-[1100px]:top-[128px]
            "
          >
            {/* Figma-exported heading */}
            <h2
              id="identity-verification-apis-heading"
              className="m-0 w-full max-w-[587px]"
            >
              <img
                src="/images/identity-verification-apis-heading.png"
                alt="Explore SmartVerify's Identity Verification API"
                draggable="false"
                className="block h-auto w-full"
              />
            </h2>

            {/* Description */}
            <p
              className="
                mt-6 max-w-[540px]
                text-[15px] leading-[1.3] text-[#414141]
                sm:mt-8 sm:text-[17px]
                min-[1100px]:mt-[66px]
                min-[1100px]:text-[20px]
                min-[1100px]:leading-[1.2]
              "
            >
              A single verification call rarely covers every case. Different
              documents, different use cases, and different compliance
              requirements call for different checks. Here's how SmartVerify's
              KYC verification APIs cover the full aspect
            </p>

            {/* Reuse the existing main-page Know More styling */}
            <a
              href="#identity-verification-apis-list"
              className="solutions-know-more mt-7 inline-flex sm:mt-8 min-[1100px]:mt-[58px]"
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

          {/* Right side: independently scrolling API list on desktop */}
          <div
            id="identity-verification-apis-list"
            className="min-w-0 min-[1100px]:mt-4"
          >
            <div
              className="
                grid grid-cols-1 gap-5
                sm:grid-cols-2 sm:gap-x-5 sm:gap-y-6
                min-[1100px]:gap-x-[40px]
                min-[1100px]:gap-y-[52px]
              "
            >
              {identityVerificationApis.map((api) => (
                <article
                  key={api.title}
                  className="
                    flex min-w-0 min-h-[250px] flex-col
                    rounded-[6px] border border-[#B7A5EF]
                    bg-white p-6
                    sm:min-h-[290px] sm:p-6
                    min-[1100px]:min-h-[382px]
                    min-[1100px]:p-[30px]
                  "
                >
                  {/* API title */}
                  <h3
                    className="
                      m-0 text-[19px] font-normal leading-[1.3]
                      text-[#7E68D8]
                      min-[1100px]:text-[24px]
                      min-[1100px]:leading-[1.25]
                    "
                  >
                    {api.title}
                  </h3>

                  {/* API description */}
                  <p
                    className="
                      mt-[18px] text-[15px] leading-[1.25]
                      text-[#555555]
                      min-[1100px]:text-[20px]
                      min-[1100px]:leading-[1.2]
                    "
                  >
                    {api.description}
                  </p>

                  {/* Read more link */}
                  <a
                    href="#contact"
                    aria-label={`Read more about ${api.title}`}
                    className="
                      mt-auto inline-flex w-fit items-center gap-[14px]
                      pt-7 text-[16px] text-[#8069D8]
                      transition-colors hover:text-[#EC3069]
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-[#8069D8]
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

      {/* Grey gap before the next section */}
      <div
        aria-hidden="true"
        className="h-2 w-full bg-[#F0F0F0]"
      />
    </>
  );
}
function IdentityVerificationIndustriesSection() {
 const industries = [
  {
    icon: "fintech",
    title: "FinTech & Lending Platforms",
    description:
      "Speed up loan approvals without slowing down risk checks.",
  },
  {
    icon: "banking",
    title: "Banking & Financial Services",
    description:
      "Meet all RBI and regulatory documentation standards and reduce onboarding time.",
  },
  {
    icon: "staffing",
    title: "Staffing & Recruitment",
    description:
      "Verify the identity of candidates before background checks.",
  },
  {
    icon: "insurance",
    title: "Insurance Providers",
    description:
      "Automate policyholder verification at signup and claims, no manual back-and-forth.",
  },
  {
    icon: "ecommerce",
    title: "E-commerce & Marketplaces",
    description:
      "Easily onboard sellers and high-value buyers.",
  },
];

  return (
    <section
      id="identity-verification-industries"
      aria-label="Identity verification use cases across industries"
      className="w-full overflow-hidden bg-white"
    >
      {/* Grey gap between the previous and current sections */}
      <div
        aria-hidden="true"
        className="h-6 w-full bg-[#F0F0F0]"
      />
      {/* Section heading */}
<div className="mx-auto mt-4 mb-0 w-[85%] max-w-[1200px] pt-8 pb-1 sm:mt-6 sm:mb-3 sm:pt-10 ">
  <img
    src="/images/identity-verification-industries-heading.png"
    alt="See Who’s Using SmartVerify"
    draggable="false"
    className="block h-auto w-[min(100%,340px)]"
  />
</div>
      {/* Desktop: exact exported Figma composition */}
      <div className="mx-auto hidden w-[76%] max-w-[1200px] min-[900px]:block">
        <img
          src="/images/identity-verification-industries-composition.png"
          alt="Identity verification use cases for FinTech and lending, banking, staffing and recruitment, insurance, and e-commerce, alongside a digital document verification illustration."
          draggable="false"
          loading="lazy"
          className="block h-auto w-full"
        />
      </div>

      {/* Mobile and tablet: readable cards and illustration */}
      <div className="mx-auto flex w-[84%] max-w-[540px] flex-col gap-4 pt-3 pb-8 min-[900px]:hidden">
        <div className="flex flex-col gap-3">
          {industries.map((industry) => (
<article
  key={industry.title}
  className="flex items-center gap-3 rounded-[10px] border border-[#D3CCFF] bg-white px-3 py-4 sm:gap-4 sm:px-5 sm:py-5"
>
    <IdentityIndustryIcon type={industry.icon} />

    <div className="min-w-0 flex-1">
      <h3 className="text-[16px] font-medium leading-snug text-[#111827] sm:text-[19px]">
        {industry.title}
      </h3>

      <p className="mt-2 text-[13px] leading-[1.4] text-[#292929] sm:text-[16px]">
        {industry.description}
      </p>
    </div>
  </article>
))}

        </div>

{/* Mobile: show only the illustration from the combined export */}
<div
  role="img"
  aria-label="Digital identity documents and secure verification illustration"
  className="mx-auto aspect-square w-full max-w-[390px] overflow-hidden rounded-[12px] bg-white bg-[url('/images/identity-verification-industries-composition.png')] bg-[length:auto_100%] bg-[position:100%_center] bg-no-repeat"
/>
      </div>
    </section>
  );
}
function IdentityVerificationKycFlowSection() {
  const cards = [
    {
      image: "/images/identity-kyc-flow-card-1.png",
      alt: "Quick document validation using PAN, Aadhaar, or Voter ID at signup.",
    },
    {
      image: "/images/identity-kyc-flow-card-2.png",
      alt: "Deeper checks like PAN Details Plus or ITR Check for users crossing a transaction or credit threshold.",
    },
    {
      image: "/images/identity-kyc-flow-card-3.png",
      alt: "Biometric and liveness checks for high-risk actions, like large withdrawals or account recovery.",
    },
  ];

  return (
    <section
      id="identity-verification-kyc-flow"
      aria-labelledby="identity-verification-kyc-flow-title"
      className="w-full overflow-hidden bg-white"
    >
      {/* Grey separator between sections */}
      <div
        aria-hidden="true"
        className="h-6 w-full bg-[#F0F0F0]"
      />

      <div className="mx-auto w-[88%] max-w-[1536px] pb-12 pt-10 sm:pb-14 sm:pt-12 min-[1100px]:w-[80%] min-[1100px]:pb-[64px] min-[1100px]:pt-12">

        {/* Heading */}
        <div className="w-full min-[900px]:translate-x-7">
        <h2
          id="identity-verification-kyc-flow-title"
          className="m-0 w-full max-w-[650px]"
        >
          <img
            src="/images/identity-kyc-flow-heading.png"
            alt="Building a KYC Flow That Doesn't Slow Users Down"
            draggable="false"
            className="block h-auto w-full"
          />
        </h2>

        {/* Section description */}
        <p className="mt-5 max-w-[650px] text-[14px] leading-[1.4] text-[#555555] sm:text-[15px] min-[1100px]:mt-6">
          The businesses that get the most out of KYC verification don't run
          every check on every user. They tier it:
        </p>
      </div>

        {/* Three Figma-exported cards */}
        <div className="mx-auto mt-7 grid w-[94%] grid-cols-1 items-start gap-4 min-[640px]:grid-cols-3 min-[640px]:gap-3 min-[1100px]:mt-8 min-[1100px]:gap-6">
  {cards.map((card) => (
    <article key={card.image} className="min-w-0">
      <img
        src={card.image}
        alt={card.alt}
        draggable="false"
        loading="lazy"
        className="block h-auto w-full"
      />
    </article>
  ))}
</div>

      </div>
    </section>
  );
}
function IdentityVerificationWhyBusinessesSection() {
  return (
    <section
      aria-labelledby="identity-verification-why-businesses-title"
      className="w-full bg-white"
    >
      {/* Grey gap between sections */}
      <div
        aria-hidden="true"
        className="h-6 w-full bg-[#F0F0F0]"
      />

      {/* Visual and content */}
      <div className="relative flex w-full flex-col">
        {/* Text content */}
        <div className="order-1 mx-auto w-[88%] py-10 md:absolute md:left-[10%] md:top-[19%] md:z-10 md:mx-0 md:w-[min(30vw,560px)] md:p-0">
          <h2
            id="identity-verification-why-businesses-title"
            className="m-0 w-full max-w-[604px]"
          >
            <img
              src="/images/identity-verification-why-businesses-heading.png"
              alt="Why Businesses Choose SmartVerify for Identity Verification"
              draggable="false"
              className="block h-auto w-full"
            />
          </h2>

          <p className="mt-5 max-w-[540px] text-[13px] leading-[1.4] text-[#555555] md:mt-6 md:text-[14px]">
            We help businesses verify customer identities quickly and safely
            with automated APIs. Validate identity details and match
            information with trusted data sources without relying on manual
            checks. With simple APIs, clear documentation, and a sandbox,
            businesses can easily add identity verification to onboarding
            and KYC workflows.
          </p>

          {/* Existing Know More button styling */}
          <a
            href="#identity-verification-kyc-flow-title"
            className="solutions-know-more mt-5 inline-flex"
          >
            Know More
            <svg
              className="solutions-know-more__arrow"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 12h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="m13 6 6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Single visual image — preserves the full image */}
        <img
          src="/images/identity-verification-why-businesses-visual.png"
          alt="Customer identity verification with SmartVerify"
          draggable="false"
          className="order-2 ml-auto block h-auto w-full md:w-[90%]"
        />
      </div>
    </section>
  );
}
function IdentityVerificationSeamlessVerificationSection() {
  return (
    <section className="w-full bg-white py-6 sm:py-8">
      <div className="mx-auto w-[88%] max-w-[1536px] min-[768px]:w-[80%]">
        <div className="relative isolate min-h-[320px] overflow-hidden rounded-[10px] bg-gradient-to-r from-[#6847FF] to-[#8964FF] md:min-h-[300px] min-[1100px]:aspect-[1520/399] min-[1100px]:min-h-0">
          {/* Figma background with verification illustrations */}
          <img
            src="/images/identity-verification-seamless-bg.png"
            alt=""
            aria-hidden="true"
            draggable="false"
            className="pointer-events-none absolute inset-0 h-[108%] w-full object-cover object-left min-[1100px]:object-fill"
          />

          {/* Text and CTA */}
          <div className="relative z-10 flex min-h-[320px] w-full flex-col items-start justify-center px-5 py-7 sm:px-8 md:min-h-[300px] md:w-[72%] md:px-9 min-[1100px]:h-full min-[1100px]:min-h-0 min-[1100px]:w-[66%] min-[1100px]:px-[clamp(28px,2vw,40px)] min-[1100px]:py-5">
            {/* Heading image */}
            <h2 className="m-0 w-full max-w-[650px]">
              <img
                src="/images/identity-verification-seamless-heading.png"
                alt="Start Your Seamless Verification Journey"
                draggable="false"
                className="block h-auto w-full"
              />
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-[700px] text-[12px] leading-[1.35] text-white/90 min-[1100px]:mt-4 min-[1100px]:text-[clamp(10px,0.8vw,13px)]">
              The business environment today demands swift customer
              onboarding, and manual KYC simply cannot keep pace, and it’s too
              vulnerable to forged documents. An API-driven approach validates
              PAN, Aadhaar, Voter ID, Passport and Driving Licence data against
              live government sources in seconds, to give you both speed and a
              documented compliance trail.
            </p>

            {/* Existing Book a Demo CTA */}
            <CtaImageButton
              href="#contact"
              label="Book a Demo"
              image="/images/book-demo.png"
              hoverText="Book a Demo"
              variant="demo"
              showArrow
              className="mt-4 w-[191px] shrink-0 overflow-hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function IdentityVerificationFaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What's the difference between KYC and identity verification?",
      answer:
        "KYC is the broader process businesses use to establish customer identity and assess onboarding risk. Identity verification is one part of KYC that focuses on validating identity details and documents.",
    },
    {
      question:
        "Which document should businesses verify first, PAN or Aadhaar?",
      answer:
        "It depends on your onboarding workflow and applicable requirements. PAN can support tax and identity checks, while Aadhaar-based verification should be performed through an appropriate method where legally permitted.",
    },
    {
      question:
        "Can identity verification APIs work without storing sensitive user data?",
      answer:
        "Yes, verification workflows can be designed to minimize the retention of sensitive information. Data collection, processing, consent and retention should align with your security policies and applicable requirements.",
    },
    {
      question:
        "Does the PAN 206AB Compliance Check only apply to large enterprises?",
      answer:
        "Applicability depends on the relevant tax requirements and your workflow, not just business size. Confirm the current rules with your tax or compliance team before relying on this check.",
    },
    {
      question: "How long does an API-based KYC check take?",
      answer:
        "Many API-based verification checks return results within seconds. Actual response times depend on the verification type, external data sources, network conditions and any additional checks required.",
    },
    {
      question:
        "How is SmartVerify different from other verification providers?",
      answer:
        "SmartVerify brings identity and document verification workflows together through APIs, supported by integration documentation and a sandbox for testing. Compare providers based on verification coverage, integration needs, performance and compliance requirements.",
    },
  ];

  return (
    <section
      aria-labelledby="identity-verification-faq-title"
      className="w-full overflow-hidden bg-[radial-gradient(ellipse_at_52%_50%,rgba(151,129,255,0.95)_0%,rgba(151,129,255,0.38)_32%,rgba(151,129,255,0)_68%),linear-gradient(110deg,#6042ff_0%,#6b4fff_100%)]"
    >
      <div
        className="
          mx-auto grid w-[88%] max-w-[1500px]
          grid-cols-1 gap-8 py-10
          sm:gap-10 sm:py-14
          min-[1100px]:min-h-[610px]
          min-[1100px]:w-[80%]
          min-[1100px]:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)]
          min-[1100px]:items-start
          min-[1100px]:gap-x-[9.7vw]
          min-[1100px]:py-[109px]
        "
      >
        {/* Left: FAQ heading */}
        <div>
          <h2
            id="identity-verification-faq-title"
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
            const answerId = `identity-verification-faq-answer-${index}`;

            return (
              <div
                key={faq.question}
                className="min-w-0 rounded-[4px] border border-white/80"
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
                    text-[15px] font-normal leading-[1.4] text-white
                    transition-colors hover:bg-white/[0.08]
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

                  {/* Figma-style downward triangle */}
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

                {/* Expandable answer */}
                {isOpen && (
                  <div
                    id={answerId}
                    className="
                      border-t border-white/30
                      px-4 pb-5 pt-4
                      text-[14px] leading-[1.65] text-white/90
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
function IdentityVerificationPage() {
  return (
    <main className="w-full">
      <IdentityVerificationHero />
      <IdentityVerificationApiExplorer />
      <IdentityVerificationIndustriesSection />
      <IdentityVerificationKycFlowSection />
      <IdentityVerificationWhyBusinessesSection />
      <IdentityVerificationSeamlessVerificationSection />
      <IdentityVerificationFaqSection />
      <FooterSection />
    </main>
  );
}

export default IdentityVerificationPage;