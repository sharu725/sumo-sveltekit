<script>
  import "@unocss/reset/tailwind.css";
  import "virtual:uno.css";
  import "$lib/css/main.css";
  import { SITE_URL, SITE_TITLE, SITE_TYPE } from "$lib/constants";
  import { page } from "$app/stores";
</script>

<slot />

<svelte:head>
  <meta property="og:site_name" content={SITE_TITLE} />
  <meta property="og:type" content={SITE_TYPE} />
  <link rel="canonical" href="{SITE_URL}{$page.url.pathname}" />
  <meta property="og:url" content="{SITE_URL}{$page.url.pathname}" />
</svelte:head>
