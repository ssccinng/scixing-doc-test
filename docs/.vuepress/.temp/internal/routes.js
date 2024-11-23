export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/dani.html", { loader: () => import(/* webpackChunkName: "dani.html" */"G:/CSharpDev/work/scixing-doc/scixing-doc/docs/.vuepress/.temp/pages/dani.html.js"), meta: {"title":"龙鳞"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"G:/CSharpDev/work/scixing-doc/scixing-doc/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"G:/CSharpDev/work/scixing-doc/scixing-doc/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"G:/CSharpDev/work/scixing-doc/scixing-doc/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
