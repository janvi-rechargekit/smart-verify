import { useState } from "react";

import CtaImageButton from "../../components/shared/CtaImageButton.jsx";
import FooterSection from "../../sections/FooterSection.jsx";

function BankAccountVerificationPage() {
  const description =
    "Bank account verification is a critical step in digital onboarding, payouts, lending, and compliance. SmartVerify's Bank Account Verification API enables businesses to instantly validate account details, confirm account ownership, and reduce payment failures through secure, real-time verification.";

  return (
    <main className="bank-account-verification-page">
      <section className="bank-account-verification-hero hero-background">
        <div className="bank-account-verification-hero__inner">

          {/* Heading, description and CTA buttons */}
          <div
            className="
              bank-account-verification-hero__content
              flex flex-col items-start
              max-[899px]:w-full
              max-[899px]:px-5
              max-[899px]:pt-8
            "
          >
            <h1 className="sr-only">
              Bank Account Verification API: Confirm Ownership Before You Pay
            </h1>

            <img
              src="/images/bav-heading.png"
              alt="Bank Account Verification API: Confirm Ownership Before You Pay"
              className="bank-account-verification-hero__heading"
              draggable="false"
            />

            {/* Manually written description for all screen sizes */}
            <p
              className="
                bank-account-verification-hero__description
                max-[899px]:mt-4
                max-[899px]:w-full
                max-[899px]:max-w-none
                max-[899px]:text-[14px]
                max-[899px]:leading-[1.45]
                max-[899px]:text-[#666666]
              "
            >
              {description}
            </p>

            {/* Existing CTA buttons */}
            <div
            className="
              mt-6 flex w-full flex-col items-center justify-center gap-3
              sm:flex-row sm:flex-wrap sm:items-center sm:gap-4
              min-[1100px]:mt-[36px]
              min-[1100px]:w-fit
              min-[1100px]:flex-nowrap
              min-[1100px]:justify-start
              min-[1100px]:gap-[24px]"
          >

              <CtaImageButton
              href="#documentation"
              label="View Documentation"
              image="/images/view-documentation.png"
              hoverText="View Documentation"
              variant="docs"
              className="
                w-full max-w-[280px] shrink-0
                sm:w-[240px] sm:max-w-none
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
                w-full max-w-[280px] shrink-0
                sm:w-[210px] sm:max-w-none
                min-[1100px]:w-[min(21vw,300px)]
              "
              />
            </div>
          </div>

          {/* Hero visual */}
          <div
            className="
              bank-account-verification-hero__visual-wrap
              max-[899px]:mt-6
              max-[899px]:flex
              max-[899px]:w-full
              max-[899px]:items-end
              max-[899px]:justify-center
              max-[899px]:self-end
              max-[899px]:overflow-hidden
              max-[899px]:!pb-0
              max-[899px]:-mb-8
            "
          >
            <img
              src="/images/bav-hero-visual.png"
              alt="A customer using a smartphone beside a payment-success screen and bank card."
              className="
                bank-account-verification-hero__visual
                max-[899px]:block
                max-[899px]:h-auto
                max-[899px]:w-full
                max-[899px]:max-w-none
                max-[899px]:object-contain
                max-[899px]:object-bottom
                max-[899px]:!mb-0
              "
              draggable="false"
            />
          </div>

        </div>
      </section>

      <BankAccountVerificationIntro />
      <BankAccountVerificationBenefits />
      <BankAccountVerificationApis />
      <BankAccountVerificationWorkflow />
      <div className="section-separator" aria-hidden="true" />
      <BankAccountVerificationCta />
      <BankAccountVerificationFaq />
      <FooterSection />
    </main>
  );
}
function BankAccountVerificationIntro() {
  return (
    <>
      {/* Reuse the existing section gap */}
      <div
  className="section-separator bav-what-is-gap"
  aria-hidden="true"
/>
      <section className="bav-what-is">
        <div className="bav-what-is__inner">
          {/* Left: heading, explanation and use cases */}
          <div className="bav-what-is__content">
            <h2 className="sr-only">
              What Is Bank Account Verification?
            </h2>

            <img
              src="/images/bav-what-is-heading.png"
              alt=""
              aria-hidden="true"
              className="bav-what-is__heading"
              draggable="false"
            />

            <p className="bav-what-is__description">
              Bank account verification is the process of confirming
              that a bank account number is active and belongs to the
              person or business named on the transaction.
            </p>

            <ul className="bav-what-is__list">
              <li>Vendor and gig-worker payout setup</li>
              <li>
                Customer onboarding for lending and insurance
              </li>
              <li>
                Refund processing for e-commerce and marketplaces
              </li>
              <li>
                Loan disbursement and EMI account linking
              </li>
              <li>Payroll account additions</li>
            </ul>
          </div>

          {/* Right: original exported visual */}
          <div className="bav-what-is__visual-wrap">
            <img
              src="/images/bav-what-is-visual.png"
              alt="A business professional working on a laptop at a desk."
              className="bav-what-is__visual"
              draggable="false"
            />
          </div>
        </div>
      </section>
    </>
  );
}

const bavBenefitCards = [
  {
    id: "payouts",
    icon: "payouts",
    title: "Fewer failed payouts",
    description:
      "Catch invalid or closed accounts before you initiate a transfer, not after it bounces.",
  },
  {
    id: "fraud",
    icon: "fraud",
    title: "Less risk of fraud",
    description:
      "Before you make any money transfers, check that the account holder name is the name you have on file.",
  },
  {
    id: "onboarding",
    icon: "onboarding",
    title: "Faster onboarding",
    description:
      "Customers and vendors get added to your system without waiting on manual document review.",
  },
  {
    id: "compliance",
    icon: "compliance",
    title: "Compliance logs for cleaners",
    description:
      "All checks are recorded, giving you an audit trail for regulatory review.",
  },
  {
    id: "experience",
    icon: "experience",
    title: "Better customer experience",
    description:
      "Real-time checks mean fewer support tickets about delayed or failed payments.",
  },
];

function BavBenefitIcon({ type }) {
  const purple = "#4D3ECA";

  if (type === "payouts") {
    return (
      <svg viewBox="0 0 88 72" aria-hidden="true">
        <rect x="13" y="12" width="61" height="40" rx="7" fill={purple} opacity=".9" />
        <rect x="8" y="19" width="61" height="39" rx="6" fill={purple} />
        <circle cx="40" cy="38" r="7" fill="none" stroke="white" strokeWidth="2.5" />
        <path d="M20 38h-5M61 29h-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="70" cy="55" r="16" fill={purple} stroke="white" strokeWidth="3" />
        <path d="M70 46v11m0 5v1" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "fraud") {
    return (
      <svg viewBox="0 0 88 72" aria-hidden="true">
        <rect x="8" y="13" width="64" height="44" rx="8" fill={purple} />
        <path d="M9 27h62" stroke="white" strokeWidth="3" />
        <path d="M22 43h6" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <circle cx="55" cy="47" r="13" fill={purple} stroke="white" strokeWidth="3" />
        <path d="m64 57 8 8" stroke={purple} strokeWidth="6" strokeLinecap="round" />
        <path d="M55 40v9m0 4v1" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "onboarding") {
    return (
      <svg viewBox="0 0 88 72" aria-hidden="true">
        <rect x="8" y="15" width="70" height="43" rx="6" fill={purple} />
        <circle cx="28" cy="29" r="7" fill="none" stroke="white" strokeWidth="1.8" />
        <path d="M17 49v-7a11 11 0 0 1 22 0v7m-11-7v7" fill="none" stroke="white" strokeWidth="1.8" />
        <path d="M44 28h24M44 36h24M44 44h24" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="39" y="5" width="12" height="14" rx="3" fill={purple} stroke="white" strokeWidth="2" />
        <path d="m34 55 10 10 12-10-9-8-8 4-6-2" fill={purple} stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "compliance") {
    return (
      <svg viewBox="0 0 88 72" aria-hidden="true">
        <path d="M15 7h36l12 12v39H15z" fill={purple} />
        <path d="M51 7v13h12" fill="none" stroke="white" strokeWidth="1.6" />
        {[25, 35, 45].map((y) => (
          <g key={y}>
            <rect x="21" y={y - 3} width="7" height="7" rx="1" fill="none" stroke="white" strokeWidth="1.5" />
            <path d={`m22 ${y} 2 2 4-5`} fill="none" stroke="white" strokeWidth="1.3" />
            <path d={`M33 ${y}h19`} stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        ))}
        <circle cx="58" cy="49" r="13" fill={purple} stroke="white" strokeWidth="2" />
        <circle cx="58" cy="49" r="9" fill="none" stroke="white" strokeWidth="1.5" />
        <path d="m54 49 3 3 5-6m2 13 7 8" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 88 72" aria-hidden="true">
      <path d="m22 14 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill={purple} />
      <path d="m45 3 4 7 7 1-5 5 1 7-7-4-6 4 1-7-5-5 7-1z" fill={purple} />
      <path d="m66 14 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill={purple} />
      <circle cx="45" cy="37" r="11" fill={purple} />
      <path d="M25 64c0-12 8-19 20-19s20 7 20 19z" fill={purple} />
    </svg>
  );
}

function BankAccountVerificationBenefits() {
  return (
    <>
      <div
        className="section-separator bav-benefits-gap"
        aria-hidden="true"
      />

      <section className="bav-automated-benefits">
        <div className="bav-automated-benefits__inner">
          {/* Left: exported heading, description and existing button */}
          <div className="bav-automated-benefits__intro">
            <h2 className="sr-only">
              Why Businesses Need Automated Bank Account Verification
            </h2>

            <img
              src="/images/bav-automated-benefits-heading.png"
              alt=""
              aria-hidden="true"
              className="bav-automated-benefits__heading"
              draggable="false"
            />

            <p className="sr-only">
              Manual verification means asking customers to upload a
              cancelled cheque or a bank statement, then having someone
              on your team eyeball it. That process is slow, inconsistent,
              and still leaves room for error. An API-driven BAV check
              replaces all of that with a call that returns a verified
              name match in seconds.
            </p>

            <img
              src="/images/bav-automated-benefits-description.png"
              alt=""
              aria-hidden="true"
              className="bav-automated-benefits__description"
              draggable="false"
            />

            <a
              href="#contact"
              className="solutions-know-more"
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

          {/* Right: five separate benefit cards */}
          <div className="bav-automated-benefits__grid">
            {bavBenefitCards.map((card) => (
              <article
                key={card.id}
                className="bav-benefit-card"
              >
                <div className="bav-benefit-card__icon">
                  <BavBenefitIcon type={card.icon} />
                </div>

                <h3>{card.title}</h3>

                <p>{card.description}</p>

                <a
                  href="#contact"
                  className="bav-benefit-card__link"
                >
                  Read more
                  <svg viewBox="0 0 24 16" fill="none" aria-hidden="true">
                    <path
                      d="M2 8h18m-7-6 6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
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

      <div
        className="section-separator bav-benefits-gap"
        aria-hidden="true"
      />
    </>
  );
}

const bavApiProducts = [
  {
    id: "imps-penny-drop",
    number: "[01]",
    title: "BAV V2 - IMPS Penny Drop",
    image: "/images/bav-imps-penny-drop.png",
    description:
      "This is the classic penny-drop method. SmartVerify sends a token amount to the account via IMPS and reads back the registered account holder's name straight from the bank. It's a dependable way to confirm an account is live and correctly named, and it works for virtually any active savings or current account. Because it uses a real IMPS transfer, it also confirms the account can actually receive funds, not just that it exists on paper",

  },
  {
    id: "imps-penniless",
    number: "[02]",
    title: "BAV V2 - IMPS Penniless",
    image: "/images/bav-imps-penniless.png",
    description:
      "For businesses that want the same name-match confidence without moving even a token amount, the penniless variant checks the account through IMPS rails without a real transaction. It returns the account holder's name and account status, making it a faster and more cost-effective option for high-volume verification, such as bulk vendor or payroll uploads",
  },
  {
    id: "upi-penniless",
    number: "[03]",
    title: "BAV V2 - UPI Penniless",
    image: "/images/bav-upi-penniless.png",
    description:
      "This API verifies a bank account using its linked UPI ID or VPA instead of the raw account number and IFSC code. It's built for businesses collecting UPI handles at checkout or onboarding, like fintech apps, wallets, and marketplaces, and it confirms the registered name behind that UPI ID without initiating any payment. Given how widely UPI is used for everyday transfers, this API fits naturally into digital-first onboarding flows",
  },
  {
    id: "mobile-account-details",
    number: "[04]",
    title: "Mobile to Account Details",
    image: "/images/bav-mobile-account-details.png",
    description:
      "Sometimes all you have is a customer's mobile number, not their account details. This API accepts a registered mobile number and returns the linked bank account, if available. It’s particularly useful for the gig-economy and lending platforms that get a phone number upfront and need to verify payout details later, without asking the customer for another document",
  },
  {
    id: "pan-account-link",
    number: "[05]",
    title: "PAN Account Link",
    image: "/images/bav-pan-account-link.png",
    description:
      "This API checks if a PAN is linked to a particular bank account. This is helpful for compliance-heavy workflows like loan disbursement, tax refunds, or any other workflow where the regulations require matching the account with the PAN. It adds an extra layer of identity assurance beyond the usual account verification process to tie the financial account to a government-issued identity number", 
  },
];

function BankAccountVerificationApis() {
  const [activeId, setActiveId] = useState("imps-penny-drop");
  const [failedImages, setFailedImages] = useState([]);

  const activeProduct =
    bavApiProducts.find((product) => product.id === activeId) ||
    bavApiProducts[0];

  const imageFailed = failedImages.includes(activeProduct.id);

  function selectProduct(product) {
    setActiveId(product.id);
  }

  function handleImageError(productId) {
    setFailedImages((current) =>
      current.includes(productId) ? current : [...current, productId]
    );
  }

  return (
    <>
      <div
        className="section-separator bav-apis-gap"
        aria-hidden="true"
      />

      <section className="bav-apis">
        <div className="bav-apis__inner">
          {/* Section heading and intro */}
          <div className="bav-apis__top">
            <h2 className="sr-only">
              SmartVerify's Bank Account Verification APIs
            </h2>

            <img
              src="/images/bav-apis-heading.png"
              alt=""
              aria-hidden="true"
              className="bav-apis__heading"
              draggable="false"
            />

            <div className="bav-apis__intro">
  <p className="bav-apis__description">
    SmartVerify offers more than one way to verify a bank account,
    because not every business needs the same method. Some prefer
    a live money transfer to confirm an account is active, while
    others need a zero-cost, penniless check.
  </p>

  <a
    href="#bav-apis-list"
    className="solutions-know-more bav-apis__know-more"
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

          {/* Product list and selected API preview */}
          <div className="bav-apis__content">
            <div className="bav-apis__list-panel">
              <div className="bav-apis__list-heading">
                <h3>Our Products</h3>

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 4h13v15m-7-7 7 7 7-7"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div
                id="bav-apis-list"
                className="bav-apis__list"
                role="group"
                aria-label="Select a bank account verification API"
              >
                {bavApiProducts.map((product) => {
                  const isActive = product.id === activeId;

                  return (
                    <button
                      key={product.id}
                      type="button"
                      className={`bav-apis__item ${
                        isActive ? "is-active" : ""
                      }`}
                      aria-pressed={isActive}
                      onClick={() => selectProduct(product)}
                    >
                      <span className="bav-apis__number">
                        {product.number}
                      </span>
                      <span>{product.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Updates when an API is selected */}
            <article className="bav-apis__preview" aria-live="polite">
              <div className="bav-apis__visual">
                {!imageFailed ? (
                  <img
                    key={activeProduct.id}
                    src={activeProduct.image}
                    alt={`${activeProduct.title} illustration`}
                    className="bav-apis__preview-image"
                    draggable="false"
                    onError={() => handleImageError(activeProduct.id)}
                  />
                ) : (
                  <div className="bav-apis__image-fallback">
                    <div className="bav-apis__fallback-document">
                      <span>{activeProduct.title}</span>
                      <div className="bav-apis__fallback-lines" />
                      <div className="bav-apis__fallback-lines" />
                      <div className="bav-apis__fallback-lines" />
                    </div>

                    <div className="bav-apis__fallback-details">
                      <strong>Verification details</strong>
                      <span>Selected API</span>
                      <b>{activeProduct.title}</b>
                    </div>
                  </div>
                )}
              </div>

              <div className="bav-apis__preview-copy">
                <h3>{activeProduct.title}</h3>
                <p>{activeProduct.description}</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
  
function BankAccountVerificationWorkflow() {
  return (
    <section className="bav-workflow">
      <div className="bav-workflow__inner">
        {/* Left: heading, description and Know More */}
        <div className="bav-workflow__content">
          <h2 className="sr-only">
            How BAV Fits Into Your Workflow
          </h2>

          <img
            src="/images/bav-workflow-heading.png"
            alt=""
            aria-hidden="true"
            className="bav-workflow__heading"
            draggable="false"
          />

          <p className="sr-only">
            Most businesses don’t run BAV in a silo; it's one of the many
            checks run in addition to PAN verification, Aadhaar-based KYC,
            or GST validation as part of an overall onboarding or payout
            pipeline. A lending platform might combine PAN verification,
            income document OCR, and BAV V2 IMPS Penny Drop into a single
            onboarding flow, so a borrower's identity and payout account
            are verified before the loan is approved, for example.
          </p>

          <img
            src="/images/bav-workflow-description.png"
            alt=""
            aria-hidden="true"
            className="bav-workflow__description"
            draggable="false"
          />

          <a
            href="#contact"
            className="solutions-know-more"
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

        {/* Right: complete exported illustration */}
        <div className="bav-workflow__visual-wrap">
          <img
            src="/images/bav-workflow-visual.png"
            alt="Illustration of secure account verification across servers, cloud infrastructure, and security checks."
            className="bav-workflow__visual"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
}



function BankAccountVerificationCta() {
  return (
    <section className="w-full bg-white px-4 pt-3 pb-5 sm:px-0 sm:pt-5 sm:pb-6">
      {/* Centered card with equal space on both sides */}
      <div
        className="
          relative isolate mx-auto
          min-h-[300px] w-full max-w-[1520px]
          overflow-hidden rounded-[12px]
          bg-[linear-gradient(105deg,#6545ff_0%,#8b70ff_48%,#6847ff_100%)]
          sm:min-h-[340px] sm:w-[80%]
          min-[1100px]:aspect-[1520/360]
          min-[1100px]:min-h-0
          min-[1100px]:w-[72%]
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

        {/* Text content */}
        <div
          className="
            relative z-10 flex min-h-[300px]
            w-full flex-col items-start justify-center
            px-6 py-8
            sm:min-h-[340px] sm:px-8
            min-[750px]:px-8
            min-[1100px]:h-full
            min-[1100px]:min-h-0
            min-[1100px]:w-[64%]
            min-[1100px]:px-[4.2%]
            min-[1100px]:py-6
          "
        >
          {/* Heading */}
          <h2 className="m-0 w-full max-w-[733px]">
            <img
              src="/images/bav-get-started-heading.png"
              alt="Get Started with SmartVerify's Bank Account Verification API"
              draggable="false"
              className="block h-auto w-full"
            />
          </h2>

          {/* Manually written description */}
          <p
            className="
              mt-4 max-w-[780px]
              text-[13px] leading-[1.4] text-white
              sm:text-[14px]
              min-[1100px]:mt-5
              min-[1100px]:text-[clamp(14px,1.05vw,20px)]
              min-[1100px]:leading-[1.2]
            "
          >
            SmartVerify provides a sandbox environment where you can test
            each Bank Account Verification endpoint with sample data
            before going live.
          </p>

          {/* Existing Book a Demo button */}
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
    </section>
  );
}


const bavFaqItems = [
  {
    question:
      "What's the difference between penny drop and penniless verification?",
    answer:
      "Penny Drop sends a real (small) transfer to confirm the account is active and correctly named. Penniless verification checks the same details without moving any money, which makes it faster and cheaper for high-volume checks.",
  },
  {
    question:
      "Can I verify a bank account using only a UPI ID?",
    answer:
      "Yes. The BAV V2 - UPI Penniless API validates an account by the linked UPI ID or VPA and doesn’t need a raw account number and IFSC code.",
  },
  {
    question:
      "How fast is a typical bank account verification response?",
    answer:
      "Most BAV checks are back in seconds because they are taken directly from bank records, not from a manual review.",
  },
  {
    question:
      "Do I need a customer's PAN for standard bank account verification?",
    answer:
      "No. Standard BAV checks (penny drop, penniless, UPI) only need account or UPI details. PAN is only required for the PAN Account Link API, which is meant for PAN-specific compliance checks.",
  },
  {
    question:
      "Is bank account verification required by regulation?",
    answer:
      "Requirements vary by industry and use case, but many regulated sectors, including lending and insurance, treat account-holder verification as a standard part of due diligence before disbursing funds.",
  },
];

function BankAccountVerificationFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      className="
        w-full overflow-hidden
        bg-[linear-gradient(105deg,#603DFF_0%,#8971FF_48%,#603DFF_100%)]
        px-5 py-14
        sm:px-8 sm:py-16
        lg:px-0 lg:py-20
      "
      aria-label="Bank Account Verification frequently asked questions"
    >
      <div
        className="
          mx-auto grid w-full max-w-[1512px]
          grid-cols-1 gap-9
          lg:w-[80%]
          lg:grid-cols-[0.9fr_1.1fr]
          lg:items-start
          lg:gap-12
        "
      >
        {/* LEFT: FAQ Heading */}
        <div>
          <h2
            className="
              max-w-[500px]
              text-[36px] font-semibold
              leading-[1.12]
              tracking-[-0.045em]
              text-white
              sm:text-[44px]
              lg:text-[clamp(38px,4vw,64px)]
            "
          >
            Frequently Asked
            <br />
            Questions
          </h2>
        </div>

        {/* RIGHT: FAQ Accordion */}
        <div className="ml-auto flex w-full max-w-[760px] flex-col gap-[14px]">
          {bavFaqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `bav-faq-answer-${index}`;

            return (
              <div
                key={index}
                className="
                  w-full overflow-hidden
                  rounded-[5px]
                  border border-white/60
                  bg-transparent
                  transition-colors duration-200
                "
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="
                    flex min-h-[70px] w-full
                    items-center justify-between
                    gap-4 px-5 py-5
                    text-left
                    text-[15px] font-medium
                    leading-[1.5]
                    text-white
                    transition-colors duration-200
                    hover:bg-white/10
                    sm:px-6 sm:text-[17px]
                    lg:px-7 lg:text-[19px]
                  "
                >
                  <span className="min-w-0 flex-1">
                    {item.question}
                  </span>

                  {/* Dropdown Arrow */}
                  <svg
                    className={`
                      h-5 w-5 shrink-0
                      text-white
                      transition-transform duration-300
                      ${isOpen ? "rotate-180" : ""}
                    `}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M4 7l6 6 6-6H4z" />
                  </svg>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div
                    id={answerId}
                    className="
                      border-t border-white/40
                      px-5 pb-5 pt-4
                      sm:px-6 sm:pb-6
                      lg:px-7
                    "
                  >
                    <p
                      className="
                        text-[14px] font-normal
                        leading-[1.7]
                        text-white/90
                        sm:text-[15px]
                        lg:text-[16px]
                      "
                    >
                      {item.answer}
                    </p>
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


export default BankAccountVerificationPage;