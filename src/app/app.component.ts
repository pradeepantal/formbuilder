import { Component, ViewChild, ElementRef } from '@angular/core';
import { Formio, FormioForm } from 'formiojs';
// import { FormioForm } from 'formiojs/full';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('json') jsonElement?: ElementRef;
  @ViewChild('json2') jsonElement2?: ElementRef;
  public form: Object = {
    components: []
  };
  form2: Object = {
    components: []
  };

  formSrc = {};
  form2Src = {};

  // Custom component properties
  title = 'app';
  offlineCount = 0;
  offlineMode: any = null;
  offlineError = '';

  constructor() {
    // Remove perticular component
    // Formio.registerComponent('password', { disabled: true });


  }

  onChange(event) {
    this.jsonElement.nativeElement.innerHTML = '';
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
    debugger
    this.formSrc = JSON.parse(this.jsonElement.nativeElement.innerHTML);

    console.log("form object is: ", this.form);
    // this.form2['components'] = JSON.parse(this.formSrc['components']);
    // console.log(this.form2);
    this.form2 = JSON.parse(JSON.stringify(this.form));


  }

  onForm2Change(event) {
    debugger
    this.jsonElement2.nativeElement.innerHTML = '';
    this.jsonElement2.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
    this.form2Src = JSON.parse(this.jsonElement2.nativeElement.innerHTML);
  }

  // Form render onChnage method
  onRenderChange(event: any) {
    debugger
    console.log(this.jsonElement.nativeElement.innerHTML);
  }
  // On submit 
  onFormSubmit(event: any) {
    debugger
    console.log(this.jsonElement.nativeElement.innerHTML);
  }


}
