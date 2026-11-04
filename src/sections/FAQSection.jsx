
import { useState } from "react";

const faqItems = [
  {
    question: "What is a verification API, and why does my business need it?",
    answer:
      "A verification API lets your business instantly verify identities, documents, businesses, bank accounts, and other critical information. It helps reduce fraud, automate compliance, speed up onboarding, and improve customer trust.",
  },
  {
    question: "How fast are SmartVerify's APIs?",
    answer:
      "Most verification calls return a result in a few seconds, so you can approve genuine customers in real time instead of making them wait on a manual review queue.",
  },
  {
    question: "Which documents and IDs can SmartVerify check?",
    answer:
      "PAN, Aadhaar, Voter ID, Passport, Driving Licence, GST, CIN, Udyam, and more, covering both individual identity checks and business verification in one platform.",
  },
  {
    question: "Is SmartVerify aligned with Indian regulatory requirements?",
    answer:
      "Yes. Data handling follows applicable regulations (e.g., RBI guidelines, DPDP Act), and every verification call is logged for audit purposes.",
  },
  {
    question: "Can I test the APIs before going live?",
    answer:
      "Yes. Every endpoint is available in a sandbox environment, so your team can test real scenarios before a single request touches production.",
  },
  {
    question: "How is SmartVerify different from other verification providers?",
    answer:
      "Most providers specialise in one category: identity checks, OCR, or business verification, and expect you to stitch together the rest. SmartVerify handles the entire onboarding process within a single platform, spanning from initial sign-up to continuous monitoring.",
  },
];

export default function FAQSection({ faqItems: pageFaqItems }) {
  const [openIndex, setOpenIndex] = useState(null);
  const items = pageFaqItems || faqItems;
  return (
    <section
      className="w-full bg-white pt-6 pb-16 lg:pt-8 lg:pb-10"
      aria-label="SmartVerify frequently asked questions"
    >
      <div className="mx-auto grid w-[80%] max-w-[1512px] grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">

        {/* FAQ Heading */}
        <div>
          <h2 className="text-[clamp(34px,4vw,64px)] font-semibold leading-[1.15] tracking-[-0.045em]">
            <span className="text-[#080808]">
              Frequently
            </span>{" "}
            <span className="text-[#4d3eca]">
              Asked Questions
            </span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="ml-auto flex w-full max-w-[760px] flex-col gap-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={index}
                className="ml-auto w-full max-w-[760px] overflow-hidden rounded-[14px] border border-[#dce1ed] bg-white"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="
                    flex min-h-[90px] w-full
                    items-center justify-between gap-5
                    px-6 py-5 text-left
                    text-[17px] font-medium
                    text-[#111827]
                    transition-colors duration-200
                    hover:bg-[#fafaff]
                    md:px-8 md:text-[20px]
                  "
                >
                  <span>{item.question}</span>

                  {/* Dropdown arrow */}
                  <svg
                    className={`
                      h-5 w-5 shrink-0
                      text-[#9ca3af]
                      transition-transform duration-300
                      ${isOpen ? "rotate-180" : ""}
                    `}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M4 7l6 6 6-6H4z" />
                  </svg>
                </button>

                {/* Expandable answer */}
                {isOpen && (
                  <div
                    id={answerId}
                    className="
                      border-t border-[#edf0f5]
                      px-6 pb-6 pt-4
                      md:px-8
                    "
                  >
                    <p className="text-[15px] leading-[1.7] text-[#626779] md:text-[16px]">
                      {item.answer}
                    </p>
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
