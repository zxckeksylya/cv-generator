import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { GetEmployee, UpdateEmployee } from '../../../../core/interfaces/employee.interface';
import { INameId } from '../../../../core/interfaces/name-id.interface';
import { Language } from '../../../../core/interfaces/language.interface';
import { Skill } from 'src/app/core/interfaces/skill.interface';
import { OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AppState } from 'src/app/core/store/app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public employee: GetEmployee;

  @Output() public submitted = new EventEmitter<UpdateEmployee>();

  public form: FormGroup;

  public role: INameId[] = [];

  public languages: Language[] = [];

  public skills: Skill[] = [];

  private destroy$ = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private store: Store<AppState>,
    private cdr: ChangeDetectorRef,
  ) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['employee'] && changes['employee'].currentValue) {
      this.form.patchValue(changes['employee'].currentValue, { emitEvent: false });
    }
  }

  public ngOnInit(): void {}

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
