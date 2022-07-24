import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRolesEntitiesUpdatePageComponent } from './project-roles-entities-update-page.component';

describe('ProjectRolesEntitiesUpdatePageComponent', () => {
  let component: ProjectRolesEntitiesUpdatePageComponent;
  let fixture: ComponentFixture<ProjectRolesEntitiesUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectRolesEntitiesUpdatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectRolesEntitiesUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
