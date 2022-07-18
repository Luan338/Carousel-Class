import React, { Component } from 'react';
import Bebendo from './assets/bebendo.jpg';
import Casa from './assets/eudnv.jpg';
import Milico from './assets/eupo.jpg';
import Jogos from './assets/image.jpg';
import './App.css';
import Teste1 from './Teste1/Teste1';

export default class Carousel extends Component {

  state = {
    imagens: [
      Bebendo,
      Casa,
      Milico,
      Jogos
    ],
    id: 0
  }

  antes = () => {

    if (this.state.id > 0)
      this.setState({
        id: this.state.id - 1
      })
  }

  dps = () => {
    if (this.state.id < this.state.imagens.length - 1)
      this.setState({
        id: this.state.id + 1
      })
  }

  render() {
    return (
      <>
        <section>
          <img src={this.state.imagens[this.state.id]} alt="Imagens" />
          <div className='btns'>
            <button onClick={this.antes}>Anterior</button>
            <button onClick={this.dps}>Depois</button>
          </div>
        </section>
        <Teste1 />
      </>
    )
  }
}