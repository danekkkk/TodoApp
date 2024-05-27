import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneTodosComponent } from './done-todos.component';

describe('DoneTodosComponent', () => {
  let component: DoneTodosComponent;
  let fixture: ComponentFixture<DoneTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoneTodosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoneTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
