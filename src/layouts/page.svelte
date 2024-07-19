<script>
  let { title, children } = $props();
</script>

<div class="page">
  {@render children()}
</div>

<svelte:head>
  <title>{title}</title>
</svelte:head>
