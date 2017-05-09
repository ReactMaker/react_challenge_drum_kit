import React, { Component } from 'react';
import Sound from 'react-sound';
import drums from './HomeConstants';
import './Home.less';

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      currentKeyCode: 0,
    };
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
      });
    }
  }

  render() {
    const { currentKeyCode } = this.state;

    return (
      <div className="keys">
        {drums.map((drum) => {
          const className = `key ${currentKeyCode === drum.keyCode ? 'playing' : ''}`;
          const url = require(`static/sounds/${drum.sound}`);
          const playStatus = currentKeyCode === drum.keyCode
            ? Sound.status.PLAYING
            : Sound.status.STOPPED;

          return (
            <div className={className}>
              <kbd>
                {drum.key}
              </kbd>
              <span className="sound">
                {drum.name}
              </span>
              <Sound
                url={url}
                playStatus={playStatus}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
