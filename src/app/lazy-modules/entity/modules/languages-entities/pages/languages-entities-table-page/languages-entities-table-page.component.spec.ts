import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesEntitiesTablePageComponent } from './languages-entities-table-page.component';

describe('LanguagesEntitiesTablePageComponent', () => {
  let component: LanguagesEntitiesTablePageComponent;
  let fixture: ComponentFixture<LanguagesEntitiesTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagesEntitiesTablePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguagesEntitiesTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
