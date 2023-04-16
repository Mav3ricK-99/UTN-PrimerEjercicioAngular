import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoEdadesComponent } from './calculo-edades.component';

describe('CalculoEdadesComponent', () => {
  let component: CalculoEdadesComponent;
  let fixture: ComponentFixture<CalculoEdadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculoEdadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculoEdadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
