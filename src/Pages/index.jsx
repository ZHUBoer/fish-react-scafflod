import React from 'react';
import Index from './Pages/index.jsx'
class Index extends React.Component {
    constructor () {
        super();
        this.state = {
            word:"hello world"
        }
    }
    render () {
        return (
            <div>
                {this.state.word}
            </div>
        )
    }
}
export default Index;