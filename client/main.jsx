import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App  from '../imports/start/client/App';
import Framework7 from 'framework7/lite-bundle';

// Import F7-React Plugin
import Framework7React from 'framework7-react';

// Init F7-React Plugin
Framework7.use(Framework7React);
Meteor.startup(() => {
  render(<App/>, document.getElementById('react-target'));
});
