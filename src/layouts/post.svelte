<script>
  export let title = "";
</script>

<div class="post">
  <slot />
</div>

<svelte:head>
  <title>{title}</title>
</svelte:head>
