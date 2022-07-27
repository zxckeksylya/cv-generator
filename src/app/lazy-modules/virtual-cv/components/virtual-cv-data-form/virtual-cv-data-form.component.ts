import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { CollapseItem } from 'src/app/core/interfaces/collapse-item.interface';
import { VirtualCVData } from '../../../../core/interfaces/virtual-cv.interface';
import { formatDate } from '../../../../core/utils/format-date.util';

@Component({
  selector: 'app-virtual-cv-data-form',
  templateUrl: './virtual-cv-data-form.component.html',
  styleUrls: ['./virtual-cv-data-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualCvDataFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public data: VirtualCVData;

  @Output() public submitted = new EventEmitter<VirtualCVData>();

  public form: FormGroup = this.fb.group({
    education: null,
    foreignLanguage: this.fb.array([]),
    general: null,
    projects: this.fb.array([]),
    resume: null,
    skills: this.fb.array([]),
  });

  public foreignLanguageCollapseItems: CollapseItem[] = [];

  public projectsCollapseItems: CollapseItem[] = [];

  public skillsCollapseItems: CollapseItem[] = [];

  public readonly faXmark = faXmark;

  private destroy$ = new Subject<void>();

  constructor(private fb: FormBuilder) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      changes['data'].currentValue.foreignLanguage.forEach((element: { name: string }) => {
        this.addForeignLanguage(element.name);
      });

      changes['data'].currentValue.skills.forEach((element: { skillType: string }) =>
        this.addSkill(element.skillType),
      );

      changes['data'].currentValue.projects.forEach((element: { name: string }) =>
        this.addProject(element.name),
      );
      this.form.patchValue(changes['data'].currentValue, { emitEvent: false });
    }
  }

  public ngOnInit(): void {
    if ((this.form.get('foreignLanguage') as FormArray).controls.length === 0) {
      this.addForeignLanguage('new lang');
    }
    if ((this.form.get('projects') as FormArray).controls.length === 0) {
      this.addProject('new project');
    }
    if ((this.form.get('skills') as FormArray).controls.length === 0) {
      this.addSkill('new skill');
    }
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    this.submitted.emit(this.formatForm(this.form.getRawValue()));
  }

  public addForeignLanguage(name: string): void {
    this.foreignLanguageCollapseItems = [
      ...this.foreignLanguageCollapseItems,
      { active: false, name, disabled: false },
    ];
    (this.form.get('foreignLanguage') as FormArray).push(new FormControl());
  }
  public addProject(name: string): void {
    this.projectsCollapseItems = [
      ...this.projectsCollapseItems,
      { active: false, name, disabled: false },
    ];
    (this.form.get('projects') as FormArray).push(new FormControl());
  }
  public addSkill(name: string): void {
    this.skillsCollapseItems = [
      ...this.skillsCollapseItems,
      { active: false, name, disabled: false },
    ];
    (this.form.get('skills') as FormArray).push(new FormControl());
  }

  private formatForm(obj: VirtualCVData): VirtualCVData {
    const { projects, ...data } = obj;
    const newData: VirtualCVData = {
      ...data,
      projects: projects.map(item => {
        const { endDate, startDate, ...itemData } = item;
        return {
          ...itemData,
          endDate: formatDate(endDate),
          startDate: formatDate(startDate),
        };
      }),
    };
    return newData;
  }
}
