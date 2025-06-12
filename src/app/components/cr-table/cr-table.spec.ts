import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrTable } from './cr-table';

describe('CrTable', () => {
  let component: CrTable;
  let fixture: ComponentFixture<CrTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
