import { useCallback } from "react";

import { useViewerStore } from "../store/viewerStore";

export default function useReviewLoader() {
  const setPdfUrl =
    useViewerStore(
      (state) => state.setPdfUrl
    );

  const loadReview =
    useCallback(
      (url: string) => {
        if (!url.trim()) {
          return false;
        }

        setPdfUrl(url);

        return true;
      },
      [setPdfUrl]
    );

  return {
    loadReview,
  };
}
