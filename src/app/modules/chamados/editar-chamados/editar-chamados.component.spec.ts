import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarChamadosComponent } from './editar-chamados.component';

describe('EditarChamadosComponent', () => {
  let component: EditarChamadosComponent;
  let fixture: ComponentFixture<EditarChamadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarChamadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarChamadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
