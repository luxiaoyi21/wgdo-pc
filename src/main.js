import Vue from 'vue'
import App from './App.vue'
import {
  Input, Form, FormItem, Carousel, CarouselItem, Checkbox, Button, Pagination, Tabs,
  TabPane, Breadcrumb, BreadcrumbItem
} from 'element-ui';
import '@/style.css'
import '@/static/iconfonts/index.css'
import { i18n } from '@/lang/index.js'
import router from '@/router/index.js'
import store from '@/store/index.js'
import 'vant/lib/index.css';
import '@/static/misans/misans.css'
import lazyload from '@/store/lazyload.js'//对应文件

Vue.use(Input).use(Form).use(FormItem).use(Carousel).use(CarouselItem).use(Checkbox).use(Button).use(Pagination).use(Tabs).use(TabPane).use(Breadcrumb).use(BreadcrumbItem)

Vue.config.productionTip = false

Vue.directive('lazyload', lazyload);//懒加载

new Vue({
  router,
  store,
  i18n,
  lazyload,
  render: h => h(App)
}).$mount('#app')