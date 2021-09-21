import { defineConfig } from 'umi';

console.log('=========block');

export default defineConfig({
  define: {
    'process.env.REACT_APP_ENV': 'block',
  },
});
