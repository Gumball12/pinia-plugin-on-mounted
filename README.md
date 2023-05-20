# 🍍 pinia-plugin-on-mounted

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/pinia-plugin-on-mounted)](https://www.npmjs.com/package/pinia-plugin-on-mounted) ![npm](https://img.shields.io/npm/dm/pinia-plugin-on-mounted) ![npm](https://img.shields.io/npm/v/pinia-plugin-on-mounted) [![changelog](https://img.shields.io/badge/CHANGELOG-gray)](./CHANGELOG.md)

[![ci](https://github.com/Gumball12/pinia-plugin-on-mounted/actions/workflows/ci.yaml/badge.svg)](https://github.com/Gumball12/pinia-plugin-on-mounted/actions/workflows/ci.yaml) [![publish](https://github.com/Gumball12/pinia-plugin-on-mounted/actions/workflows/publish.yaml/badge.svg)](https://github.com/Gumball12/pinia-plugin-on-mounted/actions/workflows/publish.yaml) [![codecov](https://codecov.io/gh/Gumball12/pinia-plugin-on-mounted/branch/main/graph/badge.svg?token=NW28cSN2A2)](https://codecov.io/gh/Gumball12/pinia-plugin-on-mounted)

## 🚀 Quick Start

### 1. Install the plugin

```bash
npm i pinia-plugin-on-mounted
yarn add pinia-plugin-on-mounted # for yarn
pnpm add pinia-plugin-on-mounted # for pnpm
```

### 2. Add the plugin the Pinia

```ts
import { createPinia } from 'pinia';
import { PiniaPluginOnMounted } from 'pinia-plugin-on-mounted';

const pinia = createPinia();
pinia.use(PiniaPluginOnMounted);
```

### 3. Use the plugin

```ts
import { onPiniaMounted } from 'pinia-plugin-on-mounted';

onPiniaMounted(() => {
  // do something
});
```

## 🌮 API

### `onPiniaMounted(callback: () => void): void`

Register a callback to be called when the Pinia is mounted.

## License

[MIT](./LICENSE)
