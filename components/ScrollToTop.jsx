import { UnstyledButton } from "@mantine/core";
import React from "react";
import { HiArrowNarrowUp } from "react-icons/hi";

export function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return true;
}

export default function ScrollToTop() {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = React.useCallback(() => {
    setScrolled(window.scrollY > 400);
  }, [setScrolled]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <UnstyledButton
      type="button"
      onClick={() => scrollToTop()}
      className={`
      transition-all  bg-white ease-linear text-primary shadow-gray-600 shadow  grid place-content-center rounded-full fixed bottom-10 right-10
      ${!scrolled ? "h-0 w-0  overflow-hidden" : "h-12 w-12 "}`}
    >
      <HiArrowNarrowUp className="  h-6 w-6" />
    </UnstyledButton>
  );
}
