<script lang="ts">
    import { navigation } from "$lib/routes";
	import LinkButton from "./LinkButton.svelte";
    export let isMobile = false;
</script>

<ul {...$$restProps}>
    {#each navigation as item, i}
    <LinkButton href={item.href} style={item.style} icon={item.icon} {isMobile}>{item.name}</LinkButton>
    {/each}
</ul>
