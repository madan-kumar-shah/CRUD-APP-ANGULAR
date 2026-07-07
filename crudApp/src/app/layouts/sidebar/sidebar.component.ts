import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { LayoutStateService } from '../../core/services/layout-state.service';
import { AuthService } from '../../core/services/auth.service';
import { CUSTOMER_MENU , ADMIN_MENU} from '../../core/constants/navigation';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(
    public layoutState: LayoutStateService,
    private authService: AuthService
  ) {}

  collapsed = computed(() => this.layoutState.sidebarCollapsed());

  menu = computed(() => {

    return this.authService.currentRole() === 'ADMIN'

        ? ADMIN_MENU

        : CUSTOMER_MENU;

});

}