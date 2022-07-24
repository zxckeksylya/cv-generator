import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsEntitiesCreatePageComponent } from './levels-entities-create-page.component';

describe('LevelsEntitiesCreatePageComponent', () => {
  let component: LevelsEntitiesCreatePageComponent;
  let fixture: ComponentFixture<LevelsEntitiesCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelsEntitiesCreatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelsEntitiesCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
