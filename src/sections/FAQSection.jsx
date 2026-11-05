
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

export default function FAQSection({
  faqItems: pageFaqItems,
  theme = "default",
}) {
  const [openIndex, setOpenIndex] = useState(null);
  const items = pageFaqItems || faqItems;
  const isPurple = theme === "purple";

  return (
    <section
      className={`w-full pt-16 pb-16 lg:pt-24 lg:pb-20 ${
        isPurple
          ? "bg-[linear-gradient(105deg,#603DFF_0%,#8971FF_48%,#603DFF_100%)]"
          : "bg-white"
      }`}
      aria-label="Frequently asked questions"
    >
      <div className="mx-auto grid w-[80%] max-w-[1512px] grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">

        {/* FAQ Heading */}
        <div>
          <h2
            className={`text-[clamp(34px,4vw,64px)] font-semibold leading-[1.15] tracking-[-0.045em] ${
              isPurple ? "text-white" : "text-[#080808]"
            }`}
          >
            Frequently
            <br />
            Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="ml-auto flex w-full max-w-[760px] flex-col gap-[18px]">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={index}
                className={`ml-auto w-full max-w-[760px] overflow-hidden rounded-[5px] border ${
                  isPurple
                    ? "border-white/60 bg-transparent"
                    : "rounded-[14px] border-[#dce1ed] bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className={`
                    flex min-h-[72px] w-full
                    items-center justify-between gap-5
                    px-6 py-5 text-left
                    text-[16px] font-medium
                    transition-colors duration-200
                    md:px-7 md:text-[20px]
                    ${
                      isPurple
                        ? "text-white hover:bg-white/10"
                        : "text-[#111827] hover:bg-[#fafaff]"
                    }
                  `}
                >
                  <span>{item.question}</span>

                  {/* Dropdown Arrow */}
                  <svg
                    className={`
                      h-5 w-5 shrink-0
                      transition-transform duration-300
                      ${
                        isPurple
                          ? "text-white"
                          : "text-[#9ca3af]"
                      }
                      ${isOpen ? "rotate-180" : ""}
                    `}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M4 7l6 6 6-6H4z" />
                  </svg>
                </button>

                {/* Expandable Answer */}
                {isOpen && (
                  <div
                    id={answerId}
                    className={`border-t px-6 pb-6 pt-4 md:px-7 ${
                      isPurple
                        ? "border-white/40"
                        : "border-[#edf0f5]"
                    }`}
                  >
                    <p
                      className={`text-[15px] leading-[1.7] md:text-[16px] ${
                        isPurple
                          ? "text-white/90"
                          : "text-[#626779]"
                      }`}
                    >
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
