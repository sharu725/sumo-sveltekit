<script>
  import "@unocss/reset/tailwind.css";
  import "virtual:uno.css";
  import "$lib/css/main.css";
  import { onMount } from "svelte";
  import { dev } from "$app/environment";
  import SmartSeo from "svelte-smart-seo";
  import { SITE_URL, SITE_TITLE } from "$lib/constants";

  let { children } = $props();

  onMount(() => {
    if (dev) {
      console.log(
        "%c SUMO-KIT uses bleeding edge packages. Expect bugs. ",
        "background: #555; color: yellow; padding: 10px;"
      );
    }
  });
</script>

{@render children()}

<SmartSeo {SITE_TITLE} {SITE_URL} />
