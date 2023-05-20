import { describe, expect, it } from 'vitest';
import { createApp } from 'vue';
import { createPinia, defineStore, setActivePinia } from 'pinia';
import { PiniaPluginOnMounted, onPiniaMounted } from '../src';

describe('PiniaPluginOnMounted', () => {
  it('should call onMounted hooks', () => {
    const app = createApp({});
    const pinia = createPinia();

    const useStore = defineStore('store', {
      state: () => ({ foo: '', bar: '', baz: '' }),
    });

    expect(() => {
      const store = useStore(); // an error will be thrown
      store.foo = 'foo'; // should not affect the store
    }).toThrowError();

    onPiniaMounted(() => {
      const store = useStore();
      store.bar = 'bar';

      // the 'baz' does not exist immediately after Pinia is initialized
      expect(store.baz).toBe('');
    });

    pinia.use(PiniaPluginOnMounted);
    app.use(pinia);
    setActivePinia(pinia);

    const store = useStore();
    expect(store.foo).not.toBe('foo');

    // the 'bar' exists because the plugin was called after Pinia was initialized
    expect(store.bar).toBe('bar');

    store.baz = 'baz';
  });

  it('empty onMounted hooks', () => {
    const app = createApp({});
    const pinia = createPinia();

    pinia.use(PiniaPluginOnMounted);
    app.use(pinia);
    setActivePinia(pinia);

    expect(() => {
      const store = defineStore('store', {
        state: () => ({ foo: '' }),
      })();

      store.foo = 'foo';
    }).not.toThrowError();
  });
});
