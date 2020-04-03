import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Irpf2020Component } from './irpf2020.component';

describe('Irpf2020Component', () => {
  let component: Irpf2020Component;
  let fixture: ComponentFixture<Irpf2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Irpf2020Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Irpf2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
