module.exports = {
	env: {
		jest: true,
		node: true,
		browser: true,
	},
	extends: [
		"plugin:react/recommended",
		"plugin:@next/next/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"airbnb",
		"airbnb/hooks",
		"plugin:storybook/recommended",
		"plugin:tailwindcss/recommended",
		"prettier",
	],
	plugins: ["react", "jsx-a11y", "jest", "jest-dom", "testing-library", "@typescript-eslint"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2021,
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	rules: {
		"import/prefer-default-export": "off", // TODO: Remove this rule and fix all imports
		"global-require": "off", // TODO: Remove this rule and fix all require types
		"react/prop-types": "off", // TODO: Remove this rule and fix all prop types
		"import/extensions": "off", // TODO: Remove this rule and fix all imports
		"import/no-unresolved": "off", // TODO: Remove this rule and fix all imports
		"react/react-in-jsx-scope": "off", // TODO: Remove this rule and fix all react imports
		"import/no-import-module-exports": "off", // TODO: Remove this rule and fix all import types
		"consistent-return": "off", // TODO: Remove this rule and fix all return types
		"react/destructuring-assignment": "off", // TODO: Remove this rule and fix all destructuring assignments
		"react/function-component-definition": "off", // TODO: Remove this rule and fix all function components
		"react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".tsx", ".ts"] }],
		"import/no-extraneous-dependencies": ["error", { devDependencies: true }],
		"@typescript-eslint/no-explicit-any": "off", // TODO: Remove this rule and fix all any types
		"@typescript-eslint/no-empty-function": "off", // TODO: Remove this rule and fix all empty functions
		"@typescript-eslint/no-var-requires": "off", // TODO: Remove this rule and fix all require types
	},
};
