import { detectDomain } from "./domainDetectionService";

import { getDomainData } from "./domainLoaderService";

export function loadReview(
  url: string
) {
  const domainId =
    detectDomain(url);

  if (!domainId) {
    return null;
  }

  const domain =
    getDomainData(domainId);

  return {
    pdfUrl: url,
    domain,
  };
}
