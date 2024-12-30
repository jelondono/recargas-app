
# Proyecto de Recargas en Línea - Frontend

## Descripción del Proyecto

Este es el frontend de la aplicación web que permite la venta de recargas en línea. Proporciona funcionalidades para que los usuarios puedan realizar recargas, ver estadísticas de ventas por operador y vendedor, y consultar el historial de recargas.

### Características principales:
1. Interfaz intuitiva para realizar recargas.
2. Estadísticas detalladas por operador y vendedor.
3. Historial de recargas visualizable en tablas organizadas.
4. Diseño responsivo y minimalista con Angular Material.

## Tecnologías Utilizadas

- **Framework**: Angular
- **Lenguaje**: TypeScript
- **Diseño**: Angular Material
- **Comunicación**: HTTP Client para interactuar con la API backend.

## Carpetado

```
src/
├── app/
│   ├── core/
│   │   ├── navbar/
│   │   │   ├── navbar.component.html
│   │   │   ├── navbar.component.scss
│   │   │   ├── navbar.component.ts
│   │   │   └── navbar.module.ts
│   ├── features/
│   │   ├── historical/
│   │   │   ├── components/
│   │   │   │   ├── historical.component.html
│   │   │   │   ├── historical.component.scss
│   │   │   │   ├── historical.component.spec.ts
│   │   │   │   └── historical.component.ts
│   │   │   └── historical.module.ts
│   │   ├── statistics/
│   │   │   ├── components/
│   │   │   │   ├── statistics.component.html
│   │   │   │   ├── statistics.component.scss
│   │   │   │   ├── statistics.component.spec.ts
│   │   │   │   └── statistics.component.ts
│   │   │   └── statistics.module.ts
│   │   ├── topup/
│   │   │   ├── components/
│   │   │   │   ├── topup.component.html
│   │   │   │   ├── topup.component.scss
│   │   │   │   ├── topup.component.spec.ts
│   │   │   │   └── topup.component.ts
│   │   │   └── topup.module.ts
│   ├── services/
│   │   ├── sellers/
│   │   │   ├── seller.service.ts
│   │   ├── statistics/
│   │   │   ├── statistics.service.ts
│   │   │   └── statistics.service.spec.ts
│   │   └── topup/
│   │       ├── recargas.service.ts
│   │       └── recargas.service.spec.ts
```

## Instrucciones para Ejecución

### Requisitos previos
- Node.js v16+ y npm instalados.
- Angular CLI instalado globalmente:
  ```bash
  npm install -g @angular/cli
  ```

### Pasos para ejecutar el proyecto

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/recargas-app.git
   ```
2. Navega al directorio del frontend:
   ```bash
   cd frontend
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   ng serve
   ```
5. Abre tu navegador en `http://localhost:4200`.

## Funcionalidades Principales

1. **Venta de recargas**:
   - Selecciona el operador y el vendedor.
   - Ingresa el número de celular y el monto de recarga.
   - Confirmación de recarga exitosa con notificación visual.

2. **Estadísticas**:
   - Visualización de estadísticas agrupadas por operador y vendedor.
   - Gráficos y métricas básicas para un análisis rápido.

3. **Historial**:
   - Tabla con todas las recargas realizadas.
   - Filtros por operador o vendedor.

## Autor
Desarrollado por Juan Esteban Londoño.

Para cualquier duda o contribución, no dudes en abrir un issue o enviar un pull request en el repositorio GitHub.
