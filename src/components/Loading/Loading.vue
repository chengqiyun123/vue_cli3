<template>
    <transition @after-leave="afterLeave">
        <div name='loading' class="loading-mask" v-show="visiable">
            <component :is="loading" class="loading-wrap"></component>
            <div v-if="!loading" class="loading-wrap">loading...</div>
        </div>
    </transition>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            visiable: false
        }
    },
    computed:{

    },
    methods:{
        afterLeave(){
            this.$emit('afterLeave')
        }
    },
    created(){
        
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .loading-enter{
        opacity: 0;
    }
    .loading-enter-to{
        opacity: 1;
    }
    .loading-enter-active,.loading-leave-active{
        transition: opacity 2s linear;
    }
    .loading-mask{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.6);
        .loading-wrap{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate3d(-50%,-50%,0);
            padding: 50px;
            align-items: 100%;
            border-radius: 10px;
            background: #fff;
        }
    }
    
</style>