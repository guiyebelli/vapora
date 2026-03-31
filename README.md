# Vapora

Recetas libres para tu Thermomix.

**Vapora** es una aplicaci&oacute;n m&oacute;vil gratuita y de c&oacute;digo abierto para explorar recetas optimizadas para Thermomix TM5 y TM6. Una alternativa libre a Cookidoo, sin suscripci&oacute;n ni muros de pago.

## Features

- 31 recetas optimizadas para Thermomix TM5 y TM6 con par&aacute;metros de velocidad, temperatura y tiempo
- 8 categor&iacute;as: postres, panes, sopas, salsas, bebidas, principales, entrantes, masas
- Biling&uuml;e desde el d&iacute;a 1 (Espa&ntilde;ol e Ingl&eacute;s)
- B&uacute;squeda por texto con ranking de relevancia e historial
- Sistema de favoritos con almacenamiento local
- Onboarding con selecci&oacute;n de idioma y modelo de Thermomix
- Tema claro y oscuro
- 100% gratuita, sin publicidad, sin tracking, sin datos personales

## Tech Stack

| Capa | Tecnolog&iacute;a |
|------|-----------|
| Framework | React Native + Expo SDK 54 (managed) |
| Lenguaje | TypeScript (strict) |
| Navegaci&oacute;n | expo-router (file-based) |
| Estado | Zustand |
| Storage | AsyncStorage |
| i18n | react-i18next + expo-localization |
| Testing | Jest + React Native Testing Library |
| CI/CD | GitHub Actions + EAS Build |

## Estructura del proyecto

```
vapora/
├── apps/
│   └── mobile/          # App React Native (Expo)
│       ├── src/
│       │   ├── app/          # Rutas (expo-router)
│       │   ├── components/   # Componentes UI
│       │   ├── store/        # Zustand stores
│       │   ├── theme/        # Design tokens
│       │   ├── i18n/         # Traducciones ES/EN
│       │   ├── data/         # Recetas y categor&iacute;as
│       │   └── types/        # TypeScript types
│       └── assets/           # Icons, splash, illustrations
├── .github/
│   ├── workflows/ci.yml      # CI: lint + typecheck + tests
│   └── pull_request_template.md
└── README.md
```

## Requisitos previos

- Node.js >= 18
- npm
- Expo CLI (`npx expo`)
- Expo Go app en tu celular o un simulador iOS/Android

## Inicio r&aacute;pido

```bash
# Clonar el repositorio
git clone https://github.com/guiyebelli/vapora.git
cd vapora

# Instalar dependencias
cd apps/mobile
npm install --legacy-peer-deps

# Iniciar el servidor de desarrollo
npx expo start
```

Escane&aacute; el QR con Expo Go (Android) o la c&aacute;mara (iOS) para ver la app en tu celular.

## Contribuir

1. Fork el repositorio
2. Cre&aacute; una branch (`git checkout -b feature/mi-feature`)
3. Commit&aacute; tus cambios con [Conventional Commits](https://www.conventionalcommits.org/) (`git commit -m "feat: agregar nueva receta"`)
4. Push a tu branch (`git push origin feature/mi-feature`)
5. Abr&iacute; un Pull Request

## Git Workflow

- **Branching**: GitHub Flow &mdash; `main` + feature branches + PRs
- **Commits**: Conventional Commits (`feat`, `fix`, `docs`, `chore`, `test`, `refactor`)
- **Merge**: Squash and merge
- **CI**: Lint + typecheck + tests corren en cada PR

## Tests

```bash
cd apps/mobile

# Correr tests
npm test

# Con coverage
npm test -- --coverage
```

## Disclaimer

Vapora no est&aacute; afiliada a Vorwerk ni a Thermomix. Thermomix es una marca registrada de Vorwerk.

## Licencia

MIT
