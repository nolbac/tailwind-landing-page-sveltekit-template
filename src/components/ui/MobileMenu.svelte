<script lang="ts">
  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  let mobileNavOpen = writable(false);
  let trigger: HTMLButtonElement; // Declare trigger
  let mobileNav: HTMLElement; // Declare mobileNav


  // Event Handlers
  function handleClickOutside(event: Event) {
    if (event.target === null) return;
    if (mobileNav && !mobileNav.contains(event.target) && !trigger.contains(event.target)) {
      mobileNavOpen.set(false);
    }
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      mobileNavOpen.set(false);
    }
  }

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  // Toggle mobile nav
  function toggleMobileNav() {
    mobileNavOpen.update(n => !n);
  }
</script>

<div class="flex md:hidden">
  <!-- Hamburger button -->
  <button
  bind:this={trigger}
  class="hamburger"
  class:active={$mobileNavOpen}
  aria-controls="mobile-nav"
  aria-expanded={$mobileNavOpen}
  on:click={toggleMobileNav}
>
    <!-- SVG and other content -->
  </button>

  <!-- Mobile navigation -->
  {#if $mobileNavOpen}
    <nav
      bind:this={mobileNav}
      id="mobile-nav"
      class="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
      transition:fade={{ duration: 200 }}
    >
      <!-- Nav content -->
    </nav>
  {/if}
</div>
