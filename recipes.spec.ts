import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipesComponent } from './recipes'; // <-- Cambio aquí

describe('RecipesComponent', () => { // <-- Cambio aquí
  let component: RecipesComponent; // <-- Cambio aquí
  let fixture: ComponentFixture<RecipesComponent>; // <-- Cambio aquí

  // ... el resto del código se mantiene igual

  beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [RecipesComponent] // <-- Cambio 1: Agregar "Component"
  })
  .compileComponents();

  fixture = TestBed.createComponent(RecipesComponent); // <-- Cambio 2: Agregar "Component"
  component = fixture.componentInstance;
  fixture.detectChanges();
});
});
