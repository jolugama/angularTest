## Prerequisitos

Antes de nada, para poder usar virtual scroll debemos instalar la librería cdk de angular

```bash
$ npm install @angular/cdk --save
```

Crea un componente e inclúyelo en la ruta.

```bash
$ ng g c pages/virtualScroll
```

## Obtencion de datos de una web (Opcional)

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




```html
<cdk-virtual-scroll-viewport itemSize="50">  
<div *cdkCirtualFor="">

</cdk-virtual-scroll-viewport >
```

