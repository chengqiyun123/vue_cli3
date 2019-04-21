<template>
  <div class="home">
    {{$store.state.test}}
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 @click="openLoading">open loading</h1>
    <h1 @click="closeLoading">close loading</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  methods:{
    openLoading(){
      this.loading = this.$loading()
    },
    closeLoading(){
      this.loading.close()
    }
  },
  mounted(){

  }
}
</script>
