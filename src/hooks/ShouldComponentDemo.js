import React, { Component, PureComponent } from 'react';
class ShouldComponentDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            yuangong: {
                name: 'lili',
                age: 20,
                job: 'waiter'
            }
        }
    }
    updateName = () => {
        setInterval(() => {
            this.setState({
                yuangong: {
                    ...this.state.yuangong,
                    job: 'chef'
                }
            })
        }, 1000)
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                yuangong: {
                    ...this.state.yuangong,
                    job: 'chef'
                }
            })
        }, 1000)
        //    this.updateName();
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate',nextProps, nextState,nextProps.yuangong);
     
        if ((nextProps.yuangong&&(nextProps.yuangong.name !== this.state.yuangong.name))||
        (nextProps.yuangong&&(nextProps.yuangong.age !== this.state.yuangong.age))) {
            return true;
        } else {
            return false;
        }

    }
    render() {
        console.log('render...')
        const { name, age, job } = this.state.yuangong
        return (
            <div>
                {name}-{age}-{job}
                {/* <RegularComponent name={this.state.name}></RegularComponent>
                <PureChildComponent name={this.state.name}></PureChildComponent> */}
            </div>
        );
    }
}

export default ShouldComponentDemo;