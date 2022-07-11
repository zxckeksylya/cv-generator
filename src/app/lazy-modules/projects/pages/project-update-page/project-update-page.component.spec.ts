import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUpdatePageComponent } from './project-update-page.component';

describe('ProjectUpdatePageComponent', () => {
  let component: ProjectUpdatePageComponent;
  let fixture: ComponentFixture<ProjectUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectUpdatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
