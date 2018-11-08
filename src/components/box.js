import React from 'react';

export default class Box extends React.Component {
  render = () => {
    return (
      <div className="flex-child round shadow-darken10 px12 py12 txt-s bg-blue-faint w600">
        {this.props.children}
      </div>
    );
  }
}
