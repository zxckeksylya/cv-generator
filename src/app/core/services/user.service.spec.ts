import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user.interface';
import { UserService } from './user.service';

fdescribe('UserService', () => {
  let injector: TestBed;
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });
    injector = getTestBed();
    service = injector.get(UserService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return user by id', () => {
    const expectedUser: User[] = [
      {
        id: 'id',
        languages: [],
        skills: [],
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email',
        institution: 'institution',
        diplomaProfession: 'diplomaProfession',
        department: 'department',
        role: { name: 'name', id: 'id' },
      },
      {
        id: 'id2',
        languages: [],
        skills: [],
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email',
        institution: 'institution',
        diplomaProfession: 'diplomaProfession',
        department: 'department',
        role: { name: 'name', id: 'id' },
      },
    ];
    service.getUserById('id').subscribe(users => {
      expect(users.length).toBe(1);
      expect(users).toEqual(expectedUser.filter(item => item.id === 'id'));
    });

    const req = httpMock.expectOne(`${environment.host}/users?id=id`);
    expect(req.request.method).toBe('GET');
    req.flush(expectedUser.filter(item => item.id === 'id'));
  });

  it('should return 404 error', () => {
    const mockError = new ProgressEvent('error');
    service.getUserById('id').subscribe(
      () => {},
      (error: HttpErrorResponse) => {
        expect(error.error).toBe(mockError);
      },
    );
    const req = httpMock.expectOne(`${environment.host}/users?id=id`);
    expect(req.request.method).toBe('GET');
    req.error(mockError);
  });
});
