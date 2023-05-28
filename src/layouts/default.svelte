<script>
  export let title = "";
</script>

<div class="default">
  <slot />
</div>

<svelte:head>
  <title>{title}</title>
</svelte:head>
