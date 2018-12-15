# Angular 7 - Formularios

Tutorial para crear de 0 los dos tipos de formulario que hay en Angular. Ver [demo](https://jolugama.com/apps/angularTest/).

Para descargar el código fuente, [código github](https://jolugama.com/apps/angularTest/).

## 1. Setup: Crear nuevo proyecto

Lo primero de todo es crear un proyecto angular, en este caso, angular 7, funciona en todas las versiones anteriores.
```bash
$ ng new formularios
```

## 2. Bootstrap: Un poco de estilo...

Para no partir de 0 en los estilos, vamos a trabajar con bootstrap 4. Así nos centramos en el código y no en la maquetación.

Instala bootstrap y configura. 

```bash
$ npm install bootstrap popper.js jquery --save
```

**angular.json**

```json
...
"styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js",
    "node_modules/popper.js/dist/umd/popper.min.js"
]
...
```

## 3. FormsModule

Importa este módulo, necesario para usar formularios e inputs en angular

**app.module.ts**

```typescript
import {FormsModule} from '@angular/forms';
```

## 4. Tipos de formulario

Hay dos maneras de hacer formularios en Angular, template y reactive. Las diferencias son:


**Template Driven**

- fácil de usar
- adecuado para escenarios simples.
- similar a AngularJS
- two way data binding (usando [(NgModel)] syntax)
- código de componente mínimo
- seguimiento automático del formulario y sus datos (manejado por Angular)
- test unitarios difíciles de implementar


**Reactive Forms**

- más flexible, pero necesita mucha práctica.
- adecuado en escenarios complejos
- No se realiza ningún data binding (`immutable data model`  preferido por la mayoría de los desarrolladores)
- Más código de componente y menos marcado HTML
- Se pueden hacer transformaciones reactivas tales como
  - Manejando un evento basado en `debounce time`.
  - Manejo de eventos cuando los componentes son distintos hasta que se modifican.
- Adición de elementos dinámicamente
- test unitarios fáciles de usar


<!-- modificar este parte -->
<!-- En un input:
se debe añadir  ngModel y name. 
required: fuerza a validar ese campo
Se puede usar minlength="6", maxlength="25"

En formulario:
No validar formulario con html5: añadir en form novalidate=""
submit: (ngSubmit)="enviarFormulario()"

## Por template
Para obtener la data y el formulario completo: 

```html
<form (ngSubmit)="guardar(miformulario)" #miformulario="ngForm" novalidate="">
```

```typescript
guardar(miformulario:NgForm){ 
    console.log(miformulario); 
}
``` -->

<!-- fin modificar este parte -->


### 4.1. Template Driven forms

Lo primero de todo es crear el modelo del formulario, contiene todos los elementos (input, select, radio,...) necesarios.


**src/app/models/user.ts**

```typescript
 export class Hero {

  constructor(
    public id: number,
    public name: string,
    public color: string,
    public sex: string,
    public isOk: boolean,
    public email?: string
  ) {  }

}
```

Crea la página donde estará el formulario:

```bash
$ ng g c pages/templateDrivenForms
```

<!-- **src/app/pages/template-driven-forms/template-driven-forms.component.html**

```html

``` -->


### 4.1.1. Estado de control y validez con ngModel

Estos son los 3 estados posibles. 

```
                                      true           false
El control ha sido visitado  ----->  ng-touched - ng-untouched
El valor del control ha cambiado ->  ng-dirty --- ng-pristine
El valor del  control es válido -->  ng-valid --- ng-invalid
```


**src/app/pages/template-driven-forms/template-driven-forms.component.html**

### 4.1.2. Form

```html
<form (ngSubmit)="onSubmit(userForm)" #userForm="ngForm" novalidate="">
```
- `novalidate`: para que no valide por html5. De esta manera podremos hacerlo por angular.
- `#userForm="ngForm"`: asignamos el formulario en la variable userForm. A través de el podremos ver si el formulario es válido, y si no lo es, que campos están con errores, así como el valor de cada uno.
- `(ngSubmit)="onSubmit(userForm)"`: El submit de angular. Se le pasa una función con el formulario para comprobar su estado. Se evalua con: `userForm.form.valid`.

### 4.1.3. Input text

```html
<div class="form-group">
  <label for="name">Nombre *</label>
  <input type="text" class="form-control" id="name" required [(ngModel)]="myUser.name" name="name" #name="ngModel"
    minlength="5">
  <div [hidden]="name.valid || name.pristine" class="alert alert-danger">
    <div *ngIf="name.errors?.required">
      Este campo es requerido.
    </div>
    <div *ngIf="name.errors?.minlength">
      Por lo menos {{ name.errors.minlength.requiredLength}} caracteres.
    </div>
  </div>
</div>
```

- `required`: Se le proporciona a un campo para que sea obligatorio su completado
- `minlength`: Obliga a que el campo tenga un mínimo de caracteres.
- `maxlength`: Obliga a que el campo tenga un máximo de caracteres.
- `[(ngModel)]="myUser.name" name="name" #name="ngModel"`: Es obligatorio poner un name, en ngModel guardamos el valor en el objeto myUser. El tag  #name sirve para poder realizar el control de errores por mensaje.
- `<div *ngIf="name.errors?.required">`: si name contiene errores, en este caso, si hay error porque es requerido y está vacío. Cuando no hay errores, errors es null, de ahí el `?`.
- `pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"`: patrón que debe serguir un input para que no de error en cada pulsación. En este caso se trata de un patrón para emails. 

### 4.1.4. Select

```html
<div class="form-group">
  <label for="color">Color *</label>
  <select class="form-control" id="color" required [(ngModel)]="myUser.color" name="color" #color="ngModel">
    <option *ngFor="let color of colors" [value]="color">{{color.color}}</option>
  </select>
  <div [hidden]="color.valid || color.pristine" class="alert alert-danger">
    Color es obligatorio
  </div>
</div>
```

- `[(ngModel)]="myUser.color" name="color" #color="ngModel"`: El mismo caso que en input.


### 4.1.5. Input radio

```html
<div class="form-group">
  <div> <label>Sexo</label></div>
  <div class="custom-control custom-radio custom-control-inline" *ngFor="let item of sexKeys2">
    <input type="radio" id="sexo{{item}}" [(ngModel)]="myUser.sex" [value]="item" name="sex" class="custom-control-input">
    <label class="custom-control-label" for="sexo{{item}}">{{item}}</label>
  </div>
</div>
```
-  `[(ngModel)]="myUser.sex" [value]="item" name="sex"`: El mismo caso que en input, salvo que no se le asigna #, ya que no tendrá contror de errores, ya tiene un valor por defecto.


### 4.1.6. Checkbox

```html
<div class="form-group">
  <div> <label>Acepta</label></div>
  <div class="custom-control custom-checkbox">
    <input type="checkbox" required [(ngModel)]="myUser.isOk" name="isOk" class="custom-control-input" id="customCheck1">
    <label class="custom-control-label" for="customCheck1">Acepta las condiciones</label>
  </div>
</div>
```


## 4.2. Reactive forms

Crea la página donde estará el formulario:

```bash
$ ng g c pages/reactiveForms
```

### 4.2.1 Importaciones necesarias

Importa este módulo, necesario para usar formularios e inputs en angular

**app.module.ts**

```typescript
import {ReactiveFormsModule} from '@angular/forms';
```


**src/app/pages/reactive-forms/reactive-forms.component.ts**

```typescript
import { FormGroup, FormControl, Validators } from '@angular/forms';
```

### 4.2.2 Formulario básico reactivo

```typescript
miFormulario: FormGroup;

constructor() {
  this.miFormulario = new FormGroup({
    'nombre': new FormControl('Jose'),
    'apellido': new FormControl(),
    'correo': new FormControl()
  });
}

miSubmit() {
  console.log(this.miFormulario.value);
  console.log(this.miFormulario );
}
```

```html
...
 <form [formGroup]="miFormulario" (ngSubmit)="guardarCambios()" novalidate="">
...

 <input class="form-control" type="text" placeholder="Nombre" formControlName="nombre">
 <input class="form-control" type="text" placeholder="Apellido" formControlName="apellido">
 <input class="form-control" type="email" placeholder="Correo electrónico" formControlName="correo">

...
```

### 4.2.3 Validaciones

Tiene dos pasos, por la parte del código, se añade mediante corchetes las validaciones que se requiera.


```typescript
this.miFormulario = new FormGroup({
      'nombre': new FormControl('Jose', [
        Validators.required,
        Validators.minLength(3)
      ]),
      'apellido': new FormControl('', [
        Validators.required
      ]),
      'correo': new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ])
    });
```

Solo queda añadir unos divs, igual que el form por template.

```html
 <input class="form-control" 
  [ngClass]="{'is-invalid': !miFormulario.get('nombre').valid}"
  type="text" placeholder="Nombre" formControlName="nombre">
  <div *ngIf="miFormulario.controls['nombre'].errors?.required" class="invalid-feedback">
      El nombre es necesario
  </div>
  <div *ngIf="miFormulario.controls['nombre'].errors?.minlength" class="invalid-feedback">
      Por lo menos 3 caracteres
  </div>
 ```

### 4.2.4 Objetos complejos

Supongamos que nombre y apellido lo queremos englobar en un objeto llamado nombreCompleto.

Quedaría así:

```typescript
  miFormulario: FormGroup;
  usuario: Object = {
    nombreCompleto: {
      nombre: 'Jose Luisote',
      apellido: 'Garcia'
    },
    correo: 'joseluis@jolugama.com'
  };

  constructor() {
    this.miFormulario = new FormGroup({
      'nombreCompleto': new FormGroup({
        'nombre': new FormControl('Jose', [
          Validators.required,
          Validators.minLength(3)
        ]),
        'apellido': new FormControl('', [
          Validators.required
        ]),
      }),
      'correo': new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ])
    });
  }
```

```html
...
<form [formGroup]="miFormulario" (ngSubmit)="guardarCambios()" novalidate="">
  ...
   <input class="form-control" type="text" placeholder="Nombre" formControlName="nombre" [ngClass]="{'is-invalid': !miFormulario.get('nombreCompleto.nombre').valid}">
  <div *ngIf="miFormulario.get('nombreCompleto.nombre').errors?.required" class="invalid-feedback">
    El nombre es necesario
  </div>
  <div *ngIf="miFormulario.get('nombreCompleto.nombre').errors?.minlength" class="invalid-feedback">
    Por lo menos 3 caracteres
  </div>
  ...
```

### 4.2.5 Reset y valores por defecto

Para añadir valores por defecto a los campos:

```typescript
this.miFormulario.setValue(this.usuario);
```

Para borrar los valores y dejar los estados por defecto

```typescript
this.usuarioVacio: Object = {
  nombreCompleto: {
    nombre: '',
    apellido: ''
  },
  correo: ''
};
this.miFormulario.reset(this.usuarioVacio);

```


### 4.2.6 Controles dinámicos utilizando arrays

Crear dinámicamente input text mediante FormArray.

```typescript
import { FormArray } from '@angular/forms';
...
  usuario: Object = {
    ...
    aficciones: ['tocar la armónica']
  };

  agregarAficciones() {
    (<FormArray>this.miFormulario.controls['aficciones']).push(
      new FormControl('', Validators.required)
    );
  }
```

```html
<div class="form-group row">
  <label class="col-2 col-form-label">Aficciones</label>
  <div class="col-md-8" formArrayName="aficciones">
    <input class="form-control" type="text" *ngFor="let item of miFormulario.controls['aficciones'].controls; let i=index"
      [formControlName]="i">
  </div>
  <button type="button" (click)="agregarAficciones()" class="btn btn-primary">Nuevo </button>
</div>
```


### 4.2.7 Suscripción en cambios de estado y valor

Cuando se escribe, o se cambia el estado de un input, se puede controlar de la siguiente manera:

```typescript
this.miFormulario.controls['username'].valueChanges.subscribe(data => {
  console.log(data);
});

this.miFormulario.controls['username'].statusChanges.subscribe(data => {
  console.log(data);
});
```

### 4.2.8 Validaciones asíncronos

Mediante este ejemplo, simulamos con una función con setTimeout, una validación asíncrona de un posible servicio que tenga que validar un campo. 

```typescript
...
 'username': new FormControl('', [Validators.required],
        [this.UserExist]
      ),
...

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
```


```html
<div class="form-group row">
  <label class="col-3 col-form-label">Username</label>
  <div class="col-8">
    <input class="form-control" type="text" placeholder="username" formControlName="username">
  </div>
</div>
```


### 4.2.9 Validaciones personalizadas

```typescript
  ...
  'password2': new FormControl('', [
        Validators.required,
        this.match('password1')
      ])
  ...


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
```


### 4.2.10 formBuilder

  La creación manual de instancias de control de formulario puede volverse repetitiva cuando se trata de formularios múltiples. El servicio FormBuilder proporciona métodos convenientes para generar controles.

```typescript
import { FormBuilder } from '@angular/forms';

...

constructor(private fb: FormBuilder) { 
  this.miFormulario = this.fb.group({
  'nombreCompleto': this.fb.group({
    'nombre': this.fb.control('Jose', [
      Validators.required,
      Validators.minLength(3)
    ]),
  ...
}

```
