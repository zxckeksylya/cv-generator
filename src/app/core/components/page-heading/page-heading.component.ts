import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { PageHeadingItem } from '../../interfaces/page-heading-item.interface';
import { AppState } from '../../store/app.reducers';
import { pageHeadingSelector } from '../../store/page-heading/page-heading.selctors';

@Component({
  selector: 'app-page-heading',
  templateUrl: './page-heading.component.html',
  styleUrls: ['./page-heading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeadingComponent implements OnInit, OnDestroy {
  public pageHeadingItem!: PageHeadingItem;

  private destroy$ = new Subject<void>();

  constructor(private store: Store<AppState>, private cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.store
      .pipe(select(pageHeadingSelector), takeUntil(this.destroy$))
      .subscribe((pageHeading) => {
        this.pageHeadingItem = pageHeading;
        this.cdr.markForCheck();
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
