import { createReducer, on } from '@ngrx/store';
import { changeLocalStorageTema, setDark, setLight } from './main.actions';
export interface TemaState {
  tema: string;
}

export const initionalState: TemaState = {
  tema: localStorage.getItem('tema') || 'light',
};

export const temaReducer = createReducer(
  initionalState,
  on(setDark, (state) => ({
    ...state,
    tema: 'dark',
  })),
  on(setLight, (state) => ({
    ...state,
    tema: 'light',
  })),
  on(changeLocalStorageTema, (state) => ({
    ...state,
  })),
);
