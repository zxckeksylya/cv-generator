import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityMenuComponent } from './entity-menu.component';

describe('EntityMenuComponent', () => {
  let component: EntityMenuComponent;
  let fixture: ComponentFixture<EntityMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
