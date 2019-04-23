import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/common.css'

import loading from '@/components/Loading'
import myloading from '@/components/customLoading/cloading.vue'

import http from '@/utils/http'

import Validator from '@/plugins/validator'

Vue.config.productionTip = false

//全局loading插件
Vue.use(loading,{
  parent: '',
  loading: myloading
})

//基于axios封装http请求插件
Vue.use(http)

//自定义指令插件
Vue.use(Validator,{
  triggerEvent: 'blur',
  errorClass: 'valid-error',//验证失败的样式
  successClass: 'valid-success',
  customValidRules: [{
    modifier: 'email',
    msg: 'value msut be type email',
    validFn(value){
      return /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(value) 
    }
  }]
})

new Vue({
  router,
  store,
  render: h => h(App),
  mounted(){
    // this.$http.get('/store/admittance').then(res =>{
    //   console.log(res)
    // })
  }
}).$mount('#app')
