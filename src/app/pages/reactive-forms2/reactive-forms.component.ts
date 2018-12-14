import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, AbstractControl } from '@angular/forms';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveForms2Component implements OnInit {

  miFormulario: FormGroup;
  usuario: Object = {
    nombreCompleto: {
      nombre: 'Jose Luis',
      apellido: 'Garcia'
    },
    correo: 'joseluis@jolugama.com',
    aficciones: ['tocar la armónica'],
    username: '',
    password1: '',
    password2: '',
  };

  usuarioVacio: Object = {
    nombreCompleto: {
      nombre: '',
      apellido: ''
    },
    correo: '',
    aficciones: [null]
  };
 
  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      'nombreCompleto': this.fb.group({
        'nombre': this.fb.control('Jose', [
          Validators.required,
          Validators.minLength(3)
        ]),
        'apellido': this.fb.control('', [
          Validators.required
        ]),
      }),
      'correo': this.fb.control('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]),
      'aficciones': this.fb.array([
        this.fb.control('Correr', Validators.required)
      ]),
      'username': this.fb.control('', [Validators.required],
        [this.UserExist]
      ),
      'password1': this.fb.control('', [
        Validators.required,
        //  this.match('password2')
      ]),
      'password2': this.fb.control('', [
        Validators.required,
        this.match('password1')
      ])

    });


    // this.miFormulario.controls['password2'].setValidators([
    //   Validators.required,
    //   this.noIgual.bind(this)
    // ]);

    // setteo de datos
    this.miFormulario.setValue(this.usuario);


    this.miFormulario.controls['username'].valueChanges.subscribe(data => {
      console.log(data);
    });

    this.miFormulario.controls['username'].statusChanges.subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

  guardarCambios() {
    console.log(this.miFormulario.value);
    console.log(this.miFormulario);
    console.log('xx', this.miFormulario.get('nombreCompleto.nombre'));

    // this.miFormulario.reset(this.usuarioVacio);

  }

  agregarAficciones() {
    (<FormArray>this.miFormulario.controls['aficciones']).push(
      this.fb.control('', Validators.required)
    );
  }



  noIgual(control: FormControl): { [s: string]: boolean } {
    if (control.value !== this.miFormulario.controls['password2'].value) {
      return {
        noIgual: false

      };
    }
    return null;
  }


  /** control.value debe ser igual a <FormGroup>.controls[controlKey].value */
  match(controlKey: string) {
    return (control: AbstractControl): { [s: string]: boolean } => {
      // control.parent es el FormGroup
      if (control.parent) { // en las primeras llamadas control.parent es undefined
        const checkValue = control.parent.controls[controlKey].value;
        if (control.value !== checkValue) {
          return {
            match: true
          };
        }
      }
      return null;
    };
  }

  UserExist(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolv, reject) => {
      setTimeout(() => {
        if (control.value === 'admin') {
          resolv({ existe: true });
        } else {
          resolv(null);
        }
      }, 3000);
    });
  }



}
