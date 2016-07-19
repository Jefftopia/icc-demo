import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ICCComponent } from './components/icc/icc.component';
import { provide } from '@angular/core';
import { APP_ROUTER_PROVIDERS } from './routes';

bootstrap(ICCComponent, 
    [
        APP_ROUTER_PROVIDERS
    ]);

// import { SignalRService } from './service/signalr/signalR.service';
// import { ProjectManagerService } from './service/projectManager/projectManager.service';
// import { Loghub } from './loghub';
// import { provide } from '@angular/core';

// import { bootstrap } from '@angular/platform-browser-dynamic';
// import { APP_ROUTER_PROVIDERS } from './loghub.routes';

// bootstrap(Loghub, [
//     SignalRService,
//     ProjectManagerService,    
//     APP_ROUTER_PROVIDERS
//     ]);