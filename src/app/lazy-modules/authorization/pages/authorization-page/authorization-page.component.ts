import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizationPageComponent implements OnInit {
  public faEarthEurope = faEarthEurope;

  constructor() {}

  ngOnInit(): void {}
}
