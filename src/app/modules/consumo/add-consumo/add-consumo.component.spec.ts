import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsumoComponent } from './add-consumo.component';

describe('AddConsumoComponent', () => {
  let component: AddConsumoComponent;
  let fixture: ComponentFixture<AddConsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddConsumoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
