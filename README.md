# CRUD Node.js MySQL
Este repositorio contiene una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) desarrollada en Node.js con MySQL como base de datos. Proporciona una interfaz para gestionar una lista de elementos utilizando las operaciones básicas de una base de datos.

## Instalación

### Clona este repositorio en tu máquina local utilizando Git:

``` git clone https://github.com/tu_usuario/crud-nodejs-mysql.git ```

### Instala las dependencias necesarias utilizando npm:

``` npm install ```

### Para ejecutar la aplicación

Asegúrate de tener una instancia de MySQL en funcionamiento y configura las credenciales de conexión en el archivo src/index.js.
Luego,puedes iniciar el servidor con el siguiente comando:

``` npm start ```

La aplicación estará disponible en http://localhost:3000.

## Características

- Operaciones CRUD: Permite crear, leer, actualizar y eliminar elementos de la base de datos.
- Interfaz de Usuario Amigable: Utiliza plantillas EJS para renderizar las vistas HTML y proporcionar una experiencia de usuario intuitiva.
- Descarga de Datos en formato excel: Utiliza la biblioteca exceljs para generar y descargar datos en formato Excel.

# Tecnologías Utilizadas
- Node.js: Plataforma de desarrollo backend basada en JavaScript.
- Express.js: Framework web de Node.js utilizado para crear la aplicación y definir rutas.
- EJS: Motor de plantillas para generar las vistas HTML de manera dinámica.
- MySQL y MySQL2: Bibliotecas de Node.js para interactuar con la base de datos MySQL.
- ExcelJS: Biblioteca para la generación de archivos Excel en Node.js.

## Estructura del Proyecto
El proyecto está estructurado de la siguiente manera:

```
└── 📁crud-nodejs-mysql-master
    └── .gitignore
    └── 📁database
        └── db.sql
    └── package-lock.json
    └── package.json
    └── pnpm-lock.yaml
    └── project_structure.json
    └── README.md
    └── 📁src
        └── app.js
        └── config.js
        └── 📁controllers
            └── customerController.js
        └── db.js
        └── index.js
        └── 📁public
            └── 📁styles
                └── index.css
        └── 📁routes
            └── customer.routes.js
        └── 📁views
            └── customers.ejs
            └── customers_edit.ejs
            └── 📁partials
                └── _footer.ejs
                └── _header.ejs
```



- Directorio `src/`: Directorio que contiene el código fuente de la aplicación.
  - Archivo principal `index.js/`: Define la configuración del servidor Express y las rutas de la aplicación.
  - Carpeta `controllers/`: Contiene los controladores de Express que manejan la lógica de negocio de la aplicación.
  - Carpeta `models/`: Contiene los modelos de datos y las funciones de acceso a la base de datos.
  - Carpeta `views/`: Contiene las plantillas EJS utilizadas para renderizar las páginas HTML.
- Directorio `public/`: Directorio que almacena archivos estáticos como CSS, JavaScript y recursos multimedia.
- Directorio `routes/`: Directorio que contiene los archivos de enrutamiento de Express para manejar las solicitudes HTTP.
- Directorio `config/`: Directorio que contiene archivos de configuración, como la configuración de la base de datos.

© 2024 Adrian Mayora. Todos los derechos reservados.
