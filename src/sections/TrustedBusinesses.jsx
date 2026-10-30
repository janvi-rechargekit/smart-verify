
import LogoLoop from "../components/LogoLoop.jsx";

const topRowLogos = [
  {
    src: "/images/swapmoney.png",
    alt: "SwapMoney",
  },
  {
    src: "/images/spark-mudra.png",
    alt: "Spark Mudra",
  },
  {
    src: "/images/timble-ai.png",
    alt: "Timble AI",
  },
  {
    src: "/images/paybazaar.png",
    alt: "PayBazaar",
  },
];

const bottomRowLogos = [
  {
    src: "/images/spark-mudra.png",
    alt: "Spark Mudra",
  },
  {
    src: "/images/timble-ai.png",
    alt: "Timble AI",
  },
  {
    src: "/images/paybazaar.png",
    alt: "PayBazaar",
  },
  {
    src: "/images/paymintra.png",
    alt: "Paymintra",
  },
];

export default function TrustedBusinesses() {
  return (
    <section
  className="trusted-section !pb-4 lg:!pb-6"
  aria-labelledby="trusted-heading"
>
      <div className="trusted-section__inner">
        {/* Left-side heading */}
        <div className="trusted-section__content lg:translate-x-8 xl:translate-x-31">
          <h2
            id="trusted-heading"
            className="trusted-section__heading"
          >
            Over <span>500+ Businesses</span>
            <br />
            Trust SmartVerify Every
            <br />
            Day
          </h2>
        </div>

        {/* Right-side animated logo rows */}
        <div className="trusted-logos">
          <div className="trusted-logos__viewport">

            {/* Top row moves left */}
            <div className="trusted-logo-loop-wrap">
              <LogoLoop
                logos={topRowLogos}
                speed={50}
                direction="left"
                width="100%"
                logoHeight={56}
                gap={48}
                pauseOnHover={false}
                fadeOut={false}
                scaleOnHover={false}
                ariaLabel="Trusted business partners, first row"
                className="trusted-logo-loop"
              />
            </div>

            {/* Bottom row moves right */}
            <div className="trusted-logo-loop-wrap trusted-logo-loop-wrap--bottom">
              <LogoLoop
                logos={bottomRowLogos}
                speed={50}
                direction="right"
                width="100%"
                logoHeight={56}
                gap={48}
                pauseOnHover={false}
                fadeOut={false}
                scaleOnHover={false}
                ariaLabel="Trusted business partners, second row"
                className="trusted-logo-loop"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
