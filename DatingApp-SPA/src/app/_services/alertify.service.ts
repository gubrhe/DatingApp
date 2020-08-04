import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';
import { SubjectSubscriber } from 'rxjs/internal/Subject';
import { SelectControlValueAccessor } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
  hej: string;

constructor() { }



confirm(message: string, okCallback: () => any){
  alertify.confirm(message, (e : any) => {
    if(e){
      okCallback();
      } else {}
  });
}
  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }
  warning(message: string) {
    alertify.warning(message);
  }
  message(message: string) {
    alertify.message(message);
  }

}