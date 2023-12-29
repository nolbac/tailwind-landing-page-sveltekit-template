<script lang="ts">
	import {classList} from 'svelte-body';
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import Header from '../components/ui/Header.svelte';
	import Banner from '../components/Banner.svelte';
	import Footer from '../components/ui/Footer.svelte';
	// CSS
	import "$lib/css/font-inter.pcss";
	import '../app.pcss';
	import 'aos/dist/aos.css';

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
<main class="grow">
	<div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
		<Header />
			<slot />
		<Banner />
	</div>
</main>
<Footer/>