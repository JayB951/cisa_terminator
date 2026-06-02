import domain1 from "../data/domains/domain1.json";
import domain2 from "../data/domains/domain2.json";

export function getDomainData(
  domainId: string
) {
  switch (domainId) {
    case "domain1":
      return domain1;

    case "domain2":
      return domain2;

    default:
      return null;
  }
}
