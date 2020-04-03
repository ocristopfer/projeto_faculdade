import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Exercicio08Page } from './exercicio08.page';

describe('Exercicio08Page', () => {
  let component: Exercicio08Page;
  let fixture: ComponentFixture<Exercicio08Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercicio08Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio08Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
