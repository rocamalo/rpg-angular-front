import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UploadFileService } from '../../services/upload-file.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {


  progress!: number;
  message!: string;

  @Output() public onUploadFinished = new EventEmitter();
  constructor(    
    private uploadFileService: UploadFileService,
    private userService: UserService) { }

  ngOnInit(): void {
  }

  uploadFile(files: any) {
    this.uploadFileService.uploadFile(files)?.subscribe({
      next: (event: any) => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / event.total);
      else if (event.type === HttpEventType.Response) {
        this.message = 'Upload success.';
        this.onUploadFinished.emit(event.body);
        this.userService.getUserInformation().subscribe();
      }
    },
    error: (err: HttpErrorResponse) => console.log(err)
  });
  }
}
