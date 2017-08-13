import React, {Component} from "react";
import ReactDOM from "react-dom";
import Test from "./components/Test";

// render App
class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return <Test/>;
  }
}

ReactDOM.render(<App/>,document.querySelector(".container"));
