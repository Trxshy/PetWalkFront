import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ConsumidorService } from '../services/consumidor.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthConsumidorGuard implements CanActivate {

  constructor(private consumidorService: ConsumidorService, private router: Router){}

  canActivate(): boolean{
    if(this.consumidorService.verificarToken()){
      return true;
    }
    else{
      this.router.navigate(['/consumidor']);
      return false;
    };
  }
  
}
