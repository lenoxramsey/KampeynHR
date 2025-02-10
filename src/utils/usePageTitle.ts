import { useEffect } from "react";

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = `${title} | Kampeyn`;
    return () => {
      document.title = "Kampeyn";
    };
  }, [title]);
}
