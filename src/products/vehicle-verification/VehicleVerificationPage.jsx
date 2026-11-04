import { useState } from "react";
import CtaImageButton from "../../components/shared/CtaImageButton.jsx";
import FooterSection from "../../sections/FooterSection.jsx";function VehicleVerificationHero() {
  return (
    <section
      id="vehicle-verification-hero"
      aria-labelledby="vehicle-verification-heading"
      className="
        relative isolate w-full overflow-hidden bg-white
        min-[1100px]:h-[min(42.2vw,809px)]
        min-[1100px]:min-h-[680px]
      "
    >
      {/* Exact Figma background */}
      <img
        src="/images/vehicle-verification-hero-background.png"
        alt=""
        aria-hidden="true"
        draggable="false"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-fill"
      />

      {/* Desktop-only vehicle illustration */}
<div className="pointer-events-none absolute inset-0 z-0 hidden min-[1100px]:block">
  <img
    src="/images/vehicle-verification-hero-visual.png"
    alt=""
    aria-hidden="true"
    draggable="false"
    className="
      absolute right-[12%] top-1/2 h-auto w-[min(33vw,630px)]
      max-w-none -translate-y-1/2 object-contain
      min-[1100px]:top-[calc(50%+56px)]
      min-[1100px]:scale-y-[1.14]
    "
  />
</div>

      {/* Main content */}
      <div
        className="
          relative z-10 mx-auto flex w-[88%] max-w-[1520px]
          flex-col items-start pb-10 pt-[120px]
          sm:pb-14 sm:pt-[135px]
          min-[1100px]:h-full
          min-[1100px]:w-[78%]
          min-[1100px]:justify-center
          min-[1100px]:-translate-x-7
          min-[1100px]:pb-0
          min-[1100px]:pt-0
        "
      >
        {/* Left content */}
        <div className="w-full min-[1100px]:w-[610px] min-[1100px]:translate-x-4">
          {/* Figma heading image */}
          <h1
            id="vehicle-verification-heading"
            className="m-0 w-full max-w-[520px]"
          >
            <img
              src="/images/vehicle-verification-heading.png"
              alt="Vehicle Verification API for Instant RC, Ownership & Challan Checks"
              draggable="false"
              className="mt-11 block h-auto w-full"
            />
          </h1>

          {/* Description */}
          <p
            className="
              mt-7 max-w-[530px]
              text-[14px] leading-[1.3] text-[#414141]
              sm:mt-8 sm:text-[16px]
              min-[1100px]:mt-[34px]
              min-[1100px]:max-w-[530px]
              min-[1100px]:text-[clamp(14px,0.85vw,16px)]
              min-[1100px]:leading-[1.25]
            "
          >
            SmartVerify's Bank and Vehicle Verification APIs help businesses
            instantly verify bank account details, IFSC codes, and vehicle
            registration information to reduce fraud, improve accuracy, and
            accelerate customer onboarding. Whether you're processing payouts,
            financing vehicles, or verifying ownership, our APIs deliver
            reliable verification in no time.
          </p>

          {/* Existing CTA buttons */}
          <div
            className="
              mt-7 flex w-full flex-col items-center gap-3
              sm:flex-row sm:flex-wrap sm:justify-center sm:gap-5
              min-[1100px]:mt-[52px]
              min-[1100px]:w-fit
              min-[1100px]:flex-row
              min-[1100px]:flex-nowrap
              min-[1100px]:justify-start
              min-[1250px]:gap-[30px]
            "
          >
            <CtaImageButton
              href="#documentation"
              label="View Documentation"
              image="/images/view-documentation.png"
              hoverText="View Documentation"
              variant="docs"
              className="w-full max-w-[242px] shrink-0 sm:w-[300px]"
            />

            <CtaImageButton
              href="#contact"
              label="Book a Demo"
              image="/images/book-demo.png"
              hoverText="Book a Demo"
              variant="demo"
              showArrow
              className="w-full max-w-[242px] shrink-0 sm:w-[300px]"
            />
          </div>
        </div>

        {/* Mobile and tablet illustration */}
        <div className="mt-8 w-full min-[1100px]:hidden">
          <img
            src="/images/vehicle-verification-hero-visual.png"
            alt="Vehicle registration document, verified car details, and a smartphone showing vehicle verification results"
            draggable="false"
            loading="eager"
            className="mx-auto block h-auto w-full max-w-[560px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
const vehicleVerificationProblems = [
  {
    id: "owner",
    desktopImage: "/images/vehicle-verification-owner-card.png",
    mobileImage: "/images/vehicle-verification-owner-photo.png",
    tag: "RC Verifications",
    title: "Seller ≠ Registered Owner",
    bullets: [
      "Seller details may not match the RC.",
      "Verify the actual registered owner.",
      "Prevent ownership-related disputes.",
    ],
    alt: "Two people exchanging car keys while checking the registration certificate",
  },
  {
    id: "challans",
    desktopImage: "/images/vehicle-verification-challans-card.png",
    mobileImage: "/images/vehicle-verification-challans-photo.png",
    tag: "Hidden Challans",
    title: "Check challan history for outstanding penalties before transfer.",
    bullets: [
      "Find unpaid challans.",
      "Review penalty history.",
      "Avoid unexpected liabilities.",
    ],
    alt: "A phone displaying vehicle challan history beside a car",
  },
  {
    id: "hypothecation",
    desktopImage: "/images/vehicle-verification-hypothecation-card.png",
    mobileImage: "/images/vehicle-verification-hypothecation-photo.png",
    tag: "Undisclosed Loans",
    title: "Check hypothecation to identify outstanding vehicle loans or claims.",
    bullets: [
      "Check active hypothecation.",
      "Identify existing lender claims.",
      "Prevent risky vehicle transactions.",
    ],
    alt: "A phone showing vehicle hypothecation details beside a registration certificate",
  },
  {
    id: "api",
    desktopImage: "/images/vehicle-verification-api-card.png",
    mobileImage: "/images/vehicle-verification-api-photo.png",
    tag: "API-Based Verification",
    title: "Replace manual checks with fast, consistent digital verification.",
    bullets: [
      "Automate vehicle checks.",
      "Get structured verification results.",
      "Make faster approval decisions.",
    ],
    alt: "Illustration of automated vehicle verification using an API",
  },
];
function VehicleVerificationWhyDataSection() {
  const desktopCards = [
    {
      image: "/images/vehicle-ownership-mismatch.png",
      alt: "Vehicle ownership mismatch between registration certificate and seller",
      tag: "RC Verification",
      title: "Seller ≠ Registered Owner",
      bullets: [
       "Seller details may not match the RC.",
      "Verify the actual registered owner.",
      "Prevent ownership-related disputes.",
      ],
    },
    {
      image: "/images/vehicle-challan-history.png",
      alt: "Vehicle challan history and outstanding challans dashboard",
      tag: "Hidden Challans",
      title: "Check challan history for outstanding penalties before transfer.",
      bullets: [
        "Find unpaid challans.",
        "Review penalty history.",
        "Avoid unexpected liabilities.",
      ],
    },
    {
      image: "/images/vehicle-hypothecation.png",
      alt: "Vehicle hypothecation verification on mobile",
      tag: "Undisclosed Loans",
      title: "Check hypothecation to identify outstanding vehicle loans or claims.",
      bullets: [
        "Check active hypothecation.",
        "Identify existing lender claims.",
        "Prevent risky vehicle transactions.",
      ],
    },
    {
      image: "/images/vehicle-api-verification.png",
      alt: "Vehicle verification API dashboard and automated verification",
      tag: "API-based Verification",
      title: "Replace manual checks with fast, consistent digital verification.",
      bullets: [
        "Automate vehicle checks.",
        "Get structured verification results.",
        "Make faster approval decisions.",
      ],
    },
  ];

  return (
    <>
      {/* Thin grey gap between the hero and this section */}
      <div aria-hidden="true" className="h-4 w-full bg-[#F0F0F0]" />

      <section
        aria-labelledby="vehicle-verification-why-data-heading"
        className="w-full bg-white"
      >
        <div
          className="
            mx-auto w-[88%] max-w-[1520px]
            pb-12 pt-12
            sm:pb-16 sm:pt-14
            min-[1100px]:w-[80%]
            min-[1100px]:pb-[52px]
            min-[1100px]:pt-[60px]
          "
        >
          {/* Section heading */}
          <header>
            <h2
              id="vehicle-verification-why-data-heading"
              className="m-0 w-full max-w-[770px]"
            >
              <img
                src="/images/vehicle-verification-why-data-heading.png"
                alt="Why Vehicle Data Still Catches Businesses Off Guard"
                draggable="false"
                className="block h-auto w-full"
              />
            </h2>

            <p
              className="
                mt-4 max-w-[800px]
                text-[14px] leading-[1.45] text-[#303030]
                sm:text-[16px]
                min-[1100px]:mt-5
                min-[1100px]:text-[17px]
              "
            >
              Manual verification isn't just slow it creates real business
              problems:
            </p>
          </header>

          {/* Sticky card sequence — existing animation settings preserved */}
          <div
            className="
              mt-9 flex flex-col items-center gap-7
              sm:mt-12 sm:gap-8
              min-[1100px]:mt-[110px]
              min-[1100px]:gap-[34px]
            "
          >
            {vehicleVerificationProblems.map((problem, index) => {
              const card = desktopCards[index];

              return (
                <div
                  key={problem.id}
                  style={{ zIndex: index + 1 }}
                  className="
                    relative w-full
                    min-[1100px]:sticky
                    min-[1100px]:top-[24px]
                    min-[1100px]:self-stretch
                  "
                >
                  {/* Desktop: Image left, editable content right */}
                  {card && (
                    <article
                      className="
                      hidden
                      relative mx-auto flex w-full max-w-[1017px]
                      flex-col overflow-hidden rounded-[12px]
                      border border-[#E5E7EB] bg-white
                      min-[768px]:flex
                      min-[768px]:min-h-[460px]
                      min-[768px]:flex-row
                      min-[1100px]:sticky
                      min-[1100px]:top-[24px]
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
                  )}

                  {/* Mobile: Existing card design retained */}
                  <article
                    className="
                      block
                      mx-auto block w-full max-w-[460px]
                      overflow-hidden rounded-[8px]
                      border border-[#E5E7EB] bg-white
                      shadow-[0_2px_10px_rgba(0,0,0,0.05)]
                      min-[768px]:hidden
                    "
                  >
                    <img
                      src={problem.mobileImage}
                      alt={problem.alt}
                      draggable="false"
                      loading="lazy"
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
                        {problem.tag}
                      </span>

                      <h3
                        className="
                          mt-3 text-[18px] font-normal
                          leading-[1.3] text-[#203047]
                        "
                      >
                        {problem.title}
                      </h3>

                      <ul className="mt-4 flex flex-col gap-2">
                        {problem.bullets.map((bullet) => (
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Thin grey divider before the next section */}
      <div aria-hidden="true" className="h-2 w-full bg-[#F0F0F0]" />
    </>
  );
}
const vehicleVerificationApis = [
  {
    id: "rc-validation-plus",
    icon: "validation",
    title: "RC Validation Plus",
    description:
      "Adds hypothecation and ownership details to identify existing financial claims on the vehicle—helping lenders make safer approval decisions.",
  },
  {
    id: "rc-advanced-validation",
    icon: "advanced",
    title: "RC Advanced Validation",
    description:
      "Find registered vehicle details using a mobile number when the RC number is unavailable. Useful for onboarding, fleet, insurance, and automotive verification.",
  },
  {
    id: "rc-challan-details",
    icon: "challan",
    title: "RC Challan Details",
    description:
      "Retrieve pending challans, fine amounts, and violation details linked to a vehicle before purchase, insurance, or fleet transactions.",
  },
  {
    id: "mobile-number-to-rc",
    icon: "mobile",
    title: "Mobile Number to RC",
    description:
      "Find registered vehicle details using a mobile number when the RC number is unavailable. Useful for onboarding, fleet, insurance, and automotive verification.",
  },
  {
    id: "reverse-rc",
    icon: "reverse",
    title: "Reverse RC",
    description:
      "Find the matching RC record using partial vehicle details instead of a full registration number—useful for recovery, disputes, and incomplete documentation.",
  },
];
function VehicleVerificationApiIcon({ type }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 56 56"
      fill="none"
      className="h-[52px] w-[52px] shrink-0"
    >
      {type === "validation" && (
        <>
          <rect x="8" y="23" width="40" height="29" rx="3" fill="#5136C9" />
          <circle cx="28" cy="13" r="10" fill="#5136C9" />
          <path
            d="m23 13 3.5 3.5L33.5 9"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="19" cy="32" r="4" fill="white" />
          <path d="M12 44c0-5 3-8 7-8s7 3 7 8" fill="white" />
          <path
            d="M31 31h11M31 37h11M31 43h8"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      )}

      {type === "advanced" && (
        <>
          <path
            d="M9 6h29l7 7v31H9z"
            fill="#5136C9"
          />
          <path
            d="M38 6v8h7M15 20h23M15 25h23M15 30h17"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="37" cy="40" r="10" fill="#5136C9" stroke="white" strokeWidth="2" />
          <path
            d="m32.5 40 3 3 6-7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}

      {type === "challan" && (
        <>
          <path d="M11 4h29l7 7v41H11z" fill="#5136C9" />
          <path
            d="M40 4v8h7M17 18h23M17 24h23M17 30h23M17 36h13"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="m28 44 4 4 9-10"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}

      {type === "mobile" && (
        <>
          <rect x="14" y="2" width="28" height="52" rx="4" fill="#5136C9" />
          <path d="M24 7h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="28" cy="21" r="5" stroke="white" strokeWidth="1.8" />
          <path
            d="M20 35c0-5 3-8 8-8s8 3 8 8z"
            stroke="white"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M24 47h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}

      {type === "reverse" && (
        <>
          <path
            d="M7 13h27l6 6v29H7z"
            fill="#5136C9"
            opacity="0.8"
          />
          <path
            d="M17 5h26l7 7v33H17z"
            fill="#5136C9"
          />
          <path
            d="M43 5v8h7M23 21h19M23 27h19M23 33h15"
            stroke="white"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M23 39h11"
            stroke="white"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}
function VehicleVerificationApisSection() {
  return (
    <>
      <section
        id="vehicle-verification-apis"
        aria-labelledby="vehicle-verification-apis-heading"
        className="w-full bg-white"
      >
        {/* Thin grey gap before the following section */}
      <div
        aria-hidden="true"
        className="h-3 w-full bg-[#F0F0F0]"
      />
        <div
          className="
            mx-auto grid w-[88%] max-w-[1520px]
            grid-cols-1 gap-y-10 py-10
            sm:gap-y-12 sm:py-14
            min-[768px]:w-[84%]
            min-[1100px]:w-[80%]
            min-[1100px]:grid-cols-[minmax(0,0.57fr)_minmax(0,1fr)]
            min-[1100px]:items-start
            min-[1100px]:gap-x-[4vw]
            min-[1100px]:gap-y-0
            min-[1100px]:pt-[28px]
            min-[1100px]:pb-[60px]
          "
        >
          {/* Left content: sticky for the length of the card section */}
          <div
            className="
              min-w-0 self-start
              min-[1100px]:sticky
              min-[1100px]:top-[128px]
            "
          >
            <h2
              id="vehicle-verification-apis-heading"
              className="m-0 w-full max-w-[430px]"
            >
              <img
                src="/images/vehicle-verification-apis-heading.png"
                alt="Our Five Vehicle Verification APIs"
                draggable="false"
                className="block h-auto w-full"
              />
            </h2>

            <p
              className="
                mt-8 max-w-[535px]
                text-[14px] leading-[1.4] text-[#252525]
                sm:text-[16px]
                min-[1100px]:mt-[40px]
                min-[1100px]:text-[clamp(15px,1vw,20px)]
                min-[1100px]:leading-[1.2]
              "
            >
              Not every business needs the same depth of information.
              SmartVerify breaks vehicle verification into five distinct APIs
              so you only pull the data relevant to your workflow.
            </p>

            {/* Reuse the existing main-page Know More button */}
            <a
              href="#vehicle-verification-api-cards"
              className="solutions-know-more mt-8 inline-flex min-[1100px]:mt-[46px]"
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

          {/* Right content: five cards in normal page flow */}
          <div
  id="vehicle-verification-api-cards"
  className="min-w-0 w-full"
>
            <div
              className="
                grid grid-cols-1 gap-5
                sm:grid-cols-2 sm:gap-x-5 sm:gap-y-8
                min-[1100px]:gap-x-[4vw]
                min-[1100px]:gap-y-[60px]
              "
            >
              {vehicleVerificationApis.map((api) => (
                <article
                  key={api.id}
                  className="
                    flex min-w-0 min-h-[300px] flex-col
                    rounded-[5px] border border-[#B8A5EF]
                    bg-white p-6
                    sm:p-6
                    min-[1100px]:min-h-[382px]
                    min-[1100px]:p-8
                  "
                >
                  <VehicleVerificationApiIcon type={api.icon} />

                  <h3
                    className="
                      mt-6 text-[19px] font-normal leading-[1.3]
                      text-[#806BD6]
                      min-[1100px]:mt-[30px]
                      min-[1100px]:text-[24px]
                      min-[1100px]:leading-[1.25]
                    "
                  >
                    {api.title}
                  </h3>

                  <p
                    className="
                      mt-3 text-[15px] leading-[1.3]
                      text-[#3F3F3F]
                      min-[1100px]:mt-[14px]
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
                      pt-7 text-[16px] text-[#806BD6]
                      transition-colors hover:text-[#EC3069]
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-[#806BD6]
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
const vehicleVerificationIndustries = [
  {
    id: "lenders",
    icon: "lenders",
    title: "NBFCs and auto lenders",
    description:
      "confirming ownership and hypothecation status before disbursing a vehicle loan",
  },
  {
    id: "insurance",
    icon: "insurance",
    title: "Insurance providers",
    description:
      "validating vehicle details at policy issuance and during claims",
  },
  {
    id: "fleet",
    icon: "fleet",
    title: "Fleet and logistics companies",
    description:
      "checking vehicle documentation before adding a driver or vehicle to their network",
  },
  {
    id: "ride-hailing",
    icon: "ride",
    title: "Ride-hailing and delivery platforms",
    description:
      "matching driver-submitted vehicle details against official records",
  },
  {
    id: "recovery",
    icon: "recovery",
    title: "Recovery and legal teams",
    description:
      "Tracing ownership in repossession or dispute cases using Reverse RC",
  },
];
function VehicleVerificationIndustryIcon({ type }) {
  const iconColors = {
    lenders: "#63D2A5",
    insurance: "#8064FF",
    fleet: "#FF8F9B",
    ride: "#9CCCF5",
    recovery: "#9471FF",
  };

  const color = iconColors[type] || "#8064FF";

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 56 56"
      fill="none"
      className="h-10 w-10 shrink-0 sm:h-11 sm:w-11"
    >
      {type === "lenders" && (
        <>
          <rect x="8" y="5" width="34" height="42" rx="2" fill={color} />
          <path
            d="M14 14h22M14 19h22M14 24h22M14 30h14M14 35h14"
            stroke="white"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M10 12 25 5l15 7M15 13v13M20 13v13M25 13v13M30 13v13M35 13v13"
            stroke="white"
            strokeWidth="1.2"
          />
          <rect x="29" y="29" width="20" height="21" rx="4" fill={color} stroke="white" strokeWidth="1.5" />
          <rect x="35" y="36" width="8" height="7" rx="1.5" stroke="white" strokeWidth="1.5" />
          <path d="M37 36v-2a2 2 0 0 1 4 0v2" stroke="white" strokeWidth="1.5" />
        </>
      )}

      {type === "insurance" && (
        <>
          <path d="m28 8 6 4h8v5l5 4-5 5v6H14v-6l-5-5 5-4v-5h8z" fill={color} />
          <path d="M17 14h22M17 19h22M19 24h18" stroke="white" strokeWidth="1.4" />
          <path d="M10 36h36M8 42h40M14 47h28M17 35v7M25 35v7M33 35v7M41 35v7" stroke={color} strokeWidth="3" strokeLinecap="round" />
          <circle cx="8" cy="12" r="2" fill={color} />
          <circle cx="48" cy="12" r="2" fill={color} />
          <circle cx="6" cy="22" r="2" fill={color} />
          <circle cx="50" cy="22" r="2" fill={color} />
          <path d="M8 12 18 18M48 12 38 18M6 22l11 2M50 22l-11 2" stroke={color} strokeWidth="1.5" strokeDasharray="2 2" />
        </>
      )}

      {type === "fleet" && (
        <>
          <rect x="13" y="8" width="29" height="43" rx="2" fill={color} />
          <rect x="18" y="4" width="18" height="5" rx="1" fill={color} />
          <rect x="18" y="15" width="18" height="8" rx="1" stroke="white" strokeWidth="1.4" />
          <circle cx="27" cy="18" r="2" stroke="white" strokeWidth="1.3" />
          <path d="M22 22c0-2 2-3 5-3s5 1 5 3M18 28h19M18 33h19M18 38h13M18 43h13" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="43" cy="19" r="10" fill={color} stroke="white" strokeWidth="1.5" />
          <path d="m39 19 3 3 5-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}

      {type === "ride" && (
        <>
          <path d="M28 3 48 10v15c0 12-8 20-20 27C16 45 8 37 8 25V10z" fill={color} />
          <path d="m19 27 7 7 13-15" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}

      {type === "recovery" && (
        <>
          <rect x="5" y="7" width="46" height="31" rx="2" fill={color} />
          <path d="M10 14h36M10 21h36" stroke="white" strokeWidth="1.2" />
          <path d="m15 15 5 16h19l4-12H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="24" cy="35" r="2" fill="white" />
          <circle cx="37" cy="35" r="2" fill="white" />
          <path d="M21 43h14M17 49h22M25 39v4M31 39v4" stroke={color} strokeWidth="3" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
function VehicleVerificationIndustriesSection() {
  return (
    <>
      {/* Thin grey gap between sections */}
      <div aria-hidden="true" className="h-1 w-full bg-[#F0F0F0]" />

      <section
        aria-labelledby="vehicle-verification-industries-heading"
        className="w-full bg-white"
      >
        {/* Thin grey gap before the next section */}
      <div aria-hidden="true" className="h-3 w-full bg-[#F0F0F0]" />
        <div
          className="
            mx-auto w-[88%] max-w-[1520px]
            pb-10 pt-8
            sm:pb-14 sm:pt-10
            min-[1100px]:w-[80%]
            min-[1100px]:pb-[42px]
            min-[1100px]:pt-[48px]
          "
        >
          {/* Heading */}
          <h2
            id="vehicle-verification-industries-heading"
            className=" mt-6 m-0 w-full max-w-[586px]"
          >
            <img
              src="/images/vehicle-verification-industries-heading.png"
              alt="Industries That Rely on Vehicle Verification"
              draggable="false"
              className="
                block h-auto w-full max-w-[420px]
                min-[1100px]:w-[min(31vw,586px)]
                min-[1100px]:max-w-[586px]
              "
            />
          </h2>

          {/* Introductory description */}
          <p
            className="
              mt-4 max-w-[430px]
              text-[13px] leading-[1.35] text-[#303030]
              sm:text-[14px]
              min-[1100px]:mt-[20px]
              min-[1100px]:text-[13px]
            "
          >
            Vehicle verification isn't just for auto dealers.
            <br className="hidden min-[500px]:block" />
            Here's where it shows up across industries
          </p>

          {/* Desktop: original Figma cards + illustration */}
          <div
            className="
              mt-7 hidden grid-cols-2 items-stretch gap-5
              min-[768px]:grid
              min-[1100px]:mt-[30px]
              min-[1100px]:gap-[20px]
            "
          >
            {/* Five-card combined image from Figma */}
            <div className="aspect-[738/698] min-w-0 overflow-hidden">
              <img
                src="/images/vehicle-verification-industries-cards.png"
                alt="Industries served: NBFCs and auto lenders, insurance providers, fleet and logistics companies, ride-hailing and delivery platforms, and recovery and legal teams"
                draggable="false"
                loading="lazy"
                className="block h-full w-full object-fill"
              />
            </div>

            {/* Right-side verification illustration */}
            <div className="aspect-[738/698] min-w-0 overflow-hidden">
              <img
                src="/images/vehicle-verification-industries-visual.png"
                alt="Vehicle verification illustration showing digital registration records, vehicles and security checks"
                draggable="false"
                loading="lazy"
                className="block h-full w-full object-fill"
              />
            </div>
          </div>

          {/* Mobile: individual readable industry cards */}
          <div className="mt-7 flex flex-col gap-2.5 min-[768px]:hidden">
            {vehicleVerificationIndustries.map((industry) => (
              <article
                key={industry.id}
                className="
                  flex min-w-0 items-center gap-4
                  rounded-[9px] border border-[#D8D2FF]
                  bg-white px-4 py-4
                "
              >
                <VehicleVerificationIndustryIcon type={industry.icon} />

                <div className="min-w-0 flex-1">
                  <h3 className="m-0 text-[15px] font-medium leading-[1.3] text-[#101522]">
                    {industry.title}
                  </h3>

                  <p className="mt-1.5 text-[12px] leading-[1.35] text-[#62748D]">
                    {industry.description}
                  </p>
                </div>
              </article>
            ))}
            {/* Mobile illustration */}
            <img
              src="/images/vehicle-verification-industries-visual.png"
              alt="Digital vehicle verification illustration"
              draggable="false"
              loading="lazy"
              className="
                mt-3 block h-auto w-full rounded-[8px]
                object-contain
              "
            />
          </div>
        </div>
      </section>
    </>
  );
}
function VehicleVerificationAutomationBenefitsSection() {
  const benefits = [
    {
      id: "speed",
      title: "Speed",
      image: "/images/vehicle-verification-automation-speed.png",
      description:
        "What used to take a phone call and a wait turns into a response measured in seconds. Onboarding flows that once stalled on document verification can move straight to approval.",
    },
    {
      id: "coverage",
      title: "Coverage",
      image: "/images/vehicle-verification-automation-coverage.png",
      description:
        "Manual checks tend to skip steps under time pressure, a challan lookup gets missed, or hypothecation isn't checked because the loan needs to close today. Automated calls run every check, every time, without the shortcuts.",
    },
    {
      id: "cost",
      title: "Cost",
      image: "/images/vehicle-verification-automation-cost.png",
      description:
        "Fewer manual reviewers mean lower operational overhead, and catching a hypothecated vehicle or a challan-heavy record before a transaction closes avoids the far higher cost of unwinding it afterwards.",
    },
  ];

  return (
    <>
      <section
        aria-labelledby="vehicle-verification-automation-heading"
        className="w-full bg-white"
      >
         {/* Thin grey divider before the next section */}
      <div aria-hidden="true" className="h-3 w-full bg-[#F0F0F0]" />
        <div
          className="
            mx-auto w-[88%] max-w-[1200px]
            pb-10 pt-8
            sm:pb-12 sm:pt-10
            min-[1100px]:w-[80%]
            min-[1100px]:pb-[42px]
            min-[1100px]:pt-[46px]
          "
        >
          {/* Heading on the left, introduction on the right */}
          <div
            className="
              grid grid-cols-1 items-start gap-4
              sm:gap-6
              min-[768px]:grid-cols-[minmax(0,1.35fr)_minmax(0,0.8fr)]
              min-[768px]:gap-8
            "
          >
            <h2
              id="vehicle-verification-automation-heading"
              className="m-0 w-full max-w-[540px]"
            >
              <img
                src="/images/vehicle-verification-automation-heading.png"
                alt="What Changes When You Automate These Checks"
                draggable="false"
                className="mt-6 block h-auto w-full"
              />
            </h2>

            <p
              className="
                mt-6 m-0 max-w-[350px]
                text-[13px] leading-[1.3] text-[#303030]
                sm:text-[14px]
                min-[768px]:ml-auto
                min-[1100px]:text-[13px]
              "
            >
              Running vehicle checks through an API instead of manual
              verification changes three things immediately:
            </p>
          </div>

          {/* Three cards — one horizontal row from tablet/desktop widths */}
          <div
            className="
              mt-6 grid grid-cols-1 gap-5
              sm:mt-8
              min-[768px]:grid-cols-3
              min-[768px]:gap-3
              min-[1100px]:mt-[38px]
              min-[1100px]:gap-[14px]
            "
          >
            {benefits.map((benefit) => (
              <article
                key={benefit.id}
                className="
                  flex min-w-0 flex-col
                  rounded-[5px] border border-[#C8C8C8]
                  bg-white p-[10px]
                "
              >
                {/* Benefit illustration */}
                <div className="w-full overflow-hidden rounded-[7px]">
                  <img
                    src={benefit.image}
                    alt=""
                    aria-hidden="true"
                    draggable="false"
                    loading="lazy"
                    className="
                      block h-auto w-full
                      aspect-[451/437] object-cover
                    "
                  />
                </div>

                {/* Benefit title */}
                <h3
                  className="
                    mt-3 text-[18px] font-normal
                    leading-[1.4] text-[#161616]
                    min-[768px]:text-[16px]
                    min-[1100px]:mt-[12px]
                    min-[1100px]:text-[clamp(18px,0.95vw,18px)]
                  "
                >
                  {benefit.title}
                </h3>

                {/* Benefit description */}
                <p
                  className="
                    mb-0 mt-3 text-[15px] font-normal
                    leading-[1.5] text-[#333333]
                    min-[768px]:mt-[10px]
                    min-[768px]:text-[14px]
                    min-[1100px]:text-[clamp(14px,0.8vw,16px)]
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
    </>
  );
}
function VehicleVerificationGetStartedSection() {
  return (
    <>
      {/* Thin grey gap between sections */}
      <div aria-hidden="true" className="h-3 w-full bg-[#F0F0F0]" />

      <section
        aria-labelledby="vehicle-verification-get-started-heading"
        className="w-full bg-white px-4 py-6 sm:py-8"
      >
        {/* Centred card: equal gaps on both ends */}
        <div
          className="
            relative isolate mx-auto
            w-full max-w-[1520px]
            overflow-hidden rounded-[10px]
            bg-[linear-gradient(105deg,#6545ff_0%,#8b70ff_48%,#6847ff_100%)]
            sm:w-[82%]
            min-[1100px]:aspect-[1520/399]
            min-[1100px]:w-[73%]
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
   className="
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
              items-start justify-center
              px-6 py-8
              sm:px-8 sm:py-9
              min-[1100px]:absolute
              min-[1100px]:inset-0
              min-[1100px]:px-[4.2%]
              min-[1100px]:py-0
            "
          >
            <div className="w-full min-[1100px]:w-[92%]">
              {/* Figma heading */}
              <h2
                id="vehicle-verification-get-started-heading"
                className="
                  m-0 w-full max-w-[480px]
                  min-[1100px]:max-w-none
                  min-[1100px]:w-[52%]
                "
              >
                <img
                  src="/images/vehicle-verification-get-started-heading.png"
                  alt="Get Started with SmartVerify's Vehicle Verification"
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
                Vehicle fraud and undisclosed liabilities cost businesses money
                precisely because the checks that would catch them are slow or
                skipped. SmartVerify's vehicle verification APIs put that data
                in your hands in real time, so every approval, policy, or
                transaction is backed by facts instead of assumptions.
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
function VehicleVerificationFaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "What's the difference between RC Advanced Validation and RC Validation Plus?",
      answer:
        "RC Advanced Validation returns the core registration profile, including owner, vehicle class, and insurance status. RC Validation Plus adds hypothecation and deeper ownership history, which is especially useful for lending decisions.",
    },
    {
      question:
        "Can I check challan history without knowing the exact registration number?",
      answer:
        "Standard challan lookups require a registration number. If you only have partial vehicle details, Reverse RC can help identify the matching RC first.",
    },
    {
      question: "How current is the data returned by these APIs?",
      answer:
        "Data is retrieved from official vehicle registration records and reflects the most recent status available at the time of the API request.",
    },
    {
      question:
        "Does Mobile Number to RC work if a customer has multiple vehicles registered to one number?",
      answer:
        "Yes. The API can return vehicles linked to that mobile number, making it useful when a customer owns more than one registered vehicle.",
    },
    {
      question:
        "Is a physical RC document still required alongside API verification?",
      answer:
        "A physical RC document is not required for the API verification step itself. The API retrieves supported vehicle registration details digitally, helping businesses reduce manual document collection during onboarding.",
    },
  ];

  return (
    <section
      aria-labelledby="vehicle-verification-faq-heading"
      className="
        relative w-full overflow-hidden
        bg-[radial-gradient(ellipse_at_52%_50%,rgba(151,129,255,0.95)_0%,rgba(151,129,255,0.38)_32%,rgba(151,129,255,0)_68%),linear-gradient(110deg,#6042ff_0%,#6b4fff_100%)]
      "
    >
      <div
        className="
          mx-auto grid w-[85%] max-w-[1520px]
          grid-cols-1 gap-8 py-10 pb-8
          sm:gap-10 sm:pt-14 sm:pb-6
          min-[900px]:min-h-[630px]
          min-[900px]:w-[80%]
          min-[900px]:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)]
          min-[900px]:items-start
          min-[900px]:gap-x-[5vw]
          min-[900px]:py-[45px]
          min-[1200px]:gap-x-[9.7vw]
        "
      >
        {/* Left: FAQ heading */}
        <div className="min-w-0">
          <h2
            id="vehicle-verification-faq-heading"
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
        </div>

        {/* Right: FAQ accordion */}
        <div className="flex min-w-0 flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `vehicle-verification-faq-answer-${index}`;

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
                    text-[15px] font-normal leading-[1.4]
                    text-white transition-colors
                    hover:bg-white/[0.08]
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-white
                    sm:min-h-[72px] sm:px-5 sm:text-[17px]
                    min-[900px]:min-h-[74px]
                    min-[900px]:px-[27px]
                    min-[900px]:py-5
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
                      text-[14px] leading-[1.65]
                      text-white/90
                      sm:px-5
                      min-[900px]:px-[27px]
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
function VehicleVerificationPage() {
  return (
    <main className="w-full">
      <VehicleVerificationHero />
      <VehicleVerificationWhyDataSection />
      <VehicleVerificationApisSection />
      <VehicleVerificationIndustriesSection />
      <VehicleVerificationAutomationBenefitsSection />
      <VehicleVerificationGetStartedSection />
      <VehicleVerificationFaqSection />
      <FooterSection />
    </main>
  );
}

export default VehicleVerificationPage;