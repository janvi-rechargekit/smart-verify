function ShowcaseCard({
  className,
  title,
  image,
  imageAlt = "",
}) {
  return (
    <article className={`showcase-card ${className}`}>
      <div
        className={`showcase-card__media ${
          image
            ? "showcase-card__media--image"
            : "showcase-card__media--blank"
        }`}
      >
        {image && (
          <img
            src={image}
            alt={imageAlt}
            draggable="false"
          />
        )}
      </div>

      <div className="showcase-card__label">
        {title}
      </div>
    </article>
  );
}
function ApiCheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 28 28"
      fill="none"
      className="h-[27px] w-[27px] shrink-0"
    >
      <path
        d="M23.3 13a9.5 9.5 0 1 1-3-6.7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="m8.5 13.8 3.7 3.7L23.5 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function VerificationShowcase() {
  return (
    <div className="verification-showcase">
      {/* Connector lines behind the cards */}
      <svg
        aria-hidden="true"
        className="showcase-connectors"
        viewBox="0 0 1620 710"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M 550 76 H 1042"
          stroke="#A5A1A5"
          strokeWidth="1.2"
          strokeDasharray="2 3"
        />

        <path
          d="M 0 584 H 1620"
          stroke="#A5A1A5"
          strokeWidth="1.2"
          strokeDasharray="2 3"
        />

        <path
          d="M 550 112 H 582 V 270 H 690"
          stroke="#9E8AFF"
          strokeWidth="1.6"
          strokeDasharray="2 3"
        />

        <path
          d="M 1042 112 H 1010 V 270 H 930"
          stroke="#9E8AFF"
          strokeWidth="1.6"
          strokeDasharray="2 3"
        />

        <path
          d="M 550 515 H 582 V 356 H 690"
          stroke="#9E8AFF"
          strokeWidth="1.6"
          strokeDasharray="2 3"
        />

        <path
          d="M 930 356 H 1010 V 505 H 1042"
          stroke="#9E8AFF"
          strokeWidth="1.6"
          strokeDasharray="2 3"
        />

        <path
          d="M 200 0 V 710"
          stroke="#A5A1A5"
          strokeWidth="1.2"
          strokeDasharray="2 4"
        />

        <path
          d="M 1417 0 V 710"
          stroke="#A5A1A5"
          strokeWidth="1.2"
          strokeDasharray="2 4"
        />

        <path
          d="M 145 648 H 686 V 680"
          stroke="#C1B1FF"
          strokeWidth="1"
          strokeDasharray="2 3"
        />

        <path
          d="M 846 648 V 680 H 1470"
          stroke="#C1B1FF"
          strokeWidth="1"
          strokeDasharray="2 3"
        />
      </svg>
      
      {/* Central shield */}
      <div className="showcase-shield">
        <img
          src="/images/Smart verify Enables.gif"
          alt="SmartVerify protection shield"
          draggable="false"
        />
      </div>

      {/* Center pill */}
      <div className="showcase-api-pill">
        <ApiCheckIcon />
        <span>SmartVerify API enables</span>
      </div>
      

      {/* Upper-left card */}
      <ShowcaseCard
        className="showcase-card--document"
        title="Document OCR"
        image="/images/Document OCR.gif"
      />

      {/* Upper-right card.
          The source image includes its own bottom title strip,
          so crop that strip before displaying our separate label. */}
      <ShowcaseCard
        className="showcase-card--identity"
        title="Identity Verification"
        image="/images/Identity Verification.gif"
        imageAlt="Driving licence and identity verification"
        cropImageBottom
      />

      {/* Lower-left cards */}
      <ShowcaseCard
        className="showcase-card--number"
        title="Number Intelligence"
         image="/images/Number Intelligence.gif"
      />

      <ShowcaseCard
        className="showcase-card--face"
        title="Face Authentication"
        image="/images/Face Authentication.gif"
        imageAlt="Face authentication verification"
      />

      {/* Lower-right cards */}
      <ShowcaseCard
        className="showcase-card--digital"
        title="Digital KYC & eKYC"
        image="/images/Digital KYC & eKYC.gif"
        imageAlt="Digital KYC verification"
      />

      <ShowcaseCard
        className="showcase-card--esign"
        title="eSign"
        image="/images/esign.gif"

      />
    </div>
  );
}