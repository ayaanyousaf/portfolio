import { useState, useEffect } from "react";

// Hook to match media query, returns true if the query matches the window.

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);

    // Update state if it changes
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    // Cleanup
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
