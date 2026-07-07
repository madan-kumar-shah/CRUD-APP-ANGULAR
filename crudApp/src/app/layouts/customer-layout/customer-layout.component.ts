import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';

import { LayoutStateService } from '../../core/services/layout-state.service';

@Component({
  selector: 'app-customer-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.scss']
})
export class CustomerLayoutComponent {

  constructor(
    public layoutState: LayoutStateService
  ) {}

  sidebarWidth = computed(() => this.layoutState.sidebarWidth());

}