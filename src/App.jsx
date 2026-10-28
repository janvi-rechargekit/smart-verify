import { useEffect, useRef, useState } from "react";
import VerificationShowcase from "./sections/VerificationShowcase.jsx";
import TrustedBusinesses from "./sections/TrustedBusinesses.jsx";
import VerificationSolutions from "./sections/VerificationSolutions.jsx";
import PlatformNumbers from "./sections/PlatformNumbers.jsx";
import IndustriesSection from "./sections/IndustriesSection.jsx";
import SimplifyingVerification from "./sections/SimplifyingVerification.jsx";
import APIIntegrationSection from "./sections/APIIntegrationSection.jsx";
import GetStartedSection from "./sections/GetStartedSection.jsx";
import FAQSection from "./sections/FAQSection.jsx";
import FooterSection from "./sections/FooterSection.jsx";

const navItems = [
  { label: "Products", href: "#products" },
  { label: "Industries", href: "#industries" },
  { label: "Use case", href: "#use-cases" },
  { label: "Resources", href: "#resources" },
];

const productMenuItems = [
  { title: "Document OCR API", description: "For Fast Data Extraction and Verification", icon: "document", iconSrc: "/images/document-ocr-api.png", href: "/products/document-ocr-api",},
  { title: "Bank Account Verification (BAV)", description: "For Fast Data Extraction and Verification", icon: "bank", iconSrc: "/images/bank-account-verification.png", href: "/products/bank-account-verification",},
  { title: "Employee & Income Verification", description: "For Fast Data Extraction and Verification", icon: "employee", iconSrc: "/images/document-ocr-api.png", href: "/products/employee-income-verification" },
  { title: "Identity Verification (KYC)", description: "Verify Customer Identities Faster", icon: "identity", iconSrc: "/images/usecase-employee-verification.png", href: "/products/identity-verification-api",},
  { title: "Vehicle Verification", description: "Verify Customer Identities Faster", icon: "vehicle", iconSrc: "/images/vehicle-verification.png", href: "/products/vehicle-verification-api"},
  { title: "Number Intelligence", description: "Mobile number-based data lookups and contact enrichment", icon: "number", iconSrc: "/images/number-intelligence.png",  href: "/products/number-intelligence-api", },
  { title: "Digital KYC & eKYC", description: "Digital KYC & eKYC APIs for Fast Customer Verification", icon: "digital", iconSrc: "/images/digital-kyc-ekyc.png",  href: "/products/digital-kyc-ekyc", },
  { title: "GST Verification", description: "Digital KYC & eKYC APIs for Fast Customer Verification", icon: "gst", iconSrc: "/images/gst-verification.png", href: "/products/gst-verification-api" },
  { title: "eSign", description: "For Fast Data Extraction and Verification", icon: "esign", iconSrc: "/images/esign.png", href: "/products/aadhaar-esign-api" },
  { title: "Face Authentication", description: "Face Authentication API for Fast & Safe User Verification", icon: "face", iconSrc: "/images/face-authentication.png", href:"/products/face-authentication-api",},
  { title: "Business Verification (KYB)", description: "Company, director, and MSME entity verification", icon: "business", iconSrc: "/images/business-verification-kyb.png", href:"/products/business-verification-api" },
  { title: "Geolocation & Address Intelligence", description: "For Fast Data Extraction and Verification", icon: "location", iconSrc: "/images/geolocation-address-intelligence.png" , href: "/products/geolocation-address-intelligence"},
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

function Shield() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 34" className="h-[34px] w-8 shrink-0" fill="none">
      <path d="M16 2.5 27.2 7v8.4c0 7.1-4.5 12.2-11.2 15.6C9.3 27.6 4.8 22.5 4.8 15.4V7L16 2.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="m10.5 16 3.7 3.6 7.4-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CtaImageButton({ href, label, image, hoverText, variant, showArrow = false, className = "" }) {
  return (
    <a href={href} aria-label={label} className={`cta-image-button cta-image-button--${variant} ${className}`}>
      <img src={image} alt="" className="cta-image cta-image--default" />
      <span aria-hidden="true" className={`cta-hover-face cta-hover-face--${variant}`}>
        <span>{hoverText}</span>
        {showArrow && (
          <svg viewBox="0 0 32 32" fill="none" className="cta-hover-arrow">
            <path d="M7 25 25 7M9 7h16v16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
    </a>
  );
}

function Header() {
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
      
      {/* PINK BAR: 'hidden md:flex' makes it disappear on mobile, and visible on tablet/desktop */}
      <div className="hidden md:flex bg-[#EC3069] text-white">
        <div className="mx-auto flex h-[44px] w-full max-w-[1440px] items-center justify-center gap-x-[20px] px-4">
          <p className="text-center text-[13px] leading-tight sm:text-[14px] lg:text-[15px]">
            10+ years of powering businesses with secure Banking, Payments, Travel, and Verification APIs.
          </p>
          <a href="#contact" className="inline-flex shrink-0 items-center justify-center rounded-full border border-white px-[14px] py-[4px] text-[12px] transition-colors hover:bg-white hover:text-[#EC3069] sm:text-[13px]">
            Book A Demo
          </a>
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


function GradientText({
  children,
  className = "",
  animationSpeed = 12.5,
  glow = 1,
}) {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    let frameId;
    let startTime;

    const animate = (time) => {
      if (startTime === undefined) startTime = time;

      const elapsed = (time - startTime) / 1000;
      const progress = (elapsed / animationSpeed) % 1;

      element.style.backgroundPosition = `${progress * 200}% 50%`;

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [animationSpeed]);

  return (
    <span
      ref={textRef}
className={`bg-gradient-to-r from-[#4D3ECA] via-[#EA3369] to-[#4D3ECA] bg-[length:200%_100%] bg-clip-text text-transparent ${className}`}
      style={{
        textShadow:
          glow > 0
            ? "0 0 18px rgba(190, 173, 255, 0.12)"
            : "none",
      }}
    >
      {children}
    </span>
  );
}



function Hero() {
  return (
    <section id="top" className="hero-background relative isolate min-h-[638px] overflow-hidden">
      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col items-center px-5 pb-10 pt-[110px] text-center sm:pt-[150px] lg:px-8 lg:pb-6 lg:pt-[170px]">
        <div className="inline-flex max-w-full items-center rounded-full border border-[#4D3ECA] p-[6px]">
          <div className="inline-flex min-h-[52px] max-w-full items-center justify-center gap-[9px] rounded-full bg-[#4D3ECA] px-4 text-white sm:px-[18px]">
            {/* GIF is used here */}
            <img src="/images/hero-trust-badge.gif?v=2" alt="" aria-hidden="true" className="h-[34px] w-[32px] shrink-0 object-contain" draggable="false" />
            <span className="text-[14px] font-medium sm:text-[16px] lg:text-[20px]">
              Verify in seconds. Trust instantly.
            </span>
          </div>
        </div>

       
<h1 className="mt-10 max-w-[1100px] text-[40px] font-bold leading-[1.1] tracking-[-0.045em] sm:mt-12 sm:text-[54px] md:text-[66px] lg:mt-[58px] lg:text-[78px] xl:text-[84px]">
  <GradientText animationSpeed={5} glow={1}>
    100+ Verification APIs for
    <br className="hidden md:block" /> Indian Businesses
  </GradientText>
</h1>


        <p className="mt-7 max-w-[810px] text-[15px] leading-[1.35] text-[#383838] sm:mt-8 sm:text-[17px] lg:mt-[38px] lg:text-[20px] lg:leading-[1.3]">
          Extra onboarding steps turn your customers away. SmartVerify APIs instantly check identities, documents, and businesses, letting real users pass while blocking fraud.
        </p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:mt-12 sm:w-auto sm:flex-row sm:gap-6 lg:mt-[64px]">
          <CtaImageButton href="#documentation" label="View Documentation" image="/images/view-documentation.png" hoverText="View Documentation" variant="docs" className="w-full max-w-[300px] sm:w-[300px]" />
          <CtaImageButton href="#contact" label="Book a Demo" image="/images/book-demo.png" hoverText="Book a Demo" variant="demo" showArrow className="w-full max-w-[261px] sm:w-[261px]" />
        </div>
      </div>
      <VerificationShowcase />
    </section>
  );
}

function DocumentOcrApiPage() {
  return (
    <main className="w-full">
      <section
        id="document-ocr-top"
        className="hero-background relative isolate min-h-[680px] overflow-hidden"
      >
        <div className="mx-auto grid min-h-[680px] w-full max-w-[1440px] grid-cols-1 items-center gap-8 px-6 pb-12 pt-[130px] sm:px-8 md:grid-cols-2 md:gap-8 md:px-10 md:pb-14 lg:px-[7.5%]">

          {/* LEFT: Product heading, description and CTAs */}
          <div className="relative z-10 order-1 flex flex-col justify-center">
            <h1 className="sr-only">
              Document OCR API for Fast Data Extraction and Verification
            </h1>

            <img
              src="/images/document-ocr-heading.png"
              alt=""
              aria-hidden="true"
              draggable="false"
              className="mb-6 block h-auto w-full max-w-[540px]"
            />

            
<p className="max-w-[560px] text-[16px] font-normal leading-[1.3] tracking-[-0.01em] text-[#666666] sm:text-[17px] lg:text-[18px]">
  A Document OCR API reads information from documents like Aadhaar cards,
  PAN cards, passports, driving licences, voter IDs, passbooks, cheques,
  GST certificates, and invoices automatically. It extracts important
  details such as names, document numbers, dates, and addresses.
</p>


            <div className="mt-7 flex flex-wrap items-center gap-4">
              <CtaImageButton
                href="#documentation"
                label="View Documentation"
                image="/images/view-documentation.png"
                hoverText="View Documentation"
                variant="docs"
                className="w-full max-w-[261px] sm:w-[240px]"
              />

              <CtaImageButton
                href="#contact"
                label="Book a Demo"
                image="/images/book-demo.png"
                hoverText="Book a Demo"
                variant="demo"
                showArrow
                className="w-full max-w-[220px] sm:w-[200px]"
              />
            </div>
          </div>

          {/* RIGHT: Original Figma hero visual */}
          <div className="order-2 flex items-center justify-center md:justify-end">
            <img
              src="/images/document-ocr-hero.png"
              alt="A woman reviewing a scanned document while OCR processing checks document information."
              draggable="false"
              className="block h-auto w-full max-w-[590px] object-contain"
            />
          </div>

        </div>
      </section>
      <div className="section-separator" aria-hidden="true" />

<DocumentOcrUseCases />
<DocumentOcrProducts />
<DocumentOcrWhyChoose />

<div className="section-separator" aria-hidden="true" />
<GetStartedSection />
<div className="section-separator" aria-hidden="true" />
<FAQSection />
<div className="section-separator" aria-hidden="true" />
<FooterSection />
    </main>
  );
}



function DigitalKycEkycHero() {
  const description =
    "Customer onboarding shouldn't be slowed down by manual verification. SmartVerify's Digital KYC & eKYC APIs help businesses verify customer identities securely and in real time using Aadhaar, PAN, OTP, and other trusted data sources. Automate KYC workflows, meet regulatory requirements, and deliver a faster onboarding experience with enterprise-grade verification APIs.";

  return (
    <section
      id="digital-kyc-ekyc"
      aria-labelledby="digital-kyc-ekyc-title"
      className="relative isolate min-h-[731px] w-full overflow-hidden bg-white"
    >
      {/* Soft pink glow on the left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[68%] w-[13%] bg-gradient-to-r from-[#EC3069]/35 via-[#EC3069]/12 to-transparent blur-2xl"
      />

      <div className="mx-auto grid min-h-[731px] w-full grid-cols-1 items-center gap-8 px-5 py-10 sm:px-8 min-[900px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] min-[900px]:items-start min-[900px]:gap-0 min-[900px]:px-0 min-[900px]:py-0">

        {/* LEFT CONTENT */}
        <div className="relative z-10 flex min-w-0 flex-col items-start min-[900px]:top-[230px] min-[900px]:ml-[7.5vw] min-[900px]:w-[min(36vw,620px)]">

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

          {/* Description: reduced width and controlled spacing */}
          <img
            src="/images/digital-kyc-ekyc-description.png"
            alt={description}
            className="mt-5 block h-auto w-full max-w-[520px] min-[900px]:mt-[40px]"
            draggable="false"
          />

          {/* CTA buttons */}
          <div className="mt-7 flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-4 min-[900px]:mt-[42px] min-[900px]:justify-start min-[900px]:gap-x-[27px]">

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
              className="w-[209px] max-w-full min-[900px]:w-[209px]"
            />

          </div>
        </div>

        {/* RIGHT HERO VISUAL */}
        <div className="relative flex min-w-0 items-center justify-center min-[900px]:min-h-[731px] min-[900px]:justify-end">
          <img
            src="/images/digital-kyc-ekyc-hero-visual.png"
            alt="Customer using a smartphone with digital identity verification cards"
            className="block h-auto w-full max-w-[880px] object-contain min-[900px]:translate-x-[12px] min-[900px]:translate-y-4"
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
        "Automated Digital KYC APIs meet all four points at the same time.",
    },
    {
      title: "Human error",
      description:
        "The likelihood of overlooking false or altered IDs is higher when they are checked manually rather than through an automated system.",
    },
    {
      title: "Compliance exposure",
      description:
        "Auditors want to see audit trails and consistency checks, and it is not easy to do this with a manual process.",
    },
  ];

  return (
    <section
      id="digital-kyc-challenges"
      aria-labelledby="digital-kyc-challenges-title"
      className="relative isolate min-h-[1100px] w-full overflow-hidden bg-[#6045F8] bg-[url('/images/digital-kyc-manual-bg.png')] bg-cover bg-center bg-no-repeat min-[900px]:aspect-[1920/1004] min-[900px]:min-h-[600px] min-[900px]:overflow-hidden"
    >
      {/* Heading and subtitle */}
      <div className="relative z-10 flex flex-col items-center px-5 pt-10 text-center min-[900px]:absolute min-[900px]:left-1/2 min-[900px]:top-[9.5%] min-[900px]:w-full min-[900px]:-translate-x-1/2 min-[900px]:px-0 min-[900px]:pt-0">
        <h2
          id="digital-kyc-challenges-title"
          className="m-0 w-[90%] max-w-[560px] min-[900px]:w-[min(40vw,760px)] min-[900px]:max-w-none"
        >
          <img
            src="/images/digital-kyc-manual-heading.png"
            alt="Why Businesses Are Moving Away from Manual KYC"
            className="block h-auto w-full"
            draggable="false"
          />
        </h2>

        <img
          src="/images/digital-kyc-manual-subtitle.png"
          alt="Manual verification isn't just slow it creates real business problems:"
          className="mt-4 block h-auto w-[90%] max-w-[560px] min-[900px]:mt-[22px] min-[900px]:w-[min(39vw,760px)] min-[900px]:max-w-none"
          draggable="false"
        />
      </div>

      {/* DESKTOP: combined Figma image, including phone and card outlines */}
      <div className="relative z-10 mx-auto mt-8 hidden w-[96%] min-[900px]:absolute min-[900px]:left-1/2 min-[900px]:top-[30%] min-[900px]:mt-0 min-[900px]:block min-[900px]:w-[min(80vw,1534px)] min-[900px]:-translate-x-1/2">
        <img
          src="/images/digital-kyc-manual-composition.png"
          alt=""
          aria-hidden="true"
          draggable="false"
          className="block h-auto w-full"
        />
      </div>

      {/* MOBILE: individual cards and one phone image */}
      <div className="relative z-10 mx-auto mt-8 flex w-[90%] max-w-[520px] flex-col gap-3 min-[900px]:hidden">
        {problems.map((problem) => (
          <article
            key={problem.title}
            className="rounded-sm border border-white/50 bg-white/[0.04] px-4 py-3 text-white"
          >
            <h3 className="text-base font-medium leading-tight">
              {problem.title}
            </h3>
            <p className="mt-1 text-sm leading-[1.35] text-white/85">
              {problem.description}
            </p>
          </article>
        ))}

        <img
          src="/images/digital-kyc-manual-phone.png"
          alt="A hand holding a phone displaying the manual KYC verification workflow"
          draggable="false"
          className="mx-auto mt-3 block h-auto w-[min(85vw,380px)] max-w-full"
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
      src: "/images/digital-kyc-unified-card.png",
      alt: "Unified Digital KYC API. One integration for Aadhaar OTP eKYC, PAN checks and document verification, with benefits including one integration, dynamic routing, faster deployment and support for diverse user bases.",
      position: "top",
    },
    {
      type: "text",
      src: "/images/digital-kyc-digilocker-card.png",
      alt: "DigiLocker Service API with an overview and key benefits.",
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
      {/* Grey separator between the previous section and this section */}
      <div
        aria-hidden="true"
        className="h-6 w-full bg-[#F0F0F0]"
      />

      {/* API cards */}
      <div className="bg-white py-5 sm:py-7 lg:py-[20px]">
        <div className="mx-auto grid w-[92%] grid-cols-1 gap-5 min-[640px]:w-[88%] min-[640px]:grid-cols-2 min-[900px]:w-[80%] min-[900px]:max-w-[1536px] min-[900px]:gap-x-[1.25vw] min-[900px]:gap-y-[2.3vw]">
          {cards.map((card) => (
            <article
              key={card.src}
              className="relative aspect-[748/588] min-w-0 overflow-hidden rounded-[18px] bg-[#F6F8FC]"
            >
              <img
                src={card.src}
                alt={card.alt}
                draggable="false"
                loading="lazy"
                className="block h-full w-full object-cover"
              />
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
      image: "/images/digital-kyc-audience-fintech.png",
      alt: "FinTech & Lending Platforms — Speed up loan approvals without slowing down risk checks.",
    },
    {
      image: "/images/digital-kyc-audience-banking.png",
      alt: "Banking & Financial Services — Meet RBI and regulatory documentation standards and reduce onboarding time.",
    },
    {
      image: "/images/digital-kyc-audience-staffing.png",
      alt: "Staffing & Recruitment — Verify the identity of candidates before background checks.",
    },
    {
      image: "/images/digital-kyc-audience-insurance.png",
      alt: "Insurance Providers — Automate policyholder verification at signup and claims, without manual back-and-forth.",
    },
    {
      image: "/images/digital-kyc-audience-ecommerce.png",
      alt: "E-commerce & Marketplaces — Easily onboard sellers and high-value buyers.",
    },
  ];

  return (
    <section
      id="digital-kyc-audiences"
      aria-labelledby="digital-kyc-audiences-title"
      className="w-full bg-white"
    >
      {/* Grey gap between the previous section and this section */}
      <div
        aria-hidden="true"
        className="h-6 w-full bg-[#F0F0F0]"
      />

      <div className="mx-auto grid w-[90%] max-w-[1536px] grid-cols-1 items-start gap-8 py-12 sm:w-[88%] min-[1100px]:w-[80%] min-[1100px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] min-[1100px]:gap-x-6 min-[1100px]:gap-y-0">

        {/* LEFT: Heading and five exported audience cards */}
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
              <img
                key={audience.image}
                src={audience.image}
                alt={audience.alt}
                draggable="false"
                loading="lazy"
                className="block h-auto w-full"
              />
            ))}
          </div>
        </div>

        {/* RIGHT: Main illustration */}
        <div className="flex min-w-0 items-start justify-center min-[1100px]:mt-[86px] min-[1100px]:translate-x-6">
          <img
            src="/images/digital-kyc-who-uses-visual.png"
            alt="Digital identity verification illustration featuring a secure document, verification shields and protected data."
            draggable="false"
            loading="lazy"
            className="block h-auto w-full max-w-[520px] object-contain min-[1100px]:max-w-none"
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
      {/* Grey gap above the hero */}
      <div
        aria-hidden="true"
        className="h-6 w-full bg-[#F0F0F0]"
      />

      {/* Hero banner */}
      <div className="relative isolate w-full overflow-hidden bg-white min-[900px]:aspect-[1920/868] min-[900px]:min-h-[490px]">

        {/* Desktop: use the complete Figma hero image as the background */}
        <img
          src="/images/digital-kyc-ekyc-hero.png"
          alt=""
          aria-hidden="true"
          draggable="false"
          fetchPriority="high"
          className="absolute inset-0 hidden h-full w-full object-cover object-center min-[900px]:block"
        />

        {/* Left-side content */}
        <div className="relative z-10 mx-auto flex w-[80%] flex-col items-start py-9 sm:py-12 min-[900px]:absolute min-[900px]:inset-0 min-[900px]:mx-auto min-[900px]:w-[80%] min-[900px]:justify-center min-[900px]:py-0">

          {/* Heading image remains unchanged */}
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

          {/* Original description image with a clear gap below the heading */}
          <img
            src="/images/digital-kyc-ekyc-hero-description.png"
            alt={description}
            draggable="false"
            className="mt-4 block h-auto w-full max-w-[330px] min-[900px]:w-[min(29vw,550px)] min-[900px]:max-w-none"
          />

          {/* Reuse the existing Know More button */}
          <a
            href="#digital-kyc-start-apis"
            className="solutions-know-more mt-6"
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

        {/* Mobile: show the illustration below the text instead of cropping it behind the text */}
        <div className="relative mt-2 h-[250px] w-full overflow-hidden sm:h-[340px] min-[900px]:hidden">
          <img
            src="/images/digital-kyc-ekyc-hero-visual.png"
            alt="Digital KYC document submission and customer verification workflow"
            draggable="false"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[78%_center]"
          />
        </div>

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
          {/* Decorative artwork */}
          <div className="relative h-[180px] w-full overflow-hidden sm:h-[240px]">
            <img
              src="/images/digital-kyc-start-banner.png"
              alt=""
              aria-hidden="true"
              draggable="false"
              className="absolute inset-0 h-full w-full object-cover object-right"
            />
          </div>

          {/* Responsive text content */}
          <div className="flex flex-col items-start px-5 pb-7 pt-2 sm:px-8 sm:pb-9">
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
      question:
        "What is a verification API, and why does my business need it?",
      answer:
        "A verification API lets your application check identity or document details through an integrated service. It helps reduce manual checks, streamline customer onboarding, and return verification results directly to your workflow.",
    },
    {
      question: "How fast are SmartVerify's APIs?",
      answer:
        "Many verification requests can return results within seconds. Actual response times depend on the API, the source being checked, and network conditions.",
    },
    {
      question: "Which documents and IDs can SmartVerify check?",
      answer:
        "Available verification workflows can include PAN, Aadhaar OTP eKYC, identity documents, and other supported checks. Coverage depends on the specific APIs enabled for your integration.",
    },
    {
      question:
        "Is SmartVerify aligned with Indian regulatory requirements?",
      answer:
        "SmartVerify APIs can support verification workflows used by Indian businesses. Your organisation remains responsible for confirming that its specific use case and implementation meet applicable regulatory requirements.",
    },
    {
      question: "Can I test the APIs before going live?",
      answer:
        "Yes. You can begin with a sandbox environment and sample data to test your integration before moving to production.",
    },
    {
      question:
        "How is SmartVerify different from other verification providers?",
      answer:
        "SmartVerify is designed to help businesses integrate multiple verification workflows through APIs, automate checks, and receive structured responses within their existing onboarding systems.",
    },
  ];

  return (
    <section
      id="digital-kyc-faq"
      aria-labelledby="digital-kyc-faq-title"
      className="relative isolate w-full overflow-hidden bg-[radial-gradient(ellipse_at_48%_38%,_#8B75FF_0%,_#7656FF_40%,_#6243FA_72%,_#5C3CF7_100%)] text-white"
    >
      <div className="mx-auto grid w-[95%] max-w-[1500px] grid-cols-1 gap-12 py-15 sm:w-[88%] sm:py-14 min-[1000px]:w-[80%] min-[1000px]:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] min-[1000px]:gap-[2vw] min-[1000px]:py-[109px] min-[1000px]:pb-[52px]">

        {/* Left: FAQ heading */}
        <div className="min-w-0">
          <h2
            id="digital-kyc-faq-title"
            className="m-0 max-w-[460px] text-[36px] font-semibold leading-[1.16] tracking-[-0.035em] sm:text-[42px] min-[1000px]:text-[52px]"
          >
            Frequently Asked
            <span className="block">Questions</span>
          </h2>
        </div>

        {/* Right: Expandable questions */}
        <div className="mt-2 flex min-w-0 flex-col gap-3 sm:gap-[14px] min-[1000px]:mt-2 min-[1000px]:gap-[15px]">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group min-w-0 border border-white/75 bg-white/[0.035]"
            >
              <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-[15px] font-medium leading-snug marker:hidden [&::-webkit-details-marker]:hidden sm:min-h-[66px] sm:px-5 sm:text-[17px] min-[1000px]:min-h-[74px] min-[1000px]:px-7 min-[1000px]:py-5 min-[1000px]:text-[20px]">
                <span className="min-w-0 flex-1">{faq.question}</span>

                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"
                >
                  <path d="M3.5 6.5 10 13l6.5-6.5H3.5Z" />
                </svg>
              </summary>

              <div className="border-t border-white/25 px-4 pb-4 pt-3 text-[14px] leading-[1.5] text-white/90 sm:px-5 sm:text-[15px] min-[1000px]:px-7 min-[1000px]:pb-5 min-[1000px]:text-[17px]">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
const documentOcrUseCases = [
  {
    title: "FinTech and lending",
    description:
      "Get PAN and Aadhaar details while applying for a loan or credit card for faster approvals.",
    image: "/images/document-ocr-fintech-lending.png",
    alt: "PAN and Aadhaar document verification for lending",
  },
  {
    title: "Banking and financial services",
    description:
      "Extract data from passbooks and cheques to open accounts without manual data entry.",
    image: "/images/document-ocr-banking-financial.png",
    alt: "Cheque scanning and extracted banking data",
  },
  {
    title: "Insurance",
    description:
      "Read ID and address documents during policy issuance to cut back on paperwork delays.",
    image: "/images/document-ocr-insurance.png",
    alt: "Identity document verification for insurance",
  },
  {
    title: "E-commerce and marketplaces",
    description:
      "Verify the seller’s identity and business documents while onboarding new vendors.",
    image: "/images/document-ocr-ecommerce-marketplaces.png",
    alt: "Seller identity and document verification",
  },
];
function DocumentOcrUseCases() {
  return (
    <section
      id="document-ocr-usecases"
      className="document-ocr-usecases"
    >
      <div className="document-ocr-usecases__inner">
        {/* Left column */}
        <div className="document-ocr-usecases__intro">
          <h2 className="sr-only">
            Who Needs Document OCR?
          </h2>

          <img
            src="/images/document-ocr-usecases-heading.png"
            alt=""
            aria-hidden="true"
            draggable="false"
            className="document-ocr-usecases__heading"
          />

          <img
            src="/images/document-ocr-usecases-description.png"
            alt="Any business that verifies documents at scale runs into the same problem: manual review doesn't scale with growth. Here's where Document OCR fits in across industries."
            draggable="false"
            className="document-ocr-usecases__description"
          />

          {/* Reuse the existing Know More button styles */}
          <a
            href="#document-ocr-usecases"
            className="solutions-know-more"
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

        {/* Right column: four use-case cards */}
        <div className="document-ocr-usecases__grid">
          {documentOcrUseCases.map((item) => (
            <article
              key={item.title}
              className="document-ocr-usecase-card"
            >
              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <a
                href="#document-ocr-usecases"
                className="document-ocr-usecase-card__link"
              >
                Read more
                <svg
                  viewBox="0 0 20 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8h14M10 2.5 15.5 8 10 13.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <img
                src={item.image}
                alt={item.alt}
                className="mt-6 block h-auto w-full max-w-full object-contain object-left"
                draggable="false"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
const documentOcrProducts = [
  {
    id: "pan",
    number: "[01]",
    title: "OCR-PAN",
    image: "/images/document-ocr-pan-preview.png",
    alt: "OCR-PAN document and extracted details",
    description:
      "Extracts PAN number, name, and date of birth from PAN Card images to let you verify tax identity information without manual entry.",
  },
  {
    id: "aadhaar",
    number: "[02]",
    title: "OCR-Aadhaar",
    image: "/images/document-ocr-aadhaar-preview.png",
    alt: "OCR-Aadhaar document preview",
    description:
      "A dedicated preview for Aadhaar document extraction.",
  },
  {
    id: "voter-id",
    number: "[03]",
    title: "OCR-Voter ID",
    image: "/images/document-ocr-voter-id-preview.png",
    alt: "OCR-Voter ID document preview",
    description:
      "A dedicated preview for voter ID document extraction.",
  },
  {
    id: "passport",
    number: "[04]",
    title: "OCR-Passport",
    image: "/images/document-ocr-passport-preview.png",
    alt: "OCR-Passport document preview",
    description:
      "A dedicated preview for passport document extraction.",
  },
  {
    id: "passport",
    number: "[05]",
    title: "OCR-BankPassBook",
    image: "/images/document-ocr-passport-preview.png",
    alt: "OCR-Passport document preview",
  },
  {
    id: "passport",
    number: "[06]",
    title: "OCR-Cheque",
    image: "/images/document-ocr-passport-preview.png",
    alt: "OCR-Passport document preview",
  },
  {
    id: "passport",
    number: "[07]",
    title: "OCR-GST",
    image: "/images/document-ocr-passport-preview.png",
    alt: "OCR-Passport document preview",
  },
  {
    id: "passport",
    number: "[08]",
    title: "OCR-COI",
    image: "/images/document-ocr-passport-preview.png",
    alt: "OCR-Passport document preview",
  },
  {
    id: "passport",
    number: "[09]",
    title: "Generic KYC Detection",
    image: "/images/document-ocr-passport-preview.png",
    alt: "OCR-Passport document preview",
  },
];

function DocumentOcrProducts() {
  const [activeId, setActiveId] = useState("pan");
  const [previewFailed, setPreviewFailed] = useState(false);

  const activeProduct =
    documentOcrProducts.find((product) => product.id === activeId) ||
    documentOcrProducts[0];

  function selectProduct(product) {
    setActiveId(product.id);
    setPreviewFailed(false);
  }

  return (
    <>
      {/* Slim transition matching your Figma reference */}
      <div
        className="document-ocr-products-gap"
        aria-hidden="true"
      />

      <section className="document-ocr-products">
        <div className="document-ocr-products__inner">
          {/* Section heading and Know More */}
          <div className="document-ocr-products__top">
            <div>
              <h2 className="sr-only">
                Explore SmartVerify's Document OCR APIs
              </h2>

              <img
                src="/images/document-ocr-products-heading.png"
                alt=""
                aria-hidden="true"
                className="document-ocr-products__heading"
                draggable="false"
              />
            </div>

            <div className="document-ocr-products__intro">
              <p className="sr-only">
                Document OCR isn't one generic tool. Different documents
                need different extraction logic. SmartVerify offers a
                dedicated API for each major document type, so you can
                plug in exactly what your onboarding flow requires.
              </p>

              <img
                src="/images/document-ocr-products-description.png"
                alt=""
                aria-hidden="true"
                className="document-ocr-products__description"
                draggable="false"
              />

              <a
                href="#document-ocr-products-list"
                className="solutions-know-more"
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

          {/* Product selector and active preview */}
          <div className="document-ocr-products__content">
            <div
              id="document-ocr-products-list"
              className="document-ocr-products__list-panel"
            >
              <div className="document-ocr-products__list-heading">
                <h3>Our Products</h3>

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 4h13v15m-7-7 7 7 7-7"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div
                className="document-ocr-products__list"
                role="group"
                aria-label="Select a document OCR product"
              >
                {documentOcrProducts.map((product) => {
                  const isActive = product.id === activeId;

                  return (
                    <button
                      key={product.id}
                      type="button"
                      className={`document-ocr-products__item ${
                        isActive ? "is-active" : ""
                      }`}
                      aria-pressed={isActive}
                      onClick={() => selectProduct(product)}
                    >
                      <span className="document-ocr-products__number">
                        {product.number}
                      </span>

                      <span>{product.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Changes whenever a product is selected */}
            <div
              className="document-ocr-products__preview"
              aria-live="polite"
            >
              {!previewFailed ? (
                <img
                  key={activeProduct.id}
                  src={activeProduct.image}
                  alt={activeProduct.alt}
                  className="document-ocr-products__preview-image"
                  draggable="false"
                  onError={() => setPreviewFailed(true)}
                />
              ) : (
                <div className="document-ocr-products__fallback">
                  <div className="document-ocr-products__fallback-art">
                    <div className="document-ocr-products__mock-document">
                      <icon className="hidden" />
                      <span>{activeProduct.title}</span>
                      <div className="document-ocr-products__mock-lines" />
                    </div>

                    <div className="document-ocr-products__mock-details">
                      <strong>Details</strong>
                      <span>Selected product</span>
                      <b>{activeProduct.title}</b>
                      <span>Document extraction preview</span>
                      <div className="document-ocr-products__mock-lines" />
                    </div>
                  </div>

                  <div className="document-ocr-products__fallback-caption">
                    <h3>{activeProduct.title}</h3>
                    <p>{activeProduct.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function DocumentOcrWhyChoose() {
  return (
    <section className="document-ocr-why-choose">
      {/* Left-side content */}
      <div className="document-ocr-why-choose__content">
        <h2 className="sr-only">
          Why Businesses Choose SmartVerify for Document OCR
        </h2>

        <img
          src="/images/document-ocr-why-heading.png"
          alt=""
          aria-hidden="true"
          className="document-ocr-why-choose__heading"
          draggable="false"
        />

        <p className="document-ocr-why-choose__description">
          SmartVerify&apos;s OCR APIs accurately extract data from blurry,
          tilted, or low-quality uploads in seconds. Developers can
          quickly test and integrate using clear documentation and a
          sandbox environment. Once live, the API helps automate
          document processing, reduce manual errors, and speed up
          onboarding.
        </p>

        {/* Reuse the existing Know More button */}
        <a
          href="#document-ocr-products-list"
          className="solutions-know-more"
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

      {/* Right-side Figma visual */}
      <img
        src="/images/document-ocr-why-visual.png"
        alt="A woman using a laptop with a document upload panel and extracted document details."
        className="document-ocr-why-choose__visual"
        draggable="false"
      />
    </section>
  );
}

function BankAccountVerificationPage() {
  return (
    <main className="bank-account-verification-page">
      <section className="bank-account-verification-hero hero-background">
        <div className="bank-account-verification-hero__inner">

          {/* Left: Heading, description and existing CTA buttons */}
          <div className="bank-account-verification-hero__content">
            <h1 className="sr-only">
              Bank Account Verification API: Confirm Ownership Before You Pay
            </h1>

            <img
              src="/images/bav-heading.png"
              alt=""
              aria-hidden="true"
              className="bank-account-verification-hero__heading"
              draggable="false"
            />

            <img
              src="/images/bav-description.png"
              alt="Bank account verification is a critical step in digital onboarding, payouts, lending, and compliance. SmartVerify's Bank Account Verification API enables businesses to instantly validate account details, confirm account ownership, and reduce payment failures through secure, real-time verification."
              className="bank-account-verification-hero__description"
              draggable="false"
            />

            <div className="bank-account-verification-hero__actions">
              <CtaImageButton
                href="#documentation"
                label="View Documentation"
                image="/images/view-documentation.png"
                hoverText="View Documentation"
                variant="docs"
                className="w-full max-w-[300px] sm:w-[300px]"
              />

              <CtaImageButton
                href="#contact"
                label="Book a Demo"
                image="/images/book-demo.png"
                hoverText="Book a Demo"
                variant="demo"
                showArrow
                className="w-full max-w-[261px] sm:w-[261px]"
              />
            </div>
          </div>

          {/* Right: Full Figma-exported visual */}
          <div className="bank-account-verification-hero__visual-wrap">
            <img
              src="/images/bav-hero-visual.png"
              alt="A customer using a smartphone beside a payment-success screen and bank card."
              className="bank-account-verification-hero__visual"
              draggable="false"
            />
          </div>

        </div>
      </section>
      <BankAccountVerificationIntro />
      <BankAccountVerificationBenefits />
      <BankAccountVerificationApis />
      <BankAccountVerificationWorkflow />
      <div className="section-separator" aria-hidden="true" />
      <BankAccountVerificationCta />
      <BankAccountVerificationFaq />
      
      
      <FooterSection />
    </main>
  );
}

function BankAccountVerificationIntro() {
  return (
    <>
      {/* Reuse the existing section gap */}
      <div
  className="section-separator bav-what-is-gap"
  aria-hidden="true"
/>
      <section className="bav-what-is">
        <div className="bav-what-is__inner">
          {/* Left: heading, explanation and use cases */}
          <div className="bav-what-is__content">
            <h2 className="sr-only">
              What Is Bank Account Verification?
            </h2>

            <img
              src="/images/bav-what-is-heading.png"
              alt=""
              aria-hidden="true"
              className="bav-what-is__heading"
              draggable="false"
            />

            <p className="bav-what-is__description">
              Bank account verification is the process of confirming
              that a bank account number is active and belongs to the
              person or business named on the transaction.
            </p>

            <ul className="bav-what-is__list">
              <li>Vendor and gig-worker payout setup</li>
              <li>
                Customer onboarding for lending and insurance
              </li>
              <li>
                Refund processing for e-commerce and marketplaces
              </li>
              <li>
                Loan disbursement and EMI account linking
              </li>
              <li>Payroll account additions</li>
            </ul>
          </div>

          {/* Right: original exported visual */}
          <div className="bav-what-is__visual-wrap">
            <img
              src="/images/bav-what-is-visual.png"
              alt="A business professional working on a laptop at a desk."
              className="bav-what-is__visual"
              draggable="false"
            />
          </div>
        </div>
      </section>
    </>
  );
}

const bavBenefitCards = [
  {
    id: "payouts",
    icon: "payouts",
    title: "Fewer failed payouts",
    description:
      "Catch invalid or closed accounts before you initiate a transfer, not after it bounces.",
  },
  {
    id: "fraud",
    icon: "fraud",
    title: "Less risk of fraud",
    description:
      "Before you make any money transfers, check that the account holder name is the name you have on file.",
  },
  {
    id: "onboarding",
    icon: "onboarding",
    title: "Faster onboarding",
    description:
      "Customers and vendors get added to your system without waiting on manual document review.",
  },
  {
    id: "compliance",
    icon: "compliance",
    title: "Compliance logs for cleaners",
    description:
      "All checks are recorded, giving you an audit trail for regulatory review.",
  },
  {
    id: "experience",
    icon: "experience",
    title: "Better customer experience",
    description:
      "Real-time checks mean fewer support tickets about delayed or failed payments.",
  },
];

function BavBenefitIcon({ type }) {
  const purple = "#4D3ECA";

  if (type === "payouts") {
    return (
      <svg viewBox="0 0 88 72" aria-hidden="true">
        <rect x="13" y="12" width="61" height="40" rx="7" fill={purple} opacity=".9" />
        <rect x="8" y="19" width="61" height="39" rx="6" fill={purple} />
        <circle cx="40" cy="38" r="7" fill="none" stroke="white" strokeWidth="2.5" />
        <path d="M20 38h-5M61 29h-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="70" cy="55" r="16" fill={purple} stroke="white" strokeWidth="3" />
        <path d="M70 46v11m0 5v1" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "fraud") {
    return (
      <svg viewBox="0 0 88 72" aria-hidden="true">
        <rect x="8" y="13" width="64" height="44" rx="8" fill={purple} />
        <path d="M9 27h62" stroke="white" strokeWidth="3" />
        <path d="M22 43h6" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <circle cx="55" cy="47" r="13" fill={purple} stroke="white" strokeWidth="3" />
        <path d="m64 57 8 8" stroke={purple} strokeWidth="6" strokeLinecap="round" />
        <path d="M55 40v9m0 4v1" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "onboarding") {
    return (
      <svg viewBox="0 0 88 72" aria-hidden="true">
        <rect x="8" y="15" width="70" height="43" rx="6" fill={purple} />
        <circle cx="28" cy="29" r="7" fill="none" stroke="white" strokeWidth="1.8" />
        <path d="M17 49v-7a11 11 0 0 1 22 0v7m-11-7v7" fill="none" stroke="white" strokeWidth="1.8" />
        <path d="M44 28h24M44 36h24M44 44h24" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="39" y="5" width="12" height="14" rx="3" fill={purple} stroke="white" strokeWidth="2" />
        <path d="m34 55 10 10 12-10-9-8-8 4-6-2" fill={purple} stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "compliance") {
    return (
      <svg viewBox="0 0 88 72" aria-hidden="true">
        <path d="M15 7h36l12 12v39H15z" fill={purple} />
        <path d="M51 7v13h12" fill="none" stroke="white" strokeWidth="1.6" />
        {[25, 35, 45].map((y) => (
          <g key={y}>
            <rect x="21" y={y - 3} width="7" height="7" rx="1" fill="none" stroke="white" strokeWidth="1.5" />
            <path d={`m22 ${y} 2 2 4-5`} fill="none" stroke="white" strokeWidth="1.3" />
            <path d={`M33 ${y}h19`} stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        ))}
        <circle cx="58" cy="49" r="13" fill={purple} stroke="white" strokeWidth="2" />
        <circle cx="58" cy="49" r="9" fill="none" stroke="white" strokeWidth="1.5" />
        <path d="m54 49 3 3 5-6m2 13 7 8" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 88 72" aria-hidden="true">
      <path d="m22 14 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill={purple} />
      <path d="m45 3 4 7 7 1-5 5 1 7-7-4-6 4 1-7-5-5 7-1z" fill={purple} />
      <path d="m66 14 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill={purple} />
      <circle cx="45" cy="37" r="11" fill={purple} />
      <path d="M25 64c0-12 8-19 20-19s20 7 20 19z" fill={purple} />
    </svg>
  );
}

function BankAccountVerificationBenefits() {
  return (
    <>
      <div
        className="section-separator bav-benefits-gap"
        aria-hidden="true"
      />

      <section className="bav-automated-benefits">
        <div className="bav-automated-benefits__inner">
          {/* Left: exported heading, description and existing button */}
          <div className="bav-automated-benefits__intro">
            <h2 className="sr-only">
              Why Businesses Need Automated Bank Account Verification
            </h2>

            <img
              src="/images/bav-automated-benefits-heading.png"
              alt=""
              aria-hidden="true"
              className="bav-automated-benefits__heading"
              draggable="false"
            />

            <p className="sr-only">
              Manual verification means asking customers to upload a
              cancelled cheque or a bank statement, then having someone
              on your team eyeball it. That process is slow, inconsistent,
              and still leaves room for error. An API-driven BAV check
              replaces all of that with a call that returns a verified
              name match in seconds.
            </p>

            <img
              src="/images/bav-automated-benefits-description.png"
              alt=""
              aria-hidden="true"
              className="bav-automated-benefits__description"
              draggable="false"
            />

            <a
              href="#contact"
              className="solutions-know-more"
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

          {/* Right: five separate benefit cards */}
          <div className="bav-automated-benefits__grid">
            {bavBenefitCards.map((card) => (
              <article
                key={card.id}
                className="bav-benefit-card"
              >
                <div className="bav-benefit-card__icon">
                  <BavBenefitIcon type={card.icon} />
                </div>

                <h3>{card.title}</h3>

                <p>{card.description}</p>

                <a
                  href="#contact"
                  className="bav-benefit-card__link"
                >
                  Read more
                  <svg viewBox="0 0 24 16" fill="none" aria-hidden="true">
                    <path
                      d="M2 8h18m-7-6 6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div
        className="section-separator bav-benefits-gap"
        aria-hidden="true"
      />
    </>
  );
}

const bavApiProducts = [
  {
    id: "imps-penny-drop",
    number: "[01]",
    title: "BAV V2 - IMPS Penny Drop",
    image: "/images/bav-imps-penny-drop.png",
    description:
      "This is the classic penny-drop method. SmartVerify sends a token amount to the account via IMPS and reads back the registered account holder's name straight from the bank. It helps confirm that an account is active and correctly named.",
  },
  {
    id: "imps-penniless",
    number: "[02]",
    title: "BAV V2 - IMPS Penniless",
    image: "/images/bav-imps-penniless.png",
    description:
      "For businesses that need to verify account details without initiating a test transfer. This option supports a penniless verification workflow when a zero-cost check is preferred.",
  },
  {
    id: "upi-penniless",
    number: "[03]",
    title: "BAV V2 - UPI Penniless",
    image: "/images/bav-upi-penniless.png",
    description:
      "Explore a UPI-based penniless verification option for workflows that need bank account checks without a penny-drop transfer.",
  },
  {
    id: "mobile-account-details",
    number: "[04]",
    title: "Mobile to Account Details",
    image: "/images/bav-mobile-account-details.png",
    description:
      "Use mobile-related account lookup workflows to support customer verification and financial onboarding.",
  },
  {
    id: "pan-account-link",
    number: "[05]",
    title: "PAN Account Link",
    image: "/images/bav-pan-account-link.png",
    description:
      "Support financial verification workflows by checking the relationship between PAN details and bank account information.",
  },
];

function BankAccountVerificationApis() {
  const [activeId, setActiveId] = useState("imps-penny-drop");
  const [failedImages, setFailedImages] = useState([]);

  const activeProduct =
    bavApiProducts.find((product) => product.id === activeId) ||
    bavApiProducts[0];

  const imageFailed = failedImages.includes(activeProduct.id);

  function selectProduct(product) {
    setActiveId(product.id);
  }

  function handleImageError(productId) {
    setFailedImages((current) =>
      current.includes(productId) ? current : [...current, productId]
    );
  }

  return (
    <>
      <div
        className="section-separator bav-apis-gap"
        aria-hidden="true"
      />

      <section className="bav-apis">
        <div className="bav-apis__inner">
          {/* Section heading and intro */}
          <div className="bav-apis__top">
            <h2 className="sr-only">
              SmartVerify's Bank Account Verification APIs
            </h2>

            <img
              src="/images/bav-apis-heading.png"
              alt=""
              aria-hidden="true"
              className="bav-apis__heading"
              draggable="false"
            />

            <div className="bav-apis__intro">
              <p className="sr-only">
                SmartVerify offers more than one way to verify a bank
                account, because not every business needs the same method.
                Some prefer a live money transfer to confirm an account
                is active; others need a zero-cost, penniless check.
              </p>

              <img
                src="/images/bav-apis-description.png"
                alt=""
                aria-hidden="true"
                className="bav-apis__description"
                draggable="false"
              />

              {/* Reuse existing Know More styling */}
              <a
                href="#bav-apis-list"
                className="solutions-know-more bav-apis__know-more"
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

          {/* Product list and selected API preview */}
          <div className="bav-apis__content">
            <div className="bav-apis__list-panel">
              <div className="bav-apis__list-heading">
                <h3>Our Products</h3>

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 4h13v15m-7-7 7 7 7-7"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div
                id="bav-apis-list"
                className="bav-apis__list"
                role="group"
                aria-label="Select a bank account verification API"
              >
                {bavApiProducts.map((product) => {
                  const isActive = product.id === activeId;

                  return (
                    <button
                      key={product.id}
                      type="button"
                      className={`bav-apis__item ${
                        isActive ? "is-active" : ""
                      }`}
                      aria-pressed={isActive}
                      onClick={() => selectProduct(product)}
                    >
                      <span className="bav-apis__number">
                        {product.number}
                      </span>
                      <span>{product.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Updates when an API is selected */}
            <article className="bav-apis__preview" aria-live="polite">
              <div className="bav-apis__visual">
                {!imageFailed ? (
                  <img
                    key={activeProduct.id}
                    src={activeProduct.image}
                    alt={`${activeProduct.title} illustration`}
                    className="bav-apis__preview-image"
                    draggable="false"
                    onError={() => handleImageError(activeProduct.id)}
                  />
                ) : (
                  <div className="bav-apis__image-fallback">
                    <div className="bav-apis__fallback-document">
                      <span>{activeProduct.title}</span>
                      <div className="bav-apis__fallback-lines" />
                      <div className="bav-apis__fallback-lines" />
                      <div className="bav-apis__fallback-lines" />
                    </div>

                    <div className="bav-apis__fallback-details">
                      <strong>Verification details</strong>
                      <span>Selected API</span>
                      <b>{activeProduct.title}</b>
                    </div>
                  </div>
                )}
              </div>

              <div className="bav-apis__preview-copy">
                <h3>{activeProduct.title}</h3>
                <p>{activeProduct.description}</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
  
function BankAccountVerificationWorkflow() {
  return (
    <section className="bav-workflow">
      <div className="bav-workflow__inner">
        {/* Left: heading, description and Know More */}
        <div className="bav-workflow__content">
          <h2 className="sr-only">
            How BAV Fits Into Your Workflow
          </h2>

          <img
            src="/images/bav-workflow-heading.png"
            alt=""
            aria-hidden="true"
            className="bav-workflow__heading"
            draggable="false"
          />

          <p className="sr-only">
            Most businesses don’t run BAV in a silo; it's one of the many
            checks run in addition to PAN verification, Aadhaar-based KYC,
            or GST validation as part of an overall onboarding or payout
            pipeline. A lending platform might combine PAN verification,
            income document OCR, and BAV V2 IMPS Penny Drop into a single
            onboarding flow, so a borrower's identity and payout account
            are verified before the loan is approved, for example.
          </p>

          <img
            src="/images/bav-workflow-description.png"
            alt=""
            aria-hidden="true"
            className="bav-workflow__description"
            draggable="false"
          />

          <a
            href="#contact"
            className="solutions-know-more"
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

        {/* Right: complete exported illustration */}
        <div className="bav-workflow__visual-wrap">
          <img
            src="/images/bav-workflow-visual.png"
            alt="Illustration of secure account verification across servers, cloud infrastructure, and security checks."
            className="bav-workflow__visual"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
}

function BankAccountVerificationCta() {
  return (
    <section className="bav-get-started">
      <div className="bav-get-started__banner">
        {/* Exported Figma artwork and gradient background */}
        <img
          src="/images/bav-get-started-visual.png"
          alt=""
          aria-hidden="true"
          className="bav-get-started__art"
          draggable="false"
        />

        {/* Text and CTA layered over the artwork */}
        <div className="bav-get-started__content">
          <h2 className="sr-only">
            Get Started with SmartVerify's Bank Account Verification API
          </h2>

          <img
            src="/images/bav-get-started-heading.png"
            alt=""
            aria-hidden="true"
            className="bav-get-started__heading"
            draggable="false"
          />

          <p className="sr-only">
            SmartVerify provides a sandbox environment where you can test
            each Bank Account Verification endpoint with sample data
            before going live.
          </p>

          <img
            src="/images/bav-get-started-description.png"
            alt=""
            aria-hidden="true"
            className="bav-get-started__description"
            draggable="false"
          />

          {/* Reuse the existing animated Book a Demo button */}
          <div className="bav-get-started__actions">
            <CtaImageButton
              href="#contact"
              label="Book a Demo"
              image="/images/book-demo.png"
              hoverText="Book a Demo"
              variant="demo"
              showArrow
              className="w-[185px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BankAccountVerificationFaq() {
  return (
    <section className="bav-faq-image-section">
      <img
        src="/images/bav-faq-section.png"
        alt="Frequently Asked Questions about Bank Account Verification, including penny drop and penniless verification, UPI ID verification, response speed, PAN requirements, regulatory requirements, and SmartVerify."
        className="bav-faq-image-section__image"
        draggable="false"
      />
    </section>
  );
}


function NumberIntelligenceHero() {
  const description =
    "A mobile number carries more information than most businesses realise. It can reveal who owns it, how long they've had it, whether it's linked to a real bank account, and whether it shows up in past fraud attempts. SmartVerify's Number Intelligence API suite turns that single data point into a full identity signal, so you catch fake sign-ups before they cost you money.";

  return (
    <section
      id="number-intelligence-hero"
      aria-labelledby="number-intelligence-title"
      className="relative isolate w-full overflow-hidden bg-white min-[1100px]:min-h-[clamp(640px,42.6vw,817px)]"
    >
      {/* Background gradients matching the Figma artwork */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,#FFFFFF_0%,#FFFFFF_66%,#FAF7FF_100%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[75%] w-[18%] bg-[radial-gradient(ellipse_at_bottom_left,rgba(236,49,105,0.25),transparent_70%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[38%] bg-[radial-gradient(ellipse_at_80%_45%,rgba(126,91,255,0.22),transparent_68%)] min-[1100px]:block"
      />

      {/* LEFT: Heading, description and CTA buttons */}
      <div className="relative z-10 mx-auto flex w-[88%] flex-col items-start pb-8 pt-10 sm:pb-10 sm:pt-12 min-[1100px]:absolute min-[1100px]:left-[10.3%] min-[1100px]:top-[27%] min-[1100px]:mx-0 min-[1100px]:w-[42.4%] min-[1100px]:pb-0 min-[1100px]:pt-0">

        <h1
          id="number-intelligence-title"
          className="m-0 w-full max-w-[812px]"
        >
          <img
            src="/images/number-intelligence-hero-heading.png"
            alt="Number Intelligence API for Smarter Customer Verification & Fraud Detection"
            draggable="false"
            fetchPriority="high"
            className="block h-auto w-full"
          />
        </h1>

        {/* Original Figma-exported description */}
        <img
          src="/images/number-intelligence-hero-description.png"
          alt={description}
          draggable="false"
          className="mt-[42px] hidden h-auto w-full max-w-[797px] min-[1100px]:block"
        />

        {/* Responsive description on smaller screens */}
        <p className="mt-5 max-w-[620px] text-[14px] leading-[1.45] text-[#383838] sm:text-[16px] min-[1100px]:hidden">
          {description}
        </p>

        {/* Reuse the existing shared CTA buttons */}
        <div className="mt-8 flex w-full flex-col flex-wrap items-start gap-4 min-[760px]:flex-row min-[760px]:items-center min-[760px]:gap-6 min-[1100px]:mt-[50px] min-[1100px]:gap-[27px]">

          <CtaImageButton
            href="#documentation"
            label="View Documentation"
            image="/images/view-documentation.png"
            hoverText="View Documentation"
            variant="docs"
            className="w-[240px] max-w-full"
          />

          <CtaImageButton
            href="#contact"
            label="Book a Demo"
            image="/images/book-demo.png"
            hoverText="Book a Demo"
            variant="demo"
            showArrow
            className="w-[209px] max-w-full"
          />
        </div>
      </div>

      {/* RIGHT: Complete Figma-exported illustration */}
      <img
        src="/images/number-intelligence-hero-visual.png"
        alt="Woman using her phone with number verification, address and OTP verification panels"
        draggable="false"
        fetchPriority="high"
        className="relative z-0 mx-auto mb-3 block h-auto w-[94%] max-w-[720px] object-contain min-[1100px]:absolute min-[1100px]:right-[5%] min-[1100px]:top-[22%] min-[1100px]:mx-0 min-[1100px]:mb-0 min-[1100px]:w-[min(50.3vw,964px)] min-[1100px]:max-w-none"
      />
    </section>
  );
}

function NumberIntelligenceApiExplorer() {
  const apis = [
    {
      title: "Mob No Verification - OTP",
      description:
        "Verifies that a number is live and truly belongs to the person entering it, through a one-time password delivered in real time. Run this at signup to shut down bot-driven registrations and fake numbers before they ever hit the database.",
    },
    {
      title: "Mobile to Address",
      description:
        "Fetches the registered address with a mobile number from telecom records, so customers don't need to type in their address. This cuts form abandonment and gives an address to cross-check against KYC documents.",
    },
    {
      title: "Mobile to PAN",
      description:
        "Matches a mobile number to its linked PAN, letting you confirm tax identity without asking the customer to type it in themselves. This speeds up lending and financial onboarding flows where PAN verification is mandatory.",
    },
    {
      title: "Mobile to Pre-Fill",
      description:
        "Auto-populates a customer's name, address, and other demographic details the moment they enter their mobile number. Shorter forms mean fewer drop-offs, and the data comes out cleaner than manual entry ever produces.",
    },
    {
      title: "Mobile Name Lookup",
      description:
        "Returns the registered name tied to a mobile number, so you can spot mismatches between what a customer types and what's on record. It's a fast first check before you move to deeper document verification.",
    },
    {
      title: "Mobile Number Vintage",
      description:
        "Tells how long a number has been active. A number issued three days ago carries more risk than one with five years of history, and this API gives that context in a single call.",
    },
    {
      title: "Mobile to UPI Basic",
      description:
        "Validates a UPI handle with its mobile number and checks whether the mobile number is linked with an active bank account. This helps with payment-related onboarding and fraud checks before turning on transactions for an account.",
    },
    {
      title: "Common Account Detection",
      description:
        "Flags when multiple accounts on the platform share a mobile number, catching duplicate sign-ups, referral abuse, and multi-accounting before they drain the incentive budget.",
    },
    {
      title: "WhatsApp Check",
      description:
        "Checks if a number is live on WhatsApp so you don't waste messaging spend or automation on dead numbers. It also helps verify that the number is for a real, reachable user.",
    },
    {
      title: "WhatsApp Check Advanced",
      description:
        "This goes a step further than the basic check by pulling profile details linked to the WhatsApp account, giving you a stronger fraud signal and more context before you engage the customer.",
    },
  ];

  return (
    <section
      id="number-intelligence-api-explorer"
      aria-labelledby="number-intelligence-api-explorer-title"
      className="w-full overflow-clip bg-white"
    >
      <div className="mx-auto grid w-[90%] grid-cols-1 gap-10 pb-14 pt-12 sm:w-[88%] min-[1100px]:ml-[9.6%] min-[1100px]:mr-0 min-[1100px]:w-[73%] min-[1100px]:max-w-[1400px] min-[1100px]:grid-cols-[minmax(0,0.66fr)_minmax(0,1fr)] min-[1100px]:gap-x-[clamp(32px,3.2vw,60px)] min-[1100px]:gap-y-0 min-[1100px]:pb-[120px] min-[1100px]:pt-[130px]">

        {/* LEFT: Sticky introduction */}
        <div className="min-w-0 self-start min-[1100px]:sticky min-[1100px]:top-[128px]">
          <h2
            id="number-intelligence-api-explorer-title"
            className="m-0 max-w-[530px] text-[clamp(36px,2.9vw,54px)] font-normal leading-[1.05] tracking-[-0.035em] text-[#555555]"
          >
            Explore SmartVerify&apos;s
            <br />
            Number Intelligence
            <br />
            APIs
          </h2>

          <p className="mt-9 max-w-[520px] text-[16px] leading-[1.4] text-[#222222] sm:text-[18px]">
            Each of the APIs below fits into a different part of the number
            verification puzzle. You could even call them one at a time or
            chain a few together depending on how much confidence they need
            to let a customer through.
          </p>

          {/* Reuse the existing Know More button styling */}
          <a
            href="#number-intelligence-api-cards"
            className="solutions-know-more mt-14"
            aria-label="Know more about Number Intelligence APIs"
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

        {/* RIGHT: Two-column API card grid */}
        <div
          id="number-intelligence-api-cards"
          className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 min-[1100px]:gap-x-[36px] min-[1100px]:gap-y-[34px]"
        >
          {apis.map((api) => (
            <article
              key={api.title}
              className="flex min-h-[300px] min-w-0 flex-col rounded-[6px] border border-[#B9A4FF] bg-white px-5 py-6 sm:px-6 sm:py-7 min-[1100px]:min-h-[350px] min-[1100px]:px-[28px] min-[1100px]:py-[28px]"
            >
              <h3 className="text-[20px] font-normal leading-[1.25] text-[#7B63D9] min-[1100px]:text-[23px]">
                {api.title}
              </h3>

              <p className="mt-5 text-[15px] leading-[1.3] text-[#3E3E3E] min-[1100px]:text-[18px]">
                {api.description}
              </p>

              {/* Read more link */}
              <a
                href="#contact"
                className="mt-auto inline-flex w-fit items-center gap-3 pt-7 text-[16px] text-[#7B63D9] transition-colors hover:text-[#4D3ECA] min-[1100px]:text-[18px]"
                aria-label={`Read more about ${api.title}`}
              >
                <span>Read more</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path
                    d="M4 12h15M13 5.5 19.5 12 13 18.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}


function NumberIntelligenceBenefitsSection() {
  const benefits = [
    {
      number: "01",
      title: "Fewer fake accounts",
      description:
        "Catch throwaway numbers and synthetic identities at the point of entry.",
    },
    {
      number: "02",
      title: "Faster onboarding",
      description:
        "Pre-populate forms with verified information instead of having the customer type it all in.",
    },
    {
      number: "03",
      title: "Lower fraud losses",
      description:
        "Spot duplicate accounts, mismatched names, and newly issued numbers before they become chargebacks.",
    },
    {
      number: "04",
      title: "Less manual review",
      description:
        "Give the compliance team a data-backed signal instead of a blank phone number field.",
    },
    {
      number: "05",
      title: "Better conversion",
      description:
        "Shorter forms and instant checks mean fewer drop-offs mid-signup.",
    },
  ];

  return (
    <section
      id="number-intelligence-benefits"
      aria-labelledby="number-intelligence-benefits-title"
      className="relative isolate w-full overflow-hidden bg-white"
    >
      {/* Figma-inspired pink and purple background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-white"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[85%] w-[18%] bg-[radial-gradient(ellipse_at_bottom_left,rgba(236,49,105,0.24),transparent_72%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-[20%] bg-[linear-gradient(90deg,transparent,rgba(139,104,255,0.17))]"
      />

      <div className="mx-auto w-[92%] max-w-[1520px] pb-10 pt-10 sm:w-[88%] sm:pb-12 min-[900px]:translate-x-12 c:\Users\ABC\Downloads\number-intelligence-use-cases-visual.png min-[900px]:pb-[36px] min-[900px]:pt-[56px]">

        {/* Heading and subtitle */}
        <header className="flex flex-col items-start">
          <h2
            id="number-intelligence-benefits-title"
            className="m-0 w-[88%] max-w-[623px] min-[900px]:w-[42%]"
          >
            <img
              src="/images/number-intelligence-benefits-heading.png"
              alt="Why Businesses Rely on Number Intelligence"
              draggable="false"
              className="block h-auto w-full"
            />
          </h2>

          <img
            src="/images/number-intelligence-benefits-subtitle.png"
            alt="Manual verification creates delays, fraud risks, and missed opportunities."
            draggable="false"
            className="mt-4 block h-auto w-full max-w-[673px] min-[900px]:w-[44%]"
          />
        </header>

        {/* Desktop: exact exported five-card composition */}
        <img
          src="/images/number-intelligence-benefits-cards.png"
          alt="Five benefits of Number Intelligence: fewer fake accounts, faster onboarding, lower fraud losses, less manual review and better conversion."
          draggable="false"
          loading="lazy"
          className="mt-8 hidden h-auto w-full min-[900px]:mt-[50px] min-[900px]:block"
        />

        {/* Mobile and tablet: readable responsive benefit cards */}
        <div className="mt-8 grid grid-cols-1 gap-3 min-[520px]:grid-cols-2 min-[900px]:hidden">
          {benefits.map((benefit) => (
            <article
              key={benefit.number}
              className="flex min-w-0 gap-3 rounded-md border border-[#DCD5FF] bg-white/80 p-4 shadow-[0_1px_4px_rgba(79,62,202,0.04)]"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#4D3ECA]/10 text-sm font-semibold text-[#4D3ECA]">
                {benefit.number}
              </div>

              <div className="min-w-0">
                <h3 className="text-[16px] font-medium leading-snug text-[#292929]">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.4] text-[#555555]">
                  {benefit.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

function NumberIntelligenceUseCasesSection() {
  return (
    <section
      id="number-intelligence-use-cases"
      aria-labelledby="number-intelligence-use-cases-title"
      className="relative isolate w-full overflow-hidden bg-white"
    >
      {/* Grey gap between the previous section and this section */}
      <div
        aria-hidden="true"
        className="h-6 w-full bg-[#F0F0F0]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-[18%] bg-[linear-gradient(90deg,transparent,rgba(139,104,255,0.12))]"
      />

      {/* Main layout */}
      <div className="mx-auto grid w-[90%] max-w-[1536px] grid-cols-1 items-start gap-7 pb-12 pt-8 sm:w-[88%] min-[1000px]:w-[80%] min-[1000px]:translate-x-12 grid-cols-[minmax(0,1fr)_minmax(0,1fr)] min-[1000px]:gap-x-[1.5vw] min-[1000px]:gap-y-0 min-[1000px]:pb-14 min-[1000px]:pt-8">

        {/* LEFT: Heading, subtitle and five use-case cards */}
        <div className="min-w-0">
          <h2
            id="number-intelligence-use-cases-title"
            className="mt-12 w-full"
          >
            <img
              src="/images/number-intelligence-use-cases-heading.png"
              alt="How Businesses Use Number Intelligence"
              draggable="false"
              className="block h-auto w-full"
            />
          </h2>

          <img
            src="/images/number-intelligence-use-cases-subtitle.png"
            alt="Verify identities faster, reduce manual effort, and make smarter risk decisions with reliable mobile intelligence."
            draggable="false"
            className="mt-6 block h-auto w-full min-[1000px]:mt-8"
          />

          {/* Combined Figma export: all five cards in the original order */}
          <img
            src="/images/number-intelligence-use-cases-cards.png"
            alt="Five use cases: FinTech and Lending, E-commerce, Insurance, Staffing and Recruitment, and Across Industries."
            draggable="false"
            loading="lazy"
            className="mt-7 block h-auto w-full min-[1000px]:mt-12"
          />
        </div>

        {/* RIGHT: Main illustration aligned with the cards */}
        <div className="flex min-w-0 items-start justify-center min-[1000px]:mt-[250px]">
          <img
            src="/images/number-intelligence-use-cases-visual.png"
            alt="Digital verification illustration with a protected document, security shield, and identity data."
            draggable="false"
            loading="lazy"
            className="block h-auto w-full object-contain"
          />
        </div>

      </div>
    </section>
  );
}

function NumberIntelligenceIntegrationSection() {
  const description =
    "Every API in the Number Intelligence suite is a RESTful endpoint that returns a JSON response, so it drops into an existing onboarding flow without a rebuild. SmartVerify provides a sandbox environment for testing calls before you go live, along with documentation for each endpoint and typical response times under a few seconds. Most teams start with OTP verification and mobile to pre-fill, then layer in fraud-focused APIs like Common Account Detection as their volume grows.";

  return (
    <section
      id="number-intelligence-integration"
      aria-labelledby="number-intelligence-integration-title"
      className="w-full bg-white"
    >
      {/* Grey gap between the previous section and this section */}
      <div
        aria-hidden="true"
        className="h-6 w-full bg-[#F0F0F0]"
      />

      {/* Main content */}
      <div className="mx-auto grid w-[88%] max-w-[1380px] grid-cols-1 items-center gap-7 pb-8 pt-5 min-[900px]:w-[72%] min-[900px]:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] min-[900px]:gap-x-[clamp(32px,4vw,76px)] min-[900px]:py-4">

        {/* LEFT: Heading and description */}
        <div className="flex min-w-0 flex-col items-start min-[900px]:pl-0 min-[900px]:-translate-x-16">
          <h2
            id="number-intelligence-integration-title"
            className="mt-12 w-full"
          >
            <img
              src="/images/number-intelligence-integration-heading.png"
              alt="Integrate Number Intelligence in Minutes"
              draggable="false"
              className="block h-auto w-[min(100%,30vw)] min-w-[240px] max-w-[566px] min-[900px]:min-w-0"
            />
          </h2>

          <img
            src="/images/number-intelligence-integration-description.png"
            alt={description}
            draggable="false"
            loading="lazy"
            className="mt-12 block h-auto w-full max-w-[641px]"
          />
        </div>

        {/* RIGHT: Integration illustration */}
        <div className="mt-4 flex min-w-0 items-center justify-center min-[900px]:justify-end">
          <img
            src="/images/number-intelligence-integration-visual.png"
            alt="Illustration of an API connecting a laptop, processing engine, and server."
            draggable="false"
            loading="lazy"
            className="block h-auto w-[min(80vw,360px)] max-w-full object-contain min-[900px]:translate-x-6 w-[min(28vw,619px)]"
          />
        </div>

      </div>
    </section>
  );
}
function NumberIntelligenceIdentitySignalCta() {
  const description =
    "A mobile number is one of the cheapest, fastest identity signals a business can act on if it's read correctly. SmartVerify's Number Intelligence suite turns that single field into a fraud check, an address lookup, and a pre-fill tool all at once. Test any of the ten APIs above in the sandbox environment and see how much manual review can be cut from your onboarding flow.";

  return (
    <section
      id="number-intelligence-identity-signal"
      aria-labelledby="number-intelligence-identity-signal-title"
      className="w-full bg-white py-6 sm:py-8"
    >
      {/* DESKTOP BANNER */}
      <div className="mt-4 relative mx-auto hidden aspect-[1520/372] w-[80%] max-w-[1520px] overflow-hidden rounded-[12px] min-[1100px]:block">

        {/* Background artwork */}
        <img
          src="/images/number-intelligence-identity-signal-bg.png"
          alt=""
          aria-hidden="true"
          draggable="false"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Content aligned to the left */}
        <div className="absolute left-[4.1%] top-[7%] z-10 flex w-[61%] max-w-[900px] flex-col items-start text-white">

          <h2
            id="number-intelligence-identity-signal-title"
            className="m-0 w-full max-w-[880px] text-[clamp(30px,2.5vw,46px)] font-semibold leading-[1.1] tracking-[-0.035em]"
          >
            Turn Every Mobile Number Into
            <br />
            a Trusted Identity Signal
          </h2>

          <p className="mt-2 w-full max-w-[830px] text-[clamp(14px,1.05vw,19px)] font-normal leading-[1.22] text-white">
            {description}
          </p>

          {/* Existing Book a Demo button */}
          <div className="mt-4">
            <CtaImageButton
              href="#contact"
              label="Book a Demo"
              image="/images/book-demo.png"
              hoverText="Book a Demo"
              variant="demo"
              showArrow
              className="w-[200px] max-w-full [&_.cta-hover-face--demo]:text-[12px] [&_.cta-hover-face--demo]:px-3 [&_.cta-hover-arrow]:h-5 [&_.cta-hover-arrow]:w-5"
            />
          </div>
        </div>
      </div>

      {/* MOBILE AND TABLET BANNER */}
      <div className="mx-auto w-[92%] max-w-[720px] overflow-hidden rounded-[12px] bg-[#6547F8] min-[1100px]:hidden">

        {/* Decorative illustration */}
        <div className="relative h-[150px] w-full overflow-hidden sm:h-[210px]">
          <img
            src="/images/number-intelligence-identity-signal-bg.png"
            alt=""
            aria-hidden="true"
            draggable="false"
            className="absolute inset-0 h-full w-full object-cover object-[78%_center]"
          />
        </div>

        {/* Responsive content */}
        <div className="flex flex-col items-start px-5 pb-7 pt-1 text-white sm:px-8 sm:pb-9">
          <h2
            id="number-intelligence-identity-signal-title-mobile"
            className="m-0 w-full text-[clamp(27px,5vw,40px)] font-semibold leading-[1.12] tracking-[-0.03em]"
          >
            Turn Every Mobile Number Into a Trusted Identity Signal
          </h2>

          <p className="mt-3 text-[14px] leading-[1.45] text-white sm:text-[16px]">
            {description}
          </p>

          <div className="mt-5">
            <CtaImageButton
              href="#contact"
              label="Book a Demo"
              image="/images/book-demo.png"
              hoverText="Book a Demo"
              variant="demo"
              showArrow
              className="w-[185px] max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function NumberIntelligenceFaqSection() {
  return (
    <section
      id="number-intelligence-faq"
      aria-label="Frequently Asked Questions"
      className="w-full overflow-hidden bg-[#6547F8]"
    >
      <img
        src="/images/number-intelligence-faq-section.png"
        alt="Frequently Asked Questions: UAN verification, income verification without contacting an employer, UAN Basic and Advanced APIs, TDS Quarterly API, API response times, and SmartVerify compared with other verification providers."
        draggable="false"
        loading="lazy"
        className="mx-auto block h-auto w-full max-w-[1920px]"
      />
    </section>
  );
}

function IdentityVerificationHero() {
  const description =
    "Modern businesses need verification that is fast, accurate, and reliable. SmartVerify's Identity Verification APIs help organisations instantly validate customer identities, minimising manual effort while strengthening fraud prevention and compliance. Whether you're onboarding users, approving loans, or validating account holders, our APIs deliver verified data in minutes.";

  return (
    <section
      id="identity-verification-hero"
      aria-label="Identity Verification API"
      className="relative isolate w-full overflow-hidden bg-white min-[1100px]:min-h-[782px]"
    >
      {/* Pink and purple background, matching the main-page hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-white"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 -z-10 w-[18%] bg-[linear-gradient(90deg,rgba(244,77,137,0.20),transparent)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[65%] w-[30%] bg-[radial-gradient(ellipse_at_bottom_left,rgba(244,77,137,0.22),transparent_72%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-[26%] bg-[linear-gradient(90deg,transparent,rgba(139,104,255,0.24))]"
      />

      {/* DESKTOP: left text and right visual */}
      <div className="mt-14 relative mx-auto min-h-0 w-[88%] py-10 min-[1100px]:min-h-[782px] min-[1100px]:w-full min-[1100px]:py-0">

        {/* LEFT: Heading, description and CTA buttons */}
        <div className="relative z-10 flex max-w-[680px] flex-col items-start min-[1100px]:absolute min-[1100px]:left-[5.4%] min-[1100px]:top-[24%] min-[1100px]:w-[min(42vw,652px)]">

          <h1
            id="identity-verification-hero-title"
            className="m-0 w-full max-w-[620px] min-[1100px]:w-[min(39vw,610px)]"
          >
            <img
              src="/images/identity-verification-hero-heading.png"
              alt="Verify Customer Identities Faster with Our Identity Verification API"
              draggable="false"
              fetchPriority="high"
              className="block h-auto w-full"
            />
          </h1>

          <img
            src="/images/identity-verification-hero-description.png"
            alt={description}
            draggable="false"
           className="mt-7 block h-auto w-full max-w-[530px] min-[1100px]:w-[min(33vw,530px)]"
          />

          {/* Existing shared CTA buttons */}
          <div className="mt-8 flex w-full flex-col flex-wrap items-start gap-4 min-[640px]:flex-row min-[640px]:items-center min-[640px]:gap-6 min-[1100px]:mt-9 min-[1100px]:gap-[24px]">

            <CtaImageButton
              href="#documentation"
              label="View Documentation"
              image="/images/view-documentation.png"
              hoverText="View Documentation"
              variant="docs"
              className="w-[255px] max-w-full"
            />

            <CtaImageButton
              href="#contact"
              label="Book a Demo"
              image="/images/book-demo.png"
              hoverText="Book a Demo"
              variant="demo"
              showArrow
              className="w-[225px] max-w-full"
            />

          </div>
        </div>

        {/* RIGHT: Full exported identity-verification composition */}
        <img
          src="/images/identity-verification-hero-visual.png"
          alt="Customer face verification on a mobile phone, with identity document cards and verification status panels."
          draggable="false"
          fetchPriority="high"
          className="relative mx-auto mt-12 block h-auto w-full max-w-[800px] object-contain min-[1100px]:absolute min-[1100px]:right-[5.3%] min-[1100px]:top-[56%] min-[1100px]:mx-0 min-[1100px]:mt-0 min-[1100px]:w-[min(42vw,800px)] min-[1100px]:max-w-none min-[1100px]:-translate-y-1/2"
        />

      </div>
    </section>
  );
}
const identityVerificationApis = [
  {
    title: "PAN Basic V1",
    description:
      "verifies whether a PAN number is valid and active. Use this as a first-pass filter before you run deeper checks, so you don't waste resources on check numbers that don't exist.",
  },
  {
    title: "PAN Details V1",
    description:
      "retrieves the cardholder name, date of birth, and PAN status. That’s enough data for you to compare with what the user entered at sign-up to catch typos and impersonation attempts early.",
  },
  {
    title: "PAN Details Plus",
    description:
      "is a better version of PAN Details V1 that adds additional data such as Aadhaar-seeding status and masked personal information. Businesses that do loan or investment onboarding leverage this to get a more complete view of identity without asking users for more documents.",
  },
  {
    title: "PAN Aadhaar Link Validation",
    description:
      "is used to check whether a user's PAN is linked to Aadhaar. It is a mandatory requirement for various financial and tax-related transactions in India. This check, if missed, can result in onboarded users with PANs being flagged as inactive down the line.",
  },
  {
    title: "PAN to Masked Aadhaar",
    description:
      "retrieves the masked Aadhaar number tied to a given PAN. It is intended for cases where Aadhaar-linked verification is needed without collecting and storing the full Aadhaar number and hence ensures that the data collection is kept at the minimum possible.",
  },
  {
    title: "PAN 206AB Compliance Check",
    description:
      "verifies if a PAN is applicable under Section 206AB to charge a higher TDS or TCS rate on non-filers of income tax returns. This is used by finance and payroll teams to automatically apply the correct deduction rates, instead of manually cross-checking tax notices.",
  },
  {
    title: "Voter ID validation",
    description:
      "Is used to verify the Voter ID (EPIC) numbers with the database of the Election Commission. For firms that accept the voter ID as a valid identity proof along with PAN or Aadhaar, it is a useful additional document for verification.",
  },
  {
    title: "Passport validation",
    description:
      "Is used to validate passport details for users who provide it as an identity or address proof. It is common in travel, real estate, and international onboarding where a PAN or Aadhaar by itself doesn’t suffice as a requirement.",
  },
  {
    title: "DL Validation",
    description:
      "checks driving licence details like issue and expiry dates. Logistics, staffing, and gig-economy platforms use this to verify a candidate actually has a valid licence before sending them driving-related work.",
  },
  {
    title: "Aadhaar to Masked PAN",
    description:
      "is the reverse of PAN to Masked Aadhaar. It returns the masked PAN associated with an Aadhaar number. This supports workflows that use Aadhaar as the primary document collected during onboarding",
  },
  {
    title: "The ITR check",
    description:
      "confirms whether a user or business has filed income tax returns for a given period. Lenders and B2B platforms use this to assess financial credibility before extending credit or entering a contract.",
  },
];

function IdentityVerificationApiExplorer() {
  return (
    <>
      <section
        id="identity-verification-apis"
        aria-labelledby="identity-verification-apis-heading"
        className="w-full bg-white"
      >
        <div
          className="
            mx-auto grid w-[88%] max-w-[1520px]
            grid-cols-1 gap-8 pb-10 pt-10
            sm:gap-10 sm:pb-14 sm:pt-12
            min-[1100px]:w-[80%]
            min-[1100px]:grid-cols-[minmax(0,587px)_minmax(0,1fr)]
            min-[1100px]:gap-x-[52px]
            min-[1100px]:items-start
            min-[1100px]:pb-0
            min-[1100px]:pt-[72px]
          "
        >
          {/* Left content */}
          <div
            className="
              min-w-0 self-start
              min-[1100px]:sticky
              min-[1100px]:top-[-100px]
            "
          >
            {/* Figma-exported heading */}
            <h2
              id="identity-verification-apis-heading"
              className="m-0 w-full max-w-[587px]"
            >
              <img
                src="/images/identity-verification-apis-heading.png"
                alt="Explore SmartVerify's Identity Verification API"
                draggable="false"
                className="block h-auto w-full"
              />
            </h2>

            {/* Description */}
            <p
              className="
                mt-6 max-w-[540px]
                text-[15px] leading-[1.3] text-[#414141]
                sm:mt-8 sm:text-[17px]
                min-[1100px]:mt-[66px]
                min-[1100px]:text-[20px]
                min-[1100px]:leading-[1.2]
              "
            >
              A single verification call rarely covers every case. Different
              documents, different use cases, and different compliance
              requirements call for different checks. Here's how SmartVerify's
              KYC verification APIs cover the full aspect
            </p>

            {/* Reuse the existing main-page Know More styling */}
            <a
              href="#identity-verification-apis-list"
              className="solutions-know-more mt-7 inline-flex sm:mt-8 min-[1100px]:mt-[58px]"
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

          {/* Right side: independently scrolling API list on desktop */}
          <div
            id="identity-verification-apis-list"
            className="min-w-0 min-[1100px]:mt-4"
          >
            <div
              className="
                grid grid-cols-1 gap-5
                sm:grid-cols-2 sm:gap-x-5 sm:gap-y-6
                min-[1100px]:gap-x-[40px]
                min-[1100px]:gap-y-[52px]
              "
            >
              {identityVerificationApis.map((api) => (
                <article
                  key={api.title}
                  className="
                    flex min-w-0 min-h-[250px] flex-col
                    rounded-[6px] border border-[#B7A5EF]
                    bg-white p-6
                    sm:min-h-[290px] sm:p-6
                    min-[1100px]:min-h-[382px]
                    min-[1100px]:p-[30px]
                  "
                >
                  {/* API title */}
                  <h3
                    className="
                      m-0 text-[19px] font-normal leading-[1.3]
                      text-[#7E68D8]
                      min-[1100px]:text-[24px]
                      min-[1100px]:leading-[1.25]
                    "
                  >
                    {api.title}
                  </h3>

                  {/* API description */}
                  <p
                    className="
                      mt-[18px] text-[15px] leading-[1.25]
                      text-[#555555]
                      min-[1100px]:text-[20px]
                      min-[1100px]:leading-[1.2]
                    "
                  >
                    {api.description}
                  </p>

                  {/* Read more link */}
                  <a
                    href="#contact"
                    aria-label={`Read more about ${api.title}`}
                    className="
                      mt-auto inline-flex w-fit items-center gap-[14px]
                      pt-7 text-[16px] text-[#8069D8]
                      transition-colors hover:text-[#EC3069]
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-[#8069D8]
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

      {/* Grey gap before the next section */}
      <div
        aria-hidden="true"
        className="h-2 w-full bg-[#F0F0F0]"
      />
    </>
  );
}

function IdentityIndustryIcon({ type }) {
  const common = {
    viewBox: "0 0 48 48",
    fill: "none",
    "aria-hidden": true,
    className: "h-11 w-11 shrink-0 sm:h-12 sm:w-12",
  };

  if (type === "fintech") {
    return (
      <svg {...common}>
        <rect x="7" y="5" width="29" height="38" rx="3" fill="#68D7B0" />
        <path d="M12 15 21 10 30 15M14 16h14M15 19v12M20 19v12M25 19v12M30 19v12M12 33h19M12 37h19" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M35 25 43 29V36C43 40 39 43 35 45C31 43 28 40 28 36V29L35 25Z" fill="#38B98F" stroke="white" strokeWidth="1.2" />
        <rect x="33" y="32" width="5" height="5" rx="1" stroke="white" strokeWidth="1.3" />
        <path d="M34 32v-2a2 2 0 0 1 4 0v2" stroke="white" strokeWidth="1.3" />
      </svg>
    );
  }

  if (type === "banking") {
    return (
      <svg {...common}>
        <g fill="#7554FF">
          <path d="M4 16 24 5 44 16H4Z" />
          <rect x="7" y="18" width="34" height="4" rx="1" />
          <rect x="7" y="38" width="34" height="4" rx="1" />
          <rect x="4" y="43" width="40" height="3" rx="1" />
          <rect x="11" y="23" width="4" height="13" rx="1" />
          <rect x="22" y="23" width="4" height="13" rx="1" />
          <rect x="33" y="23" width="4" height="13" rx="1" />
        </g>
        <path d="M7 17h34M9 36h30" stroke="white" strokeWidth="1.5" />
        <circle cx="24" cy="4" r="2" fill="#7554FF" />
      </svg>
    );
  }

  if (type === "staffing") {
    return (
      <svg {...common}>
        <path d="M12 5h21v35H8V9h4" stroke="#FF8796" strokeWidth="2" />
        <rect x="14" y="3" width="21" height="35" rx="2" fill="#FF8796" />
        <rect x="18" y="9" width="13" height="9" rx="1" stroke="white" strokeWidth="1.5" />
        <circle cx="24.5" cy="12" r="2" stroke="white" strokeWidth="1.3" />
        <path d="M21 16c0-3 7-3 7 0M18 22h14M18 26h11M18 30h14M18 34h9" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="37" cy="17" r="8" fill="#FF8796" stroke="white" strokeWidth="1.2" />
        <path d="m33 17 3 3 5-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "insurance") {
    return (
      <svg {...common}>
        <path d="M24 3 42 9V22C42 33 34 41 24 46C14 41 6 33 6 22V9L24 3Z" fill="#A8D5FA" />
        <path d="m15 23 6 6 13-14" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="4" y="6" width="40" height="27" rx="2" fill="#8060FF" />
      <path d="M9 12h30l-3 11H13L9 12Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7 9h5M12 12l3 14h19" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="18" cy="29" r="2" fill="white" />
      <circle cx="32" cy="29" r="2" fill="white" />
      <path d="M20 37h8M24 33v4M14 42h20" stroke="#8060FF" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}


function IdentityVerificationIndustriesSection() {
 const industries = [
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
      "Meet all RBI and regulatory documentation standards and reduce onboarding time.",
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
      "Automate policyholder verification at signup and claims, no manual back-and-forth.",
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
      id="identity-verification-industries"
      aria-label="Identity verification use cases across industries"
      className="w-full overflow-hidden bg-white"
    >
      {/* Grey gap between the previous and current sections */}
      <div
        aria-hidden="true"
        className="h-6 w-full bg-[#F0F0F0]"
      />
      {/* Section heading */}
<div className="mx-auto mt-4 mb-0 w-[85%] max-w-[1200px] pt-8 pb-1 sm:mt-6 sm:mb-3 sm:pt-10 ">
  <img
    src="/images/identity-verification-industries-heading.png"
    alt="See Who’s Using SmartVerify"
    draggable="false"
    className="block h-auto w-[min(100%,340px)]"
  />
</div>
      {/* Desktop: exact exported Figma composition */}
      <div className="mx-auto hidden w-[76%] max-w-[1200px] min-[900px]:block">
        <img
          src="/images/identity-verification-industries-composition.png"
          alt="Identity verification use cases for FinTech and lending, banking, staffing and recruitment, insurance, and e-commerce, alongside a digital document verification illustration."
          draggable="false"
          loading="lazy"
          className="block h-auto w-full"
        />
      </div>

      {/* Mobile and tablet: readable cards and illustration */}
      <div className="mx-auto flex w-[84%] max-w-[540px] flex-col gap-4 pt-3 pb-8 min-[900px]:hidden">
        <div className="flex flex-col gap-3">
          {industries.map((industry) => (
  <article
    key={industry.title}
    className="flex items-center gap-3 rounded-[10px] border border-[#D3CCFF] bg-[#E5E4FF] px-3 py-4 sm:gap-4 sm:px-5 sm:py-5"
  >
    <IdentityIndustryIcon type={industry.icon} />

    <div className="min-w-0 flex-1">
      <h3 className="text-[16px] font-medium leading-snug text-[#111827] sm:text-[19px]">
        {industry.title}
      </h3>

      <p className="mt-2 text-[13px] leading-[1.4] text-[#292929] sm:text-[16px]">
        {industry.description}
      </p>
    </div>
  </article>
))}

        </div>

{/* Mobile: show only the illustration from the combined export */}
<div
  role="img"
  aria-label="Digital identity documents and secure verification illustration"
  className="mx-auto aspect-square w-full max-w-[390px] overflow-hidden rounded-[12px] bg-white bg-[url('/images/identity-verification-industries-composition.png')] bg-[length:auto_100%] bg-[position:100%_center] bg-no-repeat"
/>
      </div>
    </section>
  );
}

function IdentityVerificationKycFlowSection() {
  const cards = [
    {
      image: "/images/identity-kyc-flow-card-1.png",
      alt: "Quick document validation using PAN, Aadhaar, or Voter ID at signup.",
    },
    {
      image: "/images/identity-kyc-flow-card-2.png",
      alt: "Deeper checks like PAN Details Plus or ITR Check for users crossing a transaction or credit threshold.",
    },
    {
      image: "/images/identity-kyc-flow-card-3.png",
      alt: "Biometric and liveness checks for high-risk actions, like large withdrawals or account recovery.",
    },
  ];

  return (
    <section
      id="identity-verification-kyc-flow"
      aria-labelledby="identity-verification-kyc-flow-title"
      className="w-full overflow-hidden bg-white"
    >
      {/* Grey separator between sections */}
      <div
        aria-hidden="true"
        className="h-6 w-full bg-[#F0F0F0]"
      />

      <div className="mx-auto w-[88%] max-w-[1536px] pb-12 pt-10 sm:pb-14 sm:pt-12 min-[1100px]:w-[80%] min-[1100px]:pb-[64px] min-[1100px]:pt-12">

        {/* Heading */}
        <div className="w-full min-[900px]:translate-x-7">
        <h2
          id="identity-verification-kyc-flow-title"
          className="m-0 w-full max-w-[650px]"
        >
          <img
            src="/images/identity-kyc-flow-heading.png"
            alt="Building a KYC Flow That Doesn't Slow Users Down"
            draggable="false"
            className="block h-auto w-full"
          />
        </h2>

        {/* Section description */}
        <p className="mt-5 max-w-[650px] text-[14px] leading-[1.4] text-[#555555] sm:text-[15px] min-[1100px]:mt-6">
          The businesses that get the most out of KYC verification don't run
          every check on every user. They tier it:
        </p>
      </div>

        {/* Three Figma-exported cards */}
        <div className="mx-auto mt-7 grid w-[94%] grid-cols-1 items-start gap-4 min-[640px]:grid-cols-3 min-[640px]:gap-3 min-[1100px]:mt-8 min-[1100px]:gap-6">
  {cards.map((card) => (
    <article key={card.image} className="min-w-0">
      <img
        src={card.image}
        alt={card.alt}
        draggable="false"
        loading="lazy"
        className="block h-auto w-full"
      />
    </article>
  ))}
</div>

      </div>
    </section>
  );
}
function IdentityVerificationWhyBusinessesSection() {
  return (
    <section
      aria-labelledby="identity-verification-why-businesses-title"
      className="w-full bg-white"
    >
      {/* Grey gap between sections */}
      <div
        aria-hidden="true"
        className="h-6 w-full bg-[#F0F0F0]"
      />

      {/* Visual and content */}
      <div className="relative flex w-full flex-col">
        {/* Text content */}
        <div className="order-1 mx-auto w-[88%] py-10 md:absolute md:left-[10%] md:top-[19%] md:z-10 md:mx-0 md:w-[min(30vw,560px)] md:p-0">
          <h2
            id="identity-verification-why-businesses-title"
            className="m-0 w-full max-w-[604px]"
          >
            <img
              src="/images/identity-verification-why-businesses-heading.png"
              alt="Why Businesses Choose SmartVerify for Identity Verification"
              draggable="false"
              className="block h-auto w-full"
            />
          </h2>

          <p className="mt-5 max-w-[540px] text-[13px] leading-[1.4] text-[#555555] md:mt-6 md:text-[14px]">
            We help businesses verify customer identities quickly and safely
            with automated APIs. Validate identity details and match
            information with trusted data sources without relying on manual
            checks. With simple APIs, clear documentation, and a sandbox,
            businesses can easily add identity verification to onboarding
            and KYC workflows.
          </p>

          {/* Existing Know More button styling */}
          <a
            href="#identity-verification-kyc-flow-title"
            className="solutions-know-more mt-5 inline-flex"
          >
            Know More
            <svg
              className="solutions-know-more__arrow"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 12h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="m13 6 6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Single visual image — preserves the full image */}
        <img
          src="/images/identity-verification-why-businesses-visual.png"
          alt="Customer identity verification with SmartVerify"
          draggable="false"
          className="order-2 ml-auto block h-auto w-full md:w-[90%]"
        />
      </div>
    </section>
  );
}
function IdentityVerificationSeamlessVerificationSection() {
  return (
    <section className="w-full bg-white py-6 sm:py-8">
      <div className="mx-auto w-[88%] max-w-[1536px] min-[768px]:w-[80%]">
        <div className="relative isolate min-h-[320px] overflow-hidden rounded-[10px] bg-gradient-to-r from-[#6847FF] to-[#8964FF] md:min-h-[300px] min-[1100px]:aspect-[1520/399] min-[1100px]:min-h-0">
          {/* Figma background with verification illustrations */}
          <img
            src="/images/identity-verification-seamless-bg.png"
            alt=""
            aria-hidden="true"
            draggable="false"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-left min-[1100px]:object-fill"
          />

          {/* Text and CTA */}
          <div className="relative z-10 flex min-h-[320px] w-full flex-col items-start justify-center px-5 py-7 sm:px-8 md:min-h-[300px] md:w-[72%] md:px-9 min-[1100px]:h-full min-[1100px]:min-h-0 min-[1100px]:w-[66%] min-[1100px]:px-[clamp(28px,2vw,40px)] min-[1100px]:py-5">
            {/* Heading image */}
            <h2 className="m-0 w-full max-w-[650px]">
              <img
                src="/images/identity-verification-seamless-heading.png"
                alt="Start Your Seamless Verification Journey"
                draggable="false"
                className="block h-auto w-full"
              />
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-[700px] text-[12px] leading-[1.35] text-white/90 min-[1100px]:mt-4 min-[1100px]:text-[clamp(10px,0.8vw,13px)]">
              The business environment today demands swift customer
              onboarding, and manual KYC simply cannot keep pace, and it’s too
              vulnerable to forged documents. An API-driven approach validates
              PAN, Aadhaar, Voter ID, Passport and Driving Licence data against
              live government sources in seconds, to give you both speed and a
              documented compliance trail.
            </p>

            {/* Existing Book a Demo CTA */}
            <CtaImageButton
              href="#contact"
              label="Book a Demo"
              image="/images/book-demo.png"
              hoverText="Book a Demo"
              variant="demo"
              showArrow
              className="mt-4 w-[191px] shrink-0 overflow-hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function IdentityVerificationFaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What's the difference between KYC and identity verification?",
      answer:
        "KYC is the broader process businesses use to establish customer identity and assess onboarding risk. Identity verification is one part of KYC that focuses on validating identity details and documents.",
    },
    {
      question:
        "Which document should businesses verify first, PAN or Aadhaar?",
      answer:
        "It depends on your onboarding workflow and applicable requirements. PAN can support tax and identity checks, while Aadhaar-based verification should be performed through an appropriate method where legally permitted.",
    },
    {
      question:
        "Can identity verification APIs work without storing sensitive user data?",
      answer:
        "Yes, verification workflows can be designed to minimize the retention of sensitive information. Data collection, processing, consent and retention should align with your security policies and applicable requirements.",
    },
    {
      question:
        "Does the PAN 206AB Compliance Check only apply to large enterprises?",
      answer:
        "Applicability depends on the relevant tax requirements and your workflow, not just business size. Confirm the current rules with your tax or compliance team before relying on this check.",
    },
    {
      question: "How long does an API-based KYC check take?",
      answer:
        "Many API-based verification checks return results within seconds. Actual response times depend on the verification type, external data sources, network conditions and any additional checks required.",
    },
    {
      question:
        "How is SmartVerify different from other verification providers?",
      answer:
        "SmartVerify brings identity and document verification workflows together through APIs, supported by integration documentation and a sandbox for testing. Compare providers based on verification coverage, integration needs, performance and compliance requirements.",
    },
  ];

  return (
    <section
      aria-labelledby="identity-verification-faq-title"
      className="w-full overflow-hidden bg-[radial-gradient(ellipse_at_52%_50%,rgba(151,129,255,0.95)_0%,rgba(151,129,255,0.38)_32%,rgba(151,129,255,0)_68%),linear-gradient(110deg,#6042ff_0%,#6b4fff_100%)]"
    >
      <div
        className="
          mx-auto grid w-[88%] max-w-[1500px]
          grid-cols-1 gap-8 py-10
          sm:gap-10 sm:py-14
          min-[1100px]:min-h-[610px]
          min-[1100px]:w-[80%]
          min-[1100px]:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)]
          min-[1100px]:items-start
          min-[1100px]:gap-x-[9.7vw]
          min-[1100px]:py-[109px]
        "
      >
        {/* Left: FAQ heading */}
        <div>
          <h2
            id="identity-verification-faq-title"
            className="
              m-0 max-w-[480px]
              text-[36px] font-semibold leading-[1.15]
              tracking-[-0.035em] text-white
              sm:text-[44px]
              min-[1100px]:text-[clamp(40px,2.8vw,54px)]
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
            const answerId = `identity-verification-faq-answer-${index}`;

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
                    text-[15px] font-normal leading-[1.4] text-white
                    transition-colors hover:bg-white/[0.08]
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-white
                    sm:min-h-[72px] sm:px-5 sm:text-[17px]
                    min-[1100px]:min-h-[74px]
                    min-[1100px]:px-[27px]
                    min-[1100px]:py-5
                    min-[1100px]:text-[20px]
                  "
                >
                  <span className="min-w-0 flex-1">
                    {faq.question}
                  </span>

                  {/* Figma-style downward triangle */}
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

                {/* Expandable answer */}
                {isOpen && (
                  <div
                    id={answerId}
                    className="
                      border-t border-white/30
                      px-4 pb-5 pt-4
                      text-[14px] leading-[1.65] text-white/90
                      sm:px-5
                      min-[1100px]:px-[27px]
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

function FaceAuthenticationHero() {
  return (
    <section
      id="face-authentication-hero"
      aria-labelledby="face-authentication-heading"
      className="
        hero-background relative isolate w-full overflow-hidden bg-white
      "
    >
          {/* Soft Figma-style background, with pink contained to the far left */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 z-0"
>
  {/* White centre with subtle pink edge and lavender right */}
  <div
    className="
      absolute inset-0
      bg-[linear-gradient(90deg,#f8e5ed_0%,#fff9fb_5%,#ffffff_12%,#ffffff_76%,#faf5fb_88%,#e8d8ef_100%)]
    "
  />

  {/* Soft pink glow restricted to the left edge */}
  <div
    className="
      absolute inset-y-0 left-0 w-[12%]
      bg-[radial-gradient(ellipse_at_0%_100%,rgba(236,48,105,0.16)_0%,rgba(236,48,105,0.06)_42%,transparent_100%)]
    "
  />

  {/* Subtle lavender shading on the right */}
  <div
    className="
      absolute inset-y-0 right-0 w-[24%]
      bg-[radial-gradient(ellipse_at_100%_55%,rgba(166,119,194,0.12)_0%,rgba(166,119,194,0.05)_45%,transparent_100%)]
    "
  />
</div>
      <div
        className="
        relative mx-auto flex w-[88%] max-w-[1520px]
        flex-col items-start justify-center
        gap-8 pt-[115px] pb-10
        sm:gap-10 sm:pt-[130px] sm:pb-14
        min-[1100px]:min-h-[min(100vh,787px)]
        min-[1100px]:w-[80%]
        min-[1100px]:py-10
        "
      >
        {/* Left: heading, description and CTA buttons */}
        <div
          className="
            relative z-10 w-full
            min-[1100px]:w-[min(48vw,660px)]
            min-[1100px]:translate-x-0 min-[1100px]:translate-y-[44px]
          "
        >
          {/* Exact Figma heading image */}
          <h1
            id="face-authentication-heading"
            className="m-0 w-full max-w-[550px] min-[1100px]:w-[min(34vw,550px)]"
          >
            <img
              src="/images/face-authentication-heading.png"
              alt="Face Authentication API for Fast & Safe User Verification"
              draggable="false"
              className="block h-auto w-full"
            />
          </h1>

          {/* Description */}
          <p
            className="
              mt-6 max-w-[520px]
              text-[14px] leading-[1.3] text-[#383838]
              sm:text-[16px] sm:leading-[1.3]
              min-[1100px]:mt-[25px]
              min-[1100px]:text-[clamp(15px,0.95vw,18px)]
              min-[1100px]:leading-[1.25]
            "
          >
            Identity fraud is becoming more sophisticated, making traditional
            verification methods insufficient on their own. SmartVerify's Face
            Authentication API uses advanced facial matching technology to
            verify user identities in seconds, helping businesses automate
            onboarding, prevent impersonation, and meet compliance requirements
            with confidence.
          </p>

          {/* Existing main-page CTA buttons */}
          <div
           className="
           mt-7 flex w-full flex-col items-center gap-4
           sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-5
           min-[1100px]:mt-[39px]
           min-[1100px]:w-fit
           min-[1100px]:flex-nowrap
           min-[1100px]:justify-start
           min-[1250px]:gap-[34px]
           "
          >
            <CtaImageButton
              href="#documentation"
              label="View Documentation"
              image="/images/view-documentation.png"
              hoverText="View Documentation"
              variant="docs"
              className="w-full max-w-[260px] shrink-0 sm:w-[300px]"
            />

            <CtaImageButton
              href="#contact"
              label="Book a Demo"
              image="/images/book-demo.png"
              hoverText="Book a Demo"
              variant="demo"
              showArrow
              className="w-full max-w-[240px] shrink-0 sm:w-[261px]"
            />
          </div>
        </div>

        {/* Right: complete Figma illustration */}
        <img
          src="/images/face-authentication-visual.png"
          alt="Face authentication in progress, with facial recognition scanning and a verified status"
          draggable="false"
          className="
            relative z-0 block h-auto w-full max-w-[954px]
            self-center object-contain
            min-[1100px]:absolute
            min-[1100px]:right-[-8.5vw]
            min-[1100px]:top-[calc(50%+72px)]
            min-[1100px]:w-[min(50vw,954px)]
            min-[1100px]:-translate-y-1/2
          "
        />
      </div>
    </section>
  );
}
const faceAuthenticationSteps = [
  {
    number: 1,
    title: "Submit ID Card",
    description:
      "Submit a valid PAN, Aadhaar, Passport, or Driving License.",
  },
  {
    number: 2,
    title: "Extract Photo",
    description: "Get the reference face from the ID document.",
  },
  {
    number: 3,
    title: "Verify Liveness",
    description:
      "User captures a live selfie/video to confirm they are a real person.",
  },
  {
    number: 4,
    title: "Face Match",
    description:
      "Live face is compared with the ID photo, generating a match score in seconds.",
  },
];

function FaceAuthenticationHowItWorksSection() {
  return (
    <section
      aria-labelledby="face-authentication-how-it-works-title"
      className="w-full overflow-hidden bg-white"
    >
      {/* Thin grey divider at the top */}
      <div aria-hidden="true" className="h-4 w-full bg-[#F3F4F6]" />

      {/* Heading and subtitle */}
      <header className="px-4 pb-4 pt-6 text-center sm:pb-[17px] sm:pt-[26px]">
        <h2
          id="face-authentication-how-it-works-title"
          className="m-0"
        >
          <img
            src="/images/face-authentication-how-it-works-heading.png"
            alt="How Our Face Authentication Works"
            draggable="false"
            className="mx-auto block h-auto w-[min(76vw,320px)] min-[768px]:w-[min(30vw,460px)]"
          />
        </h2>

        <p className="mt-2 font-sans text-[13px] leading-[1.4] text-[#282828] sm:text-[15px] min-[1100px]:text-[14px]">
          A simple four step verification process to verify identity in real time
        </p>
      </header>

      {/* Desktop: exact combined Figma illustration */}
      <div className="hidden min-[768px]:block pb-5 min-[1100px]:pb-8">
        <img
          src="/images/face-authentication-how-it-works-visual.png"
          alt="Four-step face authentication workflow: submit an ID card, extract the reference photo, verify liveness, and match the live face against the ID photo."
          draggable="false"
          loading="lazy"
          className="mx-auto block h-auto w-[84%] max-w-[1520px]"
        />
      </div>

      {/* Mobile and small tablet: readable responsive layout */}
      <div className="mx-auto w-[90%] max-w-[700px] py-7 min-[768px]:hidden">
        {/* Central live-verification phone */}
        <div className="mb-7 flex justify-center">
          <img
            src="/images/face-authentication-live-phone.png"
            alt="Live face verification on a smartphone"
            draggable="false"
            loading="lazy"
            className="block h-auto w-[132px] sm:w-[150px]"
          />
        </div>

        {/* Four readable step cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {faceAuthenticationSteps.map((step) => (
            <article
              key={step.number}
              className="relative min-w-0 rounded-[8px] border border-[#E2DCF9] bg-white px-5 pb-5 pt-7 shadow-[0_2px_8px_rgba(75,55,160,0.05)]"
            >
              {/* Number badge */}
              <span className="absolute -top-3 left-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#654BFF] text-[16px] font-medium text-white">
                {step.number}
              </span>

              <h3 className="m-0 text-[18px] font-normal leading-[1.35] text-[#7563DF]">
                {step.title}
              </h3>

              <p className="mt-2 text-[14px] leading-[1.5] text-[#333333]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
const faceAuthenticationApis = [
  {
    title: "Face Match API",
    description:
      "The Face Match API compares two facial images, typically an ID photo and a live selfie, and returns a similarity score. It's the core matching engine behind most onboarding flows, and it works well for both real-time checks and batch verification of stored records.",
  },
  {
    title: "Face Liveness SDK",
    description:
      "The Face Liveness SDK runs the liveness check directly on the user's device, guiding them through simple prompts like blinking or turning their head. Because the check happens on-device, it responds instantly and cuts down on the network calls needed mid-verification.",
  },
  {
    title: "Face Liveness BE",
    description:
      "The Face Liveness BE API handles the same liveness detection but processes it on the backend instead of the device. This suits businesses that want centralized control over the verification logic or that need to verify a face from an image already captured elsewhere in the flow.",
  },
  {
    title: "Face Detection API",
    description:
      "Before any matching or liveness check runs, the platform needs to confirm a face is even present and clear enough to work with. The Face Detection API locates faces in an image, flags poor lighting or obstructions, and filters out blurry or unusable frames early, so downstream checks don't waste time on bad input.",
  },
  {
    title: "Selfie Capture API",
    description:
      "The Selfie Capture API manages the actual photo-taking step inside a business's app or website. It guides users to frame their face correctly, checks image quality on the spot, and hands off a clean capture to the matching and liveness APIs.",
  },
];

function FaceAuthenticationApisSection() {
  return (
    <>
      <section
        id="face-authentication-apis"
        aria-labelledby="face-authentication-apis-heading"
        className="w-full bg-white"
      >
        {/* Thin grey divider at the top */}
      <div aria-hidden="true" className="h-4 w-full bg-[#F3F4F6]" />
        <div
          className="
            mx-auto grid w-[90%] max-w-[1520px]
            grid-cols-1 gap-10 py-10
            sm:w-[88%] sm:py-14
            min-[1100px]:w-[80%]
            min-[1100px]:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]
            min-[1100px]:gap-x-[36px]
            min-[1100px]:py-0
          "
        >
          {/* Left content: sticky while the API cards scroll past */}
          <div
            className="
              min-w-0 self-start
              min-[1100px]:sticky
              min-[1100px]:top-[90px]
              min-[1100px]:mt-[90px]
            "
          >
            <h2
              id="face-authentication-apis-heading"
              className="m-0 w-full max-w-[504px]"
            >
              <img
                src="/images/face-authentication-apis-heading.png"
                alt="SmartVerify Face Authentication APIs"
                draggable="false"
                className="block h-auto w-full"
              />
            </h2>

            <p
              className="
                mt-6 max-w-[500px]
                text-[15px] leading-[1.3] text-[#383838]
                sm:text-[17px]
                min-[1100px]:mt-[30px]
                min-[1100px]:text-[20px]
                min-[1100px]:leading-[1.17]
              "
            >
              SmartVerify breaks face authentication into five focused APIs.
              Each one handles a distinct part of the process, so teams can
              combine them based on their risk tolerance, platform, and
              industry requirements.
            </p>

            {/* Reuse the existing main-page Know More button */}
            <a
              href="#face-authentication-api-cards"
              className="solutions-know-more mt-7 inline-flex min-[1100px]:mt-[40px]"
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

          {/* Right content: all five cards in normal document flow */}
          <div
            id="face-authentication-api-cards"
           className="min-w-0 min-[1100px]:max-w-[900px] min-[1100px]:justify-self-end min-[1100px]:pt-[58px]"
          >
            <div
              className="
                grid grid-cols-1 gap-5
                sm:grid-cols-2 sm:gap-x-5 sm:gap-y-6
                min-[1100px]:gap-x-[38px]
                min-[1100px]:gap-y-[38px]
              "
            >
              {faceAuthenticationApis.map((api) => (
                <article
                  key={api.title}
                  className="
                    flex min-w-0 flex-col
                    rounded-[6px] border border-[#B8A5F0]
                    bg-white p-5
                    sm:p-6
                    min-[1100px]:min-h-[372px]
                    min-[1100px]:p-[30px]
                  "
                >
                  <h3
                    className="
                      m-0 text-[20px] font-normal leading-[1.3]
                      text-[#7D68D8]
                      min-[1100px]:text-[24px]
                      min-[1100px]:leading-[1.25]
                    "
                  >
                    {api.title}
                  </h3>

                  <p
                    className="
                      mt-[18px] text-[15px] leading-[1.3]
                      text-[#585858]
                      sm:text-[16px]
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
                      pt-7 text-[16px] text-[#7D68D8]
                      transition-colors hover:text-[#EC3069]
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-[#7D68D8]
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
const faceAuthenticationBenefits = [
  {
    title: "Faster onboarding.",
    description:
      "We've got some extra safety and security features to help employers and employees keep their money safe and secure.",
    image: "/images/face-authentication-benefit-onboarding.png",
    alt: "Verification document with a blue security checkmark",
  },
  {
    title: "Lower review costs.",
    description:
      "Automating the first pass means human reviewers only step in for genuine edge cases, not every application.",
    image: "/images/face-authentication-benefit-review-costs.png",
    alt: "Automated review illustration with a downward cost chart and rupee symbol",
  },
  {
    title: "Fraud caught earlier",
    description:
      "Spoof attempts using photos, screens, or masks get flagged before an account is even created.",
    image: "/images/face-authentication-benefit-fraud.png",
    alt: "Illustration of a payment card and smartphone being used in a claim",
  },
  {
    title: "Consistent decisions",
    description:
      "A match score doesn't have a bad day or an off-shift reviewer. The same standard applies to every user, every time.",
    image: "/images/face-authentication-benefit-consistency.png",
    alt: "Two security shields with verification checkmarks",
  },
];

function FaceAuthenticationWhyBusinessesSection() {
  return (
    <section
      aria-labelledby="face-authentication-benefits-heading"
      className="w-full overflow-hidden bg-white"
    >
      {/* Thin grey divider at the top */}
      <div aria-hidden="true" className="h-4 w-full bg-[#F3F4F6]" />
      <div
        className="
          mx-auto w-[88%] max-w-[1520px]
          pb-12 pt-12
          sm:pb-16 sm:pt-16
          min-[1100px]:w-[80%]
          min-[1100px]:pb-[100px]
          min-[1100px]:pt-[96px]
        "
      >
        {/* Heading and intro */}
        <div
          className="
            grid grid-cols-1 gap-5
            sm:gap-7
            min-[768px]:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]
            min-[768px]:items-start
            min-[768px]:gap-10
          "
        >
          <h2
            id="face-authentication-benefits-heading"
            className="m-0 w-full max-w-[546px]"
          >
            <img
              src="/images/face-authentication-why-businesses-heading.png"
              alt="Why Businesses Rely on SmartVerify"
              draggable="false"
              className="block h-auto w-full"
            />
          </h2>

          <p
            className="
              m-0 max-w-[480px]
              text-[14px] leading-[1.4] text-[#414141]
              sm:text-[15px]
              min-[768px]:ml-auto
              min-[768px]:pt-1
              min-[1100px]:text-[16px]
            "
          >
            Manual identity checks don't scale, and they miss things a camera
            and an algorithm catch instantly. Face authentication addresses
            that gap in a few concrete ways.
          </p>
        </div>

        {/* Four benefits */}
        <div
          className="
            mt-9 grid grid-cols-1 gap-x-5 gap-y-9
            min-[768px]:mt-12
            min-[768px]:justify-items-center
            min-[1100px]:mt-[76px]
            min-[768px]:grid-cols-4
            min-[1100px]:gap-x-[22px]c:\Users\ABC\Downloads\face-authentication-flow-visual.png
          "
        >
          {faceAuthenticationBenefits.map((benefit) => (
            <article key={benefit.title} className="min-w-0 w-full min-[768px]:w-[94%]">
              {/* Square artwork */}
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.alt}
                  draggable="false"
                  loading="lazy"
                  className="block h-full w-full object-cover object-top"
                />
              </div>

              {/* Benefit title */}
              <h3
                className="
                  mt-7 text-[20px] font-normal leading-[1.3]
                  tracking-[-0.02em] text-[#393939]
                  sm:text-[21px]
                  min-[1100px]:mt-[40px]
                  min-[1100px]:text-[22px]
                "
              >
                {benefit.title}
              </h3>

              {/* Benefit description */}
              <p
                className="
                  mt-3 text-[14px] leading-[1.35] text-[#555555]
                  sm:text-[15px]
                  min-[1100px]:mt-[20px]
                  min-[1100px]:text-[16px]
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
  );
}
function FaceAuthenticationFlowSection() {
  return (
    <section
      aria-labelledby="face-authentication-flow-heading"
      className="relative w-full overflow-hidden bg-white"
    >
      {/* Thin grey divider at the top */}
      <div aria-hidden="true" className="h-4 w-full bg-[#F3F4F6]" />
      
      {/* Desktop: full-width Figma visual */}
      <div className="relative w-full">
        
        {/* 
          TOP IMAGE (Desktop only) 
          Added max-[899px]:!hidden to force it to hide on mobile, 
          overriding any global CSS conflicts.
        */}
        <img
          src="/images/face-authentication-flow-visual.png"
          alt=""
          aria-hidden="true"
          draggable="false"
          className="ml-auto max-[899px]:!hidden hidden h-auto w-full min-[900px]:block min-[900px]:w-[92%]"
        />

        {/* Left-side content */}
        <div
          className="
            relative z-10 mx-auto w-[88%]
            pb-8 pt-10
            sm:pb-12 sm:pt-14
            min-[900px]:absolute min-[900px]:inset-x-0
            min-[900px]:top-0 min-[900px]:mx-auto
            min-[900px]:w-[80%]
            min-[900px]:-translate-x-2
            min-[900px]:pb-0
            min-[900px]:pt-[clamp(48px,6.8vw,112px)]
          "
        >
          {/* Figma heading image */}
          <h2
            id="face-authentication-flow-heading"
            className="m-0 w-full max-w-[480px] min-[900px]:w-[min(29vw,480px)]"
          >
            <img
              src="/images/face-authentication-flow-heading.png"
              alt="Where Face Authentication Fits in Your Flow"
              draggable="false"
              className="block h-auto w-full"
            />
          </h2>

          {/* 
            MOBILE IMAGE 
            This is now the only image that will show on mobile, 
            placed directly below the heading.
          */}
          <div className="overflow-hidden mt-8 min-[900px]:hidden">
            <img
              src="/images/face-authentication-flow-visual.png"
              alt="Face authentication workflow showing an input photo, identity verification status, and a successful face match"
              draggable="false"
              loading="lazy"
              className="ml-[-15%] block h-auto w-[130%] max-w-none"
            />
          </div>

          {/* Description */}
          <p
            className="
              mt-8 max-w-[480px]
              text-[13px] leading-[1.4] text-[#555555]
              sm:mt-9 sm:text-[14px]
              min-[900px]:mt-[35px]
              min-[900px]:w-[min(32vw,480px)]
              min-[900px]:text-[clamp(10px,0.9vw,14px)]
              min-[900px]:leading-[1.25]
            "
          >
            Different industries lean on this differently. A fintech app might
            run face authentication only once, at account opening, then rely on
            it again for high-value transfers. An insurance platform might use
            it during claims to confirm the claimant matches the policyholder
            on file. Gig and staffing platforms often re-check identity at each
            shift or login to prevent account sharing.
          </p>

          {/* Reuse existing Know More styling */}
          <a
            href="#face-authentication-apis"
            className="solutions-know-more mt-6 inline-flex min-[900px]:mt-[30px]"
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
    </section>
  );
}
function FaceAuthenticationOnboardingCtaSection() {
  return (
    <section className="w-full bg-white px-4 pt-3 pb-5 sm:px-0 sm:pt-5 sm:pb-6">
      {/* Centered card with equal space on both sides */}
      <div
        className="
          relative isolate mx-auto
          min-h-[370px] w-full max-w-[1520px]
          overflow-hidden rounded-[12px]
          bg-[linear-gradient(105deg,#6545ff_0%,#8b70ff_48%,#6847ff_100%)]
          sm:min-h-[340px] sm:w-[80%]
          min-[1100px]:aspect-[1520/360]
          min-[1100px]:min-h-0
          min-[1100px]:w-[72%]
        "
      >
        {/* Figma illustration: desktop only */}
<div
  aria-hidden="true"
  className="
    pointer-events-none absolute inset-0 z-0c:\Users\ABC\Downloads\vehicle-verification-hero-heading.png
    hidden!
    min-[1100px]:block!
  "
>
  <img
    src="/images/face-authentication-onboarding-cta-visual.png"
    alt=""
    draggable="false"
    className="block h-full w-full object-fill"
  />
</div>

        {/* Text content */}
        <div
          className="
            relative z-10 flex min-h-[390px]
            w-full flex-col items-start justify-center
            px-6 py-8
            sm:min-h-[360px] sm:px-8
            min-[768px]:w-full
            min-[768px]:px-8
            min-[1100px]:w-[66%]
            min-[1100px]:h-full
            min-[1100px]:min-h-0
            min-[1100px]:px-[4.2%]
            min-[1100px]:py-6
          "
        >
          {/* Extracted Figma heading */}
          <h2 className="m-0 w-full max-w-[733px]">
            <img
              src="/images/face-authentication-onboarding-cta-heading.png"
              alt="Bring Face Authentication Into Your Onboarding Flow"
              draggable="false"
              className="block h-auto w-full"
            />
          </h2>

          {/* Description */}
          <p
            className="
              mt-4 max-w-[780px]
              text-[14px] leading-[1.4] text-white
              sm:text-[16px]
              min-[1100px]:mt-5
              min-[1100px]:text-[clamp(14px,1.05vw,20px)]
              min-[1100px]:leading-[1.2]
            "
          >
            Identity fraud doesn't announce itself; it looks like a normal
            signup until it isn't. Face authentication gives your onboarding
            flow a way to catch that difference in real time, without adding
            friction for genuine users.
          </p>

          {/* Reuse existing Book a Demo button */}
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
    </section>
  );
}
function FaceAuthenticationFaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is a verification API, and why does my business need it?",
      answer:
        "A verification API lets your application validate identity details and documents automatically. It helps reduce manual checks, speed up onboarding, and apply consistent verification steps across your user journey.",
    },
    {
      question: "How fast are SmartVerify's APIs?",
      answer:
        "Many API verification checks return results within seconds. Actual response times depend on the API, the data source, network conditions, and the checks required.",
    },
    {
      question: "Which documents and IDs can SmartVerify check?",
      answer:
        "Supported workflows cover documents and identity checks such as PAN, Aadhaar-related verification where permitted, passports, voter IDs, and driving licences. Available checks depend on the specific API.",
    },
    {
      question:
        "Is SmartVerify aligned with Indian regulatory requirements?",
      answer:
        "SmartVerify provides verification workflows for Indian business use cases. The checks your business should use depend on your industry, legal obligations, consent process, and applicable regulations. Confirm requirements for your particular workflow before launch.",
    },
    {
      question: "Can I test the APIs before going live?",
      answer:
        "Yes. You can use the available documentation and sandbox environment to explore integration flows and test your implementation before moving to production.",
    },
    {
      question:
        "How is SmartVerify different from other verification providers?",
      answer:
        "SmartVerify brings multiple verification capabilities together through APIs, helping businesses integrate identity and document checks into their existing onboarding workflows.",
    },
  ];

  return (
    <section
      aria-labelledby="face-authentication-faq-heading"
      className="
        relative w-full overflow-hidden
        bg-[radial-gradient(ellipse_at_52%_50%,rgba(151,129,255,0.95)_0%,rgba(151,129,255,0.38)_32%,rgba(151,129,255,0)_68%),linear-gradient(110deg,#6042ff_0%,#6b4fff_100%)]
      "
    >
      <div
        className="
          mx-auto grid w-[88%] max-w-[1520px]
          grid-cols-1 gap-8 py-10
          sm:gap-10 sm:py-14
          min-[1100px]:min-h-[715px]
          min-[1100px]:w-[80%]
          min-[1100px]:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)]
          min-[1100px]:items-start
          min-[1100px]:gap-x-[9.7vw]
          min-[1100px]:py-[109px]
        "
      >
        {/* Left: FAQ heading */}
        <div className="min-w-0">
          <h2
            id="face-authentication-faq-heading"
            className="
              m-0 max-w-[480px]
              text-[36px] font-semibold leading-[1.15]
              tracking-[-0.035em] text-white
              sm:text-[44px]
              min-[1100px]:text-[clamp(40px,2.8vw,54px)]
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
            const answerId = `face-authentication-faq-answer-${index}`;

            return (
              <div
                key={faq.question}
                className="
                  min-w-0 rounded-[4px]
                  border border-white/80
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
                    min-[1100px]:min-h-[74px]
                    min-[1100px]:px-[27px]
                    min-[1100px]:py-5
                    min-[1100px]:text-[20px]
                  "
                >
                  <span className="min-w-0 flex-1">
                    {faq.question}
                  </span>

                  {/* Figma-style dropdown arrow */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 14 10"
                    className={`
                      h-[10px] w-[14px] shrink-0
                      transition-transform duration-200
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  >
                    <path
                      d="M0 0h14L7 10z"
                      fill="white"
                    />
                  </svg>
                </button>

                {/* Expandable answer */}
                {isOpen && (
                  <div
                    id={answerId}
                    className="
                      border-t border-white/30
                      px-4 pb-5 pt-4
                      text-[14px] leading-[1.65]
                      text-white/90
                      sm:px-5
                      min-[1100px]:px-[27px]
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
function VehicleVerificationHero() {
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
              className="mt-16 block h-auto w-full"
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
              className="w-full max-w-[195px] shrink-0 sm:w-[261px]"
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

          {/* Four problem cards */}
          <div
            className="
              mt-9 flex flex-col items-center gap-7
              sm:mt-12 sm:gap-8
              min-[1100px]:mt-[110px]
              min-[1100px]:gap-[34px]
            "
          >
            {vehicleVerificationProblems.map((problem, index) => (
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
                {/* Desktop-only composite image */}
<div className="hidden! min-[768px]:block!">
  <img
    src={problem.desktopImage}
    alt={`${problem.tag}: ${problem.title}`}
    draggable="false"
    loading="lazy"
    className="mx-auto block h-auto w-full max-w-[1017px]"
  />
</div>
                {/* Mobile: separate image and readable text */}
                <article
                  className="
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
                            className="mt-[1px] h-4 w-4 shrink-0 text-[#00B86B]"
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
            ))}
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
              min-[1100px]:top-[28px]
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
                  bg-[#E8E7FF] px-4 py-4
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
      question: "What is a verification API, and why does my business need it?",
      answer:
        "A verification API lets your business retrieve and validate vehicle-related information automatically. It can help reduce manual checks, speed up onboarding, and support safer vehicle transactions.",
    },
    {
      question: "How fast are SmartVerify's APIs?",
      answer:
        "API response times depend on the endpoint, data source, and network conditions. Automated verification helps businesses retrieve results without relying entirely on manual checks.",
    },
    {
      question: "Which documents and IDs can SmartVerify check?",
      answer:
        "Vehicle verification workflows can cover registration details, registered ownership, challan history, and hypothecation information, depending on the API used.",
    },
    {
      question: "Is SmartVerify aligned with Indian regulatory requirements?",
      answer:
        "Your verification workflow should follow applicable Indian laws, data-access permissions, and consent requirements. Confirm the requirements for your specific use case before going live.",
    },
    {
      question: "Can I test the APIs before going live?",
      answer:
        "Review the API documentation and available testing environment before production integration. Confirm sandbox access and endpoint availability with SmartVerify.",
    },
    {
      question:
        "How is SmartVerify different from other verification providers?",
      answer:
        "SmartVerify offers focused vehicle verification APIs for workflows such as RC validation, challan checks, hypothecation checks, and vehicle lookup, allowing businesses to select the checks relevant to their process.",
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
                  onClick={() => setOpenIndex(isOpen ? null : index)}
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
function BusinessVerificationHero() {
  return (
    <section
      id="business-verification-hero"
      aria-labelledby="business-verification-heading"
      className="
        relative isolate w-full overflow-hidden
        bg-[radial-gradient(ellipse_at_0%_100%,rgba(236,48,105,0.22)_0%,rgba(236,48,105,0.08)_30%,transparent_48%),radial-gradient(ellipse_at_100%_55%,rgba(166,119,194,0.2)_0%,rgba(166,119,194,0.08)_36%,transparent_62%),#ffffff]
        min-[1100px]:h-[min(42.2vw,809px)]
        min-[1100px]:min-h-[460px]
        min-[1100px]:bg-white
      "
    >
      {/* Exact Figma pink/lavender background on desktop */}
      
      <img
        src="/images/business-verification-hero-background.png"
        alt=""
        aria-hidden="true"
        draggable="false"
        className="
          pointer-events-none absolute inset-0 z-0
          hidden h-full w-full object-fill
          min-[1100px]:block
        "
      />

     {/* Desktop illustration — forcefully hidden on mobile/tablet */}
<div
  aria-hidden="true"
  className="
    pointer-events-none absolute inset-0 z-0
    hidden!
    min-[1100px]:block!
  "
>
  <img
    src="/images/business-verification-hero-visual.png"
    alt=""
    draggable="false"
    className="
      mt-18 absolute right-[8.5%] top-1/2
      h-auto w-[min(46vw,910px)] max-w-none
      -translate-y-1/2 object-contain
    "
  />
</div>

      {/* Left-side content */}
      <div
        className="
          relative z-10 mx-auto flex w-[88%] max-w-[1520px]
          flex-col items-start
          pb-10 pt-[110px]
          sm:pb-14 sm:pt-[125px]
          min-[1100px]:h-full
          min-[1100px]:w-[80%]
          min-[1100px]:justify-center
          min-[1100px]:pb-0
          min-[1100px]:pt-0
        "
      >
        <div
          className="
            w-full
            min-[1100px]:w-[44vw]
            min-[1100px]:max-w-[820px]
          "
        >
          {/* Figma heading image */}
          <h1
            id="business-verification-heading"
            className="
              m-0 w-full max-w-[647px]
              min-[1100px]:w-[min(34vw,647px)]
            "
          >
            <img
              src="/images/business-verification-hero-heading.png"
              alt="Business Verification APIs for Fast & Safe KYB"
              draggable="false"
              className="block h-auto w-full"
            />
          </h1>

          {/* Description */}
          <p
            className="
              mt-6 max-w-[560px]
              text-[14px] leading-[1.4] text-[#414141]
              sm:mt-7 sm:text-[15px]
              min-[1100px]:mt-[34px]
              min-[1100px]:w-[min(34vw,650px)]
              min-[1100px]:max-w-[650px]
              min-[1100px]:text-[clamp(13px,0.85vw,16px)]
              min-[1100px]:leading-[1.2]
            "
          >
            SmartVerify's Business Verification API enables organizations to
            verify business identities quickly and accurately. Access trusted
            government and regulatory data sources to validate company
            information, confirm registrations, and automate business KYC
            workflows while minimizing manual verification efforts.
          </p>

          {/* Reuse both existing CTA buttons */}
          <div
            className="
              mt-7 flex w-full flex-col items-center gap-3
              sm:flex-row sm:flex-wrap sm:justify-center sm:gap-5
              min-[1100px]:mt-[36px]
              min-[1100px]:w-fit
              min-[1100px]:flex-nowrap
              min-[1100px]:justify-start
              min-[1100px]:gap-[1.8vw]
            "
          >
            <CtaImageButton
              href="#documentation"
              label="View Documentation"
              image="/images/view-documentation.png"
              hoverText="View Documentation"
              variant="docs"
              className="
                w-full max-w-[245px] shrink-0
                sm:w-[250px]
                min-[1100px]:w-[min(15.7vw,300px)]
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
                w-full max-w-[210px] shrink-0
                sm:w-[231px]
                min-[1100px]:w-[min(13.6vw,261px)]
              "
            />
          </div>
        </div>

        {/* Mobile/tablet illustration: appears once, below the buttons */}
        <div className="mt-8 w-full min-[1100px]:hidden">
          <img
            src="/images/business-verification-hero-visual.png"
            alt="Business verification illustration showing company registration, compliance summary, director information, and verification results"
            draggable="false"
            loading="eager"
            className="
              mx-auto block h-auto w-full max-w-[560px]
              object-contain
            "
          />
        </div>
      </div>
    </section>
  );
}
function BusinessVerificationMattersSection() {
  const cards = [
    {
      id: "onboarding",
      image: "/images/business-verification-matters-card-1.png",
      alt: "Onboard vendors and merchants faster. Verification that took a back-office team hours now returns in seconds.",
    },
    {
      id: "shell-companies",
      image: "/images/business-verification-matters-card-2.png",
      alt: "Catch shell or dissolved companies early, before a contract or payout goes through.",
    },
    {
      id: "directors",
      image: "/images/business-verification-matters-card-3.png",
      alt: "Cross-check directors against company records to verify signing authority.",
    },
    {
      id: "compliance",
      image: "/images/business-verification-matters-card-4.png",
      alt: "Meet compliance expectations for lending, marketplaces, insurance, and BFSI onboarding.",
    },
  ];

  return (
    <>
      {/* Thin grey divider between sections */}
      <div
        aria-hidden="true"
        className="h-3 w-full bg-[#F0F0F0]"
      />
      {/* Thin grey divider before the next section */}
      <div
        aria-hidden="true"
        className="h-1 w-full bg-[#F0F0F0]"
      />
      <section
        aria-labelledby="business-verification-matters-heading"
        className="w-full bg-white"
      >
        <div
          className="
            mx-auto w-[88%] max-w-[1520px]
            pb-10 pt-8
            sm:pb-12 sm:pt-10
            min-[1100px]:w-[80%]
            min-[1100px]:pb-[42px]
            min-[1100px]:pt-[46px]
          "
        >
          {/* Heading and introduction */}
          <div
            className="
              grid grid-cols-1 items-start gap-5
              sm:gap-6
              min-[768px]:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]
              min-[768px]:gap-8
            "
          >
            <h2
              id="business-verification-matters-heading"
              className="mt-6 m-0 w-full max-w-[540px]"
            >
              <img
                src="/images/business-verification-matters-heading.png"
                alt="Why Business Verification Matters for Your Business"
                draggable="false"
                className="block h-auto w-full"
              />
            </h2>

            <p
              className="mt-6
                m-0 max-w-[400px]
                text-[16px] leading-[1.3] text-[#555555]
                sm:text-[15px]
                min-[768px]:ml-auto
                min-[1100px]:text-[13px]
              "
            >
              Manual company checks eat time and still let fraud slip through.
              Fake CINs, shell companies, mismatched director records, and
              forged FSSAI or IEC certificates cost businesses money and
              regulatory trouble. A KYB API strips out the guesswork.
            </p>
          </div>

          {/* Four Figma cards */}
          <div
            className="
              mt-7 grid grid-cols-1
              gap-x-[18px] gap-y-6
              min-[540px]:grid-cols-2
              min-[1100px]:mt-[32px]
              min-[1100px]:grid-cols-4
              min-[1100px]:gap-x-[18px]
              min-[1100px]:gap-y-0
            "
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="min-w-0 w-full"
              >
                <div className="mx-auto aspect-[5/7] w-full max-w-[360px] overflow-hidden min-[1100px]:max-w-none">
  <img
    src={card.image}
    alt={card.alt}
    draggable="false"
    loading="lazy"
    className="block h-full w-full object-fill"
  />
</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
const businessVerificationApiCards = [
  {
    id: "company-registration",
    image: "/images/business-verification-api-work-card-1.png",
    alt: "Company Registration and CIN APIs with company verification details",
    maxWidth: 980,
  },
  {
    id: "pan-din-cin",
    image: "/images/business-verification-api-work-card-2.png",
    alt: "PAN, DIN and CIN Verification APIs",
    maxWidth: 1035,
  },
  {
    id: "tan-verification",
    image: "/images/business-verification-api-work-card-3.png",
    alt: "TAN Verification APIs and business details",
    maxWidth: 1140,
  },
  {
    id: "food-trade-licence",
    image: "/images/business-verification-api-work-card-4.png",
    alt: "Food, Trade and Licence Verification APIs",
    maxWidth: 1140,
  },
  {
    id: "udyam-msme",
    image: "/images/business-verification-api-work-card-5.png",
    alt: "Udyam MSME Verification API and business verification details",
    maxWidth: 1140,
  },
];

function BusinessVerificationApisHowItWorksSection() {
  return (
    <>
      {/* Thin grey divider */}
      <div aria-hidden="true" className="h-1 w-full bg-[#F0F0F0]" />

      <section
        aria-labelledby="business-verification-how-it-works-heading"
        className="relative w-full bg-white"
      >
        {/* Heading and description */}
        <header
          className="
            mx-auto grid w-[85%] max-w-[1520px]
            grid-cols-1 gap-5
            pb-8 pt-10
            sm:gap-7 sm:pb-10 sm:pt-12
            min-[1100px]:w-[77%]
            min-[1100px]:grid-cols-2
            min-[1100px]:items-start
            min-[1100px]:gap-x-[11vw]
            min-[1100px]:pb-[70px]
            min-[1100px]:pt-[46px]
          "
        >
          {/* Figma heading image */}
          <h2
            id="business-verification-how-it-works-heading"
            className="m-0 w-full max-w-[490px]"
          >
            <img
              src="/images/business-verification-apis-how-it-works-heading.png"
              alt="How Our Business Verification APIs Work"
              draggable="false"
              className="block h-auto w-full"
            />
          </h2>

          {/* Description from your Figma screenshot */}
          <p
            className="
              m-0 w-full max-w-[500px]
              text-[14px] leading-[1.35] text-[#555555]
              sm:text-[16px]
              min-[1100px]:ml-auto
              min-[1100px]:translate-x-0
              min-[1100px]:pt-[14px]
              min-[1100px]:text-[19px]
              min-[1100px]:leading-[1.25]
            "
          >
            SmartVerify’s KYB toolkit comprises company registration,
            cross-verification of PAN, DIN, CIN, tax identifiers, food
            and trade licenses, and MSME (Udyam) status.
          </p>
        </header>

        {/* Card stacking sequence */}
        <div className="relative w-full">
          {businessVerificationApiCards.map((card, index) => (
            <div
              key={card.id}
              className={`
                relative flex w-full justify-center
                pb-8
                min-[1100px]:h-[100svh]
                min-[1100px]:min-h-[760px]
                min-[1100px]:pb-0
                ${
                  index < businessVerificationApiCards.length - 1
                    ? "min-[1100px]:-mb-[clamp(260px,24.9vw,480px)]"
                    : ""
                }
              `}
            >
              <article
                style={{ zIndex: index + 1 }}
                className="
                  relative h-fit w-[94%] max-w-[1000px]
                  min-[1100px]:sticky
                  min-[1100px]:top-[clamp(70px,12vh,120px)]
                  min-[1100px]:w-[min(52vw,1000px)]
                "
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  draggable="false"
                  loading={index === 0 ? "eager" : "lazy"}
                  className="
                    block h-auto w-full select-none
                  "
                />
              </article>
            </div>
          ))}
        </div>
      </section>

      {/* Thin grey divider before the following section */}
      <div aria-hidden="true" className="h-1 w-full bg-[#F0F0F0]" />
    </>
  );
}
function BusinessVerificationWhoUsesSection() {
  const industries = [
    {
      id: "lenders",
      icon: "lenders",
      title: "NBFCs and lenders",
      description:
        "confirming a borrowing entity and its directors before disbursal",
    },
    {
      id: "marketplaces",
      icon: "marketplaces",
      title: "Marketplaces and aggregators",
      description:
        "Onboarding of sellers and verification of their MSME status for scheme eligibility by marketplaces and aggregators",
    },
    {
      id: "insurance",
      icon: "insurance",
      title: "Insurance companies verifying",
      description:
        "corporate policyholders and their registered details",
    },
    {
      id: "staffing",
      icon: "staffing",
      title: "Staffing and logistics companies",
      description:
        "Pre-contract vetting of vendor and partner companies by staffing and logistics companies",
    },
    {
      id: "fintech",
      icon: "fintech",
      title: "Fintech platforms",
      description:
        "conducting KYB and individual KYC in business account opening",
    },
  ];

  return (
    <>
      <section
        aria-labelledby="business-verification-who-uses-heading"
        className="w-full bg-white"
      >
        {/* Thin grey divider before next section */}
      <div aria-hidden="true" className="h-3 w-full bg-[#F0F0F0]" />
        <div
          className="
            mx-auto w-[88%] max-w-[1520px]
            pb-10 pt-8
            sm:pb-12 sm:pt-10
            min-[1100px]:w-[80%]
            min-[1100px]:pb-[38px]
            min-[1100px]:pt-[38px]
          "
        >
          {/* Heading and description stacked vertically — Figma layout */}
<div className="flex w-full flex-col items-start">
  <h2
    id="business-verification-who-uses-heading"
    className="m-0 w-full max-w-[540px]"
  >
    <img
      src="/images/business-verification-who-uses-heading.png"
      alt="Who Uses Business Verification APIs?"
      draggable="false"
      className="block h-auto w-full"
    />
  </h2>

  <p
    className="
      mt-4 m-0 max-w-[540px]
      text-[13px] leading-[1.3] text-[#171717]
      sm:text-[14px]
      min-[1100px]:mt-[20px]
      min-[1100px]:max-w-[540px]
      min-[1100px]:text-[13px]
      min-[1100px]:leading-[1.3]
    "
  >
    Business Verification APIs work anywhere a company, vendor, or
    MSME needs to be checked before money or contracts change hands:
  </p>
</div>

          {/* Desktop: exact combined cards image + illustration */}
          <div
            className="
              mt-7 hidden
              min-[768px]:grid
              min-[768px]:grid-cols-2
              min-[768px]:items-stretch
              min-[768px]:gap-[22px]
              min-[1100px]:mt-[30px]
              min-[1100px]:gap-[22px]
            "
          >
            {/* Original Figma cards */}
            <div className="min-w-0 overflow-hidden">
              <img
                src="/images/business-verification-who-uses-cards.png"
                alt="Five industries using business verification APIs: NBFCs and lenders, marketplaces and aggregators, insurance companies, staffing and logistics companies, and fintech platforms"
                draggable="false"
                loading="lazy"
                className="block h-auto w-full"
              />
            </div>

            {/* Original Figma illustration */}
            <div className="min-w-0 overflow-hidden">
              <img
                src="/images/business-verification-who-uses-visual.png"
                alt="Business verification illustration showing company records, compliance checks and digital verification"
                draggable="false"
                loading="lazy"
                className="block h-auto w-full"
              />
            </div>
          </div>

          {/* Mobile: individual readable industry cards */}
          <div className="mt-6 flex flex-col gap-3 min-[768px]:hidden">
            {industries.map((industry) => (
              <article
                key={industry.id}
                className="
                  flex min-w-0 items-center gap-4
                  rounded-[9px] border border-[#D8D2FF]
                  bg-[#E8E7FF] px-4 py-4
                "
              >
                <BusinessVerificationAudienceIcon type={industry.icon} />

                <div className="min-w-0 flex-1">
                  <h3
                    className="
                      m-0 text-[15px] font-medium
                      leading-[1.3] text-[#101522]
                    "
                  >
                    {industry.title}
                  </h3>

                  <p className="mt-1.5 text-[12px] leading-[1.4] text-[#62748D]">
                    {industry.description}
                  </p>
                </div>
              </article>
            ))}

            {/* Illustration below the cards on mobile */}
            <img
              src="/images/business-verification-who-uses-visual.png"
              alt="Business verification and compliance illustration"
              draggable="false"
              loading="lazy"
              className="mt-2 block h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>
    </>
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
function BusinessVerificationIntegrationSection() {
  return (
    <>
      {/* Thin grey divider between sections */}
      <div aria-hidden="true" className="h-3 w-full bg-[#F0F0F0]" />

      <section
        aria-labelledby="business-verification-integration-heading"
        className="w-full overflow-hidden bg-white"
      >
        <div
          className="
            mx-auto grid w-[80%] max-w-[1520px]
            grid-cols-1 gap-8
            pb-10 pt-10
            sm:pb-12 sm:pt-12
            min-[1100px]:min-h-[512px]
            min-[1100px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]
            min-[1100px]:items-start
            min-[1100px]:gap-x-[6.8%]
            min-[1100px]:pb-0
            min-[1100px]:pt-[9px]
          "
        >
          {/* Left content */}
          <div
            className="
              flex min-w-0 flex-col items-start
              min-[1100px]:pt-[89px]
            "
          >
            {/* Figma heading image */}
            <h2
              id="business-verification-integration-heading"
              className="
                m-0 w-full max-w-[450px]
                min-[1100px]:w-[390px]
              "
            >
              <img
                src="/images/business-verification-integration-heading.png"
                alt="How our Integration Works"
                draggable="false"
                className="block h-auto w-full"
              />
            </h2>

            {/* Exact description from Figma */}
            <p
              className="
                m-0 mt-6 max-w-[450px]
                text-[13px] leading-[1.23] text-[#383838]
                sm:text-[14px] sm:leading-[1.3]
                min-[1100px]:mt-[26px]
                min-[1100px]:w-full
                min-[1100px]:max-w-[420px]
                min-[1100px]:text-[13px]
                min-[1100px]:leading-[1.23]
              "
            >
              Most businesses don’t run BAV in a silo; it's one of the many
              checks run in addition to PAN verification, Aadhaar-based KYC,
              or GST validation as part of an overall onboarding or payout
              pipeline. A lending platform might combine PAN verification,
              income document OCR, and BAV V2 IMPS Penny Drop into a single
              onboarding flow, so a borrower’s identity and payout account
              are verified before the loan is approved, for example.
            </p>

            {/* Reuse existing Know More styling */}
            <a
              href="#business-verification-integration-details"
              className="
                solutions-know-more mt-7 inline-flex
                min-[1100px]:mt-[48px]
              "
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

          {/* Right illustration */}
          <div
            className="
              w-full min-w-0
              min-[1100px]:pt-0
            "
          >
            <img
              src="/images/business-verification-integration-visual.png"
              alt="Business verification integration illustration showing servers, a security key, a verified document, cloud infrastructure and a security shield"
              draggable="false"
              loading="lazy"
              className="
                mx-auto block h-auto w-full
                max-w-[748px] rounded-[12px]
                object-contain
              "
            />
          </div>
        </div>
      </section>
    </>
  );
}
function BusinessVerificationGetStartedSection() {
  return (
    <>
      <section className="w-full bg-white px-4 pb-8 pt-3 sm:pb-10 sm:pt-4 min-[1100px]:px-0 min-[1100px]:pb-[40px] min-[1100px]:pt-[24px]">
        {/* Thin grey divider */}
      <div aria-hidden="true" className="h-3 w-full bg-[#F0F0F0]" />
        {/* Centred CTA card with equal side gaps */}
        <div
          className="
            relative isolate mx-auto
            w-[94%] max-w-[1520px]
            overflow-hidden rounded-[10px]
            sm:w-[80%]
            sm:mt-8
            min-[1100px]:mt-10
            min-[1100px]:aspect-[1520/340]
            min-[1100px]:min-h-[320px]
            min-[1100px]:w-[71%]
          "
        >
          {/* Original Figma background — desktop only */}
          <img
            src="/images/business-verification-get-started-visual.png"
            alt=""
            aria-hidden="true"
            draggable="false"
            className="
  absolute inset-x-0 top-0
  h-[108%] w-full
  object-fill
"
          />
          {/* Content */}
          <div
            className="
              relative z-10 flex w-full flex-col
              items-start px-5 py-6
              sm:px-7 sm:py-8
              min-[1100px]:absolute
              min-[1100px]:inset-0
              min-[1100px]:px-[4.1%]
              min-[1100px]:pt-[clamp(24px,1.8vw,34px)]
              min-[1100px]:pb-6
            "
          >
            {/* Exact extracted Figma heading */}
            <h2 className="m-0 w-full max-w-[450px] min-[1100px]:w-[min(40vw,590px)] min-[1100px]:max-w-none">
              <img
                src="/images/business-verification-get-started-heading.png"
                alt="Start Verifying Businesses Smarter"
                draggable="false"
                className="block h-auto w-full"
              />
            </h2>

            {/* Description matching the Figma reference */}
            <p
              className="
                m-0 mt-3 max-w-[650px]
                text-[14px] leading-[1.35] text-white
                sm:mt-4 sm:text-[13px]
                min-[1100px]:mt-[10px]
                min-[1100px]:w-[62%]
                min-[1100px]:max-w-[860px]
                min-[1100px]:text-[clamp(15px,1.05vw,20px)]
                min-[1100px]:leading-[1.2]
              "
            >
              Checking a company by hand means chasing documents,
              cross-referencing government portals, and hoping nothing was
              missed. SmartVerify's Business Verification (KYB) APIs replace
              that with a single integration covering CIN, PAN, DIN, TAN,
              FSSAI, IEC Code, and Udyam checks so the team can onboard real
              businesses and flag fake ones before either becomes a problem.
              Explore the full API documentation and sandbox to start testing
              today.
            </p>

            {/* Existing Book a Demo CTA with hover animation */}
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
      </section>
    </>
  );
}
function BusinessVerificationFaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "What's the difference between GST Basic Validation and GST Advanced Validation?",
      answer:
        "GST Basic Validation checks essential GSTIN details, while GST Advanced Validation can provide additional business information where supported by the selected verification service.",
    },
    {
      question: "Can I look up a GSTIN using only a PAN?",
      answer:
        "A PAN can be used to identify associated GST registrations where the relevant verification service supports PAN-based lookup.",
    },
    {
      question: "Which documents and IDs can SmartVerify check?",
      answer:
        "Business verification workflows can include CIN, PAN, DIN, TAN, GSTIN, FSSAI, IEC and Udyam details, depending on the selected verification service.",
    },
    {
      question:
        "Is SmartVerify aligned with Indian regulatory requirements?",
      answer:
        "Verification workflows should follow applicable Indian regulatory requirements, data-access permissions and consent obligations for your specific use case.",
    },
    {
      question: "Can I test the APIs before going live?",
      answer:
        "Check the available documentation and sandbox access to test your integration before moving to production.",
    },
    {
      question:
        "How is SmartVerify different from other verification providers?",
      answer:
        "SmartVerify brings multiple business verification checks into focused workflows, helping teams automate company verification and reduce manual review.",
    },
  ];

  return (
    <>
      <section
        aria-labelledby="business-verification-faq-heading"
        className="
          relative w-full overflow-hidden
          bg-[radial-gradient(ellipse_at_50%_48%,rgba(151,126,255,0.95)_0%,rgba(128,100,255,0.65)_37%,rgba(96,63,255,0)_72%),linear-gradient(110deg,#6042ff_0%,#6042ff_100%)]
        "
      >
        <div
          className="
            mx-auto grid w-[84%] max-w-[1520px]
            grid-cols-1 gap-8
            py-10
            sm:gap-10 sm:py-14 
            min-[900px]:min-h-0
            min-[900px]:w-[76%]
            min-[900px]:grid-cols-[minmax(0,0.72fr)_minmax(0,1.15fr)]
            min-[900px]:items-start
            min-[900px]:gap-x-[6vw]
            min-[900px]:py-[109px]
            min-[1200px]:gap-x-[8.5vw]
          "
        >
          {/* Left: heading */}
          <h2
            id="business-verification-faq-heading"
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
          <div className="flex min-w-0 flex-col gap-2 min-[880px]:gap-[10px]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const answerId = `business-verification-faq-answer-${index}`;

              return (
                <div
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
                      sm:min-h-[66px] sm:py-3 
                      min-[900px]:min-h-[66px]
                      min-[900px]:px-[20px]
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
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
function GstVerificationHero() {
  return (
    <section
      id="gst-verification-hero"
      aria-labelledby="gst-verification-heading"
      className="
        relative isolate w-full overflow-hidden bg-white
        min-[1100px]:h-[min(42.2vw,809px)]
        min-[1100px]:min-h-[600px]
      "
    >
      {/* Original Figma pink and purple background */}
      <img
        src="/images/gst-verification-hero-background.png"
        alt=""
        aria-hidden="true"
        draggable="false"
        className="
          pointer-events-none absolute inset-0 z-0
          h-full w-full object-fill
        "
      />

      {/* Desktop illustration: right side */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-0
          hidden min-[1100px]:block
        "
      >
        <img
          src="/images/gst-verification-hero-visual.png"
          alt=""
          draggable="false"
          className="mt-22
            absolute right-[3.5%] top-1/2
            h-auto w-[min(49vw,960px)] max-w-none
            -translate-y-1/2 object-contain
          "
        />
      </div>

      {/* Main content */}
      <div
        className="
          relative z-10 mx-auto flex w-[88%] max-w-[1520px]
          flex-col items-start
          pb-10 pt-[108px]
          sm:pb-14 sm:pt-[120px]
          min-[1100px]:h-full
          min-[1100px]:w-[80%]
          min-[1100px]:justify-center
          min-[1100px]:pb-0
          min-[1100px]:pt-0
        "
      >
        <div
          className="
            w-full
            min-[1100px]:w-[42vw]
            min-[1100px]:max-w-[810px]
          "
        >
          {/* Exact extracted Figma heading */}
          <h1
            id="gst-verification-heading"
            className="mt-4
              m-0 w-full max-w-[620px]
              min-[1100px]:w-[min(34vw,690px)]
              min-[1100px]:max-w-none
            "
          >
            <img
              src="/images/gst-verification-hero-heading.png"
              alt="GST Verification API for Fast & Accurate Business Verification"
              draggable="false"
              className="block h-auto w-full"
            />
          </h1>

          {/* Description */}
          <p
            className="
              mt-5 max-w-[620px]
              text-[13px] leading-[1.35] text-[#414141]
              sm:mt-6 sm:text-[13px]
              min-[1100px]:mt-[29px]
              min-[1100px]:w-[min(38vw,730px)]
              min-[1100px]:max-w-[710px]
              min-[1100px]:text-[clamp(13px,0.85vw,16px)]
              min-[1100px]:leading-[1.2]
            "
          >
            SmartVerify's GST Verification API helps you instantly verify GSTIN
            details against official records, ensuring you're onboarding
            legitimate businesses, vendors, and partners. Reduce manual checks,
            prevent fraud, and stay compliant with fast, accurate, and real-time
            GST verification.
          </p>

          {/* Reuse existing CTA buttons */}
          <div
            className="
              mt-8 flex w-full flex-col items-center gap-3
              sm:flex-row sm:flex-wrap sm:justify-center sm:gap-5
              min-[1100px]:mt-[40px]
              min-[1100px]:w-fit
              min-[1100px]:flex-nowrap
              min-[1100px]:justify-start
              min-[1100px]:gap-[30px]
            "
          >
            <CtaImageButton
              href="#documentation"
              label="View Documentation"
              image="/images/view-documentation.png"
              hoverText="View Documentation"
              variant="docs"
              className="
                w-full max-w-[245px] shrink-0
                sm:w-[250px]
                min-[1100px]:w-[300px]
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
                w-full max-w-[210px] shrink-0
                sm:w-[250px]
                min-[1100px]:w-[261px]
              "
            />
          </div>
        </div>

        {/* Mobile/tablet illustration — shown only once */}
        <div className="mt-7 w-full min-[1100px]:hidden">
          <img
            src="/images/gst-verification-hero-visual.png"
            alt="GST verification results, filing summary, taxpayer details and verification status displayed beside a business professional"
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
const gstVerificationProblemCards = [
  {
    id: "gstin-verification",
    image: "/images/gst-verification-problem-card-1.png",
    alt: "Verify the GSTIN against official business details. Confirm the legal business name, check GST registration status, and verify the state of operation.",
  },
  {
    id: "business-onboarding",
    image: "/images/gst-verification-problem-card-2.png",
    alt: "Validate businesses before onboarding or lending. Verify business credentials, reduce onboarding risks, and build greater trust with partners.",
  },
  {
    id: "manual-gst-checks",
    image: "/images/gst-verification-problem-card-3.png",
    alt: "Replace manual GST checks with faster digital verification. Reduce manual effort, avoid repetitive data entry, and handle high-volume verification efficiently.",
  },
  {
    id: "automated-gst-check",
    image: "/images/gst-verification-problem-card-4.png",
    alt: "Get accurate GST details in seconds with one automated check. Access current GST information, get structured results, and make faster business decisions.",
  },
];

function GstVerificationProblemsSection() {
  return (
    <>
      {/* Thin grey divider between sections */}
      <div aria-hidden="true" className="h-1 w-full bg-[#F0F0F0]" />

      <section
        aria-labelledby="gst-verification-problems-heading"
        className="relative w-full bg-white"
      >
        {/* Divider before the next GST section */}
      <div aria-hidden="true" className="h-3 w-full bg-[#F0F0F0]" />
        {/* Section heading and description */}
        <header
          className="
            mx-auto w-[88%] max-w-[1520px]
            pb-8 pt-9
            sm:pb-10 sm:pt-11
            min-[1100px]:w-[80%]
            min-[1100px]:pb-0
            min-[1100px]:pt-[44px]
          "
        >
          <h2
            id="gst-verification-problems-heading"
            className="m-0 w-full max-w-[830px]"
          >
            <img
              src="/images/gst-verification-problems-heading.png"
              alt="GST Verification: Verify Businesses Before You Trust Them"
              draggable="false"
              className="block h-auto w-full"
            />
          </h2>

          <p
            className="
  m-0 mt-4 w-full
  text-[14px] leading-[1.4] text-[#333333]
  sm:text-[15px]
  min-[1100px]:mt-[20px]
  min-[1100px]:w-max
  min-[1100px]:max-w-none
  min-[1100px]:whitespace-nowrap
  min-[1100px]:text-[16px]
  min-[1100px]:leading-[1.35]
"
          >
            Manual verification isn't just slow it creates real business
            problems:
          </p>
        </header>

        {/* Card stacking animation */}
        <div
          className="
            relative mx-auto mt-8 w-full
            pb-6
            sm:mt-10
            min-[1100px]:mt-[88px]
            min-[1100px]:pb-0
          "
        >
          {gstVerificationProblemCards.map((card, index) => {
            const isLastCard =
              index === gstVerificationProblemCards.length - 1;

            return (
              <div
                key={card.id}
                className={`
                  relative flex w-full justify-center
                  pb-7
                  min-[1100px]:h-[100svh]
                  min-[1100px]:min-h-[700px]
                  min-[1100px]:pb-0
                  ${
                    !isLastCard
                      ? "min-[1100px]:-mb-[42svh]"
                      : ""
                  }
                `}
              >
                <article
                  style={{ zIndex: index + 1 }}
                  className="
                    relative h-fit w-[94%] max-w-[1000px]
                    min-[1100px]:sticky
                    min-[1100px]:top-[clamp(72px,10vh,100px)]
                    min-[1100px]:w-[min(80vw,1000px)]
                  "
                >
                  <img
                    src={card.image}
                    alt={card.alt}
                    draggable="false"
                    loading={index === 0 ? "eager" : "lazy"}
                    className="
                      block h-auto w-full
                      select-none rounded-[2px]
                    "
                  />
                </article>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
function GstVerificationApisIntegrateSection() {
  return (
    <>
      {/* Thin grey divider */}
      <div aria-hidden="true" className="h-1 w-full bg-[#F0F0F0]" />

      <section
        aria-labelledby="gst-verification-apis-integrate-heading"
        className="w-full overflow-hidden bg-white"
      >
        {/* Thin grey divider before the next section */}
      <div aria-hidden="true" className="h-3 w-full bg-[#F0F0F0]" />
        <div
          className="
            mx-auto w-[88%] max-w-[1520px]
            pb-8 pt-8
            sm:pb-10 sm:pt-10
            min-[1100px]:w-[88%]
            min-[1100px]:translate-x-14
            min-[1100px]:pb-[28px]
            min-[1100px]:pt-[34px]
          "
        >
          {/* Heading and description */}
          <header
            className="
              flex flex-col items-start gap-4
              min-[768px]:flex-row
              min-[768px]:items-start
              min-[768px]:justify-between
              min-[768px]:gap-8
            "
          >
            {/* Figma heading image */}
            <h2
              id="gst-verification-apis-integrate-heading"
              className="
                m-0 w-full max-w-[570px]
                min-[768px]:w-[min(32vw,570px)]
                min-[768px]:shrink-0
              "
            >
              <img
                src="/images/gst-verification-apis-integrate-heading.png"
                alt="Our GST APIs You Can Integrate"
                draggable="false"
                className="block h-auto w-full"
              />
            </h2>

            {/* Description positioned on the right, like Figma */}
            <p
              className="
                m-0 w-full max-w-[450px]
                text-[13px] leading-[1.35] text-[#333333]
                sm:text-[14px]
                min-[768px]:ml-auto
                min-[768px]:w-[min(35vw,450px)]
                min-[768px]:shrink-0
                min-[1100px]:-translate-x-3
                min-[1100px]:pt-[4px]
                min-[1100px]:text-[13px]
                min-[1100px]:leading-[1.3]
              "
            >
              SmartVerify's GST Verification suite contains five APIs, each
              covering one step of the verification flow.
            </p>
          </header>

          {/* Original Figma visual with all four API cards */}
          <div className="mt-5 w-full sm:mt-6 min-[1100px]:mt-[18px]">
            <img
              src="/images/gst-verification-apis-integrate-visual.png"
              alt="GST API integration overview showing GST Search by PAN, GST Basic Validation, GST Advanced Validation, GST to Contact Details, and a verification analytics dashboard"
              draggable="false"
              loading="lazy"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
function GstVerificationWhoUsesSection() {
  const industries = [
    {
      id: "lending",
      icon: "lenders",
      title: "Lending Platforms",
      description:
        "Verify that borrowers have an active, registered business before disbursing funds.",
    },
    {
      id: "marketplaces",
      icon: "fintech",
      title: "B2B Marketplaces",
      description:
        "Validate new sellers and reduce fraudulent or unverified listings.",
    },
    {
      id: "logistics",
      icon: "insurance",
      title: "Logistics Companies",
      description:
        "Check shipper and consignee GST status before extending credit terms.",
    },
    {
      id: "insurance",
      icon: "staffing",
      title: "Insurance Providers",
      description:
        "Verify business policyholders during underwriting.",
    },
    {
      id: "staffing",
      icon: "marketplaces",
      title: "Staffing Platforms",
      description:
        "Confirm client businesses before signing placement contracts.",
    },
  ];

  return (
    <>
      {/* Thin grey divider */}
      <div aria-hidden="true" className="h-1 w-full bg-[#F0F0F0]" />

      <section
        aria-labelledby="gst-verification-who-uses-heading"
        className="w-full overflow-hidden bg-white"
      >
      {/* Thin grey divider before the next section */}
      <div aria-hidden="true" className="h-3 w-full bg-[#F0F0F0]" />
        <div
          className="
            mx-auto w-[88%] max-w-[1520px]
            pb-10 pt-8
            sm:pb-12 sm:pt-10
            min-[1100px]:w-[80%]
            min-[1100px]:pb-[38px]
            min-[1100px]:pt-[28px]
          "
        >
          {/* Figma heading */}
          <h2
            id="gst-verification-who-uses-heading"
            className="
              m-0 w-full max-w-[570px]
              min-[1100px]:w-[min(40vw,570px)]
            "
          >
            <img
              src="/images/gst-verification-who-uses-heading.png"
              alt="Who Uses GST Verification APIs"
              draggable="false"
              className="block h-auto w-full"
            />
          </h2>

          {/* Desktop: original Figma card image and illustration */}
          <div
            className="
              mt-7 hidden
              min-[768px]:grid
              min-[768px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
              min-[768px]:items-start
              min-[768px]:gap-[18px]
              min-[1100px]:mt-[68px]
              min-[1100px]:gap-[18px]
            "
          >
            {/* Five industry cards, preserving the original typography */}
            <img
              src="/images/gst-verification-who-uses-cards.png"
              alt="Lending Platforms: verify registered businesses before disbursing funds. B2B Marketplaces: validate sellers. Logistics Companies: check shipper and consignee GST status. Insurance Providers: verify policyholders. Staffing Platforms: confirm client businesses."
              draggable="false"
              loading="lazy"
              className="mt-6 block h-auto w-full"
            />

            {/* Original verification illustration */}
            <img
              src="/images/business-verification-who-uses-visual.png"
              alt="Digital verification illustration showing documents, security checks and verified business information"
              draggable="false"
              loading="lazy"
              className="mt-2 block h-auto w-full"
            />
          </div>

          {/* Mobile: readable individual cards */}
          <div className="mt-7 flex flex-col gap-3 min-[768px]:hidden">
            {industries.map((industry) => (
              <article
                key={industry.id}
                className="
                  flex min-w-0 items-center gap-4
                  rounded-[9px] border border-[#D8D2FF]
                  bg-[#E8E7FF] px-4 py-4
                "
              >
                {/* Reuse the existing icon helper from the previous section */}
                <BusinessVerificationAudienceIcon
                  type={industry.icon}
                />

                <div className="min-w-0 flex-1">
                  <h3
                    className="
                      m-0 text-[15px] font-medium
                      leading-[1.3] text-[#101522]
                    "
                  >
                    {industry.title}
                  </h3>

                  <p className="mt-1.5 text-[12px] leading-[1.4] text-[#62748D]">
                    {industry.description}
                  </p>
                </div>
              </article>
            ))}

            {/* Illustration below all cards on mobile */}
            <img
              src="/images/business-verification-who-uses-visual.png"
              alt="Business verification illustration"
              draggable="false"
              loading="lazy"
              className="mt-2 block h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

    </>
  );
}
function GstVerificationAutomationBenefitsSection() {
  const cards = [
    {
      id: "pan-gstin",
      image: "/images/gst-verification-automation-card-1.png",
      alt: "Start with PAN or GSTIN. Begin with whichever business information the customer provides during registration. If you only have a PAN, use GST Search by PAN to identify all GSTINs linked to the business.",
    },
    {
      id: "gst-registration",
      image: "/images/gst-verification-automation-card-2.png",
      alt: "Verify the GST Registration. Use GST Basic Validation to confirm that the GSTIN is genuine, active, and matches the business details provided.",
    },
    {
      id: "deeper-checks",
      image: "/images/gst-verification-automation-card-3.png",
      alt: "Perform Deeper Checks When Required. For higher-risk or credit-based onboarding, use GST Advanced Validation for deeper compliance details and GST to Contact Details to verify registered contact information for follow-ups or KYC.",
    },
  ];

  return (
    <>
      {/* Thin grey divider */}
      <div aria-hidden="true" className="h-1 w-full bg-[#F0F0F0]" />

      <section
        aria-labelledby="gst-verification-automation-heading"
        className="w-full overflow-hidden bg-white"
      >
         {/* Thin grey divider before the next section */}
      <div aria-hidden="true" className="h-3 w-full bg-[#F0F0F0]" />
        <div
          className="
            mx-auto w-[90%] max-w-[1560px]
            pb-8 pt-8
            sm:pb-10 sm:pt-10
            min-[1100px]:w-[80%]
            min-[1100px]:pb-[38px]
            min-[1100px]:pt-[36px]
          "
        >
          {/* Heading and description */}
          <header
            className="
              grid grid-cols-1 items-start gap-4
              min-[768px]:grid-cols-[minmax(0,1fr)_minmax(230px,0.65fr)]
              min-[768px]:gap-x-[5%]
            "
          >
            {/* Original Figma heading */}
            <h2
              id="gst-verification-automation-heading"
              className="m-0 w-full max-w-[500px]"
            >
              <img
                src="/images/gst-verification-automation-heading.png"
                alt="What Changes When You Automate These Checks"
                draggable="false"
                className="mt-6 block h-auto w-full"
              />
            </h2>

            {/* Figma description */}
            <p
              className="mt-6
                m-0 w-full max-w-[400px]
                text-[15px] leading-[1.3] text-[#333333]
                sm:text-[14px]
                min-[768px]:ml-auto
                min-[1100px]:max-w-[400px]
                min-[1100px]:pt-[8px]
                min-[1100px]:text-[16px]
                min-[1100px]:leading-[1.3]
              "
            >
              Running vehicle checks through an API instead of manual
              verification changes three things immediately:
            </p>
          </header>

          {/* Three cards in a single row on desktop */}
          <div
            className="
              mt-8 grid grid-cols-1 gap-5
              min-[560px]:grid-cols-2
              min-[900px]:grid-cols-3
              min-[900px]:gap-x-[13px]
              min-[1100px]:mt-[40px]
            "
          >
            {cards.map((card, index) => (
              <article
                key={card.id}
                className="min-w-0 w-full"
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  draggable="false"
                  loading={index === 0 ? "eager" : "lazy"}
                  className="block h-auto w-full"
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
function GstVerificationGetStartedSection() {
  return (
    <>
      <section className="w-full bg-white px-4 pb-8 pt-3 sm:pb-10 min-[1100px]:px-0 min-[1100px]:py-[40px]">
         {/* Thin grey divider after CTA */}
      <div
  aria-hidden="true"
  className="mb-6 h-3 w-full bg-[#F0F0F0] min-[1100px]:mb-8"
/>{/* Centred card: equal gaps on both ends */}
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
    draggable="false"className="
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
              min-[1100px]:absolute
              min-[1100px]:inset-0
              min-[1100px]:px-[4.1%]
              min-[1100px]:pt-[clamp(24px,1.8vw,34px)]
              min-[1100px]:pb-6
            "
          >
            <div className="w-full min-[1100px]:w-[92%]">
            {/* Exact Figma heading image */}
            <h2
              className="
                m-0 w-full max-w-[480px]
                min-[1100px]:max-w-none
                min-[1100px]:w-[52%]
              "
            >
              <img
                src="/images/gst-verification-get-started-heading.png"
                alt="Verify GST Details Instantly with SmartVerify"
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
              Manual GST checks slow down onboarding and leave room for errors.
              SmartVerify replaces repetitive verification tasks with real-time
              GST APIs that deliver accurate business information.
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
function GstVerificationFaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "What's the difference between GST Basic Validation and GST Advanced Validation?",
      answer:
        "GST Basic Validation confirms whether a GSTIN is genuine and active. GST Advanced Validation provides additional business and compliance details where supported by the selected verification service.",
    },
    {
      question: "Can I look up a GSTIN using only a PAN?",
      answer:
        "Yes, PAN-based lookup can help identify GST registrations linked to a PAN when the selected GST Search by PAN service supports this search.",
    },
    {
      question: "Which documents and IDs can SmartVerify check?",
      answer:
        "Depending on the selected service, business verification can include GSTIN, PAN, CIN, DIN, TAN, FSSAI, IEC and Udyam details.",
    },
    {
      question:
        "Is SmartVerify aligned with Indian regulatory requirements?",
      answer:
        "Verification workflows should follow applicable Indian regulatory requirements, consent obligations and data-access rules for your use case.",
    },
    {
      question: "Can I test the APIs before going live?",
      answer:
        "Check the available API documentation and sandbox access to test your integration before moving to production.",
    },
    {
      question:
        "How is SmartVerify different from other verification providers?",
      answer:
        "SmartVerify brings multiple verification checks into focused workflows, helping businesses automate checks and reduce manual effort.",
    },
  ];

  return (
    <>
      <section
        aria-labelledby="gst-verification-faq-heading"
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
            sm:gap-10 sm:py-14
            min-[900px]:min-h-0
            min-[900px]:w-[80%]
            min-[900px]:grid-cols-[minmax(0,0.72fr)_minmax(0,1.15fr)]
            min-[900px]:items-start
            min-[900px]:gap-x-[6vw]
            min-[900px]:pb-[24px]
            min-[900px]:pt-[109px]
            min-[1200px]:gap-x-[6vw]
          "
        >
          {/* Left-side heading */}
          <h2
            id="gst-verification-faq-heading"
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

          {/* Right-side accordion */}
          <div className="flex min-w-0 flex-col gap-3 min-[900px]:gap-[12px]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const answerId = `gst-verification-faq-answer-${index}`;

              return (
                <div
                  key={faq.question}
                  className="
                    min-w-0 rounded-[4px]
                    border border-white/85
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
                      flex min-h-[62px] w-full
                      items-center justify-between gap-4
                      px-4 py-3 text-left
                      text-[15px] font-normal leading-[1.4]
                      text-white transition-colors duration-200
                      hover:bg-white/[0.08]
                      focus-visible:outline-2
                      focus-visible:outline-offset-2
                      focus-visible:outline-white
                      sm:min-h-[66px] sm:px-5
                      sm:text-[17px]
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
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
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
                w-[180px] shrink-0
                sm:w-[210px]
                min-[1100px]:w-[min(18.3vw,261px)]
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
      alt: "Onboarding finishes the same day. A loan agreement, insurance policy, or rental contract gets signed the moment the customer agrees to it, not three days later when the courier arrives.",
    },
    {
      id: "paperless-signing",
      image: "/images/esign-switching-card-2.png",
      alt: "Paper and courier costs disappear. Printing, storing, and shipping physical documents add up fast at scale. Signing digitally cuts that cost to near zero.",
    },
    {
      id: "organised-records",
      image: "/images/esign-switching-card-3.png",
      alt: "Records stay organised. Signed documents are stored and retrieved instantly, instead of sitting in a filing cabinet or a scanned folder somewhere.",
    },
  ];

  return (
    <>
      <section
        aria-labelledby="esign-switching-heading"
        className="relative w-full overflow-hidden bg-white"
      >
          {/* Thin grey separator before the next section */}
      <div aria-hidden="true" className="h-3 w-full bg-[#F0F0F0]" />
        <div
          className="
            relative z-10 mx-auto w-[80%] max-w-[1520px]
            pb-8 pt-10
            sm:pb-10 sm:pt-12
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
            {/* Original extracted Figma heading */}
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

            {/* Description positioned on the right like Figma */}
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

          {/* Three cards in one horizontal row on desktop */}
          <div
            className="
              mt-9 grid grid-cols-1 gap-4
              min-[560px]:grid-cols-2
              min-[768px]:grid-cols-3
              min-[768px]:gap-[12px]
              min-[1100px]:mt-[50px]
            "
          >
            {cards.map((card, index) => (
              <article key={card.id} className="min-w-0 w-full">
                <img
                  src={card.image}
                  alt={card.alt}
                  draggable="false"
                  loading={index === 0 ? "eager" : "lazy"}
                  className="block h-auto w-full"
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
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
            min-[1100px]:pb-[55vh]
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
    <>
 <section className="w-full bg-white px-4 pb-8 pt-3 sm:pb-10 min-[1100px]:px-0 min-[1100px]:py-[40px]">
        {/* Centred card with equal side gaps */}
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
    draggable="false"className="
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
              {/* Exact Figma heading image */}
              <h2 className="m-0 w-full max-w-[480px] min-[900px]:w-[min(43vw,610px)] min-[900px]:max-w-none">
                <img
                  src="/images/number-intelligence-identity-signal-heading.png"
                  alt="Turn Every Mobile Number Into a Trusted Identity Signal"
                  draggable="false"
                  className="block h-auto w-full"
                />
              </h2>

              {/* Description matching the Figma copy */}
              <p
                className="
                  m-0 mt-3 max-w-[520px]
                  text-[13px] leading-[1.35] text-white
                  sm:mt-4 sm:text-[14px]
                  min-[900px]:mt-[10px]
                  min-[900px]:w-[98%]
                  min-[900px]:max-w-[760px]
                  min-[900px]:text-[clamp(12px,0.78vw,15px)]
                  min-[900px]:leading-[1.2]
                "
              >
                A mobile number is one of the cheapest, fastest identity
                signals a business can act on if it's read correctly.
                SmartVerify's Number Intelligence suite turns that single
                field into a fraud check, an address lookup, and a pre-fill
                tool all at once. Test any of the ten APIs above in the
                sandbox environment and see how much manual review can be
                cut from your onboarding flow.
              </p>

              {/* Reuse existing Book a Demo button and hover animation */}
              <CtaImageButton
                href="#contact"
                label="Book a Demo"
                image="/images/book-demo.png"
                hoverText="Book a Demo"
                variant="demo"
                showArrow
                className="mt-4 w-[184px] shrink-0 sm:w-[195px] min-[900px]:mt-[14px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
function UanVerificationFaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "What is UAN verification, and why does it matter for employment checks?",
      answer:
        "UAN verification helps businesses validate employment-related information using the available UAN verification service, subject to applicable access and consent requirements.",
    },
    {
      question:
        "Is there a way to verify income without contacting the applicant’s employer?",
      answer:
        "Available employment and income verification options depend on the service used and the information that can be lawfully accessed. Additional checks may be required to confirm income.",
    },
    {
      question:
        "What is the difference between the UAN Basic and UAN Advanced APIs?",
      answer:
        "The information returned depends on the selected verification service. Refer to the respective API documentation for the exact fields and checks supported by each option.",
    },
    {
      question:
        "How to use the TDS Quarterly API for income verification?",
      answer:
        "Use the TDS Quarterly API according to its documentation to retrieve the supported TDS-related information. Any income assessment should take the available records and applicable consent requirements into account.",
    },
    {
      question:
        "How fast do these verification APIs return results?",
      answer:
        "Response times can vary depending on the verification service and data-source availability. Refer to the API documentation for service-specific response expectations.",
    },
    {
      question:
        "How is SmartVerify different from other verification providers?",
      answer:
        "SmartVerify brings multiple verification options into business workflows, helping teams reduce manual checks and access the information relevant to their verification process.",
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
function EmployeeIncomeVerificationHero() {
  return (
    <section
      id="employee-income-verification-hero"
      aria-labelledby="employee-income-verification-heading"
      className="
        relative isolate w-full overflow-hidden bg-white
        min-[1100px]:h-[min(42.4vw,809px)]
        min-[1100px]:min-h-[640px]
      "
    >
      {/* Reuse the original pink-purple background */}
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

      {/* Desktop illustration: shown only once */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-0
          hidden min-[1100px]:block
        "
      >
        <img
          src="/images/employee-income-verification-visual.png"
          alt=""
          draggable="false"
          className="mt-16
            absolute right-[10%]
            top-[clamp(24px,3.5vw,68px)]
            block h-auto w-[min(42vw,800px)]
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
          sm:pb-12 sm:pt-[110px]
          min-[1100px]:h-full
          min-[1100px]:justify-center
          min-[1100px]:pb-0
          min-[1100px]:pt-0
        "
      >
        <div
          className="
            w-full max-w-[700px]
            min-[1100px]:w-[44vw]
            min-[1100px]:max-w-[820px]
          "
        >
          {/* Exact Figma heading image */}
          <h1
            id="employee-income-verification-heading"
            className="m-0 w-full max-w-[793px]"
          >
            <img
              src="/images/employee-income-verification-heading.png"
              alt="Employee & Income Verification APIs for Faster Hiring"
              draggable="false"
              className="block h-auto w-full"
            />
          </h1>

          {/* Description from the Figma design */}
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
            SmartVerify's Employee &amp; Income Verification APIs replace
            estimation with data pulled directly from UAN records, EPFO
            contribution history, and TDS filings. Businesses get a job
            history and income picture in a short time, and they get it
            without leaning on the candidate or applicant to hand over
            anything more.
          </p>

          {/* Reuse the existing CTA buttons */}
          <div
            className="
              mt-6 flex w-full flex-col
              items-center justify-center gap-3
              sm:flex-row sm:flex-wrap sm:justify-start sm:gap-4
              min-[1100px]:mt-[36px]
              min-[1100px]:w-fit
              min-[1100px]:flex-nowrap
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
                w-[220px] shrink-0
                sm:w-[220px]
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
                w-[200px] shrink-0
                sm:w-[200px]
                min-[1100px]:w-[min(18.3vw,261px)]
              "
            />
          </div>
        </div>

        {/* Mobile illustration: shown once below the buttons */}
        <div className="mt-8 w-full min-[1100px]:hidden">
          <img
            src="/images/employee-income-verification-visual.png"
            alt="Employee verification interface showing bank, payroll, and HMRC checks alongside a man using a laptop"
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
function EmployeeIncomeManualChecksSection() {
  const cards = [
    {
      id: "hr-verification",
      icon: "person",
      title: "Slow HR Verification",
      description:
        "Phone calls and unanswered emails can delay employment checks for days.",
    },
    {
      id: "income-proof",
      icon: "income",
      title: "Easy-to-edit income proof",
      description:
        "Payslips and documents can be manipulated, making fraud harder to detect.",
    },
    {
      id: "loan-disbursal",
      icon: "wallet",
      title: "Delayed loan disbursals",
      description:
        "Verification bottlenecks slow down lending decisions and customer onboarding.",
    },
    {
      id: "lost-candidates",
      icon: "search",
      title: "Lost candidates",
      description:
        "Staffing agencies risk losing candidates to competitors with faster hiring processes.",
    },
    {
      id: "income-verification",
      icon: "document",
      title: "Incomplete income verification",
      description:
        "Payslips and bank statements don't confirm where someone actually works.",
    },
    {
      id: "trusted-records",
      icon: "people",
      title: "Need for trusted records",
      description:
        "Businesses need reliable employment and income data that applicants cannot alter.",
    },
  ];

  return (
    <>
      <section
        aria-labelledby="employee-income-manual-checks-heading"
        className="relative isolate w-full overflow-hidden bg-white"
      >
        {/* Exact Figma background */}
        <img
          src="/images/employee-income-manual-checks-background.png"
          alt=""
          aria-hidden="true"
          draggable="false"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-fill"
        />

        <div className="relative z-10 w-full">
          {/* Heading and description */}
          <header
            className="
              mx-auto w-[80%] max-w-[1520px]
              pt-8 sm:pt-10
              min-[1100px]:pt-[36px]
            "
          >
            <h2
              id="employee-income-manual-checks-heading"
              className="
                m-0 w-full max-w-[754px]
                min-[768px]:w-[min(42vw,754px)]
              "
            >
              <img
                src="/images/employee-income-manual-checks-heading.png"
                alt="Why Manual Employment Checks Slow Everyone Down"
                draggable="false"
                className="block h-auto w-full"
              />
            </h2>

            <p
              className="
                m-0 mt-3 max-w-[800px]
                text-[15px] leading-[1.4] text-[#555555]
                sm:text-[14px]
                min-[1100px]:mt-[14px]
                min-[1100px]:text-[13px]
              "
            >
              Manual verification creates delays, fraud risks, and missed
              opportunities.
            </p>
          </header>

          {/* Desktop: original Figma six-card composition */}
          <div className="mt-5 w-full sm:mt-6 min-[768px]:mt-[28px]">
            <img
              src="/images/employee-income-manual-checks-cards.png"
              alt="Six employment verification challenges: Slow HR Verification, Easy-to-edit income proof, Delayed loan disbursals, Lost candidates, Incomplete income verification, and Need for trusted records."
              draggable="false"
              loading="lazy"
              className="mx-auto hidden! h-auto w-full max-w-[1920px] min-[768px]:block!"
            />
          </div>

          {/* Mobile: readable individual cards */}
          <div
            className="
              mx-auto mt-6 grid w-[80%] max-w-[560px]
              grid-cols-1 gap-0 pb-8
              min-[768px]:hidden
            "
          >
            {cards.map((card, index) => (
              <article
                key={card.id}
                className={`
                  min-w-0 border border-[#BEBEBE] bg-white
                  px-5 py-5
                  ${index > 0 ? "border-t-0" : ""}
                `}
              >
                <EmployeeManualCheckIcon type={card.icon} />

                <h3 className="mb-0 mt-4 text-[17px] font-normal leading-[1.3] text-[#444444]">
                  {card.title}
                </h3>

                <p className="mb-0 mt-3 text-[14px] leading-[1.4] text-[#555555]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* Small purple icons used by the mobile cards */
function EmployeeManualCheckIcon({ type }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className="block h-9 w-9 text-[#5140D8]"
    >
      {type === "person" && (
        <>
          <circle cx="17" cy="11" r="6" fill="currentColor" />
          <path
            d="M5 31c0-7 5-12 12-12s12 5 12 12v2H5z"
            fill="currentColor"
          />
          <circle cx="30" cy="28" r="8" fill="currentColor" />
          <path
            d="m26 28 3 3 5-6"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}

      {type === "income" && (
        <>
          <path
            d="M7 7h19l7 7H14z"
            fill="currentColor"
          />
          <ellipse cx="20" cy="18" rx="11" ry="4" fill="currentColor" />
          <path
            d="M9 18v12c0 3 22 3 22 0V18"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path d="M11 23c5 4 13 4 18 0" stroke="white" strokeWidth="1.5" />
        </>
      )}

      {type === "wallet" && (
        <>
          <path
            d="M5 11 29 5l5 7-25 7z"
            fill="currentColor"
          />
          <rect x="5" y="13" width="30" height="22" rx="3" fill="currentColor" />
          <path d="M25 19h10v9H25a4 4 0 0 1 0-9z" fill="white" />
          <circle cx="28" cy="23.5" r="1.5" fill="currentColor" />
        </>
      )}

      {type === "search" && (
        <>
          <circle cx="15" cy="13" r="7" fill="currentColor" />
          <path
            d="M4 31c0-7 4-11 11-11 4 0 7 2 9 5"
            fill="currentColor"
          />
          <circle cx="25" cy="24" r="8" stroke="currentColor" strokeWidth="3" />
          <path d="m31 30 5 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M29 9h7M29 14h7M29 19h4" stroke="currentColor" strokeWidth="2" />
        </>
      )}

      {type === "document" && (
        <>
          <path d="M8 3h19l7 7v27H8z" fill="currentColor" />
          <path d="M27 3v8h7" stroke="white" strokeWidth="2" />
          <path d="M13 17h15M13 22h15M13 27h10" stroke="white" strokeWidth="2" />
          <circle cx="29" cy="31" r="7" fill="#5140D8" />
          <path d="m26 31 2 2 4-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}

      {type === "people" && (
        <>
          <circle cx="11" cy="10" r="4" fill="currentColor" />
          <circle cx="29" cy="10" r="4" fill="currentColor" />
          <circle cx="20" cy="7" r="4" fill="currentColor" />
          <path
            d="M3 22c0-5 4-8 8-8 3 0 5 1 7 4M37 22c0-5-4-8-8-8-3 0-5 1-7 4"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="m12 25 8 8 8-8M16 22l4 4 4-4"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}
function EmployeeIncomeVerificationHowWorksSection() {
  function EmployeeIncomeWorksIcon({ type }) {
  const icons = {
    records: "/images/employee-income-works-icon-1.png",
    income: "/images/employee-income-works-icon-2.png",
    results: "/images/employee-income-works-icon-3.png",
    testing: "/images/employee-income-works-icon-4.png",
  };

  return (
    <img
      src={icons[type]}
      alt=""
      aria-hidden="true"
      draggable="false"
      className="block h-full w-full object-contain object-left"
    />
  );
}
  const cards = [
  {
    id: "employment-records",
    icon: "records",
    title: "Fetch employment records",
    description:
      "Access UAN/EPFO records to verify employer details, joining and exit dates, and PF contribution history.",
  },
  {
    id: "income-data",
    icon: "income",
    title: "Verify income data",
    description:
      "Use employer-submitted TDS filings to retrieve available quarterly income information.",
  },
  {
    id: "structured-results",
    icon: "results",
    title: "Get structured results",
    description:
      "Receive clean, machine-readable JSON that can plug directly into lending, onboarding, and HR workflows.",
  },
  {
    id: "test-integration",
    icon: "testing",
    title: "Test before going live",
    description:
      "Use sandbox access to test the integration before connecting to live traffic.",
  },
];
  return (
    <>
      <section
        aria-labelledby="employee-income-works-heading"
        className="w-full overflow-hidden bg-white"
      >
      {/* Thin grey separator after the section */}
      <div aria-hidden="true" className="h-3 w-full bg-[#F0F0F0]" />
        <div
          className="
            mx-auto w-[80%] max-w-[1520px]
            pb-8 pt-8
            sm:pb-10 sm:pt-10
            min-[1100px]:pb-[38px]
            min-[1100px]:pt-[14px]
          "
        >
          {/* Heading left, description right */}
          <header
            className="
              grid grid-cols-1 items-start gap-4
              min-[768px]:grid-cols-[minmax(0,1fr)_minmax(0,0.4fr)]
              min-[768px]:gap-x-[5%]
            "
          >
            <h2
              id="employee-income-works-heading"
              className="
                m-0 w-full max-w-[751px]
                min-[768px]:w-[min(43vw,751px)]
              "
            >
              <img
                src="/images/employee-income-works-heading.png"
                alt="How Our Employee & Income Verification Works"
                draggable="false"
                className="block h-auto w-full"
              />
            </h2>

            <p
              className="
                m-0 w-full max-w-[420px]
                text-[12px] leading-[1.35] text-[#555555]
                sm:text-[13px]
                min-[768px]:ml-auto
                min-[1100px]:max-w-[420px]
                min-[1100px]:pt-[2px]
                min-[1100px]:text-[13px]
                min-[1100px]:leading-[1.3]
              "
            >
              Verify employment and income using trusted records with fast,
              integration-ready results.
            </p>
          </header>
{/* Four cards aligned in one row on desktop */}
<div className="employee-income-works-grid">
  {cards.map((card) => (
    <article
      key={card.id}
      className="employee-income-works-card"
    >
      <div className="mb-5 h-10 w-10 text-[#5140D8]">
        <EmployeeIncomeWorksIcon type={card.icon} />
      </div>

      <h3
        className="
          m-0 text-[17px] font-normal
          leading-[1.3] text-[#4B4B4B]
          min-[1100px]:text-[clamp(17px,1.15vw,23px)]
        "
      >
        {card.title}
      </h3>

      <p
        className="
          m-0 mt-4 max-w-[340px]
          text-[14px] leading-[1.35] text-[#5A5A5A]
          min-[1100px]:mt-[18px]
          min-[1100px]:text-[clamp(13px,0.85vw,17px)]
        "
      >
        {card.description}
      </p>
    </article>
  ))}
</div>
        </div>
      </section>
    </>
  );
}
function EmployeeIncomeApiStackSection() {
  const cards = [
    {
      id: "find-uan",
      image: "/images/employee-income-find-uan.png",
      alt: "Mobile to UAN Check dashboard",
    },
    {
      id: "uan-basic",
      image: "/images/employee-income-uan-basic.png",
      alt: "UAN Basic V3 / V4 dashboard",
    },
    {
      id: "uan-advanced",
      image: "/images/employee-income-uan-advanced.png",
      alt: "UAN Advanced V3 / V4 dashboard",
    },
    {
      id: "tds-quarterly",
      image: "/images/employee-income-tds-quarterly.png",
      alt: "TDS Quarterly API dashboard",
    },
    {
      id: "combined-verification",
      image: "/images/employee-income-uan-tds.png",
      alt: "Combined UAN and TDS Verification dashboard",
    },
  ];

  return (
    <section
      aria-labelledby="employee-income-api-stack-heading"
      className="relative w-full overflow-clip bg-white"
    >
      {/* Thin grey separator */}
      <div
        aria-hidden="true"
        className="h-3 w-full bg-[#F0F0F0]"
      />

{/* Heading and description — browser layout */}
<header
  className="
    mx-auto grid w-[80%] max-w-[1520px]
    grid-cols-1 items-start gap-5
    pt-8 sm:pt-10
    min-[768px]:grid-cols-[minmax(0,1fr)_minmax(300px,0.58fr)]
    min-[768px]:gap-x-[5%]
    min-[1100px]:pt-[42px]
  "
>
  <h2
    id="employee-income-api-stack-heading"
  className="
    m-0 w-full max-w-[760px]
    font-normal
    text-[#505050]
    text-[clamp(36px,3.2vw,58px)]
    leading-[1.08]
    tracking-[-0.035em]
  "
  >
    Our APIs Behind Employee &amp;
    <br />
     Income Verification
  </h2>

  <p
    className="
      m-0 max-w-[440px]
      font-normal text-[#555555]
      text-[14px] leading-[1.35]
      sm:text-[16px]
      min-[768px]:ml-auto
      min-[1100px]:pt-[2px]
      min-[1100px]:text-[20px]
      min-[1100px]:leading-[1.25]
    "
  >
    A complete verification flow, from finding the employee record to
    validating income.
  </p>
</header>


      {/* Sticky image-card sequence */}
      <div
        className="
          relative mx-auto mt-6 flex w-full
          flex-col items-center gap-6 pb-6
          sm:mt-8 sm:gap-7
          min-[1100px]:mt-[60px]
          min-[1100px]:gap-8
          min-[1100px]:pb-[15vh]
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
              min-[1100px]:w-[min(78vw,1200px)]
            "
          >
            <img
              src={card.image}
              alt={card.alt}
              draggable="false"
              loading={index === 0 ? "eager" : "lazy"}
              className="
                block h-auto w-full
                select-none object-contain
              "
            />
          </article>
        ))}
      </div>
    </section>
  );
}
function EmployeeIncomeAudienceSection() {
  return (
    <section
      aria-labelledby="employee-income-audience-heading"
      className="w-full border-t-[5px] border-[#F0F0F0] bg-white"
    >
      {/* Thin grey separator */}
      <div
        aria-hidden="true"
        className="h-3 w-full bg-[#F0F0F0]"
      />
      <div
        className="
          mx-auto w-[80%] max-w-[1200px]
          py-8 sm:py-10
          min-[1100px]:py-[42px]
        "
      >
        
{/* Heading and description — Figma layout */}
<header className="max-w-[650px]">
  <h2
    id="employee-income-audience-heading"
    className="
      m-0
      font-normal
      text-[#555555]
      text-[32px]
      leading-[1.15]
      tracking-[-0.035em]
      min-[1100px]:text-[42px]
    "
  >
    Who Actually Uses These APIs
  </h2>

  <p
    className="
      mb-0
      mt-[30px]
      max-w-[680px]
      font-normal
      text-[13px]
      leading-[1.3]
      text-[#333333]
    "
  >
    Business Verification APIs work anywhere a company, vendor, or MSME needs to be
    checked before money or contracts change hands:
  </p>
</header>
        {/* Audience cards and illustration */}
        <div
          className="
            mt-6 grid grid-cols-1 items-stretch gap-5
            sm:mt-7
            min-[768px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
            min-[768px]:gap-[2%]
            min-[1100px]:mt-[24px]
          "
        >
          {/* Exact Figma audience cards */}
          <div className="flex min-w-0 items-center">
            <img
              src="/images/employee-income-who-uses-cards.png"
              alt="Lenders and NBFCs: Verify income and employment before loan approval. Staffing and Recruitment: Confirm candidate employment history faster. Banks and Card Issuers: Validate income beyond applicant-provided payslips. Gig and Logistics Platforms: Verify worker employment during onboarding. Insurance Providers: Validate employment and income for applications and claims."
              draggable="false"
              loading="lazy"
              className="block h-auto w-full select-none"
            />
          </div>

          {/* Figma verification illustration */}
          <div className="flex min-w-0 items-center justify-center">
            <img
              src="/images/gst-verification-who-uses-visual.png"
              alt="3D illustration of a digital verification document with security checks and verification symbols."
              draggable="false"
              loading="lazy"
              className="
                block h-auto w-full
                select-none object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function EmployeeIncomeBenefitsSection() {
  const benefits = [
    {
      id: "faster-onboarding",
      icon: "/images/employee-income-benefit-icon-1.png",
      title: "Faster onboarding",
      description:
        "Results return in seconds, so hiring and loan decisions don't stall on a callback that may never come.",
    },
    {
      id: "fewer-forged-documents",
      icon: "/images/employee-income-benefit-icon-2.png",
      title: "Fewer forged documents",
      description:
        "Data comes from EPFO and tax records, not files an applicant can edit.",
    },
    {
      id: "less-manual-work",
      icon: "/images/employee-income-benefit-icon-3.png",
      title: "Less manual work",
      description:
        "No chasing reference numbers or waiting on another company's HR desk.",
    },
    {
      id: "cleaner-audit-trails",
      icon: "/images/employee-income-benefit-icon-4.png",
      title: "Cleaner audit trails",
      description:
        "structured JSON responses are easy to log and reference if a decision gets questioned later.",
    },
  ];

  return (
    <section
      aria-labelledby="employee-income-benefits-heading"
      className="w-full border-t-[5px] border-[#F0F0F0] bg-white"
    >
      <div aria-hidden="true" className="h-3 w-full bg-[#F0F0F0]" />

      <div
        className="
          mx-auto w-[80%] max-w-[1200px]
          py-8 sm:py-10
          min-[1100px]:py-[48px]
        "
      >
        {/* Figma heading */}
        <header className="max-w-[650px]">
          <h2
            id="employee-income-benefits-heading"
           className="
      m-0
      font-normal
      text-[#555555]
      text-[32px]
      leading-[1.15]
      tracking-[-0.035em]
      min-[1100px]:text-[42px]
    "
          >
            Benefits of Employee &amp;
            <br />
            Income Verification APIs
          </h2>

          <p
            className="
      mb-0
      mt-[30px]
      max-w-[680px]
      font-normal
      text-[15px]
      leading-[1.3]
      text-[#333333]
    "
          >
            Every API in this set returns a straightforward benefit, not just a data field
          </p>
        </header>

        {/* Four cards — guaranteed single row on desktop */}
        <div
          className="
            mt-8 flex w-full flex-col
            min-[1100px]:mt-[42px]
            min-[1100px]:flex-row
            min-[1100px]:items-start
          "
        >
          {benefits.map((benefit, index) => (
            <article
              key={benefit.id}
              className={`
                relative min-w-0
                py-5
                min-[1100px]:w-1/4
                min-[1100px]:flex-none
                min-[1100px]:px-[24px]
                min-[1100px]:py-0
                ${
                  index === 0
                    ? "min-[1100px]:pl-0"
                    : "border-t border-[#D6D6D6] min-[1100px]:border-l min-[1100px]:border-t-0"
                }
              `}
            >
              <img
                src={benefit.icon}
                alt=""
                aria-hidden="true"
                draggable="false"
                className="
                  mb-5 block h-[40px] w-[48px]
                  select-none object-contain object-left
                  min-[1100px]:mb-[20px]
                "
              />

              <h3
                className="
                  m-0 text-[14px] font-normal
                  leading-[1.3] tracking-[-0.02em]
                  text-[#202638]
                "
              >
                {benefit.title}
              </h3>

              <p
                className="
                  mb-0 mt-5 max-w-[230px]
                  text-[11px] font-normal
                  leading-[1.3] text-[#71829E]
                  sm:text-[12px]
                  min-[1100px]:mt-[22px]
                "
              >
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
function EmployeeIncomeVerificationCta() {
  return (
    <section className="w-full bg-white px-4 pb-8 pt-3 sm:pb-10 sm:pt-6 min-[1100px]:px-0 min-[1100px]:pt-[40px] min-[1100px]:pb-[40px]">
      {/* Grey separator */}
      <div
        aria-hidden="true"
        className="h-3 w-full bg-[#F0F0F0]"
      />

      {/* Centered CTA card */}
      <div
        className="
          relative isolate
          mx-auto mt-6
          h-auto min-h-[300px]
          w-full max-w-[1520px]
          overflow-hidden rounded-[10px]
          bg-[linear-gradient(105deg,#6545ff_0%,#8b70ff_48%,#6847ff_100%)]
          sm:mt-8 sm:w-[82%]
          min-[1100px]:mt-[40px]
          min-[1100px]:h-[300px]
          min-[1100px]:min-h-0
          min-[1100px]:w-[73%]
        "
      >
        {/* Background illustration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 hidden! min-[1100px]:block!"
        >
          <img
            src="/images/business-verification-get-started-visual.png"
            alt=""
            draggable="false"
            className="absolute inset-x-0 top-0 h-[108%] w-full object-fill"
          />
        </div>

        {/* Content */}
        <div
          className="
            relative z-10 flex w-full flex-col
            items-start px-5 py-6
            sm:px-7 sm:py-8
            min-[900px]:absolute min-[900px]:inset-0
            min-[900px]:justify-center
            min-[900px]:px-[4.1%]
            min-[900px]:py-5
          "
        >
          <div className="w-full min-[900px]:w-[66%]">
            <h2
              className="
                m-0 max-w-[480px]
                text-[30px] font-semibold
                leading-[1.08] tracking-[-0.04em]
                text-white
                sm:text-[36px]
                min-[900px]:text-[clamp(32px,2.7vw,52px)]
              "
            >
              Get Started with Employee
              <br className="hidden sm:block" />
              {" "}Verification APIs
            </h2>

            <p
              className="
                m-0 mt-3 max-w-[850px]
                text-[13px] font-normal
                leading-[1.35] text-white
                sm:mt-4 sm:text-[14px]
                min-[900px]:mt-[10px]
                min-[900px]:w-full
                min-[900px]:text-[clamp(12px,1.02vw,20px)]
                min-[900px]:leading-[1.2]
              "
            >
              Integration follows the same path as SmartVerify's other
              verification APIs: sign up for API access, generate a key,
              and test each endpoint in the sandbox environment before
              moving to production. Documentation covers request and
              response formats for every API listed above, so a developer
              can have UAN or TDS verification running in a test environment
              within a day.
            </p>

            <CtaImageButton
              href="#contact"
              label="Book a Demo"
              image="/images/book-demo.png"
              hoverText="Book a Demo"
              variant="demo"
              showArrow
              className="mt-4 w-[184px] shrink-0 sm:w-[195px] min-[900px]:mt-[14px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function EmployeeVerificationFaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "What is UAN verification, and why does it matter for employment checks?",
      answer:
        "UAN verification helps businesses validate employment-related information using the available UAN verification service, subject to applicable access and consent requirements.",
    },
    {
      question:
        "Is there a way to verify income without contacting the applicant’s employer?",
      answer:
        "Available employment and income verification options depend on the service used and the information that can be lawfully accessed. Additional checks may be required to confirm income.",
    },
    {
      question:
        "What is the difference between the UAN Basic and UAN Advanced APIs?",
      answer:
        "The information returned depends on the selected verification service. Refer to the respective API documentation for the exact fields and checks supported by each option.",
    },
    {
      question:
        "How to use the TDS Quarterly API for income verification?",
      answer:
        "Use the TDS Quarterly API according to its documentation to retrieve the supported TDS-related information. Any income assessment should take the available records and applicable consent requirements into account.",
    },
    {
      question:
        "How fast do these verification APIs return results?",
      answer:
        "Response times can vary depending on the verification service and data-source availability. Refer to the API documentation for service-specific response expectations.",
    },
    {
      question:
        "How is SmartVerify different from other verification providers?",
      answer:
        "SmartVerify brings multiple verification options into business workflows, helping teams reduce manual checks and access the information relevant to their verification process.",
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
        {/* Left: Heading */}
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

        {/* Right: FAQ Accordion */}
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

                  {/* Dropdown Arrow */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 14 10"
                    className={`
                      h-[10px] w-[14px] shrink-0
                      transition-transform duration-200
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  >
                    <path
                      d="M0 0h14L7 10z"
                      fill="white"
                    />
                  </svg>
                </button>

                {/* Expandable Answer */}
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
            hidden! min-[1100px]:block!
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
            {/* Exact Figma heading */}
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
              Turn Every Mobile Number Into
              <br className="hidden sm:block" />
              {" "}a Trusted Identity Signal
            </h2>

            {/* Exact Figma description */}
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
              A mobile number is one of the cheapest, fastest identity signals
              a business can act on if it's read correctly. SmartVerify's
              Number Intelligence suite turns that single field into a fraud
              check, an address lookup, and a pre-fill tool all at once. Test
              any of the ten APIs above in the sandbox environment and see how
              much manual review can be cut from your onboarding flow.
            </p>

            {/* Reuse existing Book a Demo button */}
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

        {/* Mobile/tablet illustration */}
        <div className="relative z-10 mx-auto w-[92%] pb-5 min-[1100px]:hidden">
          <img
            src="/images/geolocation-get-started-visual.png"
            alt="Security and verification illustration"
            draggable="false"
            loading="lazy"
            className="block h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
function GeolocationAddressFaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
  {
    question:
      "What is UAN verification, and why does it matter for employment checks?",
    answer:
      "UAN verification helps businesses validate employment-related information using the available verification service, subject to applicable access and consent requirements.",
  },
  {
    question:
      "Is there a way to verify income without contacting the applicant’s employer?",
    answer:
      "Available employment and income verification options depend on the service used and the information that can be lawfully accessed.",
  },
  {
    question:
      "What is the difference between the UAN Basic and UAN Advanced APIs?",
    answer:
      "The information returned depends on the selected verification service. Refer to the respective API documentation for the exact fields and checks supported.",
  },
  {
    question:
      "How to use the TDS Quarterly API for income verification?",
    answer:
      "Use the TDS Quarterly API according to its documentation to retrieve supported TDS-related information.",
  },
  {
    question:
      "How fast do these verification APIs return results?",
    answer:
      "Response times can vary depending on the verification service and data-source availability.",
  },
  {
    question:
      "How is SmartVerify different from other verification providers?",
    answer:
      "SmartVerify brings multiple verification options into business workflows, helping teams reduce manual checks.",
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
          mx-auto grid w-[80%] max-w-[1520px]
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

function ContactUsPage() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <section
        className="
          relative isolate w-full overflow-hidden
          bg-[url('/images/contact-us-background.png')]
          bg-cover bg-center bg-no-repeat
          min-h-[315px]
          sm:min-h-[420px]
          lg:min-h-[min(40vw,760px)]
        "
      >
        <div
          className="
            relative mx-auto grid w-full max-w-[1920px]
            grid-cols-1 items-center
            px-5 py-10
            sm:px-8 sm:py-12
            lg:min-h-[inherit]
            lg:grid-cols-[1fr_1fr]
            lg:px-[10.5%] lg:py-8
          "
        >
          {/* LEFT: Heading, description and CTA */}
          <div className="relative z-10 flex min-w-0 flex-col items-start">
            <img
              src="/images/contact-us-heading.png"
              alt="Get in Touch with Our Identity Verification & API Experts"
              draggable="false"
              className="mt-20
                block h-auto w-full max-w-[510px]
                lg:max-w-[min(40vw,740px)]
              "
            />

            <div
              className="
                mt-5 max-w-[520px]
                text-[15px] font-normal leading-[1.35]
                text-[#4A454A]
                sm:mt-6 sm:text-[14px]
                lg:mt-[26px] lg:text-[15px]
              "
            >
              <p>
                Whether you're looking to integrate verification APIs,
                streamline your KYC process, automate customer onboarding,
                or explore enterprise verification solutions, the
                SmartVerify team is here to help.
              </p>

              <p className="mt-6">
                Our specialists can guide you through API integration,
                product selection, pricing, technical implementation,
                and custom verification workflows tailored to your
                business.
              </p>
            </div>

            
<a
  href="mailto:contact@smartverify.in"
  className="
    mt-5 inline-flex items-center justify-center
    rounded-[6px] border border-[#EA3369]
    bg-[#EA3369] px-5 py-2
    text-[11px] font-medium text-white
    transition-all duration-300 ease-in-out
    hover:bg-white hover:text-[#EA3369]
    active:bg-white
    sm:mt-6 sm:px-7 sm:py-3 sm:text-[13px]
  "
>
  Contact Us
</a>
          </div>

{/* Right visual — desk touches the bottom background */}
<div className="relative mt-8 flex min-h-[320px] min-w-0 items-end justify-center sm:min-h-[420px] lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:h-[70%] lg:w-[52%] lg:min-h-0">
  <img
    src="/images/contact-us-visual.png"
    alt="Professional reviewing information on a tablet beside a laptop"
    draggable="false"
    className="absolute bottom-0 right-0 block h-full w-full object-contain object-bottom"
  />
</div>
        </div>
      </section>
    </main>
  );
}

function ContactDetailsSection() {
  return (
    <section className="w-full bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-0 lg:py-[84px]">
      <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-[190px]">

        {/* Left: Contact form */}
        <div className="min-w-0">
          <h2 className="text-[24px] font-bold leading-[1.25] tracking-[-0.035em] text-[#171717] sm:text-[28px]">
            Talk to Our Team
          </h2>

          <p className="mt-4 max-w-[390px] text-[14px] font-normal leading-[1.5] text-[#929292]">
            Have questions about registration, services,
            transactions, commissions, or anything else?
            Send us a message and our team will get back to you.
          </p>

          <form
            className="mt-8 space-y-4"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-first-name" className="mb-2 block text-[12px] font-medium text-[#384152]">
                  First name
                </label>
                <input
                  id="contact-first-name"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  required
                  className="h-[42px] w-full rounded-[6px] border border-[#D9DDE5] bg-white px-3 text-[13px] text-[#252525] outline-none placeholder:text-[#7D8798] focus:border-[#4D3ECA]"
                />
              </div>

              <div>
                <label htmlFor="contact-last-name" className="mb-2 block text-[12px] font-medium text-[#384152]">
                  Last name
                </label>
                <input
                  id="contact-last-name"
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  required
                  className="h-[42px] w-full rounded-[6px] border border-[#D9DDE5] bg-white px-3 text-[13px] text-[#252525] outline-none placeholder:text-[#7D8798] focus:border-[#4D3ECA]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-email" className="mb-2 block text-[12px] font-medium text-[#384152]">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
                className="h-[42px] w-full rounded-[6px] border border-[#D9DDE5] bg-white px-3 text-[13px] text-[#252525] outline-none placeholder:text-[#7D8798] focus:border-[#4D3ECA]"
              />
            </div>

            <div>
              <label htmlFor="contact-phone" className="mb-2 block text-[12px] font-medium text-[#384152]">
                Phone number
              </label>
              <div className="flex h-[42px] w-full items-center overflow-hidden rounded-[6px] border border-[#D9DDE5] bg-white focus-within:border-[#4D3ECA]">
                <select
                  aria-label="Country"
                  name="country"
                  defaultValue="US"
                  className="h-full w-[68px] shrink-0 border-0 bg-transparent pl-3 pr-1 text-[13px] text-[#657084] outline-none"
                >
                  <option value="US">US</option>
                  <option value="IN">IN</option>
                  <option value="GB">GB</option>
                  <option value="AU">AU</option>
                </select>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="h-full min-w-0 flex-1 border-0 bg-transparent px-2 text-[13px] text-[#252525] outline-none placeholder:text-[#7D8798]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-2 block text-[12px] font-medium text-[#384152]">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Leave us a message..."
                required
                className="w-full resize-y rounded-[6px] border border-[#D9DDE5] bg-white px-3 py-3 text-[13px] text-[#252525] outline-none placeholder:text-[#7D8798] focus:border-[#4D3ECA]"
              />
            </div>

            <label className="flex items-start gap-2 text-[12px] leading-[1.4] text-[#7C8799]">
              <input
                type="checkbox"
                name="privacy"
                required
                className="mt-[2px] h-3 w-3 shrink-0 accent-[#4D3ECA]"
              />
              <span>You agree to our friendly privacy policy.</span>
            </label>

            <button
              type="submit"
              className="w-full rounded-[7px] bg-gradient-to-r from-[#29209B] via-[#B20D2B] to-[#F52F68] px-4 py-3 text-[13px] font-medium text-white transition-opacity duration-300 hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact information */}
        <div className="min-w-0">
          <h2 className="max-w-[360px] text-[24px] font-bold leading-[1.25] tracking-[-0.035em] text-[#171717] sm:text-[28px]">
            Connect With Us and Get Started
          </h2>

          <p className="mt-4 max-w-[390px] text-[14px] font-normal leading-[1.5] text-[#929292]">
            From getting started to managing your digital
            services, our team is here to make your journey easier.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8">
            {/* Email */}
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#FFF0EC] text-[#FF624F]">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                  <rect x="3.5" y="5" width="17" height="14" rx="3" stroke="currentColor" strokeWidth="1.7" />
                  <path d="m5.5 7.5 6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[16px] font-semibold text-[#222222]">Email</h3>
              <p className="mt-2 text-[13px] leading-[1.5] text-[#929292]">
                Our friendly team is here to help.
              </p>
              <a href="mailto:hi@agency.com" className="mt-2 inline-block text-[13px] text-[#7650F5] hover:underline">
                hi@agency.com
              </a>
            </div>

            {/* Phone */}
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#F4EFFF] text-[#9864FF]">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                  <path d="M7 3.5h3l1.5 4-2 1.8a15 15 0 0 0 5.2 5.2l1.8-2 4 1.5v3c0 1.1-.9 2-2 2C10.3 19 5 13.7 5 7.5c0-2.2.9-4 2-4Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[16px] font-semibold text-[#222222]">Phone</h3>
              <p className="mt-2 text-[13px] leading-[1.5] text-[#929292]">
                Mon–Fri from 8am to 5pm.
              </p>
              <a href="tel:+15550000000" className="mt-2 inline-block text-[13px] text-[#7650F5] hover:underline">
                +1 (555) 000-0000
              </a>
            </div>

            {/* Office */}
            <div className="sm:col-span-2">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#E8FAF1] text-[#4BD990]">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                  <path d="M20 10.2c0 5-8 10.3-8 10.3S4 15.2 4 10.2a8 8 0 1 1 16 0Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
                </svg>
              </div>
              <h3 className="text-[16px] font-semibold text-[#222222]">Office</h3>
              <p className="mt-2 text-[13px] leading-[1.5] text-[#929292]">
                Come say hello at our office HQ.
              </p>
              <address className="mt-2 text-[13px] not-italic leading-[1.5] text-[#7650F5]">
                100 Smith Street
                <br />
                Collingwood VIC 3066 AU
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutUsPage() {
  return (
    <main className="w-full overflow-hidden">
      <section
        className="
          hero-background relative isolate w-full overflow-hidden
          min-h-[480px]
          sm:min-h-[560px]
          lg:min-h-[min(45vw,780px)]
        "
      >
       
<div
  className="
    relative z-10 mx-auto grid w-full max-w-[1440px]
    grid-cols-1 items-center gap-8
    px-5 pb-10 pt-16
    sm:px-8 sm:py-14
    lg:min-h-[inherit]
    lg:grid-cols-[1.15fr_0.85fr]
    lg:gap-8 lg:px-[7.5%] lg:py-10
  "
>

          {/* Left: Heading, descriptions and buttons */}
          <div className="relative z-10 min-w-0 px-2 sm:px-0">
            <img
              src="/images/about-us-heading.png"
              alt="Empowering Digital Trust Through Safe Identity Verification & KYC Solutions"
              draggable="false"
              className="mt-8
                block h-auto w-full max-w-[500px]
                object-contain object-left sm:w-[320px] lg:w-[600px]
              "
            />

            <div
              className="
                mt-7 max-w-[650px]
                text-[12px] font-normal leading-[1.35]
                text-[#35313B]
                sm:mt-6 sm:text-[13px]
                lg:mt-[28px] lg:text-[13px]
              "
            >
              <p>
                In today&apos;s digital-first economy, businesses need fast
                and reliable ways to verify customers, prevent fraud, and
                meet regulatory compliance requirements. SmartVerify is
                built to simplify these challenges by offering intelligent
                identity verification, digital KYC, document verification,
                and business verification solutions that help organisations
                onboard customers with confidence.
              </p>

              <p className="mt-5">
                Our mission is to make digital verification seamless, safe,
                and scalable for businesses of all sizes. Whether
                you&apos;re launching a new platform or an enterprise
                managing millions of verification requests, SmartVerify
                delivers solutions designed for speed, accuracy, and
                reliability.
              </p>
            </div>

            {/* Reuse the existing CTA buttons */}
             <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:mt-7 sm:flex-row sm:items-center sm:gap-4 lg:mt-6">              <CtaImageButton
                href="#documentation"
                label="View Documentation"
                image="/images/view-documentation.png"
                hoverText="View Documentation"
                variant="docs"
                className="w-full max-w-[300px] sm:w-[240px]"
              />

              <CtaImageButton
                href="#contact"
                label="Book a Demo"
                image="/images/book-demo.png"
                hoverText="Book a Demo"
                variant="demo"
                showArrow
                className="w-full max-w-[261px] sm:w-[220px]"
              />
            </div>
          </div>
{/* Right visual — fit within the hero without clipping */}
<div className="relative mt-8 flex min-w-0 items-end justify-center lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:w-[43%]">
  <img
    src="/images/about-us-visual.png"
    alt="Woman presenting a phone displaying identity verification and KYC solutions"
    draggable="false"
    className="
      block h-auto w-full max-w-[440px] object-contain object-bottom
      sm:max-w-[500px]
      lg:absolute lg:bottom-0 lg:right-30
      lg:h-[76%] lg:w-auto lg:max-w-none
    "
  />
</div>
        </div>
      </section>
    </main>
  );
}

function WeAtSmartVerify() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
            <div aria-hidden="true" className="h-4 w-full bg-[#F0F0F0]" />

      <div
        className="
          mx-auto grid w-full max-w-[1440px]
          grid-cols-1 items-center gap-8
          px-5 py-10
          sm:px-8 sm:py-12
          lg:grid-cols-[1fr_0.95fr]
          lg:gap-12 lg:px-[7.5%] lg:py-10
        "
      >
        {/* Left content */}
        <div className="min-w-0">
          <img
            src="/images/we-at-smartverify-heading.png"
            alt="We at SmartVerify"
            draggable="false"
            className="block h-auto w-full max-w-[300px] object-contain object-left sm:w-[340px] lg:w-[360px]"
          />

          <div className="mt-6 max-w-[480px] space-y-4 text-[13px] font-normal leading-[1.4] text-[#555555] sm:text-[14px]">
            <p>
              SmartVerify provides businesses with a comprehensive suite of
              solutions for identity verification, KYC automation, document
              validation, OCR, fraud prevention, banking verification, and
              business verification.
            </p>

            <p>
              Our platform enables organisations to automate manual
              verification processes, reduce operational costs, improve
              compliance, and create frictionless customer onboarding
              experiences.
            </p>

            <p>
              From fintech and banking to healthcare, HR, insurance,
              education, travel, and e-commerce, SmartVerify supports
              businesses across industries with scalable verification
              infrastructure built for modern digital ecosystems.
            </p>
          </div>
        </div>

        {/* Right visual */}
        <div className="flex min-w-0 items-center justify-center lg:justify-end">
          <img
            src="/images/we-at-smartverify-visual.png"
            alt="Identity verification process showing document submission and selfie verification"
            loading="lazy"
            draggable="false"
            className="
              block h-auto w-full max-w-[627px]
              object-contain
            "
          />
        </div>
      </div>
    </section>
  );
}

function VerificationSolutionsSection() {
  const solutions = [
  {
    title: "Identity Verification",
    description:
      "The business sends the document for electronic signing",
    icon: "/images/verification-identity.png",
  },
  {
    title: "Banking Verification",
    description:
      "The customer verifies their identity using an Aadhaar-linked OTP",
    icon: "/images/verification-banking.png",
  },
  {
    title: "Business Verification",
    description:
      "A cryptographic signature is applied directly to the document",
    icon: "/images/verification-business.png",
  },
  {
    title: "OCR Solutions",
    description:
      "The signed document is time-stamped and recorded for verification",
    icon: "/images/verification-ocr.png",
  },
  {
    title: "Digital KYC",
    description:
      "Unlike a scanned signature, the eSign provides a digitally verifiable signature backed by the Aadhaar authentication process",
    icon: "/images/verification-kyc.png",
  },
  {
    title: "Fraud Prevention",
    description:
      "Unlike a scanned signature, the eSign provides a digitally verifiable signature backed by the Aadhaar authentication process",
    icon: "/images/verification-fraud.png",
  },
];

  function SolutionIcon({ type }) {
    const common = {
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.8,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };

    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className="h-9 w-9 shrink-0 text-[#5141D9]"
        {...common}
      >
        {type === "identity" && (
          <>
            <rect x="7" y="12" width="29" height="22" rx="1" />
            <circle cx="15" cy="20" r="3" />
            <path d="M10 29c1-5 9-5 10 0M23 19h9M23 24h9M23 29h5" />
            <path d="M36 25l6 3v6c0 4-3 7-6 9-3-2-6-5-6-9v-6l6-3Z" />
            <path d="m33 34 2 2 4-5" />
            <path d="M18 8h5M20.5 5v6" />
          </>
        )}
        {type === "banking" && (
          <>
            <path d="M6 15 23 6l17 9H6Z" fill="currentColor" />
            <path d="M9 18h28M11 20v14M19 20v14M28 20v14M36 20v14M7 37h31" />
            <path d="M35 28l6 3v5c0 3-3 5-6 7-3-2-6-4-6-7v-5l6-3Z" fill="white" />
            <path d="m32 35 2 2 4-4" />
          </>
        )}
        {type === "business" && (
          <>
            <circle cx="15" cy="17" r="4" fill="currentColor" />
            <circle cx="29" cy="17" r="4" fill="currentColor" />
            <path d="M7 34c0-7 3-11 8-11s8 4 8 11v2H7v-2ZM23 34c0-7 2-11 7-11s8 4 8 11v2H23" fill="currentColor" />
            <rect x="19" y="4" width="11" height="9" rx="1" fill="currentColor" />
            <path d="m22 8 2 2 3-4" stroke="white" />
          </>
        )}
        {type === "ocr" && (
          <>
            <path d="M8 17v-6h7M33 11h7v6M8 31v6h7M33 37h7v-6" />
            <path d="M13 18h22v5H13zM13 26h22v5H13z" fill="currentColor" />
            <path d="M7 24h34" />
          </>
        )}
        {type === "kyc" && (
          <>
            <rect x="5" y="9" width="36" height="24" rx="1" />
            <rect x="9" y="14" width="10" height="11" />
            <circle cx="14" cy="18" r="2" />
            <path d="M10 24c1-3 7-3 8 0M23 16h13M23 21h13M9 29h25" />
            <circle cx="37" cy="32" r="8" fill="white" />
            <path d="m33 32 3 3 5-6" />
            <path d="M17 38h12M22 33v5" />
          </>
        )}
        {type === "fraud" && (
          <>
            <rect x="5" y="9" width="34" height="23" rx="1" />
            <path d="m12 26 7-12 7 12H12Z" />
            <path d="M19 18v4M19 24v.5" />
            <circle cx="32" cy="25" r="7" fill="white" />
            <circle cx="32" cy="25" r="4" />
            <path d="m37 30 5 6M12 36h20M17 40h12" />
          </>
        )}
      </svg>
    );
  }

  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-[60px]">
      <div aria-hidden="true" className="h-4 w-full bg-[#F0F0F0]" />
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-28">
        {/* Heading and introduction */}
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-start sm:justify-between lg:mb-[48px]">
          <img
            src="/images/our-verification-solutions-heading.png"
            alt="Our Verification Solutions"
            draggable="false"
            className="mt-8 block h-auto w-[260px] max-w-full object-contain object-left sm:w-[300px]"
          />

          <p className="mt-8 max-w-[360px] text-[12px] font-normal leading-[1.4] text-[#555555] sm:text-[13px]">
            SmartVerify provides a broad portfolio of verification and
            compliance solutions designed to support digital onboarding
            and identity validation.
          </p>
        </div>

        {/* Six solution cards */}
        <div className="grid grid-cols-1 border-l border-t border-[#D2D2D2] sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="
                flex min-w-0 flex-col items-start
                border-b border-r border-[#D2D2D2]
                px-5 py-6
                sm:min-h-[190px] sm:px-6 sm:py-6
                lg:min-h-[190px] lg:px-6 lg:py-6
              "
            >
              <img
                src={solution.icon}
                alt=""
                aria-hidden="true"
                draggable="false"
                className="h-9 w-9 shrink-0 object-contain"
               />


              <h3 className="mt-4 text-[16px] font-normal leading-[1.3] text-[#444444] sm:text-[17px]">
                {solution.title}
              </h3>

              <p className="mt-3 text-[12px] font-normal leading-[1.3] text-[#626262] sm:text-[13px]">
                {solution.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSmartVerifySection() {
  const benefits = [
    {
      title: "Comprehensive Verification Solutions",
      description:
        "Access a wide range of verification capabilities to support diverse business and compliance requirements.",
      icon: "/images/why-choose-comprehensive.png",
    },
    {
      title: "Fast & Accurate Results",
      description:
        "Automate verification processes with reliable results that help businesses make decisions more efficiently.",
      icon: "/images/why-choose-accuracy.png",
    },
    {
      title: "Safe & Scalable Infrastructure",
      description:
        "Built to handle growing verification volumes while maintaining strong security and dependable performance.",
      icon: "/images/why-choose-scalable.png",
    },
    {
      title: "Smooth Integration",
      description:
        "Integrate verification services efficiently into your existing workflows and digital platforms with minimal complexity.",
      icon: "/images/why-choose-integration.png",
    },
  ];

  return (
    <section className="w-full bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-0 lg:py-[60px]">
       <div aria-hidden="true" className="h-4 w-full bg-[#F0F0F0]" />
      <div className="mx-auto w-full max-w-[1440px] lg:px-28">
        {/* Section heading and introduction */}
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-start sm:justify-between lg:mb-[26px]">
          <img
            src="/images/why-businesses-choose-heading.png"
            alt="Why Businesses Choose SmartVerify"
            draggable="false"
            className="mt-8 block h-auto w-[300px] max-w-full object-contain object-left sm:w-[340px]"
          />

          <p className="mt-8 max-w-[300px] text-[12px] font-normal leading-[1.35] text-[#555555] sm:text-[13px]">
            Organisations rely on SmartVerify because our platform is
            designed to deliver safe, scalable, and developer-friendly
            verification solutions.
          </p>
        </div>
{/* Purple feature panel */}
<div className="relative mx-auto w-[96%] overflow-hidden bg-[#6545F5]">  <div className="grid grid-cols-1 gap-6 p-5 sm:p-7 lg:min-h-[360px] lg:grid-cols-[1.12fr_0.88fr] lg:gap-4 lg:py-[30px] lg:pl-[30px] lg:pr-0">

    {/* Four benefit cards */}
    <div className="relative z-10 grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-[14px] lg:content-center">
      {benefits.map((benefit) => (
        <article
          key={benefit.title}
          className="flex min-w-0 flex-col items-start bg-white px-4 py-5 sm:min-h-[150px] sm:px-4 sm:py-4 lg:min-h-[126px] lg:px-3 lg:py-3"
        >
          <img
            src={benefit.icon}
            alt=""
            aria-hidden="true"
            draggable="false"
            className="h-8 w-8 shrink-0 object-contain"
          />

          <h3 className="mt-3 text-[14px] font-medium leading-[1.25] text-[#282828] lg:text-[13px]">
            {benefit.title}
          </h3>

          <p className="mt-2 text-[11px] font-normal leading-[1.3] text-[#656565] lg:text-[10px]">
            {benefit.description}
          </p>
        </article>
      ))}
    </div>

    {/* Original extracted visual */}
    <div className="relative min-w-0 lg:min-h-[360px]">
      <img
        src="/images/why-choose-smartverify-visual.png"
        alt="Business professional using SmartVerify document verification"
        draggable="false"
        className="mx-auto block h-auto w-full max-w-[560px] object-contain object-bottom lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:h-full lg:w-[175%] lg:max-w-none lg:object-contain lg:object-right-bottom"
      />
    </div>

  </div>
</div>
          </div>
    </section>
  );
}
function GeolocationIndustriesSection() {
  const industries = [
    {
      title: "FinTech & Banking",
      description:
        "Confirm that a customer’s address matches the KYC documents they submitted and catch discrepancies early.",
      icon: "/images/industry-fintech-banking.png",
    },
    {
      title: "Insurance",
      description:
        "Look at where claims are made and work out how near they are to judge risk or send an assessor.",
      icon: "/images/industry-insurance.png",
    },
    {
      title: "E-commerce & Logistics",
      description:
        "Verify the delivery address at checkout and compute the distance to the nearest fulfilment centre.",
      icon: "/images/industry-ecommerce-logistics.png",
    },
    {
      title: "Real Estate",
      description:
        "Pin real estate listings with precision and view distances to landmarks, schools or transit.",
      icon: "/images/industry-real-estate.png",
    },
    {
      title: "Across Industries",
      description:
        "Verify users early, reduce manual input, and give fraud teams a reliable data trail for better decisions.",
      icon: "/images/industry-across-industries.png",
    },
  ];

  return (
    <section className="w-full bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-0 lg:py-[60px]">
       <div aria-hidden="true" className="h-4 w-full bg-[#F0F0F0]" />
      <div className="mx-auto w-full max-w-[1440px] lg:px-[10.3%]">

        {/* Heading */}
        <img
          src="/images/Industries We Serve.png"
          alt="Industries We Serve"
          draggable="false"
          className="mt-8 mb-6 block h-auto w-[280px] max-w-full object-contain object-left sm:mb-7 sm:w-[340px]"
        />

        {/* Content grid */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-4">
          {/* Industry cards — separate full cards with Figma-style gaps */}
{/* Left side — complete Figma card image */}
<div className="min-w-0 w-full">
  <img
    src="/images/industries-cards.png"
    alt="Industries We Serve: FinTech and Banking, Insurance, E-commerce and Logistics, Real Estate, and Across Industries"
    draggable="false"
    className="block h-auto w-full object-contain object-left"
  />
</div>
          {/* Right-side Figma visual */}
          <div className="relative min-w-0 overflow-hidden rounded-[5px] lg:min-h-[440px]">
            <img
              src="/images/geolocation-industries-visual.png"
              alt="Geolocation verification illustration with a document, security checks and location-related objects"
              draggable="false"
              className="block h-full w-full object-contain object-center lg:absolute lg:inset-0 lg:object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function WhatWeStandForSection() {
  const values = [
    {
      title: "Customer First",
      description:
        "We design solutions around real business challenges to deliver measurable value.",
      icon: "/images/A.png",
    },
    {
      title: "Innovation",
      description:
        "We continuously improve our platform to meet evolving technology and compliance needs.",
      icon: "/images/B.png",
    },
    {
      title: "Security",
      description:
        "We prioritise the protection of customer data through secure infrastructure and best practices.",
      icon: "/images/Layer 2.png",
    },
    {
      title: "Cleaner audit trails",
      description:
        "We strive to provide clear documentation, responsive support, and straightforward communication.",
      icon: "/images/Group 2147233609.png",
    },
  ];
return (
  <section className="w-full bg-white py-10 sm:py-14 lg:py-[60px]">
    <div aria-hidden="true" className="h-4 w-full bg-[#F0F0F0]" />

    {/* Main content container */}
    <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[10.7%]">
      {/* Section heading */}
      <img
        src="/images/What We Stand For.png"
        alt="What We Stand For"
        draggable="false"
        className="mt-8 mb-2 block h-auto w-[280px] max-w-full object-contain object-left sm:w-[360px]"
      />

      <p className="mt-4 text-left text-[13px] font-normal leading-[1.4] text-[#626262]">
        Our values guide how we build, serve, and grow with our customers.
      </p>

      
{/* Four value cards */}
<div className="mt-10 !grid !w-full !grid-cols-1 !justify-items-stretch gap-7 sm:!grid-cols-2 lg:mt-[42px] lg:!grid-cols-4 lg:gap-0">
  {values.map((value, index) => (
    <article
      key={value.title}
      className={`!flex !w-full !min-w-0 !flex-col !items-start !justify-self-stretch !text-left px-0 py-1 lg:px-[18px] ${
        index !== 0 ? "lg:border-l lg:border-[#DDDDDD]" : ""
      }`}
    >
      <img
        src={value.icon}
        alt=""
        aria-hidden="true"
        draggable="false"
        className="mb-[18px] h-[36px] w-[36px] shrink-0 self-start object-contain"
      />

      <h3 className="m-0 w-full text-left text-[14px] font-semibold leading-[1.3] text-[#252525]">
        {value.title}
      </h3>

      <p className="mt-[10px] w-full max-w-[230px] text-left text-[12px] font-normal leading-[1.35] text-[#78869E]">
        {value.description}
      </p>
    </article>
  ))}
</div>

    </div>
  </section>
);

}

function AboutUsGetStartedSection() {
  return (
    <section
      aria-labelledby="about-get-started-heading"
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
          bg-[linear-gradient(105deg,#6545FF_0%,#8D72FF_52%,#6545FF_100%)]
          min-[1100px]:w-[80%]
          min-[1100px]:aspect-[1520/340]
          min-[1100px]:min-h-[0px]
        "
      >
        {/* Supplied Figma background visual */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 hidden! min-[1100px]:block!"
        >      
<img
  src="/images/about-us-get-started-visual.png"
  alt=""
  aria-hidden="true"
  draggable="false"
  className="
    pointer-events-none absolute inset-0 z-0
    hidden min-[1100px]:block
    h-[108%] w-full object-fill
  "
/>

        </div>

        {/* Heading, description and CTA */}
        <div
          className="
            relative z-10 flex w-full flex-col
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
            <h2
              id="about-get-started-heading"
              className="
                m-0 max-w-[750px]
                text-[26px] font-semibold
                leading-[1.08] tracking-[-0.04em]
                text-white
                sm:text-[34px]
                min-[1100px]:text-[clamp(34px,2.8vw,54px)]
              "
            >
              Let's Build Digital Trust Together
            </h2>

            <p
              className="
                m-0 mt-3 max-w-[670px]
                text-[15px] font-normal
                leading-[1.3] text-white
                min-[1100px]:mt-[10px]
                min-[1100px]:text-[clamp(13px,1vw,13px)]
                min-[1100px]:leading-[1.25]
              "
            >
              Whether you're launching a fintech product, scaling a marketplace,
              or streamlining employee verification, SmartVerify provides the
              technology to help you verify identities efficiently and safely.
              <br />
              Our team is committed to helping businesses integrate verification
              solutions that improve operational efficiency, reduce fraud risks,
              and create trusted digital experiences.
            </p>

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
                min-[1100px]:mt-[14px]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function AboutUsFaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

const faqs = [
  {
    question:
      "What is UAN verification, and why does it matter for employment checks?",
    answer:
      "UAN verification helps businesses validate employment-related information using the available verification service, subject to applicable access and consent requirements.",
  },
  {
    question:
      "Is there a way to verify income without contacting the applicant’s employer?",
    answer:
      "Available employment and income verification options depend on the service used and the information that can be lawfully accessed.",
  },
  {
    question:
      "What is the difference between the UAN Basic and UAN Advanced APIs?",
    answer:
      "The information returned depends on the selected verification service. Refer to the respective API documentation for the exact fields and checks supported.",
  },
  {
    question:
      "How to use the TDS Quarterly API for income verification?",
    answer:
      "Use the TDS Quarterly API according to its documentation to retrieve supported TDS-related information.",
  },
  {
    question:
      "How fast do these verification APIs return results?",
    answer:
      "Response times can vary depending on the verification service and data-source availability.",
  },
  {
    question:
      "How is SmartVerify different from other verification providers?",
    answer:
      "SmartVerify brings multiple verification options into business workflows, helping teams reduce manual checks.",
  },
];


  return (
    <section
      aria-labelledby="about-faq-heading"
      className="
        relative w-full overflow-hidden
        bg-[radial-gradient(ellipse_at_50%_45%,#9479ff_0%,#8060ff_43%,#6040ff_100%)]
      "
    >
      <div
        className="
          mx-auto grid w-[90%] max-w-[1520px]
          grid-cols-1 gap-8 py-10
          sm:py-12
          min-[900px]:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)]
          min-[900px]:items-start
          min-[900px]:gap-x-[6vw]
          min-[900px]:pb-[90px]
          min-[900px]:pt-[80px]
          min-[1100px]:w-[80%]
          min-[1100px]:pt-[90px]
        "
      >
        {/* Left: FAQ heading */}
        <h2
          id="about-faq-heading"
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
            const answerId = `about-faq-answer-${index}`;

            return (
              <article
                key={faq.question}
                className="min-w-0 rounded-[4px] border border-white/75"
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


export default function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, "");

  const isDocumentOcrPage =
    currentPath === "/products/document-ocr-api";
  const isBankAccountVerificationPage =
  currentPath === "/products/bank-account-verification";
  const isDigitalKycEkycPage =
  currentPath === "/products/digital-kyc-ekyc";
  const isNumberIntelligencePage =
  currentPath === "/products/number-intelligence-api";
  const isIdentityVerificationPage =
  currentPath === "/products/identity-verification-api";
  const isFaceAuthenticationPage =
  currentPath === "/products/face-authentication-api";
  const isVehicleVerificationPage =
  currentPath === "/products/vehicle-verification-api";
  const isBusinessVerificationPage =
  currentPath === "/products/business-verification-api";
  const isGstVerificationPage =
  currentPath === "/products/gst-verification-api";
  const isEsignPage =
  currentPath === "/products/aadhaar-esign-api";
  const isEmployeeIncomeVerificationPage =
  currentPath === "/products/employee-income-verification";
  const isGeolocationAddressIntelligencePage =
  currentPath === "/products/geolocation-address-intelligence";
  const isContactUsPage = currentPath === "/contact-us";
  const isAboutUsPage = currentPath === "/about-us";
  return (
  <div className="min-h-screen w-full overflow-x-clip bg-white">
    
<Header />

{isAboutUsPage ? (
 <>
  <AboutUsPage />
  <WeAtSmartVerify />
  <VerificationSolutionsSection />
  <WhyChooseSmartVerifySection />
  <GeolocationIndustriesSection />
  <WhatWeStandForSection />
  <AboutUsGetStartedSection />
  <AboutUsFaqSection />
  <FooterSection />
</>
) : isContactUsPage ? (
  <>
    <ContactUsPage />
    <ContactDetailsSection />
    <FooterSection />
  </>
) : isBankAccountVerificationPage ? (
  <BankAccountVerificationPage />
) : isDocumentOcrPage ? (

      <DocumentOcrApiPage />
    ) : isDigitalKycEkycPage ? (
      <main className="w-full">
        <DigitalKycEkycHero />
        <DigitalKycManualProblemSection />

        <div
          aria-hidden="true"
          className="h-6 w-full bg-[#F0F0F0]"
        />

        <DigitalKycHowItWorksSection />
        <DigitalKycApiMethodsSection />
        <DigitalKycAudienceSection />
        <DigitalKycIntroHeroSection />
        <DigitalKycStartWithApisSection />
        <DigitalKycFaqSection />
        <FooterSection />
      </main>
    ) : isNumberIntelligencePage ? (
      <main className="w-full">
        <NumberIntelligenceHero />
        <NumberIntelligenceBenefitsSection />

        <div
          aria-hidden="true"
          className="h-6 w-full bg-[#F0F0F0]"
        />

        <NumberIntelligenceApiExplorer />
        <NumberIntelligenceUseCasesSection />
        <NumberIntelligenceIntegrationSection />
        <NumberIntelligenceIdentitySignalCta />
        <NumberIntelligenceFaqSection />
        <FooterSection />
      </main>
    ) : isIdentityVerificationPage ? (
      <main className="w-full">
        <IdentityVerificationHero />
        <IdentityVerificationApiExplorer />
        <IdentityVerificationIndustriesSection />
        <IdentityVerificationKycFlowSection />
        <IdentityVerificationWhyBusinessesSection />
        <IdentityVerificationSeamlessVerificationSection />
        <IdentityVerificationFaqSection />
        <FooterSection />
      </main>
    ) : isFaceAuthenticationPage ? (
      <main className="w-full">
        <FaceAuthenticationHero />
        <FaceAuthenticationHowItWorksSection />
        <FaceAuthenticationApisSection />
        <FaceAuthenticationWhyBusinessesSection />
        <FaceAuthenticationFlowSection />
        <FaceAuthenticationOnboardingCtaSection />
        <FaceAuthenticationFaqSection />
        <FooterSection />
           </main>
    ) : isVehicleVerificationPage ? (
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
    )  : isBusinessVerificationPage ? (
       <main className="w-full">
       <BusinessVerificationHero />
        <BusinessVerificationMattersSection />
        <BusinessVerificationApisHowItWorksSection />
        <BusinessVerificationWhoUsesSection />
        <BusinessVerificationIntegrationSection />
        <BusinessVerificationGetStartedSection />
        <BusinessVerificationFaqSection />
       <FooterSection />
     </main>
) : isGstVerificationPage ? (
  <main className="w-full">
    <GstVerificationHero />
    <GstVerificationProblemsSection />
    <GstVerificationApisIntegrateSection />
    <GstVerificationWhoUsesSection />
    <GstVerificationAutomationBenefitsSection />
    <GstVerificationGetStartedSection />
    <GstVerificationFaqSection />
    <FooterSection />
  </main>
) : isEsignPage ? (
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
) : isEmployeeIncomeVerificationPage ? (
  <main className="w-full">
    <EmployeeIncomeVerificationHero />
    <EmployeeIncomeManualChecksSection />
    <EmployeeIncomeVerificationHowWorksSection />
    <EmployeeIncomeApiStackSection />
    <EmployeeIncomeAudienceSection />
    <EmployeeIncomeBenefitsSection />
    <EmployeeIncomeVerificationCta />
    <EmployeeVerificationFaqSection />
    <FooterSection />
  </main>
 ) : isGeolocationAddressIntelligencePage ? (
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
    ) : (
      <main>
        
        <Hero />
        <TrustedBusinesses />
        <div className="section-separator" />

        <VerificationSolutions />
        <div className="section-separator" />

        <PlatformNumbers />
        <div className="section-separator" />

        <IndustriesSection />
        <div className="section-separator" />

        <SimplifyingVerification />
        <div className="section-separator" />

        <APIIntegrationSection />
        <div className="section-separator" />

        <GetStartedSection />
        <div className="section-separator" />

        <FAQSection />
        <div className="section-separator" />

        <FooterSection />
      </main>
    )}
  </div>
);
}
