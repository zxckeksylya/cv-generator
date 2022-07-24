import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsEntitiesCreatePageComponent } from './skills-entities-create-page.component';

describe('SkillsEntitiesCreatePageComponent', () => {
  let component: SkillsEntitiesCreatePageComponent;
  let fixture: ComponentFixture<SkillsEntitiesCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsEntitiesCreatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsEntitiesCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
