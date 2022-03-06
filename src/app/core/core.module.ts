import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '@core/components/footer/footer.component';
import { HeaderComponent } from '@core/components/header/header.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [FooterComponent, HeaderComponent],
})
export class CoreModule {}
