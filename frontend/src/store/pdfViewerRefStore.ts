import { create } from "zustand";

interface PdfViewerRefState {
  jumpToPage:
    | ((page: number) => void)
    | null;

  setJumpToPage: (
    fn: (page: number) => void
  ) => void;
}

export const usePdfViewerRefStore =
  create<PdfViewerRefState>((set) => ({
    jumpToPage: null,

    setJumpToPage: (fn) =>
      set({
        jumpToPage: fn,
      }),
  }));
