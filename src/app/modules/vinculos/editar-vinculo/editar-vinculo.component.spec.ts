import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVinculoComponent } from './editar-vinculo.component';

describe('EditarVinculoComponent', () => {
  let component: EditarVinculoComponent;
  let fixture: ComponentFixture<EditarVinculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarVinculoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarVinculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
