import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    public toastr: ToastrService
  ) { }

  toast(data: any){
    console.log(data);
    switch(data.type) {
      case 'success':
        this.toastr.success(data.message);
      break;
      case 'danger':
        this.toastr.error(data.message);
      break;
      case 'warning':
        this.toastr.info(data.message)
      break;
      
    }
  }
}
