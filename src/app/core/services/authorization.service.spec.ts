import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { AuthorizationService } from './authorization.service';
import { LoginForm } from '../interfaces/login-form.interface';
import { AuthorizationLoginResponse } from '../interfaces/authorization-login-response.interface';
import { environment } from 'src/environments/environment';
import { CurrentUser } from '../interfaces/current-user.interface';

fdescribe('AuthorizationService', () => {
  let injector: TestBed;
  let service: AuthorizationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthorizationService],
    });
    injector = getTestBed();
    service = injector.get(AuthorizationService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return authorization login response', () => {
    const mockItem: LoginForm = {
      email: 'string',
      password: 'string',
    };

    const mockResponseItem: AuthorizationLoginResponse = {
      skills: [],
      languages: [],
      firstName: '',
      lastName: '',
      email: '',
      institution: '',
      diplomaProfession: '',
      role: { id: 'string', name: 'string' },
      department: '',
      id: '',
      expiresIn: '',
      accessToken: '',
    };

    service.login(mockItem).subscribe(response => {
      expect(response).toEqual(mockResponseItem);
    });

    const req = httpMock.expectOne(`${environment.host}/auth/login`);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponseItem);
  });

  it('should return authorization current user', () => {
    const mockItem: CurrentUser = {
      userId: 'id',
      role: { id: 'id', name: 'name' },
    };

    service.getCurrentUser().subscribe(response => {
      expect(response).toEqual(mockItem);
    });

    const req = httpMock.expectOne(`${environment.host}/auth/whoami`);
    expect(req.request.method).toBe('GET');
    req.flush(mockItem);
  });
});
