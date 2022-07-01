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
import { CreateProject, Project } from '../../../../core/interfaces/project.interface';
import { RoutingConstants } from '../../../../core/constants/routing.constants';
import { INameId } from 'src/app/core/interfaces/name-id.interface';
import { getArrayIdOutINameId } from '../../../../core/utils/get-array-id-out-i-name-id.util';
import { formatDate } from '../../../../core/utils/format-date.util';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectFormComponent implements OnInit, OnChanges {
  @Input() public project: Project;

  @Output() public submitted = new EventEmitter<CreateProject>();

  public form: FormGroup;

  public projectRole: INameId[] = [
    {
      id: '6122a10c4d2043df6456eb1a',
      name: 'Software Engineer',
    },
  ];

  public specializations: INameId[] = [
    {
      id: '6122b0e5615f8cfb441bca92',
      name: 'React',
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

    const { startDate, endDate, specializations, responsibilities, projectRoles } =
      this.form.getRawValue();
    const project: CreateProject = this.form.getRawValue();
    project.startDate = formatDate(startDate);
    project.endDate = formatDate(endDate);
    project.specializations = getArrayIdOutINameId(specializations);
    project.responsibilities = getArrayIdOutINameId(responsibilities);
    project.projectRoles = getArrayIdOutINameId(projectRoles);
    this.submitted.emit(project);
  }

  public backToProjects(): void {
    this.route.navigate([RoutingConstants.MAIN, RoutingConstants.PROJECTS]);
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
      projectRoles: '',
      specializations: '',
      responsibilities: '',
    });
  }
}
