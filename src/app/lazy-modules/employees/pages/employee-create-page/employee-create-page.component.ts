import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-create-page',
  templateUrl: './employee-create-page.component.html',
  styleUrls: ['./employee-create-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeCreatePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
