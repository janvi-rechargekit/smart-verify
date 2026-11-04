function CtaImageButton({
  href,
  label,
  image,
  hoverText,
  variant,
  showArrow = false,
  className = "",
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`cta-image-button cta-image-button--${variant} ${className}`}
    >
      <img src={image} alt="" className="cta-image cta-image--default" />

      <span
        aria-hidden="true"
        className={`cta-hover-face cta-hover-face--${variant}`}
      >
        <span>{hoverText}</span>

        {showArrow && (
          <svg viewBox="0 0 32 32" fill="none" className="cta-hover-arrow">
            <path
              d="M7 25 25 7M9 7h16v16"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
    </a>
  );
}

export default CtaImageButton;