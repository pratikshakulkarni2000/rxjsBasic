import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosCmpltComponent } from './todos-cmplt.component';

describe('TodosCmpltComponent', () => {
  let component: TodosCmpltComponent;
  let fixture: ComponentFixture<TodosCmpltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosCmpltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosCmpltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
