function ShowcaseCard({
  className,
  title,
  image,
  imageAlt = "",
}) {
  const centerVideo = [
    "showcase-card--number",
    "showcase-card--face",
    "showcase-card--digital",
    "showcase-card--esign",
  ].includes(className);

  return (
    <article className={`showcase-card ${className}`}>
      <div
  className={`showcase-card__media ${
    image
      ? "showcase-card__media--image"
      : "showcase-card__media--blank"
  } max-md:!flex max-md:!items-center max-md:!justify-center`}
>
        {image && (
          <video
            src={image}
            aria-label={imageAlt || title}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            controlsList="nodownload noplaybackrate noremoteplayback"
            preload="metadata"
            draggable="false"
            tabIndex={-1}
            className={`
              pointer-events-none select-none
              ${
                centerVideo
                  ? "max-md:!h-auto max-md:!w-auto max-md:!max-w-full max-md:!max-h-full max-md:object-centre"
                  : ""
              }
            `}
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

      {/* =====================================
          GREY CONNECTOR GUIDES
          ===================================== */}

      <svg
        aria-hidden="true"
        className="showcase-connectors"
        viewBox="0 0 1620 710"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Horizontal guides */}
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

        {/* Vertical guides */}
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

        {/* Lower decorative guides */}
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

      {/* =====================================
          FOUR ORIGINAL FIGMA CONNECTOR IMAGES
          ===================================== */}

      <div
        className="showcase-connector-layer"
        aria-hidden="true"
      >
        <img
          src="/images/showcase-connector-top-left.png"
          className="showcase-connector-image showcase-connector--top-left"
          alt=""
          draggable="false"
        />

        <img
          src="/images/showcase-connector-top-right.png"
          className="showcase-connector-image showcase-connector--top-right"
          alt=""
          draggable="false"
        />

        <img
          src="/images/showcase-connector-bottom-left.png"
          className="showcase-connector-image showcase-connector--bottom-left"
          alt=""
          draggable="false"
        />

        <img
          src="/images/showcase-connector-bottom-right.png"
          className="showcase-connector-image showcase-connector--bottom-right"
          alt=""
          draggable="false"
        />

        {/* Animated purple highlights */}
        <svg
          className="showcase-connector-animation"
          viewBox="0 0 1620 710"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <filter
              id="showcaseConnectorGlow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur
                stdDeviation="3"
                result="blur"
              />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g
            fill="none"
            stroke="#6442F5"
            strokeWidth="7"
            strokeLinecap="round"
            filter="url(#showcaseConnectorGlow)"
          >
            {/* Upper-left: towards shield */}
            <path
              className="connector-flow connector-flow--one"
              d="M 550 112 H 582 V 270 H 690"
              pathLength="1000"
            />

            {/* Upper-right: towards shield */}
            <path
              className="connector-flow connector-flow--two"
              d="M 1042 112 H 1010 V 270 H 930"
              pathLength="1000"
            />

            {/* Lower-left: towards shield */}
            <path
              className="connector-flow connector-flow--three"
              d="M 550 515 H 582 V 356 H 690"
              pathLength="1000"
            />

            {/* Lower-right: towards shield */}
            <path
              className="connector-flow connector-flow--four"
              d="M 1042 505 H 1010 V 356 H 930"
              pathLength="1000"
            />
          </g>
        </svg>
      </div>

      {/* =====================================
          CENTRAL SHIELD
          ===================================== */}

      <div className="showcase-shield">
        <video
          src="/videos/Smart%20verify%20Enables.mp4"
          aria-label="SmartVerify protection shield"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          draggable="false"
        />
      </div>

      {/* =====================================
          CENTER PILL
          ===================================== */}

      <div className="showcase-api-pill">
        <ApiCheckIcon />
        <span>SmartVerify API enables</span>
      </div>

      {/* =====================================
          UPPER-LEFT CARD
          ===================================== */}

      <ShowcaseCard
        className="showcase-card--document"
        title="Document OCR"
        image="/videos/Document OCR.mp4"
      />

      {/* =====================================
          UPPER-RIGHT CARD
          ===================================== */}

      <ShowcaseCard
        className="showcase-card--identity"
        title="Identity Verification"
        image="/videos/Identity Verification.mp4"
        imageAlt="Driving licence and identity verification"
      />

      {/* =====================================
          LOWER-LEFT CARDS
          ===================================== */}

      <ShowcaseCard
        className="showcase-card--number"
        title="Number Intelligence"
        image="/videos/Number Intelligence.mp4"
      />

      <ShowcaseCard
        className="showcase-card--face"
        title="Face Authentication"
        image="/videos/Face Authentication.mp4"
        imageAlt="Face authentication verification"
      />

      {/* =====================================
          LOWER-RIGHT CARDS
          ===================================== */}

      <ShowcaseCard
        className="showcase-card--digital"
        title="Digital KYC & eKYC"
        image="/videos/Digital KYC & eKYC.mp4"
        imageAlt="Digital KYC verification"
      />

      <ShowcaseCard
        className="showcase-card--esign"
        title="eSign"
        image="/videos/esign.mp4"
      />

    </div>
  );
}
