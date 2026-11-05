import { useState } from "react";

import GetStartedSection from "../../sections/GetStartedSection.jsx";
import FAQSection from "../../sections/FAQSection.jsx";
import FooterSection from "../../sections/FooterSection.jsx";
import CtaImageButton from "../../components/shared/CtaImageButton.jsx";
const documentOcrFaqs = [
  {
    question: "Which document types can the Document OCR API read?",
    answer:
      "SmartVerify provides dedicated OCR APIs for PAN cards, Aadhaar cards, voter IDs, passports, bank passbooks, cheques, GST certificates, and Certificates of Incorporation, along with a Generic KYC Detection API for mixed document uploads.",
  },
  {
    question: "How reliable is the data extraction?",
    answer:
      "The OCR engine is built to handle real-world uploads such as tilted angles, glare, and low-resolution photos while still returning accurate field-level data. You can try it out with your own sample documents directly in the sandbox before you begin integrating.",
  },
  {
    question: "How long does it take to integrate the API?",
    answer:
      "Integration follows a common REST API pattern, and most development teams have a working test flow up and running within a day or two using the provided documentation and sandbox environment.",
  },
  {
    question: "Is my customers' document data protected during processing?",
    answer:
      "Yes. All document images and extracted data are encrypted and access-controlled throughout the process, so sensitive customer information is protected.",
  },
  {
    question: "Can I try the API before committing?",
    answer:
      "Yes. SmartVerify provides a sandbox environment where you can test any of the OCR APIs against real document samples and see the exact response format before moving to production.",
  },
];

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


            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-center sm:justify-start">
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
                className="w-full max-w-[261px] sm:w-[240px]"
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
<GetStartedSection
  heading="Why Businesses Choose SmartVerify for Document OCR"
  description="SmartVerify's OCR APIs accurately extract data from blurry, tilted, or low-quality uploads in seconds. Developers can quickly test and integrate using clear documentation and a sandbox environment. Once live, the API helps automate document processing, reduce manual errors, and speed up onboarding."
  buttonText="Book a Demo"
/>
<div className="section-separator" aria-hidden="true" />
<FAQSection faqItems={documentOcrFaqs} theme="purple" />
<div className="section-separator" aria-hidden="true" />
<FooterSection />
    </main>
  );
}
const documentOcrUseCases = [
  {
    title: "FinTech and lending",
    description:
      "Get PAN and Aadhaar details while applying for a loan or credit card for faster approvals.",
    image: "/images/document-ocr-fintech-lending.png",
    alt: "PAN and Aadhaar document verification for lending",
    details: [
      ["Status", "Verified"],
      ["Message", "Your load is Approved"],
    ],
  },
  {
    title: "Banking and financial services",
    description:
      "Extract data from passbooks and cheques to open accounts without manual data entry.",
    image: "/images/document-ocr-banking-financial.png",
    alt: "Cheque scanning and extracted banking data",
    details: [
      ["Date", "03-08-26"],
      ["CQ No", "26232452"],
      ["CIN", "389"],
    ],
  },
  {
    title: "Insurance",
    description:
      "Read ID and address documents during policy issuance to cut back on paperwork delays.",
    image: "/images/document-ocr-insurance.png",
    alt: "Identity document verification for insurance",
    details: [
      ["Name", "Rohan Roy"],
      ["DOB", "17/06/1995"],
      ["Gender", "Male"],
      ["Aadhar No", "8786 9888 68"],
    ],
  },
  {
    title: "E-commerce and marketplaces",
    description:
      "Verify the seller's identity and business documents while onboarding new vendors.",
    image: "/images/document-ocr-ecommerce-marketplaces.png",
    alt: "Seller identity and business document verification",
    details: [
      ["Name", "Rohan Roy"],
      ["DOB", "17/06/1995"],
      ["Gender", "Male"],
      ["IFSC code", "8786 9888 68"],
    ],
  },
  {
    title: "Staffing and recruitment",
    description:
      "Verify candidate identities, extract document details, and simplify background checks with automated document processing.",
    image: "/images/document-ocr-staffing.png",
    alt: "Candidate holding an identity document",
    details: [
      ["Name", "Gita devi"],
      ["DOB", "17/06/1995"],
      ["Gender", "Male"],
      ["Aadhar No", "8786 9888 68"],
    ],
  },
  {
    title: "Real estate",
    description:
      "Extract important information from agreements and identity documents to simplify tenant and buyer verification.",
    image: "/images/document-ocr-real-estate.png",
    alt: "Non-disclosure agreement document",
    details: [
      ["Name", "Rohan Roy"],
      ["Effective date", "17/06/1995"],
      ["Doc Type", "NDA Agriment"],
      ["Agriment id", "8786 9888 68"],
    ],
  },
];
function DocumentOcrUseCases() {
  return (
    <section
      id="document-ocr-usecases"
      className="w-full bg-white px-5 py-14 sm:px-8 lg:px-0 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-10 lg:grid-cols-[0.82fr_1.5fr] lg:gap-14 lg:px-[7.5%]">

        {/* LEFT: Sticky heading and description */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-[32px] font-normal leading-[1.12] tracking-[-0.04em] text-[#414141] sm:text-[40px] lg:text-[44px]">
            Who Needs
            <br />
            Document OCR?
          </h2>

          <p className="mt-6 max-w-[380px] text-[14px] leading-[1.45] text-[#414141] sm:text-[15px]">
            Any business that verifies documents at scale runs into the
            same problem: manual review doesn't scale with growth.
            Here's where Document OCR fits in across industries.
          </p>

          <a
            href="#document-ocr-usecases"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#E96A9A] px-5 py-2.5 text-[13px] font-medium text-[#D94C86] transition-colors duration-300 hover:bg-[#E96A9A] hover:text-white"
          >
            Know More
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* RIGHT: Six scrolling cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-5">
          {documentOcrUseCases.map((item) => (
            <article
              key={item.title}
              className="flex min-w-0 flex-col overflow-hidden rounded-[7px] border border-[#BFB3FF] bg-white p-4 sm:p-5"
            >
              <h3 className="text-[16px] font-medium leading-tight text-[#7562C5]">
                {item.title}
              </h3>

              <p className="mt-3 min-h-[58px] text-[13px] leading-[1.4] text-[#414141]">
                {item.description}
              </p>

              <a
                href="#document-ocr-usecases"
                className="mt-2 inline-flex w-fit items-center gap-2 text-[12px] text-[#8B78C9] transition-colors hover:text-[#4D3ECA]"
              >
                Read more
                <span aria-hidden="true">→</span>
              </a>

{/* DOCUMENT PREVIEW + EXTRACTED DETAILS */}

<div
  className={`mt-5 grid items-center gap-2 ${
    [
      "FinTech and lending",
      "Banking and financial services",
    ].includes(item.title)
      ? "grid-cols-1"
      : "grid-cols-[1fr_1fr]"
  }`}
>

  {/* LEFT: Complete document image */}
  <div
    className={`relative flex min-w-0 items-center justify-center p-1 ${
      [
        "FinTech and lending",
        "Banking and financial services",
      ].includes(item.title)
        ? "h-[165px] w-full sm:h-[180px] lg:h-[190px]"
        : "h-[165px] sm:h-[175px] lg:h-[180px]"
    }`}
  >

    {/* Scanner corners */}
    {(
      [
        "FinTech and lending",
        "Banking and financial services",
        "Staffing and recruitment",
        "Real estate",
      ].includes(item.title)
    ) && (
      <>
        <span className="absolute left-0 top-0 z-20 h-5 w-5 rounded-tl-lg border-l border-t border-[#8B78FF]" />

        <span className="absolute right-0 top-0 z-20 h-5 w-5 rounded-tr-lg border-r border-t border-[#8B78FF]" />

        <span className="absolute bottom-0 left-0 z-20 h-5 w-5 rounded-bl-lg border-b border-l border-[#8B78FF]" />

        <span className="absolute bottom-0 right-0 z-20 h-5 w-5 rounded-br-lg border-b border-r border-[#8B78FF]" />
      </>
    )}

    {/* Image - preserve complete proportions */}
    <img
      src={item.image}
      alt={item.alt}
      className="relative z-10 block max-h-full max-w-full object-contain object-center"
      loading="lazy"
      draggable="false"
    />

  </div>

  {/* RIGHT: Extracted document information */}
  {![
    "FinTech and lending",
    "Banking and financial services",
  ].includes(item.title) && (
    <div className="min-w-0 rounded-md border border-[#EEEEF2] bg-white p-2">

      <div className="flex items-center justify-between gap-1">
        <span className="text-[11px] font-medium text-[#414141] sm:text-[12px]">
          Details
        </span>

        <span className="flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full bg-[#16C84E] text-white">
          <svg
            viewBox="0 0 16 16"
            className="h-3 w-3"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="m3 8 3.2 3.2L13 4.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      <div className="mt-1 h-px bg-[#D9D9D9]" />

      <div className="mt-2 space-y-[7px]">
        {(item.details || []).map(([label, value]) => (
          <div
            key={label}
            className="break-words text-[9px] leading-[1.3] text-[#414141] sm:text-[10px]"
          >
            <span className="font-medium">{label}:</span>{" "}
            {value}
          </div>
        ))}
      </div>

    </div>
  )}

</div>
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
      "Extracts Aadhaar number, name, address, and date of birth from front and back Aadhaar card images to simplify Aadhaar-based KYC verification.",
  },
  {
    id: "voter-id",
    number: "[03]",
    title: "OCR-Voter ID",
    image: "/images/document-ocr-voter-id-preview.png",
    alt: "OCR-Voter ID document preview",
    description:
      "Extracts voter ID number, name, and address from Election ID cards to support identity verification during customer onboarding.",
  },
  {
    id: "passport",
    number: "[04]",
    title: "OCR-Passport",
    image: "/images/document-ocr-passport-preview.png",
    alt: "OCR-Passport document preview",
    description:
      "Extracts passport number, name, nationality, and expiry date from passport data pages to simplify verification for travel, hiring, and cross-border onboarding.",
  },
  {
    id: "bank-passbook",
    number: "[05]",
    title: "OCR-BankPassBook",
    image: null,
    alt: "Bank passbook document preview",
    description:
      "Extracts account number, IFSC code, and account holder name from bank passbook images to simplify bank account verification.",
  },
  {
    id: "cheque",
    number: "[06]",
    title: "OCR-Cheque",
    image: "/images/document-ocr-cheque-preview.png",
    alt: "OCR-Cheque document preview",
    description:
      "Extracts cheque number, IFSC code, account number, and payee details from cheque images to reduce manual entry during payment setup.",
  },
  {
    id: "gst",
    number: "[07]",
    title: "OCR-GST",
    image: "/images/document-ocr-gst-preview.png",
    alt: "OCR-GST certificate extraction preview",
    description:
      "Extracts GSTIN, business name, and registration details from GST certificates to simplify business applicant verification.",
  },
  {
    id: "coi",
    number: "[08]",
    title: "OCR-COI",
    image: null,
    alt: "Certificate of Incorporation preview",
    description:
      "Extracts company name, date of incorporation, and CIN from Certificate of Incorporation documents to support business verification workflows.",
  },
  {
    id: "generic-kyc",
    number: "[09]",
    title: "Generic KYC Detection",
    image: "/images/document-ocr-generic-kyc-preview.png",
    alt: "Generic KYC document detection preview",
    description:
      "Identifies the type of submitted document and routes it to the appropriate OCR engine to simplify onboarding across multiple document formats.",
  },
];

function DocumentOcrProducts() {
  const [activeId, setActiveId] = useState("pan");
  const [previewFailed, setPreviewFailed] = useState(false);

  const products = documentOcrProducts.map((product) =>
    product.id === "coi" && !product.image
      ? { ...product, image: "/images/document-ocr-coi-preview.png" }
      : product
  );

  const activeProduct =
    products.find((product) => product.id === activeId) || products[0];

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

          {/* Section heading, Know More and description */}
          <div
            className="
              document-ocr-products__top
              !flex !flex-col !items-start !justify-start
              !gap-0
            "
          >
            {/* Heading */}
            <div className="!w-full">
              <h2 className="sr-only">
                Explore SmartVerify's Document OCR APIs
              </h2>

              <img
                src="/images/document-ocr-products-heading.png"
                alt=""
                aria-hidden="true"
                className="
                  document-ocr-products__heading
                  !w-[82%] !max-w-[300px]
                  sm:!w-auto sm:!max-w-none
                "
                draggable="false"
              />
            </div>

            {/* Know More directly below the heading */}
            <a
              href="#document-ocr-products-list"
              className="
                solutions-know-more
                !mt-3
                min-[1100px]:!mt-4
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

            {/* Description */}
            <div
              className="
                document-ocr-products__intro
                !mt-4 !w-full
              "
            >
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
            </div>
          </div>

          {/* Product selector and active preview */}
          <div className="document-ocr-products__content">

            {/* Product list */}
            <div
              id="document-ocr-products-list"
              className="document-ocr-products__list-panel !h-[360px] min-[901px]:!h-[440px]"
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
                {products.map((product) => {
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

            {/* Active product preview */}
            <div
              className="document-ocr-products__preview !flex !flex-col !justify-between !h-auto min-h-[380px] min-[901px]:!h-[440px] !p-6 sm:!p-7 !overflow-hidden"
              aria-live="polite"
            >
              {/* Document Image - Consistent sizing for every product */}
              <div className="flex w-full h-[240px] sm:h-[250px] items-center justify-center overflow-hidden">
                {activeProduct.image && !previewFailed ? (
                  <img
                    key={activeProduct.id}
                    src={activeProduct.image}
                    alt={activeProduct.alt}
                    className="block max-w-full max-h-full w-auto h-auto object-contain object-center select-none"
                    draggable="false"
                    onError={() => setPreviewFailed(true)}
                  />
                ) : (
                  <div className="document-ocr-products__fallback-art">
                    <div className="document-ocr-products__mock-document">
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
                )}
              </div>

              {/* Product Title and Description */}
              <div className="w-full mt-4">
                <h3 className="font-['Inter'] text-[21px] sm:text-[23px] font-normal leading-[1.3] text-[#111111]">
                  {activeProduct.title}
                </h3>

                <p className="mt-2 max-w-[540px] font-['Inter'] text-[14px] sm:text-[15px] font-normal leading-[1.5] text-[#222222]">
                  {activeProduct.description}
                </p>
              </div>
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
export default DocumentOcrApiPage;