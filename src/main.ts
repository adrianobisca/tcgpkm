import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { injectSpeedInsights } from '@vercel/speed-insights';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err))
  .finally(() => {
    console.log('Vercel Speed Insight & Analytics Activated');
    injectSpeedInsights();
  });
