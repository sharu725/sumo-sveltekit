<script>
  export let title = "";
</script>

<div class="page">
  <slot />
</div>

<svelte:head>
  <title>{title}</title>
</svelte:head>
