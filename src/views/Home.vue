<template>
  <div class="home">
    {{$store.state.test}}
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 @click="openLoading">open loading</h1>
    <h1 @click="closeLoading">close loading</h1>
    <div>
      <input v-validate.string.required.email/>
    </div>
    <p v-for="(x,y) in validErrors" :key="y">{{x}}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data(){
    return {
      test: 'hello',
      valid: /^\d+$/,
      validErrors: {}
    }
  },
  components: {
  },
  methods:{
    openLoading(){
      this.loading = this.$loading()
    }, 
    closeLoading(){
      // this.loading.close()
    }
  },
  mounted(){
    setTimeout(() => {
      this.test = 'hello kitty'
    },1000)

    this.$on('validErrors',data=>{
      console.log(data)
         
    })
  }
}
</script>
