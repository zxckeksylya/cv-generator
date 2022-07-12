import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-info-page',
  templateUrl: './employee-info-page.component.html',
  styleUrls: ['./employee-info-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeInfoPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
