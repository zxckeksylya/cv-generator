import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibilitiesEntitiesUpdatePageComponent } from './responsibilities-entities-update-page.component';

describe('ResponsibilitiesEntitiesUpdatePageComponent', () => {
  let component: ResponsibilitiesEntitiesUpdatePageComponent;
  let fixture: ComponentFixture<ResponsibilitiesEntitiesUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsibilitiesEntitiesUpdatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsibilitiesEntitiesUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
