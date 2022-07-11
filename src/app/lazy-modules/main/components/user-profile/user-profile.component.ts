import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/core/interfaces/user.interface';
import { RoutingConstants } from '../../../../core/constants/routing.constants';
import { UserModal } from '../../../../core/enums/user-modal.enum';
import { AppState } from '../../../../core/store/app.reducers';
import { setAuthorizationUserAction } from '../../../../core/store/authorization/authorization.actions';
import { userSelector } from '../../../../core/store/authorization/authorization.selectors';
import { clearAppStateAction } from '../../../../core/store/core/core.actions';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileComponent implements OnInit, OnDestroy {
  @ViewChild('title', { static: false })
  public title: TemplateRef<any>;

  @ViewChild('content', { static: false })
  public content: TemplateRef<any>;

  @ViewChild('footer', { static: false })
  public footer: TemplateRef<any>;

  public user: User | null;

  public dataSource = [UserModal.profile, UserModal.logout];

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store<AppState>,
    private cdr: ChangeDetectorRef,
    private route: Router,
    private modal: NzModalService,
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

  public changeAction(event: UserModal): void {
    if (event === UserModal.profile) {
      this.createProfileModal(this.title, this.content, this.footer);
    } else if (event === UserModal.logout) {
      this.logout();
    }
  }

  public createProfileModal(
    tplTitle: TemplateRef<any>,
    tplContent: TemplateRef<any>,
    tplFooter: TemplateRef<any>,
  ): void {
    this.modal.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzClosable: false,
    });
  }

  private logout(): void {
    this.store.dispatch(clearAppStateAction());
    this.route.navigate([RoutingConstants.AUTHORIZATION]);
  }
}
