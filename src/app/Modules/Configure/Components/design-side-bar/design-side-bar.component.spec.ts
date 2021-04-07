import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSideBarComponent } from './design-side-bar.component';

describe('DesignSideBarComponent', () => {
  let component: DesignSideBarComponent;
  let fixture: ComponentFixture<DesignSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
