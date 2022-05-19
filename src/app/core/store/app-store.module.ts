import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppEffects } from './app.effects';
import { metaReducers, reducers } from './app.reducers';
import { ThemeEffects } from './theme/theme.effects';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects, ThemeEffects]),
    StoreRouterConnectingModule.forRoot(),
  ],
  exports: [StoreModule, EffectsModule, StoreRouterConnectingModule],
})
export class AppStoreModule {}
