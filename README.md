# SUMO SvelteKit

A bleeding edge starter kit for SvelteKit.

## Warning

The template uses bleeding edge Svelte & SvelteKit packages. Expect bugs.

## Features

- SvelteKit ^2.0
- UnoCSS(supports tailwind classes)
- MdSvex for markdown posts and pages
- Other awesome features

## Usage

- clone the repository
- run `npm install`
- run `npm run dev` for development
- run `npm run build` for production build

## Adapter

- sumo kit uses [`auto-adapter`](https://kit.svelte.dev/docs/adapters)

## Disclaimer

[Svetle 5](https://svelte-5-preview.vercel.app/docs/introduction) is still in development. Expect bugs and warning.

```bash
 WARN  Issues with peer dependencies found
.
├─┬ @sveltejs/vite-plugin-svelte 3.0.2
│ └─┬ svelte-hmr 0.15.3
│   └── ✕ unmet peer svelte@"^3.19.0 || ^4.0.0": found 5.0.0-next.90
├─┬ mdsvex 0.10.6
│ └── ✕ unmet peer svelte@3.x: found 5.0.0-next.90
└─┬ unocss 0.52.7
  └─┬ @unocss/astro 0.52.7
    └─┬ @unocss/vite 0.52.7
      └── ✕ unmet peer vite@"^2.9.0 || ^3.0.0-0 || ^4.0.0": found 5.2.7
```

You will see the above warning on installing dependencies. It will still work and it will go away once the issues are fixed and packages are updated.
