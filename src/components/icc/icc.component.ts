import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CollapseDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { HomeComponent } from '../home/home.component'

@Component({
  moduleId: module.id,    // fully resolved filename; defined at module load time
  selector: 'icc',
  templateUrl: 'icc.component.html',
  styleUrls: ['icc.component.css'],
  directives: [CollapseDirective, ROUTER_DIRECTIVES],
  precompile: [HomeComponent]
})
export class ICCComponent {

  public hMenuCollapse: boolean = true;

  public setState(): void {
    this.hMenuCollapse = !this.hMenuCollapse;    
  }

}