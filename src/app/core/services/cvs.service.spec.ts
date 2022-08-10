import { TestBed, getTestBed } from '@angular/core/testing';
import { CVService } from './cvs.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import {
  CV,
  UpdateCV,
  UpdateCVResponse,
  CreateCV,
  CreateCVResponse,
} from '../interfaces/cv.interface';
import { environment } from 'src/environments/environment';
fdescribe('CVService', () => {
  let injector: TestBed;
  let service: CVService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CVService],
    });
    injector = getTestBed();
    service = injector.get(CVService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return cv', () => {
    const mockItems: CV[] = [
      {
        id: 'id',
        name: 'name',
        description: 'string',
        createdAt: 'string',
        updatedAt: 'string',
        user: {
          id: 'id',
          firstName: 'string',
          lastName: 'string',
          languages: [],
          skills: [],
          role: { id: 'id', name: 'string' },
          diplomaProfession: 'string',
          email: 'string',
          institution: 'string',
          department: 'string',
        },
        projects: [],
      },
    ];
    service.getCVs().subscribe(cvs => {
      expect(cvs).toEqual(mockItems);
    });

    const req = httpMock.expectOne(`${environment.host}/cv`);
    expect(req.request.method).toBe('GET');
    req.flush(mockItems);
  });

  it('should return cv by id', () => {
    const mockItems: CV[] = [
      {
        id: 'id',
        name: 'name',
        description: 'string',
        createdAt: 'string',
        updatedAt: 'string',
        user: {
          id: 'id',
          firstName: 'string',
          lastName: 'string',
          languages: [],
          skills: [],
          role: { id: 'id', name: 'string' },
          diplomaProfession: 'string',
          email: 'string',
          institution: 'string',
          department: 'string',
        },
        projects: [],
      },
    ];
    service.getCvById('id').subscribe(cv => {
      expect(cv).toEqual(mockItems[0]);
    });
    const req = httpMock.expectOne(`${environment.host}/cv?id=id`);
    req.flush(mockItems);
  });

  it('should return updated cv', () => {
    const mockUpdateItem: UpdateCV = {
      id: 'id',
      name: 'name',
      user: 'string',
      projects: 'string',
      description: 'string',
    };

    const mockUpdateResponseItem: UpdateCVResponse = {
      id: 'id',
      name: 'name',
      user: 'string',
      projects: [],
      description: [],
      createdAt: 'string',
      updatedAt: 'string',
    };

    service.updateCV(mockUpdateItem).subscribe(cv => {
      expect(cv).toEqual(mockUpdateResponseItem);
    });

    const req = httpMock.expectOne(`${environment.host}/cv`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockUpdateResponseItem);
  });

  it('should return created cv', () => {
    const mockCreateResponseItem: CreateCVResponse = {
      id: 'id',
      name: 'name',
      user: 'string',
      projects: [],
      description: 'string',
      createdAt: 'string',
      updatedAt: 'string',
    };

    const mockCreateItem: CreateCV = {
      name: 'name',
      user: 'string',
      projects: [],
      description: 'string',
    };

    service.createCV(mockCreateItem).subscribe(cv => {
      expect(cv).toEqual(mockCreateResponseItem);
    });

    const req = httpMock.expectOne(`${environment.host}/cv`);
    expect(req.request.method).toBe('POST');
    req.flush(mockCreateResponseItem);
  });
});
