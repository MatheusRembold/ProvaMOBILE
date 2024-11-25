import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private saldoSubject:BehaviorSubject<number> = new BehaviorSubject(0)

  saldo$ = this.saldoSubject.asObservable();

  constructor() { 
    
  }

  public depositar(valor:number){
    this.saldoSubject.next(this.saldoSubject.value + valor)
  }

  public sacar (valor:number){
    this.saldoSubject.next(this.saldoSubject.value - valor)
  }



}
