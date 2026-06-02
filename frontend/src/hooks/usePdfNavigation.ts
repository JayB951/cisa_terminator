import { useViewerStore } from "../store/viewerStore";

export default function usePdfNavigation() {
  const currentPage =
    useViewerStore(
      (state) => state.currentPage
    );

  const setCurrentPage =
    useViewerStore(
      (state) => state.setCurrentPage
    );

  const goToPage = (
    page: number
  ) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    setCurrentPage(
      currentPage + 1
    );
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(
        currentPage - 1
      );
    }
  };

  return {
    currentPage,
    goToPage,
    nextPage,
    previousPage,
  };
}
