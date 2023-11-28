# cr-static
This website is built using the static site generation option of SvelteKit. Here are some basic instructions for developing and building the files on your local environment.

## create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

### Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

### Deploy to Production
There are several options for deploying the site. The Svelte team has some options that require adapters:

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

Alternatively, you can go with one of the following more manual options:

#### Build locally & FTP
This is the current method for deploying to the Ugly Bunnies preview. Simply run the build script as stated above and then FTP the files to the production server using the FTP client of your choice.

#### Build On the Server
This method would require that the live server has the Node and SveltKit dependencies installed. Then you can build the project as previously described. You will also have to either edit the svelte.config.js file to build directly to the server's public html directory, or move the files from the build directory to the public directory.