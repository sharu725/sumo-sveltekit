<script>
  import { URL, Map } from "svelte/reactivity";
  const url = new URL("https://example.com/path");

  const map = new Map();
  map.set("a", "power");
  map.set("b", "ful");

//   $inspect(a);
</script>

<input bind:value={url.protocol} />
<input bind:value={url.hostname} />
<input bind:value={url.pathname} />
<hr />
<input bind:value={url.href} />

<div><h2>Map</h2></div>

<p>{map.get("a")}</p>
<p>{map.get("b")}</p>

Size:<input type="text" bind:value={map.size} />

