import { create } from "zustand";

interface ViewerState {
  pdfUrl: string;

  currentPage: number;

  totalPages: number;

  zoom: number;

  searchText: string;

  selectedDomain: string | null;

  selectedTopic: string | null;

  setPdfUrl: (url: string) => void;

  setCurrentPage: (page: number) => void;

  setTotalPages: (pages: number) => void;

  setZoom: (zoom: number) => void;

  setSearchText: (text: string) => void;

  setSelectedDomain: (domain: string) => void;

  setSelectedTopic: (topic: string) => void;

  resetViewer: () => void;
}

export const useViewerStore =
  create<ViewerState>((set) => ({
    pdfUrl: "",

    currentPage: 1,

    totalPages: 0,

    zoom: 1,

    searchText: "",

    selectedDomain: null,

    selectedTopic: null,

    setPdfUrl: (url) =>
      set({
        pdfUrl: url,
      }),

    setCurrentPage: (page) =>
      set({
        currentPage: page,
      }),

    setTotalPages: (pages) =>
      set({
        totalPages: pages,
      }),

    setZoom: (zoom) =>
      set({
        zoom,
      }),

    setSearchText: (text) =>
      set({
        searchText: text,
      }),

    setSelectedDomain: (domain) =>
      set({
        selectedDomain: domain,
      }),

    setSelectedTopic: (topic) =>
      set({
        selectedTopic: topic,
      }),

    resetViewer: () =>
      set({
        pdfUrl: "",
        currentPage: 1,
        totalPages: 0,
        zoom: 1,
        searchText: "",
        selectedDomain: null,
        selectedTopic: null,
      }),
  }));
