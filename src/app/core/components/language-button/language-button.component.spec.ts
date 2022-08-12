import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateService } from '@ngx-translate/core';
import { AppTranslateModule } from '../../app-translate/app-translate.module';
import { Language } from '../../enums/language.enum';
import { LanguageButtonComponent } from './language-button.component';

describe('LanguageButtonComponent', () => {
  let component: LanguageButtonComponent;
  let fixture: ComponentFixture<LanguageButtonComponent>;
  const translateServiceStub = {
    use: (): void => {},
    getDefaultLang: (): string => 'string',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTranslateModule, HttpClientTestingModule],
      declarations: [LanguageButtonComponent],
      providers: [{ provide: TranslateService, useValue: translateServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set language', () => {
    component.ngOnInit();
    expect(component.language).toEqual(translateServiceStub.getDefaultLang());
  });

  it('setLanguage should set language', () => {
    const lang: Language = Language.ENGLISH;
    component.setLanguage(lang);
    expect(component.language).toEqual(lang);
  });

  describe('changeLanguage', () => {
    it('changeLanguage should set language if current language not last', () => {
      const eng: Language = Language.ENGLISH;
      const rus: Language = Language.RUSSIAN;
      component.language = eng;
      component.changeLanguage();
      expect(component.language).toEqual(rus);
    });

    it('changeLanguage should set language if current language last', () => {
      const eng: Language = Language.ENGLISH;
      const rus: Language = Language.RUSSIAN;
      component.language = rus;
      component.changeLanguage();
      expect(component.language).toEqual(eng);
    });
  });
});
