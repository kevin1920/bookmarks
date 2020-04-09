# PRÁCTICA APIS - HTML

## SIMULADOR DE BOOKMARKS - MARCADORES DEL NAVEGADOR

Realizar una página web donde pueda tú puedas registrar links de internet que son de interes.
Por ejemplo puedes guardar links de videos de youtube, imagenes, páginas.
Los datos a ingresar son url(obligatorio), nombre(obligatorio), descripción(opcional)

### Items a calificar

1. Creación del API y conexión con base de datos.
2. Guardar en la base de datos desde el postman y la página web.
3. Consultar información desde la base de datos desde el postman y la página web

### RETOS

1. Eliminar un dato desde la página web utilizando axios o fetch
2. Modificar un dato desde la página web utilizando axios o fetch

```json
{
  "id": "autoincremento",
  "url": "",
  "nombre": "",
  "descripcion": ""
}
```

El simulador debe de guardar y consultar los datos desde una base de datos postgres, a continuación dejo códigos de ayuda.

```js
// Consultar datos con axios
axios
  .get("url")
  .then((response) => {
    // handle success
    console.log(response);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  });

// Enviar  datos con axios para guardar
axios
  .post("url", { este es el objeto con los datos})
  .then((response) => {
    // handle success
    console.log(response);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  });
```

```sql
-- Crear una tabla de marcadores
CREATE TABLE public.marcadores
(
    id integer NOT NULL DEFAULT nextval('marcadores_id_seq'::regclass), --Id auto incremento
    url text,
    nombre varchar varying,
    descripcion text
)
```
