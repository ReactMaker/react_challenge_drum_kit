import React, { Component } from 'react';
import drums from './HomeConstants';
import './Home.less';

export default class Home extends Component {
  render() {
    return (
      <div className="keys">
        {drums.map(drum => (
          <div className="key">
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
