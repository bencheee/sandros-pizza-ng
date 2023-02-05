import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, FooterComponent],
})
export class NavigationModule {}
