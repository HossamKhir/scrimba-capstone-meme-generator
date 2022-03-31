import React, { Component } from 'react';
import './MemeGenerator.css';

class MemeGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: '', bottomText: '', randomImg: 'http://i.imgflip.com/1bij.jpg', allMemeImgs: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((json) => this.setState({ allMemeImgs: json.data.memes }));
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { allMemeImgs } = this.state;
    if (!allMemeImgs) {
      return;
    }
    const rndImage = allMemeImgs[parseInt(Math.random() * allMemeImgs.length, 10)].url;
    this.setState({ randomImg: rndImage });
  }

  render() {
    const { topText, bottomText, randomImg } = this.state;
    return (
      <div>
        <form className='meme-form' onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='topText'
            value={topText}
            placeholder='Top Text'
            onChange={this.handleChange}
          />
          <br/>
          <input
            type='text'
            name='bottomText'
            value={bottomText}
            placeholder='Bottom Text'
            onChange={this.handleChange}
           />
          <br />
          <button>Gen</button>
        </form>
        <div className='meme'>
          <img src={randomImg} alt='meme' />
          <h2 className='top'>{ topText}</h2>
          <h2 className='bottom'>{ bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
