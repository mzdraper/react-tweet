import React from 'react';
import loadMapboxAssemblyJs from '@mapbox/mapbox-batfish-helpers/browser/load-mapbox-assembly-js';

// internal dependencies
import Box from '../components/box';
import Textbox from '../components/textbox';
import Username from '../components/username';
import Button from '../components/button';

export default class App extends React.PureComponent {

  componentDidMount() {
    loadMapboxAssemblyJs();
  }

  render() {
    return (
      <div>
        <div className="flex-parent flex-parent--center-main flex-parent--center-cross viewport-full relative">
          <Box>
            <Username />
            <Textbox />
            <Button />
          </Box>
        </div>
      </div>
    );
  }
}
