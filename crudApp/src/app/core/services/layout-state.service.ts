import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutStateService {

  private readonly _sidebarCollapsed = signal(false);

  private readonly _loading = signal(false);

  private readonly _pageTitle = signal('Dashboard');

  private readonly _darkTheme = signal(false);

  readonly sidebarCollapsed = this._sidebarCollapsed.asReadonly();

  readonly loading = this._loading.asReadonly();

  readonly pageTitle = this._pageTitle.asReadonly();

  readonly darkTheme = this._darkTheme.asReadonly();

  readonly sidebarWidth = computed(() =>
    this.sidebarCollapsed() ? 72 : 260
  );

  toggleSidebar(): void {
    this._sidebarCollapsed.update(v => !v);
  }

  openSidebar(): void {
    this._sidebarCollapsed.set(false);
  }

  closeSidebar(): void {
    this._sidebarCollapsed.set(true);
  }

  toggleTheme(): void {
    this._darkTheme.update(v => !v);
    document.body.classList.toggle('dark-theme');
  }

  setLoading(value: boolean): void {
    this._loading.set(value);
  }

  setPageTitle(title: string): void {
    this._pageTitle.set(title);
  }
}