import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Exercicio06Page } from './exercicio06.page';

describe('Exercicio06Page', () => {
  let component: Exercicio06Page;
  let fixture: ComponentFixture<Exercicio06Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercicio06Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio06Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
