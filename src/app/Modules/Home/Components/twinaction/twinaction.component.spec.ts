import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwinactionComponent } from './twinaction.component';

describe('TwinactionComponent', () => {
  let component: TwinactionComponent;
  let fixture: ComponentFixture<TwinactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwinactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwinactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
