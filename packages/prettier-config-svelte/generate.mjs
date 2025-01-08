import { build } from "esbuild";

await build({
    entryPoints: ["index.js"],
    bundle: true,
    outdir: "dist",
    format: "cjs",
    target: "es2020",
});
