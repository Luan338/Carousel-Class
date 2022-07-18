import React, { Component } from 'react';

export default class Teste1 extends Component {

    state = {
        number: 0
    }



    render() {
        return (
            <>
                <h1>{this.state.mensagem}</h1>
                <button onClick={this.mudanca}>Trocar</button>
            </>
        )
    }
}