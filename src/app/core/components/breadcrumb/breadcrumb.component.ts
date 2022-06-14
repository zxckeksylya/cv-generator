import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { BreadcrumbItem } from '../../interfaces/breadcrump-item.interface';
import { breadcrumbSelector } from '../../store/breadcrumb/breadcrumb.selctors';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  public breadcrumbs: BreadcrumbItem[] = [];

  public lustBreadcumb!: BreadcrumbItem;
  private destroy$ = new Subject<void>();

  constructor(private store: Store, private cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.store
      .pipe(
        select(breadcrumbSelector),
        takeUntil(this.destroy$),
        // map((state: any[]) =>
        //   state.reduce(
        //     (acc: any, item: any, index: number) => [
        //       ...acc,
        //       { ...item, path: index ? state[index - 1].path + item.path : item.path },
        //     ],
        //     [],
        //   ),
        // ),
      )
      .subscribe((state) => {
        this.breadcrumbs = state;
        this.lustBreadcumb = state[state.length - 1];
        this.cdr.detectChanges();
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
