import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignInspectorComponent } from './design-inspector.component';

describe('DesignInspectorComponent', () => {
  let component: DesignInspectorComponent;
  let fixture: ComponentFixture<DesignInspectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignInspectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignInspectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
