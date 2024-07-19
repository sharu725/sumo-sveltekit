<script>
  let { title, children } = $props();
</script>

<div class="default">
  {@render children()}
</div>

<svelte:head>
  <title>{title}</title>
</svelte:head>
