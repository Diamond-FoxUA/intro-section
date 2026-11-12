import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" aria-label="Hero">
      <div className="flex flex-col items-center justify-center gap-10">
        <div>
          <picture>
            <source
              width={960}
              height={1280}
              media="(min-width: 1440px)"
              src="/images/image-hero-desktop.png"
            />

            <Image
              width={375}
              height={780}
              src="/images/image-hero-mobile.png"
              alt="Hero Image"
              priority
            />
          </picture>
        </div>

        <div className="flex flex-col gap-5 px-4 w-full">
          <h1 className="text-foreground text-[39px] font-extrabold text-center">
            Make remote work
          </h1>
          <p className="text-center font-semibold text-gray">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>

          <a
            href="#"
            className="text-background font-semibold flex justify-center items-center w-fit py-3 px-6 border border-transparent bg-foreground hover:bg-transparent hover:border-foreground hover:text-foreground rounded-2xl mx-auto mt-2 mb-5 transition-colors duration-300"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
