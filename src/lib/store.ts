import { writable } from 'svelte/store';

export const pageMetadata = writable({
	title: 'Default Title',
	description: 'Default Description'
});
