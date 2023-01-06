/*
useEffect:
会在组件渲染到屏幕之后执行
useEffect 在渲染时是异步执行的,并且要等到浏览器将所有变化渲染到屏幕后才会被执行

在div点击重置count的值为0,但是useEffect中又将其设置为一个随机值
这样相当于value这个状态快速连续变更了两次
1.click setstate(value)
2.虚拟dom 设置到真实的Dom上
3.渲染
4.执行useEffect回调
5.setState(value)
6.虚拟dom 设置到真实的Dom上
7.渲染
*/ 

// import React,{useEffect,useLayoutEffect,useState} from 'react'
// function UseLayoutEffectDemo() {
//    const [count, setCount] = useState(0)
//    useEffect(() => {
//     if(count==0){
//       setCount(20+Math.random()*100)
//     }
//     return () => {
//     };
//    }, [count])
//    console.log(count);
//     return ( 
//     <div>
//      <h2>
//         useEffect 跟 useLayoutEffect的执行差异
//      </h2>
//      cout-{count}
//      <button onClick={()=>{setCount(0)}}>reset</button>
//     </div> )
// }

// export default UseLayoutEffectDemo;

/*
useLayoutEffect
   则是在dom结构更新后,渲染前执行,在渲染时是同步执行,相当于有一个防抖效果
1.click setstate(value)
2.虚拟dom 设置到真实的Dom上
3.执行useLayoutEffect回调
4.setState(value)
5.虚拟dom 设置到真实的Dom上
6.渲染
*/ 
import React,{useEffect,useLayoutEffect,useState} from 'react'
function UseLayoutEffectDemo() {
   const [count, setCount] = useState(0)
   useLayoutEffect(() => {
    if(count == 0){
      setCount(20+Math.random()*100)
    }
    return () => {
    };
   }, [count])
   console.log(count);
    return ( 
    <div>
     <h2>
        useEffect 跟 useLayoutEffect的执行差异
     </h2>
     cout-{count}
     <button onClick={()=>{setCount(0)}}>reset</button>
    </div> )
}

export default UseLayoutEffectDemo;