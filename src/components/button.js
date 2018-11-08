import React from 'react';
import ControlFile from '@mapbox/mr-ui/control-file';

import {
  clickTweetButton
} from '../../scripts/util';

export default class Box extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      previewUrl: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(filesArray) {
    console.log(filesArray);
    const url = URL.createObjectURL(filesArray[0]);
    this.setState({ previewUrl: url });
  }

  onClickingTweetButton = () => {
    clickTweetButton();
  };

  render() {
    return (
      <div>
        <div className='flex-parent flex-parent--space-between-main pt12'>
          <div className='flex-child'>
            <ControlFile
              id="name"
              initialDisplayValue="Add Photo"
              themeControlFile="btn"
              type="file"
              onChange={this.handleChange}
            />
          </div>
          <div className='flex-child'>
            <button
              className='btn'
              onClick={this.onClickingTweetButton}>
            Tweet
            </button>
          </div>
        </div>
        <div className='pt24'>
          <img src={this.state.previewUrl} />
        </div>
      </div>
    );
  }
}
