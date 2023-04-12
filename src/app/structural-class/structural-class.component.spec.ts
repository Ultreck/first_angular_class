import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralClassComponent } from './structural-class.component';

describe('StructuralClassComponent', () => {
  let component: StructuralClassComponent;
  let fixture: ComponentFixture<StructuralClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
