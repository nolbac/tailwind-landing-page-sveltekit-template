<script>
	import Hero from "../components/utils/Hero.svelte";
	import Features from "../components/Features.svelte";
	import FeatureBlocks from "../components/FeatureBlocks.svelte";
	import { pageMetadata } from '$lib/store';
	pageMetadata.set({
		title: 'Home - Simple',
		description: 'Description'
  	});
</script>

<Hero/>
<Features />
<FeatureBlocks />
<!-- <Testimonials /> -->
<!-- <Newsletter /> -->

<!-- <button class="btn">Hello daisyUI</button> -->
