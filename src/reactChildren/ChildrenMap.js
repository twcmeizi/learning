import React, { Component } from 'react';
class Child extends Component {
    render() {
        console.log(this.props.children);
        console.log(React.Children.toArray(this.props.children));
        return (
            <div>
              {
                React.Children.forEach(this.props.children,function(v){
                 console.log(v);
                    return <li>{v}</li>
                })
              }
            </div>
        );
    }
}

class ChildrenMap extends Component {
    render() {
        return (
            <div>
                <Child>
                  
                   <p>这是子组件</p>
                    <p>这是子组件</p>
                    文本
                </Child>
            </div>
        );
    }
}

export default ChildrenMap;