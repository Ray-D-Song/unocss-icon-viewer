# Mitosis Mono-repo Starter

This is a mono-repo for Mitosis libraries. It contains a few workspaces to get you started.

## Workspaces

- [library](./library/): workspace containing your Mitosis project.
  - [library/src](./library/src/): Mitosis source code of your component library.
  - [library/packages](./library/packages/): individual outputs generated by Mitosis.
- [test-apps](./test-apps/): dev servers that import your Mitosis components. Useful for testing your library.

## Developing

1. Run Mitosis in watch mode

```bash
cd library
npm run start
```

2. If the output has its own bundling step (like Svelte/Qwik), you will need to run that build step in a separate terminal:

```bash
cd library/packages/qwik
npm run build:watch
```

3. Finally, run the corresponding test server of your library from the previous step to see your Mitosis project in action:

```bash
cd test-apps/qwik
npm run dev
```

## Next up

If you want to add more outputs, or configure Mitosis in any way, you will need to update the `mitosis.config.js` file in the root of your project.
Check [our configuration docs](/docs/configuration.md) for how to setup the Mitosis config file.