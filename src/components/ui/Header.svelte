<script type="ts">
	import { onMount } from 'svelte';
	import Logo from "./Logo.svelte";
	import MobileMenu from "./MobileMenu.svelte";

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
          <ul class="flex grow justify-end flex-wrap items-center">
            <li>
              <a href="/signin" class="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</a>
            </li>
            <li>
              <a href="/signup" class="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                <span>Sign up</span>
                <svg class="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fill-rule="nonzero" />
                </svg>
              </a>
            </li>
          </ul>

        </nav>

        <MobileMenu />

      </div>
    </div>
  </header>