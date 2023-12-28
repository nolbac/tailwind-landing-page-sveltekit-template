<script lang="ts">
    let icon_options = ["arrows-overlap", "wireless", "stairs", "sparkles", "satellite", "star-badge"];
    export let icon = icon_options[0];

    if (!icon_options.includes(icon)) {
        icon = icon_options[0];
    }
</script>
<!-- Feature Blocks -->
{#if icon === "arrows-overlap"}
<svg class="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
      <rect class="fill-current text-blue-600" width="64" height="64" rx="32" />
      <g stroke-width="2">
        <path class="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
        <path class="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
        <path class="stroke-current text-blue-300" stroke-linecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
        <path class="stroke-current text-white" stroke-linecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />  
      </g>
    </g>
  </svg>
{/if}
{#if icon === "wireless"}
<svg class="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
      <rect class="fill-current text-blue-600" width="64" height="64" rx="32" />
      <g stroke-width="2" transform="translate(19.429 20.571)">
        <circle class="stroke-current text-white" stroke-linecap="square" cx="12.571" cy="12.571" r="1.143" />
        <path class="stroke-current text-white" d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696" />
        <path class="stroke-current text-blue-300" d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835" />
      </g>
    </g>
  </svg>
{/if}
{#if icon === "stairs"}
<svg class="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
      <rect class="fill-current text-blue-600" width="64" height="64" rx="32" />
      <g stroke-width="2">
        <path class="stroke-current text-blue-300" d="M34.743 29.714L36.57 32 27.43 43.429H24M24 20.571h3.429l1.828 2.286" />
        <path class="stroke-current text-white" stroke-linecap="square" d="M34.743 41.143l1.828 2.286H40M40 20.571h-3.429L27.43 32l1.828 2.286" />
        <path class="stroke-current text-blue-300" d="M36.571 32H40" />
        <path class="stroke-current text-white" d="M24 32h3.429" stroke-linecap="square" />
      </g>
    </g>
  </svg>
{/if}
{#if icon === "sparkles"}
<svg class="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
      <rect class="fill-current text-blue-600" width="64" height="64" rx="32" />
      <g stroke-width="2">
        <path class="stroke-current text-white" d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714" />
        <path class="stroke-current text-white" d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286" />
        <path class="stroke-current text-white" d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286" />
        <path class="stroke-current text-blue-300" d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572" stroke-linecap="square" />
      </g>
    </g>
  </svg>
{/if}
{#if icon === "satellite"}
<svg class="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
      <rect class="fill-current text-blue-600" width="64" height="64" rx="32" />
      <g stroke-width="2">
        <path class="stroke-current text-white" d="M19.429 32a12.571 12.571 0 0021.46 8.89L23.111 23.11A12.528 12.528 0 0019.429 32z" />
        <path class="stroke-current text-blue-300" d="M32 19.429c6.943 0 12.571 5.628 12.571 12.571M32 24a8 8 0 018 8" />
        <path class="stroke-current text-white" d="M34.286 29.714L32 32" />
      </g>
    </g>
  </svg>
{/if}
{#if icon === "star-badge"}
<svg class="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
      <rect class="fill-current text-blue-600" width="64" height="64" rx="32" />
      <g stroke-width="2" stroke-linecap="square">
        <path class="stroke-current text-white" d="M29.714 40.358l-4.777 2.51 1.349-7.865-5.715-5.57 7.898-1.147L32 21.13l3.531 7.155 7.898 1.147L40 32.775" />
        <path class="stroke-current text-blue-300" d="M44.571 43.429H34.286M44.571 37.714H34.286" />
      </g>
    </g>
  </svg>
{/if}

<!-- Features -->