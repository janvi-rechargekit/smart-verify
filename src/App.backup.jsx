import { useState } from "react";
import VerificationShowcase from "./sections/VerificationShowcase.jsx";

const navigation = [
  { label: "Products", href: "#products" },
  { label: "Industries", href: "#industries" },
  { label: "Use case", href: "#use-cases" },
  { label: "Resources", href: "#resources" },
];

function Chevron() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-4 w-4 shrink-0"
      fill="none"
    >
      <path
        d="m2.5 5.5 5.5 5 5.5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Shield() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 34"
      className="h-[34px] w-8 shrink-0"
      fill="none"
    >
      <path
        d="M16 2.5 27.2 7v8.4c0 7.1-4.5 12.2-11.2 15.6C9.3 27.6 4.8 22.5 4.8 15.4V7L16 2.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m10.5 16 3.7 3.6 7.4-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="h-8 w-8"
      fill="none"
    >
      <path
        d="M8 24 24 8M9 8h15v15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20 w-full bg-white">
      {/* Announcement bar */}
      <div className="bg-[#EC3069] text-white">
        <div className="mx-auto flex min-h-[55px] max-w-[1440px] flex-wrap items-center justify-center gap-x-[22px] gap-y-2 px-4 py-2 md:flex-nowrap md:py-0">
          <p className="text-center text-[12px] leading-5 sm:text-[15px] lg:text-[18px]">
            10+ years of powering businesses with secure Banking, Payments,
            Travel, and Verification APIs.
          </p>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-white px-[18px] py-[4px] text-[14px] transition-colors hover:bg-white hover:text-[#EC3069] sm:text-[16px] lg:text-[18px]"
          >
            Book A Demo
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b border-[#D3D3D3] bg-white">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-4 px-5 md:h-[90px] md:px-8">
          <a
            href="#top"
            aria-label="SmartVerify home"
            className="shrink-0"
          >
            <img
              src="/images/smartverify-logo.png"
              alt="SmartVerify"
              className="h-auto w-[160px] sm:w-[180px] lg:w-[200px]"
            />
          </a>

          <nav
            aria-label="Main navigation"
            className="ml-auto hidden items-center gap-7 text-[18px] text-[#414141] lg:flex xl:mr-[45px] xl:gap-[42px] xl:text-[20px]"
          >
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-[9px] whitespace-nowrap transition-colors hover:text-[#EC3069]"
              >
                {item.label}
                <Chevron />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden h-[53px] w-[176px] shrink-0 items-center justify-center rounded-[12px] bg-[#EC3069] text-[18px] text-white transition-colors hover:bg-[#d9235b] lg:inline-flex"
          >
            Talk to Sales
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-[#333333] hover:bg-gray-100 lg:hidden"
          >
            {menuOpen ? (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="border-t border-[#E5E5E5] bg-white px-5 pb-5 pt-3 lg:hidden"
          >
            <div className="mx-auto max-w-[1440px]">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-12 items-center justify-between border-b border-[#F0F0F0] text-[16px] text-[#414141]"
                >
                  {item.label}
                  <Chevron />
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 flex h-12 items-center justify-center rounded-[10px] bg-[#EC3069] text-white"
              >
                Talk to Sales
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="hero-background relative isolate min-h-[638px] overflow-hidden"
    >
      {/* Hero content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col items-center px-5 pb-10 pt-12 text-center sm:pt-16 lg:px-8 lg:pb-6 lg:pt-[80px]">
        {/* Trust badge */}
        <div className="inline-flex max-w-full items-center rounded-full border border-[#4D3ECA] p-[6px]">
          <div className="inline-flex min-h-[52px] max-w-full items-center justify-center gap-[9px] rounded-full bg-[#4D3ECA] px-4 text-white sm:px-[18px]">
            <Shield />

            <span className="text-[14px] font-medium sm:text-[16px] lg:text-[20px]">
              Verify in seconds. Trust instantly.
            </span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="mt-10 max-w-[1100px] text-[40px] font-bold leading-[1.1] tracking-[-0.045em] text-[#0B0707] sm:mt-12 sm:text-[54px] md:text-[66px] lg:mt-[58px] lg:text-[78px] xl:text-[84px]">
          100+ Verification APIs for
          <br className="hidden md:block" /> Indian Businesses
        </h1>

        {/* Supporting text */}
        <p className="mt-7 max-w-[810px] text-[15px] leading-[1.35] text-[#383838] sm:mt-8 sm:text-[17px] lg:mt-[38px] lg:text-[20px] lg:leading-[1.3]">
          Extra onboarding steps turn your customers away. SmartVerify APIs
          instantly check identities, documents, and businesses, letting real
          users pass while blocking fraud.
        </p>

        {/* Original Figma CTA PNGs */}
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:mt-12 sm:w-auto sm:flex-row sm:gap-6 lg:mt-[64px]">
          <a
            href="#documentation"
            aria-label="View Documentation"
            className="block w-full max-w-[300px] sm:w-[300px]"
          >
            <img
              src="/images/view-documentation.png"
              alt="View Documentation"
              className="h-auto w-full object-contain"
            />
          </a>

          <a
            href="#contact"
            aria-label="Book a Demo"
            className="block w-full max-w-[261px] sm:w-[261px]"
          >
            <img
              src="/images/book-demo.png"
              alt="Book a Demo"
              className="h-auto w-full object-contain"
            />
          </a>
        </div>
      </div>

      {/* Verification cards, connectors and shield */}
      <VerificationShowcase />
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-clip bg-white">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}