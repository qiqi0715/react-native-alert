# React Native Alert

### Demo
![alt text](http://res.cloudinary.com/qiqi715/image/upload/c_scale,w_280,h_500/v1505042954/react-native-alert/ios-alert)   ![alt text](http://res.cloudinary.com/qiqi715/image/upload/c_scale,w_280,h_500/v1505042954/react-native-alert/android-alert)

## Getting Started

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Props](#props)

### Installation
```bash
$ npm i @qiqi715/react-native-alert --save
```

### Basic Usage
```jsx
RNAlert.alert(
  'Alert Title',
  'My Alert Msg',
  [
    {
      text: 'Ask me later',
      onPress: () => console.log('Ask me later pressed'),
    },

    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
    },
    {
      text: 'OK',
      onPress: () => console.log('OK Pressed'),
    },
  ],
);
```

### Methods

#### alert()
```
static alert(title: string, [message]: string, buttonsArray)
```

| Prop                     | Type      | Description                                    | Default |
| :----------------------- | :-------: | :--------------------------------------------: | :------ |
| title                    | `string`  | Title text to display                          | -  |
| message                  | `string`  | Message text to display                        | -  |
| buttonsArray               | `array`  | an array of buttons, each button should include a `text` key, as well as optional `onPress` and `style` keys            | []    |

#### buttonsArray's each button

| Prop                   | Type     | Description                  | Default |
| :--------------------- | :------: | :--------------------------: | :------ |
| text           | `string` | text of button   | -       |
| onPress          | `func` | Action to perform when button is pressed  | -       |
| style  | `object` | button style            | -       |

## MIT Licensed

Released under the [Mit License](https://opensource.org/licenses/MIT)
