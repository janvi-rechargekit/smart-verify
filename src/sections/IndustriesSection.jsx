import { useState } from "react";

const industries = [
  {
    id: "fintech",
    label: "Fintech",
    imageSrc: "/images/industries-fintech.png",
    imageAlt:
      "Fintech verification solution with secure account creation and identity verification",
    available: true,
  },
  {
    id: "b2b-saas",
    label: "B2B SaaS",
    imageSrc: "/images/industries-b2b-saas.png",
    imageAlt:
      "B2B SaaS business verification to stop fake signups",
    available: true,
  },
  {
    id: "education",
    label: "Education",
    imageSrc: "/images/industries-education.png",
    imageAlt:
      "SmartVerify education industry verification solutions",
    available: true,
  },
  {
    id: "staffing",
    label: "Staffing & Recruitment",
    imageSrc: "/images/industries-staffing&recruitment.png",
    imageAlt:
      "Verified candidate screening for staffing and recruitment",
    available: true,
  },
  {
    id: "logistics",
    label: "Logistics",
    imageSrc: "/images/industries-logistics.png",
    available: true,
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    imageSrc: "/images/industries-ecommerce.png",
    available: true,
  },
  {
    id: "real-estate",
    label: "Real Estate",
    imageSrc: "/images/industries-real-state.png",
    available: true,
  },
  {
    id: "insurance",
    label: "Insurance",
    imageSrc: "/images/industries-insurance.png",
    available: true,
  },
];

export default function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState("fintech");

  const selectedIndustry = industries.find(
    (industry) => industry.id === activeIndustry
  );

  return (
    <section
      id="industries"
      className="industries-section"
      aria-labelledby="industries-heading"
    >
      <div className="industries-section__inner">
        {/* Heading and description */}
        <div className="industries-section__header">
          <h2
            id="industries-heading"
            className="industries-section__heading"
          >
            Built for Industries Where
            <br />
            <span>Every Verification Matters</span>
          </h2>

          <p className="industries-section__description">
            SmartVerify helps businesses verify identities, documents,
            bank accounts, and businesses in seconds, so genuine
            customers move faster, fraud gets stopped earlier, and
            your team spends less time chasing paperwork.
          </p>
        </div>

        {/* Interactive industry tabs */}
        <div
          className="industries-section__tabs"
          role="tablist"
          aria-label="Choose an industry"
        >
          {industries.map((industry) => {
            const isActive = activeIndustry === industry.id;

            return (
              <button
                key={industry.id}
                id={`industry-tab-${industry.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="industry-visual"
                disabled={!industry.available}
                onClick={() => {
                  if (industry.available) {
                    setActiveIndustry(industry.id);
                  }
                }}
                className={`industries-section__tab ${
                  isActive
                    ? "industries-section__tab--active"
                    : ""
                } ${
                  !industry.available
                    ? "industries-section__tab--pending"
                    : ""
                }`}
                title={
                  !industry.available
                    ? "This category will be added next"
                    : undefined
                }
              >
                {industry.label}
              </button>
            );
          })}
        </div>

        {/* Selected industry's Figma-exported image */}
        <div
          id="industry-visual"
          className="industries-section__visual"
          role="tabpanel"
          aria-labelledby={`industry-tab-${selectedIndustry.id}`}
        >
          <img
            key={selectedIndustry.id}
            src={selectedIndustry.imageSrc}
            alt={selectedIndustry.imageAlt}
            className="industries-section__image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}