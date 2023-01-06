
/*
在class组件中可以使用Consumer来获取值,也可以通过contextType来获取值
在function组件中可以使用Consumer来获取值,也可以通过useContext来获取值
class.contextType=context对象||在class中使用static contextType=context对象,都可以通过this.context来获取值
注意点:Consumer可以有多个,class.contextType只能有一个;
*/ 
import React, { Component ,createContext,useContext} from 'react';
let testContext=createContext({test:'default value'})
let secondContext=createContext({secondcontext:'second context'})
class ContextDemo extends Component {
    render() {
        return (
            <div>
                <testContext.Provider value={{obj:'context value'}}>
                    <secondContext.Provider value={{obj:'second value'}}>
                <Foo></Foo>
                </secondContext.Provider>
                </testContext.Provider>
            </div>
        );
    }
}
export default ContextDemo;

function Foo(){
    return(
        <div>
            foo
            <Bar></Bar>
        </div>
    )
}
function Bar(){
    let obj=useContext(testContext)
    return ( <div>
        {/* <testContext.Consumer>
            {value=>{
                console.log(value);
                return( <div>{value.obj}</div> )
            }}
        </testContext.Consumer> */}
        bar-{obj.obj}
        <Child></Child>
        </div> )
}

class Child extends Component {
    render() {
        var obj=this.context;
        console.log(obj);
        return (
            <div>
child-{obj.obj}
<ChildSecond></ChildSecond>
            </div>
        );
    }
}
Child.contextType=testContext;

class ChildSecond extends Component {
   
static contextType = testContext;
static contextType = secondContext;
    render() {
        console.log(this.context)
        return (
            <div>
                childsecond-{this.context.obj}
            </div>
        );
    }
}




