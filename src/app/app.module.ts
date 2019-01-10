import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { MatButtonModule,
	MatIconModule,
}
from '@angular/material';
import { UploadButtonComponent } from './upload-button/upload-button.component';

@NgModule({
	declarations: [
	AppComponent,
	UploadButtonComponent
	],
	imports: [
	BrowserModule,
	HttpClientModule,
	BrowserAnimationsModule,
	MatButtonModule,
	MatIconModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
