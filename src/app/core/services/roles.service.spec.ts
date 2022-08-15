import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { RolesService } from './roles.service';
import { INameId } from '../interfaces/name-id.interface';
import { environment } from 'src/environments/environment';

describe('RolesService', () => {
  let injector: TestBed;
  let service: RolesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RolesService],
    });
    injector = getTestBed();
    service = injector.get(RolesService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return roles', () => {
    const mockRoles: INameId[] = [
      {
        id: 'id',
        name: 'name',
      },
    ];
    service.getRoles().subscribe(roles => {
      expect(roles).toEqual(mockRoles);
    });

    const req = httpMock.expectOne(`${environment.host}/roles`);
    expect(req.request.method).toBe('GET');
    req.flush(mockRoles);
  });

  it('should return role by id', () => {
    const mockRoles: INameId[] = [
      {
        id: 'id',
        name: 'name',
      },
    ];
    service.getRoleById('id').subscribe(role => {
      expect(role).toEqual(mockRoles[0]);
    });
    const req = httpMock.expectOne(`${environment.host}/roles?id=id`);
    req.flush(mockRoles);
  });

  it('should return updated role', () => {
    const mockRole: INameId = {
      id: 'id',
      name: 'name',
    };

    service.updateRole(mockRole).subscribe(role => {
      expect(role).toEqual(mockRole);
    });

    const req = httpMock.expectOne(`${environment.host}/roles`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockRole);
  });

  it('should return created role', () => {
    const mockRole: INameId = {
      id: 'id',
      name: 'name',
    };

    service.createRole({ name: 'name' }).subscribe(role => {
      expect(role).toEqual(mockRole);
    });

    const req = httpMock.expectOne(`${environment.host}/roles`);
    expect(req.request.method).toBe('POST');
    req.flush(mockRole);
  });

  it('should return deleted count', () => {
    const mockItem = {
      id: 'id',
    };

    service.deleteRole(mockItem).subscribe(role => {
      expect(role).toEqual({ deleteCount: 1 });
    });
    const req = httpMock.expectOne(`${environment.host}/roles`);
    expect(req.request.method).toBe('DELETE');
    req.flush({ deleteCount: 1 });
  });
});
