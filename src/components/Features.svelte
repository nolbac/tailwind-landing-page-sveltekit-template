<script lang="ts">
    import { tick } from 'svelte';
    import FeaturesBg from '$lib/images/features-bg.png';
    import FeaturesElement from '$lib/images/features-element.png';
    let tab = 1;
    let tabsElement: HTMLElement | null;
    const tabItems = [
        { id: 1, title: 'Tab 1 Title', content: 'Content for Tab 1' },
        { id: 2, title: 'Tab 2 Title', content: 'Content for Tab 2' },
        { id: 3, title: 'Tab 3 Title', content: 'Content for Tab 3' },
    ];

    // Svelte's reactive statements can be used to run code whenever a reactive variable changes.
    // Here, we react to changes in `tab` to adjust the parent height accordingly.
    $: if (tabsElement && tabsElement.parentElement) {
        tabsElement.parentElement.style.height = `${tabsElement.clientHeight}px`;
    }

    // Function to change tabs
    function setTab(newTab: number) {
        tab = newTab;
    }

    // Height fix needs to be run after the DOM has updated.
    // Svelte provides a tick function that can be used to wait for the DOM to update.

    async function heightFix() {
        await tick(); // Wait for the DOM to be updated
        if (tabsElement && tabsElement.parentElement) {
        tabsElement.parentElement.style.height = `${tabsElement.clientHeight}px`;
        }
    }

    // Run heightFix on initial load
    import { onMount } from 'svelte';
    onMount(heightFix);
</script>

<section class="relative">
    <!-- Section background (needs .relative class on parent and next sibling elements) -->
    <div class="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
    <div class="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-12 md:pt-20">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 class="h2 mb-4">Explore the solutions</h1>
          <p class="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
        </div>

        <!-- Section content -->
        <div class="md:grid md:grid-cols-12 md:gap-6">

          <!-- Content -->
          <div class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
            <div class="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
              <h3 class="h3 mb-3">Powerful suite of tools</h3>
              <p class="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
            </div>
            <!-- Tabs buttons -->
            <div class="mb-8 md:mb-0">  
            
              <a
                class={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                href="#0"
                on:click={(e) => { e.preventDefault(); setTab(1); }}
              >
                <div>
                  <div class="font-bold leading-snug tracking-tight mb-1">Building the Simple ecosystem</div>
                  <div class="text-gray-600">Take collaboration to the next level with security and administrative features built for teams.</div>
                </div>
                <div class="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <svg class="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                  </svg>
                </div>
              </a>
              <a
                class={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                href="#0"
                on:click={(e) => { e.preventDefault(); setTab(2); }}
              >
                <div>
                  <div class="font-bold leading-snug tracking-tight mb-1">Building the Simple ecosystem</div>
                  <div class="text-gray-600">Take collaboration to the next level with security and administrative features built for teams.</div>
                </div>
                <div class="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <svg class="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fill-rule="nonzero" />
                  </svg>
                </div>
              </a>
              <a
                class={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                href="#0"
                on:click={(e) => { e.preventDefault(); setTab(3); }}
              >
                <div>
                  <div class="font-bold leading-snug tracking-tight mb-1">Building the Simple ecosystem</div>
                  <div class="text-gray-600">Take collaboration to the next level with security and administrative features built for teams.</div>
                </div>
                <div class="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <svg class="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fill="#191919" fill-rule="nonzero" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          <!-- Tabs items -->
          <div class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
            <div class="transition-all" bind:this={tabsElement}>
                {#if tab === 1}
                <div class="relative inline-flex flex-col">
                    <!-- Replace with content for each tab -->
                    <img class="md:max-w-none mx-auto rounded" src={FeaturesBg} width={500} height="462" alt="Features bg" />
                    <img class="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style="top: 30%" />
                </div>
                {/if}
                {#if tab === 2}
                <div class="relative inline-flex flex-col">
                    <!-- Replace with content for each tab -->
                    <img class="md:max-w-none mx-auto rounded" src={FeaturesBg} width={500} height="462" alt="Features bg" />
                    <img class="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style="top: 30%" />
                </div>
                {/if}
                {#if tab === 3}
                <div class="relative inline-flex flex-col">
                    <!-- Replace with content for each tab -->
                    <img class="md:max-w-none mx-auto rounded" src={FeaturesBg} width={500} height="462" alt="Features bg" />
                    <img class="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style="top: 30%" />
                </div>
                {/if}
                
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>