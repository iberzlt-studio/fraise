/* eslint-disable */
function index() {
  return import(/* webpackChunkName: "index" */ 'pages/index.vue')
}

export default [
  {
    name: 'index',
    path: '',
    component: index,
  },
]
