<script lang="ts">
  import { onMount } from 'svelte';

  import type { IconOptions } from './IconOptions';

  export let options: IconOptions | undefined = {};

  const defaults = {
    width: 24,
    height: 24,
    fill: 'none',
    strokeWidth: 1.5
  };
</script>

<svg
  width={options.width ?? defaults.width}
  height={options.height ?? defaults.height}
  stroke-width={options.strokeWidth ?? defaults.strokeWidth}
  viewBox="0 0 {options.width ?? defaults.width} {options.height ?? defaults.height}"
  fill={options.fill ?? defaults.fill}
>
  <slot />
</svg>
