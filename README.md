# 📖 Diccionario - English Dictionary App

Una aplicación móvil para buscar definiciones de palabras en inglés, desarrollada con React Native y Expo.

## 🚀 Características

- Búsqueda de palabras en inglés
- Definiciones detalladas por categoría gramatical (sustantivo, verbo, interjección, etc.)
- Pronunciación fonética
- Ejemplos de uso
- Sinónimos disponibles
- Interfaz moderna con tema oscuro
- Navegación intuitiva entre pantallas

## 📱 Capturas de Pantalla

### Pantalla de Inicio
La pantalla principal da la bienvenida al usuario con un diseño limpio y un botón para comenzar la búsqueda.

![Pantalla de Inicio](./screenshots/home.jpg)

### Pantalla de Búsqueda
Permite al usuario ingresar cualquier palabra en inglés con sugerencias predefinidas.

![Pantalla de Búsqueda](./screenshots/search.jpg)

### Pantalla de Resultados
Muestra definiciones completas organizadas por tipo de palabra, con ejemplos y pronunciación.

![Pantalla de Resultados](./screenshots/result.jpg)

## 🛠️ Tecnologías Utilizadas

- **React Native** - Framework para desarrollo móvil
- **TypeScript** - Tipado estático para JavaScript
- **Expo** - Plataforma para desarrollo rápido
- **React Navigation** - Navegación entre pantallas
- **Dictionary API** - API gratuita para definiciones (https://dictionaryapi.dev/)

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- Node.js (versión 14 o superior)
- npm o yarn
- Expo CLI
- Expo Go (aplicación móvil para pruebas)

## 🔧 Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/manuelputin149-commits/diccionario-app.git
cd diccionario-app

## 📁 Estructura del Proyecto
diccionario-app/
├── src/
│   ├── utils/
│   │   └── screens.ts              # Configuración de nombres de pantallas
│   ├── screens/
│   │   └── Dictionary/
│   │       ├── HomeScreen.tsx       # Pantalla de inicio
│   │       ├── SearchScreen.tsx     # Pantalla de búsqueda
│   │       ├── ResultScreen.tsx     # Pantalla de resultados
│   │       └── index.ts             # Exportaciones
│   └── navigations/
│       └── stacks/
│           └── DictionaryNavigation.tsx  # Configuración de navegación
├── screenshots/                     # Capturas de pantalla
├── App.tsx                          # Punto de entrada de la aplicación
├── package.json
└── README.md

## 🎨 Características de Diseño

- **Tema oscuro**: Paleta de colores moderna (#1a1a2e, #16213e, #0891b2)
- **Tipografía clara**: Optimizada para lectura
- **Espaciado consistente**: Diseño limpio y organizado
- **Feedback visual**: Indicadores de carga y estados de error

## 🌐 API Utilizada

Esta aplicación utiliza la [Free Dictionary API](https://dictionaryapi.dev/):

**Características de la API:**
- Gratuita y sin necesidad de API key
- Respuestas en formato JSON
- Incluye pronunciación fonética
- Múltiples definiciones por palabra
- Ejemplos de uso
- Sinónimos y antónimos

## 📝 Ejemplo de Uso

1. Abre la aplicación
2. Toca "Comenzar búsqueda"
3. Ingresa una palabra en inglés (ej: "hello")
4. Presiona "Buscar" o toca una sugerencia
5. Visualiza las definiciones organizadas por categoría

## 🔮 Mejoras Futuras

- Historial de búsquedas
- Favoritos
- Modo sin conexión (caché)
- Reproducción de audio de pronunciación
- Compartir definiciones
- Búsqueda con autocompletado
- Modo claro/oscuro configurable

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🙏 Agradecimientos

- [Free Dictionary API](https://dictionaryapi.dev/) por proporcionar la API gratuita
- [Expo](https://expo.dev/) por facilitar el desarrollo móvil
- [React Navigation](https://reactnavigation.org/) por el sistema de navegación
