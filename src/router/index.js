import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// router방식으로 등록하는 방식은 페이지 단위로 호출할때
// @ = 절대경로
import DataBinding from '@/views/DataBinding.vue';
import ListBinding from '@/views/ListBinding.vue';
import IfBinding from '@/views/IfBinding.vue';
import OnEvent from '@/views/OnEvent.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 동적으로 임포트하는 방법 (사용자가 요청하는 순간에 모듈을 땡겨옴)
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path : '/dataBinding',
    name : 'dataBind',
    component : DataBinding
  },
  {
    path : '/listBinding',
    name : 'listBind',
    component : ListBinding
  },
  {
    path : '/ifBinding',
    name : 'ifBind',
    component : IfBinding
  },
  {
    path : '/onEvent',
    name : 'onEvent',
    component : OnEvent
  }
]

const router = createRouter({
  // 뒤로가기 (액션에 따른 history 선택)
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// module.exports = router => require()
// 아래 방식으로하면 import를 사용해서 모듈를 불러옴
export default router
