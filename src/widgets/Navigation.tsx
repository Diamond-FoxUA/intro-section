"use client";
import { useState } from "react";

import { NAV_ITEMS } from "@/shared/constants/navigation";
import Icon from "@/shared/ui/Icon";

type NavigationProps = {
  onClose?: () => void;
};

export default function Navigation({ onClose }: NavigationProps) {
  const [currentNavItem, setCurrentNavItem] = useState<null | string>(null);

  return (
    <nav aria-label="Main Navigation">
      <ul className="text-[16px] flex flex-col lg:flex-row gap-5 lg:gap-9 text-gray font-semibold">
        {NAV_ITEMS.map((i) => (
          <li key={i.id} className="relative">
            {i.icon ? (
              <>
                <button
                  type="button"
                  aria-label={`show links of the ${i.id}`}
                  className="flex gap-3 lg:gap-2 items-center hover:text-foreground hover:fill-foreground group transition-colors duration-300 cursor-pointer"
                  onClick={() => {
                    if (currentNavItem === null) {
                      setCurrentNavItem(i.id);
                    } else {
                      setCurrentNavItem(null);
                    }
                  }}
                  onMouseEnter={() => {
                    setCurrentNavItem(i.id);
                  }}
                >
                  <span>{i.label}</span>
                  <span aria-hidden="true">
                    <Icon
                      name={i.icon}
                      width={10}
                      height={6}
                      className={`${currentNavItem === i.id ? "rotate-180" : "rotate-0"} transition-transform duration-300`}
                    />
                  </span>
                </button>
                {currentNavItem === i.id && (
                  <ul
                    className="lg:absolute lg:top-10 lg:right-0 lg:bg-white lg:rounded-2xl lg:gap-4 lg:shadow-2xl lg:py-5 lg:px-7 lg:pl-6.5 lg:min-w-32 flex flex-col gap-5 pt-5"
                    onMouseLeave={() => setCurrentNavItem(null)}
                  >
                    {i.id === "features"
                      ? i.featItems?.map((i) => (
                          <li key={i.label}>
                            <a
                              href="#"
                              onClick={onClose}
                              className="flex items-center gap-3 hover:text-foreground transition-colors duration-300 cursor-pointer"
                            >
                              <Icon
                                name={i.icon}
                                width={16}
                                height={16}
                                className=""
                              />
                              <span>{i.label}</span>
                            </a>
                          </li>
                        ))
                      : i.companyItems?.map((i) => (
                          <li
                            key={i.label}
                            className="hover:text-foreground transition-color duration-300 cursor-pointer"
                          >
                            <a
                              href="#"
                              onClick={onClose}
                              className="flex items-center gap-3 hover:text-foreground transition-colors duration-300 cursor-pointer"
                            >
                              {i.label}
                            </a>
                          </li>
                        ))}
                  </ul>
                )}
              </>
            ) : (
              <a
                key={i.id}
                href="#"
                onClick={onClose}
                className="hover:text-foreground"
              >
                {i.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
