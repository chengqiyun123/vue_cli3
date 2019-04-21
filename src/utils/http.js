/**
 * 基于axios封装http请求插件
 */
import axios from 'axios'

//使用由库提供的配置的默认值来创建实例
let install = axios.create({
    // baseURL: 'http://127.0.0.1:8000',
    timeout: 5000
})

//请求拦截
install.interceptors.request.use((config) => {
    config.headers.authorization = 'test'
    return config
})

//响应拦截器
install.interceptors.response.use((res) => {
    if(res.status === 200){
        return res.data
    }else{
        console.log(res)
    }
},(err) => {
    Promise.reject(err)
})
let httpPlugin = {
    install(Vue){
        // Vue.prototype.$http = install
        //(要操作的对象obj，要设置的属性prop，{描述器describe})
        Object.defineProperty(Vue.prototype, '$http', {
            value: install//任意类型的值
        });
    }
}

export default httpPlugin
