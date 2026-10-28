import GradientText from "./components/GradientText";
function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 32 34"
      fill="none"
      aria-hidden="true"
      className="h-[34px] w-[32px] shrink-0"
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
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
     className="h-4 w-4 sm:h-[31px] sm:w-[31px]"
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

export default function Hero() {
  return (
    <section
      id="top"
      className="hero-background relative isolate min-h-[638px] overflow-hidden"
    >
      {/* Decorative lines visible near the bottom on desktop */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-[17.2%] hidden h-6 border-l border-dotted border-[#888888] lg:block"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-0 right-[16.8%] hidden h-6 border-l border-dotted border-[#888888] lg:block"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col items-center px-5 pb-10 pt-12 text-center sm:pt-16 lg:px-8 lg:pb-6 lg:pt-[80px]">
        {/* Trust badge */}
        <div className="inline-flex max-w-full items-center rounded-full border border-[#4D3ECA] p-[6px]">
          <div className="inline-flex min-h-[52px] max-w-full items-center justify-center gap-[9px] rounded-full bg-[#4D3ECA] px-4 text-white sm:px-[18px]">
            <img
              src="/images/hero-trust-badge.gif"
              alt=""
              aria-hidden="true"
              className="h-[30px] w-[30px] shrink-0 object-contain"
              draggable="false"
              />

            <span className="text-[14px] font-medium sm:text-[16px] lg:text-[20px]">
              Verify in seconds. Trust instantly.
            </span>
          </div>
        </div>
        {/* Main heading */}
        
<h1
  className="
    mt-10 max-w-[1100px]
    text-[40px] font-bold
    leading-[1.1] tracking-[-0.045em]
    sm:mt-12 sm:text-[54px]
    md:text-[66px]
    lg:mt-[58px] lg:text-[78px]
    xl:text-[84px]
  "
>
  <GradientText className="bg-gradient-to-r from-[#beadff] to-[#ff38bb]">
    100+ Verification APIs for
    <br className="hidden md:block" /> Indian Businesses
  </GradientText>
</h1>


        {/* Description */}
        <p className="mt-7 max-w-[810px] text-[15px] leading-[1.35] text-[#383838] sm:mt-8 sm:text-[17px] lg:mt-[38px] lg:text-[20px] lg:leading-[1.3]">
          Extra onboarding steps turn your customers away. SmartVerify APIs
          instantly check identities, documents, and businesses, letting real
          users pass while blocking fraud.
        </p>

       {/* Responsive Call-to-action buttons */}
<div className="mt-8 flex w-full max-w-[230px] flex-col items-center justify-center gap-3 sm:mt-12 sm:w-auto sm:max-w-none sm:flex-row sm:gap-6 lg:mt-[64px]">

  {/* View Documentation */}
  <a
    href="#documentation"
    className="inline-flex h-11 w-full items-center justify-center rounded-full bg-[#4D3ECA] px-3 text-sm font-medium text-white transition-colors duration-300 ease-in-out hover:bg-[#3D2FB5] active:bg-[#3527A8] focus:bg-[#3D2FB5] sm:h-[66px] sm:w-[300px] sm:px-5 sm:text-[20px] lg:text-[22px]"
  >
    View Documentation
  </a>

  {/* Book a Demo */}
  <a
    href="#contact"
    className="relative inline-flex h-11 w-full items-center justify-center rounded-full bg-[#EA3369] pl-3 pr-[46px] text-sm font-medium text-white transition-colors duration-300 hover:bg-[#d9255a] sm:h-[66px] sm:w-[261px] sm:pl-5 sm:pr-[66px] sm:text-[20px] lg:text-[22px]"
  >
    <span className="whitespace-nowrap">Book a Demo</span>

    <span className="absolute right-1 inline-flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-[#EA3369] sm:h-[58px] sm:w-[58px]">
      <ArrowUpRight />
    </span>
  </a>

</div>
      </div>
    </section>
  );
}