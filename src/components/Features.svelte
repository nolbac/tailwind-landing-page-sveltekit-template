<script lang="ts">
    import { tick } from 'svelte';
    import { onMount } from 'svelte';
	import { fly, slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
    import FeaturesBg from '$lib/images/features-bg.png';
    import FeaturesElement from '$lib/images/features-element.png';
	import BulletIcons from './ui/BulletIcons.svelte';
    let tab = 1;
    let tabsElement: HTMLElement | null;
    const tabButtonItems = [
        {
            title: 'Bulding the Simple ecosystem',
            content: 'Take collaboration to the next level with security and administrative features built for teams',
            icon: 'lightning'
        },
        {
            title: 'Bulding the Simple ecosystem',
            content: 'Take collaboration to the next level with security and administrative features built for teams',
            icon: 'send',
        },
        {
            title: 'Bulding the Simple ecosystem',
            content: 'Take collaboration to the next level with security and administrative features built for teams',
            icon: 'moon'
        },
    ];

    const flyIn = {
        delay: 300,
        duration: 500,
        easing: cubicOut,
        y: 100,
    };
    const flyOut = {
        delay: 0,
        duration: 300,
        easing: cubicOut,
        y: -50,
    };
    // Svelte's reactive statements can be used to run code whenever a reactive variable changes.
    // Here, we react to changes in `tab` to adjust the parent height accordingly.
    $: if (tabsElement && tabsElement.parentElement) {
        tabsElement.parentElement.style.height = `${tabsElement.clientHeight}px`;
    }

    // Function to change tabs
    function setTab(newTab: number) {
        tab = newTab;
    }
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
            {#each tabButtonItems as tabButtonItem, i}
                <a
                class={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== i+1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                href="#0"
                on:click|preventDefault={(e) => {tab = i+1; }}
            >
                    <div>
                        <div class="font-bold leading-snug tracking-tight mb-1">{tabButtonItem.title}</div>
                        <div class="text-gray-600">{tabButtonItem.content}</div>
                    </div>
                    <div class="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                        <BulletIcons icon={tabButtonItem.icon}/>
                    </div>
                </a>
            {/each}
            </div>
          </div>

          <!-- Tabs items -->
          <div class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
            {#key tab}
            <div class="transition-all" bind:this={tabsElement} in:fly={flyIn} out:fly={flyOut}>
                {#if tab === 1}
                <div class="relative inline-flex flex-col">
                    <img class="md:max-w-none mx-auto rounded" src={FeaturesBg} width={500} height="462" alt="Features bg" />
                    <img class="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style="top: 30%" />
                </div>
                {/if}
                {#if tab === 2}
                <div class="relative inline-flex flex-col">
                    <img class="md:max-w-none mx-auto rounded" src={FeaturesBg} width={500} height="462" alt="Features bg" />
                    <img class="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style="top: 30%" />
                </div>
                {/if}
                {#if tab === 3}
                <div class="relative inline-flex flex-col">
                    <img class="md:max-w-none mx-auto rounded" src={FeaturesBg} width={500} height="462" alt="Features bg" />
                    <img class="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style="top: 30%" />
                </div>
                {/if}
            </div>
            {/key}
          </div>

        </div>

      </div>
    </div>
  </section>