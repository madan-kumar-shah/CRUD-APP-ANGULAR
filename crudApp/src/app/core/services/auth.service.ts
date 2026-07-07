import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly currentRole = signal<'ADMIN' | 'CUSTOMER'>('CUSTOMER');

  setRole(role: 'ADMIN' | 'CUSTOMER') {

    this.currentRole.set(role);

  }

}