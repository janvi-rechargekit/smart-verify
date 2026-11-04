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
export default IdentityIndustryIcon;