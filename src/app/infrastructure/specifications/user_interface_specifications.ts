import { FIRST_PAGE } from "src/app/constants/user_interface_constants";

function isPageGreaterThanTheFirstPage(currentPage: number): boolean {
  return currentPage > FIRST_PAGE;
}

function isPageSmallerThanTheLastPage(
  currentPage: number,
  numberOfPages: number,
): boolean {
  return currentPage < numberOfPages;
}

function isPageSmallerThanTheFirstPage(currentPage: number): boolean {
  return currentPage < FIRST_PAGE;
}

function isPageGreaterThanTheLastPage(
  currentPage: number,
  numberOfPages: number,
): boolean {
  return currentPage > numberOfPages;
}

export {
  isPageGreaterThanTheFirstPage,
  isPageSmallerThanTheLastPage,
  isPageSmallerThanTheFirstPage,
  isPageGreaterThanTheLastPage,
};
