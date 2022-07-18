import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsEntitiesTablePageComponent } from './levels-entities-table-page.component';

describe('LevelsEntitiesTablePageComponent', () => {
  let component: LevelsEntitiesTablePageComponent;
  let fixture: ComponentFixture<LevelsEntitiesTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelsEntitiesTablePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelsEntitiesTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
