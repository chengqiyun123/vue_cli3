import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import loading from '@/components/Loading'
import myloading from '@/components/customLoading/cloading.vue'

import http from '@/utils/http'

Vue.config.productionTip = false

//全局loading插件
Vue.use(loading,{
  parent: '',
  loading: myloading
})

//基于axios封装http请求插件
Vue.use(http)


new Vue({
  router,
  store,
  render: h => h(App),
  mounted(){
    this.$http.get('/store/admittance').then(res =>{
      console.log(res)
    })
  }
}).$mount('#app')
