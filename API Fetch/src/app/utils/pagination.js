/**
 * Return a centered window of page numbers, keeping both ends in range.
 * @param {number} currentPage
 * @param {number} totalPages
 * @param {number} maxVisible
 * @returns {number[]}
 */
export function getVisiblePages(currentPage, totalPages, maxVisible = 5) {
  const count = Math.min(maxVisible, Math.max(0, totalPages));
  const start = Math.max(1, Math.min(currentPage - Math.floor(count / 2), totalPages - count + 1));
  return Array.from({ length: count }, (_, index) => start + index);
}
