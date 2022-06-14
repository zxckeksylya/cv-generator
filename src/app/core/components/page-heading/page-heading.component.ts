import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { breadcrumbSelector } from '../../store/breadcrumb/breadcrumb.selctors';
import { BreadcrumbItem } from '../../interfaces/breadcrump-item.interface';

@Component({
  selector: 'app-page-heading',
  templateUrl: './page-heading.component.html',
  styleUrls: ['./page-heading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeadingComponent implements OnInit, OnDestroy {
  public lustBreadcumb!: BreadcrumbItem;

  private destroy$ = new Subject<void>();

  constructor(private store: Store, private cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.store
      .pipe(select(breadcrumbSelector), takeUntil(this.destroy$))
      .subscribe((breadcrumbs) => {
        this.lustBreadcumb = breadcrumbs[breadcrumbs.length - 1];
        this.cdr.markForCheck();
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
