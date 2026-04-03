"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

type SmoothScrollLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  offsetSelector?: string;
};

export default function SmoothScrollLink({
  href,
  onClick,
  offsetSelector = ".top-nav",
  ...props
}: SmoothScrollLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (!href || !href.startsWith("#")) return;

    const id = href.slice(1);
    const target = id ? document.getElementById(id) : document.body;
    if (!target) return;

    event.preventDefault();

    const header = document.querySelector<HTMLElement>(offsetSelector);
    const headerOffset = header ? header.getBoundingClientRect().height : 0;
    const top =
      target.getBoundingClientRect().top + window.scrollY - headerOffset - 12;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });

    if (id) {
      window.history.pushState(null, "", `#${id}`);
    } else {
      window.history.pushState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }
  }

  return <a href={href} onClick={handleClick} {...props} />;
}
