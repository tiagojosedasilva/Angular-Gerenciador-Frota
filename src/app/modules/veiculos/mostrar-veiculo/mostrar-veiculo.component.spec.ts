import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarVeiculoComponent } from './mostrar-veiculo.component';

describe('MostrarVeiculoComponent', () => {
  let component: MostrarVeiculoComponent;
  let fixture: ComponentFixture<MostrarVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarVeiculoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostrarVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
