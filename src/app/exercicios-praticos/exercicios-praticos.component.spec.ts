import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExerciciosPraticosComponent } from './exercicios-praticos.component';

describe('ExerciciosPraticosComponent', () => {
  let component: ExerciciosPraticosComponent;
  let fixture: ComponentFixture<ExerciciosPraticosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciciosPraticosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciciosPraticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
