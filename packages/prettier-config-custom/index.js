/** @type {import("prettier").Config} */
const config = {
	semi: true,
	tabWidth: 2,
	useTabs: false,
	printWidth: 100,
	endOfLine: 'auto',
	singleQuote: true,
	proseWrap: 'always',
	bracketSpacing: true,
	trailingComma: 'all',
	jsxSingleQuote: true,
	arrowParens: 'always',
	plugins: ['prettier-plugin-tailwindcss'],
	tailwindConfig: './tailwind.config.js',
};

module.exports = config;