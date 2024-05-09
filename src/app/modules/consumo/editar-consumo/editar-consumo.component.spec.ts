import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConsumoComponent } from './editar-consumo.component';

describe('EditarConsumoComponent', () => {
  let component: EditarConsumoComponent;
  let fixture: ComponentFixture<EditarConsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarConsumoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
