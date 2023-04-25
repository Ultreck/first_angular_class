import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFavoriteComponent } from './contact-favorite.component';

describe('ContactFavoriteComponent', () => {
  let component: ContactFavoriteComponent;
  let fixture: ComponentFixture<ContactFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFavoriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
