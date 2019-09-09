export function debounce(func,delay){
    let timer=null
    return function (...args) {
        if(timer) clearTimeout(timer)
        timer=setTimeout(()=>{
            func.apply(this,args)
            //调用函数
        },delay)
    }
}