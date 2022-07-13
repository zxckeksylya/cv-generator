import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/core/interfaces/user.interface';
import { RoutingConstants } from '../../../../core/constants/routing.constants';
import { AppState } from '../../../../core/store/app.reducers';
import { setAuthorizationUserAction } from '../../../../core/store/authorization/authorization.actions';
import { userSelector } from '../../../../core/store/authorization/authorization.selectors';
import { clearAppStateAction } from '../../../../core/store/core/core.actions';
import { UserDropdownActions } from '../../enums/user-dropdown-actions.enum';
import { ModalService, ModalOptions } from '../../../../core/services/modal.service';
import { UserModalComponent } from '../user-modal/user-modal.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileComponent implements OnInit, OnDestroy {
  public user: User | null;

  public dataSource = [UserDropdownActions.PROFILE, UserDropdownActions.LOGOUT];

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store<AppState>,
    private cdr: ChangeDetectorRef,
    private route: Router,
    private modal: ModalService,
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

  public changeAction(action: UserDropdownActions): void {
    switch (action) {
      case UserDropdownActions.PROFILE:
        this.createProfileModal();
        break;
      case UserDropdownActions.LOGOUT:
        this.logout();
        break;
    }
  }

  private createProfileModal(): void {
    this.modal.openModal({
      i18nHeaderKey: 'USER_MODAL.TITLE',
      content: UserModalComponent,
      closable: false,
      params: { user: this.user },
    } as ModalOptions);
  }

  private logout(): void {
    this.store.dispatch(clearAppStateAction());
    this.route.navigate([RoutingConstants.AUTHORIZATION]);
  }
}
