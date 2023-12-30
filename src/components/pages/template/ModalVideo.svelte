<script lang="ts">
	import { clickOutside } from "$lib/click-outside";
	import { fade, scale } from "svelte/transition";

    export let thumb: string; // Assuming this is a URL to the thumbnail image
    export let thumbWidth: number;
    export let thumbHeight: number;
    export let thumbAlt: string;
    export let video: string;
    export let videoWidth: number;
    export let videoHeight: number;
    export let captions: string;

    let modalOpen: boolean = false;

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            modalOpen = false;
        }
    }
    const focus = (node: HTMLElement) => {
        node.focus();
    }
</script>

<div>
    <!-- Video thumbnail -->
    <div class="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
        <div class="flex flex-col justify-center">
            <img src={thumb} width={thumbWidth} height={thumbHeight} alt={thumbAlt} />
            <svg class="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto" width="768" height="432" viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hero-ill-a">
                    <stop stop-color="#FFF" offset="0%" />
                    <stop stop-color="#EAEAEA" offset="77.402%" />
                    <stop stop-color="#DFDFDF" offset="100%" />
                </linearGradient>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="99.24%" id="hero-ill-b">
                    <stop stop-color="#FFF" offset="0%" />
                    <stop stop-color="#EAEAEA" offset="48.57%" />
                    <stop stop-color="#DFDFDF" stop-opacity="0" offset="100%" />
                </linearGradient>
                <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="hero-ill-e">
                    <stop stop-color="#4FD1C5" offset="0%" />
                    <stop stop-color="#81E6D9" offset="25.871%" />
                    <stop stop-color="#338CF5" offset="100%" />
                </radialGradient>
                <circle id="hero-ill-d" cx="384" cy="216" r="64" />
                </defs>
                <g fill="none" fill-rule="evenodd">
                <circle fill-opacity=".04" fill="url(#hero-ill-a)" cx="384" cy="216" r="128" />
                <circle fill-opacity=".16" fill="url(#hero-ill-b)" cx="384" cy="216" r="96" />
                <g fill-rule="nonzero">
                    <use fill="#000" xlink:href="#hero-ill-d" />
                    <use fill="url(#hero-ill-e)" xlink:href="#hero-ill-d" />
                </g>
                </g>
            </svg>
            </div>

        <button class="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg" on:click={() => modalOpen = true}>
            <svg class="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                <path d="M10 17l6-5-6-5z" />
            </svg>
            <span class="ml-3">Watch the full video (2 min)</span>
        </button>
    </div>

    <!-- Modal, you need to adjust this part according to Svelte's way of handling dialogs and transitions -->
    {#if modalOpen}
    <div 
      class="fixed inset-0 z-[99999] bg-black bg-opacity-75"
      transition:fade={{ duration: 200 }}
    >
      <!-- Modal content -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
        transition:scale={{ duration: 200, start: 0.95 }} on:click|self={() => modalOpen = false} on:keydown={handleKeyDown} aria-roledescription="Press Escape to Exit Modal."
      >
        <div class="max-w-6xl mx-auto h-full flex items-center" >
          <div class="w-full max-h-full aspect-video bg-black overflow-hidden" transition:fade>
            <video use:focus use:clickOutside on:clickOutside={() => modalOpen = false} width={videoWidth} height={videoHeight} loop controls>
              <source src={video} type="video/mp4" />
              <track kind="captions" src={captions} label="English" srclang="en" default />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
