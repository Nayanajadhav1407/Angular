import { Component } from '@angular/core';
import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(){

  }
  ngOnInit():void
  {

  }
  user_records: any[] = [];
  data = {
    name: "",
    email: "",
    mobile: "",
    address: "",
    password: ""
  }

  doRegistration(Values: any) {
   this.user_records = JSON.parse(localStorage.getItem("users") || "{}");

    if(this.user_records.some((v)=> {
        return v.email==this.data.email
    }))
     {
        alert("Duplicate data");
    }
    else {
       this.user_records.push(this.data)
        {
        localStorage.setItem("users", JSON.stringify(this.user_records));
        alert("Hii "+this.data.name + " you are Successfully registerd"  );         
        }
        
    }
  }

}
