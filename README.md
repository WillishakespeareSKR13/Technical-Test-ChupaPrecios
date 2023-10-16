# Technical Test Chupaprecios - Proyecto

Este proyecto, denominado "technical-test-chupaprecios," se desarrolló como parte de una prueba técnica en la que el único requisito especificado fue el uso de React. Sin embargo, decidi ir más allá y explorar tecnologías adicionales para mejorar la calidad y el rendimiento de la aplicación.

En particular, opte por aprovechar la funcionalidad del app router de Next.js para lograr una experiencia de usuario más rápida y fluida. Next.js es conocido por su enrutamiento eficiente, lo que hace que la navegación entre páginas sea extremadamente veloz.

Además, para el aspecto visual, he utilizado Kuma para gestionar los estilos CSS de la aplicación. Sin embargo, es importante destacar que, en futuros desarrollos, podría considerar la inclusión de bibliotecas como Styled Components y Framer Motion para lograr un acabado visual más llamativo a costa de un rendimiento ligeramente superior.

## Live Demo

Puedes acceder a la aplicación en línea a través del siguiente enlace:

[**https://technical-test-chupa-precios.vercel.app/**](https://technical-test-chupa-precios.vercel.app/)

## Scripts

- `dev`: Inicia el servidor de desarrollo de Next.js.
- `build`: Compila la aplicación para producción.
- `start`: Inicia la aplicación en un entorno de producción.
- `lint`: Realiza análisis estático del código utilizando ESLint.

# API de Productos

Este proyecto utiliza la [Fake Store API](https://fakestoreapi.com/products) para obtener datos de productos. La Fake Store API es una fuente de datos simulados que proporciona una amplia variedad de productos ficticios para propósitos de desarrollo y pruebas.

Aquí hay un ejemplo de cómo se puede utilizar esta API en JavaScript:

```javascript
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    // Aquí puedes manejar los datos de productos obtenidos de la API.
  })
  .catch((error) => {
    console.error("Error al obtener datos de la API:", error);
  });
```

## Tecnologías Utilizadas

- **React** (v18.0.0): Una biblioteca de JavaScript para construir interfaces de usuario, elegida como base de este proyecto debido a su amplia adopción en la comunidad y su eficacia en el desarrollo de interfaces interactivas y reactivas.

- **Next.js** (v13.5.4): Un marco de trabajo de React que permite renderizado del lado del servidor y del lado del cliente, proporcionando funcionalidades avanzadas como el enrutamiento con la nueva función `app/router`. Esta elección permite una mejor organización y rendimiento en la navegación de la aplicación.

- **Kuma** (v1.5.1): Una biblioteca de estilos CSS-in-JS zero runtime, que ha sido utilizada para gestionar el diseño y la apariencia de la interfaz de usuario de manera eficiente y mantenible. Kuma fue seleccionada por su facilidad de uso y su capacidad para generar estilos optimizados.

- **Jotai** (v2.4.3): Un estado global de React sin restricciones, elegido por su rapidez y escalabilidad en comparación con otras opciones, como Redux. Jotai permite un manejo del estado más sencillo y efectivo, lo cual es esencial para una aplicación fluida y receptiva.

## Dependencias de Desarrollo

- **ESLint** (v8): Herramienta de análisis estático de código para mantener un código limpio y consistente.
- **TypeScript** (v5): Lenguaje de programación que añade tipado estático a JavaScript para mejorar la calidad del código y facilitar su mantenimiento.

## Dependencias

- Todas las dependencias necesarias para ejecutar la aplicación, incluyendo React, Next.js, Kuma y Jotai, junto con sus respectivas versiones.

---

### Conclusión

En conclusión, el proyecto "Chupaprecios" representa un esfuerzo dedicado a la implementación de tecnologías de vanguardia para brindar una experiencia excepcional a los usuarios. Las elecciones cuidadosamente seleccionadas, como React, Next.js, Kuma y Jotai, se basan en principios de rendimiento, escalabilidad y mantenibilidad.

Estoy comprometido con la entrega de soluciones técnicas sólidas y eficientes. Si tienes alguna pregunta adicional o necesitas asistencia para configurar o ejecutar la aplicación, no dudes en ponerte en contacto con nosotros.

Agradecemos tu interés en mi trabajo y espero que esta aplicación muestre no solo mis habilidades técnicas, sino también mi compromiso con la excelencia en el desarrollo de software.
