import React, { Component } from 'react'
class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    // componentDidCatch(error, errorInfo) {
    //     console.log(error,errorInfo)
    //   // Catch errors in any components below and re-render with error message
    //   this.setState({
    //     error: error,
    //     errorInfo: errorInfo
    //   })
    //   // You can also log error messages to an error reporting service here
    // }
    static getDerivedStateFromError(error) {
        console.log(error)
        // 更新 state 使下一次渲染能够显示降级后的 UI
        return { hasError: true };
      }
      
    
    render() {
        console.log(this.state)
      if (this.state.errorInfo) {
        // Error path
        return (
          <div>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
      // Normally, just render children
      return <><button onClick={()=>{ throw new Error('这是自身错误')}}>抛出异常</button><br />{this.props.children}</> ;
    }  
  }
  class ErrorBoundary2 extends Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
        console.log(error,errorInfo)
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
      // You can also log error messages to an error reporting service here
    }
    
    render() {
      if (this.state.errorInfo) {
        // Error path
        return (
          <div>
            <h2>Something went wrongfffffffffffffffffffffffff.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
      // Normally, just render children
      return <><button onClick={()=>{ throw new Error('这是自身错误')}}>抛出异常</button><br />{this.props.children}</> ;
    }  
  }
  class BuggyCounter extends Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
      this.setState(({counter}) => ({
        counter: counter + 1
      }));
    }
    
    render() {
      if (this.state.counter === 5) {
        // Simulate a JS error
        throw new Error('I crashed!');
      }
      return <>
      <h1 onClick={this.handleClick}>{this.state.counter}</h1>
      <button onClick={()=>{
        throw new Error('子组件事件异常')
      }}>子组件事件处理抛出异常</button>
      </>;
    }
  }
  class ErrorBound extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
        <p>
          <b>
            This is an example of error boundaries in React 16.
            <br /><br />
            Click on the numbers to increase the counters.
            <br />
            The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
          </b>
        </p>
        <hr />
        <ErrorBoundary>
          <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
          <ErrorBoundary2><BuggyCounter /></ErrorBoundary2>
          <BuggyCounter />
        </ErrorBoundary>
        <hr />
        <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
        <ErrorBoundary><BuggyCounter /></ErrorBoundary>
        <ErrorBoundary><BuggyCounter /></ErrorBoundary>
      </div>
        );
    }
  }
  
  export default ErrorBound;
  
  
