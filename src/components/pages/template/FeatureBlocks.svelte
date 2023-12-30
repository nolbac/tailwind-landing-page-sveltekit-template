<script lang="ts">
    import IconBadges from "$components/ui/images/IconBadges.svelte";

    type itemCard = {
        title: string,
        description: string,
        icon: string
    };

    let itemCardContent: itemCard[] = [
        {
            title: "Headless CMS",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: "arrows-overlap"
        },
        {
            title: "Headless CMS",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: "wireless"
        },
        {
            title: "Headless CMS",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: "stairs"
        },
        {
            title: "Headless CMS",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: "sparkles"
        },
        {
            title: "Headless CMS",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: "satellite"
        },
        {
            title: "Headless CMS",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: "star-badge"
        },
    ];
</script>

<section class="relative">

   <!-- Section background (needs .relative class on parent and next sibling elements) -->
    <div class="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
    <div class="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">

       <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 mb-4">Explore the solutions</h2>
          <p class="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
        </div>

       <!-- Items -->
        <div class="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

        {#each itemCardContent as item, i}
            <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <IconBadges icon={item.icon}/>
                <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">{item.title}</h4>
                <p class="text-gray-600 text-center">{item.description}</p>
            </div>
        {/each} 
        </div>

      </div>
    </div>
  </section>