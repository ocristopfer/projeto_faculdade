import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Exercicio01Page } from './exercicio01.page';

describe('Exercicio01Page', () => {
  let component: Exercicio01Page;
  let fixture: ComponentFixture<Exercicio01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercicio01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
