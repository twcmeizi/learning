import React, { Component ,PureComponent} from 'react'
class Reactlife extends Component {
    constructor(props) {
        super(props);
        this.state = {a:1};
        console.log('父组件constructor渲染了')
    }
    componentDidMount(){
        console.log('父组件componentDidMount渲染了');
    }
    static getDerivedStateFromProps(){
        console.log('父组件getDerivedStateFromProps渲染了');
        return {}
    }
    render() {
        console.log('====================================');
        console.log('父组件渲染了',this.state);
        console.log('====================================');
        return (
            <div>
                生命周期函数
                <button onClick={()=>{this.setState({
                    a:3
                })}}>父组件btn</button>
                <ReactlifeChild value={'父组件的默认值'}></ReactlifeChild>
                <ReactlifeChild2></ReactlifeChild2>
            </div>
        );
    }
}

export default Reactlife;

class ReactlifeChild extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             b:2
        }
        console.log('子组件constructor渲染了')
    }
    static getDerivedStateFromProps(){
        console.log('子组件getDerivedStateFromProps渲染了');
        return {}
    }
    componentDidMount(){
        console.log('子组件componentDidMount渲染了');
    }
    render() {
        console.log('====================================');
        console.log("子组件渲染了",this.state);
        console.log('====================================');
        return (
            <div>子组件-{this.props.value}</div>
        );
    }
}
ReactlifeChild.defaultProps={
    value:'这是子组件的默认值'
}
class ReactlifeChild2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             html:"<div>aaa</div>"
        }
        console.log('子组件constructor2渲染了')
    }
    static getDerivedStateFromProps(){
        console.log('子组件2getDerivedStateFromProps渲染了');
        return {a:2}
    }
    componentDidMount(){
        console.log('子组件2componentDidMount渲染了');
    }
    reset(){

    }
    createMarkup(){
        return{__html:this.state.html}
    }
    render() {
        console.log('====================================');
        console.log("子组件2渲染了",this.state);
        console.log('====================================');
        return (
            <div>子组件
               <div dangerouslySetInnerHTML={{__html:"<div>dfsf</div>"}}/>
               <div dangerouslySetInnerHTML={{__html:this.state.html}}/>
               <div dangerouslySetInnerHTML={{__html:this.state.html}}>dfdsf</div>

                <button onClick={this.reset}></button>
            </div>
        );
    }
}

