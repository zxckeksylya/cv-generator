import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { VirtualCVService } from './virtual-cv.service';
import { VirtualCV, CreateVirtualCV } from '../interfaces/virtual-cv.interface';
describe('VirtualCVService', () => {
  let injector: TestBed;
  let service: VirtualCVService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VirtualCVService],
    });
    injector = getTestBed();
    service = injector.get(VirtualCVService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return virtual-cvs', () => {
    const mockItems: VirtualCV[] = [
      {
        id: 'id',
        user: 'id',
        data: {
          education: {
            establishment: 'string',
            profession: 'string',
          },
          foreignLanguage: [],
          general: {
            firstName: 'string',
            lastName: 'string',
            name: 'string',
          },
          projects: [],
          resume: {
            content: 'string',
          },
          skills: [],
        },
      },
    ];
    service.getVirtualCVs().subscribe(cvs => {
      expect(cvs).toEqual(mockItems);
    });

    const req = httpMock.expectOne(`${environment.host}/virtual-cv`);
    expect(req.request.method).toBe('GET');
    req.flush(mockItems);
  });

  it('should return virtual-cv by id', () => {
    const mockItems: VirtualCV[] = [
      {
        id: 'id',
        user: 'id',
        data: {
          education: {
            establishment: 'string',
            profession: 'string',
          },
          foreignLanguage: [],
          general: {
            firstName: 'string',
            lastName: 'string',
            name: 'string',
          },
          projects: [],
          resume: {
            content: 'string',
          },
          skills: [],
        },
      },
    ];
    service.getVirtualCVById('id').subscribe(projects => {
      expect(projects).toEqual(mockItems[0]);
    });
    const req = httpMock.expectOne(`${environment.host}/virtual-cv?id=id`);
    expect(req.request.method).toBe('GET');
    req.flush(mockItems);
  });

  it('should return updated virtual-cv', () => {
    const mockItem: VirtualCV = {
      id: 'id',
      user: 'id',
      data: {
        education: {
          establishment: 'string',
          profession: 'string',
        },
        foreignLanguage: [],
        general: {
          firstName: 'string',
          lastName: 'string',
          name: 'string',
        },
        projects: [],
        resume: {
          content: 'string',
        },
        skills: [],
      },
    };

    service.updateVirtualCV(mockItem).subscribe(cv => {
      expect(cv).toEqual(mockItem);
    });

    const req = httpMock.expectOne(`${environment.host}/virtual-cv`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockItem);
  });

  it('should return created virtual-cv', () => {
    const mockCreateResponseItem: VirtualCV = {
      id: 'id',
      user: 'id',
      data: {
        education: {
          establishment: 'string',
          profession: 'string',
        },
        foreignLanguage: [],
        general: {
          firstName: 'string',
          lastName: 'string',
          name: 'string',
        },
        projects: [],
        resume: {
          content: 'string',
        },
        skills: [],
      },
    };

    const mockCreateItem: CreateVirtualCV = {
      cvId: 'string',
      userId: 'string',
    };

    service.createVirtualCV(mockCreateItem).subscribe(cv => {
      expect(cv).toEqual(mockCreateResponseItem);
    });

    const req = httpMock.expectOne(`${environment.host}/virtual-cv`);
    expect(req.request.method).toBe('POST');
    req.flush(mockCreateResponseItem);
  });
});
