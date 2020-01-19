import Vue from 'vue'
import App from './App.vue'
import router from './router'
import slowScroll from './components/SlowScroll'
import circleImg from './components/Circle-Img'
import squareImg from './components/Square-Img'
import fullScreenImg from './components/Full-Screen-Img'
import titleBar from './components/Title-Bar'
import imgScroller from './components/Img-Scroller'
import imgList from './components/Img-List'
import slideShow from './components/Slide-Show'
import infoPage from './views/Info'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false
Vue.component('slow-scroll', slowScroll)
Vue.component('circle-img', circleImg)
Vue.component('square-img', squareImg)
Vue.component('full-screen-img', fullScreenImg)
Vue.component('title-bar', titleBar)
Vue.component('img-scroller', imgScroller)
Vue.component('img-list', imgList)
Vue.component('slide-show', slideShow)
Vue.component('info-page', infoPage)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
