type Link = {
	name: string;
	style?: Style;
	href: string;
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
	}
};

export const navigation = [
	routes.home,
	routes.about,
	routes.signin,
	{ ...routes.signup, style: 'black' }
];
