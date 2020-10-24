### qiankun issues

[issues](https://github.com/umijs/qiankun/issues/1023)

主应使用嵌套路由，有子应用的资源但未渲染到节点上
```js
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
```

主应不使用嵌套路由 可以正常显示子应用
```js
routes: [
    {
      path: "/",
      component: "@/pages",
    },
  ],
```