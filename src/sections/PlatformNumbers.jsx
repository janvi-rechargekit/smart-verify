
import { useEffect, useMemo, useState } from "react";

const statsCards = [
  { src: "/images/verifications-processed.png", alt: "100M+ Verifications Processed" },
  { src: "/images/platform-uptime.png", alt: "99.99% Platform Uptime" },
  { src: "/images/businesses-served.png", alt: "500+ Businesses Served" },
  { src: "/images/verifications-apis.png", alt: "100+ Verification APIs" },
];

const categories = [
  { name: "Document OCR", icon: "/images/icon-document-ocr.png", pillImage: "/images/pill-document-ocr.png" },
  { name: "Digital KYC & eKYC", icon: "/images/icon-digital-kyc-symbol.png", pillImage: "/images/icon-digital-kyc.png" },
  { name: "Identity Verification", icon: "/images/icon-identity.png", pillImage: "/images/pill-identity-verification.png" },
  { name: "Face Authentication", icon: "/images/icon-face.png", pillImage: "/images/pill-face-authentication.png" },
  { name: "Bank Account Verification", icon: "/images/icon-bank.png", pillImage: "/images/pill-bank-account-verification.png" },
  { name: "Vehicle Verification API", icon: "/images/icon-vehicle.png", pillImage: "/images/pill-vehicle-verification-api.png" },
  { name: "GST Verification API", icon: "/images/icon-gst.png", pillImage: "/images/pill-gst-verification-api.png" },
  { name: "Business Verification (KYB)", icon: "/images/icon-business.png", pillImage: "/images/pill-business-verification-kyb.png" },
  { name: "eSign", icon: "/images/icon-esign.png", pillImage: "/images/pill-esign.png" },
  { name: "Number Intelligence", icon: "/images/icon-number.png", pillImage: "/images/pill-number-intelligence.png" },
  { name: "Employee & Income Verification", icon: "/images/icon-employee.png", pillImage: "/images/pill-employee-income-verification.png" },
  { name: "Geolocation & Address Intelligence", icon: "/images/icon-location.png", pillImage: "/images/pill-geolocation-address-intelligence.png" },
];

const categoryRoutes = {
  "Document OCR": "/products/document-ocr-api",
  "Digital KYC & eKYC": "/products/digital-kyc-ekyc",
  "Identity Verification": "/products/identity-verification-api",
  "Face Authentication": "/products/face-authentication-api",
  "Bank Account Verification": "/products/bank-account-verification",
  "Vehicle Verification API": "/products/vehicle-verification-api",
  "GST Verification API": "/products/gst-verification-api",
  "Business Verification (KYB)": "/products/business-verification-api",
  "eSign": "/products/aadhaar-esign-api",
  "Number Intelligence": "/products/number-intelligence-api",
  "Employee & Income Verification": "/products/employee-income-verification",
  "Geolocation & Address Intelligence": "/products/geolocation-address-intelligence",
};

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
                className="platform-stat-image rounded-2xl transition-[filter,transform] duration-500 ease-in-out hover:scale-[1.015] hover:drop-shadow-[0_0_12px_rgba(116,76,255,0.45)]"
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

          {/* Search bar */}
          <div className="api-search-image-wrap">
            <div className="relative hidden min-[601px]:block">
              <img
                src="/images/api-search-glow.png"
                alt=""
                aria-hidden="true"
                className="api-finder__side-glow api-finder__side-glow--left"
              />

              <img
                src="/images/api-search-glow.png"
                alt=""
                aria-hidden="true"
                className="api-finder__side-glow api-finder__side-glow--right"
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

            {/* Mobile search bar */}
            <div className="flex h-12 w-full items-center gap-3 rounded-full border border-[#D9D5F5] bg-white px-4 shadow-sm min-[601px]:hidden">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-[#4D3ECA]"
              >
                <circle
                  cx="10.8"
                  cy="10.8"
                  r="6.8"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="m16 16 4 4"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>

              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search for APIs"
                aria-label="Search verification APIs"
                className="h-full min-w-0 flex-1 bg-transparent text-sm text-[#343B4B] outline-none placeholder:text-[#8B8B9A]"
              />

              {isSearching && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F1EFFF] text-lg leading-none text-[#4D3ECA]"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* Figma category rows */}
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
                      onClick={() => {
                        const route = categoryRoutes[category.name];

                        if (route) {
                          window.location.href = route;
                        } else {
                          setActiveCategory(category.name);
                        }
                      }}
                      className={`
                        group flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-[15px] font-medium transition-all duration-300 ease-in-out
                        ${
                          isActive
                            ? "border-[#4D3ECA] bg-[#4D3ECA] text-white shadow-md"
                            : "border-[#D1D5DB] bg-white text-[#4B5563] hover:border-[#4D3ECA] hover:bg-[#4D3ECA] hover:text-white hover:shadow-md"
                        }
                        ${
                          category.name === "Document OCR"
                            ? "min-[701px]:!w-[263px] min-[701px]:!min-w-[263px] min-[701px]:!max-w-[263px] min-[701px]:!shrink-0"
                            : ""
                        }
                      `}
                      aria-label={category.name}
                      aria-pressed={isActive}
                    >
                      <img
                        src={category.icon}
                        alt=""
                        aria-hidden="true"
                        draggable="false"
                        className={`
                          h-5 w-5 shrink-0 object-contain transition-all duration-300
                          ${
                            isActive
                              ? "brightness-0 invert"
                              : "group-hover:brightness-0 group-hover:invert"
                          }
                        `}
                      />

                      <span className="truncate">{category.name}</span>
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
            <>
              {/* Desktop: Original Figma panel — unchanged */}
              <div className="api-document-panel-wrap api-document-desktop-panel">
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

              {/* Mobile: Responsive Tailwind panel */}
              <div className="mx-auto mt-6 mb-8 block w-[calc(100%-24px)] max-w-[460px] rounded-2xl border border-[#E8E5F7] bg-white p-5 shadow-[0_5px_20px_rgba(30,20,80,0.06)] min-[701px]:hidden">

                {/* Heading and scanner icon */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center text-[#4D3ECA]">
                    <svg
                      viewBox="0 0 36 36"
                      fill="none"
                      className="h-full w-full"
                      aria-hidden="true"
                    >
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
                  </div>

                  <h3 className="m-0 text-lg font-semibold leading-tight text-[#171717]">
                    Document OCR
                  </h3>
                </div>

                {/* Description */}
                <p className="m-0 text-[13px] leading-[1.6] text-[#555565]">
                  Extracts key information from identity documents,
                  invoices, and business records in seconds with
                  AI-powered OCR. Eliminate manual data entry, reduce
                  processing errors, and speed up verification workflows.
                  Capture accurate data from multiple document formats
                  while improving operational efficiency.
                </p>

                {/* Divider */}
                <div className="my-5 h-px w-full bg-[#E5E1FA]" />

                
{/* API cards with visible purple icons */}
<div className="grid grid-cols-2 gap-3">
  {documentApis.map((api) => (
    <div
      key={api}
      className="flex min-h-[46px] min-w-0 items-center gap-2 rounded-full border border-[#BDBDBD] bg-white px-3 py-2"
    >
      {/* Purple document icon */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5 shrink-0"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="2"
          width="16"
          height="20"
          rx="2"
          fill="#4D3ECA"
        />
        <path
          d="M7 6h10M7 9h10"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle
          cx="12"
          cy="14"
          r="2.2"
          stroke="white"
          strokeWidth="1.2"
        />
        <path
          d="M8 19c.6-1.8 1.9-2.7 4-2.7s3.4.9 4 2.7"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>

      <span className="min-w-0 text-[11px] leading-[1.3] text-[#555555]">
        {api}
      </span>
    </div>
  ))}
</div>

                {/* Explore link — below all API cards */}
                <a
                  href="/products/document-ocr-api"
                  className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-[#6552E8] transition-colors duration-300 hover:text-[#EA3369]"
                >
                  Explore Document OCR
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 10h13M10 4l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </>
          )}

          {/* Dynamic details panel */}
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
