import { FIRST_PAGE } from "../../../../constants/user_interface_constants";
import {
  isPageGreaterThanTheFirstPage,
  isPageGreaterThanTheLastPage,
  isPageSmallerThanTheFirstPage,
  isPageSmallerThanTheLastPage,
} from "../../../../infrastructure/specifications/user_interface_specifications";

describe("Test Module UserInterfaceSpecifications", () => {
  it('Test If Method "isPageGreaterThanTheFirstPage" Returns True If Current Page Is Greater Than The First Page', () => {
    expect(isPageGreaterThanTheFirstPage(FIRST_PAGE + 1)).toBeTruthy();
    expect(isPageGreaterThanTheFirstPage(FIRST_PAGE)).toBeFalsy();
  });

  it('Test If Method "isPageSmallerThanTheLastPage" Returns True If Current Page Is Smaller Than The Last Page', () => {
    expect(
      isPageSmallerThanTheLastPage(FIRST_PAGE - 1, FIRST_PAGE),
    ).toBeTruthy();
    expect(isPageSmallerThanTheLastPage(FIRST_PAGE, FIRST_PAGE)).toBeFalsy();
  });

  it('Test If Method "isPageSmallerThanTheFirstPage" Returns True If Current Page Is Smaller Than The First Page', () => {
    expect(isPageSmallerThanTheFirstPage(FIRST_PAGE - 1)).toBeTruthy();
    expect(isPageSmallerThanTheFirstPage(FIRST_PAGE)).toBeFalsy();
  });

  it('Test If Method "isPageGreaterThanTheLastPage" Returns True If Current Page Is Greater Than The Last Page', () => {
    expect(
      isPageGreaterThanTheLastPage(FIRST_PAGE + 1, FIRST_PAGE),
    ).toBeTruthy();
    expect(isPageGreaterThanTheLastPage(FIRST_PAGE, FIRST_PAGE)).toBeFalsy();
  });
});
