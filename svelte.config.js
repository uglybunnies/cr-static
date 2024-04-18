import adapter from '@sveltejs/adapter-static';
const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */

const config = {
  kit: {
    adapter: adapter({
        // default options are shown. On some platforms
        // these options are set automatically — see below
        pages: 'build',
        fallback: undefined,
        precompress: false,
        strict: true
    }),
    paths: {
      relative: false,
      base: dev ? '' : '',
    }
  }
}
export default config;