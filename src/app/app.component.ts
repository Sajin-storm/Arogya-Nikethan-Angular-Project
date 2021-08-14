import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div >
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><h3>Arogya Nikethan</h3></a>
  

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" routerLink= "/welcome">Home<span class="sr-only">(current)</span></a>
      </li>
    </ul>
    <div>
      <a class="nav-link" routerLink= "/login">Hospital / Admin</a>
    </div>
  </div>
</nav>
  </div>
  <!-- <pm-welcome></pm-welcome> -->
  <!-- <pm-login></pm-login> -->
  <router-outlet></router-outlet>
  `
  ,styleUrls : ['./app.component.css']
})
export class AppComponent {
  title = 'arogya-nikethan';
}
