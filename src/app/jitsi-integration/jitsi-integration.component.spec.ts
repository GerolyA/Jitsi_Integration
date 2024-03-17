import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JitsiIntegrationComponent } from './jitsi-integration.component';

describe('JitsiIntegrationComponent', () => {
  let component: JitsiIntegrationComponent;
  let fixture: ComponentFixture<JitsiIntegrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JitsiIntegrationComponent]
    });
    fixture = TestBed.createComponent(JitsiIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
