import { Navigation } from 'react-native-navigation';

import HomeScreen from './src/home';
import ProfileScreen from './src/profile';

Navigation.registerComponent("codingrevolution.HomeScreen", () => HomeScreen);
Navigation.registerComponent("codingrevolution.ProfileScreen", () => ProfileScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: "codingrevolution.HomeScreen",
    title: "Home"
  }
})