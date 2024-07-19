<script>
  let { title, children } = $props();
</script>

<div class="post">
  {@render children()}
</div>

<svelte:head>
  <title>{title}</title>
</svelte:head>
