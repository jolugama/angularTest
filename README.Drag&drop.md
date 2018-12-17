## Prerequisitos

Antes de nada, para poder usar virtual scroll debemos instalar la librería cdk de angular

```bash
$ npm install @angular/cdk --save
```

Crea un componente e inclúyelo en la ruta.

```bash
$ ng g c pages/virtualScroll
```

## Importa módulo

Incorpora el módulo scroll

**src/app/app.module.ts**
```typescript
import { ScrollingModule } from '@angular/cdk/scrolling';
...
  imports: [
    ...
    ScrollingModule
  ],
```

## Obtención de datos de una web (Opcional)

Para este ejemplo vamos a conseguir todos los emojis que dispone unicode, a través de una web.

la web en cuestion es: [https://unicode.org/](https://unicode.org/emoji/charts/full-emoji-list.html)
Como se ve es una tabla, con sus tr y sus td.

Para obtenerlo y transformarlo en array sería de esta forma:
```javascript
copy([...document.querySelectorAll('tbody tr td.chars')].map((data)=>{return data.innerText }))
```
- copy: es un comando de chrome que copia al portapapeles. Si pulsas control-v en donde quieras pegarás el contenido.
- querySelectorAll: obtenemos todos los datos, pero ojo, no es array, es dom
- ...[]: transforma el dom en array

En este caso lo he guardado en: **src/app/data/emoji.json**

## Virtual scroll

```html
<div *ngIf="emojiList">
  <cdk-virtual-scroll-viewport itemSize="80" class="">

    <div class="" *cdkVirtualFor="let emoji of emojiList; let i=index; let cuenta=count">
      {{i}} - <span class="emoji">{{emoji}}</span>
    </div>
  </cdk-virtual-scroll-viewport>
</div>
```
- itemSize: es el tamaño del item. Debe concordar con el tamaño real, ya que si no dará saltos raros. 

## Jugando con sus índices

Con un viewChild podemos acceder a un index específico:

**src/app/pages/virtual-scroll/virtual-scroll.component.ts**

```typescript
  ...
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;
  ...
  irInicio() {
    this.viewport.scrollToIndex(0);
  }

  irFinal() {
    this.viewport.scrollToIndex(this.emojiList.length);
  }
```

**src/app/pages/virtual-scroll/virtual-scroll.component.html**

```html
  <button (click)="irInicio()" class="btn btn-primary">Ir inicio</button>
  <button (click)="irFinal()" class="btn btn-primary ">Ir final</button>
```
