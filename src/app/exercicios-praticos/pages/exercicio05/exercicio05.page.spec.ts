import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Exercicio05Page } from './exercicio05.page';

describe('Exercicio05Page', () => {
  let component: Exercicio05Page;
  let fixture: ComponentFixture<Exercicio05Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercicio05Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio05Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
