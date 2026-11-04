import { useEffect, useRef, useState } from "react"
import TrustedBusinesses from "./sections/TrustedBusinesses.jsx";
import VerificationSolutions from "./sections/VerificationSolutions.jsx";
import PlatformNumbers from "./sections/PlatformNumbers.jsx";
import IndustriesSection from "./sections/IndustriesSection.jsx";
import SimplifyingVerification from "./sections/SimplifyingVerification.jsx";
import APIIntegrationSection from "./sections/APIIntegrationSection.jsx";
import GetStartedSection from "./sections/GetStartedSection.jsx";
import FAQSection from "./sections/FAQSection.jsx";
import FooterSection from "./sections/FooterSection.jsx";
import DocumentOcrPage from "./products/document-ocr/DocumentOcrPage.jsx";
import BankAccountVerificationPage from "./products/bank-account-verification/BankAccountverificationPage.jsx";
import DigitalKycEkycPage from "./products/digital-kyc-ekyc/DigitalKycEkycPage.jsx";
import NumberIntelligencePage from "./products/number-intelligence/NumberIntelligencePage.jsx";
import IdentityVerificationPage from "./products/identity-verification/IdentityVerificationPage.jsx";
import FaceAuthenticationPage from "./products/face-authentication/FaceAuthenticationPage.jsx";
import VehicleVerificationPage from "./products/vehicle-verification/VehicleVerificationPage.jsx";
import BusinessVerificationPage from "./products/business-verification/BusinessVerificationPage.jsx";
import GstVerificationPage from "./products/gst-verification/GstVerificationPage.jsx";
import AadhaarEsignPage from "./products/aadhaar-esign/AadhaarEsignPage.jsx";
import EmployeeIncomeVerificationPage from "./products/employee-income-verification/EmployeeIncomeVerificationPage.jsx";
import GeolocationAddressIntelligencePage from "./products/geolocation-address-intelligence/GeolocationAddressIntelligencePage.jsx";
import AboutUsPage from "./pages/about-us/AboutUsPage.jsx";
import ContactUsPage from "./pages/contact-us/ContactUsPage.jsx";
import HomeHero from "./sections/HomeHero.jsx";
import Header from "./components/layout/Header.jsx";

import CtaImageButton from "./components/shared/CtaImageButton.jsx";



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
<GetStartedSection />
<div className="section-separator" aria-hidden="true" />
<FAQSection />
<div className="section-separator" aria-hidden="true" />
<FooterSection />
    </main>
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
  <AboutUsPage />
) : isContactUsPage ? (
  <ContactUsPage />
) : isBankAccountVerificationPage ? (
  <BankAccountVerificationPage />
) : isDocumentOcrPage ? (
  <DocumentOcrPage />
) : isDigitalKycEkycPage ? (
  <DigitalKycEkycPage />
    ) : isNumberIntelligencePage ? (
  <NumberIntelligencePage />
    ) : isIdentityVerificationPage ? (
  <IdentityVerificationPage />
    ) : isFaceAuthenticationPage ? (
  <FaceAuthenticationPage />
    ) : isVehicleVerificationPage ? (
  <VehicleVerificationPage />
    ) : isBusinessVerificationPage ? (
  <BusinessVerificationPage />
) : isGstVerificationPage ? (
  <GstVerificationPage />
) : isEsignPage ? (
  <AadhaarEsignPage />
) : isEmployeeIncomeVerificationPage ? (
  <EmployeeIncomeVerificationPage />
) : isGeolocationAddressIntelligencePage ? (
  <GeolocationAddressIntelligencePage />
    ) : (
      <main>
        
        <HomeHero />
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
