<script lang="ts">
    export let error: any;
    import { page } from '$app/stores';
    import { pageMetadata } from '$lib/store';
	pageMetadata.set({
		title: `Error: ${$page.status}`,
		description: `Error: ${$page.error?.message}`
  	});
    console.error(error);

</script>

<div class="error-wrapper">
    <div>
        <h1 class="error-code">{$page.status}</h1>
        <div style="display: inline-block;">
            <h2 class="error-message">Error: {$page.error?.message}</h2>
        </div>
    </div>
</div>
<style>
    .error-wrapper {
        height: 100vh;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .error-code {
        border-right: 1px solid rgba(0,0,0,.3);
        display: inline-block;
        margin: 0px 20px 0px 0px;
        padding: 0px 23px 0px 0px;
        font-size: 24px;
        font-weight: 500;
        vertical-align: top;
        line-height: 49px;
    }
    .error-message {
        font-size: 14px;
        font-weight: 400;
        line-height: 49px;
        margin: 0px;
    }
</style>