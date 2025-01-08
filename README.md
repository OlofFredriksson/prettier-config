# @forsakringskassan/prettier-config

## Installation

`npm install --save-dev @forsakringskassan/prettier-config`

In `package.json`:

```json
{
    "name": "my-cool-library",
    "prettier": "@forsakringskassan/prettier-config"
}
```

You should not have `prettier` installed in your application, this preset bundles it.
If you have in since earlier you can uninstall it:

`npm rm prettier`

### Svelte Config

If you are building a application containg Svelte code use this which package instead:

`npm install --save-dev @forsakringskassan/prettier-config-svelte`

In `package.json`:

```json
{
    "name": "my-svelte-app",
    "prettier": "@forsakringskassan/prettier-config-svelte"
}
```
