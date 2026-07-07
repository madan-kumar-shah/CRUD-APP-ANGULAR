import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LayoutStateService } from '../../core/services/layout-state.service';

@Component({
    selector: 'app-header',
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatBadgeModule,
        MatMenuModule,
        MatInputModule,
        MatFormFieldModule
    ],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public layoutState: LayoutStateService
  ) {}

  toggleSidebar(): void {
    this.layoutState.toggleSidebar();
}

toggleTheme(): void {
  this.layoutState.toggleTheme();
}

  toggleFullScreen(): void {

    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }

  }

  logout(): void {
    console.log('Logout');
  }

}