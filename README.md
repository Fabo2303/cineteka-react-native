# Cineteka App - Frontend Mobile

Aplicación móvil desarrollada con React Native y Expo para mostrar la cartelera y horarios de las principales cadenas de cine en Perú. Esta app consume la API desarrollada con Flask y ofrece una interfaz sencilla y accesible desde dispositivos móviles.

## Índice

1. [Características principales](#caracter-sticas-principales)
2. [Tecnologías utilizadas](#tecnologias-utilizadas)
3. [Prerrequisitos](#prerrequisitos)
4. [Instrucciones de uso](#instrucciones-de-uso)
   - [Paso 1: Clonar el repositorio](#paso-1-clonar-el-repositorio)
   - [Paso 2: Instalar dependencias](#paso-2-instalar-dependencias)
   - [Paso 3: Ejecutar la aplicación](#paso-3-ejecutar-la-aplicacion)
5. [Estructura del Proyecto](#estructura-del-proyecto)
6. [Consideraciones](#consideraciones)

## Características principales

- Interfaz intuitiva para ver películas en cartelera
- Visualización de horarios por sede y sala
- Consumo de la API Cineteka con Axios
- Navegación fluida entre pantallas
- Persistencia local (opcional) con AsyncStorage
- Estilos modernos y soporte para múltiples dispositivos

## Tecnologías utilizadas

- **Framework móvil:** React Native (Expo)
- **Lenguaje:** TypeScript
- **Consumo de API:** Axios
- **Almacenamiento local:** AsyncStorage

## Prerrequisitos

- Node.js >= 18.x
- npm o yarn
- Expo CLI instalado globalmente (`npm install -g expo-cli`)

## Instrucciones de uso

### Paso 1: Clonar el repositorio

```bash
git clone https://github.com/Fabo2303/cineteka-react-native.git
cd cineteka-react-native
```

### Paso 2: Instalar dependencias

```bash
npm install
```

### Paso 3: Ejecutar la aplicación

```bash
npx expo start
```

Escanea el código QR con la app Expo Go para ver la aplicación en tu dispositivo.

## Estructura del Proyecto

```
app/
├── components/         # Componentes reutilizables
├── data/               # Modelos y tipos de datos
├── screens/            # Pantallas principales
├── services/           # API y almacenamiento local
├── assets/             # Fuentes e imágenes
├── index.tsx           # Punto de entrada de la app
└── _layout.tsx         # Layout base para navegación
```

## Consideraciones

- La aplicación depende de una API funcional. Asegúrate de que la Cineteka API esté corriendo.
- El contenido puede variar según la disponibilidad de datos en la API.
- Algunas funcionalidades como favoritos podrían implementarse usando `AsyncStorage`.
- No se requiere autenticación para el uso básico de la app.

---

