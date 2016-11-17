import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './buyit.module'

const platform = platformBrowserDynamic()
platform.bootstrapModule(AppModule)