"use strict";(self.webpackChunkFreshcart=self.webpackChunkFreshcart||[]).push([[932],{6666:(E,g,l)=>{l.r(g),l.d(g,{LoginComponent:()=>w});var u=l(6814),i=l(95),_=l(1120),t=l(4769),c=l(9410);function d(e,s){1&e&&(t.TgZ(0,"p",21),t._uU(1,"email is required"),t.qZA())}function f(e,s){1&e&&(t.TgZ(0,"p",21),t._uU(1,"email is in valid"),t.qZA())}function h(e,s){if(1&e&&(t.TgZ(0,"div",19),t.YNc(1,d,2,0,"p",20),t.YNc(2,f,2,0,"p",20),t.qZA()),2&e){const r=t.oxw();let n,o;t.xp6(1),t.Q6J("ngIf",null==(n=r.loginForm.get("email"))?null:n.getError("required")),t.xp6(1),t.Q6J("ngIf",null==(o=r.loginForm.get("email"))?null:o.getError("email"))}}function Z(e,s){1&e&&(t.TgZ(0,"p",21),t._uU(1,"password is required"),t.qZA())}function v(e,s){1&e&&(t.TgZ(0,"p",21),t._uU(1,"password must start with upperCase then from 6 to 10"),t.qZA())}function x(e,s){if(1&e&&(t.TgZ(0,"div",22),t.YNc(1,Z,2,0,"p",23),t.YNc(2,v,2,0,"p",23),t.qZA()),2&e){const r=t.oxw();let n,o;t.xp6(1),t.Q6J("ngIf",null==(n=r.loginForm.get("password"))?null:n.getError("required")),t.xp6(1),t.Q6J("ngIf",null==(o=r.loginForm.get("password"))?null:o.getError("pattern"))}}function T(e,s){1&e&&(t.TgZ(0,"span"),t._UZ(1,"i",24),t.qZA())}function A(e,s){if(1&e&&(t.TgZ(0,"p",25),t._uU(1),t.qZA()),2&e){const r=t.oxw();t.xp6(1),t.Oqu(r.msgError)}}let w=(()=>{class e{constructor(r,n,o){this._AuthService=r,this._Router=n,this._FormBuilder=o,this.msgError="",this.isLoading=!1,this.loginForm=this._FormBuilder.group({email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required,i.kI.pattern(/^[a-zA-Z0-9_@]{6,}$/)]]})}handleForm(){this.isLoading=!0,!0===this.loginForm.valid&&this._AuthService.login(this.loginForm.value).subscribe({next:n=>{"success"==n.message&&(localStorage.setItem("userToken",n.token),this._AuthService.decodeToken(),this._Router.navigate(["/home"]),this.isLoading=!1)},error:n=>{console.log(n),this.isLoading=!1,this.msgError=n.error.message}})}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(c.e),t.Y36(_.F0),t.Y36(i.qu))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],standalone:!0,features:[t.jDz],decls:25,vars:5,consts:[[1,"container"],[1,"my-4","w-75","mx-auto","shadow","rounded-4","bg-main-light","p-4"],[1,"fw-normal","fs-3"],[3,"formGroup","ngSubmit"],[1,"input-email","mb-2"],["for","email"],["formControlName","email","type","email","id","email",1,"form-control"],["inputEmail",""],["class","alert alert-danger  w-50 mx-auto small text-center mt-1",4,"ngIf"],[1,"input-password","mb-2"],["for","password"],["formControlName","password","type","password","id","password",1,"form-control"],["inputPassword",""],["class","alert alert-danger  w-75 mx-auto small text-center mt-1",4,"ngIf"],[1,"d-flex","justify-content-between","align-items-center","mt-3"],[1,"main-btn","my-2"],[4,"ngIf"],["role","button","routerLink","/forgetPassword",1,"text-main"],["class","text-center text-danger pt-2",4,"ngIf"],[1,"alert","alert-danger","w-50","mx-auto","small","text-center","mt-1"],["class","mb-0 ",4,"ngIf"],[1,"mb-0"],[1,"alert","alert-danger","w-75","mx-auto","small","text-center","mt-1"],["class","mb-0",4,"ngIf"],[1,"fa-solid","fa-spinner","fa-spin"],[1,"text-center","text-danger","pt-2"]],template:function(n,o){if(1&n&&(t.TgZ(0,"section")(1,"div",0)(2,"div",1)(3,"h2",2),t._uU(4,"Login Now "),t.qZA(),t.TgZ(5,"form",3),t.NdJ("ngSubmit",function(){return o.handleForm()}),t.TgZ(6,"div",4)(7,"label",5),t._uU(8,"email:"),t.qZA(),t._UZ(9,"input",6,7),t.YNc(11,h,3,2,"div",8),t.qZA(),t.TgZ(12,"div",9)(13,"label",10),t._uU(14,"password:"),t.qZA(),t._UZ(15,"input",11,12),t.YNc(17,x,3,2,"div",13),t.qZA(),t.TgZ(18,"div",14)(19,"button",15),t.YNc(20,T,2,0,"span",16),t._uU(21," Login "),t.qZA(),t.TgZ(22,"p",17),t._uU(23,"?ForgetPassword"),t.qZA()(),t.YNc(24,A,2,1,"p",18),t.qZA()()()()),2&n){const p=t.MAs(10),L=t.MAs(16);let a,m;t.xp6(5),t.Q6J("formGroup",o.loginForm),t.xp6(6),t.Q6J("ngIf",(null==(a=o.loginForm.get("email"))?null:a.errors)&&((null==(a=o.loginForm.get("email"))?null:a.touched)||p.value.length>0)),t.xp6(6),t.Q6J("ngIf",(null==(m=o.loginForm.get("password"))?null:m.errors)&&((null==(m=o.loginForm.get("password"))?null:m.touched)||L.value.length>0)),t.xp6(3),t.Q6J("ngIf",o.isLoading),t.xp6(4),t.Q6J("ngIf",o.msgError)}},dependencies:[u.ez,u.O5,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,_.rH]})}return e})()}}]);