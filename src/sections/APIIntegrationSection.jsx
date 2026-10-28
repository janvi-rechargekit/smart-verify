
const integrationFeatures = [
  {
    id: "scalable",
    title: "Scalable Infrastructure",
    iconSrc: "/images/api-integration-scalable.png",
  },
  {
    id: "support",
    title: "Dedicated Integration Support",
    iconSrc: "/images/api-integration-support.png",
  },
  {
    id: "developer",
    title: "Developer-Friendly API Integration",
    iconSrc: "/images/api-integration-developer.png",
  },
  {
    id: "sandbox",
    title: "Access to Sandbox",
    iconSrc: "/images/api-integration-sandbox.png",
  },
  {
    id: "security",
    title: "Strong Authentication",
    iconSrc: "/images/api-integration-authentication.png",
  },
];

function IntegrationFeatureIcon({ src, title }) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className="api-integration-feature__icon-image"
      loading="lazy"
    />
  );
}

export default function APIIntegrationSection() {
  return (
    <section
      id="api-integration"
      className="api-integration-section"
      aria-label="API Integration, Developer-Friendly"
    >
      <div className="api-integration-section__inner">
        {/* Left content */}
        <div className="api-integration-section__content">
          <img
            src="/images/api-integration-heading.png"
            alt="API Integration, Developer-Friendly"
            className="api-integration-section__heading"
          />

          <p className="api-integration-section__description">
            Build, test, and launch verification workflows quickly
            with APIs designed for modern development teams.
          </p>

          {/* Five Figma-exported feature icons */}
          <div className="api-integration-section__features">
            {integrationFeatures.map((feature) => (
              <div
                className="api-integration-feature"
                key={feature.id}
              >
                <IntegrationFeatureIcon
                  src={feature.iconSrc}
                  title={feature.title}
                />

                <span>{feature.title}</span>
              </div>
            ))}
          </div>

          {/* Documentation CTA */}
          <a
            href="#documentation"
            className="api-integration-section__cta"
          >
            <span>View API Documentation</span>

            <svg
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 15 15 5M6 5h9v9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

       {/* Animated Figma laptop asset */}
<img
  src="/images/api integration dashboard.gif"
  alt="Laptop displaying an API management workspace in Visual Studio Code"
  className="api-integration-section__laptop"
  loading="lazy"
/>
      </div>
    </section>
  );
}
