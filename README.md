# API REST - Aires Pepito (Node.js & MongoDB) ❄️🏢

API RESTful desarrollada con **Node.js**, **Express** y **MongoDB** para la gestión del catálogo de aires acondicionados de la empresa **Pepito.com**.

## 📋 Descripción del Proyecto

Esta API permite gestionar el inventario de equipos de aire acondicionado, ofreciendo funcionalidades CRUD completas y endpoints específicos de búsqueda y filtrado. La configuración de conexión a la base de datos se maneja de forma segura mediante variables de entorno.

## 💾 Base de Datos y Modelo de Datos

* **Base de Datos**: `AiresPepito`
* **Colección**: `misAires`

### Esquema de la Entidad (`Aire`)

Todos los campos son obligatorios tanto a nivel de API como en la validación del esquema de MongoDB:

| Campo | Tipo | Requerido | Descripción |
| :--- | :--- | :--- | :--- |
| `modelo` | String | Sí | Modelo del aire acondicionado |
| `marca` | String | Sí | Marca del fabricante |
| `color` | String | Sí | Color del equipo |
| `precio` | Number | Sí | Precio en euros/moneda local |
| `energia` | String | Sí | Clasificación energética (ej. A+++, A++) |
| `descripcion` | String | Sí | Descripción detallada del producto |

---

## 🛠️ Configuración del Entorno (`.env`)

Crea un archivo `.env` en la raíz del proyecto para definir la cadena de conexión y puerto:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/AiresPepito
```

---

## 🌐 Endpoints de la API

Ruta base: `/api/v2/airespepito`

### 1. Ruta Principal
* **GET `/`**
  * **Respuesta**: Status `404 Not Found` informando que la API se encuentra en `/api/v2/airespepito`.

### 2. Operaciones CRUD Básicas
* **GET `/api/v2/airespepito/misAires`**
  * Obtiene todos los aires acondicionados.
  * **Errores**: `400 Bad Request`.

* **GET `/api/v2/airespepito/idAire/:id`**
  * Obtiene un aire acondicionado específico por su ID de MongoDB.
  * **Errores**: `404 Not Found` (si el ID no existe), `400 Bad Request` (ID inválido o error de consulta).

* **POST `/api/v2/airespepito/nuevoAire`**
  * Crea un nuevo registro. Requiere enviar todos los campos obligatorios en el cuerpo de la petición (JSON).
  * **Errores**: `400 Bad Request` (datos faltantes o no válidos).

* **PUT `/api/v2/airespepito/actualizarAire/:id`**
  * Actualiza la información completa de un aire acondicionado por su ID de MongoDB.
  * **Errores**: `404 Not Found` (si no existe), `400 Bad Request` (datos no válidos o ID incorrecto).

* **DELETE `/api/v2/airespepito/borrar/:id`**
  * Elimina un registro dado su ID de MongoDB.
  * **Errores**: `404 Not Found` (si no existe), `400 Bad Request`.

### 3. Consultas y Filtros Especiales
* **GET `/api/v2/airespepito/buscar/:parametro`**
  * Busca registros que coincidan con la `marca`, `modelo`, `color` o `energia` indicados en el parámetro.
  * **Errores**: `400 Bad Request`.

* **GET `/api/v2/airespepito/precio?precio=VALOR`**
  * Retorna los aires acondicionados con precio estrictamente superior al valor enviado por query param.
  * **Errores**: `400 Bad Request`.

* **GET `/api/v2/airespepito/modelo/:modelo`**
  * Busca aires acondicionados por un modelo específico.
  * **Errores**: `400 Bad Request`.

* **GET `/api/v2/airespepito/buscarModDesc/:contenido`**
  * Busca registros cuyo `modelo` y `descripcion` coincidan con el valor indicado.
  * **Errores**: `400 Bad Request`.

---

## ⚙️ Instalación y Puesta en Marcha

1. **Clonar el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd api-aires-pepito
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar las variables de entorno:**
   Crea el archivo `.env` según la sección especificada arriba.

4. **Ejecutar el servidor:**
   ```bash
   # Modo desarrollo
   npm run dev

   # Modo producción
   npm start
   ```

---

## 👨‍💻 Autor

Desarrollado por **Francisco Belda**.

Aprende más sobre Node.js, Express, desarrollo de APIs y programación web en su canal de YouTube:
👉 [Canal de YouTube de Francisco Belda](https://www.youtube.com/@franciscobelda)
