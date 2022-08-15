import { ResponsibilitiesService } from './responsibilities.service';
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { INameId } from '../interfaces/name-id.interface';

describe('ResponsibilitiesService', () => {
  let injector: TestBed;
  let service: ResponsibilitiesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ResponsibilitiesService],
    });
    injector = getTestBed();
    service = injector.get(ResponsibilitiesService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return responsibilities', () => {
    const mockItems: INameId[] = [
      {
        id: 'id',
        name: 'name',
      },
    ];
    service.getResponsibilities().subscribe(responsibilities => {
      expect(responsibilities).toEqual(mockItems);
    });

    const req = httpMock.expectOne(`${environment.host}/responsibilities`);
    expect(req.request.method).toBe('GET');
    req.flush(mockItems);
  });

  it('should return responsibility by id', () => {
    const mockItems: INameId[] = [
      {
        id: 'id',
        name: 'name',
      },
    ];
    service.getResponsibilityById('id').subscribe(responsibility => {
      expect(responsibility).toEqual(mockItems[0]);
    });
    const req = httpMock.expectOne(`${environment.host}/responsibilities?id=id`);
    req.flush(mockItems);
  });

  it('should return updated level', () => {
    const mockItem: INameId = {
      id: 'id',
      name: 'name',
    };

    service.updateResponsibility(mockItem).subscribe(responsibility => {
      expect(responsibility).toEqual(mockItem);
    });

    const req = httpMock.expectOne(`${environment.host}/responsibilities`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockItem);
  });

  it('should return created responsibility', () => {
    const mockItem: INameId = {
      id: 'id',
      name: 'name',
    };

    service.createResponsibility({ name: 'name' }).subscribe(responsibility => {
      expect(responsibility).toEqual(mockItem);
    });

    const req = httpMock.expectOne(`${environment.host}/responsibilities`);
    expect(req.request.method).toBe('POST');
    req.flush(mockItem);
  });

  it('should return deleted count', () => {
    const mockItem = {
      id: 'id',
    };

    service.deleteResponsibility(mockItem).subscribe(responsibility => {
      expect(responsibility).toEqual({ deleteCount: 1 });
    });
    const req = httpMock.expectOne(`${environment.host}/responsibilities`);
    expect(req.request.method).toBe('DELETE');
    req.flush({ deleteCount: 1 });
  });
});
