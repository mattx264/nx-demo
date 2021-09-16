import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { OriginalityVerificationComponent } from './originality-verification.component';

describe('OriginalityVerificationComponent', () => {
  let component: OriginalityVerificationComponent;
  let fixture: ComponentFixture<OriginalityVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OriginalityVerificationComponent],
      providers: [provideMockStore({initialState:{
        CurrentClasses:'',
        CourseCode:''
      }})],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginalityVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
