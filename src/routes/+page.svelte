<div class="grid place-items-center h-screen px-4">
  <div class="grid place-items-center">
    <a
      href="/"
      class="logo flex items-center text-center mb-4 group hover:shadow-xl"
    >
      <div class="icon p-1">
        <div class="i-tabler-tools-kitchen text-5xl mr-1"></div>
      </div>
      <h1 class="text-5xl bg-orange-700 text-white p-1">SumoKit</h1>
    </a>
    <p class="text-center mb-2">
      A starter kit for building Sveltekit websites and apps. <br /> Expect bugs
      as the template uses <strong>latest</strong> Svelte & SvelteKit.
    </p>
    <ul class="list-disc font-mono">
      <li class="font-semibold">Sveltekit</li>
      <ul class="ml-8 text-sm list-disc mb-3">
        <li>SvelteKit 2.0</li>
        <li>
          <a
            class="underline"
            href="https://svelte-5-preview.vercel.app/docs/introduction"
            target="_blank"
            rel="external"
          >
            Svelte 5.0 (Release Candidate)
          </a>
        </li>
      </ul>
      <li class="font-semibold">UnoCSS</li>
      <ul class="ml-8 text-sm list-disc mb-3">
        <li>Tailwind classes support</li>
        <li>
          <a
            class="underline"
            href="https://unocss.dev/presets/icons"
            target="_blank"
            rel="external">CSS icons</a
          >
        </li>
      </ul>
      <li class="font-semibold">Mdsvex</li>
      <ul class="ml-8 text-sm list-disc mb-3">
        <li>Custom layouts</li>
        <li>
          Sample <a class="underline" href="/about">page</a> and
          <a class="underline" href="/blog/a-sample-post">post</a>
        </li>
      </ul>
      <li class="font-semibold">Other awesome features!</li>
    </ul>
  </div>
  <div>
    <a
      class="btn bg-gray-100 hover:bg-gray-200"
      href="https://github.com/sharu725/sumo-sveltekit"
    >
      <div class="i-octicon:mark-github-16 mr-1"></div>
      Github</a
    >
  </div>
</div>

<svelte:head>
  <title>SumoKit - Starter SvelteKit</title>
</svelte:head>

<style>
  .logo {
    h1 {
      background: #e96d3a;
      background: linear-gradient(to left, #e96d3a 50%, #374151 50%) right;
      background-size: 200%;
      transition: 0.25s ease-out;
    }
    .icon {
      color: #e96d3a;
      background: #374151;
      background: linear-gradient(to right, #374151 50%, #e96d3a 50%) left;
      background-size: 200%;
      transition: 0.25s ease-out;
    }
    &:hover h1 {
      background-position: left;
    }
    &:hover .icon {
      color: #eee;
      background-position: right;
    }
  }
</style>
