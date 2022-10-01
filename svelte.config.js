import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: preprocess(),
  kit: {
    // https://www.npmjs.com/package/@sveltejs/adapter-static
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false
    }),
    trailingSlash: 'always',
  }
};
