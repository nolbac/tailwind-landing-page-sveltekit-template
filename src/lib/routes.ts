type Link = {
	name: string;
	href: string;
	style?: Style;
	icon?: string; // from IconBullets.svelte
};
export type Style = undefined | 'none' | 'blue' | 'black';
export const styles = ['none', 'blue', 'black'];
export const routes: { [id: string]: Link } = {
	home: {
		name: 'Home',
		href: '/'
	},
	about: {
		name: 'About',
		href: '/about'
	},
	signin: {
		name: 'Sign In',
		href: '/signin'
	},
	signup: {
		name: 'Sign Up',
		href: '/signup'
	},
	err404: {
		name: 'Error 404',
		href: '/yippee!😃!'
	}
};

export const navigation = [
	routes.err404,
	routes.signin,
	{ ...routes.signup, style: 'black', icon: 'right-arrow' }
];
