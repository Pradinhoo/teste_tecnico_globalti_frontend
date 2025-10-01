import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTransferencias } from './listar-transferencias';

describe('ListarTransferencias', () => {
  let component: ListarTransferencias;
  let fixture: ComponentFixture<ListarTransferencias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarTransferencias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTransferencias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
