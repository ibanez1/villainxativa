import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionExplanationCardsComponent } from './section-explanation-cards.component';

describe('SectionExplanationCardsComponent', () => {
  let component: SectionExplanationCardsComponent;
  let fixture: ComponentFixture<SectionExplanationCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionExplanationCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionExplanationCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
