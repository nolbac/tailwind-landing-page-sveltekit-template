<script lang="ts">
	import { routes, styles, type Style } from "$lib/routes";
	import IconBullets from "../images/IconBullets.svelte";
    
    export let href: string;
    export let style: string = "none";
    export let isMobile: boolean = false;
    export let icon: string = "none";

    let styleColor: Style = 'none';
    if (styles.includes(style)) {
        styleColor = style as Exclude<Style, undefined>;
    }

    let styleReference: {[K in Exclude<Style, undefined>]: string} = {
        "none": "font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out",
        "blue": "btn-sm text-gray-200 bg-blue-900 hover:bg-blue-800 ml-3",
        "black": "btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3",
    }
    if (isMobile) {
        styleReference = {
            "none": "flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center",
            "blue": "btn-sm text-blue-200 bg-blue-900 hover:bg-gray-800 w-full my-2",
            "black": "btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 w-full my-2",
        }
    }

    const classList = styleReference[styleColor];
</script>
<a href={href} class={classList} {...$$restProps}>
    <slot/>
    {#if icon !== "none"}
    <IconBullets {icon}/>
    {/if}
</a>