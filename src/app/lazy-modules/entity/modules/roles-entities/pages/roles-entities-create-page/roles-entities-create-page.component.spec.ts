import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesEntitiesCreatePageComponent } from './roles-entities-create-page.component';

describe('RolesEntitiesCreatePageComponent', () => {
  let component: RolesEntitiesCreatePageComponent;
  let fixture: ComponentFixture<RolesEntitiesCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesEntitiesCreatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesEntitiesCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
