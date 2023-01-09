import React, { Component ,PureComponent} from 'react';
class RegularComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        console.log('RegularComponent render...')
        return (
            <div>{this.props.name}</div>
        );
    }
}
class PureChildComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        console.log('PureChildComponent render...')
        return (
            <div>{this.props.name}</div>
        );
    }
}




class PureComponetDemo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"lili"
        }
    }
    updateName=()=>{
        setInterval(()=>{
            this.setState({
                name:'lili'
            })
        },1000)
    }
    componentDidMount(){
    //    this.updateName();
    }
    render() {
        // console.log('render...')
        return (
            <div>
                {this.state.name}
                <RegularComponent name={this.state.name}></RegularComponent>
                <PureChildComponent name={this.state.name}></PureChildComponent>
            </div>
        );
    }
}

export default PureComponetDemo;