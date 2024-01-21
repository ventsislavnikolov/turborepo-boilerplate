export default {
	"./apps/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}": ["pnpm lint", "pnpm prettier:write"],
	"./packages/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}": ["pnpm lint", "pnpm prettier:write"],
};
