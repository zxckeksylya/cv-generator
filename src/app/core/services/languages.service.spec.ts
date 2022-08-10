import { LanguagesService } from './languages.service';
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import {
  CreateLanguageResponse,
  Language,
  UpdateLanguage,
  CreateLanguage,
} from '../interfaces/language.interface';

fdescribe('LanguagesService', () => {
  let injector: TestBed;
  let service: LanguagesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LanguagesService],
    });
    injector = getTestBed();
    service = injector.get(LanguagesService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return languages', () => {
    const mockItems: Language[] = [
      {
        id: 'id',
        name: 'name',
        professionalReadingLevel: { id: 'id', name: 'name' },
        professionalSpeakingLevel: { id: 'id', name: 'name' },
        professionalWritingLevel: { id: 'id', name: 'name' },
        everydayWritingLevel: { id: 'id', name: 'name' },
        everydayReadingLevel: { id: 'id', name: 'name' },
        everydaySpeakingLevel: { id: 'id', name: 'name' },
      },
    ];
    service.getLanguages().subscribe(languages => {
      expect(languages).toEqual(mockItems);
    });

    const req = httpMock.expectOne(`${environment.host}/languages`);
    expect(req.request.method).toBe('GET');
    req.flush(mockItems);
  });

  it('should return language by id', () => {
    const mockItems: Language[] = [
      {
        id: 'id',
        name: 'name',
        professionalReadingLevel: { id: 'id', name: 'name' },
        professionalSpeakingLevel: { id: 'id', name: 'name' },
        professionalWritingLevel: { id: 'id', name: 'name' },
        everydayWritingLevel: { id: 'id', name: 'name' },
        everydayReadingLevel: { id: 'id', name: 'name' },
        everydaySpeakingLevel: { id: 'id', name: 'name' },
      },
    ];
    service.getLanguageById('id').subscribe(level => {
      expect(level).toEqual(mockItems[0]);
    });
    const req = httpMock.expectOne(`${environment.host}/languages?id=id`);
    req.flush(mockItems);
  });

  it('should return updated language', () => {
    const mockItem: UpdateLanguage = {
      id: 'id',
      name: 'name',
      professionalReadingLevel: 'id',
      professionalSpeakingLevel: 'id',
      professionalWritingLevel: 'id',
      everydayReadingLevel: 'id',
      everydaySpeakingLevel: 'id',
      everydayWritingLevel: 'id',
    };

    service.updateLanguage(mockItem).subscribe(level => {
      expect(level).toEqual(mockItem);
    });

    const req = httpMock.expectOne(`${environment.host}/languages`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockItem);
  });

  it('should return created language', () => {
    const mockCreateResponseItem: CreateLanguageResponse = {
      id: 'id',
      name: 'name',
      professionalReadingLevel: 'id',
      professionalSpeakingLevel: 'id',
      professionalWritingLevel: 'id',
      everydayReadingLevel: 'id',
      everydaySpeakingLevel: 'id',
      everydayWritingLevel: 'id',
    };

    const mockCreateItem: CreateLanguage = {
      name: 'name',
      professionalReadingLevel: 'id',
      professionalSpeakingLevel: 'id',
      professionalWritingLevel: 'id',
      everydayReadingLevel: 'id',
      everydaySpeakingLevel: 'id',
      everydayWritingLevel: 'id',
    };

    service.createLanguage(mockCreateItem).subscribe(level => {
      expect(level).toEqual(mockCreateResponseItem);
    });

    const req = httpMock.expectOne(`${environment.host}/languages`);
    expect(req.request.method).toBe('POST');
    req.flush(mockCreateResponseItem);
  });

  it('should return deleted count', () => {
    service.deleteLanguage('id').subscribe(level => {
      expect(level).toEqual({ deleteCount: 1 });
    });
    const req = httpMock.expectOne(`${environment.host}/languages`);
    expect(req.request.method).toBe('DELETE');
    req.flush({ deleteCount: 1 });
  });
});
