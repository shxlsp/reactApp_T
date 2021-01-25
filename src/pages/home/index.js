import { Component } from 'react';
import "./index.css";
class Home extends Component{
    constructor(props){
      super(props);
      this.state = {
        boxClass: '',
      }
    }

    componentDidMount (){
      setTimeout(() => {
        this.setState({
          boxClass: 'animateTada'
        })
      }, 2300);
    }
  
    render(){
        const { boxClass } = this.state;
      return (
          <div className={`box ${boxClass}`} onClick={this.props.onClick.bind(null, parseInt( Math.random() * 10000 ) )}>
              {this.props.data}
          </div>
      )
    }
  }

export default Home