import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChamadosComponent } from './add-chamados.component';

describe('AddChamadosComponent', () => {
  let component: AddChamadosComponent;
  let fixture: ComponentFixture<AddChamadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddChamadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddChamadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
