type MountedHook = () => void;
const mountedHooks = [] as MountedHook[];

export const PiniaPluginOnMounted = () => {
  if (!mountedHooks.length) {
    return;
  }

  mountedHooks.forEach(hook => hook());
  mountedHooks.length = 0;
};

export const onPiniaMounted = (hook: MountedHook) => mountedHooks.push(hook);
