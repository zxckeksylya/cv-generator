import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRolesEntitiesTablePageComponent } from './project-roles-entities-table-page.component';

describe('ProjectRolesEntitiesTablePageComponent', () => {
  let component: ProjectRolesEntitiesTablePageComponent;
  let fixture: ComponentFixture<ProjectRolesEntitiesTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectRolesEntitiesTablePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectRolesEntitiesTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
