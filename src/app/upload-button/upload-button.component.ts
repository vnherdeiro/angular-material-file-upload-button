import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
	selector: 'app-upload-button',
	templateUrl: './upload-button.component.html',
	styleUrls: ['./upload-button.component.css']
})
export class UploadButtonComponent implements OnInit {

	@Input() upload_url:string;
	@Input() callback = (ret,) => {};


	constructor( private http: HttpClient) {}

	ngOnInit() {
	}


	onFileInput(event){
		let fileToUpload = event.target.files[0];
		if (fileToUpload){
			let formData = new FormData(); 
			formData.append('file', fileToUpload, fileToUpload.name);
			this.http.post(this.upload_url, formData).subscribe( this.callback);
		}
	}

}
