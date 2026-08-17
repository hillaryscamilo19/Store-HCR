import { Component } from '@angular/core';
import { Logincomponent } from "./login/logincomponent/logincomponent";
import { Registrocomponet } from "./registro/registrocomponet/registrocomponet";

@Component({
  selector: 'app-auth',
  imports: [Logincomponent, Registrocomponet],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {

}
