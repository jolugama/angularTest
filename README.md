
# autenticación Auth0


Proporcionan una plataforma universal de autenticación y autorización para aplicaciones web y móviles.

Este ejemplo es para Angular 7, si bien es 100% compatible para versiones anteriores.


## 1. Registro en Auth0 y configuración

Accede a la web https://auth0.com/ 

1. click en `Use auth0 for free` y `sign up`
2. escribe un dominio `.eu.auth0.com`
3. selecciona una región cercana, en mi caso Europa.
4. tipo de cuenta: personal
5. rol developer
6. onboarding tutorial: 'just playing around'
7. crear cuenta (tarda unos segundos)
8. click botón 'new app'. Ponemos nombre y seleccionamos single page web app.
9. Seleccionamos la tecnología que se use, en este caso es `Angular 2+`

Aquí tenemos 2 opciones, es descargarnos un ejemplo, o seguir paso a paso de forma manual. En este caso lo haremos de la segunda forma.

## 2. Integrando librería Auth0

Instala la libería

```bash
$ npm install --save auth0-js
```

Adjunta la librería a index.html. Elije una de las 2 lineas.

 ```html
 <script type="text/javascript" src="node_modules/auth0-js/build/auth0.js"></script>
<script src="https://cdn.auth0.com/js/auth0/9.5.1/auth0.min.js"></script>
 ```


## 3. Crea un servicio autenticación

Auth0 nos proporciona el código necesario para incorporarlo a nuestro proyecto, tan solo tendremos que crear el archivo, copiar y pegar.

Crea un servicio

```bash
$ ng g s services/auth
```

El siguiente código es copiado y pegado de la web, `no copies este`, sino que debes usar el que te salga a ti en la url.

**src/app/services/auth.service.ts**

```typescript
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _idToken: string;
  private _accessToken: string;
  private _expiresAt: number;

  auth0 = new auth0.WebAuth({
    clientID: 'fBoktnHhX5204zgzGLGN1BPaGvxxxxxx',
    domain: 'jolugama.eu.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid'
  });

  constructor(public router: Router) {
    this._idToken = '';
    this._accessToken = '';
    this._expiresAt = 0;
  }

  get accessToken(): string {
    return this._accessToken;
  }

  get idToken(): string {
    return this._idToken;
  }

  public login(): void {
    this.auth0.authorize();
  }

}
```


Como ves, le he incorporado   providedIn: 'root'
```typescript
@Injectable({
  providedIn: 'root'
})
```

Revisar el puerto de `redirectUri`. En mi caso tengo la 4200, el código me daba el puerto 3000. 

Es decir, que no requiere adjuntarlo en app.module, dentro de providers. (De la vs Angular 6 en adelante)


Añade al servicio estos métodos adicionales. Aparecen en la web.
- handleAuthentication: manejo del servicio. 
- setSession: guardar a localstorage la sesión
- logout: salir de la sesión, borrando localstorage
- isAuthenticated: comprobar si estás autenticado o no.


```typescript
  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    // Set the time that the access token will expire at
    const expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this._accessToken = authResult.accessToken;
    this._idToken = authResult.idToken;
    this._expiresAt = expiresAt;
  }

  public renewSession(): void {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
        this.logout();
      }
    });
  }

  public logout(): void {
    // Remove tokens and expiry time
    this._accessToken = '';
    this._idToken = '';
    this._expiresAt = 0;
    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    return new Date().getTime() < this._expiresAt;
  }

```

## 4. Incorpora un navbar, crea varias rutas y adjunta estos botones

```html
    <button class="btn btn-primary btn-margin" *ngIf="!auth.isAuthenticated()" (click)="auth.login()">
      Log In
    </button>

    <button class="btn btn-primary btn-margin" *ngIf="auth.isAuthenticated()" (click)="auth.logout()">
      Log Out
    </button>
```

En el ts añade:

```typescript
import { AuthService } from './services/auth.service';

...

constructor(private auth: AuthService) {
  auth.handleAuthentication();
}
```

Pulsa al botón login, saldrá un error con un link de settings. Pincha el link.

En allowed Callback URLs añade: `http://localhost:4200/callback`. Pincha en save changes y vuelve a pulsar en login.


## 5. Seguridad, protegiendo vistas con guards

Los `guards` hacen que determinadas áreas de nuestra aplicación web estén protegidas y solo puedan ser accedidas por determinados tipos de usuarios.


Añade la página protegida

```bash
$ ng g c pages/protegida
```

Genera el guard

```bash
$ ng g g services/auth
```

Crea la ruta y vincula el guard

```typescript
...
  {
    path: 'protegida',
    component:   ProtegidaComponent,
    canActivate: [AuthGuard]
  },
...

```

Haz una modificación del guard creado, indica true si es autenticado con auth y false por defecto.

**src/app/services/auth.guard.ts**
```typescript
import { AuthService } from './auth.service';
...
  constructor(private auth: AuthService) { }
...

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.auth.isAuthenticated()) {
      return true;
    }
    console.log('no puedes acceder, acceso denegado');
    // aquí añadir una modal. Yo uso sweet alert 2. https://sweetalert2.github.io
    return false;

  }
```

y esto es todo, ya puedes probar a entrar a la página protegida, logueado, y sin loguear.


## 6. Obtener el perfil de usuario que inició

En este paso, mostramos en la ruta protegida al información que nos devuelve auth.

Para ello debemos modificar nuestro servicio auth:

**src/app/services/auth.service.ts**

```typescript
...
  auth0 = new auth0.WebAuth({
    clientID: 'fBoktnHxX5204cgdGLGN1xxGvO0Cxxx',
    domain: 'jolugama.eu.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid profile' // <---- añade profile
  });
  userProfile: any; // <---- añade 
...

  public getProfile(cb): void {
    if (!this._accessToken) {
      throw new Error('Access Token must exist to fetch profile');
    }

    const self = this;
    this.auth0.client.userInfo(this._accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  }

```

Lo segundo es llamar a profile desde el componente protegido

**src/app/pages/protegida/protegida.component.ts**

```typescript
...
  profile: any;
  objectKeys = Object.keys;
  constructor(public auth: AuthService) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        console.log(profile);
      });
    }
  }


```

y en el html añadimos esto:

```html
<div class="container" *ngIf="profile">

  <div *ngFor="let key of objectKeys(profile)">
    <div *ngIf="key!=='picture'">
      {{key + ' : ' + profile[key]}}
    </div>
    <div *ngIf="key==='picture'">
      <img [src]="profile[key]" alt="">
    </div>
  </div>
  
</div>

```

incorpora unos estilos y listo!.

