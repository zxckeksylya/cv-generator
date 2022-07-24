import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsEntitiesUpdatePageComponent } from './levels-entities-update-page.component';

describe('LevelsEntitiesUpdatePageComponent', () => {
  let component: LevelsEntitiesUpdatePageComponent;
  let fixture: ComponentFixture<LevelsEntitiesUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelsEntitiesUpdatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelsEntitiesUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
