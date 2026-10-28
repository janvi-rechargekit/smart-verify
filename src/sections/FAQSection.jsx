
const faqQuestions = [
  "What is a verification API, and why does my business need it?",
  "How fast are SmartVerify's APIs?",
  "Which documents and IDs can SmartVerify check?",
  "Is SmartVerify aligned with Indian regulatory requirements?",
  "Can I test the APIs before going live?",
  "How is SmartVerify different from other verification providers?",
];

function FAQArrow() {
  return (
    <svg
      className="faq-item__arrow"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 3.5H13L7 11L1 3.5Z"
        fill="#98A1B5"
      />
    </svg>
  );
}

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="faq-section"
      aria-label="Frequently Asked Questions"
    >
      <div className="faq-section__inner">
        {/* Figma-exported heading */}
        <div className="faq-section__heading-wrap">
          <img
            src="/images/faq-heading.png"
            alt="Frequently Asked Questions"
            className="faq-section__heading-image"
            loading="lazy"
          />
        </div>

        {/* Questions shown in the Figma design */}
        <div className="faq-section__list">
          {faqQuestions.map((question) => (
            <div
              className="faq-item"
              key={question}
            >
              <span className="faq-item__question">
                {question}
              </span>

              <FAQArrow />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
