import { useEffect } from "react";

/**
 * Sets the document title (and optionally the meta description) for the
 * lifetime of the calling page, restoring the previous values on unmount.
 * The project is a client-only SPA with a single index.html and no meta
 * library, so this is the lightest way to give an individual route its
 * own title/description.
 */
export function usePageMeta(title: string, description?: string): void {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const meta = description ? document.querySelector('meta[name="description"]') : null;
    const previousDescription = meta?.getAttribute("content") ?? null;
    if (meta && description) {
      meta.setAttribute("content", description);
    }

    return () => {
      document.title = previousTitle;
      if (meta && previousDescription !== null) {
        meta.setAttribute("content", previousDescription);
      }
    };
  }, [title, description]);
}
