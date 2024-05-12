import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRevisaoComponent } from './editar-revisao.component';

describe('EditarRevisaoComponent', () => {
  let component: EditarRevisaoComponent;
  let fixture: ComponentFixture<EditarRevisaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarRevisaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarRevisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
