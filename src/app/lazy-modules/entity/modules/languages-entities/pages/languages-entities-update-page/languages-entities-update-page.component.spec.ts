import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesEntitiesUpdatePageComponent } from './languages-entities-update-page.component';

describe('LanguagesEntitiesUpdatePageComponent', () => {
  let component: LanguagesEntitiesUpdatePageComponent;
  let fixture: ComponentFixture<LanguagesEntitiesUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagesEntitiesUpdatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguagesEntitiesUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
