import { ProjectsRolesService } from './projects-roles.service';
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { INameId } from '../interfaces/name-id.interface';
import { environment } from 'src/environments/environment';

fdescribe('ProjectsRolesService', () => {
  let injector: TestBed;
  let service: ProjectsRolesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProjectsRolesService],
    });
    injector = getTestBed();
    service = injector.get(ProjectsRolesService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return projectsRoles', () => {
    const mockItems: INameId[] = [
      {
        id: 'id',
        name: 'name',
      },
    ];
    service.getProjectsRoles().subscribe(projectsRoles => {
      expect(projectsRoles).toEqual(mockItems);
    });

    const req = httpMock.expectOne(`${environment.host}/project-roles`);
    expect(req.request.method).toBe('GET');
    req.flush(mockItems);
  });

  it('should return projectsRole by id', () => {
    const mockItems: INameId[] = [
      {
        id: 'id',
        name: 'name',
      },
    ];
    service.getProjectRoleById('id').subscribe(projectsRole => {
      expect(projectsRole).toEqual(mockItems[0]);
    });
    const req = httpMock.expectOne(`${environment.host}/project-roles?id=id`);
    req.flush(mockItems);
  });

  it('should return updated projectsRole', () => {
    const mockItem: INameId = {
      id: 'id',
      name: 'name',
    };

    service.updateProjectRole(mockItem).subscribe(projectsRole => {
      expect(projectsRole).toEqual(mockItem);
    });

    const req = httpMock.expectOne(`${environment.host}/project-roles`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockItem);
  });

  it('should return created projectsRole', () => {
    const mockItem: INameId = {
      id: 'id',
      name: 'name',
    };

    service.createProjectRole({ name: 'name' }).subscribe(projectsRole => {
      expect(projectsRole).toEqual(mockItem);
    });

    const req = httpMock.expectOne(`${environment.host}/project-roles`);
    expect(req.request.method).toBe('POST');
    req.flush(mockItem);
  });

  it('should return deleted count', () => {
    const mockItem = {
      id: 'id',
    };

    service.deleteProjectRole(mockItem).subscribe(projectsRole => {
      expect(projectsRole).toEqual({ deleteCount: 1 });
    });
    const req = httpMock.expectOne(`${environment.host}/project-roles`);
    expect(req.request.method).toBe('DELETE');
    req.flush({ deleteCount: 1 });
  });
});
