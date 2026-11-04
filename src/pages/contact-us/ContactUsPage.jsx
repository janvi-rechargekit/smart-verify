import FooterSection from "../../sections/FooterSection.jsx";
function ContactUsHeroSection() {
  return (
    <main className="w-full overflow-hidden bg-white scroll-smooth">
      <section
        className="
          relative isolate w-full overflow-hidden
          bg-[url('/images/contact-us-background.png')]
          bg-cover bg-center bg-no-repeat
          min-h-[315px]
          sm:min-h-[420px]
          lg:min-h-[min(40vw,760px)]
        "
      >
        <div
          className="
            relative mx-auto grid w-full max-w-[1920px]
            grid-cols-1 items-center
            px-5 py-10
            sm:px-8 sm:py-12
            lg:min-h-[inherit]
            lg:grid-cols-[1fr_1fr]
            lg:px-[10.5%] lg:py-8
          "
        >
          {/* LEFT: Heading, description and CTA */}
          <div className="relative z-10 flex min-w-0 flex-col items-start">
            <img
              src="/images/contact-us-heading.png"
              alt="Get in Touch with Our Identity Verification & API Experts"
              draggable="false"
              className="mt-20
                block h-auto w-full max-w-[510px]
                lg:max-w-[min(40vw,740px)]
              "
            />

            <div
              className="
                mt-5 max-w-[520px]
                text-[15px] font-normal leading-[1.35]
                text-[#4A454A]
                sm:mt-6 sm:text-[14px]
                lg:mt-[26px] lg:text-[15px]
              "
            >
              <p>
                Whether you're looking to integrate verification APIs,
                streamline your KYC process, automate customer onboarding,
                or explore enterprise verification solutions, the
                SmartVerify team is here to help.
              </p>

              <p className="mt-6">
                Our specialists can guide you through API integration,
                product selection, pricing, technical implementation,
                and custom verification workflows tailored to your
                business.
              </p>
            </div>

            
<a
  href="#talk-to-our-team"
  className="
    mt-5 inline-flex items-center justify-center
    rounded-[6px] border border-[#EA3369]
    bg-[#EA3369] px-5 py-2
    text-[11px] font-medium text-white
    transition-all duration-300 ease-in-out
    hover:bg-white hover:text-[#EA3369]
    active:bg-white
    sm:mt-6 sm:px-7 sm:py-3 sm:text-[13px]
  "
>
  Contact Us
</a>
          </div>

{/* Right visual — desk touches the bottom background */}
<div className="relative mt-8 flex min-h-[320px] min-w-0 items-end justify-center sm:min-h-[420px] lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:h-[70%] lg:w-[52%] lg:min-h-0">
  <img
    src="/images/contact-us-visual.png"
    alt="Professional reviewing information on a tablet beside a laptop"
    draggable="false"
    className="absolute bottom-0 right-0 block h-full w-full object-contain object-bottom"
  />
</div>
        </div>
      </section>
    </main>
  );
}

function ContactDetailsSection() {
  return (
<section
  id="talk-to-our-team"
  className="w-full scroll-mt-6 bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-0 lg:py-[84px]"
>      <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-[190px]">

        {/* Left: Contact form */}
        <div className="min-w-0">
          <h2 className="text-[24px] font-bold leading-[1.25] tracking-[-0.035em] text-[#171717] sm:text-[28px]">
            Talk to Our Team
          </h2>

          <p className="mt-4 max-w-[390px] text-[14px] font-normal leading-[1.5] text-[#929292]">
            Have questions about registration, services,
            transactions, commissions, or anything else?
            Send us a message and our team will get back to you.
          </p>

          <form
            className="mt-8 space-y-4"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-first-name" className="mb-2 block text-[12px] font-medium text-[#384152]">
                  First name
                </label>
                <input
                  id="contact-first-name"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  required
                  className="h-[42px] w-full rounded-[6px] border border-[#D9DDE5] bg-white px-3 text-[13px] text-[#252525] outline-none placeholder:text-[#7D8798] focus:border-[#4D3ECA]"
                />
              </div>

              <div>
                <label htmlFor="contact-last-name" className="mb-2 block text-[12px] font-medium text-[#384152]">
                  Last name
                </label>
                <input
                  id="contact-last-name"
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  required
                  className="h-[42px] w-full rounded-[6px] border border-[#D9DDE5] bg-white px-3 text-[13px] text-[#252525] outline-none placeholder:text-[#7D8798] focus:border-[#4D3ECA]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-email" className="mb-2 block text-[12px] font-medium text-[#384152]">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
                className="h-[42px] w-full rounded-[6px] border border-[#D9DDE5] bg-white px-3 text-[13px] text-[#252525] outline-none placeholder:text-[#7D8798] focus:border-[#4D3ECA]"
              />
            </div>

            <div>
              <label htmlFor="contact-phone" className="mb-2 block text-[12px] font-medium text-[#384152]">
                Phone number
              </label>
              <div className="flex h-[42px] w-full items-center overflow-hidden rounded-[6px] border border-[#D9DDE5] bg-white focus-within:border-[#4D3ECA]">
                <select
                  aria-label="Country"
                  name="country"
                  defaultValue="US"
                  className="h-full w-[68px] shrink-0 border-0 bg-transparent pl-3 pr-1 text-[13px] text-[#657084] outline-none"
                >
                  <option value="US">US</option>
                  <option value="IN">IN</option>
                  <option value="GB">GB</option>
                  <option value="AU">AU</option>
                </select>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="h-full min-w-0 flex-1 border-0 bg-transparent px-2 text-[13px] text-[#252525] outline-none placeholder:text-[#7D8798]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-2 block text-[12px] font-medium text-[#384152]">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Leave us a message..."
                required
                className="w-full resize-y rounded-[6px] border border-[#D9DDE5] bg-white px-3 py-3 text-[13px] text-[#252525] outline-none placeholder:text-[#7D8798] focus:border-[#4D3ECA]"
              />
            </div>

            <label className="flex items-start gap-2 text-[12px] leading-[1.4] text-[#7C8799]">
              <input
                type="checkbox"
                name="privacy"
                required
                className="mt-[2px] h-3 w-3 shrink-0 accent-[#4D3ECA]"
              />
              <span>You agree to our friendly privacy policy.</span>
            </label>

            <button
              type="submit"
              className="w-full rounded-[7px] bg-gradient-to-r from-[#29209B] via-[#B20D2B] to-[#F52F68] px-4 py-3 text-[13px] font-medium text-white transition-opacity duration-300 hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact information */}
        <div className="min-w-0">
          <h2 className="max-w-[360px] text-[24px] font-bold leading-[1.25] tracking-[-0.035em] text-[#171717] sm:text-[28px]">
            Connect With Us and Get Started
          </h2>

          <p className="mt-4 max-w-[390px] text-[14px] font-normal leading-[1.5] text-[#929292]">
            From getting started to managing your digital
            services, our team is here to make your journey easier.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8">
            {/* Email */}
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#FFF0EC] text-[#FF624F]">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                  <rect x="3.5" y="5" width="17" height="14" rx="3" stroke="currentColor" strokeWidth="1.7" />
                  <path d="m5.5 7.5 6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[16px] font-semibold text-[#222222]">Email</h3>
              <p className="mt-2 text-[13px] leading-[1.5] text-[#929292]">
                Our friendly team is here to help.
              </p>
              <a href="mailto:hi@agency.com" className="mt-2 inline-block text-[13px] text-[#7650F5] hover:underline">
                hi@agency.com
              </a>
            </div>

            {/* Phone */}
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#F4EFFF] text-[#9864FF]">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                  <path d="M7 3.5h3l1.5 4-2 1.8a15 15 0 0 0 5.2 5.2l1.8-2 4 1.5v3c0 1.1-.9 2-2 2C10.3 19 5 13.7 5 7.5c0-2.2.9-4 2-4Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[16px] font-semibold text-[#222222]">Phone</h3>
              <p className="mt-2 text-[13px] leading-[1.5] text-[#929292]">
                Mon–Fri from 8am to 5pm.
              </p>
              <a href="tel:+15550000000" className="mt-2 inline-block text-[13px] text-[#7650F5] hover:underline">
                +1 (555) 000-0000
              </a>
            </div>

            {/* Office */}
            <div className="sm:col-span-2">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#E8FAF1] text-[#4BD990]">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                  <path d="M20 10.2c0 5-8 10.3-8 10.3S4 15.2 4 10.2a8 8 0 1 1 16 0Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
                </svg>
              </div>
              <h3 className="text-[16px] font-semibold text-[#222222]">Office</h3>
              <p className="mt-2 text-[13px] leading-[1.5] text-[#929292]">
                Come say hello at our office HQ.
              </p>
              <address className="mt-2 text-[13px] not-italic leading-[1.5] text-[#7650F5]">
                100 Smith Street
                <br />
                Collingwood VIC 3066 AU
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function ContactUsPage() {
  return (
    <>
      <ContactUsHeroSection />
      <ContactDetailsSection />
      <FooterSection />
    </>
  );
}