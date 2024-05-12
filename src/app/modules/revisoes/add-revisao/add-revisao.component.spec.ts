import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRevisaoComponent } from './add-revisao.component';

describe('AddRevisaoComponent', () => {
  let component: AddRevisaoComponent;
  let fixture: ComponentFixture<AddRevisaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRevisaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRevisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
