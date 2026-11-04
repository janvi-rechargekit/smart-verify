import { useState } from "react";
import CtaImageButton from "../../components/shared/CtaImageButton.jsx";
import FooterSection from "../../sections/FooterSection.jsx";
function EsignHero() {
  return (
    <section
      id="esign-hero"
      aria-labelledby="esign-hero-heading"
      className="
        relative isolate w-full overflow-hidden bg-white
        min-[1100px]:h-[min(42.4vw,809px)]
        min-[1100px]:min-h-[640px]
      "
    >
      {/* Original Figma pink and purple background */}
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

      {/* Desktop illustration — hidden on mobile and tablet */}
<div
  aria-hidden="true"
  className="
    pointer-events-none absolute inset-0 z-0
    hidden! min-[1100px]:block!
  "
>
  <img
    src="/images/esign-hero-visual.png"
    alt=""
    draggable="false"
    className="
      absolute right-[10%]
      top-[clamp(70px,30vw,170px)]
      block h-auto w-[min(37vw,650px)]
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
          sm:pb-12 sm:pt-[115px]
          min-[1100px]:h-full
          min-[1100px]:justify-center
          min-[1100px]:pb-0
          min-[1100px]:pt-0
        "
      >
        <div
          className="
            w-full max-w-[740px]
            min-[1100px]:w-[44vw]
            min-[1100px]:max-w-[820px]
          "
        >
          {/* Exact Figma heading image */}
          <h1
            id="esign-hero-heading"
            className="
  m-0 w-full max-w-[680px]
  min-[1100px]:w-[min(38vw,680px)]
"
          >
            <img
              src="/images/esign-hero-heading.png"
              alt="Aadhaar eSign API for Instant Digital Document Signing"
              draggable="false"
              className="block h-auto w-full"
            />
          </h1>

          {/* Description matching the Figma content */}
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
            SmartVerify's eSign API helps businesses collect legally compliant
            electronic signatures without the delays of physical paperwork.
            Integrate secure digital signing into applications to streamline
            customer onboarding, document approvals, and agreement execution
            while ensuring speed, security, and regulatory compliance.
          </p>

          {/* Reuse the existing CTA buttons */}
          <div
            className="
              mt-6 flex w-full flex-col items-center justify-center gap-3
              sm:flex-row sm:flex-wrap sm:items-center sm:gap-4
              min-[1100px]:mt-[36px]
              min-[1100px]:w-fit
              min-[1100px]:flex-nowrap
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
              className="
                w-[210px] shrink-0
                sm:w-[240px]
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
                w-[210px] shrink-0
                sm:w-[210px]
                min-[1100px]:w-[min(21vw,300px)]
              "
            />
          </div>
        </div>

        {/* Mobile/tablet illustration */}
        <div className="mt-8 w-full min-[1100px]:hidden!">
          <img
            src="/images/esign-hero-visual.png"
            alt="Digital signing interface connected to a signed document, with a business professional holding a tablet"
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
function EsignHowItWorksSection() {
  const steps = [
    {
      title: "Initiate eSign",
      description:
        "The business sends the document for electronic signing",
      icon: "document",
    },
    {
      title: "Aadhaar Authentication",
      description:
        "The customer verifies their identity using an Aadhaar-linked OTP",
      icon: "fingerprint",
    },
    {
      title: "Digital Signature",
      description:
        "A cryptographic signature is applied directly to the document",
      icon: "signature",
    },
    {
      title: "Timestamp & Audit Trail",
      description:
        "The signed document is time-stamped and recorded for verification",
      icon: "audit",
    },
    {
      title: "Legally Valid",
      description:
        "Unlike a scanned signature, the eSign provides a digitally verifiable signature backed by the Aadhaar authentication process",
      icon: "legal",
    },
  ];

  return (
    <section
      aria-labelledby="esign-how-it-works-heading"
      className="relative w-full overflow-hidden bg-white"
    >
      {/* Heading and description */}
      <div
        className="
          relative z-10 mx-auto w-[80%] max-w-[1520px]
          pt-13
          sm:pt-12
          min-[1100px]:pt-[32px]
        "
      >
        <h2
          id="esign-how-it-works-heading"
          className="
            m-0 w-full max-w-[760px]
            min-[768px]:w-[min(42vw,760px)]
          "
        >
          <img
            src="/images/esign-how-it-works-heading.png"
            alt="What Is an Aadhaar eSign API & How Does It Work?"
            draggable="false"
            className="block h-auto w-full"
          />
        </h2>

        <p
          className="
            m-0 mt-6 max-w-[650px]
            text-[13px] leading-[1.35] text-[#555555]
            sm:text-[14px]
            min-[1100px]:mt-[24px]
            min-[1100px]:max-w-[650px]
            min-[1100px]:text-[13px]
            min-[1100px]:leading-[1.3]
          "
        >
          Aadhaar eSign makes document signing faster, secure, and legally
          verifiable—without paperwork or physical signatures.
        </p>
      </div>

      {/* Desktop/tablet: exact Figma card composition */}
      <div className="mt-7 w-full min-[768px]:mt-[32px]">
        <img
          src="/images/esign-how-it-works-cards.png"
          alt="Five steps of Aadhaar eSign: Initiate eSign, Aadhaar Authentication, Digital Signature, Timestamp and Audit Trail, and Legally Valid."
          draggable="false"
          loading="lazy"
          className="
  mx-auto hidden! h-auto w-full max-w-[1920px]
  min-[768px]:block!
"
        />
      </div>

      {/* Mobile: individual responsive cards */}
      <div
        className="
          mx-auto mt-7 flex w-[88%] max-w-[560px]
          flex-col pb-8
          gap-0
          min-[768px]:hidden!
        "
      >
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="
              border border-[#C9C9C9] bg-white
              px-5 py-5
              first:border-t
              [&+article]:border-t-0
            "
          >
            {/* Purple icon */}
            <div
              aria-hidden="true"
              className="mb-4 flex h-9 w-9 items-center justify-center text-[#5140D8]"
            >
              <svg
                viewBox="0 0 40 40"
                fill="none"
                className="h-9 w-9"
              >
                {index === 0 && (
                  <>
                    <rect
                      x="6"
                      y="3"
                      width="23"
                      height="31"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M10 10h15M10 15h15M10 20h11M10 25h8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="m25 29 7-12 3 2-7 12-5 3z"
                      fill="currentColor"
                    />
                  </>
                )}

                {index === 1 && (
                  <>
                    <path
                      d="M20 3 34 10v12L20 32 6 22V10z"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M14 17c0-4 2-7 6-7s6 3 6 7M17 20c0-3 1-4 3-4s3 1 3 4M20 20v5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <rect
                      x="25"
                      y="24"
                      width="12"
                      height="11"
                      rx="2"
                      fill="currentColor"
                    />
                    <path
                      d="M28 24v-2a3 3 0 0 1 6 0v2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </>
                )}

                {index === 2 && (
                  <>
                    <rect
                      x="4"
                      y="8"
                      width="31"
                      height="26"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M9 15h12M9 20h7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="m18 28 10-15 3 2-10 15-6 3z"
                      fill="currentColor"
                    />
                  </>
                )}

                {index === 3 && (
                  <>
                    <path
                      d="M8 4h20v29H8z"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M12 11h12M12 16h12M12 21h8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="28"
                      cy="27"
                      r="7"
                      fill="white"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    />
                    <path
                      d="m33 32 4 4"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </>
                )}

                {index === 4 && (
                  <>
                    <path
                      d="M8 4h20v29H8z"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M12 11h12M12 16h12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="m13 25 4 4 8-9"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </>
                )}
              </svg>
            </div>

            <h3
              className="
                m-0 text-[17px] font-normal
                leading-[1.3] text-[#414141]
              "
            >
              {step.title}
            </h3>

            <p
              className="
                mb-0 mt-3 text-[14px]
                leading-[1.4] text-[#5A5A5A]
              "
            >
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
function EsignSwitchingBenefitsSection() {
  const cards = [
    {
      id: "same-day-signing",
      image: "/images/esign-switching-card-1.png",
      alt: "Same-day document signing",
      title: "Onboarding finishes the same day",
      description:
        "A loan agreement, insurance policy, or rental contract gets signed the moment the customer agrees to it, not three days later when the courier arrives.",
    },
    {
      id: "paperless-signing",
      image: "/images/esign-switching-card-2.png",
      alt: "Paperless digital document signing",
      title: "Paper and courier costs disappear",
      description:
        "Printing, storing, and shipping physical documents add up fast at scale. Signing digitally cuts that cost to near zero.",
    },
    {
      id: "organised-records",
      image: "/images/esign-switching-card-3.png",
      alt: "Organised digital document records",
      title: "Records stay organised",
      description:
        "Signed documents are stored and retrieved instantly, instead of sitting in a filing cabinet or a scanned folder somewhere.",
    },
  ];

  return (
    <section
      aria-labelledby="esign-switching-heading"
      className="relative w-full overflow-hidden bg-white"
    >
      <div
        aria-hidden="true"
        className="h-3 w-full bg-[#F0F0F0]"
      />

      <div
        className="
          relative z-10 mx-auto w-[90%] max-w-[1520px]
          pb-8 pt-10
          sm:pb-10 sm:pt-12
          min-[1100px]:w-[80%]
          min-[1100px]:pb-[38px]
          min-[1100px]:pt-[48px]
        "
      >
        {/* Heading and description */}
        <header
          className="
            grid grid-cols-1 items-start gap-4
            min-[768px]:grid-cols-[minmax(0,1fr)_minmax(0,0.58fr)]
            min-[768px]:gap-x-[5%]
          "
        >
          <h2
            id="esign-switching-heading"
            className="
              m-0 w-full max-w-[620px]
              min-[768px]:w-[min(46vw,620px)]
            "
          >
            <img
              src="/images/esign-switching-benefits-heading.png"
              alt="Why Businesses Are Switching to Aadhaar eSign"
              draggable="false"
              className="block h-auto w-full"
            />
          </h2>

          <p
            className="
              m-0 w-full max-w-[460px]
              text-[12px] leading-[1.35] text-[#333333]
              sm:text-[13px]
              min-[768px]:ml-auto
              min-[768px]:w-full
              min-[1100px]:max-w-[460px]
              min-[1100px]:pt-[2px]
              min-[1100px]:text-[13px]
              min-[1100px]:leading-[1.3]
            "
          >
            Paper-based signing creates friction at exactly the point where a
            business wants the least friction: the moment a customer is ready
            to commit. A few things happen once that friction goes away.
          </p>
        </header>

        {/* Three outlined benefit cards */}
        <div
          className="
            mt-9 grid grid-cols-1 gap-5
            min-[560px]:grid-cols-2
            min-[768px]:grid-cols-3
            min-[768px]:gap-6
            min-[1100px]:mt-[50px]
          "
        >
          {cards.map((card, index) => (
            <article
              key={card.id}
              className="
                min-w-0 w-full
                rounded-[10px]
                border border-[#BDBDBD]
                bg-white
                p-[10px]
              "
            >
              {/* Uniform image dimensions */}
              <img
                src={card.image}
                alt={card.alt}
                draggable="false"
                loading={index === 0 ? "eager" : "lazy"}
                className="
                  block w-full
                  aspect-[1.04/1]
                  rounded-[4px]
                  object-cover
                  object-center
                "
              />

              {/* Card heading */}
              <h3
                className="
                  mt-4 mb-0
                  text-[18px] font-normal
                  leading-[1.3] text-[#17121C]
                  sm:text-[19px]
                  min-[1100px]:text-[23px]
                "
              >
                {card.title}
              </h3>

              {/* Card description */}
              <p
                className="
                  mt-4 mb-1
                  text-[14px] font-normal
                  leading-[1.35] text-[#414141]
                  sm:text-[15px]
                  min-[1100px]:text-[18px]
                "
              >
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
function EsignProcessScrollSection() {
  const cards = [
    {
      id: "send-document",
      image: "/images/esign-process-card-1.png",
      alt: "The business sends the document to be signed through the API, including the fields where the signature needs to appear.",
    },
    {
      id: "enter-aadhaar",
      image: "/images/esign-process-card-2.png",
      alt: "The customer enters their Aadhaar number on a consent screen that explains what they are signing.",
    },
    {
      id: "uidai-otp",
      image: "/images/esign-process-card-3.png",
      alt: "UIDAI sends an OTP to the mobile number linked to the customer's Aadhaar.",
    },
    {
      id: "confirm-otp",
      image: "/images/esign-process-card-4.png",
      alt: "The customer enters the OTP to confirm their identity and acceptance.",
    },
    {
      id: "signed-document",
      image: "/images/esign-process-card-5.png",
      alt: "The completed eSign document is stored digitally and can be retrieved after signing.",
    },
  ];

  return (
    <>
      <section
        aria-labelledby="esign-process-scroll-heading"
        className="relative w-full overflow-clip bg-white"
      >
         {/* Thin grey separator below the section */}
      <div
        aria-hidden="true"
        className="h-3 w-full bg-[#F0F0F0]"
      />
        {/* Exact Figma heading */}
        <header
          className="
            mx-auto w-[80%] max-w-[1520px]
            pt-8
            sm:pt-10
            min-[1100px]:pt-[42px]
          "
        >
          <h2
            id="esign-process-scroll-heading"
            className="
  m-0 w-full max-w-[680px]
  min-[1100px]:w-[min(42vw,680px)]
"
          >
            <img
              src="/images/esign-process-heading.png"
              alt="How smartverify Aadhaar eSign Process Works"
              draggable="false"
              className="block h-auto w-full"
            />
          </h2>
        </header>

        {/* Scroll-through card sequence */}
        <div
          className="
            relative mx-auto mt-10 flex w-full
            flex-col items-center gap-6
            pb-8
            sm:mt-12 sm:gap-7
            min-[1100px]:mt-[145px]
            min-[1100px]:gap-8
            min-[1100px]:pb-[10vh]
          "
        >
          {cards.map((card, index) => (
            <article
              key={card.id}
              style={{ zIndex: index + 1 }}
              className="
                relative mx-auto w-[94%] max-w-[1055px]
                bg-white
                min-[1100px]:sticky
                min-[1100px]:top-[clamp(72px,9vh,100px)]
                min-[1100px]:w-[min(52vw,1055px)]
              "
            >
              <img
                src={card.image}
                alt={card.alt}
                draggable="false"
                loading={index === 0 ? "eager" : "lazy"}
                className="
                  block h-auto w-full
                  select-none
                "
              />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
function EsignBusinessUseCasesSection() {
  const useCases = [
    {
      id: "fintech-lending",
      icon: "lenders",
      title: "FinTech & Lending",
      description:
        "Combine Mobile to PAN and Mobile Number Vintage to assess risk before approving loans.",
    },
    {
      id: "ecommerce",
      icon: "marketplaces",
      title: "E-commerce",
      description:
        "Use Common Account Detection to identify coupon abuse, duplicate accounts, and fake referrals.",
    },
    {
      id: "insurance",
      icon: "insurance",
      title: "Insurance",
      description:
        "Use Mobile to Address and Mobile to Pre-fill to reduce manual data entry and speed up policy applications.",
    },
    {
      id: "staffing",
      icon: "staffing",
      title: "Staffing & Recruitment",
      description:
        "Use Mobile Name Lookup and WhatsApp Check to verify candidate contact details before scheduling interviews.",
    },
    {
      id: "all-industries",
      icon: "fintech",
      title: "Across Industries",
      description:
        "Verify users early, reduce manual input, and give fraud teams a reliable data trail for better decisions.",
    },
  ];

  return (
    <>
      <section
        aria-labelledby="esign-business-use-cases-heading"
        className="w-full overflow-hidden bg-white"
      >
         {/* Thin grey separator after this section */}
      <div aria-hidden="true" className="h-3 w-full bg-[#F0F0F0]" />
        <div
          className="
            mx-auto w-[88%] max-w-[1520px]
            pb-8 pt-8
            sm:pb-10 sm:pt-10
            min-[1100px]:w-[80%]
            min-[1100px]:pb-[38px]
            min-[1100px]:pt-[34px]
          "
        >
          {/* Heading */}
          <h2
            id="esign-business-use-cases-heading"
            className="
              m-0 w-full max-w-[500px]
              min-[1100px]:w-[min(42vw,500px)]
            "
          >
            <img
              src="/images/esign-business-use-cases-heading.png"
              alt="Business Use Cases for Aadhaar eSign API"
              draggable="false"
              className="block h-auto w-full"
            />
          </h2>

          {/* Description directly below heading */}
          <p
            className="
              m-0 mt-5 max-w-[650px]
              text-[13px] leading-[1.4] text-[#333333]
              sm:text-[14px]
              min-[1100px]:mt-[24px]
              min-[1100px]:max-w-[650px]
              min-[1100px]:text-[13px]
              min-[1100px]:leading-[1.3]
            "
          >
            The Aadhaar eSign API is not restricted to a single industry and
            can be used by any business that captures a signature on a form,
            contract, or consent document.
          </p>

          {/* Use-case cards on the left, illustration on the right */}
          <div
            className="
              mt-6 grid grid-cols-1 items-start gap-5
              sm:mt-7
              min-[768px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
              min-[768px]:items-stretch
              min-[768px]:gap-[16px]
              min-[1100px]:mt-[22px]
            "
          >
            {/* Five use-case cards */}
            <div className="
  mt-4 flex min-w-0 flex-col gap-[8px]
  min-[768px]:mt-5
">
              {useCases.map((item) => (
                <article
                  key={item.id}
                  className="
  flex min-w-0 items-center gap-2
  rounded-[7px] border border-[#DED8FF]
  bg-[#FBFAFF]
  px-2 py-8
  sm:gap-3 sm:px-3
  min-[768px]:flex-none
  min-[1100px]:min-h-[68px]
  min-[1100px]:gap-[11px]
  min-[1100px]:px-[11px]
  min-[1100px]:py-[12px]
"
                >
                  {/* Reuse the existing icon helper in App.jsx */}
                  <div className="w-[28px] shrink-0 sm:w-[32px]">
                    <BusinessVerificationAudienceIcon
                      type={item.icon}
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3
                      className="
                        m-0 text-[13px] font-medium
                        leading-[1.3] text-[#111827]
                        sm:text-[14px]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        m-0 mt-1 text-[11px]
                        leading-[1.3] text-[#61748D]
                        sm:text-[12px]
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Original Figma illustration */}
           <div className="min-w-0 w-full min-[768px]:flex min-[768px]:items-center min-[768px]:justify-center">
              <img
  src="/images/gst-verification-who-uses-visual.png"
  alt="Digital verification illustration showing documents, security checks, and verified business information"
  draggable="false"
  loading="lazy"
  className="
  block h-auto max-h-[480px] w-full rounded-[4px] object-contain
  min-[768px]:w-[90%]
  min-[768px]:max-h-[640px]
  min-[1100px]:w-[76%]
  min-[1100px]:max-h-[590px]
"
/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
function EsignLegalValiditySection() {
  return (
    <>
      <section
        aria-labelledby="esign-legal-validity-heading"
        className="w-full overflow-hidden bg-white"
      >
        <div
          className="
            mx-auto grid w-[82%] max-w-[1520px]
            grid-cols-1 items-start gap-7
            py-8
            sm:py-10
            min-[900px]:w-[80%]
            min-[900px]:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]
            min-[900px]:gap-x-[4vw]
            min-[900px]:py-[34px]
          "
        >
          {/* Left: Figma heading and description */}
          <div className="min-w-0 w-full">
            <h2
              id="esign-legal-validity-heading"
              className="m-0 w-full max-w-[762px]"
            >
              <img
                src="/images/esign-legal-validity-heading.png"
                alt="Is Aadhaar eSign Legally Valid in India?"
                draggable="false"
                className="block h-auto w-full"
              />
            </h2>

            <div
              className="
              mt-6 flex max-w-[700px] flex-col gap-6
              text-[14px] leading-[1.4] text-[#7B8BA3]
              sm:text-[15px]
              min-[900px]:mt-[28px]
              min-[1100px]:text-[clamp(14px,0.85vw,16px)]
              min-[1100px]:leading-[1.4]
            "
            >
              <p className="m-0">
                Yes. Aadhaar eSign electronic signatures are recognised under
                the Information Technology Act, 2000 and have the same standing
                as a handwritten signature for most business documents. The
                signature is tied to an Aadhaar-based authentication, which
                means there's a verifiable record of who signed, when, and how
                consent was given, something a scanned or photographed
                signature can't offer.
              </p>

              <p className="m-0">
                That verifiable audit trail is often the actual reason
                businesses switch. It doesn't just speed up signing; it gives
                compliance and legal teams a cleaner record to point to if a
                document is ever questioned.
              </p>
            </div>
          </div>

          {/* Right: Original Figma illustration */}
          <div className="min-w-0 w-full
          min-[900px]:-translate-x-4">
            <img
              src="/images/esign-legal-validity-visual.png"
              alt="Blue digital verification illustration showing a secure server, cloud storage, and connected data systems"
              draggable="false"
              loading="lazy"
              className="
                mx-auto block h-auto w-full
                max-w-[590px] object-contain
                min-[900px]:w-[80%]
              "
            />
          </div>
        </div>
      </section>
    </>
  );
}
function EsignIntelligenceIdentitySignalCta() {
  return (
    <section className="w-full bg-white px-4 pb-8 pt-3 sm:pb-10 min-[1100px]:px-0 min-[1100px]:py-[40px]">
      {/* Centred card */}
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
            items-start px-5 py-6
            sm:px-7 sm:py-8
            min-[900px]:absolute
            min-[900px]:inset-0
            min-[900px]:justify-center
            min-[900px]:px-[4.1%]
            min-[900px]:py-5
          "
        >
          <div className="w-full min-[900px]:w-[66%]">
            {/* Updated heading */}
            <h2
              className="
                m-0 max-w-[650px]
                text-[28px] font-semibold
                leading-[1.12] tracking-[-0.035em]
                text-white
                sm:text-[34px]
                min-[900px]:text-[clamp(30px,2.5vw,46px)]
              "
            >
              Transform Your Document Signing Process Today
            </h2>

            {/* Updated description */}
            <div
              className="
                mt-3 max-w-[560px]
                space-y-3
                text-[13px] font-normal
                leading-[1.4] text-white
                sm:mt-4 sm:text-[14px]
                min-[900px]:mt-[10px]
                min-[900px]:max-w-[760px]
                min-[900px]:text-[clamp(12px,0.78vw,15px)]
                min-[900px]:leading-[1.3]
              "
            >
              <p>
                Every day a document sits waiting for a signature is a day
                of onboarding, revenue, or service delivery pushed back.
                The Aadhaar eSign API turns that wait into a step that
                finishes before the customer closes the tab.
              </p>

              <p>
                Businesses that have already made the switch aren't just
                signing faster; they're closing deals, issuing policies,
                and onboarding employees on the same day they start the
                conversation. If paperwork is still the slowest part of
                the customer journey, that's the part worth fixing first.
              </p>
            </div>

            {/* Existing Book a Demo button */}
            <CtaImageButton
              href="#contact"
              label="Book a Demo"
              image="/images/book-demo.png"
              hoverText="Book a Demo"
              variant="demo"
              showArrow
              className="
                mt-4 w-[184px] shrink-0
                sm:w-[195px]
                min-[900px]:mt-[14px]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function UanVerificationFaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "Does the customer need an Aadhaar card physically present to eSign?",
      answer:
        "Nope. All they need is their Aadhaar number and access to the mobile number linked to it for OTP.",
    },
    {
      question: "How long will the eSign process take?",
      answer:
        "Most signing flows can be completed in less than a minute from entering the Aadhaar number to the signed document being available.",
    },
    {
      question: "Can multiple people sign the same document?",
      answer:
        "Yes, the API supports multi-signer workflows where each signer authenticates with Aadhaar before finalising the document.",
    },
    {
      question: "What happens if the OTP isn't received?",
      answer:
        "The customer can ask for a new OTP using the same flow. In case the linked mobile number is old, the signature will not be completed unless the customer updates it with UIDAI.",
    },
    {
      question: "Is the signed document tamper-evident?",
      answer:
        "Yes. Once signed, any change to the document invalidates the signature, which makes it easy to spot if a file has been altered after signing.",
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
        {/* Left: heading */}
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

        {/* Right: FAQ accordion */}
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
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
function AadhaarEsignPage() {
  return (
    <main className="w-full">
      <EsignHero />
      <EsignHowItWorksSection />
      <EsignSwitchingBenefitsSection />
      <EsignProcessScrollSection />
      <EsignBusinessUseCasesSection />
      <EsignLegalValiditySection />
      <EsignIntelligenceIdentitySignalCta />
      <UanVerificationFaqSection />
      <FooterSection />
    </main>
  );
}

export default AadhaarEsignPage;