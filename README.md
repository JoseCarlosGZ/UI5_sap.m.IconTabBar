# UI5 IconTabBar Demo Application

![Application Screenshot](https://github.com/user-attachments/assets/1228664d-ebec-4c60-8014-ea960248c301)

## Descripción General

Esta es una aplicación de demostración desarrollada con **SAP UI5** que ilustra el uso del componente `sap.m.IconTabBar`. La aplicación muestra cómo implementar y gestionar pestañas con iconos, contadores y navegación programática entre ellas.

## Descripción Técnica

### Tecnologías y Framework

- **Framework**: SAP UI5 (versión mínima 1.111.0)
- **Arquitectura**: MVC (Model-View-Controller)
- **Tema UI5**: Horizon (sap_horizon)
- **Patrón de diseño**: Component-based architecture

### Estructura del Proyecto

```
├── Component.js              # Componente principal de la aplicación
├── manifest.json            # Descriptor de la aplicación (App Descriptor)
├── index.html              # Punto de entrada HTML
├── controller/
│   └── App.controller.js   # Controlador principal con lógica de navegación
├── view/
│   └── App.view.xml        # Vista XML con IconTabBar
├── model/
│   └── models.js           # Modelos de la aplicación
├── i18n/
│   └── i18n.properties     # Recursos de internacionalización
├── css/
│   └── style.css           # Estilos personalizados
└── utils/
    └── locate-reuse-libs.js # Utilidades para localización de librerías

```

### Dependencias UI5

La aplicación utiliza las siguientes librerías de SAP UI5:

- `sap.m` - Librería principal de controles móviles
- `sap.ui.core` - Core de UI5
- `sap.f` - Fiori controls
- `sap.ui.table` - Componentes de tablas
- `sap.suite.ui.generic.template` - Templates genéricos
- `sap.ui.comp` - Componentes inteligentes
- `sap.ui.generic.app` - Aplicaciones genéricas
- `sap.ushell` - Shell de SAP Fiori Launchpad

### Configuración

El componente está configurado en `manifest.json` con:
- **ID de aplicación**: `josecarlosgz.html5module`
- **Namespace**: `josecarlosgz.html5module`
- **Routing**: Configurado con `sap.m.routing.Router`
- **Vista raíz**: `App.view.xml`
- **Soporte de dispositivos**: Desktop, Tablet y Móvil

## Descripción Funcional

### Características Principales

#### 1. IconTabBar con Tres Pestañas

La aplicación presenta un componente `IconTabBar` con tres pestañas interactivas:

**IconTabFilter_01**
- Muestra un contador: `34.45`
- Contiene un texto informativo
- Incluye un botón de navegación hacia la pestaña 3
- Propiedad `showAll="true"` para mostrar todo el contenido

**IconTabFilter_02**
- Contador: `456`
- Icono: `sap-icon://begin`
- Color del icono: Verde (Positive)
- Incluye separador visual antes de esta pestaña

**IconTabFilter_03**
- Icono: `sap-icon://compare`
- Color del icono: Naranja (Critical)
- Destino de la navegación programática

#### 2. Navegación Programática

La aplicación demuestra dos métodos de navegación entre pestañas:

- **Navegación directa**: Mediante el método `setSelectedKey()` del IconTabBar
- **Navegación con evento simulado**: Creación de un objeto evento mock para invocar el handler de selección de pestañas

#### 3. Manejo de Eventos

Cuando el usuario selecciona una pestaña:
1. Se captura el evento mediante `onIconTabBarPress`
2. Se obtiene la clave (`key`) de la pestaña seleccionada usando `oEvent.getParameter("key")`
3. Se identifica la pestaña mediante un `switch` statement
4. Se muestra un `MessageToast` con el nombre de la pestaña seleccionada

### Funcionalidades Técnicas Destacadas

**Mock de Eventos**
```javascript
var oEventMock = { 
    getParameter: function () { return "supuesto KEY del tab presionado"; }
};
this.onIconTabBarPress(oEventMock);
```

Este patrón demuestra cómo simular eventos de UI5 para pruebas o navegación programática. El objeto mock implementa el método `getParameter()` que devuelve el valor esperado por el handler del evento.

**Separador Visual**
El componente `IconTabSeparator` se utiliza para separar visualmente grupos de pestañas.

## Instalación y Ejecución

### Prerrequisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor HTTP (puede ser cualquiera de los siguientes):
  - Python: `python -m http.server 8080`
  - Node.js: `npx http-server -p 8080`
  - Apache/Nginx configurado localmente

### Pasos para Ejecutar

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/JoseCarlosGZ/UI5_sap.m.IconTabBar.git
   cd UI5_sap.m.IconTabBar
   ```

2. **Iniciar un servidor HTTP local**
   
   Opción con Python:
   ```bash
   python -m http.server 8080
   ```
   
   Opción con Python 3:
   ```bash
   python3 -m http.server 8080
   ```
   
   Opción con Node.js:
   ```bash
   npx http-server -p 8080
   ```

3. **Abrir en el navegador**
   ```
   http://localhost:8080
   ```

### Requisitos de Red

La aplicación carga SAP UI5 desde el CDN oficial de SAP:
```
https://sapui5.hana.ondemand.com/resources/sap-ui-core.js
```

Asegúrese de tener conexión a Internet para que la aplicación cargue correctamente.

## Uso de la Aplicación

1. **Navegación mediante pestañas**: Haga clic en cualquiera de las tres pestañas para ver su contenido
2. **Navegación programática**: En la primera pestaña, presione el botón "navTo Tab_03" para navegar automáticamente a la tercera pestaña
3. **Retroalimentación visual**: Cada selección de pestaña muestra un mensaje toast indicando la pestaña seleccionada

## Configuración de Internacionalización

Los textos de la aplicación están externalizados en `i18n/i18n.properties`:
- `appTitle`: Título de la aplicación
- `appDescription`: Descripción de la aplicación
- `title`: Título de la página principal

## Personalización

### Modificar los Iconos

Edite `view/App.view.xml` y cambie la propiedad `icon` del `IconTabFilter`:
```xml
<IconTabFilter icon="sap-icon://new-icon" />
```

Consulte la [Icon Explorer de SAP](https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html) para ver todos los iconos disponibles.

### Cambiar los Colores

Modifique la propiedad `iconColor` con uno de los siguientes valores:
- `Default` (gris)
- `Positive` (verde)
- `Critical` (naranja)
- `Negative` (rojo)

### Agregar Nuevas Pestañas

Agregue nuevos elementos `IconTabFilter` dentro de `IconTabBar` en `App.view.xml`.

## Compatibilidad

- ✅ Escritorio
- ✅ Tablet
- ✅ Móvil
- ✅ Modo Compacto y Cozy

## Autor

**Jose Carlos GZ**

## Licencia

Este proyecto es una demostración educativa del componente IconTabBar de SAP UI5.
