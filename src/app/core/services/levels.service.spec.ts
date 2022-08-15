import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LevelsService } from './levels.service';
import { TestBed, getTestBed } from '@angular/core/testing';
import { INameId } from '../interfaces/name-id.interface';
import { environment } from 'src/environments/environment';
describe('LevelsService', () => {
  let injector: TestBed;
  let service: LevelsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LevelsService],
    });
    injector = getTestBed();
    service = injector.get(LevelsService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return levels', () => {
    const mockItems: INameId[] = [
      {
        id: 'id',
        name: 'name',
      },
    ];
    service.getLevels().subscribe(levels => {
      expect(levels).toEqual(mockItems);
    });

    const req = httpMock.expectOne(`${environment.host}/levels`);
    expect(req.request.method).toBe('GET');
    req.flush(mockItems);
  });

  it('should return level by id', () => {
    const mockItems: INameId[] = [
      {
        id: 'id',
        name: 'name',
      },
    ];
    service.getLevelById('id').subscribe(level => {
      expect(level).toEqual(mockItems[0]);
    });
    const req = httpMock.expectOne(`${environment.host}/levels?id=id`);
    req.flush(mockItems);
  });

  it('should return updated level', () => {
    const mockItem: INameId = {
      id: 'id',
      name: 'name',
    };

    service.updateLevel(mockItem).subscribe(level => {
      expect(level).toEqual(mockItem);
    });

    const req = httpMock.expectOne(`${environment.host}/levels`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockItem);
  });

  it('should return created level', () => {
    const mockItem: INameId = {
      id: 'id',
      name: 'name',
    };

    service.createLevel({ name: 'name' }).subscribe(level => {
      expect(level).toEqual(mockItem);
    });

    const req = httpMock.expectOne(`${environment.host}/levels`);
    expect(req.request.method).toBe('POST');
    req.flush(mockItem);
  });

  it('should return deleted count', () => {
    const mockItem = {
      id: 'id',
    };

    service.deleteLevel(mockItem).subscribe(level => {
      expect(level).toEqual({ deleteCount: 1 });
    });
    const req = httpMock.expectOne(`${environment.host}/levels`);
    expect(req.request.method).toBe('DELETE');
    req.flush({ deleteCount: 1 });
  });
});
