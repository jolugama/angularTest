import { Component, OnInit } from '@angular/core';
import { User, sexEnum } from 'src/app/models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent implements OnInit {
  colors: Object = [
    { id: 0, color: 'rojo' },
    { id: 1, color: 'amarillo' },
    { id: 2, color: 'azul' },
    { id: 3, color: 'verde' }
  ];
  debugger;
  sexKeys = Object.keys(sexEnum);
  sexKeys2: any = this.sexKeys.slice(this.sexKeys.length / 2);
  // sexKeys = objectEnum.slice( objectEnum.length / 2 );

  myUser = new User(18, 'Vito Corleone', this.colors[0], 'hombre', false, 'donvito@gmail.com');

  submitted = false;

  onSubmit(userForm: NgForm) {
    console.log('form', userForm);
    console.log('form controls', userForm.controls);
    console.log('form value', userForm.value);
    console.log('myUser', this.myUser);

    if (userForm.form.valid) {
      this.submitted = true;
    } else {
      console.log('FORMULARIO INVALIDO');
    }

  }


  newUser() {
    this.myUser = new User(18, 'here name ;)', this.colors[0], 'mujer', false, '');
  }
  constructor() { }

  ngOnInit() {
  }

}
