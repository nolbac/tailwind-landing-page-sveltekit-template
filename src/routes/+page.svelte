<script>
	import Hero from "../components/utils/Hero.svelte";
	import Features from "../components/pages/template/Features.svelte";
	import FeatureBlocks from "../components/pages/template/FeatureBlocks.svelte";
	import Testimonials from "../components/pages/template/Testimonials.svelte";
	import Newsletter from "../components/pages/template/Newsletter.svelte";
	
	import { pageMetadata } from '$lib/store';
	pageMetadata.set({
		title: 'Home - ERB Real Estate',
		description: 'ERB Real Estate Group LLC - Find a home today!'
  	});
</script>

<Hero/>
<Features />
<FeatureBlocks />
<Testimonials />
<Newsletter />

<!-- <button class="btn">Hello daisyUI</button> -->
