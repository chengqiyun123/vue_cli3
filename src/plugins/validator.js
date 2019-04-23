/**
 * 错误信息会自动添加到validError对象上
 */
let validator = (Vue, options)=>{
    let { triggerEvent, 
          errorClass, 
          successClass, 
          customValidRules } = options
    let defaultModifierslist = [{
            modifier: 'string',
            msg: 'value msut be type string',
            validFn(value){
                return typeof value === 'string'
            }
        },{
            modifier: 'number',
            msg: 'value msut be type number',
            validFn(value){
                return /^\d+$/.test(value)
            }
        },{
            modifier: 'required',
            msg: 'item required',
            validFn(value){
                return value != '' && value != null && value != undefined
            }
        }]
    let finalModifiers = defaultModifierslist.concat(customValidRules)
    let eventHandle = function(el, binding, vnode){
        let { modifiers } = binding;
        let res = Object.keys(modifiers).map(item => {
            //modifiers修饰器
            if(finalModifiers.find(val =>val.modifier === item)){
                let { modifier, msg, validFn } = finalModifiers.find(val =>val.modifier === item);
                return {
                    modifier,
                    msg,
                    bool: validFn(this.value)
                }
            }
            return {
                modifier,
                msg: '不支持该校验字段！',
                bool: false
            }
        })
        let notPass = res.filter(val => val.bool != true)
        if(notPass.length === 0){
            el.classList.add(successClass)
            this.parentNode.removeChild(this.parentNode.querySelector('.hint'))
            // Vue.set(vnode.context.$data.validErrors,item.modifier,{})
        }else{
            el.classList.add(errorClass)
            let p = this.parentNode.querySelector('p')
            if(!p){
                p = document.createElement('p');
                this.parentNode.appendChild(p)
            }
            p.classList.add('hint');
            let str = ''
            notPass.forEach(item => {
                //不能给install去添加，不能给组件根data对象设置
                // vnode.context.$data.validErrors && Vue.set(vnode.context.$data.validErrors,item.modifier,item.msg)
                vnode.context.$emit('validErrors',{modifier:item.modifier,msg:item.msg})
                
                str += item.msg+'|'
            })
            p.innerHTML = str
        }
    }
    
    Vue.directive('validate',{
        bind(el, binding, vnode){
            el.addEventListener(triggerEvent,(modifiers) => {
                eventHandle.apply(el,[el, binding, vnode])
            })
        },
        inserted(){
        // console.log('inserted')
        },
        update(){
        // console.log('updata')
        },
        unbind(el){
            console.log('unbind',el)
            // el.removeEventListener('')
        }
    })
}

export default validator