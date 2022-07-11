import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public readonly faEarthEurope = faEarthEurope;

  public ngOnInit(): void {}
}
