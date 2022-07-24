import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibilitiesEntitiesCreatePageComponent } from './responsibilities-entities-create-page.component';

describe('ResponsibilitiesEntitiesCreatePageComponent', () => {
  let component: ResponsibilitiesEntitiesCreatePageComponent;
  let fixture: ComponentFixture<ResponsibilitiesEntitiesCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsibilitiesEntitiesCreatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsibilitiesEntitiesCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
