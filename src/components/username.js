import React from 'react';

// internal dependencies

export default class Box extends React.Component {
  render() {
    return (
      <div>
        <div className="flex-child py12 px2">
          <div className="txt-bold">
            Ash Ketchum
          </div>
          <div className="txt-normal">
            @pokemonMaster
          </div>
        </div>
      </div>
    );
  }
}
