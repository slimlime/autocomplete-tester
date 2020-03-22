import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { NameableAutocompleteComponent } from "./nameable-autocomplete.component";

describe("NameableAutocompleteComponent", () => {
  let component: NameableAutocompleteComponent;
  let fixture: ComponentFixture<NameableAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NameableAutocompleteComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NameableAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
