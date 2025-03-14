"use client";

import { scrollToHash } from "@/utils/scrollToHash";
import { useEffect } from "react";

export default function ScrollUp() {
  useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), []);

  useEffect(() => {
    const hash = window.location.hash.slice(1); // Remove the '#' character from the hash
    scrollToHash(hash);
  }, []);

  return null;
}
