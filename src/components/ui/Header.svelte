<script type="ts">
	import { onMount } from 'svelte';
	import Logo from "./Logo.svelte";
	import MobileMenu from "./MobileMenu.svelte";
	import IconBullets from './images/IconBullets.svelte';
	import LinkButton from './navigation/LinkButton.svelte';
	import Navigation from './navigation/Navigation.svelte';

	// Reactive state declaration
	let top = true;

	// Scroll handler function
	function scrollHandler() {
		top = window.pageYOffset <= 10;
	}

	// Lifecycle function to handle side effects
	onMount(() => {
		scrollHandler(); // Call once on mount to set initial state
		window.addEventListener('scroll', scrollHandler);
		
		// Return a cleanup function to remove the event listener
		return () => {
			window.removeEventListener('scroll', scrollHandler);
		};
	});
</script>

<header class={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
    <div class="max-w-6xl mx-auto px-5 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Site Branding -->
        <div class="shrink-0 mr-4">
          <Logo />
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex md:grow">
          <!-- Desktop Sign in Links -->
          <Navigation class="flex grow justify-end flex-wrap items-center" />

        </nav>

        <MobileMenu />

      </div>
    </div>
  </header>