import { globSync } from "node:fs";
import { defineConfig } from "vite";

import htmlMinifier from "vite-plugin-html-minifier";
import { imageToWebpPlugin } from "vite-plugin-image-to-webp";

const htmlEntries = globSync("./src/*.html").reduce(
	(a, v) => ({ ...a, [v]: v }),
	{},
);

export default defineConfig({
	plugins: [htmlMinifier(), imageToWebpPlugin()],

	base: "",
	root: "src",
	publicDir: "../public",
	build: {
		outDir: "../dist",
		emptyOutDir: true,
		rollupOptions: {
			input: htmlEntries,
		},
	},
});
