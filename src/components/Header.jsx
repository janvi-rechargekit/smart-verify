import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Products", href: "#products" },
  { label: "Industries", href: "#industries" },
  { label: "Use case", href: "#use-cases" },
  { label: "Resources", href: "#resources" },
];

function ChevronDown() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="h-4 w-4 shrink-0">
      <path d="m2.5 5.5 5.5 5 5.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return open ? (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(100);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const updateHeaderHeight = () => {
      setHeaderHeight(Math.ceil(header.getBoundingClientRect().height));
    };
    updateHeaderHeight();
    const observer = new ResizeObserver(updateHeaderHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div aria-hidden="true" className="w-full shrink-0" style={{ height: `${headerHeight}px` }} />

      <header ref={headerRef} className="fixed inset-x-0 top-0 z-[100] w-full bg-gray-100 border-b-4 border-red-500">
        
        {/* 70% width wrapper on large screens */}
        <div className="mx-auto w-full xl:w-[70%] xl:max-w-[1440px] bg-white shadow-xl">
          
          {/* PINK BAR - SLIM */}
          <div className="hidden md:block bg-[#EC3069] text-white">
            <div className="mx-auto flex h-[32px] w-full flex-wrap items-center justify-center gap-x-[15px] px-4 md:flex-nowrap">
              <p className="text-center text-[11px] leading-tight sm:text-[12px] lg:text-[13px]">
                10+ years of powering businesses with secure Banking, Payments, Travel, and Verification APIs.
              </p>
              <a href="#contact" className="inline-flex shrink-0 items-center justify-center rounded-full border border-white px-[10px] py-[1px] text-[10px] transition-colors hover:bg-white hover:text-[#EC3069] sm:text-[11px]">
                Book A Demo
              </a>
            </div>
          </div>

          {/* WHITE BAR - SLIM */}
          <div className="border-b border-[#D3D3D3] bg-white">
            <div className="mx-auto flex h-[56px] w-full items-center justify-between gap-4 px-4 lg:h-[60px] lg:px-6">
              
              <a href="#top" aria-label="SmartVerify home" className="shrink-0">
                <img src="/images/smartverify-logo.png" alt="SmartVerify" className="h-auto w-[120px] sm:w-[130px] lg:w-[140px]" />
              </a>

              <nav aria-label="Main navigation" className="ml-auto hidden items-center gap-5 text-[14px] text-[#414141] lg:flex xl:mr-[20px] xl:gap-[28px] xl:text-[15px]">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="inline-flex items-center gap-[4px] whitespace-nowrap transition-colors hover:text-[#EC3069]">
                    {item.label}
                    <ChevronDown />
                  </a>
                ))}
              </nav>

              <a href="#contact" className="hidden h-[36px] w-[130px] shrink-0 items-center justify-center rounded-[6px] bg-[#EC3069] text-[13px] text-white transition-colors hover:bg-[#d9235b] lg:inline-flex">
                Talk to Sales
              </a>

              <button type="button" onClick={() => setMobileOpen((open) => !open)} className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[#333333] hover:bg-gray-100 lg:hidden">
                <MenuIcon open={mobileOpen} />
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <nav className="absolute left-0 right-0 top-full border-t border-[#E5E5E5] bg-white px-5 pb-5 pt-3 shadow-lg lg:hidden">
            <div className="mx-auto max-w-[1440px]">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="flex min-h-12 items-center justify-between border-b border-[#F0F0F0] text-[15px] text-[#414141]">
                  {item.label}
                  <ChevronDown />
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-4 flex h-11 items-center justify-center rounded-[8px] bg-[#EC3069] text-[15px] text-white">
                Talk to Sales
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}