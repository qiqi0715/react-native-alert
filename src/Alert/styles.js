import { platform } from 'react-native';

const isIOS = platform === 'ios';

export default {
  mask: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.50)',
  },
  container: {
    paddingTop: 18,
    width: 271,
    borderRadius: 12,
    backgroundColor: '#FCFCFC',
  },
  title: {
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 20,
    textAlign: 'center',
    color: '#030303',
  },
  message: {
    marginTop: 6,
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    color: '#030303',
  },
  // button
  row: {
    flexDirection: 'row',
  },
  buttonView: {
    marginTop: 18,
  },
  rowButton: {
    flex: 1,
  },
  lastButton: {
    borderRightWidth: 0,
  },
  button: {
    borderTopWidth: 0.5,
    borderTopColor: '#D9D9DD',
    borderRightWidth: 0.5,
    borderRightColor: '#D9D9DD',
    height: 43.5,
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: isIOS ? '500' : '400',
    fontSize: 17,
    textAlign: 'center',
    color: '#007AFF',
  },
};
