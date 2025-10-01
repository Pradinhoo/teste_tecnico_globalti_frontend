import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarTransferencia } from './criar-transferencia';

describe('CriarTransferencia', () => {
  let component: CriarTransferencia;
  let fixture: ComponentFixture<CriarTransferencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarTransferencia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarTransferencia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
