import React from 'react';

// internal dependencies

export default class Box extends React.Component {
  render() {
    return (
      <div className="txt-em txt-light">
        <textarea placeholder='How many pokemon did you see today?' className='textarea'></textarea>
      </div>
    );
  }
}
