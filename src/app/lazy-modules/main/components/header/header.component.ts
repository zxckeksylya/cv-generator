import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { faEarthEurope, faLanguage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public readonly faEarthEurope = faEarthEurope;
  public readonly faLanguage = faLanguage;

  public ngOnInit(): void {}
}
