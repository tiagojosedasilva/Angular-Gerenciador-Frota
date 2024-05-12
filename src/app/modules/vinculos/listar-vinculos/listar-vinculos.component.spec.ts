import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVinculosComponent } from './listar-vinculos.component';

describe('ListarVinculosComponent', () => {
  let component: ListarVinculosComponent;
  let fixture: ComponentFixture<ListarVinculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarVinculosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarVinculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
