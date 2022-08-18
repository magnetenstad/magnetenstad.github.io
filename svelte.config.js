import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    // https://www.npmjs.com/package/@sveltejs/adapter-static
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    trailingSlash: 'always',
    prerender: {
      default: true
    }
  }
};

export default config;
