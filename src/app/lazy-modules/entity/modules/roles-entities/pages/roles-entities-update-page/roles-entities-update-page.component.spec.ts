import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesEntitiesUpdatePageComponent } from './roles-entities-update-page.component';

describe('RolesEntitiesUpdatePageComponent', () => {
  let component: RolesEntitiesUpdatePageComponent;
  let fixture: ComponentFixture<RolesEntitiesUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesEntitiesUpdatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesEntitiesUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
