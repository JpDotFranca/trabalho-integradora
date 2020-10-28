import { Component, Input } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public MostrarFormularioLogin: boolean = false;

  public MostrarFormularioLoginClick(): void {
    this.MostrarFormularioLogin = true;
  }


}
