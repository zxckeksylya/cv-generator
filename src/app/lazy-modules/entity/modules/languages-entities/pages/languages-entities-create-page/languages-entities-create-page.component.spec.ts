import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesEntitiesCreatePageComponent } from './languages-entities-create-page.component';

describe('LanguagesEntitiesCreatePageComponent', () => {
  let component: LanguagesEntitiesCreatePageComponent;
  let fixture: ComponentFixture<LanguagesEntitiesCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagesEntitiesCreatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguagesEntitiesCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
