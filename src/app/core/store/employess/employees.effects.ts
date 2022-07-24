import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { concatMap, from, map, switchMap, take, toArray } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { LanguagesService } from '../../services/languages.service';
import { SkillsService } from '../../services/skills.service';
import { AppState } from '../app.reducers';
import { getLanguageByIdSuccessAction } from '../language/language.actions';
import { getRoleByIdSuccessAction } from '../role/roles.actions';
import { getSkillByIdSuccessAction } from '../skill/skills.actions';
import {
  createEmployeeAction,
  createEmployeeSuccessAction,
  getEmployeeByIdAction,
  getEmployeeByIdSuccessAction,
  getEmployeesAction,
  getEmployeesSuccessAction,
  initEmployeesStoreAction,
  initEmployeesStoreFailedAction,
  initEmployeesStoreSuccessAction,
  updateEmployeeAction,
  updateEmployeeSuccessAction,
} from './employees.actions';
import {
  getEmployeeByRoleIdSelector,
  getEmployeesByLanguageIdSelector,
  getEmployeesBySkillIdSelector,
  getIsInitEmployeesSelector,
} from './employees.selectors';

@Injectable()
export class EmployeesEffect {
  public initEmployeesStore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initEmployeesStoreAction),
      switchMap(() =>
        this.store.pipe(
          select(getIsInitEmployeesSelector),
          take(1),
          map(isInit =>
            !isInit ? initEmployeesStoreSuccessAction() : initEmployeesStoreFailedAction(),
          ),
        ),
      ),
    ),
  );

  public initEmployeesStoreSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initEmployeesStoreSuccessAction),
      map(() => getEmployeesAction()),
    ),
  );

  public getEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getEmployeesAction),
      switchMap(() => this.employeeService.getEmployees()),
      map(employees => getEmployeesSuccessAction({ employees })),
    ),
  );

  public getEmployeeById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getEmployeeByIdAction, updateEmployeeSuccessAction),
      switchMap(item => this.employeeService.getEmployeeById(item.id)),
      map(employee => getEmployeeByIdSuccessAction({ employee })),
    ),
  );

  public createEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createEmployeeAction),
      concatMap(employee =>
        from(employee.languages).pipe(
          concatMap(language => this.languageService.createLanguage(language)),
          take(employee.languages.length),
          toArray(),
          concatMap(newLanguages =>
            from(employee.skills).pipe(
              concatMap(skill => this.skillsService.createSkill(skill)),
              take(employee.skills.length),
              toArray(),
              switchMap(newSkills =>
                this.employeeService.createEmployee({
                  ...employee,
                  languages: newLanguages.map(item => item.id),
                  skills: newSkills.map(item => item.id),
                }),
              ),
            ),
          ),
        ),
      ),
      switchMap(employee => this.employeeService.getEmployeeById(employee.id)),
      map(employee => createEmployeeSuccessAction({ employee })),
    ),
  );

  public updateEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateEmployeeAction),
      concatMap(employee =>
        from(employee.languages).pipe(
          concatMap(language => this.languageService.createLanguage(language)),
          take(employee.languages.length),
          toArray(),
          concatMap(newLanguages =>
            from(employee.skills).pipe(
              concatMap(skill => this.skillsService.createSkill(skill)),
              take(employee.skills.length),
              toArray(),
              switchMap(newSkills =>
                this.employeeService.updateEmployee({
                  ...employee,
                  languages: newLanguages.map(item => item.id),
                  skills: newSkills.map(item => item.id),
                }),
              ),
            ),
          ),
        ),
      ),
      map(employee => updateEmployeeSuccessAction(employee)),
    ),
  );

  public changeSkill$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSkillByIdSuccessAction),
      concatMap(skill =>
        this.store.pipe(
          select(state => getEmployeesBySkillIdSelector(state, { id: skill.skill.id })),
          take(1),
          concatMap(employees => from(employees)),
          map(employee => getEmployeeByIdAction({ id: employee.id })),
        ),
      ),
    ),
  );

  public changeLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLanguageByIdSuccessAction),
      concatMap(language =>
        this.store.pipe(
          select(state => getEmployeesByLanguageIdSelector(state, { id: language.language.id })),
          take(1),
          concatMap(employees => from(employees)),
          map(employee => getEmployeeByIdAction({ id: employee.id })),
        ),
      ),
    ),
  );

  public changeRole$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getRoleByIdSuccessAction),
      concatMap(role =>
        this.store.pipe(
          select(state => getEmployeeByRoleIdSelector(state, { id: role.role.id })),
          take(1),
          concatMap(employees => from(employees)),
          map(employee => getEmployeeByIdAction({ id: employee.id })),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService,
    private languageService: LanguagesService,
    private skillsService: SkillsService,
    private store: Store<AppState>,
  ) {}
}
