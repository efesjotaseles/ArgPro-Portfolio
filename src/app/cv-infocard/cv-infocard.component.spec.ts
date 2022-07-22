import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvInfocardComponent } from './cv-infocard.component';

describe('CvInfocardComponent', () => {
  let component: CvInfocardComponent;
  let fixture: ComponentFixture<CvInfocardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvInfocardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvInfocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
