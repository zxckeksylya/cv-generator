import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { INameId } from '../interfaces/name-id.interface';
import { CategoriesService } from './categories.service';
describe('CategoriesService', () => {
  let injector: TestBed;
  let service: CategoriesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoriesService],
    });
    injector = getTestBed();
    service = injector.get(CategoriesService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return categories', () => {
    const mockItems: INameId[] = [
      {
        id: 'id',
        name: 'name',
      },
    ];
    service.getCategories().subscribe(categories => {
      expect(categories).toEqual(mockItems);
    });

    const req = httpMock.expectOne(`${environment.host}/categories`);
    expect(req.request.method).toBe('GET');
    req.flush(mockItems);
  });

  it('should return category by id', () => {
    const mockItems: INameId[] = [
      {
        id: 'id',
        name: 'name',
      },
    ];
    service.getCategoryById('id').subscribe(category => {
      expect(category).toEqual(mockItems[0]);
    });
    const req = httpMock.expectOne(`${environment.host}/categories?id=id`);
    req.flush(mockItems);
  });

  it('should return updated category', () => {
    const mockItem: INameId = {
      id: 'id',
      name: 'name',
    };

    service.updateCategory(mockItem).subscribe(category => {
      expect(category).toEqual(mockItem);
    });

    const req = httpMock.expectOne(`${environment.host}/categories`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockItem);
  });

  it('should return created category', () => {
    const mockItem: INameId = {
      id: 'id',
      name: 'name',
    };

    service.createCategory({ name: 'name' }).subscribe(category => {
      expect(category).toEqual(mockItem);
    });

    const req = httpMock.expectOne(`${environment.host}/categories`);
    expect(req.request.method).toBe('POST');
    req.flush(mockItem);
  });

  it('should return deleted count', () => {
    const mockItem = {
      id: 'id',
    };

    service.deleteCategory(mockItem).subscribe(category => {
      expect(category).toEqual({ deleteCount: 1 });
    });
    const req = httpMock.expectOne(`${environment.host}/categories`);
    expect(req.request.method).toBe('DELETE');
    req.flush({ deleteCount: 1 });
  });
});
