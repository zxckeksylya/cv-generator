import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/core/interfaces/user.interface';
import { AppState } from '../../../../core/store/app.reducers';
import { setAuthorizationUserAction } from '../../../../core/store/authorization/authorization.actions';
import { userSelector } from '../../../../core/store/authorization/authorization.selectors';
import { clearAppStateAction } from '../../../../core/store/core/core.actions';
import { RoutingConstants } from '../../../../core/constants/routing.constants';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileComponent implements OnInit, OnDestroy {
  public user?: User;

  public isVisibleModalWindow = false;

  public dataSource = [
    {
      i18nKey: this.translateService.instant('USER_MODAL.PROFILE'),
      id: 0,
    },
    {
      i18nKey: this.translateService.instant('USER_MODAL.LOGOUT'),
      id: 1,
    },
  ];

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store<AppState>,
    private cdr: ChangeDetectorRef,
    private translateService: TranslateService,
    private route: Router,
  ) {}

  public ngOnInit(): void {
    this.store.dispatch(setAuthorizationUserAction());
    this.store.pipe(takeUntil(this.destroy$), select(userSelector)).subscribe((user) => {
      this.user = user;
      this.cdr.markForCheck();
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public changeAction(obj: any): void {
    if (obj.id === 0) {
      this.isVisibleModalWindow = true;
    } else if (obj.id === 1) {
      this.logout();
    }
  }

  public closeModalWindow(): void {
    this.isVisibleModalWindow = false;
  }

  private logout(): void {
    this.store.dispatch(clearAppStateAction());
    this.route.navigate([RoutingConstants.AUTHORIZATION]);
  }
}
