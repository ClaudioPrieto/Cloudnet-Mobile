# Cloudnet Mobile App

## Setup

Install Yarn

```bash
  npm install --global yarn
```

Install node OSX

```bash
  brew install node
```

Install dependencies

```bash
  yarn add expo-cli
  yarn add @react-navigation/stack
  yarn add @react-navigation/native
  yarn add @react-navigation/routers
  yarn add @react-navigation/botton-tabs
  yarn add react-native-gesture-handler
  yarn add react-native-device-info

  yarn add react-native-screens
  yarn add react-native-countdown-circle-timer
  yarn add react-native-svg

```

Run project (In root directory)

```bash
  yarn start
```

Si surge el siguiente error

```
Error: ENOSPC: System limit for number of file watchers reached
```

Es necesario correr el siguiente comando(Testeado en UBUNTU 18.04)
```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

Para correr en el navegador web, presionar W en la terminal, luego seleccionar la opción "run in web browser" en la ventana que aparezca.


Para correr en Android Expo GO, y escanear el código QR

Para correr en iOS, usar la aplicación Expo Studio y escanear el código QR.