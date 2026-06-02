import keywordData from "../data/keywords/domain1-keywords.json";

export function searchKeyword(
  searchTerm: string
) {
  const term =
    searchTerm.toLowerCase();

  return keywordData.keywords.filter(
    (entry) =>
      entry.keyword.includes(term)
  );
}
