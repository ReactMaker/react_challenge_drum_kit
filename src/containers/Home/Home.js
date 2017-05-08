import React, { Component } from 'react';
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
        {drums.map(drum => (
          <div className={`key ${currentKeyCode === drum.keyCode ? 'playing' : ''}`}>
            <kbd>
              {drum.key}
            </kbd>
            <span className="sound">
              {drum.name}
            </span>
          </div>
        ))}
      </div>
    );
  }
}
