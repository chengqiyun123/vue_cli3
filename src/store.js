import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//定义
    test: "I'm cheng"
  },
  mutations: {//直接修改state，易于做同步操作 
    changeTest(state){//调用使用this.$store.commit('changeTest')
      state.test = 'success cheng'
    }
  },
  actions: {//通过调用mutation来修改state，易于做异步操作
  
  }
})