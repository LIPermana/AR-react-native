import { Navigation } from 'react-native-navigation';

import Started from './Started';
import Scan from './Scan';
import About from './About';
import How from './How';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('tab.Started', () => Started);
  Navigation.registerComponent('tab.Scan', () => Scan);
  Navigation.registerComponent('tab.About', () => About);
  Navigation.registerComponent('tab.How', () => How);
}
