import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  template: `
<div class="main bg-black d-flex align-items-center justify-content-center text-white">

<div class="bg-dark p-4 rounded-2 w-25">

    <h1 class="text-center mb-4">Login</h1>

    <form class="needs-validation my-3">
        <div class="form-group mb-3 was-validated">
            <label class="form-label" for="email">Email</label>
            <input class="form-control mt-2" type="email" id="email" required>
            <div class="invalid-feedback">
                Inserire Email
            </div>
        </div>
        <div class="form-group mb-3 was-validated">
            <label class="form-label" for="password">Password</label>
            <input class="form-control mt-2" type="password" id="password" required>
            <div class="invalid-feedback">
                Inserire Password
            </div>
        </div>
        <div class="form-group mb-3 form-check">
            <input class="form-check-input mt-1" type="checkbox" id="check">
            <label class="form-check-label" for="check">Ricordami</label>
        </div>
        <input class="btn btn-danger w-100 mt-2 mb-4 fs-5" type="submit" value="LOGIN">
        <h4>Non hai un account? <a  [routerLink]="['/register']" class="text-decoration-none text-white fw-bold">Registrati</a></h4>
    </form>

</div>

</div>
  `,
  styles: [`

.main {
    height: 100vh;
}
  `
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
