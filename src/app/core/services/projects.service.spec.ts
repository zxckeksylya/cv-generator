import { TestBed, getTestBed } from '@angular/core/testing';
import { ProjectsService } from './projects.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import {
  CreateProjectResponse,
  GetProject,
  UpdateProject,
  CreateProject,
} from '../interfaces/project.interface';
describe('ProjectsService', () => {
  let injector: TestBed;
  let service: ProjectsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProjectsService],
    });
    injector = getTestBed();
    service = injector.get(ProjectsService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return projects', () => {
    const mockItems: GetProject[] = [
      {
        id: 'id',
        name: 'name',
        secondName: 'string',
        startDate: 'string',
        endDate: 'string',
        teamSize: 0,
        tasksPerformed: 'string',
        description: 'string',
        specializations: [],
        responsibilities: [],
        projectRoles: [],
      },
    ];
    service.getProjects().subscribe(projects => {
      expect(projects).toEqual(mockItems);
    });

    const req = httpMock.expectOne(`${environment.host}/projects`);
    expect(req.request.method).toBe('GET');
    req.flush(mockItems);
  });

  it('should return project by id', () => {
    const mockItems: GetProject[] = [
      {
        id: 'id',
        name: 'name',
        secondName: 'string',
        startDate: 'string',
        endDate: 'string',
        teamSize: 0,
        tasksPerformed: 'string',
        description: 'string',
        specializations: [],
        responsibilities: [],
        projectRoles: [],
      },
    ];
    service.getProjectById('id').subscribe(projects => {
      expect(projects).toEqual(mockItems[0]);
    });
    const req = httpMock.expectOne(`${environment.host}/projects?id=id`);
    req.flush(mockItems);
  });

  it('should return updated project', () => {
    const mockItem: UpdateProject = {
      id: 'id',
      name: 'name',
      secondName: 'string',
      startDate: 'string',
      endDate: 'string',
      teamSize: 0,
      tasksPerformed: 'string',
      description: 'string',
      specializations: [],
      responsibilities: [],
      projectRoles: [],
    };

    service.updateProject(mockItem).subscribe(project => {
      expect(project).toEqual(mockItem);
    });

    const req = httpMock.expectOne(`${environment.host}/projects`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockItem);
  });

  it('should return created project', () => {
    const mockCreateResponseItem: CreateProjectResponse = {
      id: 'id',
      name: 'name',
      secondName: 'string',
      startDate: 'string',
      endDate: 'string',
      teamSize: 0,
      tasksPerformed: 'string',
      description: 'string',
      specializations: [],
      responsibilities: [],
      projectRoles: [],
    };

    const mockCreateItem: CreateProject = {
      name: 'name',
      secondName: 'string',
      startDate: 'string',
      endDate: 'string',
      teamSize: 0,
      tasksPerformed: 'string',
      description: 'string',
      specializations: [],
      responsibilities: [],
      projectRoles: [],
    };

    service.createProject(mockCreateItem).subscribe(project => {
      expect(project).toEqual(mockCreateResponseItem);
    });

    const req = httpMock.expectOne(`${environment.host}/projects`);
    expect(req.request.method).toBe('POST');
    req.flush(mockCreateResponseItem);
  });

  it('should return deleted count', () => {
    service.deleteProject({ id: 'id' }).subscribe(item => {
      expect(item).toEqual({ deleteCount: 1 });
    });
    const req = httpMock.expectOne(`${environment.host}/projects`);
    expect(req.request.method).toBe('DELETE');
    req.flush({ deleteCount: 1 });
  });
});
