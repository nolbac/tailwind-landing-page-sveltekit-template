<script lang="ts">
	import CompanyIcons from "$components/ui/images/CompanyIcons.svelte";

    type buttonConfig = {
        name: string,
        companyIcon?: string,
        colorClasses: string,
    };
    const buttonConfigs: buttonConfig[] = [
        {
            name: "google",
            companyIcon: "google",
            colorClasses: "text-white bg-red-600 hover:bg-red-700"
        },
        {
            name: "github",
            companyIcon: "github",
            colorClasses: "text-white bg-gray-900 hover:bg-gray-800",
        },
        {
            name: "default",
            colorClasses: "text-white bg-blue-600 hover:bg-blue-700" // no px-0
        }
    ]
    
    const defaultButton = "default";
    export let style: String = defaultButton;

    if (buttonConfigs.find(btn => btn.name === style) === undefined) {
        style = defaultButton;
    }
    
    const button = buttonConfigs.find(btn => btn.name === style) as buttonConfig;


</script>

<button class={`btn w-full px-0 relative flex items-center ${button.colorClasses}`} on:click {...$$restProps}>
    {#if button.companyIcon}
        <CompanyIcons icon={button.companyIcon}/>
        <span class="flex-auto pl-16 pr-8 -ml-16"><slot/></span>
    {:else}
        <span class="flex-auto"><slot/></span>
    {/if}

</button>