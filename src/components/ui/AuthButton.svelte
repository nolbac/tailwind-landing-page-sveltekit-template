<script lang="ts">
	import CompanyIcons from "./images/CompanyIcons.svelte";

    type buttonConfig = {
        name: string,
        companyIcon: string,
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
        }
    ]
    
    const defaultButton = "google";
    export let buttonName: String = defaultButton;

    if (buttonConfigs.find(btn => btn.name === buttonName) === undefined) {
        buttonName = defaultButton;
    }
    
    const button = buttonConfigs.find(btn => btn.name === buttonName) as buttonConfig;


</script>

<button class={`btn px-0  w-full relative flex items-center ${button.colorClasses}`} on:click {...$$restProps}>
    <CompanyIcons icon={button.companyIcon}/>
    <span class="flex-auto pl-16 pr-8 -ml-16"><slot/></span>
</button>