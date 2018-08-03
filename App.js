import { Navigation } from 'react-native-navigation';

import HomeScreen from './src/home';
import ProfileScreen from './src/profile';
import PostsScreen from './src/posts';
import SidedrawerComponent from './src/sidedrawer';

Navigation.registerComponent("codingrevolution.HomeScreen", () => HomeScreen);
Navigation.registerComponent("codingrevolution.ProfileScreen", () => ProfileScreen);
Navigation.registerComponent("codingrevolution.PostsScreen", () => PostsScreen);
Navigation.registerComponent("codingrevolution.SidedrawerComponent", () => SidedrawerComponent);

Navigation.startSingleScreenApp({
  screen: {
    screen: "codingrevolution.HomeScreen",
    title: "Home"
  }
})

