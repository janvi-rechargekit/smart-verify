
const features = [
  {
    id: "coverage",
    title: "Coverage From Day One",
    titleImage: "/images/coverage-from-day-one-title.png",
    iconImage: "/images/coverage-from-day-one-icon.png",
    description:
      "Verification starts as soon as a user registers, before they even enter your system. SmartVerify verifies phone numbers, emails, and devices to stop bots in their tracks before fraud takes hold.",
  },
  {
    id: "integration",
    title: "Built for Easy Integration",
    titleImage: "/images/built-for-easy-integration-title.png",
    iconImage: "/images/built-for-easy-integration-icon.png",
    description:
      "Integrate with assurance using clean, well-structured APIs and a sandbox environment that lets your team test everything before going live.",
  },
  {
    id: "onboarding",
    title: "Seamless Customer Onboarding",
    titleImage: "/images/seamless-customer-onboarding-title.png",
    iconImage: "/images/seamless customer onboarding.png",
    icon: (
      <>
        <rect x="7" y="3" width="12" height="17" rx="1.5" />
        <path d="M10 7h6M10 10h4" />
        <circle cx="17" cy="17" r="5" />
        <path d="m15 17 1.5 1.5 3-3" />
      </>
    ),
    description:
      "Keep users in your signup flow without external redirects. Document verification, facial matching, and business records are validated directly within your interface.",
  },
  {
    id: "launch",
    title: "Go Live Faster",
    titleImage: "/images/go-live-faster-title.png",
    iconImage: "/images/Go live faster.png",


    icon: (
      <>
        <path d="M13 3 22 8l-9 5-9-5 9-5Z" />
        <path d="M4 8v10l9 5 9-5V8M13 13v10" />
        <circle cx="8" cy="13" r="4" />
        <path d="m6.5 13 1 1 2-2" />
      </>
    ),
    description:
      "Get from your first API call to production quickly with an integration process designed to keep your projects moving.",
  },
];

function FeatureIcon({ feature }) {
  // Use the exact Figma-exported PNG wherever available.
  if (feature.iconImage) {
    return (
      <img
        src={feature.iconImage}
        alt=""
        aria-hidden="true"
        className="simplifying-feature__icon-image"
        loading="lazy"
      />
    );
  }

  // Keep the current SVG icons for cards three and four.
  return (
    <div className="simplifying-feature__icon">
      <svg viewBox="0 0 26 26" fill="none" aria-hidden="true">
        <g
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {feature.icon}
        </g>
      </svg>
    </div>
  );
}

function FeatureTitle({ feature }) {
  if (feature.titleImage) {
    return (
      <h3 className="simplifying-feature__title simplifying-feature__title--image">
        <img
          src={feature.titleImage}
          alt={feature.title}
          className="simplifying-feature__title-image"
          loading="lazy"
        />
      </h3>
    );
  }

  return <h3>{feature.title}</h3>;
}

export default function SimplifyingVerification() {
  return (
    <section
      id="simplifying-verification"
      className="simplifying-verification"
      aria-labelledby="simplifying-verification-heading"
    >
      <div className="simplifying-verification__inner">
        {/* Heading and description */}
        <div className="simplifying-verification__header">
          <div className="simplifying-verification__title-wrap">
            <img
              id="simplifying-verification-heading"
              src="/images/simplifying-verification-heading.png"
              alt="Simplifying Verification for Every Business"
              className="simplifying-verification__heading-image"
            />
          </div>

          <div className="simplifying-verification__description">
            <p>
              Most verification platforms force compromises between
              speed, coverage, and reliability. SmartVerify brings them
              together in one platform, helping you onboard users faster,
              prevent fraud earlier, and integrate with minimal effort.
            </p>
          </div>
        </div>

        {/* Main Figma-exported verification visual */}
        <div className="simplifying-verification__visual">
          <img
            src="/images/simplifying-verification-visual.png"
            alt="A woman using a laptop alongside SmartVerify identity, document, and face verification results"
            className="simplifying-verification__image"
            loading="lazy"
          />
        </div>

        {/* Four feature columns */}
        <div className="simplifying-verification__features">
          {features.map((feature) => (
            <article
              key={feature.id}
              className="simplifying-feature"
            >
              <FeatureIcon feature={feature} />
              <FeatureTitle feature={feature} />
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
