/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/* global window */

import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import RNAlert from '@qiqi715/react-native-alert';
import styles from './styles';

window.alert = RNAlert.alert;

export default class App extends React.Component {
  onShowAlert(options = {}) {
    const { showCancel, showAsk } = options;
    const buttons = [
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed'),
      },
    ];
    if (showCancel) {
      buttons.unshift({
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      });
    }
    if (showAsk) {
      buttons.unshift({
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      });
    }

    window.alert(
      'Alert Title',
      'My Alert Msg',
      buttons,
    );
  }

  renderButton(text, options) {
    return (
      <TouchableOpacity onPress={() => this.onShowAlert(options)} style={styles.button}>
        <Text style={styles.buttonText}>{text }</Text>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        { this.renderButton('1-Button Alert') }
        { this.renderButton('2-Button Alert', { showCancel: true }) }
        { this.renderButton('3-Button Alert', { showCancel: true, showAsk: true }) }
      </View>
    );
  }
}
