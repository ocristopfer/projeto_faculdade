import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Exercicio03Page } from './exercicio03.page';

describe('Exercicio03Page', () => {
  let component: Exercicio03Page;
  let fixture: ComponentFixture<Exercicio03Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercicio03Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
