import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGenre } from './select-genre';

describe('SelectGenre', () => {
  let component: SelectGenre;
  let fixture: ComponentFixture<SelectGenre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectGenre],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectGenre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
