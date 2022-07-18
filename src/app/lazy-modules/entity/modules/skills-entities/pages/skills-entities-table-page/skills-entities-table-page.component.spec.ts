import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsEntitiesTablePageComponent } from './skills-entities-table-page.component';

describe('SkillsEntitiesTablePageComponent', () => {
  let component: SkillsEntitiesTablePageComponent;
  let fixture: ComponentFixture<SkillsEntitiesTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsEntitiesTablePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsEntitiesTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
