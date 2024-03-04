import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//Starting point
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
