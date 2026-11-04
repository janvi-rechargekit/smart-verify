import { useState } from "react";
import CtaImageButton from "../../components/shared/CtaImageButton.jsx";
import FooterSection from "../../sections/FooterSection.jsx";
function GeolocationAddressIntelligenceHero() {
  return (
    <section
      id="geolocation-address-hero"
      aria-labelledby="geolocation-address-hero-heading"
      className="
        relative isolate w-full overflow-hidden bg-white
        min-[1100px]:h-[min(42.4vw,809px)]
        min-[1100px]:min-h-[650px]
      "
    >
      {/* Original Figma pink and purple background */}
      <img
        src="/images/geolocation-hero-background.png"
        alt=""
        aria-hidden="true"
        draggable="false"
        className="
          pointer-events-none absolute inset-0 z-0
          h-full w-full object-fill
        "
      />

      {/* Desktop professional image */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-0
          hidden min-[1100px]:block
        "
      >
        <img
          src="/images/geolocation-hero-visual.png"
          alt=""
          draggable="false"
          className="
            absolute right-[12%] bottom-0
            block h-[78%] w-auto
            max-w-none object-contain object-bottom
          "
        />
      </div>

      {/* Main content */}
      <div
        className="
          relative z-10 mx-auto flex w-[80%] max-w-[1520px]
          min-[1100px]:translate-x-[30px]
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
            id="geolocation-address-hero-heading"
            className="
              m-0 w-full max-w-[680px]
              min-[1100px]:w-[min(38vw,680px)]
            "
          >
            <img
              src="/images/geolocation-hero-heading.png"
              alt="Geolocation & Address Intelligence APIs"
              draggable="false"
              className="block h-auto w-full"
            />
          </h1>

          {/* Description from the Figma reference */}
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
            A wrong address can lead to failed deliveries, fraudulent
            accounts, incorrect field visits, and missed compliance issues.
            For fintechs, insurers, and logistics businesses handling
            location data at scale, SmartVerify's Geolocation & Address
            Intelligence suite helps verify addresses, validate location
            details, and catch inaccurate data before it becomes a costly
            problem.
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
                w-[180px] shrink-0
                sm:w-[210px]
                min-[1100px]:w-[min(18.3vw,261px)]
              "
            />
          </div>
        </div>

        {/* Mobile and tablet professional image */}
        <div className="mt-8 w-full min-[1100px]:hidden">
          <img
            src="/images/geolocation-hero-visual.png"
            alt="Business professional holding a laptop"
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
function GeolocationAddressWhyMattersSection() {
  return (
    <section
      aria-labelledby="geolocation-why-matters-heading"
      className="relative w-full overflow-hidden bg-white"
    >
      {/* Heading and description */}
      <div
        className="
          relative mx-auto grid w-[80%] max-w-[1520px]
          grid-cols-1 gap-5
          py-8
          sm:py-10
          min-[1100px]:grid-cols-[1fr_0.8fr]
          min-[1100px]:items-center
          min-[1100px]:gap-[5vw]
          min-[1100px]:py-[34px]
        "
      >
        {/* Exact Figma heading image */}
<h2
  id="geolocation-why-matters-heading"
  className="m-0 w-full max-w-[600px] min-[1100px]:w-[min(35vw,600px)] min-[1100px]:translate-x-[22px]"
>
  <img
    src="/images/why-accurate-address-verification-matters.png"
    alt="Why Accurate Address Verification Matters"
    draggable="false"
    className="block h-auto w-full"
  />
</h2>

        <p
          className="
            m-0 max-w-[560px]
            text-[13px] font-normal
            leading-[1.35] text-[#555555]
            sm:text-[14px]
            min-[1100px]:text-[clamp(12px,0.72vw,14px)]
          "
        >
          Most businesses treat address fields as free text. Someone
          types in a location, the form accepts it, and the data sits
          in your database unverified and often wrong. Typos, incomplete
          details, and fake entries slip through every day.
        </p>
      </div>

      {/* Complete Figma image: cards, icons, background and dashboard */}
      <div
        className="
           relative mx-auto
    w-[80%] max-w-[1520px]
    overflow-hidden
    min-[1100px]:translate-x-[22px]
   "
      >
        <img
          src="/images/geolocation-why-matters-visual.png"
          alt="Four benefits of accurate address verification: fewer failed deliveries, stronger fraud signals, more rapid field work, and better risk assessment, alongside a verification dashboard."
          draggable="false"
          loading="lazy"
          className="
            block h-auto w-full
            object-contain
          "
        />
      </div>
    </section>
  );
}
function GeolocationAddressIntelligenceApisSection() {
  const cards = [
    {
      image: "/images/geolocation-reverse-geocoding.png",
      title: "Reverse Geocoding",
      description:
        "Converts latitude and longitude coordinates into a readable address. This is useful when a business receives GPS data and needs to identify the exact location, such as confirming a delivery point or tracking a field agent.",
    },
    {
      image: "/images/geolocation-geocoding.png",
      title: "Geocoding",
      description:
        "Converts a physical address into geographic coordinates. Businesses can use this to locate customers, identify serviceable areas, assign nearby agents, or plan deliveries more efficiently.",
    },
    {
      image: "/images/geolocation-distance-calculation.png",
      title: "Distance Calculation",
      description:
        "Measures the distance between two locations, helping businesses estimate travel requirements, delivery coverage, serviceability, and proximity between customers, stores, warehouses, or field teams.",
    },
  ];

  return (
    <section
      aria-labelledby="geolocation-apis-heading"
      className="w-full overflow-hidden bg-white"
    >
       <div aria-hidden="true" className="h-3 w-full bg-[#F0F0F0]" />

      {/* Heading and description */}
      <div
        className="
          mx-auto mt-[24px] grid w-[80%] max-w-[1520px]
          grid-cols-1 gap-4
          pb-8 pt-10
          sm:pb-10 sm:pt-12
          min-[1100px]:grid-cols-[1.2fr_0.8fr]
          min-[1100px]:items-start
          min-[1100px]:gap-[5vw]
          min-[1100px]:pb-[58px]
          min-[1100px]:pt-[58px]
        "
      >
        {/* Exact Figma heading image */}
        <h2
          id="geolocation-apis-heading"
          className="
            m-0 w-full max-w-[645px]
            min-[1100px]:w-[min(45vw,645px)]
            min-[1100px]:translate-x-[16px]
          "
        >
          <img
            src="/images/geolocation-apis-heading.png"
            alt="What Falls Under Geolocation & Address Intelligence"
            draggable="false"
            className="block h-auto w-full"
          />
        </h2>

        {/* Figma description */}
        <p
          className="
            m-0 max-w-[440px]
            text-[14px] font-normal
            leading-[1.35] text-[#292929]
            sm:text-[14px]
            min-[1100px]:pt-[12px]
            min-[1100px]:text-[clamp(12px,0.72vw,14px)]
            min-[1100px]:translate-x-[24px]
          "
        >
          Geolocation &amp; Address Intelligence brings together three core
          capabilities that help businesses understand, verify, and work with
          location data more accurately.
        </p>
      </div>

      {/* Three API cards */}
<div
  className="
    mx-auto mt-6 grid w-[80%] max-w-[1520px]
    grid-cols-1 gap-4
    pb-12
    min-[600px]:grid-cols-2
    min-[900px]:grid-cols-3
    min-[900px]:gap-[14px]
    min-[900px]:pb-[60px]
    min-[1100px]:translate-x-[16px]
  "
>
  {cards.map((card) => (
    <article
      key={card.title}
      className="
        min-w-0 w-full overflow-hidden
        rounded-[5px]
        border border-[#D0D0D0]
        bg-white
      "
    >
      {/* Card illustration */}
      <div className="p-[6px] pb-0">
        <img
          src={card.image}
          alt=""
          aria-hidden="true"
          draggable="false"
          loading="lazy"
          className="
            block aspect-[1.15/1]
            w-full rounded-[5px]
            object-cover
          "
        />
      </div>

      {/* Card content */}
      <div className="px-[10px] pb-[14px] pt-[14px] sm:px-3">
        <h3
          className="
            m-0 text-[16px] font-normal
            leading-[1.3] text-[#292929]
            min-[900px]:text-[clamp(14px,0.92vw,18px)]
          "
        >
          {card.title}
        </h3>

        <p
          className="
            m-0 mt-[13px]
            text-[12px] font-normal
            leading-[1.3] text-[#414141]
            sm:text-[13px]
            min-[900px]:text-[clamp(11px,0.68vw,13px)]
          "
        >
          {card.description}
        </p>
      </div>
    </article>
  ))}
</div>
    </section>
  );
}
function GeolocationAddressIntelligenceApiExplorer() {
  const apiCards = [
    {
      image: "/images/geolocation-lat-long-to-address.png",
      title: "Lat-Long to Address API",
      subtitle: "(Reverse Geocoding)",
      paragraphs: [
        "This API takes a set of coordinates, latitude and longitude, and returns the matching street address. It's the API you'd use when you already have street address data, like the API you'd use when a delivery app or a device needs to know what's at a particular location.",
        "Ride-hailing apps use it to show a driver's pickup point as a readable address instead of raw numbers. Insurance teams use it to confirm field locations, and field verification businesses use it to log exactly where a site visit happened.",
        "Learn more about the Lat-Long to Address API and how it plugs into location-based workflows.",
      ],
    },
    {
      image: "/images/geolocation-address-to-lat-long.png",
      title: "Address to Lat-Long API",
      subtitle: "(Forward Geocoding)",
      paragraphs: [
        "This API works in the reverse way. Feed it a written address and it returns the exact coordinates. That's the basis for anything that has to geolocate a customer, a store, a destination, or an establishment before someone is ever delivered.",
        "It is used by e-commerce sites to verify delivery addresses at checkout before an order is placed. Retail stores use it to pin logistics accurately on a map. Logistics teams use it to plan routes that actually match where a customer lives, not where a typo suggests they live. Check the Address to Lat-Long API for integration details.",
      ],
    },
    {
      image: "/images/geolocation-distance-between-locations.png",
      title: "Distance Between 2 Locations API",
      subtitle: "",
      paragraphs: [
        "Once you have coordinates for two points, this API calculates the distance between them. That sounds simple, but it powers important business decisions around location and serviceability.",
        "Businesses can use distance calculations to estimate delivery coverage, determine proximity between customers and service locations, and support more accurate field operations.",
      ],
    },
  ];

  return (
    <section
      aria-labelledby="geolocation-api-explorer-heading"
      className="relative w-full overflow-clip bg-white"
    >
    <div aria-hidden="true" className="h-3 w-full bg-[#F0F0F0]" />

      {/* Heading image */}
      <div
        className="
          mx-auto w-[80%] max-w-[1520px]
          pb-8 pt-10
          sm:pb-10 sm:pt-12
          min-[1100px]:pb-[50px]
          min-[1100px]:pt-[58px]
        "
      >
        <h2
          id="geolocation-api-explorer-heading"
          className="
            m-0 w-full max-w-[590px]
            min-[1100px]:w-[min(34vw,590px)]
            min-[1100px]:translate-x-[16px]
          "
        >
          <img
            src="/images/explore-our-address-intelligence-apis.png"
            alt="Explore Our Address Intelligence APIs"
            draggable="false"
            className="block h-auto w-full"
          />
        </h2>
      </div>

      {/* API cards */}
      <div
        className="
          relative mx-auto w-[88%] max-w-[1440px]
          pb-12 
          min-[1100px]:w-[76%]
          min-[1100px]:pb-[100px]
        "
      >
        {apiCards.map((card, index) => (
          <article
            key={card.title}
            className="
              relative mb-6
              overflow-hidden rounded-[8px]
              border border-[#EEEEF2]
              bg-white
              shadow-[0_2px_14px_rgba(20,20,70,0.06)]

              min-[1100px]:sticky
              min-[1100px]:mb-0
              min-[1100px]:grid
              min-[1100px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]
              min-[1100px]:items-center
              min-[1100px]:gap-[5%]
              min-[1100px]:rounded-[10px]
              min-[1100px]:px-[3.2%]
              min-[1100px]:py-[2.5%]
            "
            style={{
              top: `${90 + index * 22}px`,
              zIndex: index + 1,
              minHeight: "min(31vw, 440px)",
            }}
          >
            {/* API image */}
            <div className="w-full min-w-0 p-3 min-[1100px]:p-0">
              <img
                src={card.image}
                alt=""
                aria-hidden="true"
                draggable="false"
                loading={index === 0 ? "eager" : "lazy"}
                className="
                  block aspect-square w-full
                  rounded-[6px] object-cover
                  min-[1100px]:aspect-[1/0.88]
                "
              />
            </div>

            {/* API text */}
            <div
              className="
                min-w-0 px-5 pb-6 pt-2
                min-[1100px]:px-0
                min-[1100px]:py-4
              "
            >
              <h3
                className="
                  m-0 text-[21px] font-normal
                  leading-[1.2] tracking-[-0.025em]
                  text-[#24243A]
                  sm:text-[24px]
                  min-[1100px]:text-[clamp(21px,1.5vw,28px)]
                "
              >
                {card.title}
                {card.subtitle && (
                  <span className="mt-1 block">{card.subtitle}</span>
                )}
              </h3>

              <div
                className="
                  mt-6 space-y-3
                  text-[13px] font-normal
                  leading-[1.45] tracking-[-0.01em]
                  text-[#414151]
                  sm:text-[14px]
                  min-[1100px]:mt-[28px]
                  min-[1100px]:space-y-[14px]
                  min-[1100px]:text-[clamp(12px,0.72vw,14px)]
                "
              >
                {card.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex} className="m-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
function GeolocationAddressIndustriesSection() {
  return (
    <section
      aria-labelledby="geolocation-industries-heading"
      className="w-full overflow-hidden bg-white"
    >
     <div aria-hidden="true" className="h-3 w-full bg-[#F0F0F0]" />

      <div
        className="
          mx-auto w-[80%] max-w-[1520px]
          py-10
          sm:py-12
          min-[1100px]:py-[68px]
        "
      >
        {/* Heading image */}
        <h2
          id="geolocation-industries-heading"
          className="
           mt-6  m-0 w-full max-w-[650px]
            min-[1100px]:w-[min(45vw,650px)]
          "
        >
          <img
            src="/images/geolocation-industries-heading.png"
            alt="Industries That Use Address Intelligence APIs"
            draggable="false"
            className="block h-auto w-full"
          />
        </h2>

        {/* Introductory description */}
        <p
          className="
            m-0 mt-5 max-w-[610px]
            text-[14px] font-normal
            leading-[1.4] text-[#292929]
            sm:text-[14px]
            min-[1100px]:mt-[24px]
            min-[1100px]:max-w-[570px]
            min-[1100px]:text-[clamp(12px,0.72vw,14px)]
          "
        >
          Geolocation and address intelligence isn't just for logistics
          companies. Here's how these APIs are used by different industries:
        </p>

        {/* Industry cards and right-side visual */}
        <div
          className="
            mt-8 grid grid-cols-1 gap-6
            sm:mt-10
            min-[1100px]:mt-[38px]
            min-[1100px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
            min-[1100px]:items-stretch
            min-[1100px]:gap-[20px]
          "
        >
          {/* Left: Exact Figma industry cards image */}
<div className="min-w-0">
  <img
    src="/images/geolocation-industries-cards.png"
    alt="FinTech & Banking, Insurance, E-commerce & Logistics, Real Estate, and Across Industries, with their address intelligence use cases."
    draggable="false"
    className="block h-auto w-full"
  />
</div>

  {/* Right: Slightly smaller visual */}
  <div
    className="
      min-w-0 overflow-hidden rounded-[5px]
      min-[1100px]:w-[94%]
      min-[1100px]:justify-self-center
    "
  >
    <img
      src="/images/geolocation-industries-visual.png"
      alt="Address verification and location intelligence illustration"
      draggable="false"
      loading="lazy"
      className="block h-auto w-full rounded-[5px] object-contain"
    />
  </div>
        </div>
      </div>
    </section>
  );
}
function GeolocationAddressIntegrationSection() {
  return (
    <section
      aria-labelledby="geolocation-integration-heading"
      className="w-full overflow-hidden bg-white"
    >
     <div aria-hidden="true" className="h-3 w-full bg-[#F0F0F0]" />

      <div
        className="
          mx-auto grid w-[80%] max-w-[1520px]
          grid-cols-1 items-center gap-8
          py-10
          sm:py-12
          min-[1100px]:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]
          min-[1100px]:gap-[7vw]
          min-[1100px]:py-[58px]
        "
      >
        {/* Left: Exact Figma heading and description */}
        <div className="min-w-0">
          <h2
            id="geolocation-integration-heading"
            className="
              m-0 w-full max-w-[670px]
              min-[1100px]:w-[min(42vw,670px)]
            "
          >
            <img
              src="/images/geolocation-developer-friendly-heading.png"
              alt="Developer-Friendly APIs Built for Fast Integration"
              draggable="false"
              className="block h-auto w-full"
            />
          </h2>

          <div
            className="
              mt-6 max-w-[720px]
              text-[13px] font-normal
              leading-[1.3] text-[#78869E]
              sm:text-[14px]
              min-[1100px]:mt-[44px]
              min-[1100px]:w-[min(46vw,690px)]
              min-[1100px]:space-y-[18px]
              min-[1100px]:text-[clamp(12px,0.72vw,14px)]
              min-[1100px]:leading-[1.3]
            "
          >
            <p className="m-0">
              Every API in this suite follows a REST structure and returns
              clean JSON, so engineering teams don't need to build custom
              parsers or guess at response formats. Documentation covers
              request parameters, sample responses, and error codes in plain
              language, and a sandbox environment lets test calls against
              real scenarios before anything touches production.
            </p>

            <p className="m-0  mt-5 min-[1100px]:mt-[22px]">
              Integration usually takes a few hours, not weeks. You send a
              request: coordinates, an address, or a pair of locations and
              get a structured answer back. There's no manual review queue
              slowing things down, and there's no need to stitch together
              multiple third-party tools to cover geocoding, reverse
              geocoding, and distance calculation separately.
            </p>
          </div>
        </div>

        {/* Right: Exact supplied API visual */}
        <div
          className="
            mx-auto w-[88%] max-w-[520px]
            min-w-0
            min-[1100px]:w-[88%]
            min-[1100px]:max-w-[460px]
          "
        >
          <img
            src="/images/geolocation-developer-friendly-visual.png"
            alt="Illustration of connected API infrastructure, software interfaces, and a server."
            draggable="false"
            loading="lazy"
            className="
              block h-auto w-full
              rounded-[12px]
              object-contain
            "
          />
        </div>
      </div>
    </section>
  );
}
function GeolocationAddressWorkflowSection() {
  return (
    <section
      aria-labelledby="geolocation-workflow-heading"
      className="w-full overflow-hidden bg-white"
    >
      <div aria-hidden="true" className="h-3 w-full bg-[#F0F0F0]" />

      <div
        className="
          mx-auto grid w-[80%] max-w-[1520px]
          grid-cols-1 items-center gap-8
          py-10
          sm:py-12
          min-[1100px]:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]
          min-[1100px]:gap-[4vw]
          min-[1100px]:py-[58px]
          min-[1100px]:pb-[20px]
        "
      >
        {/* Left: Exact Figma heading and description */}
        <div className="min-w-0">
          <h2
            id="geolocation-workflow-heading"
            className="
              m-0 w-full max-w-[700px]
              min-[1100px]:w-[min(48vw,700px)]
            "
          >
            <img
              src="/images/geolocation-workflow-heading.png"
              alt="Improve Address Accuracy Across Every Workflow"
              draggable="false"
              className="block h-auto w-full"
            />
          </h2>

          {/* Description matching the Figma reference */}
          <p
            className="
              m-0 mt-6 max-w-[700px]
              text-[13px] font-normal
              leading-[1.3] text-[#78869E]
              sm:text-[14px]
              min-[1100px]:mt-[54px]
              min-[1100px]:w-[min(39vw,620px)]
              min-[1100px]:max-w-[620px]
              min-[1100px]:text-[clamp(12px,0.72vw,14px)]
              min-[1100px]:leading-[1.3]
            "
          >
            Address data touches more of your business than it might seem —
            onboarding, fraud checks, delivery logistics, risk models, and
            field operations all depend on knowing where something actually
            is, not where a form field claims it is. SmartVerify's Lat-Long
            to Address, Address to Lat-Long and Distance Between 2 Locations
            APIs give that confirmation at each step, without adding friction
            for the people on the other end of the transaction.

            <br />
            <br />

            If location accuracy is currently a gap in onboarding or logistics
            flow, this is one of the faster problems to fix. Explore the
            sandbox, run a few test calls, and see how the results compare to
            what you're working with today.
          </p>
        </div>

        {/* Right: Exact supplied visual */}
        <div
          className="
            mx-auto w-full max-w-[560px]
            min-w-0
            min-[1100px]:w-[94%]
            min-[1100px]:max-w-[520px]
          "
        >
          <img
            src="/images/geolocation-workflow-visual.png"
            alt="Address accuracy and verification workflow illustration featuring servers, a verified document, a key, and connected cloud infrastructure."
            draggable="false"
            loading="lazy"
            className="
              block h-auto w-full
              rounded-[12px]
              object-contain
            "
          />
        </div>
      </div>
    </section>
  );
}

function GeolocationAddressGetStartedSection() {
  return (
    <section
      aria-labelledby="geolocation-get-started-heading"
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
          bg-[linear-gradient(105deg,#6040FF_0%,#8B70FF_52%,#6040FF_100%)]
          min-[1100px]:w-[80%]
          min-[1100px]:aspect-[1520/340]
          min-[1100px]:min-h-[0px]
        "
      >
        {/* Supplied Figma illustration */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0 z-0
            hidden min-[1100px]:block
          "
        >
          <img
            src="/images/geolocation-get-started-visual.png"
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
            relative z-10 flex h-full w-full
            flex-col items-start
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

            {/* Updated Heading */}
            <h2
              id="geolocation-get-started-heading"
              className="
                m-0 max-w-[750px]
                text-[32px] font-semibold
                leading-[1.08] tracking-[-0.04em]
                text-white
                sm:text-[34px]
                min-[1100px]:text-[clamp(34px,2.8vw,54px)]
              "
            >
              SmartVerify's Geolocation & Address
              <br className="hidden sm:block" />
              {" "} Intelligence
            </h2>

            {/* Updated Description */}
            <p
              className="
                m-0 mt-3 max-w-[800px]
                text-[13px] font-normal
                leading-[1.3] text-white
                sm:text-[13px]
                min-[1100px]:mt-[10px]
                min-[1100px]:text-[clamp(13px,1.02vw,20px)]
                min-[1100px]:leading-[1.2]
              "
            >
              Explore our Geolocation & Address Intelligence to make
              it easy to verify addresses, convert locations, and
              calculate distances with speed and accuracy through
              a platform.
            </p>

            {/* Book a Demo Button */}
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
                min-[900px]:mt-[14px]
              "
            />

          </div>
        </div>
      </div>
    </section>
  );
}

function GeolocationAddressFaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is a geolocation API used for?",
      answer:
        "A geolocation API converts between physical addresses and geographic coordinates or calculates the distance between two points. Businesses use it to validate addresses, plot locations on maps, and support logistics or risk decisions.",
    },
    {
      question: "What's the difference between forward and reverse geocoding?",
      answer:
        "Forward geocoding is the conversion of a written address to coordinates. Reverse geocoding is the opposite; it takes coordinates and returns the matching address. Most workflows use both in different stages.",
    },
    {
      question: "How accurate is the address verification using these APIs?",
      answer:
        "Accuracy depends on the detail of input. It helps to validate the quality of the input ahead of time, since a complete address or precise GPS coordinate will yield a better match than an incomplete or imprecise one.",
    },
    {
      question: "Can I calculate distance for more than two places at once?",
      answer:
        "The Distance Between 2 Locations API is for point-to-point calculation. For multi-location comparisons (e.g., finding the nearest of several branches), you would call the API multiple times, once for each pair of coordinates.",
    },
    {
      question: "Is there a way to test these APIs before going live?",
      answer:
        "Yes, SmartVerify offers a sandbox environment that enables you to make test requests and see sample responses before integrating the APIs into your production environment.",
    },
  ];

  return (
    <section
      aria-labelledby="geolocation-faq-heading"
      className="
        relative w-full overflow-hidden
        bg-[radial-gradient(ellipse_at_50%_45%,#9479ff_0%,#8060ff_43%,#6040ff_100%)]
      "
    >
      <div
        className="
          mx-auto grid w-[90%] max-w-[1520px]
          grid-cols-1 gap-8
          py-10
          sm:py-12
          min-[900px]:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)]
          min-[900px]:items-start
          min-[900px]:gap-x-[6vw]
          min-[900px]:pb-[90px]
          min-[900px]:pt-[80px]
          min-[1100px]:pt-[90px]
        "
      >
        {/* Left: FAQ heading */}
        <h2
          id="geolocation-faq-heading"
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
        <div className="flex min-w-0 flex-col gap-[12px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `geolocation-faq-answer-${index}`;

            return (
              <article
                key={faq.question}
                className="
                  min-w-0 rounded-[4px]
                  border border-white/75
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
                    flex min-h-[54px] w-full
                    items-center justify-between gap-4
                    px-4 py-3 text-left
                    text-[13px] font-normal
                    leading-[1.4] text-white
                    transition-colors duration-200
                    hover:bg-white/[0.08]
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-white
                    sm:min-h-[58px]
                    sm:px-5 sm:text-[14px]
                    min-[900px]:min-h-[42px]
                    min-[900px]:px-[14px]
                    min-[900px]:py-[10px]
                    min-[900px]:text-[clamp(12px,0.85vw,15px)]
                  "
                >
                  <span className="min-w-0 flex-1">
                    {faq.question}
                  </span>

                  <svg
                    aria-hidden="true"
                    viewBox="0 0 14 10"
                    className={`
                      h-[9px] w-[12px] shrink-0
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
                      px-4 pb-4 pt-3
                      text-[12px] leading-[1.55]
                      text-white/90
                      sm:px-5 sm:text-[13px]
                      min-[900px]:px-[14px]
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
function GeolocationAddressIntelligencePage() {
  return (
    <main className="w-full">
      <GeolocationAddressIntelligenceHero />
      <GeolocationAddressWhyMattersSection />
      <GeolocationAddressIntelligenceApisSection />
      <GeolocationAddressIntelligenceApiExplorer />
      <GeolocationAddressIndustriesSection />
      <GeolocationAddressIntegrationSection />
      <GeolocationAddressWorkflowSection />
      <GeolocationAddressGetStartedSection />
      <GeolocationAddressFaqSection />
      <FooterSection />
    </main>
  );
}

export default GeolocationAddressIntelligencePage;