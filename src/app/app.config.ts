import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';   // Angular 18 new provideHttpClient - simplifies HTTP client setup & move to standalone components
import { provideMarkdown } from 'ngx-markdown';
import { authInterceptor } from './core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    // uses XMLHttpRequest API to make requests by default
    // https://angular.dev/guide/http/interceptors - the interceptor below uses new, recommended functional interceptor syntax instead of being DI-based
    // https://angular.dev/guide/http/interceptors#configuring-interceptors
    provideHttpClient(withInterceptors([authInterceptor])),
    provideMarkdown(),
  ]
};
