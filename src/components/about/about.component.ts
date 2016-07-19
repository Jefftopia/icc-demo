// import { Component, OnInit,  } from '@angular/core';
// import { COMMON_DIRECTIVES } from '@angular/common';
// import { provideRouter, RouterConfig, ROUTER_DIRECTIVES, Router } from '@angular/router';

import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  directives: []    
})
export class AboutComponent {

}

// export class Loghub implements OnInit {
        
//     protected router: Router;    
        
//     public currentRoute: string;
        
//     constructor(router: Router) {
//         this.router = router;
//     }
    
//     ngOnInit(): void {
//         // this.router.root.subscribe((url) => {
//         //     this.currentRoute = url;
//         // });
//     }
    
//     public back(): void {
//         this.router.navigate(['Projects']);
//     }

// }