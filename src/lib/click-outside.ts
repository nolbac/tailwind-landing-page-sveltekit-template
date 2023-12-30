/** Dispatch event on click outside of node */

export function clickOutside(node: Node) {
	const handleClick = (event: MouseEvent) => {
		if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
			// Added type declaration for `on:clickOutside` in src/additional-svelte-typings.d.ts for no TS warnings
			node.dispatchEvent(new CustomEvent('clickOutside', { detail: node }));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
