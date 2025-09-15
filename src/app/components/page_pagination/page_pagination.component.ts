import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FIRST_PAGE } from "src/app/constants/user_interface_constants";
import {
  isPageGreaterThanTheFirstPage,
  isPageGreaterThanTheLastPage,
  isPageSmallerThanTheFirstPage,
  isPageSmallerThanTheLastPage,
} from "src/app/infrastructure/specifications/user_interface_specifications";

@Component({
  selector: "page-pagination",
  templateUrl: "./page_pagination.component.html",
  styleUrls: ["./page_pagination.component.scss"],
  imports: [CommonModule],
})
class PagePagination {
  @Input() public currentPage: number = 1;
  @Input() public numberOfPages: number = 1;
  @Output() public previousButtonClick = new EventEmitter<number>();
  @Output() public nextButtonClick = new EventEmitter<number>();
  @Output() public pagePaginationInputChange = new EventEmitter<number>();

  public onPreviousButtonClick(): void {
    if (isPageGreaterThanTheFirstPage(this.currentPage)) {
      this.previousButtonClick.emit(this.currentPage - 1);
    }
  }

  public onNextButtonClick(): void {
    if (isPageSmallerThanTheLastPage(this.currentPage, this.numberOfPages)) {
      this.nextButtonClick.emit(this.currentPage + 1);
    }
  }

  public onPagePaginationInputChange(event: Event): void {
    let updatedCurrentPage = Number((event.target as HTMLInputElement).value);

    if (isPageSmallerThanTheFirstPage(updatedCurrentPage)) {
      updatedCurrentPage = FIRST_PAGE;
    }
    if (isPageGreaterThanTheLastPage(updatedCurrentPage, this.numberOfPages)) {
      updatedCurrentPage = this.numberOfPages;
    }

    this.pagePaginationInputChange.emit(updatedCurrentPage);
  }

  public isPageGreaterThanTheFirstPage() {
    return isPageGreaterThanTheFirstPage(this.currentPage);
  }

  public isPageSmallerThanTheLastPage() {
    return isPageSmallerThanTheLastPage(this.currentPage, this.numberOfPages);
  }
}

export default PagePagination;
