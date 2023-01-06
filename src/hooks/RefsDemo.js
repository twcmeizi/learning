import React, { useRef, forwardRef, createRef, useEffect } from 'react'
const Foo = params => {
    // const inputRef = createRef(null);
    const inputRef = useRef(null);
    useEffect(() => {
        console.log(inputRef)
    }, [])
    const onclick = params => {
        inputRef.current.focus();
    }
    return (
        <div>
           <h2>直接使用useRef</h2>
            <input type="text" ref={inputRef} data-id={1}/>
            <button onClick={onclick}>聚焦</button>
        </div>
    )
}
const Foo1 = forwardRef((props, inputRef) => {
    // const inputRef = useRef(null);
    console.log(inputRef)
    const onclick = params => {
        console.log(inputRef)
        inputRef.current.focus();
    }
    useEffect(() => {
        console.log(inputRef)
    }, [])
    return (
        <div>
            <h2>函数组件使用父组件传递的ref</h2>
            <input type="text" ref={inputRef}/>
            <button onClick={onclick}>聚焦</button>
        </div>
    )
})

class Foo2 extends React.Component {
    inputRef = createRef();
    onclick = () => {
        this.inputRef.current.focus();
    }
    render() {
        console.log(this.props)
        return (
            <div>
            <h2>类class组件直接使用useRef</h2>
             <input type="text" ref={this.inputRef}/>
               <button onClick={this.onclick}>聚焦2</button>
        </div>
        )
    }
}
// 这里还是有点不太懂
class Foo3 extends React.Component {
    inputRef = createRef();
    onclick = () => {
        this.inputRef.current.focus();
    }
    render() {
        console.log(this.props)
        return (
            <div>
            <h2>类class组件使用父组件传递的ref</h2>
             <input type="text" ref={this.inputRef}/>
               <button onClick={this.onclick}>聚焦3</button>
        </div>
        )
    }
}
export default function RefsDemo() {
    const fooRef = useRef()
    const onClick = () => {
        console.log(fooRef.current)
        fooRef.current.onclick();
    }
    return (
        <div>

            <Foo/>
            <Foo1 ref={fooRef} />
            <hr/>
             <Foo2  />
             <Foo3  ref={fooRef}/><button onClick={onClick}>父组件对foo3</button>
        </div>
    )
}