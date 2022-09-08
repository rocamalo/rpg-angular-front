import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrimengModule } from './modules/primeng/primeng.module';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';



@NgModule({
  declarations: [
    CardComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    UploadFileComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    CardComponent,
    FooterComponent,
    PrimengModule,
    LoadingSpinnerComponent,
    UploadFileComponent
  ]
})
export class SharedModule { }
