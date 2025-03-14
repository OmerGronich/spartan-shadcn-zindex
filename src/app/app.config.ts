import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { OverlayContainer } from '@angular/cdk/overlay';

export class CustomOverlayContainer extends OverlayContainer {
  protected override _createContainer(): void {
    const container = document.getElementById('shared-overlay-container');
    if (container) {
      this._containerElement = container;
    } else {
      super._createContainer();
    }
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
