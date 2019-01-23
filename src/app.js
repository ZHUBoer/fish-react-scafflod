import React from 'react';
import ReactDOM from 'react-dom';
class IndexComponent extends React.Component{
    render(){
        return <h1>hello world!!!</h1>
    }
}
var app = document.getElementById("app");
ReactDOM.render(<IndexComponent/>, app);