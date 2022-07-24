import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsEntitiesUpdatePageComponent } from './skills-entities-update-page.component';

describe('SkillsEntitiesUpdatePageComponent', () => {
  let component: SkillsEntitiesUpdatePageComponent;
  let fixture: ComponentFixture<SkillsEntitiesUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsEntitiesUpdatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsEntitiesUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
