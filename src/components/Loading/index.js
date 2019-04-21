import Loading from './Loading.vue';
import Vue from 'vue'

//使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
let LoadingConstructor = Vue.extend(Loading);

LoadingConstructor.prototype.close = function(){
    this.visiable = false;
}
function createLoading(option){
    let parent=option.parent || document.body;
    let { loading } = option; 
    //组件的实例
    let instance = new LoadingConstructor({
        el: document.createElement('div'),
        data(){
            return {
                loading
            }
        }
    })
    //loading动画离开之后调用的事件
    instance.$on('afterLeave',() => {
        //可能动画还没有准备好，so加一个延时器
        setTimeout(()=>{
            //销毁这个实例
            instance.$destroy()
            //删除dom节点
            instance.$el.parentNode.removeChild(instance.$el)
        },100)
    })
    //将loading追加到页面上
    parent.appendChild(instance.$el)
    //dom渲染完成的回调
    Vue.nextTick(()=>{
        instance.visiable = true;
    })
    return instance
}

export default (Vue,option) =>{
    Vue.prototype.$loading = () =>{
        return createLoading(option)
    }
}