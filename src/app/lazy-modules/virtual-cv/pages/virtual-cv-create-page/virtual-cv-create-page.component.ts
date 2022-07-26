import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { RoutingConstants } from 'src/app/core/constants/routing.constants';
import { CV } from 'src/app/core/interfaces/cv.interface';
import { AppState } from 'src/app/core/store/app.reducers';
import { setBreadcrumbsAction } from 'src/app/core/store/breadcrumb/breadcrumb.actions';
import { setPageHeadingAction } from 'src/app/core/store/page-heading/page-heading.actions';
import { createVirtualCVAction } from 'src/app/core/store/virtual-cv/virtual-cv.actions';
import { GetEmployee } from '../../../../core/interfaces/employee.interface';
import { CreateVirtualCV } from '../../../../core/interfaces/virtual-cv.interface';
import { getCVSelector } from '../../../../core/store/cv/cv.selectors';
import { getEmployeesSelector } from '../../../../core/store/employess/employees.selectors';

@Component({
  selector: 'app-virtual-cv-create-page',
  templateUrl: './virtual-cv-create-page.component.html',
  styleUrls: ['./virtual-cv-create-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualCvCreatePageComponent implements OnInit, OnDestroy {
  public form: FormGroup;

  public employee: GetEmployee[] = [];

  public cvs: CV[] = [];

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef,
    private route: Router,
  ) {}

  public ngOnInit(): void {
    this.initForm();
    this.initPageInfo();
    this.initData();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    this.store.dispatch(
      createVirtualCVAction({ virtualCV: this.formatForm(this.form.getRawValue()) }),
    );
    this.route.navigate([RoutingConstants.MAIN, RoutingConstants.VIRTUAL_CVS]);
  }

  public onBack(): void {
    this.route.navigate([RoutingConstants.MAIN, RoutingConstants.VIRTUAL_CVS]);
  }
  private initForm(): void {
    this.form = this.formBuilder.group({
      userId: '',
      cvId: '',
    });
  }

  private formatForm(obj: any): CreateVirtualCV {
    const userId = obj.userId.id;
    const cvId = obj.cvId.id;
    return { userId, cvId };
  }

  private initPageInfo(): void {
    this.store.dispatch(
      setBreadcrumbsAction({
        breadcrumbs: [
          {
            i18nKey: 'BREADCRUMB.MAIN',
            path: `${RoutingConstants.MAIN}`,
          },
          {
            i18nKey: 'BREADCRUMB.VIRTUAL_CVS',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.VIRTUAL_CVS}`,
          },
          {
            i18nKey: 'BREADCRUMB.CREATE',
            path: `${RoutingConstants.MAIN}/${RoutingConstants.VIRTUAL_CVS}/${RoutingConstants.CREATE}`,
          },
        ],
      }),
    );
    this.store.dispatch(
      setPageHeadingAction({
        pageHeading: {
          i18nKeySection: 'PAGE-HEADING.SECTION.VIRTUAL_CVS',
          i18nKeyDescription: 'PAGE-HEADING.DESCRIPTION.CREATE.VIRTUAL_CVS',
        },
      }),
    );
  }

  private initData(): void {
    this.store.pipe(select(getEmployeesSelector), takeUntil(this.destroy$)).subscribe(employees => {
      this.employee = employees;
      this.cdr.markForCheck();
    });
    this.store.pipe(select(getCVSelector), takeUntil(this.destroy$)).subscribe(cvs => {
      this.cvs = cvs;
      this.cdr.markForCheck();
    });
  }
}
