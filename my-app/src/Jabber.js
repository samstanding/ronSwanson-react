import React from 'react';
import axios from 'axios';
import {Button} from './Button';

export class Jab extends React.Component {
    constructor () {
        super();
        this.state= {
            quote: ''
        }
        this.handleClick=this.handleClick.bind(this);
    }
    
    
    handleClick() {
        axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
        .then(response => this.setState({quote: response.data}));
    }
    render() {
        return <div>
            <Button onClick={this.handleClick} />
            <p>{this.state.quote}</p>
            </div>
    }
}