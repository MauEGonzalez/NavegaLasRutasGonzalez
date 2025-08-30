# FiguStore  🏪

Este es el proyecto final para el curso de React. FiguStore es una aplicación de e-commerce completamente funcional desarrollada como una Single Page Application (SPA). La temática de la tienda es la venta de figuras de colección de Anime, Marvel y DC Comics, con datos hosteados en Firebase.

**Link al Deploy en Vercel:** https://proyectofinalgonzalez-jv1mwv235.vercel.app/category/Anime

---

## Características Principales ✨

* **Catálogo de Productos:** Visualización de productos cargados desde una base de datos en **Firestore**.
* **Navegación por Categorías:** Filtra productos por categorías utilizando **React Router**.
* **Vista de Detalle:** Cada producto tiene su propia página con una descripción detallada.
* **Carrito de Compras:** Funcionalidad completa para agregar productos, modificar cantidades, eliminar ítems y vaciar el carrito, todo gestionado con **Context API**.
* **Sistema de Recomendaciones:** Muestra productos aleatorios o relacionados en la página del carrito para incentivar la compra.
* **Checkout y Órdenes de Compra:** Un formulario de checkout que, al completarse:
    * Verifica el stock de los productos en tiempo real.
    * Genera una orden de compra en Firestore.
    * Actualiza el stock de los productos comprados de forma atómica.
* **Páginas Adicionales:** Secciones "Quiénes Somos" y "Contáctanos" con un formulario que guarda los mensajes en Firestore.
* **Deploy:** La aplicación está desplegada en **Vercel** para acceso público.

---

## Tecnologías Utilizadas 🛠️

* **React.js:** Librería principal para la construcción de la interfaz de usuario.
* **Vite:** Herramienta de desarrollo y empaquetado de alta velocidad.
* **React Router DOM:** Para la gestión de rutas y navegación en la SPA.
* **Firebase / Firestore:** Como servicio de backend para la base de datos de productos, órdenes de compra y mensajes de contacto.
* **React Icons:** Para la inclusión de íconos SVG.
* **CSS Modules:** Para un estilado modular y encapsulado por componente.

---

## Instalación y Puesta en Marcha 🚀

Sigue estos pasos para levantar el proyecto en tu entorno local.

**1. Clonar el repositorio:**
```bash
git clone [https://github.com/MauEGonzalez/entregaFinalGonzalez.git]
```

**2. Instalar dependencias:**
Navega a la carpeta del proyecto e instala los paquetes necesarios.
```bash
cd entregaFinalGonzalez
npm install
```

**3. Configurar las variables de entorno:**
Crea un archivo `.env` en la raíz del proyecto. Este archivo contendrá las credenciales de Firebase. **Este archivo no se sube a GitHub por seguridad.**

Copia el siguiente formato y reemplaza los valores con tus credenciales de Firebase:
```
VITE_API_KEY=AIzaSyCHLP2lFS_GUVdp5dkBIY5YcpPvi2EqgP8
VITE_AUTH=figustore-40ffe.firebaseapp.com
VITE_PROJECT=figustore-40ffe
VITE_STORAGE=figustore-40ffe.firebasestorage.app
VITE_MESSAGIN=369313883644
VITE_APP=1:369313883644:web:196e3c5321f7735e323e79

```

**4. Ejecutar la aplicación:**
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`.