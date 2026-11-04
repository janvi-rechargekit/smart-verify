import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Products", href: "#products" },
  { label: "Industries", href: "#industries" },
  { label: "Use case", href: "#use-cases" },
  { label: "Resources", href: "#resources" },
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
];
const productMenuItems = [
  { title: "Document OCR API", description: " Extract text and key information from documents automatically", icon: "document", iconSrc: "/images/document-ocr-api.png", href: "/products/document-ocr-api",},
  { title: "Bank Account Verification (BAV)", description: "Verify bank account details and account holder information", icon: "bank", iconSrc: "/images/bank-account-verification.png", href: "/products/bank-account-verification",},
  { title: "Employee & Income Verification", description: "Verify employment status and income details", icon: "employee", iconSrc: "/images/document-ocr-api.png", href: "/products/employee-income-verification" },
  { title: "Identity Verification (KYC)", description: "Verify customer identities using reliable identity records", icon: "identity", iconSrc: "/images/usecase-employee-verification.png", href: "/products/identity-verification-api",},
  { title: "Vehicle Verification", description: "Verify vehicle registration and ownership details", icon: "vehicle", iconSrc: "/images/vehicle-verification.png", href: "/products/vehicle-verification-api"},
  { title: "Number Intelligence", description: "Access mobile number insights and enrich contact information", icon: "number", iconSrc: "/images/number-intelligence.png",  href: "/products/number-intelligence-api", },
  { title: "Digital KYC & eKYC", description: "Complete customer verification through digital KYC processes", icon: "digital", iconSrc: "/images/digital-kyc-ekyc.png",  href: "/products/digital-kyc-ekyc", },
  { title: "GST Verification", description: "Validate GSTIN details and registered business information", icon: "gst", iconSrc: "/images/gst-verification.png", href: "/products/gst-verification-api" },
  { title: "eSign", description: "Sign documents digitally with a convenient eSign process", icon: "esign", iconSrc: "/images/esign.png", href: "/products/aadhaar-esign-api" },
  { title: "Face Authentication", description: "Verify user identities through face-based authentication", icon: "face", iconSrc: "/images/face-authentication.png", href:"/products/face-authentication-api",},
  { title: "Business Verification (KYB)", description: "Verify company, director, and MSME details", icon: "business", iconSrc: "/images/business-verification-kyb.png", href:"/products/business-verification-api" },
  { title: "Geolocation & Address Intelligence", description: "Validate address details and access location insights", icon: "location", iconSrc: "/images/geolocation-address-intelligence.png" , href: "/products/geolocation-address-intelligence"},
];
const useCaseMenuItems = [
  { title: "Customer Onboarding", description: "Digital Customer Onboarding Solutions Built for Scale", iconSrc: "/images/usecase-customer-onboarding.png" },
  { title: "Merchant Onboarding", description: "Onboard Merchants in Seconds", iconSrc: "/images/usecase-merchant-onboarding.png" },
  { title: "Seller Verification", description: "Seller Verification Services for Marketplaces", iconSrc: "/images/usecase-seller-verification.png" },
  { title: "Employee Verification", description: "Employee Background Verification API for HR Teams", iconSrc: "/images/usecase-employee-verification.png" },
  { title: "Loan Processing", description: "Automated Loan Verification APIs for Lenders", iconSrc: "/images/usecase-loan-processing.png" },
  { title: "Insurance Verification", description: "Verify Policyholders & Claims Fast", iconSrc: "/images/usecase-insurance-verification.png" },
  { title: "Account Opening", description: "API-Based Account Opening Solution", iconSrc: "/images/usecase-account-opening.png" },
  { title: "Business verification", description: "Company Verification API – GST, CIN, FSSAI, IEC", iconSrc: "/images/usecase-business-verification.png" },
  { title: "Fraud Prevention", description: "AI Fraud Prevention Solution", iconSrc: "/images/usecase-fraud-prevention.png" },
  { title: "Customer Re-Verification", description: "Customer Re-Verification Solutions", iconSrc: "/images/face-authentication.png" },
  { title: "Vendor Verification", description: "Business Vendor Verification API", iconSrc: "/images/usecase-vendor-verification.png" },
];
function ProductMenuIcon({ type, src }) {
  if (src) {
    return <img src={src} alt="" aria-hidden="true" className="site-product-menu__icon-image" draggable="false" />;
  }
  const icons = {
    document: (<><rect x="6" y="3" width="12" height="18" rx="1" /><path d="M9 8h6M9 11h6M9 14h4M9 17h6" /></>),
    bank: (<><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3-6 8-6s8 2 8 6M9 8h.1M15 8h.1" /></>),
    employee: (<><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c0-4 2-6 6-6s6 2 6 6M14 15c4-1 7 1 7 5" /></>),
    identity: (<><rect x="5" y="3" width="14" height="18" rx="1" /><circle cx="12" cy="9" r="2" /><path d="M8 15h8M8 18h5" /></>),
    vehicle: (<><path d="m4 14 2-6h12l2 6v5H4z" /><path d="M6 14h12M7 19v2M17 19v2" /><circle cx="8" cy="16" r="1" /><circle cx="16" cy="16" r="1" /></>),
    number: (<><rect x="5" y="3" width="14" height="18" rx="2" /><circle cx="12" cy="9" r="3" /><path d="M8 16h8M9 19h6" /></>),
    digital: (<><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4M7 8h5M7 11h8" /><circle cx="16" cy="11" r="2" /></>),
    gst: (<><path d="M7 3h8l4 4v14H7zM15 3v5h4" /><path d="M10 12h6M10 16h4" /><circle cx="17" cy="18" r="2" /></>),
    esign: (<><path d="M5 3h14v15H5zM8 7h8M8 10h5" /><path d="m8 17 7-7 3 3-7 7-4 1z" /></>),
    face: (<><rect x="3" y="4" width="18" height="16" rx="3" /><circle cx="12" cy="10" r="3" /><path d="M7 17c1-3 9-3 10 0M6 7V5M18 7V5" /></>),
    business: (<><path d="M4 21V7l8-4 8 4v14M2 21h20M8 10h2M14 10h2M8 14h2M14 14h2M10 21v-3h4v3" /></>),
    location: (<><path d="M12 21s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /><path d="m3 16 3 2M21 16l-3 2" /></>),
  };
  return (
    <span className="site-product-menu__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{icons[type] || icons.document}</g>
      </svg>
    </span>
  );
}
function ChevronDown() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-[14px] w-[14px] shrink-0" fill="none">
      <path d="m2.5 5.5 5.5 5 5.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
const [productsOpen, setProductsOpen] = useState(false);
const [useCaseOpen, setUseCaseOpen] = useState(false);
  const menuCloseTimer = useRef(null);

  const cancelMenuClose = () => {
    if (menuCloseTimer.current !== null) {
      window.clearTimeout(menuCloseTimer.current);
      menuCloseTimer.current = null;
    }
  };

  const scheduleMenuClose = () => {
    cancelMenuClose();
    menuCloseTimer.current = window.setTimeout(() => {
      setProductsOpen(false);
      setUseCaseOpen(false);
      menuCloseTimer.current = null;
    }, 220);
  };

  useEffect(() => {
    return () => {
      if (menuCloseTimer.current !== null) {
        window.clearTimeout(menuCloseTimer.current);
      }
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] w-full bg-transparent">
      
      {/* Animated Pink Announcement Bar */}
<div className="hidden overflow-hidden bg-[#EC3069] text-white md:flex">
  <div className="relative mx-auto flex h-[44px] w-full max-w-[1440px] items-center overflow-hidden px-4">

    {/* First caption: Left to Right */}
    <p className="absolute left-0 whitespace-nowrap text-[13px] font-medium sm:text-[14px] lg:text-[15px] animate-topbar-ltr">
      Smarter Verification Starts Here — Explore 100+ APIs with SmartVerify.
    </p>

    {/* Second caption: Right to Left */}
    <p className="absolute left-0 whitespace-nowrap text-[13px] font-medium sm:text-[14px] lg:text-[15px] animate-topbar-rtl">
      Simplify Customer Onboarding with Fast, Secure & Reliable Verification.
    </p>

  </div>
</div>

      {/* WHITE BAR */}
      <div className="border-b border-[#E5E5E5] bg-white">
        <div className="mx-auto flex h-[70px] w-full max-w-[1440px] items-center justify-between px-6 lg:px-10">
          <a
  href="/"
  aria-label="SmartVerify home"
  className="shrink-0"
  onClick={(event) => {
    event.preventDefault();
    window.location.assign("/");
  }}
>
  <img
    src="/images/smartverify-logo.png"
    alt="SmartVerify"
    className="h-auto w-[150px] sm:w-[160px] lg:w-[170px]"
  />
</a>

          <nav aria-label="Main navigation" className="ml-auto hidden items-center gap-8 text-[15px] text-[#414141] lg:flex xl:gap-[40px] xl:text-[16px]">
            {navItems.map((item) => {
              if (item.label === "Products") {
                return (
                  <button key={item.label} type="button" aria-expanded={productsOpen} aria-controls="site-products-menu"
                    onMouseEnter={() => { cancelMenuClose(); setProductsOpen(true); setUseCaseOpen(false); }}
                    onMouseLeave={scheduleMenuClose} onFocus={() => { cancelMenuClose(); setProductsOpen(true); setUseCaseOpen(false); }}
                    onClick={() => { cancelMenuClose(); setProductsOpen(true); setUseCaseOpen(false); }}
                    className="site-nav-trigger inline-flex cursor-pointer items-center gap-[6px] whitespace-nowrap border-0 bg-transparent p-0 transition-colors hover:text-[#EC3069]">
                    <span>Products</span><span className={productsOpen ? "rotate-180" : ""}><ChevronDown /></span>
                  </button>
                );
              }
              if (item.label === "Use case") {
                return (
                  <button key={item.label} type="button" aria-expanded={useCaseOpen} aria-controls="site-usecase-menu"
                    onMouseEnter={() => { cancelMenuClose(); setUseCaseOpen(true); setProductsOpen(false); }}
                    onMouseLeave={scheduleMenuClose} onFocus={() => { cancelMenuClose(); setUseCaseOpen(true); setProductsOpen(false); }}
                    onClick={() => { cancelMenuClose(); setUseCaseOpen(true); setProductsOpen(false); }}
                    className="site-nav-trigger inline-flex cursor-pointer items-center gap-[6px] whitespace-nowrap border-0 bg-transparent p-0 transition-colors hover:text-[#EC3069]">
                    <span>Use case</span><span className={useCaseOpen ? "rotate-180" : ""}><ChevronDown /></span>
                  </button>
                );
              }
              return (
                <a key={item.label} href={item.href} onClick={() => { setProductsOpen(false); setUseCaseOpen(false); }} className="inline-flex items-center gap-[6px] whitespace-nowrap transition-colors hover:text-[#EC3069]">
                  {item.label}<ChevronDown />
                </a>
              );
            })}
          </nav>

          <a href="#contact" onClick={() => { setProductsOpen(false); setUseCaseOpen(false); }} className="site-talk-sales-button ml-8 hidden h-[42px] w-[150px] shrink-0 items-center justify-center rounded-[8px] bg-[#EC3069] text-[15px] text-white lg:inline-flex">
            Talk to Sales
          </a>

          <button type="button" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen}
            onClick={() => { setMobileOpen((open) => !open); setProductsOpen(false); }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#333333] hover:bg-gray-100 lg:hidden">
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
            )}
          </button>
        </div>
      </div>

      {productsOpen && (
        <div id="site-products-menu" className="site-product-menu" role="region" aria-label="Products menu" onMouseEnter={cancelMenuClose} onMouseLeave={scheduleMenuClose}>
          <div className="site-product-menu__grid">
            {productMenuItems.map((product) => (
              <a key={product.title}  href={product.href || "#api-explorer"} onClick={() => setProductsOpen(false)} className="site-product-menu__item">
                <ProductMenuIcon type={product.icon} src={product.iconSrc} />
                <span className="site-product-menu__text">
                  <span className="site-product-menu__title">{product.title}</span>
                  <span className="site-product-menu__description">{product.description}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
      
      {useCaseOpen && (
        <div id="site-usecase-menu" className="site-product-menu" role="region" aria-label="Use case menu" onMouseEnter={cancelMenuClose} onMouseLeave={scheduleMenuClose}>
          <div className="site-product-menu__grid">
            {useCaseMenuItems.map((item) => (
              <a key={item.title} href="#use-cases" onClick={() => setUseCaseOpen(false)} className="site-product-menu__item">
                <img src={item.iconSrc} alt="" aria-hidden="true" className="site-product-menu__icon-image" draggable="false" />
                <span className="site-product-menu__text">
                  <span className="site-product-menu__title">{item.title}</span>
                  <span className="site-product-menu__description">{item.description}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      )}

      
{mobileOpen && (
  <nav
    aria-label="Mobile navigation"
    className="absolute left-0 right-0 top-full max-h-[calc(100dvh-90px)] overflow-y-auto border-t border-[#E5E5E5] bg-white px-5 pb-5 pt-3 shadow-lg lg:hidden"
  >
    <div className="mx-auto max-w-[1440px]">
      {/* Products: tap to expand */}
      <button
        type="button"
        aria-expanded={mobileProductsOpen}
        aria-controls="mobile-products-list"
        onClick={() =>
          setMobileProductsOpen((open) => !open)
        }
        className="flex min-h-12 w-full items-center justify-between border-b border-[#F0F0F0] text-left text-[16px] text-[#414141]"
      >
        Products

        <span
          className={`transition-transform duration-200 ${
            mobileProductsOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown />
        </span>
      </button>

      {/* All 12 product landing pages */}
      {mobileProductsOpen && (
        <div
          id="mobile-products-list"
          className="border-b border-[#F0F0F0] bg-gray-50 py-2 pl-3"
        >
          {productMenuItems.map((product) => (
            <a
              key={product.title}
              href={product.href}
              onClick={() => {
                setMobileOpen(false);
                setMobileProductsOpen(false);
              }}
              className="flex min-h-12 items-center gap-3 border-b border-gray-100 px-3 py-2 text-[14px] text-[#414141] transition-colors duration-200 last:border-b-0 hover:text-[#EC3069]"
            >
              <ProductMenuIcon
                type={product.icon}
                src={product.iconSrc}
              />

              <span className="min-w-0">
                <span className="block font-medium">
                  {product.title}
                </span>

                <span className="mt-0.5 block text-xs leading-snug text-gray-500">
                  {product.description}
                </span>
              </span>
            </a>
          ))}
        </div>
      )}

      {/* Other navigation links */}
      {navItems
        .filter(
          (item) =>
            item.label !== "Products" &&
            item.label !== "Use case"
        )
        .map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className="flex min-h-12 items-center justify-between border-b border-[#F0F0F0] text-[16px] text-[#414141]"
          >
            {item.label}
            <ChevronDown />
          </a>
        ))}

      {/* Use case dropdown is currently desktop-only */}
      <a
        href="#use-cases"
        onClick={() => setMobileOpen(false)}
        className="flex min-h-12 items-center justify-between border-b border-[#F0F0F0] text-[16px] text-[#414141]"
      >
        Use case
        <ChevronDown />
      </a>

      <a
        href="/contact-us"
        onClick={() => {
          setMobileOpen(false);
          setMobileProductsOpen(false);
        }}
        className="mt-4 flex h-12 items-center justify-center rounded-[10px] bg-[#EC3069] text-white transition-colors duration-200 hover:bg-[#d9235b]"
      >
        Talk to Sales
      </a>
    </div>
  </nav>
)}

    </header>
  );
}
