/** @format */

import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/components/screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Started',
      screen: 'tab.Started', // this is a registered name for a screen
      icon: require('./src/Icon/Scan.png'),
      title: 'Started',
      navigatorStyle: {
        navBarHidden: true
      }
    },
    {
      label: 'Scan',
      screen: 'tab.Scan', // this is a registered name for a screen
      icon: require('./src/Icon/Scan.png'),
      title: 'Scan',
      navigatorStyle: {
        navBarHidden: true
      }
    },
    {
      label: 'About',
      screen: 'tab.About',
      icon: require('./src/Icon/About.png'),
      title: 'About',
      navigatorStyle: {
        navBarHidden: true
      }
    },
    {
      label: 'How To Use',
      screen: 'tab.How', // this is a registered name for a screen
      icon: require('./src/Icon/How.png'),
      title: 'How To Use',
      navigatorStyle: {
        navBarHidden: true
      }
    },
  ]
});
