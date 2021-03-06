import * as React from 'react';
import { render } from 'react-dom';
import { init, AppExtensionSDK, SidebarExtensionSDK } from 'contentful-ui-extensions-sdk';
import '@contentful/forma-36-react-components/dist/styles.css';
import './index.scss';
import App from './App';

import standalone from './standalone';

if (window.location.search) {
  standalone(window);
} else {
  init(sdk => {
    render(
      <App sdk={sdk as AppExtensionSDK | SidebarExtensionSDK} />,
      document.getElementById('root')
    );
  });
}
