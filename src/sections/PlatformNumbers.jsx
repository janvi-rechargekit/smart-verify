
import { useEffect, useMemo, useRef, useState } from "react";
import {
  FileText,
  CreditCard,
  Globe,
  Contact,
  Landmark,
  ClipboardCheck,
  ReceiptText,
  Building2,
  ShieldCheck,
  FolderCheck,
  Fingerprint,
  IdCard,
  Database,
  Video,
  BadgeCheck,
  Link2,
  ScanFace,
  Vote,
  Plane,
  CarFront,
  Scan,
  Smartphone,
  UserRoundSearch,
  Camera,
  Wallet,
  ArrowLeftRight,
  FileCheck,
  Search,
  ClipboardList,
  Receipt,
FileSearch,
Building,
ContactRound,
SearchCheck,
FileSignature,
Files,
} from "lucide-react";

const statsCards = [
  {
    value: 100,
    suffix: "M+",
    label: "Verifications Processed",
    icon: "shield",
  },
  {
    value: 99.99,
    suffix: "%",
    label: "Platform Uptime",
    icon: "uptime",
    decimals: 2,
  },
  {
    value: 500,
    suffix: "+",
    label: "Businesses Served",
    icon: "business",
  },
  {
    value: 100,
    suffix: "+",
    label: "Verification APIs",
    icon: "api",
  },
];

const categories = [
  { name: "Document OCR", icon: "/images/icon-document-ocr.png", pillImage: "/images/pill-document-ocr.png" },
  { name: "Digital KYC & eKYC", icon: "/images/icon-digital-kyc-symbol.png", pillImage: "/images/icon-digital-kyc.png" },
  { name: "Identity Verification", icon: "/images/icon-identity.png", pillImage: "/images/pill-identity-verification.png" },
  { name: "Face Authentication", icon: "/images/icon-face.png", pillImage: "/images/pill-face-authentication.png" },
  { name: "Bank Account Verification", icon: "/images/icon-bank.png", pillImage: "/images/pill-bank-account-verification.png" },
  { name: "Vehicle Verification API", icon: "/images/icon-vehicle.png", pillImage: "/images/pill-vehicle-verification-api.png" },
  { name: "GST Verification API", icon: "/images/icon-gst.png", pillImage: "/images/pill-gst-verification-api.png" },
  { name: "Business Verification (KYB)", icon: "/images/icon-business.png", pillImage: "/images/pill-business-verification-kyb.png" },
  { name: "eSign", icon: "/images/icon-esign.png", pillImage: "/images/pill-esign.png" },
  { name: "Number Intelligence", icon: "/images/icon-number.png", pillImage: "/images/pill-number-intelligence.png" },
  { name: "Employee & Income Verification", icon: "/images/icon-employee.png", pillImage: "/images/pill-employee-income-verification.png" },
  { name: "Geolocation & Address Intelligence", icon: "/images/icon-location.png", pillImage: "/images/pill-geolocation-address-intelligence.png" },
];

const categoryRoutes = {
  "Document OCR": "/products/document-ocr-api",
  "Digital KYC & eKYC": "/products/digital-kyc-ekyc",
  "Identity Verification": "/products/identity-verification-api",
  "Face Authentication": "/products/face-authentication-api",
  "Bank Account Verification": "/products/bank-account-verification",
  "Vehicle Verification API": "/products/vehicle-verification-api",
  "GST Verification API": "/products/gst-verification-api",
  "Business Verification (KYB)": "/products/business-verification-api",
  "eSign": "/products/aadhaar-esign-api",
  "Number Intelligence": "/products/number-intelligence-api",
  "Employee & Income Verification": "/products/employee-income-verification",
  "Geolocation & Address Intelligence": "/products/geolocation-address-intelligence",
};
const categoryContent = {
  "Document OCR": {
    description:
      "Extracts key information from identity documents, invoices, and business records in seconds with AI-powered OCR. Eliminate manual data entry, reduce processing errors, and speed up verification workflows. Capture accurate data from multiple document formats while improving operational efficiency.",
    cta: "Explore Document OCR",
  },

  "Identity Verification": {
    description:
      "Confirm customer identities instantly with trusted verification APIs that connect to reliable data sources. Prevent fraud, reduce onboarding delays, and ensure every user is genuine before granting access. Build trust while staying compliant with regulatory requirements.",
    cta: "Verify Identities Faster",
  },

  "Digital KYC & eKYC": {
    description:
      "Complete customer onboarding with a fully digital KYC process that eliminates paperwork and long wait times. Verify identities quickly through secure APIs while meeting compliance standards. Deliver a seamless onboarding experience that increases approval rates.",
    cta: "Simplify KYC",
  },

  "Face Authentication": {
    description:
      "Authenticate users with advanced facial recognition and liveness detection to prevent spoofing and identity fraud. Verify that the right person is behind every transaction or login. Improve security without adding friction to the user experience.",
    cta: "Secure Every Login",
  },

  "Bank Account Verification": {
    description:
      "Verify bank account ownership in real time before processing payouts, refunds, or financial transactions. Reduce failed payments, prevent account fraud, and improve transaction success rates.",
    cta: "Verify Bank Accounts",
  },

  "Vehicle Verification API": {
    description:
      "Instantly validate vehicle registration, RC details, and ownership information using official records. Speed up vehicle onboarding, insurance processing, financing, and compliance checks. Ensure every vehicle record is accurate and up to date.",
    cta: "Validate Vehicle Records",
  },

  "GST Verification API": {
    description:
      "Verify GSTIN details in real time to confirm business authenticity before onboarding customers, vendors, or partners. Reduce compliance risks, prevent fraudulent registrations, and simplify tax-related verification. Make business onboarding faster and more reliable.",
    cta: "Check GST Details",
  },

  "Business Verification (KYB)": {
    description:
      "Verify the legitimacy of businesses by validating company registrations, tax records, licences, and other official information. Strengthen compliance, reduce fraud risks, and onboard trusted partners with confidence. Automate KYB checks through a single API.",
    cta: "Verify Business",
  },

  "Employee & Income Verification": {
    description:
      "Verify employment status, salary details, and income information to make faster, more informed decisions. Reduce manual verification efforts for hiring, lending, and insurance workflows. Improve accuracy while minimising the risk of fraud.",
    cta: "Verify Employment & Income",
  },

  "Number Intelligence": {
    description:
      "Analyse mobile numbers to assess authenticity, activity, and potential fraud risks before onboarding users. Detect suspicious numbers, reduce fake account creation, and strengthen customer verification. Make smarter decisions with real-time telecom intelligence.",
    cta: "Analyse Mobile Numbers",
  },

  eSign: {
    description:
      "Enable customers to securely sign agreements and documents online with legally compliant digital signatures. Eliminate paperwork, accelerate approvals, and simplify contract management. Complete signing workflows anytime, from any device.",
    cta: "Sign Documents Digitally",
  },

  "Geolocation & Address Intelligence": {
    description:
      "Validate addresses and analyse location data to improve verification accuracy and delivery success. Detect suspicious location patterns, reduce fraud, and enhance customer onboarding. Make better business decisions with trusted address intelligence.",
    cta: "Validate Addresses",
  },
};
const documentApis = [
  {
    name: "OCR API PAN",
    description: "Extract PAN details instantly using OCR.",
    icon: FileText,
  },
  {
    name: "Aadhaar OCR API",
    description: "Capture Aadhaar data automatically.",
    icon: CreditCard,
  },
  {
    name: "Passport OCR API",
    description: "Extract passport information securely.",
    icon: Globe,
  },
  {
    name: "OCR API For Voter ID",
    description: "Extract and read voter ID card details.",
    icon: Contact,
  },
  {
    name: "OCR API Bank Passbook",
    description: "Capture account details with OCR.",
    icon: Landmark,
  },
  {
    name: "OCR API Check",
    description: "Extract cheque details quickly and accurately.",
    icon: ClipboardCheck,
  },
  {
    name: "OCR API GST",
    description: "Read and extract GST document information.",
    icon: ReceiptText,
  },
  {
    name: "COI OCR API Overview",
    description: "Extract key information from company incorporation documents.",
    icon: Building2,
  },
];
const digitalKycApis = [
  {
    name: "Unified Digital KYC",
    description:
      "Verify customer identities through a unified digital KYC process.",
    icon: ShieldCheck,
  },
  {
    name: "DigiLocker Service",
    description:
      "Fetch and verify customer documents digitally through DigiLocker.",
    icon: FolderCheck,
  },
  {
    name: "Aadhaar-Based eKYC",
    description:
      "Verify customer identity through supported Aadhaar-based authentication.",
    icon: Fingerprint,
  },
  {
    name: "PAN-Based KYC",
    description:
      "Validate PAN details for customer identity verification.",
    icon: IdCard,
  },
  {
    name: "CKYC Verification",
    description:
      "Access existing customer KYC records through supported CKYC services.",
    icon: Database,
  },
  {
    name: "Video KYC",
    description:
      "Facilitate remote customer identity verification through video-based KYC.",
    icon: Video,
  },
];
const identityVerificationApis = [
  {
    name: "PAN Verification API",
    description:
      "Verify PAN details and retrieve available information through basic and advanced PAN verification.",
    icon: BadgeCheck,
  },
  {
    name: "PAN-Aadhaar Link Validation API",
    description:
      "Check whether a PAN is linked with the individual's Aadhaar number.",
    icon: Link2,
  },
  {
    name: "Masked Aadhaar & PAN Retrieval API",
    description:
      "Retrieve masked Aadhaar or PAN details using the corresponding supported identification number.",
    icon: ScanFace,
  },
  {
    name: "Voter ID Verification API",
    description:
      "Validate voter ID details for customer identity checks.",
    icon: Vote,
  },
  {
    name: "Passport Verification API",
    description:
      "Verify passport information for identity validation and onboarding.",
    icon: Plane,
  },
  {
    name: "Driving Licence Verification API",
    description:
      "Validate driving licence details using supported verification records.",
    icon: CarFront,
  },
];
const faceAuthenticationApis = [
  {
    name: "Face Authentication API",
    description:
      "Verify user identities through advanced facial recognition and authentication technology.",
    icon: Scan,
  },
  {
    name: "Face Match API",
    description:
      "Compare a live selfie with an identity document photograph.",
    icon: ScanFace,
  },
  {
    name: "Face Liveness SDK",
    description:
      "Capture and verify real-time facial presence through SDK integration.",
    icon: Smartphone,
  },
  {
    name: "Face Liveness BE API",
    description:
      "Perform server-side liveness checks to detect spoofing attempts.",
    icon: ShieldCheck,
  },
  {
    name: "Face Detection API",
    description:
      "Detect and identify human faces in submitted images.",
    icon: UserRoundSearch,
  },
  {
    name: "Selfie Capture SDK",
    description:
      "Capture user selfies with guided instructions for identity verification.",
    icon: Camera,
  },
];
const bankAccountVerificationApis = [
  {
    name: "IMPS Penny Drop Verification",
    description:
      "Verify bank account ownership through an IMPS-based penny drop transaction.",
    icon: Landmark,
  },
  {
    name: "IMPS Penniless Verification",
    description:
      "Verify bank account details without initiating a penny drop transaction.",
    icon: Wallet,
  },
  {
    name: "UPI Penniless Verification",
    description:
      "Validate bank account details through a UPI-based verification process.",
    icon: Smartphone,
  },
  {
    name: "Mobile to Account Details",
    description:
      "Retrieve available bank account details linked to a mobile number.",
    icon: ArrowLeftRight,
  },
  {
    name: "PAN Account Link Verification",
    description:
      "Check the association between a PAN number and a bank account.",
    icon: CreditCard,
  },
];
const vehicleVerificationApis = [
  {
    name: "RC Advanced Validation",
    description:
      "Access detailed vehicle registration information and validate RC records.",
    icon: CarFront,
  },
  {
    name: "RC Validation Plus",
    description:
      "Verify vehicle registration details with additional available RC information.",
    icon: FileCheck,
  },
  {
    name: "Mobile Number to RC",
    description:
      "Retrieve linked vehicle registration details using a mobile number.",
    icon: Smartphone,
  },
  {
    name: "RC Challan Details",
    description:
      "Check pending traffic challans and available violation details for a vehicle.",
    icon: ClipboardList,
  },
  {
    name: "Reverse RC Lookup",
    description:
      "Find vehicle registration details using supported vehicle identification inputs.",
    icon: Search,
  },
];
const gstVerificationApis = [
  {
    name: "GST Search by PAN",
    description:
      "Find GST registration details associated with a business PAN.",
    icon: FileSearch,
  },
  {
    name: "GST Basic Validation",
    description:
      "Verify GSTIN and retrieve basic registration details.",
    icon: Receipt,
  },
  {
    name: "GST Advanced Validation",
    description:
      "Access detailed GST registration and taxpayer information.",
    icon: Building,
  },
  {
    name: "GST to Contact Details",
    description:
      "Retrieve available business contact details using a GSTIN.",
    icon: ContactRound,
  },
  {
    name: "Contact to GST API",
    description:
      "Find associated GST registration details using contact information.",
    icon: SearchCheck,
  },
  {
    name: "GST Status Verification",
    description:
      "Check GST registration status and validity.",
    icon: ShieldCheck,
  },
];
const businessVerificationApis = [
  {
    name: "CIN / COI Verification API",
    description:
      "Validate company registration details and retrieve key incorporation information.",
    icon: Building2,
  },
  {
    name: "Company Search API",
    description:
      "Find company identification details using the registered company name.",
    icon: Search,
  },
  {
    name: "PAN–CIN Verification API",
    description: "Verify and map company PAN and CIN details.",
    icon: FileCheck,
  },
  {
    name: "DIN Verification API",
    description:
      "Validate Director Identification Numbers and retrieve associated details.",
    icon: UserRoundSearch,
  },
  {
    name: "TAN Verification API",
    description:
      "Validate TAN details and retrieve associated business information.",
    icon: ReceiptText,
  },
  {
    name: "Business Registration Verification API",
    description:
      "Verify FSSAI, Import Export (IE), and Udyam registration details.",
    icon: ClipboardCheck,
  },
];
const employeeIncomeVerificationApis = [
  {
    name: "UAN Verification",
    description:
      "Verify employee Universal Account Number (UAN) details through supported EPFO records.",
    icon: BadgeCheck,
  },
  {
    name: "UAN Basic Verification",
    description:
      "Retrieve basic employee and UAN-related information.",
    icon: UserRoundSearch,
  },
  {
    name: "UAN Advanced Verification",
    description:
      "Access detailed employment and UAN-related information.",
    icon: FileSearch,
  },
  {
    name: "Mobile to UAN Verification",
    description:
      "Check UAN details using a registered mobile number.",
    icon: Smartphone,
  },
  {
    name: "TDS Quarterly",
    description:
      "Retrieve quarterly TDS filing and tax-related information.",
    icon: ReceiptText,
  },
  {
    name: "UAN Employment History",
    description:
      "Access available employment history linked to a UAN.",
    icon: ClipboardList,
  },
];
const numberIntelligenceApis = [
  {
    name: "Mobile Number Verification",
    description:
      "Validate mobile number details for customer verification.",
    icon: Smartphone,
  },
  {
    name: "Operator & Circle Lookup",
    description:
      "Identify the telecom operator and circle associated with a mobile number.",
    icon: Search,
  },
  {
    name: "Mobile Number Match",
    description:
      "Check available mobile number details against customer information.",
    icon: BadgeCheck,
  },
  {
    name: "Number Portability Check",
    description:
      "Check available number portability information for mobile numbers.",
    icon: ArrowLeftRight,
  },
];
const geolocationAddressApis = [
  {
    name: "Lat-Long to Address",
    description:
      "Convert geographic coordinates into readable addresses.",
    icon: Globe,
  },
  {
    name: "Address to Lat-Long",
    description:
      "Convert physical addresses into latitude and longitude coordinates.",
    icon: ArrowLeftRight,
  },
  {
    name: "Distance Between Two Locations",
    description:
      "Calculate the distance between two geographic locations.",
    icon: Search,
  },
  {
    name: "Pincode to Location",
    description:
      "Retrieve location details using a postal PIN code.",
    icon: Contact,
  },
  {
    name: "Address Validation",
    description:
      "Validate and standardise submitted address information.",
    icon: FileCheck,
  },
  {
    name: "Location Intelligence",
    description:
      "Retrieve geographic details and location-based information using coordinates.",
    icon: Smartphone,
  },
];
const eSignApis = [
  {
    name: "Aadhaar eSign",
    description:
      "Enable legally recognised electronic document signing through Aadhaar-based authentication.",
    icon: FileCheck,
  },
  {
    name: "PAN-Based eSign",
    description:
      "Facilitate digital document signing with PAN-based identity verification.",
    icon: BadgeCheck,
  },
  {
    name: "Document eSign",
    description:
      "Allow users to sign documents electronically from anywhere.",
    icon: FileSignature,
  },
  {
    name: "Bulk eSign",
    description:
      "Manage multiple document-signing requests through a single workflow.",
    icon: Files,
  },
  {
    name: "eSign Status",
    description:
      "Track document signing progress and completion status.",
    icon: ClipboardCheck,
  },
  {
    name: "eSign Verification",
    description:
      "Verify electronic signatures and signed document authenticity.",
    icon: ShieldCheck,
  },
];
export default function PlatformNumbers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const statsSectionRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [animatedValues, setAnimatedValues] = useState(
    statsCards.map(() => 0)
  );

  // Animate the statistics whenever the section enters the viewport.
  useEffect(() => {
    const section = statsSectionRef.current;
    if (!section) return undefined;

    let hasAnimated = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;

          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
          }

          setAnimatedValues(statsCards.map(() => 0));

          const duration = 2000;
          const startTime = performance.now();

          const animate = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);

            setAnimatedValues(
              statsCards.map((card) =>
                Number((card.value * eased).toFixed(card.decimals || 0))
              )
            );

            if (progress < 1) {
              animationFrameRef.current = requestAnimationFrame(animate);
            }
          };

          animationFrameRef.current = requestAnimationFrame(animate);
        }

        if (!entry.isIntersecting) {
          hasAnimated = false;
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const isSearching = searchTerm.trim().length > 0;

  // Search category names and the supplied category descriptions/CTA text.
 const filteredCategories = useMemo(() => {
  const query = searchTerm.trim().toLowerCase();
  if (!query) return categories;

  return categories.filter((category) => {
    const content = categoryContent[category.name];

    return (
      category.name.toLowerCase().includes(query) ||
      content?.description.toLowerCase().includes(query) ||
      content?.cta.toLowerCase().includes(query) ||

      // Search inside Document OCR cards
      (category.name === "Document OCR" &&
        documentApis.some((api) =>
          api.name.toLowerCase().includes(query)
        )) ||

      // Search inside Digital KYC cards
      (category.name === "Digital KYC & eKYC" &&
        digitalKycApis.some((api) =>
          api.name.toLowerCase().includes(query)
        )) ||

      // Search inside Identity Verification cards
      (category.name === "Identity Verification" &&
        identityVerificationApis.some((api) =>
          api.name.toLowerCase().includes(query)
        )) ||

(category.name === "Face Authentication" &&
  faceAuthenticationApis.some((api) =>
    api.name.toLowerCase().includes(query)
  )) ||

(category.name === "Bank Account Verification" &&
  bankAccountVerificationApis.some((api) =>
    api.name.toLowerCase().includes(query)
  )) ||

(category.name === "Vehicle Verification API" &&
  vehicleVerificationApis.some((api) =>
    api.name.toLowerCase().includes(query)
  )) ||

(category.name === "GST Verification API" &&
  gstVerificationApis.some((api) =>
    api.name.toLowerCase().includes(query)
  )) ||
(category.name === "Business Verification (KYB)" &&
  businessVerificationApis.some((api) =>
    `${api.name} ${api.description}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )) || (category.name === "Employee & Income Verification" &&
  employeeIncomeVerificationApis.some((api) =>
    api.name.toLowerCase().includes(query)
  )) || (category.name === "Number Intelligence" &&
  numberIntelligenceApis.some((api) =>
    api.name.toLowerCase().includes(query)
  )) || (category.name === "Geolocation & Address Intelligence" &&
  geolocationAddressApis.some((api) =>
    api.name.toLowerCase().includes(query)
  ))
    );
  });
}, [searchTerm]);

  // Check whether the clicked category is available in the current search.
const activeCategoryIsValid =
  activeCategory &&
  filteredCategories.some(
    (category) => category.name === activeCategory
  );

// Check whether the hovered category is available in the current search.
const hoveredCategoryIsValid =
  hoveredCategory &&
  filteredCategories.some(
    (category) => category.name === hoveredCategory
  );

// Hover temporarily previews a category.
// When hover ends, the clicked category is displayed again.
const selectedCategory = hoveredCategoryIsValid
  ? hoveredCategory
  : activeCategoryIsValid
    ? activeCategory
    : null;

const selectedContent = selectedCategory
  ? categoryContent[selectedCategory]
  : null;

const selectedCategoryIcon =
  categories.find(
    (category) => category.name === selectedCategory
  )?.icon || null;

  // If the search matches an OCR API name, show only matching API chips.
  // If it matches the OCR category/description, keep the complete OCR list.
  const visibleDocumentApis = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return documentApis;

    const matches = documentApis.filter((api) =>
      api.name.toLowerCase().includes(query)
    );

    return matches.length ? matches : documentApis;
  }, 
  [searchTerm]);
const visibleDigitalKycApis = useMemo(() => {
  const query = searchTerm.trim().toLowerCase();
  if (!query) return digitalKycApis;

  const matches = digitalKycApis.filter((api) =>
    api.name.toLowerCase().includes(query)
  );

  return matches.length ? matches : digitalKycApis;
}, [searchTerm]);
const visibleIdentityVerificationApis = useMemo(() => {
  const query = searchTerm.trim().toLowerCase();
  if (!query) return identityVerificationApis;

  const matches = identityVerificationApis.filter((api) =>
    api.name.toLowerCase().includes(query)
  );

  return matches.length ? matches : identityVerificationApis;
}, [searchTerm]);
const visibleFaceAuthenticationApis = useMemo(() => {
  const query = searchTerm.trim().toLowerCase();
  if (!query) return faceAuthenticationApis;

  const matches = faceAuthenticationApis.filter((api) =>
    api.name.toLowerCase().includes(query)
  );

  return matches.length ? matches : faceAuthenticationApis;
}, [searchTerm]);
const visibleBankAccountVerificationApis = useMemo(() => {
  const query = searchTerm.trim().toLowerCase();
  if (!query) return bankAccountVerificationApis;

  const matches = bankAccountVerificationApis.filter((api) =>
    api.name.toLowerCase().includes(query)
  );

  return matches.length ? matches : bankAccountVerificationApis;
}, [searchTerm]);
const visibleVehicleVerificationApis = useMemo(() => {
  const query = searchTerm.trim().toLowerCase();
  if (!query) return vehicleVerificationApis;

  const matches = vehicleVerificationApis.filter((api) =>
    api.name.toLowerCase().includes(query)
  );

  return matches.length ? matches : vehicleVerificationApis;
}, [searchTerm]);
const visibleGstVerificationApis = useMemo(() => {
  const query = searchTerm.trim().toLowerCase();
  if (!query) return gstVerificationApis;

  const matches = gstVerificationApis.filter((api) =>
    api.name.toLowerCase().includes(query)
  );

  return matches.length ? matches : gstVerificationApis;
}, [searchTerm]);
const visibleBusinessVerificationApis = useMemo(
  () =>
    businessVerificationApis.filter((api) =>
      `${api.name} ${api.description}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    ),
  [searchTerm]
);
const visibleEmployeeIncomeVerificationApis = useMemo(() => {
  const query = searchTerm.trim().toLowerCase();
  if (!query) return employeeIncomeVerificationApis;

  const matches = employeeIncomeVerificationApis.filter((api) =>
    api.name.toLowerCase().includes(query)
  );

  return matches.length ? matches : employeeIncomeVerificationApis;
}, [searchTerm]);
const visibleNumberIntelligenceApis = useMemo(() => {
  const query = searchTerm.trim().toLowerCase();
  if (!query) return numberIntelligenceApis;

  const matches = numberIntelligenceApis.filter((api) =>
    api.name.toLowerCase().includes(query)
  );

  return matches.length ? matches : numberIntelligenceApis;
}, [searchTerm]);
const visibleGeolocationAddressApis = useMemo(() => {
  const query = searchTerm.trim().toLowerCase();
  if (!query) return geolocationAddressApis;

  const matches = geolocationAddressApis.filter((api) =>
    api.name.toLowerCase().includes(query)
  );

  return matches.length ? matches : geolocationAddressApis;
}, [searchTerm]);
 const esignApis = useMemo(() => {
  const query = searchTerm.trim().toLowerCase();
  if (!query) return geolocationAddressApis;
  const matches = eSignApis.filter((api) =>
  api.name.toLowerCase().includes(query)
);

return matches.length ? matches : eSignApis;
}, [searchTerm]);
 

  const handleCategoryClick = (categoryName) => {
  setActiveCategory(categoryName);
};

  return (
    <>
      {/* Platform statistics */}
      <section
        ref={statsSectionRef}
        className="platform-stats-section"
        aria-labelledby="platform-stats-heading"
      >
        <div className="platform-stats__inner">
          <img
            id="platform-stats-heading"
            src="/images/platform-heading.png"
            alt="The number Behind Our Platform"
            className="platform-stats__heading-image"
          />

          <div className="platform-stats__grid">
            {statsCards.map((card, index) => (
              <article
                key={card.label}
                className="
                  flex min-w-0 flex-col items-center justify-center
                  rounded-2xl border border-[#E8E7F2] bg-white
                  px-4 py-8 text-center
                  shadow-[0_8px_25px_rgba(30,25,80,0.04)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_12px_30px_rgba(116,76,255,0.12)]
                "
              >
                <div
                  className="text-[28px] font-semibold leading-tight tracking-tight text-[#41465A] sm:text-[32px]"
                  aria-live="off"
                >
                  {animatedValues[index].toFixed(card.decimals || 0)}
                  {card.suffix}
                </div>
                <p className="mb-0 mt-3 text-[14px] font-medium text-[#41465A] sm:text-[16px]">
                  {card.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* API search and category explorer */}
      <section
        id="api-explorer"
        className="api-finder-section"
        aria-labelledby="api-finder-heading"
      >
        <div className="api-finder__inner">
          <header className="api-finder__header">
            <img
              id="api-finder-heading"
              src="/images/api-finder-heading.png"
              alt="Search for the Verification API You Need All in One Place"
              className="api-finder__heading-image"
            />
            <p>Search over 100 APIs organized by category.</p>
          </header>

          {/* Search bar */}
          <div className="api-search-image-wrap">
            {/* Desktop search bar */}
            <div className="relative hidden min-[601px]:block">
              <img
                src="/images/api-search-glow.png"
                alt=""
                aria-hidden="true"
                className="api-finder__side-glow api-finder__side-glow--left"
              />
              <img
                src="/images/api-search-glow.png"
                alt=""
                aria-hidden="true"
                className="api-finder__side-glow api-finder__side-glow--right"
              />
              <img
                src="/images/api-search-bar.png"
                alt=""
                aria-hidden="true"
                className="api-search-image"
              />

              {isSearching && (
                <span className="api-search-value-mask" aria-hidden="true" />
              )}

              <div className="api-search-image-overlay">
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder=""
                  aria-label="Search verification APIs"
                  className={`api-search-image-input ${
                    isSearching ? "has-value" : ""
                  }`}
                />
                {isSearching && (
                  <button
                    type="button"
                    className="api-search__clear"
                    onClick={() => setSearchTerm("")}
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Mobile search bar */}
            <div className="flex h-12 w-full items-center gap-3 rounded-full border border-[#D9D5F5] bg-white px-4 shadow-sm min-[601px]:hidden">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-[#4D3ECA]"
              >
                <circle
                  cx="10.8"
                  cy="10.8"
                  r="6.8"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="m16 16 4 4"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search for APIs"
                aria-label="Search verification APIs"
                className="h-full min-w-0 flex-1 bg-transparent text-sm text-[#343B4B] outline-none placeholder:text-[#8B8B9A]"
              />
              {isSearching && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F1EFFF] text-lg leading-none text-[#4D3ECA]"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* Category pills */}
<div
  className="
    api-categories api-categories--interactive
    min-[701px]:!flex
    min-[701px]:!flex-row
    min-[701px]:!flex-wrap
    min-[701px]:!items-center
    min-[701px]:!justify-center
    min-[701px]:!gap-4
    max-[700px]:!grid
    max-[700px]:!grid-cols-2
    max-[700px]:!items-center
    max-[700px]:!gap-x-2
    max-[700px]:!gap-y-3
  "
  aria-label="API categories"
>
  {filteredCategories.map((category) => {
  const isActive = activeCategory === category.name;
  const isHovered = hoveredCategory === category.name;

  return (
    <button
      type="button"
      key={category.name}
      onClick={() => handleCategoryClick(category.name)}
      onMouseEnter={() => setHoveredCategory(category.name)}
      onMouseLeave={() => setHoveredCategory(null)}
      aria-label={category.name}
      aria-pressed={isActive}
      className={`
        group flex w-auto min-w-max shrink-0
        items-center justify-start gap-2.5
        rounded-full border
        px-5 py-2.5 text-[15px] font-medium
        transition-all duration-300 ease-in-out
        min-[701px]:!w-auto
        min-[701px]:!min-w-max
        min-[701px]:!whitespace-nowrap
        max-[700px]:!w-full
        max-[700px]:!min-w-0
        max-[700px]:!justify-start
        max-[700px]:!gap-2
        max-[700px]:!px-2
        max-[700px]:!py-3
        max-[700px]:!text-[11px]
        ${
          isActive || isHovered
            ? "!border-[#4D3ECA] !bg-[#4D3ECA] !text-white shadow-md"
            : "border-[#D1D5DB] bg-white text-[#4B5563]"
        }
      `}
    >
      <span
        aria-hidden="true"
        className={`h-5 w-5 shrink-0 ${
          isActive || isHovered
            ? "bg-white"
            : "bg-[#4D3ECA]"
        }`}
        style={{
          mask: `url("${category.icon}") center / contain no-repeat`,
          WebkitMask: `url("${category.icon}") center / contain no-repeat`,
        }}
      />

      <span className="min-w-0 text-left leading-tight min-[701px]:whitespace-nowrap min-[701px]:text-center">
        {category.name}
      </span>
    </button>
  );
})}

  {filteredCategories.length === 0 && (
    <p className="api-empty-message col-span-2">
      No matching categories found.
    </p>
  )}
</div>

          {/* Category information panel — same layout for every selected category */}
          {selectedCategory && selectedContent && (
            <section
              className="
                mt-10 w-full rounded-[24px]
                border border-[#E0E7F1]
                bg-[#F7F9FC]
                px-6 py-8
                sm:px-8 sm:py-10
                lg:px-14 lg:py-12
              "
              aria-live="polite"
              key={selectedCategory}
            >
              <div className="max-w-[820px]">
                <h3 className="m-0 text-[25px] font-semibold leading-tight tracking-[-0.025em] text-[#34348F] sm:text-[30px] lg:text-[34px]">
                  {selectedCategory === "Document OCR"
                    ? "OCR API for Document Data Extraction"
                    : selectedCategory}
                </h3>

                <p className="api-integration-section__description">
  {selectedCategory === "Document OCR"
    ? "Use AI based OCR APIs to extract structured data from ID documents, financial documents and business documents in real time. High accuracy OCR APIs for automating document verification and data extraction workflows for KYC and onboarding use-cases."
    : selectedContent.description}
</p>

                <a
                  href={categoryRoutes[selectedCategory] || "#contact"}
                  className="mt-8 inline-flex items-center gap-2 text-[16px] font-semibold text-[#34348F] transition-colors duration-200 hover:text-[#6547F8]"
                >
                  {selectedCategory === "Document OCR"
                    ? "Begin Using OCR API"
                    : selectedContent.cta}
                  <span aria-hidden="true" className="text-xl leading-none">→</span>
                </a>
              </div>

              {selectedCategory === "Document OCR" ? (
  /* DOCUMENT OCR CARDS */
  <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
    {visibleDocumentApis.map((api) => (
      <button
        key={api.name}
        type="button"
        onClick={() => setSearchTerm(api.name)}
        title={`Search for ${api.name}`}
        className="
          group flex min-h-[112px] min-w-0 items-center gap-4
          rounded-[20px] border border-[#DCE5F2]
          bg-white px-5 py-5 text-left font-[inherit]
          shadow-[0_2px_8px_rgba(30,50,90,0.02)]
          transition-all duration-200
          hover:-translate-y-0.5 hover:border-[#B9ACFF]
          hover:shadow-[0_8px_22px_rgba(77,62,202,0.09)]
          focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-[#6547F8]
        "
      >
        <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[15px] bg-[#F0EEFF]">
          <api.icon
            size={34}
            strokeWidth={1.8}
            color="#4D3ECA"
            fill="white"
          />
        </span>

        <span className="flex min-w-0 max-w-[260px] flex-1 flex-col gap-1">
          <span className="text-[15px] font-semibold leading-[1.4] text-[#172033]">
            {api.name}
          </span>

          <span className="whitespace-normal break-words text-[14px] font-normal leading-[1.5] text-[#64748B]">
            {api.description}
          </span>
        </span>
      </button>
    ))}
  </div>

) : selectedCategory === "Digital KYC & eKYC" ? (

  /* DIGITAL KYC & eKYC CARDS */
  <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
    {visibleDigitalKycApis.map((api) => (
      <button
        key={api.name}
        type="button"
        onClick={() => setSearchTerm(api.name)}
        title={`Search for ${api.name}`}
        className="
          group flex min-h-[112px] min-w-0 items-center gap-4
          rounded-[20px] border border-[#DCE5F2]
          bg-white px-5 py-5 text-left font-[inherit]
          shadow-[0_2px_8px_rgba(30,50,90,0.02)]
          transition-all duration-200
          hover:-translate-y-0.5 hover:border-[#B9ACFF]
          hover:shadow-[0_8px_22px_rgba(77,62,202,0.09)]
          focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-[#6547F8]
        "
      >
        <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[15px] bg-[#F0EEFF]">
          <api.icon
            size={34}
            strokeWidth={1.8}
            color="#4D3ECA"
          />
        </span>

        <span className="flex min-w-0 max-w-[260px] flex-1 flex-col gap-1">
          <span className="text-[15px] font-semibold leading-[1.4] text-[#172033]">
            {api.name}
          </span>

          <span className="whitespace-normal break-words text-[14px] font-normal leading-[1.5] text-[#64748B]">
            {api.description}
          </span>
        </span>
      </button>
    ))}
  </div>

) : selectedCategory === "Identity Verification" ? (
  <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
    {visibleIdentityVerificationApis.map((api) => (
      <button
        key={api.name}
        type="button"
        onClick={() => setSearchTerm(api.name)}
        title={`Search for ${api.name}`}
        className="
          group flex min-h-[112px] min-w-0 items-center gap-4
          rounded-[20px] border border-[#DCE5F2]
          bg-white px-5 py-5 text-left font-[inherit]
          shadow-[0_2px_8px_rgba(30,50,90,0.02)]
          transition-all duration-200
          hover:-translate-y-0.5 hover:border-[#B9ACFF]
          hover:shadow-[0_8px_22px_rgba(77,62,202,0.09)]
          focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-[#6547F8]
        "
      >
        <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[15px] bg-[#F0EEFF]">
          <api.icon
            size={34}
            strokeWidth={1.8}
            color="#4D3ECA"
            fill="white"
          />
        </span>

        <span className="flex min-w-0 max-w-[260px] flex-1 flex-col gap-1">
          <span className="text-[15px] font-semibold leading-[1.4] text-[#172033]">
            {api.name}
          </span>
          <span className="whitespace-normal break-words text-[14px] font-normal leading-[1.5] text-[#64748B]">
            {api.description}
          </span>
        </span>
      </button>
    ))}
  </div>
  ) : selectedCategory === "Face Authentication" ? (

  /* FACE AUTHENTICATION CARDS */
  <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
    {visibleFaceAuthenticationApis.map((api) => (
      <button
        key={api.name}
        type="button"
        onClick={() => setSearchTerm(api.name)}
        title={`Search for ${api.name}`}
        className="
          group flex min-h-[112px] min-w-0 items-center gap-4
          rounded-[20px] border border-[#DCE5F2]
          bg-white px-5 py-5 text-left font-[inherit]
          shadow-[0_2px_8px_rgba(30,50,90,0.02)]
          transition-all duration-200
          hover:-translate-y-0.5 hover:border-[#B9ACFF]
          hover:shadow-[0_8px_22px_rgba(77,62,202,0.09)]
          focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-[#6547F8]
        "
      >
        <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[15px] bg-[#F0EEFF]">
          <api.icon size={34} strokeWidth={1.8} color="#4D3ECA" fill="white" />
        </span>
        <span className="flex min-w-0 max-w-[260px] flex-1 flex-col gap-1">
          <span className="text-[15px] font-semibold leading-[1.4] text-[#172033]">
            {api.name}
          </span>
          <span className="whitespace-normal break-words text-[14px] font-normal leading-[1.5] text-[#64748B]">
            {api.description}
          </span>
        </span>
      </button>
    ))}
  </div>
  ) : selectedCategory === "Bank Account Verification" ? (

  /* BANK ACCOUNT VERIFICATION CARDS */
  <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
    {visibleBankAccountVerificationApis.map((api) => (
      <button
        key={api.name}
        type="button"
        onClick={() => setSearchTerm(api.name)}
        title={`Search for ${api.name}`}
        className="
          group flex min-h-[112px] min-w-0 items-center gap-4
          rounded-[20px] border border-[#DCE5F2]
          bg-white px-5 py-5 text-left font-[inherit]
          shadow-[0_2px_8px_rgba(30,50,90,0.02)]
          transition-all duration-200
          hover:-translate-y-0.5 hover:border-[#B9ACFF]
          hover:shadow-[0_8px_22px_rgba(77,62,202,0.09)]
          focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-[#6547F8]
        "
      >
        <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[15px] bg-[#F0EEFF]">
          <api.icon
            size={34}
            strokeWidth={1.8}
            color="#4D3ECA"
            fill="white"
          />
        </span>

        <span className="flex min-w-0 max-w-[260px] flex-1 flex-col gap-1">
          <span className="text-[15px] font-semibold leading-[1.4] text-[#172033]">
            {api.name}
          </span>
          <span className="whitespace-normal break-words text-[14px] font-normal leading-[1.5] text-[#64748B]">
            {api.description}
          </span>
        </span>
      </button>
    ))}
  </div>
) : selectedCategory === "Vehicle Verification API" ? (

  /* VEHICLE VERIFICATION API CARDS */
  <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
    {visibleVehicleVerificationApis.map((api) => (
      <button
        key={api.name}
        type="button"
        onClick={() => setSearchTerm(api.name)}
        title={`Search for ${api.name}`}
        className="
          group flex min-h-[112px] min-w-0 items-center gap-4
          rounded-[20px] border border-[#DCE5F2]
          bg-white px-5 py-5 text-left font-[inherit]
          shadow-[0_2px_8px_rgba(30,50,90,0.02)]
          transition-all duration-200
          hover:-translate-y-0.5 hover:border-[#B9ACFF]
          hover:shadow-[0_8px_22px_rgba(77,62,202,0.09)]
          focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-[#6547F8]
        "
      >
        <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[15px] bg-[#F0EEFF]">
          <api.icon
            size={34}
            strokeWidth={1.8}
            color="#4D3ECA"
            fill="white"
          />
        </span>

        <span className="flex min-w-0 max-w-[260px] flex-1 flex-col gap-1">
          <span className="text-[15px] font-semibold leading-[1.4] text-[#172033]">
            {api.name}
          </span>
          <span className="whitespace-normal break-words text-[14px] font-normal leading-[1.5] text-[#64748B]">
            {api.description}
          </span>
        </span>
      </button>
    ))}
  </div>

) : selectedCategory === "GST Verification API" ? (

  /* GST VERIFICATION API CARDS */
  <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
    {visibleGstVerificationApis.map((api) => (
      <button
        key={api.name}
        type="button"
        onClick={() => setSearchTerm(api.name)}
        title={`Search for ${api.name}`}
        className="
          group flex min-h-[112px] min-w-0 items-center gap-4
          rounded-[20px] border border-[#DCE5F2]
          bg-white px-5 py-5 text-left font-[inherit]
          shadow-[0_2px_8px_rgba(30,50,90,0.02)]
          transition-all duration-200
          hover:-translate-y-0.5 hover:border-[#B9ACFF]
          hover:shadow-[0_8px_22px_rgba(77,62,202,0.09)]
          focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-[#6547F8]
        "
      >
        <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[15px] bg-[#F0EEFF]">
          <api.icon
            size={34}
            strokeWidth={1.8}
            color="#4D3ECA"
            fill="white"
          />
        </span>

        <span className="flex min-w-0 max-w-[260px] flex-1 flex-col gap-1">
          <span className="text-[15px] font-semibold leading-[1.4] text-[#172033]">
            {api.name}
          </span>
          <span className="whitespace-normal break-words text-[14px] font-normal leading-[1.5] text-[#64748B]">
            {api.description}
          </span>
        </span>
      </button>
    ))}
  </div>

) : selectedCategory === "Business Verification (KYB)" ? (
  <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
    {visibleBusinessVerificationApis.map((api) => (
      <button
        key={api.name}
        type="button"
        onClick={() => setSearchTerm(api.name)}
        title={`Search for ${api.name}`}
        className="
          group flex min-h-[112px] min-w-0 items-center gap-4
          rounded-[20px] border border-[#DCE5F2]
          bg-white px-5 py-5 text-left font-[inherit]
          shadow-[0_2px_8px_rgba(30,50,90,0.02)]
          transition-all duration-200
          hover:-translate-y-0.5 hover:border-[#B9ACFF]
          hover:shadow-[0_8px_22px_rgba(77,62,202,0.09)]
          focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-[#6547F8]
        "
      >
        <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[15px] bg-[#F0EEFF]">
          <api.icon
            size={34}
            strokeWidth={1.8}
            color="#4D3ECA"
            fill="white"
          />
        </span>

        <span className="flex min-w-0 max-w-[260px] flex-1 flex-col gap-1">
          <span className="text-[15px] font-semibold leading-[1.4] text-[#172033]">
            {api.name}
          </span>
          <span className="whitespace-normal break-words text-[14px] font-normal leading-[1.5] text-[#64748B]">
            {api.description}
          </span>
        </span>
      </button>
    ))}
  </div>
): selectedCategory === "Employee & Income Verification" ? (
  <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
    {visibleEmployeeIncomeVerificationApis.map((api) => (
      <button
        key={api.name}
        type="button"
        onClick={() => setSearchTerm(api.name)}
        title={`Search for ${api.name}`}
        className="
          group flex min-h-[112px] min-w-0 items-center gap-4
          rounded-[20px] border border-[#DCE5F2]
          bg-white px-5 py-5 text-left font-[inherit]
          shadow-[0_2px_8px_rgba(30,50,90,0.02)]
          transition-all duration-200
          hover:-translate-y-0.5 hover:border-[#B9ACFF]
          hover:shadow-[0_8px_22px_rgba(77,62,202,0.09)]
          focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-[#6547F8]
        "
      >
        <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[15px] bg-[#F0EEFF]">
          <api.icon
            size={34}
            strokeWidth={1.8}
            color="#4D3ECA"
            fill="white"
          />
        </span>

        <span className="flex min-w-0 max-w-[260px] flex-1 flex-col gap-1">
          <span className="text-[15px] font-semibold leading-[1.4] text-[#172033]">
            {api.name}
          </span>
          <span className="whitespace-normal break-words text-[14px] font-normal leading-[1.5] text-[#64748B]">
            {api.description}
          </span>
        </span>
      </button>
    ))}
  </div>
) : selectedCategory === "Number Intelligence" ? (
  <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
    {visibleNumberIntelligenceApis.map((api) => (
      <button
        key={api.name}
        type="button"
        onClick={() => setSearchTerm(api.name)}
        title={`Search for ${api.name}`}
        className="
          group flex min-h-[112px] min-w-0 items-center gap-4
          rounded-[20px] border border-[#DCE5F2]
          bg-white px-5 py-5 text-left font-[inherit]
          shadow-[0_2px_8px_rgba(30,50,90,0.02)]
          transition-all duration-200
          hover:-translate-y-0.5 hover:border-[#B9ACFF]
          hover:shadow-[0_8px_22px_rgba(77,62,202,0.09)]
          focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-[#6547F8]
        "
      >
        <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[15px] bg-[#F0EEFF]">
          <api.icon
            size={34}
            strokeWidth={1.8}
            color="#4D3ECA"
            fill="white"
          />
        </span>

        <span className="flex min-w-0 max-w-[260px] flex-1 flex-col gap-1">
          <span className="text-[15px] font-semibold leading-[1.4] text-[#172033]">
            {api.name}
          </span>
          <span className="whitespace-normal break-words text-[14px] font-normal leading-[1.5] text-[#64748B]">
            {api.description}
          </span>
        </span>
      </button>
    ))}
  </div>
) : selectedCategory === "Geolocation & Address Intelligence" ? (
  <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
    {visibleGeolocationAddressApis.map((api) => (
      <button
        key={api.name}
        type="button"
        onClick={() => setSearchTerm(api.name)}
        title={`Search for ${api.name}`}
        className="
          group flex min-h-[112px] min-w-0 items-center gap-4
          rounded-[20px] border border-[#DCE5F2]
          bg-white px-5 py-5 text-left font-[inherit]
          shadow-[0_2px_8px_rgba(30,50,90,0.02)]
          transition-all duration-200
          hover:-translate-y-0.5 hover:border-[#B9ACFF]
          hover:shadow-[0_8px_22px_rgba(77,62,202,0.09)]
          focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-[#6547F8]
        "
      >
        <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[15px] bg-[#F0EEFF]">
          <api.icon
            size={34}
            strokeWidth={1.8}
            color="#4D3ECA"
            fill="white"
          />
        </span>

        <span className="flex min-w-0 max-w-[260px] flex-1 flex-col gap-1">
          <span className="text-[15px] font-semibold leading-[1.4] text-[#172033]">
            {api.name}
          </span>
          <span className="whitespace-normal break-words text-[14px] font-normal leading-[1.5] text-[#64748B]">
            {api.description}
          </span>
        </span>
      </button>
    ))}
  </div>
) : selectedCategory === "eSign" ? (
  <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
    {eSignApis.map((api) => (
      <button
        key={api.name}
        type="button"
        onClick={() => setSearchTerm(api.name)}
        title={`Search for ${api.name}`}
        className="
          group flex min-h-[112px] min-w-0 items-center gap-4
          rounded-[20px] border border-[#DCE5F2]
          bg-white px-5 py-5 text-left font-[inherit]
          shadow-[0_2px_8px_rgba(30,50,90,0.02)]
          transition-all duration-200
          hover:-translate-y-0.5 hover:border-[#B9ACFF]
          hover:shadow-[0_8px_22px_rgba(77,62,202,0.09)]
          focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-[#6547F8]
        "
      >
        <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[15px] bg-[#F0EEFF]">
          <api.icon
            size={34}
            strokeWidth={1.8}
            color="#4D3ECA"
            fill="white"
          />
        </span>

        <span className="flex min-w-0 max-w-[260px] flex-1 flex-col gap-1">
          <span className="text-[15px] font-semibold leading-[1.4] text-[#172033]">
            {api.name}
          </span>

          <span className="whitespace-normal break-words text-[14px] font-normal leading-[1.5] text-[#64748B]">
            {api.description}
          </span>
        </span>
      </button>
    ))}
  </div>
  ) : null}
</section>
          )}
</div>
</section>
      {/* Verification API benefits */}
      
<section
  id="verification-benefits"
  className="verification-benefits"
  aria-labelledby="verification-benefits-heading"
>
  <div className="verification-benefits__inner">

    {/* Desktop layout — existing design */}
    <div className="hidden md:block">
      <h2
        id="verification-benefits-heading"
        className="verification-benefits__heading"
      >
        Why Use Our <span>Verification APIs</span>
        <br /> for Your Business?
      </h2>

      <div className="verification-benefits__visual">
        <img
          src="/images/verification-benefits-full.png"
          alt="Verification API benefits"
          className="verification-benefits__full-image"
          loading="lazy"
        />
      </div>
    </div>

    {/* Mobile layout */}
    <div className="px-4 pb-8 pt-5 md:hidden">

      <h2 className="mb-4 text-left text-[34px] font-semibold leading-[1.12] tracking-[-1.2px] text-[#111111] text-left">
        Where Every
        <br />
        <span className="text-[#4D3ECA]">
          Verification Matters
        </span>
      </h2>

      <p className="mb-5 text-[15px] leading-[1.45] text-[#555555]">
        From fintech and education to logistics and insurance,
        SmartVerify helps businesses verify customers, validate
        documents, and prevent fraud with reliable verification
        solutions tailored to their industry needs.
      </p>

      {/* Man visual */}
      <div className="mb-5 h-[125px] w-full overflow-hidden">
        <img
          src="/images/verification-benefits-mobile.png"
          alt="Business professional using the SmartVerify dashboard"
          className="h-full w-full object-cover object-[72%_center]"
          loading="lazy"
        />
      </div>

      {/* Benefit cards */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-7">

        <article className="flex min-w-0 flex-col !items-start border-r border-[#E5E5E5] pr-3 !text-left">
          <img
            src="/images/benefit-coverage.png"
            alt=""
            className="mb-3 h-10 w-10 object-contain"
          />
          <h3 className="mb-2 text-[14px] font-semibold leading-[1.3] text-[#171717]">
            Coverage From Day One
          </h3>
          <p className="text-[11px] leading-[1.5] text-[#666666]">
            Verification starts as soon as a user registers, before
            they even enter your system. SmartVerify verifies phone
            numbers, emails, and devices to stop bots in their tracks
            before fraud takes hold.
          </p>
        </article>

        <article className="flex min-w-0 flex-col !items-start !text-left">
          <img
            src="/images/benefit-integration.png"
            alt=""
            className="mb-3 h-10 w-10 object-contain"
          />
          <h3 className="mb-2 text-[14px] font-semibold leading-[1.3] text-[#171717]">
            Built for Easy Integration
          </h3>
          <p className="text-[11px] leading-[1.5] text-[#666666]">
            Integrate with assurance using clean, well-structured
            APIs and a sandbox environment that lets your team test
            everything before going live.
          </p>
        </article>

        <article className="flex min-w-0 flex-col !items-start !text-left border-r border-[#E5E5E5] pr-3">
          <img
            src="/images/benefit-onboarding.png"
            alt=""
            className="mb-3 h-10 w-10 object-contain"
          />
          <h3 className="mb-2 text-[14px] font-semibold leading-[1.3] text-[#171717]">
            Seamless Customer Onboarding
          </h3>
          <p className="text-[11px] leading-[1.5] text-[#666666]">
            Make customer verification simple with fast and reliable
            checks that reduce friction and help users complete
            onboarding smoothly.
          </p>
        </article>

        <article className="flex min-w-0 flex-col !items-start !text-left">
          <img
            src="/images/benefit-faster.png"
            alt=""
            className="mb-3 h-10 w-10 object-contain"
          />
          <h3 className="mb-2 text-[14px] font-semibold leading-[1.3] text-[#171717]">
            Go Live Faster
          </h3>
          <p className="text-[11px] leading-[1.5] text-[#666666]">
            Integrate, test, and launch verification workflows
            quickly with developer-friendly APIs and a smooth
            implementation process.
          </p>
        </article>

      </div>
    </div>

  </div>
</section>
</>
);
}
