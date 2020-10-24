import { defineConfig } from 'umi';

export default defineConfig({
  history: {
    type: "hash",
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: "/",
      redirect: "/App/home"
    },
    {
      path: "/App",
      component: "@/layouts",
      routes: [
        {
          path: "/App/home",
          component: "@/pages",
        },
      ]
    },
    {
      redirect: "/App/home"
    },
  ],
  qiankun: {
    master: {}
  },
});
