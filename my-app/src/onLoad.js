import React from 'react';
import axios from 'axios';

export class QuoteLoad extends React.Component {
    constructor () {
        super ();
        this.state = {
            quote: ''
        } 
        this.onLoad = this.onLoad.bind(this);
    };
    
    onLoad () {
        axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
        .then(response => console.log({quote: response.data}));
    }

    render() {
        return (
            <p>{this.state.quote}</p>
        )
    }
}