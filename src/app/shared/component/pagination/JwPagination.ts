import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

// import paginate = require('jw-paginate');
import paginate from 'jw-paginate';

@Component({
    // moduleId: module.id,
    selector: 'jw-pagination',
    template: `<div class="pagination-container margin-top-20 margin-bottom-20" *ngIf="totalElement !== undefined || totalElement > 0">
                        <nav class="pagination">
                            <ul>
                                <li [ngClass]="{disabled:pager.currentPage === 1}" class="pagination-arrow poiter">
                                    <a (click)="setPage(pager.currentPage - 1)" class="ripple-effect"><i class="icon-material-outline-keyboard-arrow-left"></i></a>
                                </li>
                                <li *ngFor="let page of pager.pages" [ngClass]="{activePaging:pager.currentPage === page}" class="poiter">
                                    <a (click)="setPage(page)" class="ripple-effect">{{page}}</a>
                                </li>
                                <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" class="pagination-arrow poiter">
                                    <a (click)="setPage(pager.currentPage + 1)" class="ripple-effect"><i class="icon-material-outline-keyboard-arrow-right"></i></a>
                                </li>
                            </ul>
                        </nav>
                    </div>`
})

export class JwPaginationComponent implements OnInit {
    @Input() totalElement = 0;
    @Output() changePage = new EventEmitter<any>(true);
    @Input() pageIndex: number;
    @Input() pageSize = 12;
    @Input() maxPages = 4;

    pager: any = {};

    ngOnInit(): void {
        // set page if items array isn't empty
        // if (this.totalRecord === undefined) {
        this.setPage(this.pageIndex);
        // }
    }

    public setPage(page: number): void {
        // get new pager object for specified page
        this.pager = paginate(this.totalElement, page, this.pageSize, this.maxPages);

        // call change page function in parent component
        this.changePage.emit(page);
    }
}