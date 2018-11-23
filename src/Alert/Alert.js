/**
*
* Alert Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';

import styles from './styles';

class Alert extends React.Component {
  state = {
    scale: new Animated.Value(0.5),
  }
  componentDidMount() {
    const { scale } = this.state;
    Animated.spring(scale, {
      toValue: 1,
      bounciness: 8,
    }).start(() => {});
  }

  onDestorySibling(callback) {
    const { siblingKey, onDestory } = this.props;
    if (callback) callback();
    onDestory(siblingKey);
  }
  getStyle(styleArray) {
    return styleArray.filter((item) => item);
  }

  renderText(text, styleArray) {
    if (!text) return null;
    const textStyle = this.getStyle(styleArray);

    return (
      <Text style={textStyle}>{text}</Text>
    );
  }
  renderButtonArray(buttons) {
    const { length } = buttons;
    const viewStyle = [styles.buttonView];
    if (length <= 2) viewStyle.push(styles.row);

    return (
      <View style={viewStyle}>
        {
          buttons.map((item, index) => this.renderButton(item, index, length))
        }
      </View>
    );
  }
  renderButton(item, index, length) {
    const {
      text, onPress, buttonStyle, textStyle,
    } = item;
    const lastStyle = index === length - 1 ? styles.lastButton : undefined;
    const rowButton = length <= 2 ? styles.rowButton : undefined;
    const newButtonStyle = this.getStyle([styles.button, rowButton, buttonStyle, lastStyle]);

    return (
      <TouchableOpacity
        key={text || index}
        style={newButtonStyle}
        onPress={() => this.onDestorySibling(onPress)}
      >
        { this.renderText(text, [styles.buttonText, textStyle]) }
      </TouchableOpacity>
    );
  }

  render() {
    const {
      title, message, buttons,
      titleStyle, messageStyle,
    } = this.props;
    const { scale } = this.state;

    return (
      <Modal
        transparent
        onRequestClose={() => null}
      >
        <View style={styles.mask}>
          <Animated.View
            style={[
              styles.container,
              { transform: [{ scale }] },
            ]}
          >
            { this.renderText(title, [styles.title, titleStyle]) }
            { this.renderText(message, [styles.message, messageStyle]) }
            { this.renderButtonArray(buttons) }
          </Animated.View>
        </View>
      </Modal>
    );
  }
}

Alert.defaultProps = {
  title: undefined,
  message: undefined,
  buttons: [],
  titleStyle: undefined,
  messageStyle: undefined,
  siblingKey: undefined,
  onDestory: () => null,
};

Alert.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  buttons: PropTypes.array,
  titleStyle: PropTypes.object,
  messageStyle: PropTypes.object,
  siblingKey: PropTypes.number,
  onDestory: PropTypes.func,
};

export default Alert;
