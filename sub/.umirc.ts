import { defineConfig } from 'umi';
const packageName = require('./package.json').name;

export default defineConfig({
  history: {
    type: "hash",
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  qiankun: {
    slave: {},
  },
  chainWebpack(memo) {
    memo.merge({
      output: {
        filename: `${packageName}-[name].js`,
      },
    })
  }
});
