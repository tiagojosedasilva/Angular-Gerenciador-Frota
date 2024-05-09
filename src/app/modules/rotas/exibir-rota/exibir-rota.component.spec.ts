import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirRotaComponent } from './exibir-rota.component';

describe('ExibirRotaComponent', () => {
  let component: ExibirRotaComponent;
  let fixture: ComponentFixture<ExibirRotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExibirRotaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExibirRotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
