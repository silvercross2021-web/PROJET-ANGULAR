import { ApplicationConfig, provideBrowserGlobalErrorListeners, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { PortfolioService } from './shared/services/PortfolioService';

import { routes } from './app.routes';

export function initPortfolio(portfolioService: PortfolioService) {
  return () => {
    portfolioService.load().subscribe();
    return Promise.resolve();
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: initPortfolio,
      deps: [PortfolioService],
      multi: true
    }
  ]
};
