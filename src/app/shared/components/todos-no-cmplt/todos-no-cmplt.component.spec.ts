import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosNoCmpltComponent } from './todos-no-cmplt.component';

describe('TodosNoCmpltComponent', () => {
  let component: TodosNoCmpltComponent;
  let fixture: ComponentFixture<TodosNoCmpltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosNoCmpltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosNoCmpltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
