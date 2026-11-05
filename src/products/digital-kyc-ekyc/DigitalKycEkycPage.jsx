import CtaImageButton from "../../components/shared/CtaImageButton.jsx";
import FooterSection from "../../sections/FooterSection.jsx";
import IdentityIndustryIcon from "../../components/shared/IdentityIndustryIcon.jsx";
function DigitalKycEkycHero() {
  const description =
    "Customer onboarding shouldn't be slowed down by manual verification. SmartVerify's Digital KYC & eKYC APIs help businesses verify customer identities securely and in real time using Aadhaar, PAN, OTP, and other trusted data sources. Automate KYC workflows, meet regulatory requirements, and deliver a faster onboarding experience with enterprise-grade verification APIs.";

  return (
    <section
      id="digital-kyc-ekyc"
      aria-labelledby="digital-kyc-ekyc-title"
      className="
        relative isolate min-h-0 w-full
        overflow-hidden bg-white
        min-[900px]:min-h-[620px]
      "
    >
      {/* Soft pink glow on the left */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute bottom-0 left-0 -z-10
          h-[68%] w-[13%]
          bg-gradient-to-r from-[#EC3069]/35
          via-[#EC3069]/12 to-transparent blur-2xl
        "
      />

      <div
        className="
          mx-auto grid min-h-0 w-full
          grid-cols-1 items-start gap-6
          px-5 pb-8 pt-22
          sm:px-8 sm:pt-22
           min-[900px]:pt-0
          min-[900px]:min-h-[620px]
          min-[900px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
          min-[900px]:items-start
          min-[900px]:gap-0
          min-[900px]:px-0
          min-[900px]:py-0
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            relative z-10 flex min-w-0
            flex-col items-start
            min-[900px]:top-[130px]
            min-[900px]:ml-[7.5vw]
            min-[900px]:w-[min(36vw,620px)]
          "
        >
          {/* Heading */}
          <h1
            id="digital-kyc-ekyc-title"
            className="m-0 w-full max-w-[620px]"
          >
            <img
              src="/images/digital-kyc-ekyc-heading.png"
              alt="Digital KYC & eKYC APIs for Fast Customer Verification"
              className="block h-auto w-full"
              draggable="false"
              fetchPriority="high"
            />
          </h1>

          {/* Manually written description for mobile and desktop */}
          <p
            className="
              mt-4 block w-full max-w-[520px]
              text-[13px] leading-[1.4]
              text-[#666666]
              sm:text-[14px]
              min-[900px]:mt-[40px]
              min-[900px]:text-[15px]
              min-[900px]:leading-[1.45]
            "
          >
            {description}
          </p>

          {/* CTA buttons */}
          <div
            className="
              mt-6 flex w-full flex-col
              items-center justify-center gap-4
              min-[640px]:flex-row
              min-[640px]:flex-wrap
              min-[640px]:gap-x-4
              min-[900px]:mt-[42px]
              min-[900px]:justify-start
              min-[900px]:gap-x-[27px]
            "
          >
            <CtaImageButton
              href="#documentation"
              label="View Documentation"
              image="/images/view-documentation.png"
              hoverText="View Documentation"
              variant="docs"
              className="w-[240px] max-w-full min-[900px]:w-[240px]"
            />

            <CtaImageButton
              href="#contact"
              label="Book a Demo"
              image="/images/book-demo.png"
              hoverText="Book a Demo"
              variant="demo"
              showArrow
              className="w-[240px] max-w-full min-[900px]:w-[240px]"
            />
          </div>
        </div>

        {/* RIGHT HERO VISUAL */}
        <div
          className="
            relative flex min-w-0
            -mb-8
            items-center justify-center
            min-[900px]:min-h-[620px]
            min-[900px]:justify-end
            min-[900px]:items-end
            min-[900px]:mb-0
          "
        >
          <img
            src="/images/digital-kyc-ekyc-hero-visual.png"
            alt="Customer using a smartphone with digital identity verification cards"
            className="
              block h-auto w-full max-w-[880px] object-contain
              min-[900px]:translate-x-[12px]
              min-[900px]:translate-y-0
              min-[900px]:-mb-6
              
            "
            draggable="false"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}

function DigitalKycManualProblemSection() {
  const problems = [
    {
      title: "Drop-offs during onboarding",
      description:
        "Every minute a customer waits, it’s another minute they could give up.",
    },
    {
      title: "Higher operating costs",
      description:
        "Automated Digital KYC APIs help reduce manual reviews, repetitive tasks, and the cost of onboarding customers.",
    },
    {
      title: "Human error",
      description:
        "Manual checks make it easier to overlook false or altered IDs. Automated verification helps identify inconsistencies.",
    },
    {
      title: "Compliance exposure",
      description:
        "Manual processes make consistent audit trails and compliance checks harder to maintain.",
    },
  ];

  return (
    <section
      id="digital-kyc-challenges"
      aria-labelledby="digital-kyc-challenges-title"
      className="
        relative isolate w-full overflow-hidden
        bg-[#6045F8]
        bg-[url('/images/digital-kyc-manual-bg.png')]
        bg-cover bg-center bg-no-repeat
        min-[900px]:min-h-[650px]
        min-[900px]:aspect-[1920/1004]
      "
    >
      {/* Heading and subtitle */}
      <div
        className="
          relative z-10 mx-auto flex w-full
          flex-col items-center px-5 pt-10
          text-center
          min-[900px]:absolute
          min-[900px]:left-1/2
          min-[900px]:top-[9.5%]
          min-[900px]:-translate-x-1/2
          min-[900px]:px-0
          min-[900px]:pt-0
        "
      >
        <h2
          id="digital-kyc-challenges-title"
          className="
            m-0 w-full max-w-[560px]
            text-[27px] font-semibold
            leading-[1.15] tracking-[-0.03em]
            text-white
            sm:text-[32px]
            min-[900px]:w-[min(60vw,900px)]
            min-[900px]:max-w-none
            min-[900px]:text-[clamp(32px,3vw,54px)]
          "
        >
          Why Businesses Are Moving Away from Manual KYC
        </h2>

        <p
          className="
            mt-4 max-w-[560px]
            text-[14px] leading-[1.45]
            text-white/90
            sm:text-[16px]
            min-[900px]:mt-[22px]
            min-[900px]:max-w-[760px]
            min-[900px]:text-[clamp(14px,1.1vw,20px)]
          "
        >
          Manual verification isn't just slow — it creates real business
          problems.
        </p>
      </div>

      {/* ========================================================
          DESKTOP LAYOUT 
          ======================================================== */}
      
      {/* Center Phone Image */}
      <div className="absolute bottom-0 left-1/2 z-30 hidden w-[550px] -translate-x-1/2 min-[900px]:block min-[1200px]:w-[650px]">
        <img
          src="/images/digital-kyc-manual-phone.png"
          alt="A hand holding a phone displaying the manual KYC verification workflow"
          draggable="false"
          className="h-auto w-full object-contain"
        />
      </div>

      {/* Left Column Cards (1 & 3) */}
      <div className="absolute left-[3%] top-[28%] z-20 hidden w-[38%] max-w-[650px] flex-col gap-20 min-[900px]:flex min-[1200px]:gap-24">
        {[problems[0], problems[2]].map((problem, index) => (
          <article
            key={problem.title}
            className="rounded-sm border border-white/50 bg-transparent p-6 text-white backdrop-blur-[2px]"
          >
            {/* Added pr-24 to push heading away from the phone */}
            <h3 className="pr-24 text-[24px] font-normal leading-snug">
              {problem.title}
            </h3>
            {/* 
              Increased pr to pr-32 specifically for the second card (index 1) 
              to avoid the thumb overlapping the text 
            */}
            <p className={`mt-2 text-[16px] leading-[1.5] text-white/90 ${index === 1 ? 'pr-32' : 'pr-16'}`}>
              {problem.description}
            </p>
          </article>
        ))}
      </div>

      {/* Right Column Cards (2 & 4) */}
      <div className="absolute right-[3%] top-[28%] z-20 hidden w-[38%] max-w-[650px] flex-col gap-20 min-[900px]:flex min-[1200px]:gap-24">
        {[problems[1], problems[3]].map((problem) => (
          <article
            key={problem.title}
            className="rounded-sm border border-white/50 bg-transparent p-6 text-white backdrop-blur-[2px]"
          >
            {/* Added pl-12 to push heading to the right, away from phone */}
            <h3 className="pl-12 text-[24px] font-normal leading-snug">
              {problem.title}
            </h3>
            {/* Kept pl-12 on paragraph to align with heading and avoid phone */}
            <p className="mt-2 pl-12 text-[16px] leading-[1.5] text-white/90">
              {problem.description}
            </p>
          </article>
        ))}
      </div>

      {/* ========================================================
          MOBILE LAYOUT (Unchanged)
          ======================================================== */}
      <div className="relative z-10 mx-auto mt-8 flex w-[90%] max-w-[520px] flex-col gap-3 pb-0 min-[900px]:hidden">
        {problems.map((problem) => (
          <article
            key={problem.title}
            className="rounded-xl border border-white/40 bg-white/10 px-4 py-4 text-white"
          >
            <h3 className="text-[16px] font-medium leading-tight">
              {problem.title}
            </h3>
            <p className="mt-2 text-[14px] leading-[1.45] text-white/90">
              {problem.description}
            </p>
          </article>
        ))}

        <img
          src="/images/digital-kyc-manual-phone.png"
          alt="A hand holding a phone displaying the manual KYC verification workflow"
          draggable="false"
          loading="lazy"
          className="mx-auto mt-6 block h-auto w-[min(85vw,380px)] max-w-full -mb-8"
        />
      </div>
    </section>
  );
}
function DigitalKycHowItWorksSection() {
  const steps = [
    {
      image: "/images/digital-kyc-step-1.png",
      alt: "Customer identity details being scanned in a mobile app",
      description:
        "Your customer provides their ID details (or scans a document) in your app.",
    },
    {
      image: "/images/digital-kyc-step-2.png",
      alt: "Backend servers sending data through an API",
      description:
        "Then your backend sends that data to the SmartVerify API.",
    },
    {
      image: "/images/digital-kyc-step-3.png",
      alt: "A security shield protecting a database during verification",
      description:
        "SmartVerify cross-references it against the appropriate database.",
    },
    {
      image: "/images/digital-kyc-step-4.png",
      alt: "A verified status checklist",
      description:
        "You get a verified/not-verified response with matched details, ready to store or act on.",
    },
  ];

  return (
    <section
      id="digital-kyc-how-it-works"
      aria-labelledby="digital-kyc-how-it-works-title"
      className="w-full bg-white pb-12 pt-8 sm:pb-16 sm:pt-10 lg:pb-[64px] lg:pt-8"
    >
      <div className="mx-auto w-[90%] max-w-[1515px] xl:w-[84%] 2xl:w-[79%]">

        {/* Heading and description */}
        <header className="flex flex-col items-start gap-6 min-[900px]:flex-row min-[900px]:justify-between min-[900px]:gap-10">
          <h2
            id="digital-kyc-how-it-works-title"
            className="m-0 w-full max-w-[644px] min-[900px]:w-[43%]"
          >
            <img
              src="/images/digital-kyc-how-it-works-heading.png"
              alt="How SmartVerify's Digital KYC & eKYC APIs Work"
              className="block h-auto w-full"
              draggable="false"
            />
          </h2>

          <img
            src="/images/digital-kyc-how-it-works-description.png"
            alt="SmartVerify APIs integrate directly into the onboarding flow via a REST API, removing the need for a separate verification portal and manual uploads to a third-party dashboard. Your application makes a request, and SmartVerify checks this against the relevant government or regulatory source and delivers a structured JSON response within seconds."
            className="block h-auto w-full max-w-[621px] min-[900px]:w-[41%]"
            draggable="false"
          />
        </header>

        
{/* Four illustrated steps */}
<div className="mt-9 grid w-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 min-[1100px]:grid-cols-4! min-[1100px]:gap-x-6 min-[1200px]:mt-[76px]">
  {steps.map((step) => (
    <article key={step.image} className="w-full min-w-0">
      <img
        src={step.image}
        alt={step.alt}
        draggable="false"
        className="block aspect-[335/247] w-full rounded-[8px] object-cover"
      />

      <p className="mt-5 text-[16px] leading-[1.3] text-[#292929] sm:text-[18px] min-[1200px]:mt-[29px] min-[1200px]:text-[20px] min-[1200px]:leading-[1.25]">
        {step.description}
      </p>
    </article>
  ))}
</div>
      </div>
    </section>
  );
}

function DigitalKycApiMethodsSection() {
  const cards = [
    {
      type: "image",
      src: "/images/digital-kyc-unified-visual.png",
      alt: "Digital identity protection illustration with a security shield, identity profile, fingerprint and locked credentials.",
      position: "top",
    },
    {
      type: "text",
      title: "Unified Digital KYC API",
      description:
        "The Unified Digital KYC API streamlines onboarding by offering a single integration point for multiple verification methods—including Aadhaar OTP eKYC, PAN checks, and document verification.",
      benefits: [
        {
          title: "One Integration:",
          text: "Write code once rather than building and maintaining separate pipelines for every ID type.",
        },
        {
          title: "Dynamic Routing:",
          text: "Automatically routes customers down the correct verification path based on the document provided.",
        },
        {
          title: "Faster Deployment:",
          text: "Speeds up development and simplifies updates as regulatory requirements evolve.",
        },
        {
          title: "Best Used For:",
          text: "Platforms with diverse user bases—such as lending apps, insurance providers, and fintechs—where customers submit different forms of identification.",
        },
      ],
      position: "top",
    },
    {
      type: "text",
      title: "DigiLocker Service API",
      description:
        "The Unified Digital KYC API streamlines onboarding by offering a single integration point for multiple verification methods—including Aadhaar OTP eKYC, PAN checks, and document verification.",
      benefits: [
        {
          title: "One Integration:",
          text: "Write code once rather than building and maintaining separate pipelines for every ID type.",
        },
        {
          title: "Dynamic Routing:",
          text: "Automatically routes customers down the correct verification path based on the document provided.",
        },
        {
          title: "Faster Deployment:",
          text: "Speeds up development and simplifies updates as regulatory requirements evolve.",
        },
        {
          title: "Best Used For:",
          text: "Platforms with diverse user bases—such as lending apps, insurance providers, and fintechs—where customers submit different forms of identification.",
        },
      ],
      position: "bottom",
    },
    {
      type: "image",
      src: "/images/digital-kyc-digilocker-visual.png",
      alt: "Identity document verification illustration with a green verification shield and magnifying glass.",
      position: "bottom",
    },
  ];

  return (
    <section
      id="digital-kyc-api-methods"
      aria-label="Digital KYC API methods"
      className="w-full bg-white"
    >
      {/* Grey separator */}
      <div
        aria-hidden="true"
        className="h-6 w-full bg-[#F0F0F0]"
      />

      {/* API cards */}
      <div className="bg-white py-5 sm:py-7 lg:py-[20px]">
        <div
          className="
            mx-auto grid w-[92%] grid-cols-1 gap-5
            min-[640px]:w-[88%]
            min-[640px]:grid-cols-2
            min-[900px]:w-[80%]
            min-[900px]:max-w-[1536px]
            min-[900px]:gap-x-[1.25vw]
            min-[900px]:gap-y-[2.3vw]
          "
        >
          {cards.map((card) => (
            <article
              key={card.type === "image" ? card.src : card.title}
              className="
                relative min-w-0 overflow-hidden
                rounded-[18px] bg-[#F6F8FC]
                aspect-auto
                min-[640px]:aspect-[748/588]
              "
            >
              {card.type === "image" ? (
                <img
                  src={card.src}
                  alt={card.alt}
                  draggable="false"
                  loading="lazy"
                  className="block h-full w-full object-cover"
                />
              ) : (
                <div
                  className="
                    flex h-full min-h-[300px] flex-col
                    justify-center px-5 py-6
                    sm:px-6 sm:py-7
                    min-[900px]:px-8
                    min-[900px]:py-8
                  "
                >
                  <h3 className="text-[16px] font-medium leading-snug text-[#111827] sm:text-[18px]">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-[1.4] text-[#444444] sm:text-[14px]">
                    {card.description}
                  </p>

                  <p className="mt-4 text-[13px] font-medium text-[#222222] sm:text-[14px]">
                    Key Benefits:
                  </p>

                  <ul className="mt-2 list-disc space-y-2 pl-4 text-[12px] leading-[1.4] text-[#333333] sm:text-[13px]">
                    {card.benefits.map((benefit) => (
                      <li key={benefit.title}>
                        <span className="font-medium">
                          {benefit.title}
                        </span>{" "}
                        {benefit.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DigitalKycAudienceSection() {
  const audiences = [
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
        "Meet RBI and regulatory documentation standards and reduce onboarding time.",
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
        "Automate policyholder verification at signup and claims, without manual back-and-forth.",
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
      id="digital-kyc-audiences"
      aria-labelledby="digital-kyc-audiences-title"
      className="w-full bg-white"
    >
      {/* Section separator */}
      <div
        aria-hidden="true"
        className="h-6 w-full bg-[#F0F0F0]"
      />

      <div
        className="
          mx-auto grid w-[90%] max-w-[1536px]
          grid-cols-1 items-start gap-8 py-12
          sm:w-[88%]
          min-[1100px]:w-[80%]
          min-[1100px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
          min-[1100px]:gap-x-6
          min-[1100px]:gap-y-0
        "
      >
        {/* LEFT: Heading and manually rendered audience cards */}
        <div className="min-w-0 min-[1120px]:translate-x-12">
          <h2
            id="digital-kyc-audiences-title"
            className="m-0 w-[280px] max-w-full"
          >
            <img
              src="/images/digital-kyc-who-uses-heading.png"
              alt="See Who’s Using SmartVerify"
              draggable="false"
              className="block h-auto w-full"
            />
          </h2>

          <div className="mt-9 flex flex-col gap-[14px]">
            {audiences.map((audience) => (
              <article
                key={audience.title}
                className="
                  flex items-center gap-3
                  rounded-[10px]
                  border border-[#D3CCFF]
                  bg-white
                  px-3 py-4
                  sm:gap-4 sm:px-5 sm:py-5
                  min-[1100px]:bg-[#E5E4FF]
                "
              >
                <IdentityIndustryIcon type={audience.icon} />

                <div className="min-w-0 flex-1">
                  <h3
                    className="
                      text-[15px] font-medium
                      leading-snug text-[#111827]
                      sm:text-[17px]
                    "
                  >
                    {audience.title}
                  </h3>

                  <p
                    className="
                      mt-2 text-[12px]
                      leading-[1.4] text-[#292929]
                      sm:text-[14px]
                    "
                  >
                    {audience.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* RIGHT: Original illustration */}
        <div
          className="
            flex min-w-0 items-start justify-center
            min-[1100px]:mt-[86px]
            min-[1100px]:translate-x-6
          "
        >
          <img
            src="/images/digital-kyc-who-uses-visual.png"
            alt="Digital identity verification illustration featuring a secure document, verification shields and protected data."
            draggable="false"
            loading="lazy"
            className="
              block h-auto w-full max-w-[520px]
              object-contain
              min-[1100px]:max-w-none
            "
          />
        </div>
      </div>
    </section>
  );
}
function DigitalKycIntroHeroSection() {
  const description =
    "SmartVerify's OCR APIs accurately extract data from blurry, tilted, or low-quality uploads in seconds. Developers can quickly test and integrate using clear documentation and a sandbox environment. Once live, the API helps automate document processing, reduce manual errors, and speed up onboarding.";

  return (
    <section
      id="digital-kyc-intro"
      aria-labelledby="digital-kyc-intro-title"
      className="w-full bg-white"
    >
      {/* Grey separator */}
      <div aria-hidden="true" className="h-6 w-full bg-[#F0F0F0]" />

      {/* Hero Container */}
      <div className="relative w-full bg-white min-[900px]:aspect-[1920/868] min-[900px]:min-h-[490px] min-[900px]:overflow-hidden">
        
        {/* 
          DESKTOP ONLY: Background composition image.
          By wrapping it in a div that is strictly hidden on mobile, 
          we guarantee it won't appear over the text.
        */}
        <div className="hidden min-[900px]:block pointer-events-none absolute inset-0">
          <img
            src="/images/digital-kyc-ekyc-hero.png"
            alt=""
            aria-hidden="true"
            draggable="false"
            fetchPriority="high"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Content: heading, description and Know More */}
        <div
          className="
            relative z-10 mx-auto flex w-[88%]
            flex-col items-start
            pt-8 pb-0
            sm:w-[84%] sm:pt-10
            min-[900px]:absolute
            min-[900px]:inset-0
            min-[900px]:mx-auto
            min-[900px]:w-[80%]
            min-[900px]:justify-center
            min-[900px]:py-0
          "
        >
          <h1
            id="digital-kyc-intro-title"
            className="m-0 w-full max-w-[370px] min-[900px]:w-[min(30vw,580px)] min-[900px]:max-w-none"
          >
            <img
              src="/images/digital-kyc-ekyc-hero-heading.png"
              alt="Why Businesses KYC & eKYC APIs for Fast Customer Verification"
              draggable="false"
              fetchPriority="high"
              className="block h-auto w-full"
            />
          </h1>

          <p
            className="
              mt-4 w-full max-w-[420px]
              text-[13px] leading-[1.45]
              text-[#555555]
              sm:text-[14px]
              min-[900px]:max-w-[550px]
              min-[900px]:text-[15px]
              min-[900px]:leading-[1.5]
            "
          >
            {description}
          </p>

          <a
            href="#digital-kyc-start-apis"
            className="solutions-know-more mt-5"
            aria-label="Know more about Digital KYC and eKYC APIs"
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

      {/* MOBILE ONLY: clean illustration below the content */}
      <div className="block w-full px-4 pb-8 pt-4 min-[900px]:hidden">
        <img
          src="/images/digital-kyc-ekyc-hero.png"
          alt="Digital KYC customer verification illustration"
          draggable="false"
          fetchPriority="high"
          className="block h-auto w-full object-contain"
        />
      </div>
    </section>
  );
}

function DigitalKycStartWithApisSection() {
  const description =
    "Integrating digital KYC into your onboarding flow doesn't require a rebuild of your existing system. Most teams connect SmartVerify's APIs within a sandbox environment first, test against sample data, then move to production once the flow is confirmed.";

  return (
    <section
      id="digital-kyc-start-apis"
      aria-labelledby="digital-kyc-start-apis-title"
      className="w-full bg-white"
    >
      {/* Grey separator above the banner */}
      <div
        aria-hidden="true"
        className="h-6 w-full bg-[#F0F0F0]"
      />

      {/* Narrower banner with equal side spacing */}
      <div className="mx-auto w-[80%] max-w-[1440px] py-5 sm:py-7 lg:py-8">

        {/* DESKTOP */}
        <div className="relative hidden aspect-[1520/399] w-full overflow-hidden rounded-[12px] min-[900px]:block">
          {/* Figma background artwork */}
          <img
            src="/images/digital-kyc-start-banner.png"
            alt=""
            aria-hidden="true"
            draggable="false"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Heading, description and reusable CTA */}
          <div className="absolute left-[4.5%] top-1/2 flex w-[57%] -translate-y-1/2 flex-col items-start">
            <h2
              id="digital-kyc-start-apis-title"
              className="m-0 w-full max-w-[540px]"
            >
              <img
                src="/images/digital-kyc-start-heading.png"
                alt="Start with SmartVerify’s Digital KYC APIs"
                draggable="false"
                className="block h-auto w-full"
              />
            </h2>

            <img
              src="/images/digital-kyc-start-description.png"
              alt={description}
              draggable="false"
              className="mt-4 block h-auto w-full max-w-[825px]"
            />

            {/* Reuse existing Book a Demo button */}
            <div className="mt-5 w-full">
              <CtaImageButton
                href="#contact"
                label="Book a Demo"
                image="/images/book-demo.png"
                hoverText="Book a Demo"
                variant="demo"
                showArrow
                className="w-[220px] max-w-full min-[1180px]:w-[195px]"
              />
            </div>
          </div>
        </div>

        {/* MOBILE AND TABLET */}
        <div className="overflow-hidden rounded-[12px] bg-[#6547F8] min-[900px]:hidden">
          
          {/* 
            FIX APPLIED HERE: 
            Added 'hidden' to this container so the scanner image 
            does not appear on mobile/tablet. 
          */}
          <div className="hidden relative h-[180px] w-full overflow-hidden sm:h-[240px]">
            <img
              src="/images/digital-kyc-start-banner.png"
              alt=""
              aria-hidden="true"
              draggable="false"
              className="absolute inset-0 h-full w-full object-cover object-right"
            />
          </div>

          {/* Responsive text content */}
          {/* Added pt-6 (or padding-top) so the text doesn't hit the top edge now that the image is gone */}
          <div className="flex flex-col items-start px-5 pb-7 pt-6 sm:px-8 sm:pb-9 sm:pt-8">
            <h2
              id="digital-kyc-start-apis-title-mobile"
              className="m-0 w-full max-w-[540px]"
            >
              <img
                src="/images/digital-kyc-start-heading.png"
                alt="Start with SmartVerify’s Digital KYC APIs"
                draggable="false"
                className="block h-auto w-full"
              />
            </h2>

            <img
              src="/images/digital-kyc-start-description.png"
              alt={description}
              draggable="false"
              className="mt-4 block h-auto w-full max-w-[825px]"
            />

            {/* Same reusable CTA on mobile */}
            <div className="mt-5 w-full">
              <CtaImageButton
                href="#contact"
                label="Book a Demo"
                image="/images/book-demo.png"
                hoverText="Book a Demo"
                variant="demo"
                showArrow
                className="w-[220px] max-w-full sm:w-[261px]"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
 function DigitalKycFaqSection() {
  const faqs = [
    {
      question: "What's the difference between KYC and eKYC?",
      answer:
        "KYC is the overall process of verifying a customer's identity, which can be done manually or digitally. eKYC specifically refers to the electronic version, usually completed through Aadhaar-based OTP or biometric checks.",
    },
    {
      question: "Is digital KYC legally valid in India?",
      answer:
        "Yeah. Digital KYC is recognised under RBI and UIDAI guidelines if it adheres to the prescribed process, including consent capture and data handling standards.",
    },
    {
      question: "How long does it take to do an eKYC check through an API?",
      answer:
        "Most of the checks come back in seconds, whereas manual verification can take hours or days.",
    },
    {
      question: "Are DigiLocker documents valid KYC documents?",
      answer:
        "Yes. DigiLocker-issued/verified documents are the legal equivalent of physical documents under the Information Technology Act.",
    },
    {
      question:
        "Do I need to integrate separately for Aadhaar, PAN, and DigiLocker verification?",
      answer:
        "Not with Smart Verify. The Unified Digital KYC API allows you to use multiple verification methods with one integration. You can add the DigiLocker Service API for document-based verification.",
    },
  ];

  return (
    <section
      id="digital-kyc-faq"
      aria-labelledby="digital-kyc-faq-title"
      className="relative isolate w-full overflow-hidden bg-[radial-gradient(ellipse_at_48%_38%,#8B75FF_0%,#7656FF_40%,#6243FA_72%,#5C3CF7_100%)] text-white"
    >
      <div
        className="
          mx-auto grid w-[95%] max-w-[1500px]
          grid-cols-1 gap-12 py-15
          sm:w-[88%] sm:py-14
          min-[1000px]:w-[80%]
          min-[1000px]:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]
          min-[1000px]:gap-[2vw]
          min-[1000px]:py-[109px]
          min-[1000px]:pb-[52px]
        "
      >
        {/* Left: FAQ heading */}
        <div className="min-w-0">
          <h2
            id="digital-kyc-faq-title"
            className="
              m-0 max-w-[460px]
              text-[36px] font-semibold
              leading-[1.16] tracking-[-0.035em]
              sm:text-[42px]
              min-[1000px]:text-[52px]
            "
          >
            Frequently Asked
            <span className="block">Questions</span>
          </h2>
        </div>

        {/* Right: Expandable questions */}
        <div
          className="
            mt-2 flex min-w-0 flex-col
            gap-3 sm:gap-[14px]
            min-[1000px]:mt-2
            min-[1000px]:gap-[15px]
          "
        >
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="
                group min-w-0
                border border-white/75
                bg-white/[0.035]
              "
            >
              <summary
                className="
                  flex min-h-[60px] cursor-pointer
                  list-none items-center justify-between
                  gap-4 px-4 py-4
                  text-[15px] font-medium leading-snug
                  marker:hidden
                  [&::-webkit-details-marker]:hidden
                  sm:min-h-[66px] sm:px-5 sm:text-[17px]
                  min-[1000px]:min-h-[74px]
                  min-[1000px]:px-7
                  min-[1000px]:py-5
                  min-[1000px]:text-[20px]
                "
              >
                <span className="min-w-0 flex-1">
                  {faq.question}
                </span>

                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="
                    h-4 w-4 shrink-0
                    transition-transform duration-200
                    group-open:rotate-180
                  "
                >
                  <path d="M3.5 6.5 10 13l6.5-6.5H3.5Z" />
                </svg>
              </summary>

              <div
                className="
                  border-t border-white/25
                  px-4 pb-4 pt-3
                  text-[14px] leading-[1.5]
                  text-white/90
                  sm:px-5 sm:text-[15px]
                  min-[1000px]:px-7
                  min-[1000px]:pb-5
                  min-[1000px]:text-[17px]
                "
              >
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
function DigitalKycEkycPage() {
  return (
    <main className="w-full">
      <DigitalKycEkycHero />
      <DigitalKycManualProblemSection />
      <div aria-hidden="true" className="h-6 w-full bg-[#F0F0F0]" />
      <DigitalKycHowItWorksSection />
      <DigitalKycApiMethodsSection />
      <DigitalKycAudienceSection />
      <DigitalKycIntroHeroSection />
      <DigitalKycStartWithApisSection />
      <DigitalKycFaqSection />
      <FooterSection />
    </main>
  );
}

export default DigitalKycEkycPage;