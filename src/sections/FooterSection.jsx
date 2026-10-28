
const footerColumns = [
  {
    title: "Products",
    links: [
      { label: "OCR API PAN", href: "#api-explorer" },
      { label: "Aadhaar OCR API", href: "#api-explorer" },
      { label: "OCR API Check", href: "#api-explorer" },
      { label: "OCR API GST", href: "#api-explorer" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Fintech", href: "#industries" },
      { label: "B2B SaaS", href: "#industries" },
      {
        label: "Banking & Financial Services",
        href: "#industries",
      },
      { label: "Education", href: "#industries" },
      { label: "Insurance", href: "#industries" },
      { label: "Logistics", href: "#industries" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#resources" },
      { label: "FAQs", href: "#faq" },
      { label: "API Documentations", href: "#documentation" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Contact Sales", href: "/contact-us" },
    ],
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    image: "/images/footer-facebook.png",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/",
    image: "/images/footer-twitter.png",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    image: "/images/footer-instagram.png",
  },
];

export default function FooterSection() {
  return (
    <footer className="smartverify-footer">
      <div className="smartverify-footer__inner">
        {/* Main footer content */}
        <div className="smartverify-footer__main">
          {/* Brand and description */}
          <div className="smartverify-footer__brand">
            <a
              href="#top"
              className="smartverify-footer__logo-link"
              aria-label="SmartVerify home"
            >
              <img
                src="/images/smartverify-logo.png"
                alt="SmartVerify"
                className="smartverify-footer__logo"
              />
            </a>

           <p className="mt-4 max-w-[400px] text-[14px] font-normal leading-[1.3] tracking-[-0.01em] text-[#252525]">
  Extra onboarding steps turn your customers away.
  SmartVerify&apos;s APIs instantly check identities,
  documents, and businesses, letting real users pass
  while blocking fraud.
</p>
          </div>

          {/* Navigation columns */}
          {footerColumns.map((column) => (
            <nav
              key={column.title}
              className="smartverify-footer__column"
              aria-label={column.title}
            >
              <h2>{column.title}</h2>

              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom divider and copyright/social row */}
        <div className="smartverify-footer__bottom">
          <p className="text-[14px] font-normal leading-[1.4] text-[#78869E]">
  Copyright ©2026 SmartVerify
</p>

          <nav
            className="smartverify-footer__socials"
            aria-label="Social media"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={social.image}
                  alt=""
                  loading="lazy"
                />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
