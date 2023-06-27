import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent, PageNotFoundComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [NavbarComponent, SidebarComponent],
})
export class CoreModule {}
