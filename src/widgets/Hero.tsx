import { getImageProps } from "next/image";
import { preload } from "react-dom";

import Icon from "@/shared/ui/Icon";
import { CLIENTS } from "@/shared/constants/clients";

export default function Hero() {
  const common = {
    alt: "",
  };

  const {
    props: { srcSet: desktopSrcSet, src: desktopSrc },
  } = getImageProps({
    ...common,
    width: 480,
    height: 640,
    src: "/images/image-hero-desktop.png",
  });

  const {
    props: { srcSet: mobileSrcSet, src: mobileSrc, ...rest },
  } = getImageProps({
    ...common,
    width: 375,
    height: 780,
    src: "/images/image-hero-mobile.png",
  });

  preload(desktopSrc, {
    as: "image",
    imageSrcSet: desktopSrcSet,
    media: "(min-width: 1024px)",
    fetchPriority: "high",
  });
  preload(mobileSrc, {
    as: "image",
    imageSrcSet: mobileSrcSet,
    media: "(max-width: 1023px)",
    fetchPriority: "high",
  });

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="flex justify-center items-center w-full h-auto"
    >
      <div className="flex w-full flex-col lg:flex-row-reverse lg:items-stretch items-center justify-center gap-10 lg:gap-0 lg:max-w-275 lg:justify-between">
        <div className="shrink-0 lg:scale-90">
          <picture>
            <source
              width={480}
              height={640}
              media="(min-width: 1024px)"
              srcSet={desktopSrcSet}
            />
            <source
              width={375}
              height={780}
              media="(max-width: 1023px)"
              srcSet={mobileSrcSet}
            />

            <img
              {...rest}
              decoding="sync"
              fetchPriority="high"
              alt=""
              className="w-full max-w-93.75 lg:max-w-120 h-auto"
            />
          </picture>
        </div>

        <div className="flex flex-col justify-center gap-5 items-center lg:items-start lg:pt-15 lg:gap-11 lg:pr-4 w-full">
          <h1
            id="hero-heading"
            className="text-foreground text-[39px] lg:text-[80px] font-extrabold text-center lg:text-start leading-none"
          >
            <span className="lg:block">Make</span>{" "}
            <span className="lg:block">remote work</span>
          </h1>

          <p className="text-center lg:text-start font-semibold text-gray max-w-110">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>

          <a
            href="#"
            className="text-background font-semibold flex justify-center items-center w-fit py-3 px-6 border border-transparent bg-foreground hover:bg-transparent hover:border-foreground hover:text-foreground rounded-2xl mx-auto lg:mx-0 mt-2 mb-5 transition-colors duration-300"
          >
            Learn more
          </a>

          <ul className="flex gap-8 lg:pt-6">
            {CLIENTS.map((c) => (
              <li
                key={c.name}
                className="hover:scale-110 transition-transform duration-300"
              >
                <Icon
                  name={c.icon}
                  width={c.width}
                  height={c.height}
                  className="fill-gray-light"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
