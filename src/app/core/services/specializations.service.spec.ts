import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { INameId } from '../interfaces/name-id.interface';
import { SpecializationsService } from './specializations.service';
describe('SpecializationsService', () => {
  let injector: TestBed;
  let service: SpecializationsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SpecializationsService],
    });
    injector = getTestBed();
    service = injector.get(SpecializationsService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return specializations', () => {
    const mockItems: INameId[] = [
      {
        id: 'id',
        name: 'name',
      },
    ];
    service.getSpecializations().subscribe(specializations => {
      expect(specializations).toEqual(mockItems);
    });

    const req = httpMock.expectOne(`${environment.host}/specializations`);
    expect(req.request.method).toBe('GET');
    req.flush(mockItems);
  });

  it('should return specialization by id', () => {
    const mockItems: INameId[] = [
      {
        id: 'id',
        name: 'name',
      },
    ];
    service.getSpecializationById('id').subscribe(specialization => {
      expect(specialization).toEqual(mockItems[0]);
    });
    const req = httpMock.expectOne(`${environment.host}/specializations?id=id`);
    req.flush(mockItems);
  });

  it('should return updated specialization', () => {
    const mockItem: INameId = {
      id: 'id',
      name: 'name',
    };

    service.updateSpecialization(mockItem).subscribe(specialization => {
      expect(specialization).toEqual(mockItem);
    });

    const req = httpMock.expectOne(`${environment.host}/specializations`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockItem);
  });

  it('should return created specialization', () => {
    const mockItem: INameId = {
      id: 'id',
      name: 'name',
    };

    service.createSpecialization({ name: 'name' }).subscribe(specialization => {
      expect(specialization).toEqual(mockItem);
    });

    const req = httpMock.expectOne(`${environment.host}/specializations`);
    expect(req.request.method).toBe('POST');
    req.flush(mockItem);
  });

  it('should return deleted count', () => {
    const mockItem = {
      id: 'id',
    };

    service.deleteSpecialization(mockItem).subscribe(specialization => {
      expect(specialization).toEqual({ deleteCount: 1 });
    });
    const req = httpMock.expectOne(`${environment.host}/specializations`);
    expect(req.request.method).toBe('DELETE');
    req.flush({ deleteCount: 1 });
  });
});
