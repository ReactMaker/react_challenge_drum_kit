import React, { Component } from 'react';
import drums from './HomeConstants';
import './Home.less';

export default class Home extends Component {

  state = {
    currentKeyCode: 0,
    currentSound: 'boom.wav',
  }

  componentDidMount() {
    window.addEventListener('keydown', this.playSound);
  }

  playSound = (e) => {
    const key = e.keyCode;
    const matchDrum = drums.find(drum => drum.keyCode === key);

    if (matchDrum && Object.keys(matchDrum).length !== 0) {
      this.setState({
        currentKeyCode: key,
        currentSound: matchDrum.sound,
      }, () => {
        const audio = this.audio;
        audio.currentTime = 0;
        audio.play();
      });
    }
  }

  render() {
    const { currentKeyCode, currentSound } = this.state;

    return (
      <div className="keys">
        {drums.map((drum) => {
          const className = `key ${currentKeyCode === drum.keyCode ? 'playing' : ''}`;

          return (
            <div className={className}>
              <kbd>
                {drum.key}
              </kbd>
              <span className="sound">
                {drum.name}
              </span>
            </div>
          );
        })}
        <audio ref={(audio) => { this.audio = audio; }} src={require(`static/sounds/${currentSound}`)} />
      </div>
    );
  }
}
