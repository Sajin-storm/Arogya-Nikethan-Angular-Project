import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'pm-login',
    templateUrl : './login.component.html',
    styleUrls : ['./login.component.css']

})

export class LoginComponent{

    constructor(private route: ActivatedRoute, private router: Router) { }

}