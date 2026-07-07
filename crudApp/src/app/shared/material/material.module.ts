import { NgModule } from '@angular/core';

/* Angular Material Modules */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTreeModule } from '@angular/material/tree';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const materialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatBadgeModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatRippleModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatTabsModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatDividerModule,
  MatGridListModule,
  MatStepperModule,
  MatTreeModule,
  MatBottomSheetModule,
  MatProgressBarModule
];

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules]
})
export class MaterialModule {}