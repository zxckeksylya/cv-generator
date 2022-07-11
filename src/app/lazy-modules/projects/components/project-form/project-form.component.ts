import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutingConstants } from '../../../../core/constants/routing.constants';
import { GetProject, UpdateProject } from '../../../../core/interfaces/project.interface';
import { formatDate } from '../../../../core/utils/format-date.util';
import { getArrayIdOutINameId } from '../../../../core/utils/get-array-id-out-i-name-id.util';
import { INameId } from '../../../../core/interfaces/name-id.interface';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectFormComponent implements OnInit, OnChanges {
  @Input() public project: GetProject;

  @Output() public submitted = new EventEmitter<UpdateProject>();

  public form: FormGroup;

  public projectRole: INameId[] = [
    {
      id: '6122a10c4d2043df6456eb1a',
      name: 'Software Engineer',
    },
  ];

  public specializations: INameId[] = [
    {
      name: 'React',
      id: '6122b0e5615f8cfb441bca92',
    },
    {
      name: 'Redux',
      id: '61486ed8915b4ac15391f752',
    },
    {
      name: 'Jest',
      id: '61486ee3915b4ac15391f753',
    },
  ];

  public responsibilities: INameId[] = [
    {
      id: '6149cf7761c8580670948f93',
      name: 'Front end application architecture implementation',
    },
  ];

  constructor(private formBuilder: FormBuilder, private route: Router) {
    this.initForm();
  }

  public ngOnInit(): void {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['project'] && changes['project'].currentValue) {
      this.form.patchValue(changes['project'].currentValue, { emitEvent: false });
    }
  }

  public onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }

    this.submitted.emit(this.formatProject(this.form.getRawValue()));
  }

  public backToProjects(): void {
    this.form.reset();
    this.route.navigate([RoutingConstants.MAIN, RoutingConstants.PROJECTS]);
  }

  private formatProject(project: GetProject): UpdateProject {
    const { startDate, endDate, specializations, responsibilities, projectRoles, ...data } =
      project;
    const newProject: UpdateProject = {
      ...data,
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
      specializations: getArrayIdOutINameId(specializations),
      responsibilities: getArrayIdOutINameId(responsibilities),
      projectRoles: getArrayIdOutINameId(projectRoles),
    };
    return newProject;
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      secondName: '',
      startDate: '',
      endDate: '',
      teamSize: 0,
      tasksPerformed: '',
      description: '',
      projectRoles: [],
      specializations: [],
      responsibilities: [],
    });
  }
}
