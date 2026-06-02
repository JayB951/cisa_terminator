import { useEffect } from "react";

import { useViewerStore } from "../store/viewerStore";
import { useDomainStore } from "../store/domainStore";

import { detectDomain } from "../services/domainDetectionService";
import { getDomainData } from "../services/domainLoaderService";

export default function useDomainLoader() {
  const pdfUrl = useViewerStore(
    (state) => state.pdfUrl
  );

  const setCurrentDomain =
    useDomainStore(
      (state) => state.setCurrentDomain
    );

  useEffect(() => {
    if (!pdfUrl) return;

    const domainId =
      detectDomain(pdfUrl);

    if (!domainId) return;

    const domain =
      getDomainData(domainId);

    if (!domain) return;

    setCurrentDomain(domain);
  }, [
    pdfUrl,
    setCurrentDomain,
  ]);
}
