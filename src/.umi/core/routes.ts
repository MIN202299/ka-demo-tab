// @ts-nocheck
import { ApplyPluginsType, dynamic } from '/project/workspace/node_modules/@umijs/runtime';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: '.umi__plugin-layout__Layout' */'/project/workspace/src/.umi/plugin-layout/Layout.tsx')}),
    "routes": [
      {
        "exact": true,
        "path": "/",
        "redirect": "/home"
      },
      {
        "exact": true,
        "path": "/home",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__home' */'/project/workspace/src/pages/home')}),
        "icon": "project",
        "name": "首页"
      },
      {
        "exact": true,
        "path": "/chart",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__chart' */'/project/workspace/src/pages/chart')}),
        "icon": "areaChart",
        "name": "图表"
      },
      {
        "exact": true,
        "path": "/setting",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__setting' */'/project/workspace/src/pages/setting')}),
        "icon": "control",
        "name": "设置"
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
