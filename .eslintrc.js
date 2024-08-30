module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prisma'],
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prisma/recommended'],
	rules: {
		// You can add custom rules here
	},
};
