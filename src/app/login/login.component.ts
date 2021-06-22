import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, RequiredValidator, Validators, ReactiveFormsModule } from "@angular/forms";
import { User } from "../models/User";
import { LoginService } from "../services/login.service";
import { HttpErrorResponse } from "@angular/common/http";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  isLoginError : boolean = false;

  userLoginForm = this.formBuilder.group({
    userName: new FormControl("bnm",[Validators.required,Validators.minLength(3) ,
        Validators.maxLength(10), Validators.pattern("^[a-zA-Z]+$")]),
    passWord: new FormControl("",[Validators.required,Validators.minLength(2),Validators.maxLength(6)])
  });
   

  constructor(public loginService: LoginService,  private formBuilder: FormBuilder
    ,private router: Router, private route: ActivatedRoute ) {
     }

  ngOnInit(): void {
  }
    get f() { return this.userLoginForm.controls; }

  public loginC(uname:string,pwd:string) {

     alert("loginC " + "  - uname : " + uname + " - pwd : " + pwd + " - fn : " + this.f.userName.value);

      this.router.navigate(["/home"]);

    /* this.loginService.LoginControl().subscribe((data: {}) => {
      alert(data); */
    // });
  }

}
