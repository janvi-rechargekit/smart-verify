import { useEffect, useMemo, useState } from "react";

const statsCards = [
  {
    src: "/images/verifications-processed.png",
    alt: "100M+ Verifications Processed",
  },
  {
    src: "/images/platform-uptime.png",
    alt: "99.99% Platform Uptime",
  },
  {
    src: "/images/businesses-served.png",
    alt: "500+ Businesses Served",
  },
  {
    src: "/images/verifications-apis.png",
    alt: "100+ Verification APIs",
  },
];

/*
 * Each category has:
 * icon: icon used in the active pill and details panel
 * pillImage: complete Figma-exported category pill
 */
const categories = [
  {
    name: "Document OCR",
    icon: "/images/icon-document-ocr.png",
    pillImage: "/images/pill-document-ocr.png",
  },
  {
    name: "Digital KYC & eKYC",
    icon: "/images/icon-digital-kyc-symbol.png",
    pillImage: "/images/icon-digital-kyc.png",
  },
  {
    name: "Identity Verification",
    icon: "/images/icon-identity.png",
    pillImage: "/images/pill-identity-verification.png",
  },
  {
    name: "Face Authentication",
    icon: "/images/icon-face.png",
    pillImage: "/images/pill-face-authentication.png",
  },
  {
    name: "Bank Account Verification",
    icon: "/images/icon-bank.png",
    pillImage: "/images/pill-bank-account-verification.png",
  },
  {
    name: "Vehicle Verification API",
    icon: "/images/icon-vehicle.png",
    pillImage: "/images/pill-vehicle-verification-api.png",
  },
  {
    name: "GST Verification API",
    icon: "/images/icon-gst.png",
    pillImage: "/images/pill-gst-verification-api.png",
  },
  {
    name: "Business Verification (KYB)",
    icon: "/images/icon-business.png",
    pillImage: "/images/pill-business-verification-kyb.png",
  },
  {
    name: "eSign",
    icon: "/images/icon-esign.png",
    pillImage: "/images/pill-esign.png",
  },
  {
    name: "Number Intelligence",
    icon: "/images/icon-number.png",
    pillImage: "/images/pill-number-intelligence.png",
  },
  {
    name: "Employee & Income Verification",
    icon: "/images/icon-employee.png",
    pillImage: "/images/pill-employee-income-verification.png",
  },
  {
    name: "Geolocation & Address Intelligence",
    icon: "/images/icon-location.png",
    pillImage: "/images/pill-geolocation-address-intelligence.png",
  },
];
const documentApis = [
  "OCR API PAN",
  "OCR API Bank Passbook",
  "Aadhaar OCR API",
  "Passport OCR API",
  "OCR API Check",
  "OCR API For Voter ID",
  "OCR API GST",
  "COI OCR API Overview",
];

export default function PlatformNumbers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Document OCR");

  const isSearching = searchTerm.trim().length > 0;
  const isDocumentOCR = activeCategory === "Document OCR";
  const showExportedDocumentPanel = !isSearching && isDocumentOCR;

  const filteredCategories = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return categories.filter((category) =>
      category.name.toLowerCase().includes(query)
    );
  }, [searchTerm]);

  // Keep the category pills in the Figma desktop arrangement: 5, 5, 2.
  // When searching, the matching categories are grouped into rows of up to five.
  const categoryRows = useMemo(() => {
    const rows = [];

    for (let index = 0; index < filteredCategories.length; index += 5) {
      rows.push(filteredCategories.slice(index, index + 5));
    }

    return rows;
  }, [filteredCategories]);

  const filteredApis = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return documentApis.filter((api) =>
      api.toLowerCase().includes(query)
    );
  }, [searchTerm]);

  const activeCategoryIcon =
    categories.find((category) => category.name === activeCategory)?.icon ||
    "/images/icon-document-ocr.png";
  const [highlightedCard, setHighlightedCard] = useState(0);

  useEffect(() => {
  const interval = setInterval(() => {
    setHighlightedCard((current) => (current + 1) % statsCards.length);
  }, 1400);

  return () => clearInterval(interval);
}, []);

  return (
    <>
      {/* Platform statistics */}
      <section
        className="platform-stats-section"
        aria-labelledby="platform-stats-heading"
      >
        <div className="platform-stats__inner">
          <img
            id="platform-stats-heading"
            src="/images/platform-heading.png"
            alt="The number Behind Our Platform"
            className="platform-stats__heading-image"
          />

          <div className="platform-stats__grid">
  {statsCards.map((card) => (
    <img
      key={card.src}
      src={card.src}
      alt={card.alt}
      loading="lazy"
      className="
        platform-stat-image
        rounded-2xl
        transition-[filter,transform]
        duration-500
        ease-in-out
        hover:scale-[1.015]
        hover:drop-shadow-[0_0_12px_rgba(116,76,255,0.45)]
      "
    />
  ))}
</div>
</div>
      </section>

      {/* API search and category explorer */}
      <section
        id="api-explorer"
        className="api-finder-section"
        aria-labelledby="api-finder-heading"
      >
        <div className="api-finder__inner">
          <header className="api-finder__header">
            <img
              id="api-finder-heading"
              src="/images/api-finder-heading.png"
              alt="Search for the Verification API You Need All in One Place"
              className="api-finder__heading-image"
            />

            <p>Search over 100 APIs organized by category.</p>
          </header>

          {/* Search bar and side glow */}
          <div className="api-search-image-wrap">
            
<img
  src="/images/api-search-glow.png"
  alt=""
  aria-hidden="true"
  className="api-finder__side-glow api-finder__side-glow--left max-[700px]:hidden!"
/>

<img
  src="/images/api-search-glow.png"
  alt=""
  aria-hidden="true"
  className="api-finder__side-glow api-finder__side-glow--right max-[700px]:hidden!"
/>

            <img
              src="/images/api-search-bar.png"
              alt=""
              aria-hidden="true"
              className="api-search-image"
            />

            {isSearching && (
              <span
                className="api-search-value-mask"
                aria-hidden="true"
              />
            )}

            <div className="api-search-image-overlay">
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder=""
                aria-label="Search verification APIs"
                className={`api-search-image-input ${
                  isSearching ? "has-value" : ""
                }`}
              />

              {isSearching && (
                <button
                  type="button"
                  className="api-search__clear"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* Figma category rows: five, five, and two */}
          <div
            className="api-categories api-categories--interactive"
            aria-label="API categories"
          >
            {categoryRows.map((row, rowIndex) => (
              <div className="api-categories__row" key={rowIndex}>
                {row.map((category) => {
                  const isActive = activeCategory === category.name;

                  return (
                    <button
                      type="button"
                      key={category.name}
                      onClick={() => setActiveCategory(category.name)}
                      className={`api-category ${
                        isActive ? "is-active" : ""
                      } ${
                        !isActive && category.pillImage
                          ? "api-category--full-image"
                          : ""
                      }`}
                      aria-label={category.name}
                      aria-pressed={isActive}
                    >
                      {!isActive && category.pillImage ? (
                        <img
                          src={category.pillImage}
                          alt=""
                          aria-hidden="true"
                          className="api-category__full-image"
                          draggable="false"
                        />
                      ) : (
                        <>
                          <img
                            src={category.icon}
                            alt=""
                            aria-hidden="true"
                            className="api-category__png-icon"
                            loading="lazy"
                          />

                          <span>{category.name}</span>
                        </>
                      )}
                    </button>
                  );
                })}
              </div>
            ))}

            {filteredCategories.length === 0 && (
              <p className="api-empty-message">
                No matching categories found.
              </p>
            )}
          </div>

          {/* Default Document OCR panel */}
          {showExportedDocumentPanel && (
            <div className="api-document-panel-wrap">
              <img
                src="/images/document-ocr-panel.png"
                alt="Document OCR details and available OCR verification APIs"
                className="api-document-panel"
                loading="lazy"
              />

              <span
                className="api-document-panel__icon"
                aria-hidden="true"
              >
                <svg viewBox="0 0 36 36" fill="none">
                  <path
                    d="M11 5H7a3 3 0 0 0-3 3v4M25 5h4a3 3 0 0 1 3 3v4M32 24v4a3 3 0 0 1-3 3h-4M11 31H7a3 3 0 0 1-3-3v-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M11 12h14v12H11z"
                    fill="currentColor"
                  />
                  <path
                    d="M7 18h4m14 0h4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
          )}

          {/* Dynamic details panel: hidden while the exported OCR panel is visible */}
          {!showExportedDocumentPanel && (
            <div className="api-details-card api-details-card--interactive is-searching">
              <div className="api-details-card__intro">
                <span className="api-details-card__main-icon">
                  <img
                    src={activeCategoryIcon}
                    alt=""
                    className="api-category__png-icon"
                    loading="lazy"
                  />
                </span>

                <h3>{activeCategory}</h3>

                <p>
                  {isDocumentOCR
                    ? "Extract key information from identity documents, invoices, and business records in seconds with AI-powered OCR. Eliminate manual data entry, reduce processing errors, and speed up verification workflows. Capture accurate data from multiple document formats while improving operational efficiency."
                    : `Explore ${activeCategory} solutions to support faster, more consistent verification workflows for your business.`}
                </p>

                <a
                  href="#verification-details"
                  className="api-details-card__link"
                >
                  Explore {activeCategory} <span aria-hidden="true">→</span>
                </a>
              </div>

              <div className="api-details-card__divider" />

              <div className="api-details-card__list">
                {filteredApis.map((api) => (
                  <button
                    className="api-service"
                    type="button"
                    key={api}
                    onClick={() => setSearchTerm(api)}
                    title={`Search for ${api}`}
                  >
                    <img
                      src="/images/icon-document-ocr.png"
                      alt=""
                      className="api-category__png-icon"
                      loading="lazy"
                    />

                    <span>{api}</span>
                  </button>
                ))}

                {filteredApis.length === 0 && (
                  <p className="api-empty-message">
                    No matching APIs in this category list.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Verification API benefits */}
      <section
        id="verification-benefits"
        className="verification-benefits"
        aria-labelledby="verification-benefits-heading"
      >
        <div className="verification-benefits__inner">
          <h2
            id="verification-benefits-heading"
            className="verification-benefits__heading"
          >
            Why Use Our <span>Verification APIs</span>
            <br /> for Your Business?
          </h2>

          <div className="verification-benefits__visual">
            <img
              src="/images/verification-benefits-full.png"
              alt="Verification API benefits"
              className="verification-benefits__full-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
