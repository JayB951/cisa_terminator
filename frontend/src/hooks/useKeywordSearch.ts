import { useKeywordStore } from "../store/keywordStore";

import { searchKeyword } from "../services/keywordSearchService";

export default function useKeywordSearch() {
  const setResults =
    useKeywordStore(
      (state) => state.setResults
    );

  const executeSearch = (
    keyword: string
  ) => {
    const results =
      searchKeyword(keyword);

    setResults(results);
  };

  return {
    executeSearch,
  };
}
