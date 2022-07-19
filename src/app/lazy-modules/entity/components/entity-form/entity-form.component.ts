import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Name } from 'src/app/core/interfaces/name.interface';

@Component({
  selector: 'app-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityFormComponent implements OnChanges {
  @Input() public name: string;

  @Output() public submitted = new EventEmitter<Name>();

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private location: Location) {
    this.initForm();
  }

  public ngOnChanges(changes: SimpleChanges & { name: SimpleChange }): void {
    const nameCurrentValue = changes.name?.currentValue;
    if (nameCurrentValue) {
      this.form.patchValue({ name: nameCurrentValue }, { emitEvent: false });
    }
  }

  public onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    this.submitted.emit(this.form.getRawValue());
  }

  public back(): void {
    this.form.reset();
    this.location.back();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }
}
