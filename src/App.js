import logo from './logo.svg';
import './App.css';
import ReactComponentTransition from 'react-component-transition-in-out';
import Loading from 'react-ui-component-loading';
import { Component } from 'react';
import { useState, useEffect } from 'react';
import Home from "./pages/home/index";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [dataHome, setDataHome] = useState('default');
    useEffect(()=>{
    //didmount
    setTimeout(() => {
      setIsLoading(false);
      setDataHome(123123);
    }, 2000);
  },[])
    return (
    <Loading
      loading={isLoading}
      type="fullscreen"
      size="large"
    >
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Home data={dataHome} onClick={setDataHome}/>
        <TestComponent />
      </header>
    </div>
    
    </Loading>
  );
}

class TestComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      isShow: false,
      isLoading: true,
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 2000);
  }

  changeStatus = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  render(){
    const { isShow, isLoading } = this.state;
    return (
        <div className="box">
          <button onClick={ this.changeStatus }>{isShow? '关闭': '打开'}</button>
          <ReactComponentTransition>
            {isShow && <div>123123123123</div>}
          </ReactComponentTransition>
        </div>
    )
  }
}

export default App;
