import { create } from "zustand";

interface KeywordResult {
  keyword: string;
  page: number;
}

interface KeywordState {
  results: KeywordResult[];

  setResults: (
    results: KeywordResult[]
  ) => void;

  clearResults: () => void;
}

export const useKeywordStore =
  create<KeywordState>((set) => ({
    results: [],

    setResults: (results) =>
      set({
        results,
      }),

    clearResults: () =>
      set({
        results: [],
      }),
  }));
