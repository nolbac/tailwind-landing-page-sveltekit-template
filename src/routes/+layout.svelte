<script lang="ts">
	import {classList} from 'svelte-body';
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import Header from '../components/ui/Header.svelte';
	// CSS
	import "$lib/css/font-inter.pcss";
	import '../app.pcss';
	import 'aos/dist/aos.css';
	import Banner from '../components/Banner.svelte';

	import { pageMetadata } from '$lib/store';

	onMount(() => {
		AOS.init();
  });
</script>

<svelte:head>
	<title>{$pageMetadata.title}</title>
	<meta name="description" content={$pageMetadata.description}/>
</svelte:head>
<svelte:body use:classList={"font-inter antialiased bg-white text-gray-900 tracking-tight"}/>

<div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
	<Header />
		<slot />
	<Banner />
</div>