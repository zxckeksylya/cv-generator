import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesEntitiesTablePageComponent } from './roles-entities-table-page.component';

describe('RolesEntitiesTablePageComponent', () => {
  let component: RolesEntitiesTablePageComponent;
  let fixture: ComponentFixture<RolesEntitiesTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesEntitiesTablePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesEntitiesTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
