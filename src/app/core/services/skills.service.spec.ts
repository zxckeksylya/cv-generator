import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import {
  CreateSkill,
  CreateSkillResponse,
  Skill,
  UpdateSkill,
} from '../interfaces/skill.interface';
import { SkillsService } from './skills.service';
fdescribe('SkillsService', () => {
  let injector: TestBed;
  let service: SkillsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SkillsService],
    });
    injector = getTestBed();
    service = injector.get(SkillsService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return skills', () => {
    const mockItems: Skill[] = [
      {
        id: 'id',
        name: 'name',
        experience: 0,
        lastUsed: 0,
        category: { id: 'id', name: 'name' },
        level: { id: 'id', name: 'name' },
      },
    ];
    service.getSkills().subscribe(skills => {
      expect(skills).toEqual(mockItems);
    });

    const req = httpMock.expectOne(`${environment.host}/skills`);
    expect(req.request.method).toBe('GET');
    req.flush(mockItems);
  });

  it('should return skill by id', () => {
    const mockItems: Skill[] = [
      {
        id: 'id',
        name: 'name',
        experience: 0,
        lastUsed: 0,
        category: { id: 'id', name: 'name' },
        level: { id: 'id', name: 'name' },
      },
    ];
    service.getSkillById('id').subscribe(skill => {
      expect(skill).toEqual(mockItems[0]);
    });
    const req = httpMock.expectOne(`${environment.host}/skills?id=id`);
    req.flush(mockItems);
  });

  it('should return updated skill', () => {
    const mockItem: UpdateSkill = {
      id: 'id',
      name: 'name',
      experience: 0,
      lastUsed: 0,
      category: 'id',
      level: 'id',
    };

    service.updateSkill(mockItem).subscribe(skill => {
      expect(skill).toEqual(mockItem);
    });

    const req = httpMock.expectOne(`${environment.host}/skills`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockItem);
  });

  it('should return created skill', () => {
    const mockCreateResponseItem: CreateSkillResponse = {
      id: 'id',
      name: 'name',
      experience: 0,
      lastUsed: 0,
      category: 'id',
      level: 'id',
    };

    const mockCreateItem: CreateSkill = {
      name: 'name',
      experience: 0,
      lastUsed: 0,
      category: 'id',
      level: 'id',
    };

    service.createSkill(mockCreateItem).subscribe(skill => {
      expect(skill).toEqual(mockCreateResponseItem);
    });

    const req = httpMock.expectOne(`${environment.host}/skills`);
    expect(req.request.method).toBe('POST');
    req.flush(mockCreateResponseItem);
  });

  it('should return deleted count', () => {
    service.deleteSkill('id').subscribe(item => {
      expect(item).toEqual({ deleteCount: 1 });
    });
    const req = httpMock.expectOne(`${environment.host}/skills`);
    expect(req.request.method).toBe('DELETE');
    req.flush({ deleteCount: 1 });
  });
});
