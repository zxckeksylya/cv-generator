import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRolesEntitiesCreatePageComponent } from './project-roles-entities-create-page.component';

describe('ProjectRolesEntitiesCreatePageComponent', () => {
  let component: ProjectRolesEntitiesCreatePageComponent;
  let fixture: ComponentFixture<ProjectRolesEntitiesCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectRolesEntitiesCreatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectRolesEntitiesCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
