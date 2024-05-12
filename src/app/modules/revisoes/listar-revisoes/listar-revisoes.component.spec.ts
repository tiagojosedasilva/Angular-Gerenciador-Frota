import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRevisoesComponent } from './listar-revisoes.component';

describe('ListarRevisoesComponent', () => {
  let component: ListarRevisoesComponent;
  let fixture: ComponentFixture<ListarRevisoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarRevisoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarRevisoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
