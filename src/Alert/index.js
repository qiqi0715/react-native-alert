/**
*
* Alert Component
*
*/

import React from 'react';
import RootSiblings from 'react-native-root-siblings';

import RNAlert from './Alert';

class Alert extends React.Component {
  static elements = [];

  static alert(title, message, buttons) {
    const props = { title, message, buttons };
    const siblingKey = Alert.elements.length;
    const sibling = new RootSiblings(
      <RNAlert
        {...props}
        siblingKey={siblingKey}
        onDestory={Alert.destory}
      />
    );
    Alert.elements.push(sibling);
  }

  static destory(siblingKey) {
    const sibling = Alert.elements.splice(siblingKey, 1)[0];
    sibling.destroy();
  }

  render() {
    return null;
  }
}

export default Alert;
