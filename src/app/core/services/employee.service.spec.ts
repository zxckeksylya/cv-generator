import { TestBed, getTestBed } from '@angular/core/testing';
import { EmployeeService } from './employee.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import {
  GetEmployee,
  UpdateEmployeeRequest,
  CreateEmployeeResponse,
  CreateEmployeeRequest,
} from '../interfaces/employee.interface';
import { environment } from 'src/environments/environment';

fdescribe('EmployeeService', () => {
  let injector: TestBed;
  let service: EmployeeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService],
    });
    injector = getTestBed();
    service = injector.get(EmployeeService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return employees', () => {
    const mockItems: GetEmployee[] = [
      {
        id: 'id',
        firstName: 'string',
        lastName: 'string',
        email: 'string',
        institution: 'string',
        department: 'string',
        diplomaProfession: 'string',
        skills: [],
        languages: [],
        role: { id: 'id', name: 'string' },
      },
    ];
    service.getEmployees().subscribe(employees => {
      expect(employees).toEqual(mockItems);
    });

    const req = httpMock.expectOne(`${environment.host}/users`);
    expect(req.request.method).toBe('GET');
    req.flush(mockItems);
  });

  it('should return employee by id', () => {
    const mockItems: GetEmployee[] = [
      {
        id: 'id',
        firstName: 'string',
        lastName: 'string',
        email: 'string',
        institution: 'string',
        department: 'string',
        diplomaProfession: 'string',
        skills: [],
        languages: [],
        role: { id: 'id', name: 'string' },
      },
    ];
    service.getEmployeeById('id').subscribe(employees => {
      expect(employees).toEqual(mockItems[0]);
    });
    const req = httpMock.expectOne(`${environment.host}/users?id=id`);
    expect(req.request.method).toBe('GET');
    req.flush(mockItems);
  });

  it('should return updated employee', () => {
    const mockItem: UpdateEmployeeRequest = {
      id: 'id',
      firstName: 'string',
      lastName: 'string',
      email: 'string',
      institution: 'string',
      department: 'string',
      diplomaProfession: 'string',
      skills: [],
      languages: [],
      role: 'id',
    };

    service.updateEmployee(mockItem).subscribe(employee => {
      expect(employee).toEqual(mockItem);
    });

    const req = httpMock.expectOne(`${environment.host}/users`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockItem);
  });

  it('should return created employee', () => {
    const mockCreateResponseItem: CreateEmployeeResponse = {
      id: 'id',
      firstName: 'string',
      lastName: 'string',
      email: 'string',
      institution: 'string',
      department: 'string',
      diplomaProfession: 'string',
      skills: [],
      languages: [],
      role: 'id',
      password: '',
    };

    const mockCreateItem: CreateEmployeeRequest = {
      firstName: 'string',
      lastName: 'string',
      email: 'string',
      institution: 'string',
      department: 'string',
      diplomaProfession: 'string',
      skills: [],
      languages: [],
      role: 'id',
      password: '',
    };

    service.createEmployee(mockCreateItem).subscribe(employee => {
      expect(employee).toEqual(mockCreateResponseItem);
    });

    const req = httpMock.expectOne(`${environment.host}/users`);
    expect(req.request.method).toBe('POST');
    req.flush(mockCreateResponseItem);
  });
});
