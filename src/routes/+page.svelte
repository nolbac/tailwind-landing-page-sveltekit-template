<script>
	import Features from "../components/Features.svelte";
	import Hero from "../components/utils/Hero.svelte";
	import { pageMetadata } from '$lib/store';
	pageMetadata.set({
		title: 'Home - Simple',
		description: 'Description'
  	});
</script>

<Hero/>
<Features />
<!-- <FeaturesBlocks /> -->
<!-- <Testimonials /> -->
<!-- <Newsletter /> -->

<!-- <button class="btn">Hello daisyUI</button> -->
