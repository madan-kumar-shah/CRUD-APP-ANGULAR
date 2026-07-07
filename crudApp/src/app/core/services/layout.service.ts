import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private readonly _sidebarCollapsed = signal(false);

  readonly sidebarCollapsed = this._sidebarCollapsed.asReadonly();

  toggleSidebar(): void {
    this._sidebarCollapsed.update(value => !value);
  }

  openSidebar(): void {
    this._sidebarCollapsed.set(false);
  }

  closeSidebar(): void {
    this._sidebarCollapsed.set(true);
  }
}