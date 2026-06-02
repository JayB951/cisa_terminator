export function detectDomain(
  url: string
): string | null {
  const normalized =
    url.toLowerCase();

  if (
    normalized.includes("domain1")
  ) {
    return "domain1";
  }

  if (
    normalized.includes("domain2")
  ) {
    return "domain2";
  }

  if (
    normalized.includes("domain3")
  ) {
    return "domain3";
  }

  if (
    normalized.includes("domain4")
  ) {
    return "domain4";
  }

  if (
    normalized.includes("domain5")
  ) {
    return "domain5";
  }

  return null;
}
